import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  // Deliver via Resend. Config lives in environment variables so no secret
  // is ever committed to the repo:
  //   RESEND_API_KEY     — the Resend API key (secret)
  //   CONTACT_TO_EMAIL   — inbox that should receive submissions
  //   CONTACT_FROM_EMAIL — verified sender, e.g. "LynxLogic <noreply@lynxlogic.ai>"
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "LynxLogic <onboarding@resend.dev>";

  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `New enquiry from ${name} — LynxLogic`,
          text: `New contact form submission from lynxlogic.ai\n\nName:  ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        const detail = await res.text();
        console.error("Resend send failed:", res.status, detail);
        return NextResponse.json(
          { ok: false, error: "Couldn't send your message. Please email us directly." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("Resend send error:", err);
      return NextResponse.json(
        { ok: false, error: "Couldn't send your message. Please email us directly." },
        { status: 502 }
      );
    }
  } else {
    // Email not configured yet — log so submissions aren't silently lost.
    console.log("Contact form submission (email not configured):", {
      name,
      email,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
