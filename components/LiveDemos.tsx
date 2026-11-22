import Reveal from "./Reveal";
import { DEMO_BOOKING_URL, DEMO_CRM_URL } from "@/lib/links";

const DEMOS = [
  {
    href: DEMO_BOOKING_URL,
    host: "naviyahu.elahsecurity.com",
    kind: "Hotel booking",
    name: "Naviyahu",
    body: "Search for a room and book it. Send an AI agent to do the same, and APACT rebuilds what it was asked for, tests whether it holds to that, and records who decided to pay.",
    tryIt: "Ask your agent to book a refundable room under $180 a night.",
  },
  {
    href: DEMO_CRM_URL,
    host: "crm.elahsecurity.com",
    kind: "CRM and support",
    name: "ELAH CRM",
    body: "A helpdesk with refunds and account changes. A person goes straight through. An agent asking for a refund is checked, and APACT holds the refund for the account owner.",
    tryIt: "Sign in with the demo account that's filled in, open Support chat and ask for a refund.",
  },
] as const;

export default function LiveDemos() {
  return (
    <section id="live" className="relative scroll-mt-24 border-t border-white/5 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-[#8cc4ff]">See it live</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
            Two demo sites running APACT.
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/60">
            Use them yourself, then send an AI agent. You won&apos;t see APACT; the agent&apos;s run is checked.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {DEMOS.map((demo) => (
            <Reveal key={demo.href}>
              <a
                href={demo.href}
                target="_blank"
                rel="noopener"
                className="group flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-colors duration-300 hover:border-[#1086FC]/60 hover:bg-[#1086FC]/[0.08] sm:p-8"
              >
                <span className="mono text-[11px] uppercase tracking-[0.18em] text-[#8cc4ff]">{demo.kind}</span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{demo.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">{demo.body}</p>
                <p className="mt-4 text-[14px] leading-relaxed text-white/45">
                  <span className="text-white/70">Try it:</span> {demo.tryIt}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-[15px] font-medium text-[#8cc4ff] group-hover:text-white">
                  {demo.host}
                  <span aria-hidden className="transition group-hover:translate-x-0.5">↗</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
