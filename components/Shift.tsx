import Reveal from "./Reveal";

const ROWS = [
  {
    old: "Is this a human?",
    next: "Is this a known agent with valid delegated permission?",
  },
  {
    old: "Keep bots out",
    next: "Let legitimate agents into bounded workflows",
  },
  {
    old: "Session-based access",
    next: "Short-lived, request-bound access",
  },
] as const;

export default function Shift() {
  return (
    <section id="shift" className="relative scroll-mt-24 border-t border-white/5 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-[#8cc4ff]">The shift</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
            The web needs an answer beyond “Are you human?”
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-[minmax(0,0.8fr)_auto_minmax(0,1.2fr)] md:items-stretch">
          <Reveal className="rounded-3xl border border-white/5 bg-white/[0.015] p-7">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-white/30">Old web</p>
            <ul className="mt-6 space-y-6">
              {ROWS.map((r) => (
                <li key={r.old} className="text-lg text-white/35 line-through decoration-rose-400/50 decoration-2">
                  {r.old}
                </li>
              ))}
            </ul>
          </Reveal>
          <div aria-hidden className="hidden items-center md:flex">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1086FC]/40 bg-[#1086FC]/10 text-xl text-[#8cc4ff]">
              →
            </span>
          </div>
          <Reveal delay={120} className="glass glow-blue rounded-3xl p-7">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-[#8cc4ff]">Agentic web</p>
            <ul className="mt-6 space-y-6">
              {ROWS.map((r) => (
                <li key={r.next} className="flex gap-3 text-lg font-medium leading-snug text-white">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1086FC] shadow-[0_0_12px_#1086FC]" />
                  {r.next}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
