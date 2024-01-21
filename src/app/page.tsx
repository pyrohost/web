import { Metadata } from 'next'
import PricingSection from '@/components/main/PricingSection'
import ServersSection from '@/components/main/ServersSection'
import ExperienceSection from '@/components/main/ExperienceSection'
import HeroSection from '@/components/main/HeroSection'
import CTASection from '@/components/main/CTASection'

export const metadata: Metadata = {
  title: 'pyro.host - Home'
}

export default function Home() {
  return (
    <>
      <main className="shrink-0 h-fit w-full relative">
          <HeroSection />
          <PricingSection />
          <ServersSection />
          <ExperienceSection />
          <CTASection />
      </main>
    </>
  )
}
