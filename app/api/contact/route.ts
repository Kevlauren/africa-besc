import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { Lang } from "@/lib/types";
import { renderEmail, escapeHtml } from "@/lib/emailLayout";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INBOX = process.env.ECTN_INBOX ?? "info@beninbesc.com";
const FROM = process.env.RESEND_FROM ?? "Africa BESC <onboarding@resend.dev>";

type Payload = {
  lastName?: unknown;
  firstName?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  lang?: unknown;
  company?: unknown; // honeypot
};

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

const LABELS: Record<Lang, Record<string, string>> = {
  fr: {
    lastName: "Nom",
    firstName: "Prénom",
    email: "E-mail",
    subject: "Sujet",
    message: "Message",
    subjectPrefix: "Nouveau message de contact",
    attachmentsNone: "Aucune",
  },
  en: {
    lastName: "Last name",
    firstName: "First name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    subjectPrefix: "New contact message",
    attachmentsNone: "None",
  },
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot filled -> pretend success, drop silently.
  if (str(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const lastName = str(body.lastName);
  const firstName = str(body.firstName);
  const email = str(body.email);
  const subject = str(body.subject);
  const message = str(body.message);
  const lang: Lang = str(body.lang) === "en" ? "en" : "fr";
  const L = LABELS[lang];

  if (!lastName || !firstName || !subject || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  const rows: [string, string][] = [
    [L.firstName, firstName],
    [L.lastName, lastName],
    [L.email, email],
    [L.subject, subject],
  ];

  const fullSubject = `${L.subjectPrefix} — ${subject}`;

  const textBody =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n${L.message}:\n${message}`;

  const htmlBody = renderEmail({
    title: fullSubject,
    rows,
    extraHtml: `<p style="margin-top:18px;color:#40567F">${escapeHtml(
      L.message,
    )}</p>
  <p style="white-space:pre-wrap;margin-top:4px">${escapeHtml(message)}</p>`,
  });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY manquant — message NON transmis.", {
      to: INBOX,
      subject: fullSubject,
      from: email,
    });
    return NextResponse.json({ error: "email_not_configured" }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: INBOX,
      replyTo: email,
      subject: fullSubject,
      text: textBody,
      html: htmlBody,
    });
    if (error) {
      console.error("[contact] Erreur Resend:", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Exception à l'envoi:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
