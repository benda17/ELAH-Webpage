export default function DataMoat() {
  const features = [
    {
      title: "Reasoning Deltas",
      description: "ELAH captures reasoning deltas—the differences between declared intent and actual reasoning—across all deployments. This creates a continuously growing dataset of reasoning patterns, attack vectors, and intent violations. Each deployment contributes to a collective intelligence that improves detection accuracy and reduces false positives.",
      icon: "📊",
    },
    {
      title: "Network Effect",
      description: "As more enterprises deploy ELAH, the reasoning security intelligence platform becomes more valuable. Attack patterns detected in one deployment inform defenses across all deployments. This network effect creates a compounding advantage: the platform becomes more effective as it scales, creating a defensible data moat that competitors cannot replicate without equivalent reasoning visibility.",
      icon: "🌐",
    },
    {
      title: "Reasoning Security Intelligence Platform",
      description: "ELAH evolves into a reasoning security intelligence platform, where reasoning deltas from all deployments inform threat detection, policy validation, and intent verification. This platform provides continuous improvement in detection accuracy, reduces false positives through pattern recognition, and enables proactive defense against emerging attack vectors that exploit agent reasoning.",
      icon: "🔒",
    },
  ];

  return (
    <section id="data-moat" className="py-32 px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-elah-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            Competitive Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            The Data Moat
          </h2>
          <div className="h-1 w-24 bg-elah-blue/50" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="gradient-border p-8 hover:border-elah-blue/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

