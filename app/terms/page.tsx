import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LegalText from "@/components/LegalText";

export const metadata: Metadata = {
  title: "Beta terms · ELAH APACT",
  description: "The terms for using APACT during the free beta.",
  alternates: { canonical: "/terms" },
};

const SECTIONS = [
  {
    title: "What the beta is",
    body: (
      <p>
        APACT (the ELAH gate) is offered free, as a beta. It is still changing, may be unavailable at times, and its
        verdicts about visitors are still being tuned. We may change or end the beta, and we will tell account holders by
        email before we end it or start charging.
      </p>
    ),
  },
  {
    title: "Your account",
    body: (
      <p>
        You sign in with a link sent to your email. Keep access to that inbox to yourself. Only connect websites you run
        or are allowed to change. Keep your site id, owner key and siteverify secret private.
      </p>
    ),
  },
  {
    title: "Reports, not decisions",
    body: (
      <p>
        APACT reports what it observed about each visit and recommends a response. Whether to let a visitor in, hold
        them, or ask a person to confirm is your decision, and so is your agent policy. APACT is provided “as is”, without
        warranties. To the extent the law allows, ELAH is not liable for decisions your site makes using its reports.
      </p>
    ),
  },
  {
    title: "Your visitors",
    body: (
      <p>
        APACT runs on your website, so you are responsible for telling your visitors about it in your own privacy notice
        and for having a lawful basis to use it. Our <a href="/privacy" className="text-brand-soft underline underline-offset-2">privacy notice</a>{" "}
        describes what APACT collects about them. Don’t use APACT to collect anything it isn’t built for.
      </p>
    ),
  },
  {
    title: "Fair use",
    body: (
      <p>
        Don’t try to break, overload or reverse-engineer the service, or use it against websites you don’t run. We may
        suspend accounts that do.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        Questions about these terms: <a href="mailto:elahsecurity@gmail.com" className="text-brand-soft underline underline-offset-2">elahsecurity@gmail.com</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <PageShell eyebrow="Beta terms" title="APACT beta terms" lead="Last updated 19 November 2026.">
      <LegalText sections={SECTIONS} />
    </PageShell>
  );
}
