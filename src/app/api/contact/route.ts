import { NextResponse } from "next/server";

interface Payload {
  name?: string;
  email?: string;
  organisation?: string;
  reason?: string;
  message?: string;
  /** Honeypot: real visitors never see or fill this. */
  website?: string;
}

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/**
 * Receives the contact form and forwards it to CONTACT_FORWARD_URL (for example a Formspree or
 * Basin endpoint that emails the professor). With no endpoint configured it answers 503, and the
 * form falls back to opening the visitor's own email app, so a message is never silently lost.
 */
export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Bots fill the hidden field; pretend it worked.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    organisation: clean(body.organisation, 160),
    reason: clean(body.reason, 80),
    message: clean(body.message, 4000),
  };

  if (!data.name || !data.message || !/^\S+@\S+\.\S+$/.test(data.email)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 422 });
  }

  const target = process.env.CONTACT_FORWARD_URL;
  if (!target) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...data, _subject: `Website enquiry: ${data.reason}` }),
    });
    if (!res.ok) return NextResponse.json({ error: "upstream_failed" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "upstream_unreachable" }, { status: 502 });
  }
}
