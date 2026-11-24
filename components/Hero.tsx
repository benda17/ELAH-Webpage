"use client";

import { useEffect, useState } from "react";
import { DavePeek } from "./Dave";
import HeroNewsletterForm from "./HeroNewsletterForm";
import { SIGNUP_URL } from "@/lib/links";

const CHECKS = ["visitor", "task", "forks", "loyalty", "honesty", "decision"] as const;
type Check = (typeof CHECKS)[number];

// What ELAH reports for one visit (the formless gate's signed signals). `stopAt` ends a person's visit early:
// people pass silently, so nothing past the visitor check runs.
type Scenario = {
  visitor: string;
  page: string;
  task: string;
  failAt?: Check;
  stopAt?: Check;
  status: "admit" | "test_further" | "blocked" | "passed_human";
  reason: string;
};

const SCENARIOS: Scenario[] = [
  {
    visitor: "agent · signed",
    page: "/rooms?freeCancellation=1&maxPrice=180",
    task: "refundable · ≤ $180 · 2 guests",
    status: "admit",
    reason: "loyalty held · honest",
  },
  {
    visitor: "person",
    page: "/rooms",
    task: "—",
    stopAt: "visitor",
    status: "passed_human",
    reason: "nothing shown, nothing asked",
  },
  {
    visitor: "agent · unsigned",
    page: "/rooms/royal-suite",
    task: "refundable · ≤ $180",
    failAt: "loyalty",
    status: "blocked",
    reason: "broke_revealed_task",
  },
  {
    visitor: "agent · claims person",
    page: "/checkout",
    task: "monthly plan · 5 seats",
    failAt: "honesty",
    status: "blocked",
    reason: "false_person_claim",
  },
  {
    visitor: "agent · signed",
    page: "/plans?billing=monthly",
    task: "monthly · ≤ $120",
    failAt: "forks",
    status: "test_further",
    reason: "loyalty untested",
  },
];

const STEP_MS = 340;
const HOLD_MS = 3200;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const s = SCENARIOS[index];
  const stopAt = s.failAt
    ? CHECKS.indexOf(s.failAt) + 1
    : s.stopAt
      ? CHECKS.indexOf(s.stopAt) + 1
      : CHECKS.length;
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
    s.status === "admit" || s.status === "passed_human" ? "emerald" : s.status === "test_further" ? "amber" : "rose";
  const badge = {
    emerald: "tone tone-ok",
    amber: "tone tone-warn",
    rose: "tone tone-bad",
  }[tone];

  return (
    <section id="hero" className="noise relative overflow-hidden px-6 pb-24 pt-32 sm:pt-36">
      <div aria-hidden className="grid-fade pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute -right-40 top-10 h-[760px] w-[760px] rounded-full opacity-70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(88,80,236,0.35), transparent 65%)" }}
      />

      <DavePeek />

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
        <div className="animate-slide-up">
          <p className="mono inline-flex max-w-[13.25rem] items-center gap-2.5 rounded-full border border-line-2 bg-ov/[0.04] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.16em] text-brand-soft sm:max-w-none sm:tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-button opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-button" />
            </span>
            ELAH APACT — Free beta
          </p>
          <h1 className="mt-7 max-w-xl text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.35rem]">
            Soon, web browsers will be built for agents.
          </h1>
          <div className="mt-8 max-w-lg space-y-5">
            <p className="text-[1.15rem] leading-snug text-dim sm:text-xl">
              The CAPTCHA question won’t be
              <span className="mt-1 block text-[1.45rem] font-medium text-dim line-through decoration-bad sm:text-[1.7rem]">
                “Are you human?”
              </span>
            </p>
            <p className="text-[1.15rem] leading-snug text-ink sm:text-xl">
              It will be
              <span className="mt-1 block text-balance text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[2rem]">
                “Are you doing what a human requested from you?”
              </span>
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={SIGNUP_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-button px-7 py-3.5 text-[15px] font-semibold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-brand-hover"
            >
              Put APACT on your site
              <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#flow"
              className="inline-flex items-center justify-center rounded-full border border-line-2 bg-ov/[0.03] px-7 py-3.5 text-[15px] font-medium text-ink-2 transition hover:border-dim hover:text-ink"
            >
              See how it works
            </a>
          </div>
          <HeroNewsletterForm />
          <ul className="mono mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-dim">
            <li>Invisible to people</li>
            <li>No questions for agents</li>
            <li>Task · loyalty · honesty</li>
            <li>You decide</li>
          </ul>
        </div>

        <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center lg:mx-0 lg:min-h-[460px] lg:justify-end">
          <div aria-hidden className="absolute left-1/2 top-1/2 hidden aspect-square w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/20 sm:block" />
          <div aria-hidden className="absolute left-1/2 top-1/2 hidden aspect-square w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-line-2 [animation:spin_60s_linear_infinite] sm:block" />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, rgb(16 134 252 / var(--hero-glow)), transparent 65%)" }}
          />

          <aside
            className="glass relative z-10 mt-8 w-full max-w-[340px] rounded-2xl p-4 shadow-card lg:mb-2 lg:mt-36 lg:w-[300px] lg:self-end"
            aria-live="polite"
          >
            <div className="flex items-center justify-between">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-brand-soft">Live screening</p>
              <span className="mono text-[10px] text-dim">{String(index + 1).padStart(2, "0")}/05</span>
            </div>
            <div className="mono mt-3 rounded-lg border border-line bg-sunk px-3 py-2 text-[11px] leading-relaxed">
              <p className="truncate text-ink-2">GET {s.page}</p>
              <p className="text-dim">
                visitor <span className="text-muted">{s.visitor}</span>
              </p>
              <p className="text-dim">
                task <span className="text-brand-soft">{s.task}</span>
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
                          ? "tone tone-ok"
                          : state === "fail"
                            ? tone === "amber"
                              ? "tone tone-warn"
                              : "tone tone-bad"
                            : "bg-ov/5 text-dim"
                      }`}
                    >
                      {state === "ok" ? "✓" : state === "fail" ? (tone === "amber" ? "!" : "×") : "·"}
                    </span>
                    <span className={state === "wait" || state === "skip" ? "text-dim" : "text-muted"}>{c}</span>
                  </li>
                );
              })}
            </ul>
            <div className={`mono mt-3 rounded-lg border px-3 py-2 text-[11px] leading-snug transition-all duration-300 ${done ? badge : "border-line bg-ov/[0.02] text-dim"}`}>
              <p className="font-semibold">{done ? s.status : "watching…"}</p>
              <p className="opacity-75">{done ? s.reason : "\u00a0"}</p>
            </div>
            <p className="mt-2.5 text-[10.5px] leading-snug text-dim">
              Signed evidence for your site. Your policy decides.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
