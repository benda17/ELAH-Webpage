import Logo from "./Logo";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-white/5 px-6 pb-10 pt-28 sm:pt-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="noise relative overflow-hidden rounded-[36px] border border-[#1086FC]/30 bg-[#07101f]">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[640px] w-[640px] -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(16,134,252,0.45), transparent 62%)" }}
          />
          <div aria-hidden className="grid-fade pointer-events-none absolute inset-0" />
          <div className="relative flex flex-col items-center px-7 py-16 text-center sm:px-14 sm:py-20 lg:py-24">
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
              Make agent access verifiable before the protected action runs.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/65">
              Start with one narrow workflow. Keep the platform in control.
            </p>
            <a
              href="/demo"
              className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#1086FC] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_40px_-8px_rgba(16,134,252,0.8)] transition hover:-translate-y-0.5 hover:bg-[#2a95ff]"
            >
              Get a demo
              <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </Reveal>
      </div>
      <footer className="mx-auto mt-16 flex max-w-[1200px] flex-col gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo size="sm" />
        <p className="text-sm text-white/40">Verified access for AI agents on the web.</p>
      </footer>
    </section>
  );
}
