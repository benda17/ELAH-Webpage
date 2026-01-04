export default function CTA() {
  return (
    <section id="cta" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-elah-blue/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <span className="text-elah-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Deploy Autonomous Agents with Confidence
          </h2>
          <div className="h-1 w-24 bg-elah-blue/50 mx-auto mb-8" />
        </div>
        
        <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          ELAH provides reasoning-level security for agentic AI, enabling enterprises to deploy
          autonomous agents while maintaining control over intent and policy compliance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@elah.ai"
            className="inline-block px-10 py-4 border-2 border-elah-blue bg-elah-blue/10 text-elah-blue hover:bg-elah-blue hover:text-black transition-all duration-300 font-medium text-lg"
            aria-label="Contact ELAH"
          >
            Contact Us
          </a>
          <a
            href="#hero"
            className="inline-block px-10 py-4 border-2 border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white transition-all duration-300 font-medium text-lg"
            aria-label="Learn More"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

