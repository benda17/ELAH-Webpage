export default function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden px-6 py-32">
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
              <div className="text-4xl font-bold text-red-400 mr-4 mono">!</div>
              <div>
                <p className="text-xl text-white leading-relaxed font-bold mb-2">
                  The blind spot:
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  By the time a support or CRM agent issues a refund or writes a customer record, the reasoning that led there may already
                  have diverged from company policy. After-the-fact analysis cannot undo the write.
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
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="light-box p-8">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-elah-blue bg-elah-blue/15">
                  <span className="text-2xl font-bold text-elah-blue mono">1</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#0a1024]">Intent Anchoring</h3>
              </div>
              <p className="leading-relaxed text-[#3d4f6f]">
                ELAH establishes a baseline of declared intent before the agent calls a tool —
                a ticket update, a refund, a CRM write. That intent is scored against company
                policy. Allow, deny, or confirm belongs to the tenant, not to ELAH.
              </p>
            </div>

            <div className="light-box p-8">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-elah-blue bg-elah-blue/15">
                  <span className="text-2xl font-bold text-elah-blue mono">2</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#0a1024]">Shadow Reasoning Tracking</h3>
              </div>
              <p className="leading-relaxed text-[#3d4f6f]">
                ELAH operates in parallel to the agent, tracking its reasoning process without
                interfering with execution. It builds a real-time model of what the agent
                intends to do and why — then scores that genuine intent before the tool runs.
              </p>
            </div>

            <div className="light-box p-8">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-elah-blue bg-elah-blue/15">
                  <span className="text-2xl font-bold text-elah-blue mono">3</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#0a1024]">Semantic Verification</h3>
              </div>
              <p className="leading-relaxed text-[#3d4f6f]">
                Before any tool execution, ELAH scores the agent&apos;s reasoning against declared
                intent. Divergence, drift, or a mismatch with company policy shows up in the score —
                at the reasoning level, not after the ticket, refund, or CRM write has already run.
              </p>
            </div>

            <div className="light-box p-8">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-elah-blue bg-elah-blue/15">
                  <span className="text-2xl font-bold text-elah-blue mono">4</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#0a1024]">Score, then company policy</h3>
              </div>
              <p className="leading-relaxed text-[#3d4f6f]">
                ELAH returns an intent score before the tool runs. Company policy decides allow,
                deny, or confirm. ELAH never allows, blocks, or executes. Ambiguous cases stay
                on the tenant&apos;s confirm path, with the reasoning context attached to the score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

