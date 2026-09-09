import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  lastName?: unknown;
  firstName?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown; // honeypot
};

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

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

  if (
    !lastName ||
    !firstName ||
    !subject ||
    !message ||
    !EMAIL_RE.test(email)
  ) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  // TODO: brancher l'envoi réel ici
  //  - e-mail transactionnel (Resend, SendGrid, SMTP…), et/ou
  //  - création d'un ticket / lead dans votre CRM.
  // Exemple : await sendEmail({ to: "contact@africabesc.com", subject, ... })
  console.log("[contact] nouveau message", {
    firstName,
    lastName,
    email,
    subject,
    length: message.length,
  });

  return NextResponse.json({ ok: true });
}
