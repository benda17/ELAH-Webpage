"use client";

import { useEffect, useState } from "react";
import { DaveSpot } from "./Dave";

const CHECKS = ["signature", "grant", "audience", "expiry", "nonce", "scope", "revocation"] as const;
type Check = (typeof CHECKS)[number];

type Scenario = {
  agent: string;
  request: string;
  action: string;
  failAt?: Check;
  status: "verified" | "rejected" | "step_up_required";
  reason: string;
};

const SCENARIOS: Scenario[] = [
  {
    agent: "support-agent · acme",
    request: "POST /api/tickets",
    action: "ticket.create",
    status: "verified",
    reason: "scope_ok",
  },
  {
    agent: "unknown · headless",
    request: "POST /api/tickets",
    action: "ticket.create",
    failAt: "grant",
    status: "rejected",
    reason: "no_valid_grant",
  },
  {
    agent: "ops-agent · acme",
    request: "PATCH /api/settings/sso",
    action: "settings.update",
    failAt: "scope",
    status: "step_up_required",
    reason: "fresh_approval_required",
  },
  {
    agent: "support-agent · acme",
    request: "POST /api/tickets",
    action: "ticket.create",
    failAt: "nonce",
    status: "rejected",
    reason: "nonce_reused",
  },
  {
    agent: "billing-agent · acme",
    request: "GET /api/invoices",
    action: "invoice.read",
    failAt: "audience",
    status: "rejected",
    reason: "audience_mismatch",
  },
];

const STEP_MS = 340;
const HOLD_MS = 3200;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const s = SCENARIOS[index];
  const stopAt = s.failAt ? CHECKS.indexOf(s.failAt) + 1 : CHECKS.length;
  const done = step > stopAt;

  useEffect(() => {
    const t = setTimeout(
      () => {
        if (done) {
          setIndex((i) => (i + 1) % SCENARIOS.length);
          setStep(0);
        } else {
          setStep((v) => v + 1);
        }
      },
      done ? HOLD_MS : step === 0 ? 700 : STEP_MS,
    );
    return () => clearTimeout(t);
  }, [step, done]);

  const tone =
    s.status === "verified" ? "emerald" : s.status === "step_up_required" ? "amber" : "rose";
  const badge = {
    emerald: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
    amber: "border-amber-300/40 bg-amber-300/10 text-amber-200",
    rose: "border-rose-400/40 bg-rose-400/10 text-rose-300",
  }[tone];

  return (
    <section id="hero" className="noise relative overflow-hidden px-6 pb-24 pt-32 sm:pt-36">
      <div aria-hidden className="grid-fade pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[760px] w-[760px] rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(16,134,252,0.45), rgba(16,134,252,0.08) 45%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(88,80,236,0.35), transparent 65%)" }}
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
        <div className="animate-slide-up">
          <p className="mono inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[#8cc4ff]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1086FC] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1086FC]" />
            </span>
            ELAH — Verified agent access
          </p>
          <h1 className="mt-7 max-w-xl text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.35rem]">
            Soon, web browsers will be built for agents.
          </h1>
          <div className="mt-8 max-w-lg space-y-5">
            <p className="text-[1.15rem] leading-snug text-white/45 sm:text-xl">
              The CAPTCHA question won’t be
              <span className="mt-1 block text-[1.45rem] font-medium text-white/35 line-through decoration-rose-400/70 sm:text-[1.7rem]">
                “Are you human?”
              </span>
            </p>
            <p className="text-[1.15rem] leading-snug text-white sm:text-xl">
              It will be
              <span className="mt-1 block text-balance text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[2rem]">
                “Are you doing what a human requested from you?”
              </span>
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/demo"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1086FC] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_40px_-8px_rgba(16,134,252,0.8)] transition hover:-translate-y-0.5 hover:bg-[#2a95ff]"
            >
              Talk to ELAH
              <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#flow"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-[15px] font-medium text-white/85 transition hover:border-white/35 hover:text-white"
            >
              See how verification works
            </a>
          </div>
          <ul className="mono mt-12 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-white/40">
            <li>Signed requests</li>
            <li>Delegated grants</li>
            <li>Scoped actions</li>
            <li>Revocable</li>
          </ul>
        </div>

        <div className="relative mx-auto flex w-full max-w-[680px] flex-col items-center sm:flex-row sm:items-end sm:justify-center lg:justify-end">
          <div aria-hidden className="absolute bottom-[4%] left-[11%] hidden aspect-square w-[78%] rounded-full border border-[#1086FC]/20 sm:block" />
          <div aria-hidden className="absolute bottom-[12%] left-[19%] hidden aspect-square w-[62%] rounded-full border border-dashed border-white/10 [animation:spin_60s_linear_infinite] sm:block" />
          <div
            aria-hidden
            className="absolute bottom-[8%] left-1/2 h-[58%] w-[58%] -translate-x-1/2 rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, rgba(16,134,252,0.5), transparent 65%)" }}
          />

          <DaveSpot className="relative w-[340px] sm:w-[480px] lg:w-[560px]" />

          <aside
            className="glass relative z-[45] -mt-6 w-full max-w-[340px] rounded-2xl p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:absolute sm:bottom-8 sm:left-0 sm:mt-0 sm:w-[280px]"
            aria-live="polite"
          >
            <div className="flex items-center justify-between">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#8cc4ff]">Live verification</p>
              <span className="mono text-[10px] text-white/35">{String(index + 1).padStart(2, "0")}/05</span>
            </div>
            <div className="mono mt-3 rounded-lg border border-white/5 bg-black/40 px-3 py-2 text-[11px] leading-relaxed">
              <p className="text-white/85">{s.request}</p>
              <p className="text-white/40">
                agent <span className="text-white/70">{s.agent}</span>
              </p>
              <p className="text-white/40">
                action <span className="text-[#8cc4ff]">{s.action}</span>
              </p>
            </div>
            <ul className="mono mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
              {CHECKS.map((c, i) => {
                const state = i >= step ? "wait" : s.failAt === c ? "fail" : i >= stopAt ? "skip" : "ok";
                return (
                  <li key={c} className="flex items-center gap-1.5">
                    <span
                      className={`inline-flex h-3.5 w-3.5 items-center justify-center rounded-full text-[9px] transition ${
                        state === "ok"
                          ? "bg-emerald-400/20 text-emerald-300"
                          : state === "fail"
                            ? tone === "amber"
                              ? "bg-amber-300/20 text-amber-200"
                              : "bg-rose-400/20 text-rose-300"
                            : "bg-white/5 text-white/20"
                      }`}
                    >
                      {state === "ok" ? "✓" : state === "fail" ? (tone === "amber" ? "!" : "×") : "·"}
                    </span>
                    <span className={state === "wait" || state === "skip" ? "text-white/30" : "text-white/75"}>{c}</span>
                  </li>
                );
              })}
            </ul>
            <div className={`mono mt-3 rounded-lg border px-3 py-2 text-[11px] leading-snug transition-all duration-300 ${done ? badge : "border-white/5 bg-white/[0.02] text-white/30"}`}>
              <p className="font-semibold">{done ? s.status : "verifying…"}</p>
              <p className="opacity-75">{done ? s.reason : "\u00a0"}</p>
            </div>
            <p className="mt-2.5 text-[10.5px] leading-snug text-white/35">
              A result for the platform. Not an execution command.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
