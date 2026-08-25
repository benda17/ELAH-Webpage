const AXES = [
  { id: "HA", label: "Human agency", value: 0.72 },
  { id: "FR", label: "Financial risk", value: 0.78 },
  { id: "EU", label: "Emotional urgency", value: 0.35 },
];

function Axis({ label, id, value }: (typeof AXES)[number]) {
  return (
    <div className="grid grid-cols-[4.5rem_1fr_2.4rem] items-center gap-3">
      <span className="mono text-[11px] uppercase tracking-[0.14em] text-white/45">
        {id}
      </span>
      <div className="h-[3px] bg-white/10">
        <div
          className="h-full bg-elah-blue"
          style={{ width: `${Math.round(value * 100)}%` }}
        />
      </div>
      <span className="mono text-right text-[12px] text-white/80">
        {value.toFixed(2)}
      </span>
      <span className="col-span-3 -mt-1 text-[11px] text-white/35">{label}</span>
    </div>
  );
}

export default function ScoreConsole() {
  const score = 0.87;
  const circumference = 2 * Math.PI * 42;
  const offset = circumference * (1 - score);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-[#1f2b45] bg-[#111a2c] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <header className="flex items-center justify-between border-b border-[#1f2b45] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-elah-blue" />
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-white/55">
              ELAH score · pre-tool
            </span>
          </div>
          <span className="mono text-[11px] text-white/40">42 ms · scored</span>
        </header>

        <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-white/40">
              Planned tool
            </p>
            <p className="mt-1 font-medium text-white">create_external_transfer</p>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/70">
              “Send 2,400 to the contractor on the approved invoice.”
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-[13px]">
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                  Intent
                </dt>
                <dd className="mt-0.5 text-white">external_transfer</dd>
              </div>
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                  Source
                </dt>
                <dd className="mt-0.5 text-white">agent</dd>
              </div>
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                  Bank policy
                </dt>
                <dd className="mt-0.5 text-white">needs confirmation</dd>
              </div>
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                  ELAH hook
                </dt>
                <dd className="mt-0.5 text-elah-blue">watch</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col items-center justify-center px-2">
            <div className="relative h-[118px] w-[118px]">
              <svg viewBox="0 0 100 100" className="-rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="rgba(231,236,247,0.1)"
                  strokeWidth="6"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#00A8FF"
                  strokeWidth="6"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="butt"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-semibold leading-none text-white">0.87</span>
              </div>
            </div>
            <p className="mt-2 mono text-[11px] uppercase tracking-[0.18em] text-elah-blue">
              Genuine
            </p>
            <p className="mono text-[11px] text-white/40">confidence 0.81</p>
          </div>
        </div>

        <div className="space-y-4 border-t border-[#1f2b45] px-5 py-5 sm:px-6">
          {AXES.map((axis) => (
            <Axis key={axis.id} {...axis} />
          ))}
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-[#1f2b45] bg-[#0b1220] px-5 py-3 sm:px-6">
          <p className="text-[12px] text-white/45">
            ELAH scores intent. It does not allow, block, or execute.
          </p>
          <p className="mono text-[11px] text-white/35">event · 8f3a…c21</p>
        </footer>
      </div>
    </div>
  );
}
