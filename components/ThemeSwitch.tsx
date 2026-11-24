"use client";

import { useEffect, useState } from "react";

// Monitor's light/dark switch. The choice lives in the elah_theme cookie (shared with X-ray and APACT); the theme
// script in app/layout.tsx applies it before the next page paints.
export default function ThemeSwitch({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.cookie = `elah_theme=${next}; Path=/; Max-Age=31536000; SameSite=Lax${
      location.protocol === "https:" ? "; Secure" : ""
    }`;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "dark" ? "#05070d" : "#f4f6f9");
    setDark(!dark);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title="Light or dark"
      className={`theme-switch inline-flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-ov/[0.04] text-ink shadow-[inset_0_0_0_1px_var(--line-2)] transition hover:bg-ov/[0.09] ${className}`}
    >
      <i aria-hidden="true" />
    </button>
  );
}
