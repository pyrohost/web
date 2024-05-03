import { Metadata } from 'next';
import Link from 'next/link';
import HeroText from '@/components/HeroText';

import { BackgroundBeams } from '@/components/ui/BackgroundBeams';
import LogoWhite from '@/components/LogoWhite';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import PageNavigation from '@/components/PageNavigation';

export const metadata: Metadata = {
    title: 'Pyro - Where your world plays',
};

export default function Home() {
    return (
        <div className='flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1'>
            <div className='relative z-10 min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl bg-white'>
                <div
                    aria-hidden
                    className='pointer-events-none absolute inset-0 z-0 select-none opacity-50 hue-rotate-90'
                >
                    <BackgroundBeams />
                </div>
                <div className='relative mx-auto flex flex-col items-center gap-16 p-32 text-center'>
                    <div className=''>
                        <HeroText />
                    </div>
                    <div className='relative w-full max-w-[55ch]'>
                        <div className='flex w-full flex-col gap-8'>
                            <p className='text-xl leading-[190%]'>
                                Pyro is a new game hosting platform that makes it easy to play your favorite games with
                                friends. Incredible reliability, unlimited storage for all of your files, and beautiful
                                software to manage it all.
                            </p>
                            <div className='flex w-full items-center justify-center gap-4 rounded-full bg-brandGrad py-5 text-sm font-bold text-white'>
                                <p>Start playing in minutes</p>
                                <ArrowRightIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
