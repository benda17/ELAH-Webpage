import HeroNewsletterForm from "./HeroNewsletterForm";
import ScoreConsole from "./ScoreConsole";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 85% 10%, rgba(0,168,255,0.14), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 90%, rgba(34,211,238,0.06), transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <div className="animate-fade-in">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-elah-blue">
            Reasoning-level security for agentic AI
          </p>
          <h1 className="mt-5 max-w-xl text-[2.85rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4rem]">
            Score the intent
            <br />
            <span className="text-elah-blue">before</span> the tool runs.
          </h1>
          <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-white/70 sm:text-lg">
            ELAH closes the Intent Gap by validating an agent&apos;s reasoning
            before tool execution. Enterprises can deploy autonomous agents
            knowing internal reasoning aligns with declared intent.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/demo"
              className="inline-flex items-center justify-center bg-elah-blue px-6 py-3.5 text-[15px] font-semibold text-black transition hover:bg-white"
            >
              Request a demo
            </a>
            <a
              href="#demos"
              className="inline-flex items-center justify-center border border-white/20 px-6 py-3.5 text-[15px] font-medium text-white transition hover:border-white/50"
            >
              View demos
            </a>
          </div>

          <HeroNewsletterForm />

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <dt className="mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                Timing
              </dt>
              <dd className="mt-1 text-sm text-white">Pre-tool</dd>
            </div>
            <div>
              <dt className="mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                Object
              </dt>
              <dd className="mt-1 text-sm text-white">Reasoning</dd>
            </div>
            <div>
              <dt className="mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                Authority
              </dt>
              <dd className="mt-1 text-sm text-white">Bank policy</dd>
            </div>
          </dl>
        </div>

        <div className="animate-slide-up">
          <ScoreConsole />
          <p className="mt-4 text-center text-[12px] text-white/35 lg:text-left">
            Live product surface — genuine external transfer, scored before
            execution.{" "}
            <a
              href="https://drive.google.com/file/d/1mFHntfcK0G3sXlwkATMkwZEYge90iL-R/view"
              target="_blank"
              rel="noreferrer"
              className="text-elah-blue underline-offset-2 hover:underline"
            >
              Watch walkthrough
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
