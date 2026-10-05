import Reveal from "./Reveal";

const EXAMPLES = [
  {
    name: "View tickets",
    body: "An agent reads a customer's own support tickets, and nothing outside that account.",
    action: "ticket.read",
    scope: "customer.own",
    status: "verified",
    tone: "emerald",
    rows: ["#4182 · Invoice export fails", "#4177 · SSO login loop", "#4169 · Add a seat"],
  },
  {
    name: "Open or comment",
    body: "An agent creates a support ticket or adds a comment the customer approved.",
    action: "ticket.create",
    scope: "customer.own · max 5",
    status: "verified",
    tone: "emerald",
    rows: ["Subject: Export to CSV times out", "Priority: normal", "Approved by maya@acme"],
  },
  {
    name: "Change a setting",
    body: "An agent changes one bounded account setting, and only after fresh confirmation.",
    action: "settings.update",
    scope: "notifications.email",
    status: "step_up_required",
    tone: "amber",
    rows: ["Weekly digest: off → on", "Awaiting fresh approval", "Expires in 120s"],
  },
] as const;

export default function Workflows() {
  return (
    <section id="workflows" className="relative scroll-mt-24 border-t border-white/5 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-[#8cc4ff]">Built for protected workflows</p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
            Start inside a B2B SaaS portal, where the action boundary is already clear.
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/60">
            The buyer is the platform that wants useful agents in an authenticated
            account without handing over broad credentials or loosening tenant
            boundaries, consent, or support control.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {EXAMPLES.map((item, i) => (
            <Reveal
              as="li"
              key={item.name}
              delay={i * 100}
              className="group glass relative overflow-hidden rounded-3xl p-2 transition duration-300 hover:-translate-y-1 hover:border-[#1086FC]/40"
            >
              <div className="rounded-[20px] border border-white/5 bg-black/30 p-4">
                <div className="mono flex items-center justify-between text-[10px]">
                  <span className="text-white/40">portal.example.com</span>
                  <span
                    className={`rounded-full border px-2 py-0.5 ${
                      item.tone === "amber"
                        ? "border-amber-300/40 bg-amber-300/10 text-amber-200"
                        : "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.rows.map((row) => (
                    <li key={row} className="rounded-lg bg-white/[0.04] px-3 py-2 text-[12.5px] text-white/70">
                      {row}
                    </li>
                  ))}
                </ul>
                <div className="mono mt-4 grid grid-cols-[4.5rem_1fr] gap-y-1 text-[11px]">
                  <span className="text-white/30">action</span>
                  <span className="text-[#8cc4ff]">{item.action}</span>
                  <span className="text-white/30">scope</span>
                  <span className="text-white/70">{item.scope}</span>
                </div>
              </div>
              <div className="p-4 pt-5">
                <h3 className="text-xl font-semibold tracking-tight text-white">{item.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/55">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
