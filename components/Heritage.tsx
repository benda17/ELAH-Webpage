export default function Heritage() {
  return (
    <section id="heritage" className="py-32 px-6 bg-[#0f0f0f] relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="text-elah-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Name
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Heritage & Meaning
          </h2>
          <div className="h-1 w-24 bg-elah-blue/50" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="gradient-border p-8">
            <div className="text-3xl mb-4 text-elah-blue">Valley of Elah</div>
            <p className="text-gray-400 leading-relaxed">
              ELAH is named for the Valley of Elah, where precision and intent defeated brute force.
              In that ancient conflict, a single well-aimed strike prevailed over overwhelming
              numerical advantage.
            </p>
          </div>
          
          <div className="gradient-border p-8">
            <div className="text-3xl mb-4 text-elah-blue">Precision Over Volume</div>
            <p className="text-gray-400 leading-relaxed">
              In autonomous AI security, precision matters more than volume. ELAH validates reasoning
              with precision, detecting intent violations that brute-force I/O filtering cannot see.
            </p>
          </div>
          
          <div className="gradient-border p-8">
            <div className="text-3xl mb-4 text-elah-blue">Seeing the Unseen</div>
            <p className="text-gray-400 leading-relaxed">
              The name reflects our approach: precise validation of intent, not broad filtering of
              inputs. We close the Intent Gap by seeing what others cannot see—the reasoning process
              itself.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-elah-blue/20 to-transparent border-l-4 border-elah-blue p-8">
          <p className="text-lg text-gray-300 leading-relaxed italic">
            Just as precision defeated brute force in the valley, reasoning-level security defeats
            attacks that bypass traditional security boundaries.
          </p>
        </div>
      </div>
    </section>
  );
}

