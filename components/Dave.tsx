"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import data from "./dave/poses.json";

const ART = data.poses.master;
const W = data.canvas.w;
const H = data.canvas.h;

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

function useBlink() {
  const [blink, setBlink] = useState(false);

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

  return blink;
}

export function DavePeek({ className = "" }: { className?: string }) {
  return (
    <div className={`dave-peek ${className}`}>
      <Image
        src="/dave/cut/head.webp"
        alt="Dave, the ELAH mascot, peeking in from the side"
        width={819}
        height={682}
        priority
        draggable={false}
        className="pointer-events-none h-auto w-full select-none"
      />
    </div>
  );
}

export function DaveSpot({ className = "" }: { className?: string }) {
  const blink = useBlink();

  return (
    <div
      className={`dave pointer-events-none relative select-none ${className}`}
      style={{ aspectRatio: `${W} / ${H}` }}
    >
      <div aria-hidden className="dave-shadow absolute bottom-[0.5%] left-1/2 h-[5%] w-[46%] -translate-x-1/2 rounded-[50%]" />
      <div aria-label="Dave, the ELAH mascot" className="dave-figure absolute inset-0 origin-bottom">
        <Image
          src={ART.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 480px, 90vw"
          draggable={false}
          priority
          className="pointer-events-none object-contain"
        />
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
  );
}
