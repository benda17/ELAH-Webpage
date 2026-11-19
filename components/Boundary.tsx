import Reveal from "./Reveal";

const PROVES = [
  "Whether a visitor is likely a person or an agent, and why",
  "The task an agent revealed through what it did, part by part",
  "Whether it held to that task when your site pushed back",
  "Whether it was honest about what it is",
  "Who made each decision: the agent alone, or a person",
];

const DOES_NOT = [
  "Read an agent’s private reasoning or its prompt",
  "Ask agents to fill in forms, or show people a puzzle",
  "Keep anything a visitor types",
  "Decide for you: verdicts are evidence, still being tuned in the beta",
];

export default function Boundary() {
  return (
    <section id="boundary" className="relative scroll-mt-24 border-t border-white/5 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-[#8cc4ff]">The product boundary</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
            ELAH reports. Your site decides.
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/60">
            APACT is report-only. Its verdicts were measured on simulated agents
            and are being tuned on real traffic during the free beta.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal className="glass glow-blue rounded-3xl p-7">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-[#8cc4ff]">ELAH shows you</p>
            <ul className="mt-6 space-y-4">
              {PROVES.map((p) => (
                <li key={p} className="flex gap-3 text-[16px] leading-snug text-white">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1086FC]/20 text-[11px] text-[#8cc4ff]">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl border border-white/[0.07] bg-white/[0.015] p-7">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-white/35">ELAH does not claim to</p>
            <ul className="mt-6 space-y-4">
              {DOES_NOT.map((p) => (
                <li key={p} className="flex gap-3 text-[16px] leading-snug text-white/50">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-[11px] text-white/40">–</span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
