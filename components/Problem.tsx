export default function Problem() {
  return (
    <section id="problem" className="py-32 px-6 bg-[#0f0f0f] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <span className="text-elah-blue text-sm font-bold tracking-wider uppercase mb-4 block mono">
            The Challenge
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow-white">
            The Core Problem
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="gradient-border-white p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 font-bold mono">
              <span className="text-elah-blue">01</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Uncontrolled Reasoning</h3>
            <p className="text-white/80 leading-relaxed">
              Enterprises cannot control what happens inside the agent&apos;s reasoning process.
              An agent may declare one intent but internally reason toward a different outcome.
            </p>
          </div>
          
          <div className="gradient-border-white p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 font-bold mono">
              <span className="text-white">02</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">The Intent Gap</h3>
            <p className="text-white/80 leading-relaxed">
              The divergence between declared intent and internal reasoning creates unacceptable
              risk. Internal reasoning could drift toward unauthorized actions or policy violations.
            </p>
          </div>
          
          <div className="gradient-border-white p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 font-bold mono">
              <span className="text-elah-blue">03</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Operating Blind</h3>
            <p className="text-white/80 leading-relaxed">
              Without visibility into reasoning, enterprises cannot validate that decision-making
              aligns with security policies, compliance requirements, or business rules before execution.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-elah-blue/20 via-white/10 to-transparent border-2 border-white/30 p-10 shadow-[0_0_40px_rgba(0,168,255,0.3)]">
          <div className="flex items-start">
            <div className="text-4xl font-bold text-white mr-4 mono">!</div>
            <div>
              <p className="text-xl text-white leading-relaxed font-bold mb-2">
                The fundamental issue:
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                By the time an agent executes a tool or generates output, the reasoning that led to that action may have
                already violated policy. Post-mortem analysis cannot prevent damage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

