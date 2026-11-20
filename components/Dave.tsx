"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function DavePeek({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.closest("section");
    if (!el || !section) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const top = section.getBoundingClientRect().top;
      const view = window.innerHeight;
      const start = view * 0.06;
      const end = view * 0.62;
      const traveled = Math.max(-top, 0);
      const progress = Math.min(Math.max((traveled - start) / (end - start), 0), 1);
      el.style.opacity = (1 - progress).toFixed(3);
      el.style.visibility = progress >= 1 ? "hidden" : "visible";
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`dave-peek ${className}`}>
      <Image
        src="/dave/cut/head.webp"
        alt="Dave, the ELAH mascot, peeking up from the corner"
        width={819}
        height={682}
        draggable={false}
        className="pointer-events-none h-auto w-full select-none"
      />
    </div>
  );
}
