export default function Solution() {
  return (
    <section id="solution" className="py-32 px-6 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Why Existing Security Fails */}
        <div className="mb-24">
          <div className="mb-12 text-center">
            <span className="text-elah-blue text-sm font-bold tracking-wider uppercase mb-4 block mono">
              The Gap
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow-white">
              Why Existing Security Fails
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-8 border-2 border-red-500/50 bg-gradient-to-br from-red-500/20 to-transparent hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-red-500/30 flex items-center justify-center mr-4 border-2 border-red-500">
                  <span className="text-red-400 text-2xl font-bold">✕</span>
                </div>
                <h3 className="text-2xl font-bold text-white">I/O Boundary Limitations</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Traditional security approaches operate at the input/output boundary. Data Loss
                Prevention (DLP), I/O filtering, and log analysis cannot see inside the reasoning
                process.
              </p>
            </div>
            
            <div className="p-8 border-2 border-red-500/50 bg-gradient-to-br from-red-500/20 to-transparent hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-red-500/30 flex items-center justify-center mr-4 border-2 border-red-500">
                  <span className="text-red-400 text-2xl font-bold">✕</span>
                </div>
                <h3 className="text-2xl font-bold text-white">The Black Box</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                The agent&apos;s reasoning remains a black box. You can see what goes in and what comes
                out, but not the intent formation, decision logic, or reasoning drift that occurs
                between input and output.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-500/20 via-white/10 to-transparent border-2 border-red-500/50 p-10 shadow-[0_0_40px_rgba(255,0,0,0.2)]">
            <div className="flex items-start">
              <div className="text-4xl font-bold text-red-400 mr-4 mono">⚠</div>
              <div>
                <p className="text-xl text-white leading-relaxed font-bold mb-2">
                  The blind spot:
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  By the time an agent executes a tool or generates output, the reasoning that led to that action may have already
                  violated policy. Post-mortem analysis cannot prevent damage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How ELAH Works */}
        <div>
          <div className="mb-12 text-center">
            <span className="text-elah-blue text-sm font-bold tracking-wider uppercase mb-4 block mono">
              The Solution
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow-white">
              How ELAH Works
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="gradient-border-white p-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,168,255,0.4)] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-elah-blue/30 flex items-center justify-center mr-4 border-2 border-elah-blue">
                  <span className="text-elah-blue text-2xl font-bold mono">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Intent Anchoring</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                ELAH establishes a baseline of declared intent before agent execution begins.
                This intent is anchored to security policies, compliance rules, and business
                constraints. The agent&apos;s reasoning process is then continuously validated
                against this anchored intent.
              </p>
            </div>

            <div className="gradient-border-white p-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4 border-2 border-white">
                  <span className="text-white text-2xl font-bold mono">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Shadow Reasoning Tracking</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                ELAH operates in parallel to the agent, tracking its reasoning process without
                interfering with execution. By analyzing the agent&apos;s internal state, decision
                points, and reasoning chains, ELAH builds a real-time model of what the agent
                intends to do and why.
              </p>
            </div>

            <div className="gradient-border-white p-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,168,255,0.4)] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-elah-blue/30 flex items-center justify-center mr-4 border-2 border-elah-blue">
                  <span className="text-elah-blue text-2xl font-bold mono">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Semantic Verification</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Before any tool execution, ELAH performs semantic verification of the agent&apos;s
                reasoning. It compares the agent&apos;s internal reasoning against the anchored
                intent, detecting divergence, policy violations, or reasoning drift. This verification
                happens at the reasoning level, not just at the action level.
              </p>
            </div>

            <div className="gradient-border-white p-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4 border-2 border-white">
                  <span className="text-white text-2xl font-bold mono">4</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Enforcement + Human Escalation</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                When ELAH detects reasoning that violates intent or policy, it can block execution
                before any tool is called. For ambiguous cases, ELAH escalates to human review
                while maintaining the agent&apos;s reasoning context. This ensures that autonomous
                agents operate within defined boundaries while preserving operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

