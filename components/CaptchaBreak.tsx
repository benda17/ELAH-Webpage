"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

/** Tiles of the street scene that contain traffic lights. */
const TARGETS = [1, 4, 5];

type Frame = { at: number; cursor?: [number, number]; phase?: Phase; tile?: number; log?: string };
type Phase = "idle" | "checking" | "challenge" | "verifying" | "passed";

// Cursor positions are % of the demo window.
const TILE_POS = (i: number): [number, number] => [34.5 + (i % 3) * 16.3, 29 + Math.floor(i / 3) * 21.8];

const SCRIPT: Frame[] = [
  { at: 0, cursor: [86, 92], phase: "idle", log: "$ agent run --task 'open support ticket'" },
  { at: 500, log: "› launching headless browser" },
  { at: 900, cursor: [17, 50], log: "› challenge found: “I’m not a robot”" },
  { at: 1700, phase: "checking", log: "› mouse path: curved, 3px jitter, 640ms" },
  { at: 2300, phase: "challenge", cursor: [50, 18], log: "› image challenge: select traffic lights" },
  { at: 2800, log: "› vision model: tiles 2, 5, 6 · confidence 0.97" },
  { at: 3150, cursor: TILE_POS(1) },
  { at: 3500, tile: 1 },
  { at: 3700, cursor: TILE_POS(4) },
  { at: 4000, tile: 4 },
  { at: 4200, cursor: TILE_POS(5) },
  { at: 4500, tile: 5 },
  { at: 4800, cursor: [70, 88], log: "› submitting answer" },
  { at: 5200, phase: "verifying" },
  { at: 5700, phase: "passed", log: "✓ token issued · session accepted as human" },
  { at: 9800 },
];

const FACTS = [
  {
    stat: "≈100%",
    body: "of reCAPTCHA v2 image challenges solved by an off-the-shelf object-detection model in a 2024 study.",
    source: "Plesner, Vontobel & Wattenhofer · ETH Zürich, “Breaking reCAPTCHAv2” (2024)",
  },
  {
    stat: "Faster",
    body: "and more accurate than people: bots out-solved human participants on several common CAPTCHA types.",
    source: "Searles et al. · UC Irvine, USENIX Security (2023)",
  },
  {
    stat: "Hired help",
    body: "An AI model persuaded a human worker to solve a CAPTCHA for it during pre-release safety testing.",
    source: "OpenAI · GPT-4 System Card (2023)",
  },
];

