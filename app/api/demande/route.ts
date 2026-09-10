import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { Lang } from "@/lib/types";
import {
  LOADING_COUNTRIES,
  DESTINATION_COUNTRIES,
  CURRENCIES,
  FREIGHT_PAYMENT_TYPES,
  INCOTERMS,
  labelFor,
  isValidOption,
} from "@/lib/formOptions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_BYTES = 12 * 1024 * 1024;
const MAX_SIGNATURE_BYTES = 2 * 1024 * 1024;
const ALLOWED_EXT = new Set(["pdf", "jpg", "jpeg", "png", "webp"]);

const INBOX = process.env.ECTN_INBOX ?? "info@beninbesc.com";
const FROM = process.env.RESEND_FROM ?? "Africa BESC <onboarding@resend.dev>";

const REQUIRED_FILES = [
  "blDocument",
  "commercialInvoice",
  "exportDeclaration",
  "packingList",
  "freightInvoice",
] as const;
const OPTIONAL_FILES = ["grayCards"] as const;
const ALL_FILES: readonly string[] = [...REQUIRED_FILES, ...OPTIONAL_FILES];

const LABELS: Record<Lang, Record<string, string>> = {
  fr: {
    countryOfLoading: "Pays de chargement",
    destinationCountry: "Pays de destination",
    firstName: "Prénom",
    lastName: "Nom",
    companyName: "Société",
    email: "E-mail",
    phone: "Téléphone / WhatsApp",
    blNumber: "N° de connaissement (BL)",
    currency: "Devise des marchandises",
    freightPayment: "Type de paiement du fret",
    incoterms: "Incoterms",
  },
  en: {
    countryOfLoading: "Country of loading",
    destinationCountry: "Destination country",
    firstName: "First name",
    lastName: "Last name",
    companyName: "Company",
    email: "Email",
    phone: "Phone / WhatsApp",
    blNumber: "Bill of lading number",
    currency: "Currency of goods",
    freightPayment: "Freight payment type",
    incoterms: "Incoterms",
  },
};

function ext(name: string): string {
  const i = name.lastIndexOf(".");
  return i >= 0 ? name.slice(i + 1).toLowerCase() : "";
}

function sanitize(name: string): string {
  return name.replace(/[^\w.\-]+/g, "_").slice(-80) || "fichier";
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c] as string,
  );
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

  // Honeypot: pretend success, drop silently.
  if (str("website")) return NextResponse.json({ ok: true });

  const lang: Lang = str("lang") === "en" ? "en" : "fr";
  const L = LABELS[lang];

  const text = {
    countryOfLoading: str("countryOfLoading"),
    destinationCountry: str("destinationCountry"),
    firstName: str("firstName"),
    lastName: str("lastName"),
    companyName: str("companyName"),
    email: str("email"),
    phone: str("phone"),
    blNumber: str("blNumber"),
    currency: str("currency"),
    freightPayment: str("freightPayment"),
    incoterms: str("incoterms"),
  };

  const requiredText: (keyof typeof text)[] = [
    "countryOfLoading",
    "destinationCountry",
    "firstName",
    "lastName",
    "email",
    "phone",
    "blNumber",
    "currency",
    "freightPayment",
    "incoterms",
  ];
  const missing = requiredText.filter((k) => !text[k]);
  if (missing.length > 0 || !EMAIL_RE.test(text.email)) {
    return NextResponse.json(
      { error: "validation", fields: missing },
      { status: 422 },
    );
  }

  const optionsValid =
    isValidOption(LOADING_COUNTRIES, text.countryOfLoading) &&
    isValidOption(DESTINATION_COUNTRIES, text.destinationCountry) &&
    isValidOption(CURRENCIES, text.currency) &&
    isValidOption(FREIGHT_PAYMENT_TYPES, text.freightPayment) &&
    isValidOption(INCOTERMS, text.incoterms);
  if (!optionsValid) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  if (str("consent") !== "true") {
    return NextResponse.json({ error: "consent_required" }, { status: 422 });
  }

  // Documents -> attachments
  const attachments: { filename: string; content: Buffer }[] = [];
  let total = 0;
  for (const field of ALL_FILES) {
    const entry = form.get(field);
    if (!isFileLike(entry)) {
      if ((REQUIRED_FILES as readonly string[]).includes(field)) {
        return NextResponse.json(
          { error: "file_missing", field },
          { status: 422 },
        );
      }
      continue;
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

  // Signature (PNG data URL)
  const sig = str("signature");
  const sigMatch = sig.match(/^data:image\/png;base64,([A-Za-z0-9+/=]+)$/);
  if (!sigMatch) {
    return NextResponse.json({ error: "signature_required" }, { status: 422 });
  }
  const sigBuffer = Buffer.from(sigMatch[1], "base64");
  if (sigBuffer.length === 0 || sigBuffer.length > MAX_SIGNATURE_BYTES) {
    return NextResponse.json({ error: "signature_invalid" }, { status: 422 });
  }
  attachments.push({ filename: "signature.png", content: sigBuffer });

  // Compose the notification
  const destLabel = labelFor(
    DESTINATION_COUNTRIES,
    text.destinationCountry,
    lang,
  );
  const rows: [string, string][] = [
    [L.countryOfLoading, labelFor(LOADING_COUNTRIES, text.countryOfLoading, lang)],
    [L.destinationCountry, destLabel],
    [L.firstName, text.firstName],
    [L.lastName, text.lastName],
    [L.companyName, text.companyName || "—"],
    [L.email, text.email],
    [L.phone, text.phone],
    [L.blNumber, text.blNumber],
    [L.currency, labelFor(CURRENCIES, text.currency, lang)],
    [L.freightPayment, labelFor(FREIGHT_PAYMENT_TYPES, text.freightPayment, lang)],
    [L.incoterms, labelFor(INCOTERMS, text.incoterms, lang)],
  ];

  const subject =
    lang === "en"
      ? `New ECTN/BESC request — ${text.firstName} ${text.lastName} (${destLabel})`
      : `Nouvelle demande ECTN/BESC — ${text.firstName} ${text.lastName} (${destLabel})`;

  const attachmentsLine = attachments.map((a) => a.filename).join(", ");
  const textBody =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\n${lang === "en" ? "Attachments" : "Pièces jointes"}: ${attachmentsLine}`;

  const htmlBody = `<div style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#152238;font-size:14px;line-height:1.5">
  <h2 style="margin:0 0 12px;font-size:16px">${escapeHtml(subject)}</h2>
  <table style="border-collapse:collapse">
    ${rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 20px 6px 0;color:#40567F;vertical-align:top">${escapeHtml(
            k,
          )}</td><td style="padding:6px 0;font-weight:600">${escapeHtml(v)}</td></tr>`,
      )
      .join("\n    ")}
  </table>
  <p style="margin-top:18px;color:#40567F">${
    lang === "en"
      ? "Documents attached to this email"
      : "Documents joints à cet e-mail"
  }: ${escapeHtml(attachmentsLine)}</p>
</div>`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "[demande] RESEND_API_KEY manquant — demande NON transmise.",
      { to: INBOX, subject, rows, attachments: attachments.map((a) => a.filename) },
    );
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
      console.error("[demande] Erreur Resend:", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[demande] Exception à l'envoi:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
