import { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";
import ServersSection from "@/components/sections/ServersSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import PanelSection from "@/components/sections/PanelSection";

export const metadata: Metadata = {
  title: "pyro - A better way to host games",
};

export default function Home() {
  return (
    <>
      <main data-pyro-index="" className="relative h-fit w-full shrink-0">
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
