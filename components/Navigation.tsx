"use client";

import { useState } from "react";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import { LOGIN_URL, SIGNUP_URL } from "@/lib/links";

const LINKS = [
  { href: "/#apact", label: "APACT" },
  // { href: "/#flow", label: "How it works" }, // hidden with the "How ELAH works" section
  { href: "/#live", label: "Live demos" },
  { href: "/pricing", label: "Pricing" },
  { href: "/install", label: "Install" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 rounded-full border border-line bg-nav-bg py-2 pl-5 pr-2.5 shadow-card backdrop-blur-[18px]">
        <a href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo size="sm" />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-[13px] py-[7px] text-[13.5px] font-medium text-muted transition hover:text-ink">
              {link.label}
            </a>
          ))}
          <a href={LOGIN_URL} className="rounded-full px-[13px] py-[7px] text-[13.5px] font-medium text-muted transition hover:text-ink">
            Sign in
          </a>
          <ThemeSwitch className="ml-2" />
          <a
            href={SIGNUP_URL}
            className="ml-2 rounded-full bg-button px-[14px] py-1.5 text-[13px] font-semibold text-white shadow-button transition hover:bg-brand-hover"
          >
            Get started
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
        <ThemeSwitch />
        <button
          type="button"
          className="mono rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-muted"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
        </div>
      </div>

      {open ? (
        <div className="mx-auto mt-2 max-w-[1200px] rounded-[22px] border border-line-2 bg-panel-2 px-6 py-5 shadow-card md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-ink-2" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href={LOGIN_URL} className="text-sm text-ink-2" onClick={() => setOpen(false)}>
              Sign in
            </a>
            <a href={SIGNUP_URL} className="text-sm font-semibold text-brand-soft" onClick={() => setOpen(false)}>
              Get started free
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
