import type { ReactNode } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

// A plain inner page: the site's navigation, a heading block and a footer.
export default function PageShell({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="landing min-h-screen overflow-x-clip bg-bg text-ink">
      <Navigation />
      <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:pt-36">
        <div
          aria-hidden
          className="hero-glow pointer-events-none absolute -right-40 -top-20 h-[620px] w-[620px] rounded-full opacity-50 blur-3xl"
        />
        <div className="relative mx-auto max-w-[1080px]">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-brand-soft">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl">
            {title}
          </h1>
          {lead ? <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">{lead}</p> : null}
          <div className="mt-14">{children}</div>
        </div>
      </section>
      <footer className="mx-auto flex max-w-[1080px] flex-col gap-4 border-t border-line px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo size="sm" />
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-dim">
          <a href="/pricing" className="hover:text-ink">Pricing</a>
          <a href="/install" className="hover:text-ink">Install</a>
          <a href="/terms" className="hover:text-ink">Beta terms</a>
          <a href="/privacy" className="hover:text-ink">Privacy</a>
        </nav>
      </footer>
    </main>
  );
}
