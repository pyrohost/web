import Image from 'next/image';
import Section from '@/components/sections/_components/SectionLayout';
import BrandText from '@/components/sections/_components/BrandText';
import ExternalLinkButton from '@/components/sections/_components/ExternalLinkButton';

const PricingSectionImages = () => {
    return (
        <div className='img-opacity-animation pointer-events-none absolute inset-0 select-none'>
            <div className='pointer-events-none relative inset-0 flex h-full w-full select-none justify-between contrast-100'>
                <div className='relative h-full w-[25%]'>
                    <Image
                        alt=''
                        aria-hidden
                        src='/img/chips2.png'
                        fill
                        className='pointer-events-none select-none object-cover'
                    />
                </div>
                <div className='relative h-full w-[25%]'>
                    <Image
                        alt=''
                        aria-hidden
                        src='/img/chips.png'
                        fill
                        className='pointer-events-none select-none object-cover'
                    />
                </div>
            </div>
        </div>
    );
};

const PricingSectionCircleThing = () => {
    return (
        <div
            className='pointer-events-none absolute top-1/2 h-[48rem] w-[48rem] -translate-y-[82%] rounded-full'
            style={{
                background: 'linear-gradient(180deg, rgba(248, 116, 116, 0.07) 0%, rgba(252, 142, 142, 0.00) 64.74%)',
            }}
        ></div>
    );
};

const PricingSection = () => {
    return (
        <>
            <Section>
                <PricingSectionImages />
                <PricingSectionCircleThing />
                <Section.Title>
                    Pricing that <BrandText>scales with you</BrandText>
                </Section.Title>
                <Section.Description maxWidth={600}>
                    Only pay for what you need. Pyro offers simple pricing for servers of all sizes. Minecraft starts at
                    only $4 per month.
                </Section.Description>

                <div className='mt-24 flex w-full flex-col gap-4 xl:flex-row'>
                </div>
            </Section>
        </>
    );
};

export default PricingSection;
