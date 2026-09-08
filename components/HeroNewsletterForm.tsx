"use client";

import { FormEvent, useState } from "react";
import { landingApiUrl } from "@/lib/landing-api";

export default function HeroNewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "ok" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (!consent) {
      setStatus("error");
      setMessage("Check the box to confirm you want ELAH updates by email.");
      return;
    }

    setStatus("saving");
    const subscribeUrl = landingApiUrl(
      process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIBE_URL,
      "/api/newsletter/subscribe",
    );
    try {
      const res = await fetch(subscribeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent: true, source: "hero" }),
      });
      let data: {
        ok?: boolean;
        error?: string;
        alreadySubscribed?: boolean;
      } = {};
      try {
        data = (await res.json()) as typeof data;
      } catch {
        setStatus("error");
        setMessage("Could not subscribe. Try again later.");
        return;
      }
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Could not subscribe. Try again later.");
        return;
      }
      setStatus("ok");
      setMessage(
        data.alreadySubscribed
          ? "You are already on the list."
          : "You are on the list. We will only email if you opted in.",
      );
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
      setMessage(
        subscribeUrl.includes("localhost")
          ? "Could not reach the newsletter API. Locally the founder dashboard must be running on port 3001."
          : "Could not reach the newsletter API. Please try again later.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-lg space-y-3">
      <p className="mono text-[10px] uppercase tracking-[0.16em] text-white/40">
        Product updates
      </p>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <label className="sr-only" htmlFor="hero-newsletter-email">
          Email
        </label>
        <input
          id="hero-newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="min-h-[48px] flex-1 border border-white/20 bg-black/40 px-4 text-[15px] text-white outline-none placeholder:text-white/30 focus:border-elah-blue"
        />
        <button
          type="submit"
          disabled={status === "saving"}
          className="inline-flex min-h-[48px] items-center justify-center bg-white/10 px-5 text-[15px] font-medium text-white transition hover:bg-white/20 disabled:opacity-50"
        >
          {status === "saving" ? "Saving…" : "Subscribe"}
        </button>
      </div>
      <label className="flex items-start gap-2.5 text-[13px] leading-snug text-white/55">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#00A8FF]"
        />
        <span>
          I agree to receive ELAH product updates by email. Required to join the
          list — we will not add you without this.
        </span>
      </label>
      {message ? (
        <p
          className={
            status === "ok"
              ? "text-[13px] text-elah-blue"
              : "text-[13px] text-red-400"
          }
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
