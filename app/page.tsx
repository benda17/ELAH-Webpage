import Navigation from "@/components/Navigation";
import Dave from "@/components/Dave";
import Hero from "@/components/Hero";
import CaptchaBreak from "@/components/CaptchaBreak";
import Apact from "@/components/Apact";
import Shift from "@/components/Shift";
import AccessFlow from "@/components/AccessFlow";
import Verifies from "@/components/Verifies";
import Boundary from "@/components/Boundary";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="landing min-h-screen overflow-x-clip bg-[#05070d] text-white">
      <Navigation />
      <Dave />
      <Hero />
      <CaptchaBreak />
      <Apact />
      <Shift />
      <AccessFlow />
      <Verifies />
      <Boundary />
      <CTA />
    </main>
  );
}
