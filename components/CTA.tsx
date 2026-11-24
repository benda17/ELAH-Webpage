import Logo from "./Logo";
import Reveal from "./Reveal";
import { SIGNUP_URL } from "@/lib/links";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-line px-6 pb-10 pt-28 sm:pt-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="noise relative overflow-hidden rounded-[36px] border border-brand/30 bg-panel">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[640px] w-[640px] -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgb(16 134 252 / var(--hero-glow)), transparent 62%)" }}
          />
          <div aria-hidden className="grid-fade pointer-events-none absolute inset-0" />
          <div className="relative flex flex-col items-center px-7 py-16 text-center sm:px-14 sm:py-20 lg:py-24">
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl">
              Put APACT on your site in five minutes.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
              Free during the beta. One Cloudflare Worker, no code on your site,
              and your first agent report today.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={SIGNUP_URL}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-button px-7 py-3.5 text-[15px] font-semibold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-brand-hover"
              >
                Get started free
                <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="/demo"
                className="inline-flex items-center justify-center rounded-full border border-line-2 bg-ov/[0.03] px-7 py-3.5 text-[15px] font-medium text-ink-2 transition hover:border-dim hover:text-ink"
              >
                Talk to ELAH
              </a>
            </div>
          </div>
        </Reveal>
      </div>
      <footer className="mx-auto mt-16 flex max-w-[1200px] flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo size="sm" />
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-dim">
          <a href="/#live" className="hover:text-ink">Live demos</a>
          <a href="/pricing" className="hover:text-ink">Pricing</a>
          <a href="/install" className="hover:text-ink">Install</a>
          <a href="/terms" className="hover:text-ink">Beta terms</a>
          <a href="/privacy" className="hover:text-ink">Privacy</a>
        </nav>
      </footer>
    </section>
  );
}
