import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { Lang } from "@/lib/types";
import {
  LOADING_COUNTRIES,
  DESTINATION_COUNTRIES,
  TRANSPORT_MODES,
  INCOTERMS,
  labelFor,
  isValidOption,
} from "@/lib/formOptions";
import { renderEmail, escapeHtml } from "@/lib/emailLayout";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_BYTES = 15 * 1024 * 1024;
const ALLOWED_EXT = new Set(["pdf", "jpg", "jpeg", "png", "webp"]);
const FILE_FIELDS = [
  "billOfLading",
  "commercialInvoice",
  "packingList",
  "freightInvoice",
] as const;

const INBOX = process.env.ECTN_INBOX ?? "info@beninbesc.com";
const FROM = process.env.RESEND_FROM ?? "Africa BESC <onboarding@resend.dev>";

const LABELS: Record<Lang, Record<string, string>> = {
  fr: {
    firstName: "Prénom",
    lastName: "Nom",
    companyName: "Société",
    email: "E-mail",
    phone: "Téléphone / WhatsApp",
    origin: "Origine",
    destination: "Destination",
    transportMode: "Mode de transport",
    incoterms: "Incoterms",
    hsCode: "Code SH / HS Code",
    cargoInsurance: "Assurance cargo",
    customsClearance: "Dédouanement à l'arrivée",
    message: "Informations complémentaires",
    yes: "Oui",
    no: "Non",
    none: "—",
    subjectPrefix: "Nouvelle demande de cotation import",
    attachments: "Pièces jointes",
  },
  en: {
    firstName: "First name",
    lastName: "Last name",
    companyName: "Company",
    email: "Email",
    phone: "Phone / WhatsApp",
    origin: "Origin",
    destination: "Destination",
    transportMode: "Transport mode",
    incoterms: "Incoterms",
    hsCode: "HS Code",
    cargoInsurance: "Cargo insurance",
    customsClearance: "Customs clearance on arrival",
    message: "Additional information",
    yes: "Yes",
    no: "No",
    none: "—",
    subjectPrefix: "New import quote request",
    attachments: "Attachments",
  },
};

function ext(name: string): string {
  const i = name.lastIndexOf(".");
  return i >= 0 ? name.slice(i + 1).toLowerCase() : "";
}

function sanitize(name: string): string {
  return name.replace(/[^\w.\-]+/g, "_").slice(-80) || "fichier";
}

function isFileLike(v: FormDataEntryValue | null): v is File {
  return (
    !!v &&
    typeof v === "object" &&
    "arrayBuffer" in v &&
    "name" in v &&
    "size" in v
  );
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "invalid_form" }, { status: 400 });
  }

  const str = (key: string): string => {
    const v = form.get(key);
    return typeof v === "string" ? v.trim() : "";
  };

  if (str("website")) return NextResponse.json({ ok: true }); // honeypot

  const lang: Lang = str("lang") === "en" ? "en" : "fr";
  const L = LABELS[lang];

  const text = {
    firstName: str("firstName"),
    lastName: str("lastName"),
    companyName: str("companyName"),
    email: str("email"),
    phone: str("phone"),
    originCountry: str("originCountry"),
    originCity: str("originCity"),
    destinationCountry: str("destinationCountry"),
    destinationCity: str("destinationCity"),
    transportMode: str("transportMode"),
    incoterms: str("incoterms"),
    hsCode: str("hsCode"),
    message: str("message"),
  };

  const requiredText: (keyof typeof text)[] = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "originCountry",
    "originCity",
    "destinationCountry",
    "destinationCity",
    "transportMode",
    "incoterms",
    "hsCode",
  ];
  const missing = requiredText.filter((k) => !text[k]);
  if (missing.length > 0 || !EMAIL_RE.test(text.email)) {
    return NextResponse.json(
      { error: "validation", fields: missing },
      { status: 422 },
    );
  }

  const optionsValid =
    isValidOption(LOADING_COUNTRIES, text.originCountry) &&
    isValidOption(DESTINATION_COUNTRIES, text.destinationCountry) &&
    isValidOption(TRANSPORT_MODES, text.transportMode) &&
    isValidOption(INCOTERMS, text.incoterms);
  if (!optionsValid) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  if (str("consent") !== "true") {
    return NextResponse.json({ error: "consent_required" }, { status: 422 });
  }

  const insurance = str("cargoInsurance") === "true";
  const customs = str("customsClearance") === "true";

  // Required documents
  const attachments: { filename: string; content: Buffer }[] = [];
  let total = 0;
  for (const field of FILE_FIELDS) {
    const entry = form.get(field);
    if (!isFileLike(entry)) {
      return NextResponse.json({ error: "file_missing", field }, { status: 422 });
    }
    if (!ALLOWED_EXT.has(ext(entry.name))) {
      return NextResponse.json({ error: "file_type", field }, { status: 422 });
    }
    if (entry.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: "file_too_large", field },
        { status: 422 },
      );
    }
    total += entry.size;
    if (total > MAX_TOTAL_BYTES) {
      return NextResponse.json({ error: "total_too_large" }, { status: 422 });
    }
    const content = Buffer.from(await entry.arrayBuffer());
    attachments.push({ filename: `${field}-${sanitize(entry.name)}`, content });
  }

  const originLabel = `${labelFor(LOADING_COUNTRIES, text.originCountry, lang)} — ${text.originCity}`;
  const destLabel = `${labelFor(DESTINATION_COUNTRIES, text.destinationCountry, lang)} — ${text.destinationCity}`;

  const rows: [string, string][] = [
    [L.firstName, text.firstName],
    [L.lastName, text.lastName],
    [L.companyName, text.companyName || L.none],
    [L.email, text.email],
    [L.phone, text.phone],
    [L.origin, originLabel],
    [L.destination, destLabel],
    [L.transportMode, labelFor(TRANSPORT_MODES, text.transportMode, lang)],
    [L.incoterms, labelFor(INCOTERMS, text.incoterms, lang)],
    [L.hsCode, text.hsCode],
    [L.cargoInsurance, insurance ? L.yes : L.no],
    [L.customsClearance, customs ? L.yes : L.no],
    [L.message, text.message || L.none],
  ];

  const subject = `${L.subjectPrefix} — ${text.firstName} ${text.lastName} (${labelFor(
    DESTINATION_COUNTRIES,
    text.destinationCountry,
    lang,
  )})`;

  const attachmentsLine = attachments.map((a) => a.filename).join(", ");
  const textBody =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\n${L.attachments}: ${attachmentsLine}`;

  const htmlBody = renderEmail({
    title: subject,
    rows,
    extraHtml: `<p style="margin-top:18px;color:#40567F">${escapeHtml(
      L.attachments,
    )}: ${escapeHtml(attachmentsLine)}</p>`,
  });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[cotation] RESEND_API_KEY manquant — demande NON transmise.", {
      to: INBOX,
      subject,
      rows,
    });
    return NextResponse.json({ error: "email_not_configured" }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: INBOX,
      replyTo: text.email,
      subject,
      text: textBody,
      html: htmlBody,
      attachments,
    });
    if (error) {
      console.error("[cotation] Erreur Resend:", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[cotation] Exception à l'envoi:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
