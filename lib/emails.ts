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
 * Table-based, inline styles, web-safe font stack — built for email clients,
 * not browsers. Warm dark brand palette, wordmark + mark, company details
 * small at the bottom.
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
<body style="margin:0;padding:0;background:#0E0F0D;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0E0F0D;">
<tr>
<td align="center" style="padding:56px 24px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">
<tr>
<td style="padding-bottom:24px;">
<span style="font-family:${font};font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:#F0A93B;">LynxLogic</span>
</td>
</tr>
<tr>
<td style="padding-bottom:20px;">
<h1 style="margin:0;font-family:${font};font-size:30px;line-height:1.15;font-weight:700;letter-spacing:-0.5px;color:#F4F1EA;">Thanks for reaching out.</h1>
</td>
</tr>
<tr>
<td style="padding-bottom:16px;">
<p style="margin:0;font-family:${bodyFont};font-size:16px;line-height:1.65;color:rgba(244,241,234,0.72);">Hi ${safeName},</p>
</td>
</tr>
<tr>
<td style="padding-bottom:32px;">
<p style="margin:0;font-family:${bodyFont};font-size:16px;line-height:1.65;color:rgba(244,241,234,0.72);">We&rsquo;ve received your message, and a senior member of the LynxLogic team will get back to you within one business day. If anything&rsquo;s urgent in the meantime, just reply to this email &mdash; it reaches us directly.</p>
</td>
</tr>
<tr>
<td style="border-top:1px solid rgba(244,241,234,0.10);padding-top:28px;">
<table role="presentation" cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:middle;padding-right:11px;">
<img src="https://lynxlogic.ai/apple-icon" width="34" height="34" alt="LynxLogic" style="display:block;border-radius:7px;">
</td>
<td style="vertical-align:middle;">
<span style="font-family:${font};font-size:18px;font-weight:700;letter-spacing:-0.3px;color:#F4F1EA;">LynxLogic</span>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding-top:16px;">
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
    "We've received your message, and a senior member of the LynxLogic team will get back to you within one business day. If anything's urgent in the meantime, just reply to this email — it reaches us directly.",
    "",
    "— LynxLogic",
    "Reliant Edge Software Solutions Pvt. Ltd.",
    "9th Floor, Tower C, Logix Cyber Park, Industrial Area Phase 2, Noida, Gautam Buddha Nagar, Uttar Pradesh 201309, India",
    "hello@lynxlogic.ai · +91 96506 58953",
  ].join("\n");
}
