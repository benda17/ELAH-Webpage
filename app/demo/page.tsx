import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import DemoRequestForm from "@/components/DemoRequestForm";

export const metadata: Metadata = {
  title: "Request a demo | ELAH",
  description:
    "Book a 30-minute walkthrough of ELAH intent scoring before tool execution. Tell us who you are — we will schedule a time.",
  alternates: { canonical: "/demo" },
};

const POINTS = [
  {
    title: "30 minutes, live product",
    body: "We score a real agent path before a tool runs. Not a slide deck.",
  },
  {
    title: "Fit for your stack",
    body: "Bring the workflow you care about — support, CRM, or another agentic path.",
  },
  {
    title: "No obligation",
    body: "We reply within one business day to pick a time. Policy stays with you; ELAH never allows, blocks, or executes.",
  },
];

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="relative overflow-hidden px-6 pb-24 pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 85% 10%, rgba(0,168,255,0.14), transparent 55%)",
          }}
        />
        <div className="relative z-10 mx-auto grid w-full max-w-[1080px] items-start gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-elah-blue">
              Request a demo
            </p>
            <h1 className="mt-4 max-w-lg text-[2.4rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
              See intent scored before the tool runs.
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/70">
              Tell us who you are. We reply within one business day to book a
              30-minute walkthrough of intent scoring before a tool runs.
            </p>
            <ul className="mt-10 space-y-6">
              {POINTS.map((point) => (
                <li key={point.title}>
                  <p className="text-[15px] font-medium text-white">{point.title}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-white/55">
                    {point.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-white/15 bg-black/30 p-6 sm:p-8">
            <p className="mono text-[10px] uppercase tracking-[0.16em] text-white/40">
              Book a walkthrough
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Tell us who you are
            </h2>
            <p className="mt-2 mb-6 text-[14px] text-white/50">
              Name, work email, and company. Role and agenda are optional.
            </p>
            <DemoRequestForm />
          </div>
        </div>
      </section>
    </main>
  );
}
