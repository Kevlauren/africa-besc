/**
 * Shared HTML shell for the notification e-mails sent by the /api routes.
 *
 * Set EMAIL_LOGO_URL to an absolute URL of a PNG logo (email clients block SVG)
 * to show it in the header, e.g.
 *   EMAIL_LOGO_URL=https://africa-besc.vercel.app/images/logo/logo-email.png
 * When unset, a plain "Africa BESC" wordmark is used instead.
 */

const BRAND = "Africa BESC";
const LOGO_URL = process.env.EMAIL_LOGO_URL ?? "";

export function escapeHtml(value: string): string {
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

function header(): string {
  if (LOGO_URL) {
    return `<img src="${escapeHtml(LOGO_URL)}" alt="${BRAND}" height="32" style="height:32px;width:auto;border:0;display:block" />`;
  }
  return `<span style="font-size:18px;font-weight:700;letter-spacing:-0.3px;color:#152238">${BRAND}</span>`;
}

/** Renders a branded e-mail: logo header, title, a key/value table, optional extra HTML. */
export function renderEmail(opts: {
  title: string;
  rows: [string, string][];
  extraHtml?: string;
}): string {
  const rows = opts.rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 20px 6px 0;color:#40567F;vertical-align:top">${escapeHtml(
          k,
        )}</td><td style="padding:6px 0;font-weight:600">${escapeHtml(v)}</td></tr>`,
    )
    .join("\n    ");

  return `<div style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#152238;font-size:14px;line-height:1.5;max-width:640px">
  <div style="padding-bottom:12px;border-bottom:2px solid #F2A63B;margin-bottom:18px">${header()}</div>
  <h2 style="margin:0 0 12px;font-size:16px">${escapeHtml(opts.title)}</h2>
  <table style="border-collapse:collapse">
    ${rows}
  </table>
  ${opts.extraHtml ?? ""}
</div>`;
}
