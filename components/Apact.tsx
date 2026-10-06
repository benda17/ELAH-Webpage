"use client";

import { useEffect, useRef, useState } from "react";

const APACT = [
  { letter: "A", word: "Agent" },
  { letter: "P", word: "Permission" },
  { letter: "A", word: "and" },
  { letter: "C", word: "Consent" },
  { letter: "T", word: "Test" },
] as const;

const CAPTCHA = [
  { letter: "C", word: "Completely" },
  { letter: "A", word: "Automated" },
  { letter: "P", word: "Public" },
  { letter: "T", word: "Turing test to tell" },
  { letter: "C", word: "Computers and" },
  { letter: "H", word: "Humans" },
  { letter: "A", word: "Apart" },
] as const;

type Phase = "captcha" | "strike" | "swap";

export default function Apact() {
  const ref = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<Phase>("captcha");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase("swap");
      return;
    }
    const el = ref.current;
    if (!el) return;
    let timers: number[] = [];
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || timers.length) return;
        timers = [
          window.setTimeout(() => setPhase("strike"), 1400),
          window.setTimeout(() => setPhase("swap"), 2600),
        ];
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const swapped = phase === "swap";
  const struck = phase !== "captcha";

  return (
    <section id="apact" ref={ref} className="relative scroll-mt-24 border-t border-white/5 px-6 py-28 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(16,134,252,0.35), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-[1200px]">
        <p className="mono text-[11px] uppercase tracking-[0.22em] text-[#8cc4ff]">The product</p>

        <div
          className={`mt-8 max-w-3xl rounded-3xl p-7 transition-all duration-700 sm:p-10 ${
            swapped ? "glass glow-blue" : "border border-white/10 bg-white/[0.02]"
          }`}
        >
          <h2 className="text-balance leading-[0.95] tracking-[-0.03em]">
            <span
              className={`relative inline-block font-semibold transition-all duration-700 ${
                swapped ? "text-3xl text-white/30 sm:text-4xl" : "text-5xl text-white sm:text-7xl"
              }`}
              aria-hidden={swapped}
            >
              CAPTCHA
              <span
                aria-hidden
                className="absolute left-0 right-0 top-1/2 h-[3px] origin-left bg-rose-400 transition-transform duration-700 ease-out"
                style={{ transform: struck ? "scaleX(1)" : "scaleX(0)" }}
              />
            </span>
            <span
              aria-hidden={!swapped}
              className={`block font-semibold text-white transition-all duration-700 ${
                swapped
                  ? "mt-3 max-h-40 translate-y-0 text-5xl opacity-100 sm:text-7xl"
                  : "mt-0 max-h-0 translate-y-3 overflow-hidden text-5xl opacity-0 sm:text-7xl"
              }`}
            >
              APACT
            </span>
          </h2>

          <div className="relative mt-8">
            <ol
              className={`space-y-2.5 transition-all duration-500 ${
                swapped ? "pointer-events-none absolute inset-x-0 top-0 opacity-0" : "relative opacity-100"
              }`}
              aria-hidden={swapped}
            >
              {CAPTCHA.map((row, i) => (
                <LetterRow key={`${row.letter}-${row.word}`} letter={row.letter} word={row.word} struck={struck} delay={120 + i * 70} muted />
              ))}
            </ol>
            <ol
              aria-hidden={!swapped}
              className={`space-y-3 transition-all duration-700 ${
                swapped ? "relative translate-y-0 opacity-100" : "pointer-events-none absolute inset-x-0 top-0 translate-y-3 opacity-0"
              }`}
            >
              {APACT.map((row) => (
                <LetterRow key={`${row.letter}-${row.word}`} letter={row.letter} word={row.word} />
              ))}
            </ol>
          </div>

          <div
            className={`max-w-xl space-y-4 overflow-hidden text-[16px] leading-relaxed text-white/70 transition-all duration-700 ${
              swapped ? "mt-8 max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p>
              A security check that verifies an AI agent has the user’s approval to perform a specific action—and that the request stays within the limits of that approval.
            </p>
            <p>The name also sounds like “a pact”: an agreement defining what the agent is allowed to do.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LetterRow({
  letter,
  word,
  struck = false,
  delay = 0,
  muted = false,
}: {
  letter: string;
  word: string;
  struck?: boolean;
  delay?: number;
  muted?: boolean;
}) {
  return (
    <li className="relative flex items-baseline gap-4">
      <span className={`w-8 shrink-0 font-mono text-2xl font-semibold sm:text-3xl ${muted ? "text-white/35" : "text-[#8cc4ff]"}`}>{letter}</span>
      <span className={`text-2xl font-medium tracking-tight sm:text-3xl ${muted ? "text-white/45" : "text-white"}`}>{word}</span>
      <span
        aria-hidden
        className="absolute left-0 right-0 top-1/2 h-[2px] origin-left bg-rose-400/90 transition-transform duration-500 ease-out"
        style={{ transform: struck ? "scaleX(1)" : "scaleX(0)", transitionDelay: `${delay}ms` }}
      />
    </li>
  );
}
