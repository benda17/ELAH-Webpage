import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { GATE_URL, SIGNUP_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Install · ELAH APACT",
  description: "Put APACT on your website with one Cloudflare Worker. About five minutes, no code on your site.",
  alternates: { canonical: "/install" },
};

const STEPS = [
  {
    title: "Get your site id",
    body: (
      <>
        <a href={SIGNUP_URL} className="text-brand-soft underline underline-offset-2">Sign up</a> with your work email, then
        connect your website. Your dashboard shows your site id and the Worker file.
      </>
    ),
  },
  {
    title: "Create the Worker",
    body: (
      <>
        In Cloudflare: <strong className="text-ink">Workers &amp; Pages → Create → Worker</strong>. Name it{" "}
        <code className="mono text-brand-soft">elah</code>. Choose <strong className="text-ink">Edit code</strong>, paste
        ELAH&apos;s Worker from your dashboard, and <strong className="text-ink">Deploy</strong>.
      </>
    ),
  },
  {
    title: "Add two variables",
    body: (
      <>
        <strong className="text-ink">Settings → Variables and secrets</strong>:{" "}
        <code className="mono text-brand-soft">ELAH_GATE_URL</code> = <code className="mono">{GATE_URL}</code> and{" "}
        <code className="mono text-brand-soft">ELAH_SITE_ID</code> = your site id.
      </>
    ),
  },
  {
    title: "Route your domain",
    body: (
      <>
        <strong className="text-ink">Settings → Domains &amp; Routes</strong>: add{" "}
        <code className="mono">yourdomain.com/*</code> (and <code className="mono">www.yourdomain.com/*</code>).
      </>
    ),
  },
  {
    title: "Check it",
    body: (
      <>
        Press <strong className="text-ink">Check install</strong> in your dashboard, or open{" "}
        <code className="mono">https://yourdomain.com/elah/healthz</code>. It should say{" "}
        <code className="mono">{`{"ok":true}`}</code>. Agent visits start showing in your report.
      </>
    ),
  },
];

export default function InstallPage() {
  return (
    <PageShell
      eyebrow="Install"
      title="One Cloudflare Worker. About five minutes."
      lead="Your domain's DNS needs to be on Cloudflare. Nothing in your site's code changes. If ELAH can't be reached, your site keeps working."
    >
      <ol className="grid grid-cols-[minmax(0,1fr)] gap-4">
        {STEPS.map((step, i) => (
          <li key={step.title} className="glass flex gap-4 rounded-2xl p-5 sm:gap-5 sm:p-6">
            <span className="mono flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/60 bg-panel text-sm text-brand-soft">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 break-words">
              <h2 className="text-lg font-semibold tracking-tight text-ink">{step.title}</h2>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-10 rounded-2xl border border-line bg-ov/[0.02] p-6">
        <h2 className="text-lg font-semibold tracking-tight text-ink">Optional: act on your policy at checkout</h2>
        <p className="mt-1.5 max-w-3xl text-[15px] leading-relaxed text-muted">
          Add <code className="mono">ELAH_ENFORCE</code> = <code className="mono">1</code>,{" "}
          <code className="mono">ELAH_WORKER_SECRET</code> = any long random text, and{" "}
          <code className="mono">ELAH_POINTS</code> = your checkout, for example{" "}
          <code className="mono">{`{"pay": "POST /checkout*"}`}</code>. Agents that broke their user&apos;s task, or claimed
          to be a person, are then held until their user confirms.
        </p>
      </div>
    </PageShell>
  );
}
