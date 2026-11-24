"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const STEPS = [
  {
    name: "Install",
    body: "Add ELAH's Cloudflare Worker to your domain. It serves ELAH under your own address, so careful agents don't stop at a third-party redirect.",
  },
  {
    name: "Observe",
    body: "A small script reports what visitors do on your pages: link and field names, counts and timings. Never what anyone types.",
  },
  {
    name: "Tell apart",
    body: "People pass silently. Agents are recognised from evidence they don't write themselves: signed agent identities, your bot manager's score, how input arrives.",
  },
  {
    name: "Rebuild",
    body: "The agent's task is rebuilt from what it does: the parameters it writes into links, the filters it sets, the options it picks over others.",
  },
  {
    name: "Test",
    body: "Agent-only forks (an upgrade note, a pre-ticked sharing box) show whether it holds to its user's task under pressure: held, broke, slipped or untested.",
  },
  {
    name: "Check",
    body: "Its honesty: a visitor that claims to be a person while its input says otherwise is caught, and so is input dressed up to look human.",
  },
  {
    name: "Decide",
    body: "Your site gets signed signals and your own policy for each step (allow, check, or a person must confirm). ELAH reports; your site decides.",
  },
] as const;

const CHAIN = [
  "Visitor",
  "What it does",
  "Rebuilt task",
  "Loyalty",
  "Honesty",
  "Signed signals",
  "Your policy",
] as const;

export default function AccessFlow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 2200);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="flow" className="relative scroll-mt-24 overflow-hidden border-t border-line px-6 py-28 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(16 134 252 / var(--hero-glow)), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-[1200px]">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-brand-soft">How ELAH works</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl">
            Watch, rebuild the task, test it. Then your site decides.
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
            ELAH sits in front of your pages. It asks nothing of anyone. It
            works out what each agent was sent to do, and whether it is still
            doing that.
          </p>
        </Reveal>

        <div
          className="mt-16"
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative hidden lg:block">
            <div className="absolute left-[7%] right-[7%] top-6 h-px bg-ov/10" />
            <div
              className="absolute left-[7%] top-6 h-px bg-gradient-to-r from-brand/0 via-brand to-brand-soft transition-all duration-700"
              style={{ width: `${(active / (STEPS.length - 1)) * 86}%` }}
            />
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7 lg:gap-2">
            {STEPS.map((step, i) => {
              const on = i === active;
              const past = i < active;
              return (
                <li
                  key={step.name}
                  onMouseEnter={() => {
                    setPaused(true);
                    setActive(i);
                  }}
                  className="group relative cursor-default"
                >
                  <div className="flex items-center gap-3 lg:flex-col lg:items-center">
                    <span
                      className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-mono text-sm transition-all duration-500 ${
                        on
                          ? "border-brand bg-button text-white shadow-[0_0_30px_rgba(16,134,252,0.8)]"
                          : past
                            ? "border-brand/60 bg-panel text-brand-soft"
                            : "border-line-2 bg-panel-2 text-dim"
                      }`}
                    >
                      {on ? (
                        <span className="absolute inset-0 rounded-full border border-brand [animation:pulseRing_1.6s_ease-out_infinite]" />
                      ) : null}
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={`text-lg font-semibold tracking-tight transition lg:mt-4 ${on ? "text-ink" : "text-muted"}`}>
                      {step.name}
                    </h3>
                  </div>
                  <p
                    className={`mt-3 text-[14px] leading-relaxed transition-all duration-500 lg:text-center lg:text-[13px] ${
                      on ? "text-muted" : "text-dim lg:opacity-0 lg:group-hover:opacity-100"
                    }`}
                  >
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal className="glass mt-16 rounded-3xl p-6 sm:p-8">
          <p className="mono text-[10px] uppercase tracking-[0.2em] text-dim">Trust chain</p>
          <ol className="relative mt-5 flex flex-wrap items-center gap-x-2 gap-y-3 text-[13px]">
            {CHAIN.map((link, i) => (
              <li key={link} className="flex items-center gap-2">
                <span className="rounded-full border border-line-2 bg-sunk px-3.5 py-1.5 text-ink-2">{link}</span>
                {i < CHAIN.length - 1 ? (
                  <span aria-hidden className="relative block h-px w-6 overflow-hidden bg-ov/15">
                    <span
                      className="absolute top-0 h-px w-2 bg-brand-soft"
                      style={{ animation: `flowDot 1.8s linear ${i * 0.3}s infinite` }}
                    />
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-dim">
            Every step is evidence. ELAH signs the signals your site receives, so
            they can&apos;t be altered on the way to your checkout.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
