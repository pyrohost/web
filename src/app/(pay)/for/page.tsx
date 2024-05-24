import { Metadata } from 'next';
import Image from 'next/image';

import { GameSearch } from '@/components/pay/GameSearch';
import { PyroLink } from '@/components/ui/PyroLink';

export const metadata: Metadata = {
    title: 'Pyro - Search Games',
};

const Page = () => {
    return (
        <div className='relative flex flex-col items-center gap-8 px-4 py-16 text-center xl:px-24'>
            <div className='pointer-events-none absolute inset-0 flex h-full w-full select-none justify-between opacity-10 blur-sm contrast-200'>
                <div className='relative h-full w-[30%]'>
                    <Image
                        alt=''
                        aria-hidden
                        src='/img/chips2-nbg.png'
                        fill
                        className='pointer-events-none select-none object-cover brightness-125'
                    />
                </div>
                <div className='relative h-full w-[25%]'>
                    <Image
                        alt=''
                        aria-hidden
                        src='/img/chips-nbg.png'
                        fill
                        className='pointer-events-none select-none object-cover brightness-125'
                    />
                </div>
            </div>

            <div className='container mx-auto flex w-full flex-col gap-4'>
                <h1 className='mr-auto text-[max(24px,min(5vw,48px))] font-extrabold leading-[1.09] tracking-tighter'>
                    Search for games
                </h1>
                <section className='flex flex-col gap-2 text-left text-[20px] leading-[155%] text-[#ffffffbb]'>
                    <p>
                        Unlike other hosting platforms, Pyro doesn&apos;t charge you based on what game you want to
                        play.
                    </p>

                    <p>
                        Are we crazy? Maybe,{' '}
                        <PyroLink external={true} href='https://twitter.com/withpyro/status/1789515476944687125'>
                            but we&apos;re also the best
                        </PyroLink>
                        .
                    </p>
                </section>
                <GameSearch />
            </div>
        </div>
    );
};

export default Page;
