import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Monitor's tokens (app/globals.css). brand and ov carry an alpha; the rest are used as they are.
        bg: "var(--bg)",
        panel: "var(--panel)",
        "panel-2": "var(--panel-2)",
        sunk: "var(--sunk)",
        "nav-bg": "var(--nav-bg)",
        edge: "var(--edge)",
        line: "var(--line)",
        "line-2": "var(--line-2)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        muted: "var(--muted)",
        dim: "var(--dim)",
        ov: "rgb(var(--ov) / <alpha-value>)",
        brand: "rgb(var(--brand-rgb) / <alpha-value>)",
        button: "var(--button)",
        "brand-hover": "var(--brand-hover)",
        "brand-soft": "var(--brand-soft)",
        accent: "var(--accent)",
        ok: "var(--ok)",
        "ok-ink": "var(--ok-ink)",
        warn: "var(--warn)",
        "warn-ink": "var(--warn-ink)",
        bad: "var(--bad)",
        "bad-ink": "var(--bad-ink)",
        elah: {
          blue: "#1086FC",
          "blue-dark": "#0091E6",
          "blue-light": "#1AB8FF",
          gray: "#4A4A4A",
          "gray-dark": "#2A2A2A",
        },
      },
      fontFamily: {
        sans: ["var(--text)"],
        mono: ["var(--mono)"],
      },
      boxShadow: {
        card: "var(--shadow)",
        glow: "var(--glow)",
        button: "0 10px 30px -12px rgb(16 134 252 / .7)",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out",
        "slide-up": "slideUp 0.7s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
