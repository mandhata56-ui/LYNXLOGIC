/** Escape user-supplied text before placing it in HTML. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Branded HTML acknowledgement sent to whoever submits the contact form.
 * Table-based, inline styles, web-safe font stack — built for email clients.
 * A contained card on a warm-black page: amber accent strip up top, wordmark
 * + mark and company details at the bottom.
 */
export function autoReplyHtml(name: string): string {
  const safeName = escapeHtml(name.trim()) || "there";
  const font = "'Space Grotesk','Helvetica Neue',Arial,sans-serif";
  const bodyFont = "'Helvetica Neue',Arial,sans-serif";

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<title>Thanks for reaching out — LynxLogic</title>
</head>
<body style="margin:0;padding:0;background:#0B0C0A;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0B0C0A;">
<tr>
<td align="center" style="padding:56px 20px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;background:#161714;border:1px solid rgba(244,241,234,0.08);border-top:3px solid #F0A93B;">
<tr>
<td style="padding:44px 44px 40px;">

<!-- eyebrow -->
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:26px;">
<tr>
<td style="vertical-align:middle;padding-right:10px;">
<span style="display:inline-block;width:20px;height:2px;background:#F0A93B;"></span>
</td>
<td style="vertical-align:middle;">
<span style="font-family:${font};font-size:11.5px;letter-spacing:2.5px;text-transform:uppercase;color:#F0A93B;">LynxLogic · Message received</span>
</td>
</tr>
</table>

<!-- heading -->
<h1 style="margin:0 0 20px;font-family:${font};font-size:32px;line-height:1.12;font-weight:700;letter-spacing:-0.6px;color:#F4F1EA;">Thanks for reaching out.</h1>

<!-- body -->
<p style="margin:0 0 16px;font-family:${bodyFont};font-size:16px;line-height:1.65;color:rgba(244,241,234,0.74);">Hi ${safeName},</p>
<p style="margin:0 0 16px;font-family:${bodyFont};font-size:16px;line-height:1.65;color:rgba(244,241,234,0.74);">Your message just reached us &mdash; and it&rsquo;s landed with a small, senior team, not a support queue. Someone who actually does the work will read it properly and reply within <strong style="color:#F4F1EA;font-weight:600;">one business day</strong>.</p>
<p style="margin:0 0 34px;font-family:${bodyFont};font-size:16px;line-height:1.65;color:rgba(244,241,234,0.74);">If it&rsquo;s time-sensitive, simply reply to this email &mdash; it comes straight to us.</p>

<!-- divider -->
<div style="border-top:1px solid rgba(244,241,234,0.10);margin-bottom:26px;"></div>

<!-- logo lockup -->
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
<tr>
<td style="vertical-align:middle;padding-right:11px;">
<img src="https://lynxlogic.ai/apple-icon" width="36" height="36" alt="LynxLogic" style="display:block;border-radius:7px;">
</td>
<td style="vertical-align:middle;">
<span style="font-family:${font};font-size:19px;font-weight:700;letter-spacing:-0.3px;color:#F4F1EA;">LynxLogic</span>
</td>
</tr>
</table>

<!-- tagline -->
<p style="margin:0 0 18px;font-family:${font};font-size:13px;line-height:1.5;color:rgba(240,169,59,0.85);">We find the structure hiding in the noise.</p>

<!-- company details -->
<p style="margin:0;font-family:${bodyFont};font-size:12px;line-height:1.7;color:rgba(244,241,234,0.42);">
Reliant Edge Software Solutions Pvt. Ltd.<br>
9th Floor, Tower C, Logix Cyber Park, Industrial Area Phase 2,<br>
Noida, Gautam Buddha Nagar, Uttar Pradesh 201309, India<br>
<a href="mailto:hello@lynxlogic.ai" style="color:rgba(244,241,234,0.55);text-decoration:none;">hello@lynxlogic.ai</a>
&nbsp;&middot;&nbsp;
<a href="tel:+919650658953" style="color:rgba(244,241,234,0.55);text-decoration:none;">+91 96506 58953</a>
</p>

</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

/** Plain-text fallback for the acknowledgement (for clients that block HTML). */
export function autoReplyText(name: string): string {
  const who = name.trim() || "there";
  return [
    `Hi ${who},`,
    "",
    "Your message just reached us — and it's landed with a small, senior team, not a support queue. Someone who actually does the work will read it properly and reply within one business day.",
    "",
    "If it's time-sensitive, simply reply to this email — it comes straight to us.",
    "",
    "— LynxLogic",
    "We find the structure hiding in the noise.",
    "",
    "Reliant Edge Software Solutions Pvt. Ltd.",
    "9th Floor, Tower C, Logix Cyber Park, Industrial Area Phase 2, Noida, Gautam Buddha Nagar, Uttar Pradesh 201309, India",
    "hello@lynxlogic.ai · +91 96506 58953",
  ].join("\n");
}
