import { NextResponse } from "next/server";
import { autoReplyHtml, autoReplyText } from "@/lib/emails";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  /** Honeypot: hidden field that only bots fill in. */
  company?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot tripped → silently accept and drop (don't tip off the bot).
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address." },
      { status: 400 }
    );
  }

  // Config via environment variables — no secret committed:
  //   RESEND_API_KEY           — Resend API key (secret)
  //   CONTACT_TO_EMAIL         — inbox that receives submissions
  //   CONTACT_FROM_EMAIL       — verified sender, e.g. "LynxLogic <noreply@lynxlogic.ai>"
  //   GOOGLE_SHEET_WEBHOOK_URL — optional Apps Script URL that logs a row
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "LynxLogic <onboarding@resend.dev>";
  const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (apiKey && to) {
    // 1) Owner notification — primary. If this fails, surface an error.
    try {
      const res = await sendEmail(apiKey, {
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry from ${name} — LynxLogic`,
        text: `New contact form submission from lynxlogic.ai\n\nName:  ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
      if (!res.ok) {
        console.error("Owner notification failed:", res.status, await res.text());
        return NextResponse.json(
          { ok: false, error: "Couldn't send your message. Please email us directly." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("Owner notification error:", err);
      return NextResponse.json(
        { ok: false, error: "Couldn't send your message. Please email us directly." },
        { status: 502 }
      );
    }

    // 2) Branded acknowledgement to the person who submitted — secondary.
    //    A failure here shouldn't fail the request (the owner already got it).
    try {
      const res = await sendEmail(apiKey, {
        from,
        to: [email],
        reply_to: "hello@lynxlogic.ai",
        subject: "Thanks for reaching out to LynxLogic",
        html: autoReplyHtml(name),
        text: autoReplyText(name),
      });
      if (!res.ok) {
        console.error("Auto-reply failed:", res.status, await res.text());
      }
    } catch (err) {
      console.error("Auto-reply error:", err);
    }
  } else {
    // Email not configured — log so submissions aren't silently lost.
    console.log("Contact form submission (email not configured):", {
      name,
      email,
      message,
    });
  }

  // 3) Log to Google Sheet if configured — tertiary, never fatal.
  if (sheetUrl) {
    try {
      await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error("Sheet log error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
