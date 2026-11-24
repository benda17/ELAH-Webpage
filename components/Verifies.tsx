"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CHECKS = [
  {
    name: "Person or agent",
    body: "A verdict with its evidence. People pass without seeing anything.",
    lines: [0, 1],
  },
  {
    name: "The rebuilt task",
    body: "Each part of what its user asked for, with how strong the evidence is.",
    lines: [3, 4],
  },
  {
    name: "Loyalty under pressure",
    body: "Whether it held to that task when your site offered it something else.",
    lines: [5, 6],
  },
  {
    name: "Honesty",
    body: "Whether its claims about itself match the evidence.",
    lines: [7],
  },
  {
    name: "Who decided",
    body: "At each payment or sign-up: the agent alone, or a person.",
    lines: [8],
  },
  {
    name: "Your policy",
    body: "What you allow agents to do, and what a person must confirm.",
    lines: [10, 11],
  },
] as const;

const REQUEST: [string, string][] = [
  ["elah_signals · signed ES256 · 5 min", "text-ink"],
  ["  visitor    agent_likely (signed agent, scripted input)", "text-muted"],
  ["", ""],
  ["  task       refundable · ≤ $180/night · 2 guests", "text-brand-soft"],
  ["  from       freeCancellation=1, maxPrice=180 (made-up link)", "text-dim"],
  ["  forks      upgrade note: ignored · sharing box: unticked", "text-dim"],
  ["  loyalty    held", "text-muted"],
  ["  honesty    consistent (never claimed to be a person)", "text-muted"],
  ["  decision   pay → handed_to_person", "text-muted"],
  ["", ""],
  ["  policy     browse: allow · account: check", "text-dim"],
  ["             pay: confirm", "text-dim"],
];

export default function Verifies() {
  const [active, setActive] = useState<number | null>(null);
  const lit = active === null ? [] : (CHECKS[active].lines as readonly number[]);

  return (
    <section id="verifies" className="relative scroll-mt-24 border-t border-line px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-brand-soft">What you see for each agent</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl">
            Its task, whether it kept to it, and who decided.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <ul className="grid gap-3 sm:grid-cols-2">
            {CHECKS.map((check, i) => (
              <li
                key={check.name}
                onMouseEnter={() => setActive(i)}
                className={`rounded-2xl border p-5 transition-colors duration-300 ${
                  active === i ? "border-brand/60 bg-brand/10" : "border-line bg-ov/[0.025]"
                }`}
              >
                <span className="mono text-[11px] text-brand-soft">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-[17px] font-semibold tracking-tight text-ink">{check.name}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{check.body}</p>
              </li>
            ))}
          </ul>

          <Reveal delay={120} className="glass relative overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-dim">Signals your site receives</p>
              <p className="mono text-[10px] text-dim">hover a check</p>
            </div>
            <pre className="mono overflow-x-auto px-2 py-4 text-[12px] leading-[1.9]">
              {REQUEST.map(([line, color], i) => (
                <div
                  key={i}
                  className={`rounded px-3 transition-colors duration-200 ${
                    lit.includes(i) ? "bg-brand/20 text-ink" : color
                  }`}
                >
                  {line || "\u00a0"}
                </div>
              ))}
            </pre>
            <div className="mono flex items-center justify-between border-t border-line bg-[color-mix(in_srgb,var(--ok)_8%,transparent)] px-5 py-3 text-[12px]">
              <span className="text-ok-ink">✓ recommendation · admit</span>
              <span className="text-dim">your site decides</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
