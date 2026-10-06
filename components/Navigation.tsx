"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/#captcha", label: "Why CAPTCHAs fail" },
  { href: "/#apact", label: "APACT" },
  { href: "/#flow", label: "How it works" },
  { href: "/#verifies", label: "Verification" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div
        className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300 ${
          scrolled || open
            ? "border-white/10 bg-[#070a12]/75 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo size="sm" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-[13px] text-white/60 transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href="/demo"
            className="rounded-full bg-[#1086FC] px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-[#2a95ff]"
          >
            Talk to ELAH
          </a>
        </div>

        <button
          type="button"
          className="mono text-[11px] uppercase tracking-[0.16em] text-white/70 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-2 max-w-[1200px] rounded-3xl border border-white/10 bg-[#070a12]/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/80" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="/demo" className="text-sm font-semibold text-[#8cc4ff]" onClick={() => setOpen(false)}>
              Talk to ELAH
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
