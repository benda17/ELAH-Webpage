import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import PromptInjectionDemo from "@/components/PromptInjectionDemo";
import LivePromptInjectionDemo from "@/components/LivePromptInjectionDemo";
import SolutionDemo from "@/components/SolutionDemo";
import Industries from "@/components/Industries";
import Comparison from "@/components/Comparison";
import PromptInjection from "@/components/PromptInjection";
import DataMoat from "@/components/DataMoat";
import Heritage from "@/components/Heritage";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <PromptInjectionDemo />
      <LivePromptInjectionDemo />
      <SolutionDemo />
      <Comparison />
      <Industries />
      <PromptInjection />
      <DataMoat />
      <Heritage />
      <CTA />
    </main>
  );
}

