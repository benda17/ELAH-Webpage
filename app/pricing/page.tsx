import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { SIGNUP_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Pricing · ELAH APACT",
  description: "APACT is free during the beta. Pro and Business plans are coming.",
  alternates: { canonical: "/pricing" },
};

// Mirrors elah-gate/elah_gate/plans.py, where the limits are enforced.
const PLANS = [
  {
    name: "Free beta",
    price: "Free",
    note: "while we're in beta",
    open: true,
    features: [
      "Up to 3 websites",
      "Cloudflare Worker install, no code on your site",
      "Agent report: tasks, loyalty, honesty, who decided",
      "Agent policy at checkout: allow, check or confirm",
    ],
  },
  {
    name: "Pro",
    price: "Coming soon",
    note: "for teams running several sites",
    open: false,
    features: ["Up to 10 websites", "Longer report history", "Email alerts when an agent breaks its task", "Priority support"],
  },
  {
    name: "Business",
    price: "Coming soon",
    note: "for platforms and agencies",
    open: false,
    features: ["Many websites", "Report export and API access", "Custom agent policies per site", "A named contact at ELAH"],
  },
];

export default function PricingPage() {
  return (
    <PageShell
      eyebrow="Pricing"
      title="Free while APACT is in beta."
      lead="Start with the free beta today. Paid plans open later. Join a plan's waitlist from your dashboard and we'll tell you first."
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {PLANS.map((plan) => (
          <li
            key={plan.name}
            className={`flex flex-col rounded-3xl p-7 ${plan.open ? "glass glow-blue" : "border border-line bg-ov/[0.02]"}`}
          >
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-brand-soft">{plan.name}</p>
            <p className={`mt-4 text-3xl font-semibold tracking-tight ${plan.open ? "text-ink" : "text-muted"}`}>{plan.price}</p>
            <p className="mt-1 text-sm text-dim">{plan.note}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3 text-[15px] leading-snug text-ink-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-[11px] text-brand-soft">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={SIGNUP_URL}
              className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-semibold transition ${
                plan.open
                  ? "bg-button text-white hover:bg-brand-hover"
                  : "border border-line-2 text-ink-2 hover:border-dim hover:text-ink"
              }`}
            >
              {plan.open ? "Get started free" : "Join the waitlist"}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-dim">
        Need more than three sites during the beta, or a different install? <a href="/demo" className="text-brand-soft underline underline-offset-2">Talk to ELAH</a>.
      </p>
    </PageShell>
  );
}
