"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const STEPS = [
  {
    name: "Discover",
    body: "The protected platform declares how it accepts agent access and which scopes it supports.",
  },
  {
    name: "Approve",
    body: "The user or organization approves a narrow task in the platform's consent experience.",
  },
  {
    name: "Delegate",
    body: "A short-lived grant is created for the agent key, target site, tenant, permitted actions, and limits.",
  },
  {
    name: "Sign",
    body: "The agent signs each protected request and presents the grant.",
  },
  {
    name: "Verify",
    body: "ELAH checks signature, issuer, audience, expiry, nonce freshness, scope, resource constraints, action binding, and revocation.",
  },
  {
    name: "Decide",
    body: "The partner applies its own business policy: proceed, require fresh approval, limit, or reject.",
  },
  {
    name: "Revoke",
    body: "The principal or platform can withdraw future access. ELAH records the authorization and the attempted protected action.",
  },
] as const;

const CHAIN = [
  "Principal",
  "Delegated grant",
  "Agent public key",
  "Protected site",
  "Permitted action",
  "Signed request",
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
    <section id="flow" className="relative scroll-mt-24 overflow-hidden border-t border-white/5 px-6 py-28 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(16,134,252,0.4), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-[1200px]">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-[#8cc4ff]">How ELAH works</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
            A grant, a signature, then the platform decides.
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/60">
            ELAH sits where a protected action is about to run. Delegation,
            verification, and the platform’s own decision are the steps that
            carry the trust.
          </p>
        </Reveal>

        <div
          className="mt-16"
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative hidden lg:block">
            <div className="absolute left-[7%] right-[7%] top-6 h-px bg-white/10" />
            <div
              className="absolute left-[7%] top-6 h-px bg-gradient-to-r from-[#1086FC]/0 via-[#1086FC] to-[#8cc4ff] transition-all duration-700"
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
                          ? "border-[#1086FC] bg-[#1086FC] text-white shadow-[0_0_30px_rgba(16,134,252,0.8)]"
                          : past
                            ? "border-[#1086FC]/60 bg-[#0b1630] text-[#8cc4ff]"
                            : "border-white/10 bg-[#0a0d16] text-white/40"
                      }`}
                    >
                      {on ? (
                        <span className="absolute inset-0 rounded-full border border-[#1086FC] [animation:pulseRing_1.6s_ease-out_infinite]" />
                      ) : null}
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={`text-lg font-semibold tracking-tight transition lg:mt-4 ${on ? "text-white" : "text-white/55"}`}>
                      {step.name}
                    </h3>
                  </div>
                  <p
                    className={`mt-3 text-[14px] leading-relaxed transition-all duration-500 lg:text-center lg:text-[13px] ${
                      on ? "text-white/75" : "text-white/35 lg:opacity-0 lg:group-hover:opacity-100"
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
          <p className="mono text-[10px] uppercase tracking-[0.2em] text-white/40">Trust chain</p>
          <ol className="relative mt-5 flex flex-wrap items-center gap-x-2 gap-y-3 text-[13px]">
            {CHAIN.map((link, i) => (
              <li key={link} className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-black/30 px-3.5 py-1.5 text-white/85">{link}</span>
                {i < CHAIN.length - 1 ? (
                  <span aria-hidden className="relative block h-px w-6 overflow-hidden bg-white/15">
                    <span
                      className="absolute top-0 h-px w-2 bg-[#8cc4ff]"
                      style={{ animation: `flowDot 1.8s linear ${i * 0.3}s infinite` }}
                    />
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/50">
            Every link matters. A grant for another site, tenant, agent key,
            action, or time window fails verification.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
