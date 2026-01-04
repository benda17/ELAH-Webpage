export default function PromptInjection() {
  const attacks = [
    {
      number: "01",
      title: "Direct Injection",
      description: "When an attacker embeds malicious instructions directly in user input, ELAH detects the divergence between the agent's declared intent and the injected reasoning. The agent's internal reasoning will show intent formation that contradicts policy, allowing ELAH to block execution before any tool is called.",
    },
    {
      number: "02",
      title: "Indirect Injection",
      description: "Attackers may use seemingly benign inputs that trigger reasoning drift over multiple steps. ELAH tracks the agent's reasoning chain, detecting when indirect manipulation causes intent to diverge from anchored policy. This multi-step reasoning analysis prevents attacks that traditional I/O filtering cannot detect.",
    },
    {
      number: "03",
      title: "Tool-Use Manipulation",
      description: "When an attacker manipulates an agent to call tools in unauthorized ways, ELAH validates the reasoning behind tool selection and parameter formation. The agent's reasoning will show intent that violates tool-use policies, enabling pre-execution blocking of unauthorized tool invocations.",
    },
    {
      number: "04",
      title: "Context Pollution",
      description: "Attackers may inject malicious content into the agent's context window, causing reasoning to drift. ELAH monitors how context influences reasoning formation, detecting when polluted context causes intent to diverge from anchored policy. This reasoning-level analysis prevents context-based attacks that bypass input sanitization.",
    },
    {
      number: "05",
      title: "Multi-Step Drift",
      description: "Sophisticated attacks cause gradual reasoning drift across multiple agent steps, where each step appears benign but cumulatively leads to policy violation. ELAH tracks reasoning continuity across the entire agent execution, detecting when multi-step drift causes intent to diverge from anchored policy. This prevents attacks that exploit the agent's autonomous reasoning process.",
    },
  ];

  return (
    <section id="prompt-injection" className="py-32 px-6 bg-[#0f0f0f] relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-elah-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            Defense
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Prompt Injection Defense
          </h2>
          <div className="h-1 w-24 bg-elah-blue/50" />
        </div>
        
        <p className="text-lg text-gray-400 mb-16 leading-relaxed max-w-3xl">
          ELAH defends against all five categories of prompt injection attacks by validating
          reasoning before execution, detecting manipulation at the intent formation stage.
        </p>
        
        <div className="space-y-6">
          {attacks.map((attack, index) => (
            <div
              key={index}
              className="gradient-border p-8 hover:border-elah-blue/40 transition-all duration-300 group"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full bg-elah-blue/20 flex items-center justify-center group-hover:bg-elah-blue/30 transition-colors">
                    <span className="text-elah-blue text-xl font-bold">{attack.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-3">{attack.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{attack.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

