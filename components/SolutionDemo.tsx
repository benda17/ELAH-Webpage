"use client";

import { useState } from "react";

export default function SolutionDemo() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Intent Anchoring",
      description: "ELAH captures and locks the declared user objective before agent execution begins",
      visual: "ANCHOR_INTENT(user_prompt)",
    },
    {
      title: "Shadow Reasoning Tracking",
      description: "ELAH operates in parallel, tracking the agent's reasoning process without interfering",
      visual: "TRACK_REASONING(agent_chain_of_thought)",
    },
    {
      title: "Semantic Verification",
      description: "Before any tool execution, ELAH validates reasoning against anchored intent",
      visual: "VERIFY_SEMANTICS(reasoning, intent)",
    },
    {
      title: "Enforcement",
      description: "If reasoning drifts, ELAH blocks execution and logs the Reasoning Delta",
      visual: "ENFORCE_POLICY(reasoning_delta)",
    },
  ];

  const status = [
    "> Anchoring user intent to security policies...",
    "> Tracking reasoning chain in real-time...",
    "> Verifying semantic alignment...",
    "> Blocking execution - Reasoning Delta detected",
  ];

  return (
    <section className="section-light overflow-hidden px-6 py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-elah-blue mono">
            How It Works
          </span>
          <h2 className="mb-6 text-5xl font-semibold tracking-tight text-[#0a1024] md:text-6xl">
            The ELAH Solution
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-[#3d4f6f]">
            Experience the four-step reasoning enforcement process
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {steps.map((s, index) => (
            <button
              key={index}
              onClick={() => setStep(index)}
              className={`border-2 px-6 py-3 font-bold transition-all duration-300 ${
                step === index
                  ? "border-elah-blue bg-elah-blue text-[#0a1024]"
                  : "border-[#d5deee] text-[#0a1024] hover:border-elah-blue"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="light-box mb-8 flex min-h-[400px] flex-col justify-center p-12">
          <div className="mb-8 text-center">
            <div className="mb-4 text-6xl font-bold mono">
              <span className="text-elah-blue">{String(step + 1).padStart(2, "0")}</span>
              <span className="text-[#9aabc4]">/{String(steps.length).padStart(2, "0")}</span>
            </div>
            <h3 className="mb-4 text-4xl font-semibold text-[#0a1024] md:text-5xl">
              {steps[step].title}
            </h3>
            <p className="mx-auto max-w-2xl text-xl text-[#3d4f6f]">
              {steps[step].description}
            </p>
          </div>

          <div className="mb-8 rounded border border-[#1f2b45] bg-[#0a1024] p-8">
            <div className="mb-4 flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-red-500" />
              <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500" />
              <div className="mr-4 h-3 w-3 rounded-full bg-green-500" />
              <span className="text-sm text-white/50 mono">ELAH_RVM.exe</span>
            </div>
            <div className="text-lg font-bold text-elah-blue mono">
              {steps[step].visual}
            </div>
            <div className="mt-4 text-sm text-white/50 mono">{status[step]}</div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {steps.map((s, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full border-4 text-lg font-bold transition-all duration-300 ${
                    index <= step
                      ? "border-elah-blue bg-elah-blue text-[#0a1024]"
                      : "border-[#d5deee] text-[#9aabc4]"
                  }`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 w-12 transition-all duration-300 ${
                      index < step ? "bg-elah-blue" : "bg-[#d5deee]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="light-box p-8">
            <h4 className="mb-4 text-2xl font-semibold text-[#0a1024]">Traditional Security</h4>
            <ul className="space-y-3 text-[#3d4f6f]">
              <li className="flex items-start">
                <span className="mr-2 text-red-500">✕</span>
                <span>Post-execution detection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-500">✕</span>
                <span>I/O boundary filtering only</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-500">✕</span>
                <span>No reasoning visibility</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-500">✕</span>
                <span>Reactive forensics</span>
              </li>
            </ul>
          </div>

          <div className="light-box p-8">
            <h4 className="mb-4 text-2xl font-semibold text-[#0a1024]">ELAH Protection</h4>
            <ul className="space-y-3 text-[#3d4f6f]">
              <li className="flex items-start">
                <span className="mr-2 text-elah-blue">✓</span>
                <span>Pre-execution enforcement</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-elah-blue">✓</span>
                <span>Reasoning-level validation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-elah-blue">✓</span>
                <span>Full reasoning visibility</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-elah-blue">✓</span>
                <span>Proactive blocking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
