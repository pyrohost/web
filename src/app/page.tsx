import { Metadata } from "next";
import PricingSection from "@/components/main/PricingSection";
import ServersSection from "@/components/main/ServersSection";
import ExperienceSection from "@/components/main/ExperienceSection";
import HeroSection from "@/components/main/HeroSection";
import CTASection from "@/components/main/CTASection";
import PanelSection from "@/components/main/PanelSection";

export const metadata: Metadata = {
  title: "pyro - A better way to host games",
};

export default function Home() {
  return (
    <>
      <main className="relative h-fit w-full shrink-0">
        <HeroSection />
        <PricingSection />
        <ServersSection />
        <ExperienceSection />
        <PanelSection />
        <CTASection />
      </main>
    </>
  );
}
