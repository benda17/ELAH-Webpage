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
              The divergence between declared intent and internal reasoning creates unacceptable
              risk. Internal reasoning could drift toward unauthorized actions or policy violations.
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
              Without visibility into reasoning, enterprises cannot validate that decision-making
              aligns with security policies, compliance requirements, or business rules before execution.
            </p>
          </div>
        </div>

        <div className="light-box p-10">
          <p className="mb-2 text-xl font-semibold leading-relaxed text-[#0a1024]">
            The fundamental issue
          </p>
          <p className="text-lg leading-relaxed text-[#3d4f6f]">
            By the time an agent executes a tool or generates output, the reasoning that led to that action may have
            already violated policy. Post-mortem analysis cannot prevent damage.
          </p>
        </div>
      </div>
    </section>
  );
}
