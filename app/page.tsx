import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CaptchaBreak from "@/components/CaptchaBreak";
import Apact from "@/components/Apact";
import Shift from "@/components/Shift";
import AccessFlow from "@/components/AccessFlow";
import Verifies from "@/components/Verifies";
import LiveDemos from "@/components/LiveDemos";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="landing min-h-screen overflow-x-clip bg-[#05070d] text-white">
      <Navigation />
      <Hero />
      <CaptchaBreak />
      <Apact />
      <Shift />
      <AccessFlow />
      <Verifies />
      <LiveDemos />
      <CTA />
    </main>
  );
}
