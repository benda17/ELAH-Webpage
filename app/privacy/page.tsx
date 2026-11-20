import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LegalText from "@/components/LegalText";

export const metadata: Metadata = {
  title: "Privacy · ELAH APACT",
  description: "What APACT collects about website owners and about the visitors of the websites that use it.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  {
    title: "Website owners (account holders)",
    body: (
      <p>
        Your email address, your plan, when you accepted these terms, the websites you connected (their name and
        address), and which paid plans you asked to hear about. We use them to run your account and to email you sign-in
        links and news about your plan. We don’t sell them.
      </p>
    ),
  },
  {
    title: "Visitors of websites that use APACT",
    body: (
      <>
        <p>
          On a website that uses APACT, we receive what the visitor’s browser does on that site: the pages and link and
          form-field <em>names</em> it uses, counts and timings of clicks, key presses and pointer movement, and how
          decision buttons were pressed. We never receive what a visitor types into a field.
        </p>
        <p>
          We also see the browser’s user agent, the time zone and country its connection comes from, a TLS fingerprint, any
          signature an AI agent sends to identify itself, and, if the website sends it, its bot manager’s score. We don’t
          store IP addresses. Values that look like email addresses, secrets or long numbers are removed from links before
          anything is kept.
        </p>
        <p>
          From this we produce a summary of each visit for the website owner: whether the visitor was likely a person or an
          agent, and for agents their task, loyalty, honesty and who made each decision. For these
          visitors the website owner decides why APACT is used, and ELAH processes the data for them.
        </p>
      </>
    ),
  },
  {
    title: "Where it is processed",
    body: (
      <p>
        APACT runs on Vercel in Frankfurt (EU), and account and visit data is stored in a Supabase Postgres database in
        Ireland (EU). Sign-in emails are sent through Google. The Cloudflare Worker runs in the website owner’s own
        Cloudflare account.
      </p>
    ),
  },
  {
    title: "Cookies",
    body: (
      <p>
        APACT sets only cookies it needs to work: a signed sign-in cookie for account holders, and short-lived signed
        cookies (five to thirty minutes) on the visited website that carry one visit’s state and its signed result. No
        advertising or analytics cookies.
      </p>
    ),
  },
  {
    title: "Your rights",
    body: (
      <p>
        You can ask to see, correct or delete your account data, and visitors can ask the website they visited, or us, about
        visit data. Write to <a href="mailto:elahsecurity@gmail.com" className="text-[#8cc4ff] underline underline-offset-2">elahsecurity@gmail.com</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <PageShell eyebrow="Privacy" title="APACT privacy notice" lead="Last updated 19 November 2026.">
      <LegalText sections={SECTIONS} />
    </PageShell>
  );
}
