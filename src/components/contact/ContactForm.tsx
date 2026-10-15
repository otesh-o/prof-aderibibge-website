"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, Mail } from "lucide-react";
import { profileData } from "@/data/profile";

const reasons = [
  "Speaking invitation",
  "Collaboration",
  "Media request",
  "Mentorship",
  "Accreditation or external examination",
  "General enquiry",
];

function reasonFromParam(param: string): string {
  const p = param.toLowerCase();
  if (p.includes("speaking")) return "Speaking invitation";
  if (p.includes("mentorship")) return "Mentorship";
  if (p.includes("accreditation")) return "Accreditation or external examination";
  if (p.includes("collaboration")) return "Collaboration";
  if (p.includes("media")) return "Media request";
  return reasons[0];
}

type Status = "idle" | "sending" | "sent" | "email";

const field =
  "h-11 w-full rounded-xl border border-line bg-transparent px-4 text-sm text-ink placeholder:text-mute transition-colors focus:border-accent focus:outline-none";

export default function ContactForm() {
  const params = useSearchParams();
  const initialReason = reasonFromParam(params.get("reason") ?? "");
  const className = params.get("class") ?? "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    reason: initialReason,
    message: className ? `I would like to register interest in: ${className}.` : "",
    website: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("sending");

    let delivered = false;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.status === 422) {
        setStatus("idle");
        setError("Please check your name, email and message, then try again.");
        return;
      }
      delivered = res.ok;
    } catch {
      delivered = false;
    }

    if (delivered) {
      setStatus("sent");
      return;
    }

    // No delivery endpoint is reachable: hand the message to the visitor's own email app instead.
    const subject = encodeURIComponent(`Website enquiry: ${form.reason}`);
    const body = encodeURIComponent(
      `${form.message}\n\nName: ${form.name}\nEmail: ${form.email}\nOrganisation: ${form.organisation || "-"}`,
    );
    window.location.href = `mailto:${profileData.socialLinks.email}?subject=${subject}&body=${body}`;
    setStatus("email");
  };

  if (status === "sent" || status === "email") {
    return (
      <div className="rounded-xl border border-line p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-8 w-8 text-accent" />
        <h2 className="mt-4 text-lg font-semibold text-ink">
          {status === "sent" ? "Message sent" : "Your email app is ready"}
        </h2>
        <p className="mx-auto mt-2 max-w-[44ch] text-sm leading-relaxed text-mute">
          {status === "sent"
            ? "Thank you. Your message has reached Prof. Aderibigbe's office and will be acknowledged within a few working days."
            : `We have prepared your message in your email app. If it didn't open, write to ${profileData.socialLinks.email} directly.`}
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm((f) => ({ ...f, message: "" }));
          }}
          className="mt-5 inline-flex h-10 items-center rounded-full border border-line px-5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-mute">Name</span>
          <input type="text" required autoComplete="name" value={form.name} onChange={set("name")} className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-mute">Email</span>
          <input type="email" required autoComplete="email" value={form.email} onChange={set("email")} className={field} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-mute">Organisation</span>
          <input
            type="text"
            autoComplete="organization"
            value={form.organisation}
            onChange={set("organisation")}
            className={field}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-mute">Reason</span>
          <select value={form.reason} onChange={set("reason")} className={field}>
            {reasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm text-mute">Message</span>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={set("message")}
          placeholder="Event or topic, dates, audience, and what you would like from him."
          className="w-full resize-y rounded-xl border border-line bg-transparent px-4 py-3 text-sm leading-relaxed text-ink placeholder:text-mute transition-colors focus:border-accent focus:outline-none"
        />
      </label>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-on-accent transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
        >
          {status === "sending" ? (
            "Sending…"
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send message
            </>
          )}
        </button>
        <a
          href={`mailto:${profileData.socialLinks.email}`}
          className="inline-flex items-center gap-1.5 text-sm text-mute transition-colors hover:text-ink"
        >
          <Mail className="h-4 w-4" />
          or email directly
        </a>
      </div>
    </form>
  );
}
