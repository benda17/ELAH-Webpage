export default function Comparison() {
  return (
    <section id="comparison" className="py-32 px-6 bg-[#0f0f0f] relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-elah-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            The Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Execution-Time vs Post-Mortem
          </h2>
          <div className="h-1 w-24 bg-elah-blue/50" />
        </div>
        
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-elah-blue/30">
                <th className="py-5 px-6 text-white font-medium text-sm uppercase tracking-wider">Approach</th>
                <th className="py-5 px-6 text-white font-medium text-sm uppercase tracking-wider">Detection Timing</th>
                <th className="py-5 px-6 text-white font-medium text-sm uppercase tracking-wider">Reasoning Visibility</th>
                <th className="py-5 px-6 text-white font-medium text-sm uppercase tracking-wider">Prevention Capability</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                <td className="py-5 px-6 text-gray-300">Traditional Security (DLP, I/O Filtering)</td>
                <td className="py-5 px-6 text-gray-400">
                  <span className="inline-flex items-center">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                    Post-execution
                  </span>
                </td>
                <td className="py-5 px-6 text-gray-400">None</td>
                <td className="py-5 px-6 text-gray-400">Reactive only</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                <td className="py-5 px-6 text-gray-300">Log Analysis & Monitoring</td>
                <td className="py-5 px-6 text-gray-400">
                  <span className="inline-flex items-center">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                    Post-execution
                  </span>
                </td>
                <td className="py-5 px-6 text-gray-400">Inferred from outputs</td>
                <td className="py-5 px-6 text-gray-400">Reactive only</td>
              </tr>
              <tr className="border-b border-elah-blue/30 bg-gradient-to-r from-elah-blue/10 to-transparent">
                <td className="py-5 px-6 text-white font-semibold">
                  <span className="inline-flex items-center">
                    <span className="w-2 h-2 rounded-full bg-elah-blue mr-2 animate-pulse" />
                    ELAH
                  </span>
                </td>
                <td className="py-5 px-6 text-white font-medium">
                  <span className="inline-flex items-center">
                    <span className="w-2 h-2 rounded-full bg-elah-blue mr-2" />
                    Pre-execution
                  </span>
                </td>
                <td className="py-5 px-6 text-white font-medium">Full reasoning visibility</td>
                <td className="py-5 px-6 text-white font-medium">Pre-execution enforcement</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-gradient-to-r from-elah-blue/20 to-transparent border-l-4 border-elah-blue p-8">
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-elah-blue/30 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
              <span className="text-elah-blue text-lg">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-2">Pre-Execution Enforcement</h3>
              <p className="text-gray-300 leading-relaxed">
                ELAH validates reasoning before any tool execution occurs. This prevents policy
                violations, data breaches, and unauthorized actions at the source—the reasoning
                process itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

