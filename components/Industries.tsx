export default function Industries() {
  const industries = [
    {
      title: "Banking & Finance",
      description: "An autonomous agent processing loan applications could internally reason toward approving a loan that violates credit policy. Without reasoning-level validation, the agent might execute a transaction that breaches regulatory requirements, exposes the institution to compliance violations, or creates financial risk.",
      failure: "Agent approves high-risk loan due to reasoning drift, violating internal credit policies and regulatory requirements.",
    },
    {
      title: "Pharma & Healthcare",
      description: "An agent managing patient data access might internally reason toward sharing information beyond authorized scope. The agent could execute data access that violates HIPAA, patient privacy, or clinical trial protocols, with consequences discovered only after the breach occurs.",
      failure: "Agent reasons toward unauthorized data access, executing actions that breach patient privacy and regulatory compliance.",
    },
    {
      title: "Insurance",
      description: "An agent processing claims might internally reason toward denial of a valid claim or approval of a fraudulent one. Without reasoning visibility, the agent could execute decisions that violate underwriting rules, create legal exposure, or breach actuarial principles.",
      failure: "Agent's reasoning drifts from policy guidelines, executing claim decisions that violate underwriting standards and create regulatory risk.",
    },
    {
      title: "Critical Infrastructure",
      description: "An agent managing operational systems might internally reason toward actions that compromise safety protocols or system integrity. The agent could execute commands that violate operational boundaries, create safety risks, or breach security perimeters, with consequences that cannot be reversed.",
      failure: "Agent reasons toward actions that violate safety protocols, executing commands that compromise system integrity and operational security.",
    },
  ];

  return (
    <section id="industries" className="py-32 px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-elah-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            Critical Sectors
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Industry Red-Line Risks
          </h2>
          <div className="h-1 w-24 bg-elah-blue/50" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="gradient-border p-8 hover:border-elah-blue/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="mr-4 text-2xl font-bold text-elah-blue mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-medium text-white">{industry.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                {industry.description}
              </p>
              <div className="mt-6 border-t border-elah-blue/20 pt-6">
                <p className="text-sm text-gray-500 italic">
                  <span className="font-medium text-red-400">Failure scenario:</span> {industry.failure}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
