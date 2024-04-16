import { Metadata } from 'next';
import PricingSection from '@/components/sections/PricingSection';
import ServersSection from '@/components/sections/ServersSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import PanelSection from '@/components/sections/PanelSection';
import RenderIfVisible from '@/components/ui/RenderIfVisible';
import Cobe from '@/components/Cobe';
import Section from '@/components/sections/_components/SectionLayout';
import ExternalLinkButton from '@/components/sections/_components/ExternalLinkButton';

export const metadata: Metadata = {
    title: 'pyro - A better way to host games',
};

export default function Home() {
    return (
        <>
            <main data-pyro-index='' className='relative h-fit w-full shrink-0'>
                <HeroSection />
                <PricingSection />
                <ServersSection />
                <Section>
                    <div className='z-20'>
                        <Section.Title maxWidth={800}>Go global with Pyro</Section.Title>
                        <Section.Description maxWidth={800}>
                            Our servers are currently in Europe and we&apos;re rapidly expanding to more locations. But
                            no matter where you are, we strive for the best playing experience for you and your players.
                        </Section.Description>
                        <div className='mx-auto mt-8 w-fit'>
                            <ExternalLinkButton href='https://discord.gg/fxeRFRbhQh' text='Order a server now' />
                        </div>
                    </div>
                    <div className='absolute z-10 h-[400px] w-[800px] bg-black blur-[100px]'></div>
                    <div className='absolute'>
                        <RenderIfVisible>
                            <Cobe />
                        </RenderIfVisible>
                    </div>
                </Section>
                <PanelSection />
                <CTASection />
            </main>
        </>
    );
}
