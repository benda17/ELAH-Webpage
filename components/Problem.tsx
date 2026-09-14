export default function Problem() {
  return (
    <section id="problem" className="section-light overflow-hidden px-6 py-32">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-elah-blue mono">
            The Challenge
          </span>
          <h2 className="mb-6 text-5xl font-semibold tracking-tight text-[#0a1024] md:text-6xl">
            The Core Problem
          </h2>
          <div className="mx-auto h-px w-24 bg-elah-blue" />
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="light-box p-8">
            <div className="mb-4 text-5xl font-bold mono">
              <span className="text-elah-blue">01</span>
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-[#0a1024]">
              Uncontrolled Reasoning
            </h3>
            <p className="leading-relaxed text-[#3d4f6f]">
              Enterprises cannot control what happens inside the agent&apos;s reasoning process.
              An agent may declare one intent but internally reason toward a different outcome.
            </p>
          </div>

          <div className="light-box p-8">
            <div className="mb-4 text-5xl font-bold mono">
              <span className="text-elah-blue">02</span>
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-[#0a1024]">
              The Intent Gap
            </h3>
            <p className="leading-relaxed text-[#3d4f6f]">
              The divergence between declared intent and internal reasoning shows up first in
              B2B SaaS support and CRM operations: tickets, refunds, and CRM writes that no
              longer match what the agent said it was doing.
            </p>
          </div>

          <div className="light-box p-8">
            <div className="mb-4 text-5xl font-bold mono">
              <span className="text-elah-blue">03</span>
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-[#0a1024]">
              Operating Blind
            </h3>
            <p className="leading-relaxed text-[#3d4f6f]">
              Without visibility into reasoning, a company cannot check that a support or CRM
              agent still matches declared intent — and company policy — before a ticket,
              refund, or CRM write runs.
            </p>
          </div>
        </div>

        <div className="light-box p-10">
          <p className="mb-2 text-xl font-semibold leading-relaxed text-[#0a1024]">
            The fundamental issue
          </p>
          <p className="text-lg leading-relaxed text-[#3d4f6f]">
            By the time a support agent issues a refund or writes to CRM, the reasoning that led there may already
            have diverged from company policy. After-the-fact analysis cannot undo the write. Banking and other
            regulated workflows have the same gap — they are later verticals, not the first commercial story.
          </p>
        </div>
      </div>
    </section>
  );
}
