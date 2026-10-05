"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import data from "./dave/poses.json";

const ART = data.poses.master;
const W = data.canvas.w;
const H = data.canvas.h;

export function DaveSpot({ className = "" }: { className?: string }) {
  return (
    <div
      data-dave-spot
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{ aspectRatio: `${W} / ${H}` }}
    />
  );
}

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

type Pose = { x: number; y: number; w: number };

/** Dave stays solid on a stand while that stand is in the viewport. No fade. */
function spotInView(id: "hero" | "cta"): Pose | null {
  const spot = document.querySelector<HTMLElement>(`#${id} [data-dave-spot]`);
  if (!spot) return null;
  const r = spot.getBoundingClientRect();
  if (r.width < 40) return null;
  if (r.bottom <= 0 || r.top >= window.innerHeight) return null;
  return { x: r.left, y: r.top, w: r.width };
}

export default function Dave() {
  const wrap = useRef<HTMLDivElement>(null);
  const figure = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;

    const tick = (now: number) => {
      const t = now / 1000;
      const reduced = reducedRef.current;
      const target = spotInView("hero") ?? spotInView("cta");

      if (wrap.current) {
        if (target) {
          wrap.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
          wrap.current.style.width = `${target.w}px`;
          wrap.current.style.opacity = "1";
          wrap.current.style.visibility = "visible";
          wrap.current.style.pointerEvents = "auto";
        } else {
          wrap.current.style.opacity = "0";
          wrap.current.style.visibility = "hidden";
          wrap.current.style.pointerEvents = "none";
        }
      }

      if (figure.current && !reduced && target) {
        figure.current.style.transform = `translateY(${Math.sin(t * 2.05) * -4}px)`;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timer = setTimeout(() => {
        setBlink(true);
        timer = setTimeout(() => {
          setBlink(false);
          if (Math.random() < 0.28) {
            timer = setTimeout(() => {
              setBlink(true);
              timer = setTimeout(() => {
                setBlink(false);
                schedule();
              }, 120);
            }, 160);
          } else {
            schedule();
          }
        }, 130);
      }, 1800 + Math.random() * 3200);
    };
    schedule();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={wrap}
      className="dave fixed left-0 top-0 z-40 select-none"
      style={{ width: 0, opacity: 0, visibility: "hidden" }}
    >
      <div aria-hidden className="dave-shadow absolute bottom-[0.5%] left-1/2 h-[5%] w-[46%] -translate-x-1/2 rounded-[50%]" />

      <div
        aria-label="Dave, the ELAH mascot"
        className="relative block w-full"
        style={{ aspectRatio: `${W} / ${H}` }}
      >
        <div ref={figure} className="absolute inset-0 origin-bottom will-change-transform">
          <Image src={ART.src} alt="" fill sizes="560px" draggable={false} priority className="pointer-events-none object-contain" />
          {ART.orb ? (
            <span
              aria-hidden
              className="dave-orb absolute rounded-full"
              style={{
                left: pct(ART.orb.cx - ART.orb.r * 2.2, W),
                top: pct(ART.orb.cy - ART.orb.r * 2.2, H),
                width: pct(ART.orb.r * 4.4, W),
                height: pct(ART.orb.r * 4.4, H),
              }}
            />
          ) : null}
          {ART.eyes.map((eye, i) => {
            const ew = eye.x1 - eye.x0;
            const eh = eye.y1 - eye.y0;
            return (
              <span
                key={i}
                aria-hidden
                className="dave-lid absolute"
                style={{
                  left: pct(eye.x0 - ew * 0.38, W),
                  top: pct(eye.y0 - eh * 0.34, H),
                  width: pct(ew * 1.76, W),
                  height: pct(eh * 1.58, H),
                  background: `radial-gradient(ellipse 80% 90% at 50% 30%, color-mix(in srgb, ${eye.skin} 62%, #ffe4cc), ${eye.skin})`,
                  transform: `scaleY(${blink ? 1 : 0})`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