export default function CaptchaBreak() {
  const [t, setT] = useState(0);
  const [run, setRun] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const start = Date.now();
    setT(0);
    const timer = setInterval(() => {
      const el = Date.now() - start;
      if (el > SCRIPT[SCRIPT.length - 1].at) {
        clearInterval(timer);
        setRun((r) => r + 1);
        return;
      }
      setT(el);
    }, 50);
    return () => clearInterval(timer);
  }, [visible, run]);

  let cursor: [number, number] = [86, 92];
  let phase: Phase = "idle";
  const tiles = new Set<number>();
  const logs: string[] = [];
  for (const f of SCRIPT) {
    if (f.at > t) break;
    if (f.cursor) cursor = f.cursor;
    if (f.phase) phase = f.phase;
    if (f.tile !== undefined) tiles.add(f.tile);
    if (f.log) logs.push(f.log);
  }
  const solveMs = Math.min(Math.max(t - 500, 0), 5200);
  const passed = phase === "passed";
  const elah = passed && t > 6700;

  return (
    <section id="captcha" className="relative scroll-mt-24 overflow-hidden border-t border-white/5 px-6 py-28 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(244,63,94,0.25), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-[1200px]">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-rose-300/80">The CAPTCHA problem</p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
            CAPTCHAs ask “are you human?”{" "}
            <span className="bg-gradient-to-r from-rose-300 to-rose-500 bg-clip-text text-transparent">AI agents just say yes.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/60">
            Checkbox and image puzzles were built to keep scripts out. Today an
            agent clicks the box, reads the grid, and passes in seconds, and the
            site still knows nothing about who sent it or what it may do.
          </p>
        </Reveal>

        <div ref={ref} className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="glass relative overflow-hidden rounded-3xl p-2">
            <div className="flex items-center gap-1.5 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="mono ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-white/40">
                portal.example.com/support/new
              </span>
              <span className="mono ml-auto text-[11px] tabular-nums text-rose-300">
                {(solveMs / 1000).toFixed(1)}s
              </span>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#0b0f1a]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

              <div className="absolute left-[8%] top-[42%] flex w-[52%] min-w-[220px] items-center gap-3 rounded-lg border border-white/10 bg-[#f4f6fa] px-4 py-3.5 text-[#1b1f2a] shadow-xl">
                <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-[4px] border-2 border-[#c1c7d0] bg-white">
                  {phase === "checking" || phase === "challenge" || phase === "verifying" ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#1086FC] border-t-transparent" />
                  ) : passed ? (
                    <span className="text-xl font-bold leading-none text-emerald-600">✓</span>
                  ) : null}
                </span>
                <span className="text-[15px]">I’m not a robot</span>
                <span className="mono ml-auto text-right text-[8px] leading-tight text-[#8a93a3]">
                  CAPTCHA
                  <br />
                  Privacy · Terms
                </span>
              </div>

              <div
                className={`absolute left-[25%] top-[4%] w-[50%] rounded-lg bg-white p-[1%] shadow-2xl transition-all duration-300 ${
                  phase === "challenge" || phase === "verifying"
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0"
                }`}
              >
                <div className="rounded-sm bg-[#1086FC] px-3 py-2.5 text-white">
                  <p className="text-[11px] leading-tight">Select all squares with</p>
                  <p className="text-[17px] font-bold leading-tight">traffic lights</p>
                </div>
                <div className="relative mt-1.5 grid grid-cols-3 gap-1">
                  {Array.from({ length: 9 }, (_, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden">
                      <StreetTile i={i} />
                      <span
                        className={`absolute inset-0 border-[3px] border-[#1086FC] transition ${
                          tiles.has(i) ? "scale-100 opacity-100" : "scale-110 opacity-0"
                        }`}
                      />
                      {tiles.has(i) ? (
                        <span className="absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#1086FC] text-[10px] text-white">
                          ✓
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="mt-1.5 flex justify-end">
                  <span className="rounded-sm bg-[#1086FC] px-4 py-1.5 text-[11px] font-semibold uppercase text-white">
                    {phase === "verifying" ? "…" : "Verify"}
                  </span>
                </div>
              </div>

              {passed ? (
                <div className="animate-stamp absolute right-[7%] top-[14%] rounded-md border-[3px] border-rose-400 px-4 py-2 text-center text-rose-300 shadow-[0_0_40px_rgba(244,63,94,0.35)]">
                  <p className="mono text-[10px] uppercase tracking-[0.2em]">Passed as</p>
                  <p className="text-2xl font-bold uppercase leading-none tracking-tight">Human</p>
                </div>
              ) : null}

              <div
                aria-hidden
                className="absolute z-30 transition-all duration-500 ease-[cubic-bezier(.5,.1,.25,1)]"
                style={{ left: `${cursor[0]}%`, top: `${cursor[1]}%` }}
              >
                <svg width="22" height="26" viewBox="0 0 22 26" className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                  <path d="M1 1 L1 20 L6 15.5 L9.5 24 L13 22.5 L9.6 14.4 L16.5 14.4 Z" fill="#ff4d6d" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <span className="mono ml-4 mt-0.5 inline-block whitespace-nowrap rounded bg-rose-500 px-1.5 py-0.5 text-[9px] text-white">
                  agent
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="glass flex min-h-[260px] flex-1 flex-col rounded-3xl p-5">
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-white/35">agent.log</p>
              <ul className="mono mt-3 flex-1 space-y-1.5 text-[12px] leading-relaxed">
                {logs.map((line, i) => (
                  <li
                    key={`${run}-${i}`}
                    className={`animate-fade-in ${
                      line.startsWith("✓") ? "text-rose-300" : line.startsWith("$") ? "text-white" : "text-white/55"
                    }`}
                  >
                    {line}
                  </li>
                ))}
                <li className="animate-caret text-white/50">▍</li>
              </ul>
            </div>

            <div className={`glass rounded-3xl p-5 transition-all duration-500 ${elah ? "glow-blue" : ""}`}>
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-[#8cc4ff]">Same request, ELAH-protected</p>
              <div className="mono mt-3 space-y-2 text-[12px]">
                <Lane on={elah} who="headless script · no grant" status="rejected" reason="no_valid_grant" tone="rose" />
                <Lane on={elah && t > 7500} who="support-agent · signed grant" status="verified" reason="scope_ok" tone="emerald" />
              </div>
              <p className="mt-3 text-[12px] leading-snug text-white/45">
                No puzzle to solve. ELAH asks for proof of delegated, scoped permission instead.
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-5 grid gap-5 md:grid-cols-3">
          {FACTS.map((f, i) => (
            <Reveal as="li" key={f.stat} delay={i * 90} className="glass rounded-3xl p-6">
              <p className="text-3xl font-semibold tracking-tight text-white">{f.stat}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-white/60">{f.body}</p>
              <p className="mono mt-4 text-[10px] uppercase leading-relaxed tracking-[0.12em] text-white/30">{f.source}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Lane({
  on,
  who,
  status,
  reason,
  tone,
}: {
  on: boolean;
  who: string;
  status: string;
  reason: string;
  tone: "rose" | "emerald";
}) {
  const color = tone === "rose" ? "border-rose-400/40 bg-rose-400/10 text-rose-300" : "border-emerald-400/40 bg-emerald-400/10 text-emerald-300";
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-black/30 px-3 py-2.5">
      <span className="truncate text-white/60">{who}</span>
      <span className={`shrink-0 rounded-md border px-2 py-0.5 transition-all duration-300 ${on ? color : "border-white/5 text-white/25"}`}>
        {on ? `${status} · ${reason}` : "waiting"}
      </span>
    </div>
  );
}

/** One ninth of a simple street scene, drawn on a shared 300×300 canvas. */
function StreetTile({ i }: { i: number }) {
  const x = (i % 3) * 100;
  const y = Math.floor(i / 3) * 100;
  return (
    <svg viewBox={`${x} ${y} 100 100`} className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`sky${i}`} x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9fb7cc" />
          <stop offset="1" stopColor="#d9e1e8" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="300" height="300" fill={`url(#sky${i})`} />
      <rect x="0" y="70" width="70" height="170" fill="#7c8590" />
      <rect x="62" y="40" width="58" height="200" fill="#8f979f" />
      <rect x="200" y="90" width="100" height="150" fill="#6f7882" />
      {[0, 1, 2, 3, 4].map((r) => (
        <g key={r} fill="#c9d3dc" opacity="0.6">
          <rect x="10" y={90 + r * 28} width="12" height="14" />
          <rect x="36" y={90 + r * 28} width="12" height="14" />
          <rect x="74" y={60 + r * 32} width="12" height="16" />
          <rect x="96" y={60 + r * 32} width="12" height="16" />
          <rect x="215" y={110 + r * 24} width="14" height="12" />
          <rect x="250" y={110 + r * 24} width="14" height="12" />
        </g>
      ))}
      <rect x="0" y="240" width="300" height="60" fill="#4a4f57" />
      <rect x="0" y="232" width="300" height="10" fill="#9aa1a8" />
      {[20, 90, 160, 230].map((dx) => (
        <rect key={dx} x={dx} y="268" width="40" height="5" fill="#e8e3c8" opacity="0.8" />
      ))}
      <rect x="146" y="40" width="7" height="200" fill="#2d3238" />
      <rect x="128" y="62" width="30" height="78" rx="5" fill="#1f2328" />
      <circle cx="143" cy="80" r="8" fill="#ff5146" />
      <circle cx="143" cy="101" r="8" fill="#5c4a1d" />
      <circle cx="143" cy="122" r="8" fill="#1e4d2b" />
      <rect x="236" y="142" width="5" height="96" fill="#2d3238" />
      <rect x="226" y="122" width="24" height="56" rx="4" fill="#1f2328" />
      <circle cx="238" cy="135" r="5.5" fill="#3d1a18" />
      <circle cx="238" cy="150" r="5.5" fill="#5c4a1d" />
      <circle cx="238" cy="165" r="5.5" fill="#3dff7a" />
      <rect x="22" y="246" width="78" height="26" rx="8" fill="#b23a3a" />
      <rect x="34" y="236" width="50" height="16" rx="6" fill="#c95050" />
      <circle cx="38" cy="274" r="7" fill="#15171a" />
      <circle cx="86" cy="274" r="7" fill="#15171a" />
    </svg>
  );
}
