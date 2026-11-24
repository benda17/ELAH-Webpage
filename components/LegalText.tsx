import type { ReactNode } from "react";

// Headed sections of plain legal text, in the site's type.
export default function LegalText({ sections }: { sections: { title: string; body: ReactNode }[] }) {
  return (
    <div className="max-w-3xl space-y-10">
      {sections.map((s) => (
        <section key={s.title}>
          <h2 className="text-xl font-semibold tracking-tight text-ink">{s.title}</h2>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted">{s.body}</div>
        </section>
      ))}
    </div>
  );
}
