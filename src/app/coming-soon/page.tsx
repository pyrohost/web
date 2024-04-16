import BrandText from '@/components/sections/_components/BrandText';
import ExternalLinkButton from '@/components/sections/_components/ExternalLinkButton';
import Section from '@/components/sections/_components/SectionLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'pyro - Coming Soon',
};

const Page = () => {
    const content = `
  We're rapidly expanding our infrastructure and crafting the best
  hosting experience possible. If you're wondering if Pyro is right
  for you or your community, join our waitlist and we'll be in
  touch. 🔥
  `;
    return (
        <main className='relative h-full w-full'>
            <Section hero>
                <div className='mt-24 md:mt-48'>
                    <Section.Title hero>
                        <BrandText>Coming Soon</BrandText>
                    </Section.Title>
                    <Section.Description hero maxWidth={800}>
                        {content}
                    </Section.Description>
                    <div className='mt-8'>
                        <ExternalLinkButton href='https://forms.gle/4Z5K5vzZz4tJqJ9P7' text='Join the waitlist' />
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default Page;
