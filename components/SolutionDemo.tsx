"use client";

import { useState } from "react";

export default function SolutionDemo() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Intent Anchoring",
      description: "ELAH captures and locks the declared user objective before agent execution begins",
      visual: "ANCHOR_INTENT(user_prompt)",
      color: "elah-blue",
    },
    {
      title: "Shadow Reasoning Tracking",
      description: "ELAH operates in parallel, tracking the agent's reasoning process without interfering",
      visual: "TRACK_REASONING(agent_chain_of_thought)",
      color: "white",
    },
    {
      title: "Semantic Verification",
      description: "Before any tool execution, ELAH validates reasoning against anchored intent",
      visual: "VERIFY_SEMANTICS(reasoning, intent)",
      color: "elah-blue",
    },
    {
      title: "Enforcement",
      description: "If reasoning drifts, ELAH blocks execution and logs the Reasoning Delta",
      visual: "ENFORCE_POLICY(reasoning_delta)",
      color: "white",
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-elah-blue text-sm font-bold tracking-wider uppercase mb-4 block mono">
            How It Works
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow-white">
            The ELAH Solution
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the four-step reasoning enforcement process
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {steps.map((s, index) => (
            <button
              key={index}
              onClick={() => setStep(index)}
              className={`px-6 py-3 border-2 font-bold transition-all duration-300 ${
                step === index
                  ? "border-white bg-white text-black"
                  : "border-white/30 text-white hover:border-white/60"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Active Step Display */}
        <div className="gradient-border-white p-12 mb-8 min-h-[400px] flex flex-col justify-center">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold mb-4 mono">
              <span className="text-elah-blue">{String(step + 1).padStart(2, "0")}</span>
              <span className="text-white">/{String(steps.length).padStart(2, "0")}</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {steps[step].title}
            </h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {steps[step].description}
            </p>
          </div>

          {/* Code Visualization */}
          <div className="bg-black/80 p-8 rounded border-2 border-white/20 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
              <div className="w-3 h-3 rounded-full bg-green-500 mr-4" />
              <span className="text-white/50 text-sm mono">ELAH_RVM.exe</span>
            </div>
            <div className="text-elah-blue mono text-lg font-bold">
              {steps[step].visual}
            </div>
            <div className="mt-4 text-white/50 mono text-sm">
              {step === 0 && "> Anchoring user intent to security policies..."}
              {step === 1 && "> Tracking reasoning chain in real-time..."}
              {step === 2 && "> Verifying semantic alignment..."}
              {step === 3 && "> Blocking execution - Reasoning Delta detected"}
            </div>
          </div>

          {/* Visual Flow */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {steps.map((s, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    index <= step
                      ? "border-white bg-white text-black"
                      : "border-white/20 text-white/30"
                  }`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-1 transition-all duration-300 ${
                      index < step ? "bg-white" : "bg-white/20"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="gradient-border p-8 bg-red-500/10 border-red-500/50">
            <h4 className="text-2xl font-bold text-white mb-4">Traditional Security</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">✕</span>
                <span>Post-execution detection</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">✕</span>
                <span>I/O boundary filtering only</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">✕</span>
                <span>No reasoning visibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">✕</span>
                <span>Reactive forensics</span>
              </li>
            </ul>
          </div>

          <div className="gradient-border-white p-8 bg-elah-blue/10 border-elah-blue/50">
            <h4 className="text-2xl font-bold text-white mb-4">ELAH Protection</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start">
                <span className="text-elah-blue mr-2">✓</span>
                <span>Pre-execution enforcement</span>
              </li>
              <li className="flex items-start">
                <span className="text-elah-blue mr-2">✓</span>
                <span>Reasoning-level validation</span>
              </li>
              <li className="flex items-start">
                <span className="text-elah-blue mr-2">✓</span>
                <span>Full reasoning visibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-elah-blue mr-2">✓</span>
                <span>Proactive blocking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

