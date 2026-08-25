"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#demos", label: "Demos" },
  { href: "#industries", label: "Industries" },
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
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-[#1f2b45] bg-[#0a1024]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-3.5">
        <a href="#hero" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo size="sm" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-white/60 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:elahsecurity@gmail.com"
            className="border border-elah-blue px-4 py-2 text-[13px] font-medium text-elah-blue transition hover:bg-elah-blue hover:text-black"
          >
            Request access
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
        <div className="border-t border-[#1f2b45] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:elahsecurity@gmail.com"
              className="text-sm text-elah-blue"
              onClick={() => setOpen(false)}
            >
              Request access
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
