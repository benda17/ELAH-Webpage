import Logo from "./Logo";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden cyber-grid">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-elah-blue/10 via-black to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-elah-blue/5 pointer-events-none" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(0, 168, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 168, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-10 flex justify-center lg:justify-start">
              <Logo />
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance">
              <span className="text-white text-glow-white">Reasoning-Level</span>
              <br />
              <span className="text-elah-blue text-glow">Security</span>
              <br />
              <span className="text-white text-xl md:text-2xl font-normal mt-4 block">for Agentic AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance font-light">
              ELAH closes the Intent Gap by validating an agent&apos;s reasoning before tool execution.
              Enterprises can deploy autonomous agents with confidence, knowing that internal reasoning
              aligns with declared intent.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a
                href="#demos"
                className="group inline-flex items-center justify-center px-10 py-5 bg-elah-blue text-black font-bold text-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,168,255,0.6)] transition-all duration-300 border-2 border-elah-blue"
                aria-label="View Demos"
              >
                View Demos
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-bold text-lg"
                aria-label="Request Early Access"
              >
                Request Early Access
              </a>
            </div>
          </div>

          {/* Right column - Video */}
          <div className="relative animate-slide-up">
            <div className="relative aspect-video bg-black border-4 border-elah-blue/50 shadow-[0_0_60px_rgba(0,168,255,0.4)] rounded-lg overflow-hidden group hover:border-white transition-all duration-300">
              <iframe
                src="https://drive.google.com/file/d/1mFHntfcK0G3sXlwkATMkwZEYge90iL-R/preview"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                title="ELAH Product Video"
                allowFullScreen
              />
            </div>
            <div className="absolute -inset-2 bg-elah-blue/30 blur-2xl -z-10 rounded-lg group-hover:bg-white/20 transition-all" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-white/30 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-elah-blue/50 rounded-full animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

