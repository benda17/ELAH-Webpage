"use client";

import { FormEvent, useState } from "react";
import { landingApiUrl } from "@/lib/landing-api";

type Status = "idle" | "saving" | "ok" | "error";

const inputClass =
  "mt-1.5 min-h-[48px] w-full border border-white/20 bg-black/40 px-4 text-[15px] text-white outline-none placeholder:text-white/30 focus:border-elah-blue";

export default function DemoRequestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [goal, setGoal] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    setStatus("saving");

    const requestUrl = landingApiUrl(
      process.env.NEXT_PUBLIC_DEMO_REQUEST_URL,
      "/api/demo/request",
    );

    try {
      const res = await fetch(requestUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          role,
          goal,
          source: "demo_page",
        }),
      });
      let data: { ok?: boolean; error?: string } = {};
      try {
        data = (await res.json()) as typeof data;
      } catch {
        setStatus("error");
        setMessage("Could not submit the request. Try again later.");
        return;
      }
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Could not submit the request. Try again later.");
        return;
      }
      setStatus("ok");
      setName("");
      setEmail("");
      setCompany("");
      setRole("");
      setGoal("");
    } catch {
      setStatus("error");
      setMessage(
        requestUrl.includes("localhost")
          ? "Could not reach the demo API. Locally the founder dashboard must be running on port 3001."
          : "Could not reach the demo API. Please try again later.",
      );
    }
  }

  if (status === "ok") {
    return (
      <div
        className="border border-elah-blue/40 bg-elah-blue/10 px-6 py-8"
        role="status"
      >
        <p className="mono text-[10px] uppercase tracking-[0.16em] text-elah-blue">
          Request received
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white">
          We&apos;ll book a time with you.
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-white/70">
          Expect an email within one business day to schedule a 30-minute
          walkthrough. No deck — we score a real agent path before a tool runs.
        </p>
        <a
          href="https://drive.google.com/file/d/1mFHntfcK0G3sXlwkATMkwZEYge90iL-R/view"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex text-[14px] text-elah-blue underline-offset-2 hover:underline"
        >
          Watch the product walkthrough while you wait
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="demo-name" className="text-[13px] text-white/70">
          Full name
        </label>
        <input
          id="demo-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="demo-email" className="text-[13px] text-white/70">
          Work email
        </label>
        <input
          id="demo-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="demo-company" className="text-[13px] text-white/70">
          Company
        </label>
        <input
          id="demo-company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          maxLength={160}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="demo-role" className="text-[13px] text-white/70">
          Role <span className="text-white/35">(optional)</span>
        </label>
        <input
          id="demo-role"
          name="role"
          type="text"
          autoComplete="organization-title"
          maxLength={120}
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Head of Support, Founder, …"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="demo-goal" className="text-[13px] text-white/70">
          What should we cover? <span className="text-white/35">(optional)</span>
        </label>
        <textarea
          id="demo-goal"
          name="goal"
          rows={3}
          maxLength={500}
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Agent stack, a specific workflow, or a question."
          className="mt-1.5 w-full border border-white/20 bg-black/40 px-4 py-3 text-[15px] text-white outline-none placeholder:text-white/30 focus:border-elah-blue"
        />
      </div>
      <button
        type="submit"
        disabled={status === "saving"}
        className="inline-flex min-h-[48px] w-full items-center justify-center bg-elah-blue px-5 text-[15px] font-semibold text-black transition hover:bg-white disabled:opacity-50"
      >
        {status === "saving" ? "Sending…" : "Request a demo"}
      </button>
      <p className="text-[12px] leading-relaxed text-white/40">
        We reply within one business day to book 30 minutes. We will not add you
        to a list from this form.
      </p>
      {message ? (
        <p className="text-[13px] text-red-400" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
