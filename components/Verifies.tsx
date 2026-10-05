"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CHECKS = [
  {
    name: "Agent identity",
    body: "The request is signed by an identified agent public key.",
    lines: [1, 6],
  },
  {
    name: "Delegated principal",
    body: "A person or organization stands behind the grant.",
    lines: [9],
  },
  {
    name: "Site and tenant binding",
    body: "The grant names this partner site and this tenant.",
    lines: [10, 11],
  },
  {
    name: "Action scope and limits",
    body: "Permitted actions, resources, and optional count, value, or duration limits.",
    lines: [12, 13],
  },
  {
    name: "Freshness and replay protection",
    body: "A short expiry and a nonce, so a captured request cannot be reused.",
    lines: [5, 14],
  },
  {
    name: "Revocation state",
    body: "A withdrawn grant fails before the protected action runs.",
    lines: [8],
  },
] as const;

const REQUEST: [string, string][] = [
  ["POST /api/tickets HTTP/1.1", "text-white"],
  ["Signature-Agent: support-agent.acme.example", "text-white/70"],
  ["Host: portal.example.com", "text-white/50"],
  ["Content-Digest: sha-256=:X48E9q…:", "text-white/50"],
  ["Signature-Input: sig=(\"@method\" \"@path\" \"content-digest\");", "text-white/50"],
  ["  created=1791200400;expires=1791200520;nonce=\"b3k2…\"", "text-white/70"],
  ["Signature: sig=:MEUCIQ…:", "text-white/70"],
  ["", ""],
  ["Agent-Grant: grant_7f3a · status=active", "text-[#8cc4ff]"],
  ["  principal  org_acme / user_maya", "text-white/70"],
  ["  audience   portal.example.com", "text-white/70"],
  ["  tenant     acme", "text-white/70"],
  ["  actions    ticket.read, ticket.create", "text-white/70"],
  ["  resource   customer.own · max 5", "text-white/70"],
  ["  expires    120s", "text-white/70"],
];

export default function Verifies() {
  const [active, setActive] = useState<number | null>(null);
  const lit = active === null ? [] : (CHECKS[active].lines as readonly number[]);

  return (
    <section id="verifies" className="relative scroll-mt-24 border-t border-white/5 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-[#8cc4ff]">What the platform verifies</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
            Bound to this agent, this principal, this action.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <ul className="grid gap-3 sm:grid-cols-2">
            {CHECKS.map((check, i) => (
              <li
                key={check.name}
                onMouseEnter={() => setActive(i)}
                className={`rounded-2xl border p-5 transition-colors duration-300 ${
                  active === i ? "border-[#1086FC]/60 bg-[#1086FC]/10" : "border-white/[0.07] bg-white/[0.025]"
                }`}
              >
                <span className="mono text-[11px] text-[#8cc4ff]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-[17px] font-semibold tracking-tight text-white">{check.name}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white/55">{check.body}</p>
              </li>
            ))}
          </ul>

          <Reveal delay={120} className="glass relative overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-white/40">Signed agent request</p>
              <p className="mono text-[10px] text-white/30">hover a check</p>
            </div>
            <pre className="mono overflow-x-auto px-2 py-4 text-[12px] leading-[1.9]">
              {REQUEST.map(([line, color], i) => (
                <div
                  key={i}
                  className={`rounded px-3 transition-colors duration-200 ${
                    lit.includes(i) ? "bg-[#1086FC]/20 text-white" : color
                  }`}
                >
                  {line || "\u00a0"}
                </div>
              ))}
            </pre>
            <div className="mono flex items-center justify-between border-t border-white/5 bg-emerald-400/[0.06] px-5 py-3 text-[12px]">
              <span className="text-emerald-300">verified · scope_ok</span>
              <span className="text-white/35">platform decides next</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
