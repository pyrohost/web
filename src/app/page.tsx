import { Metadata } from 'next';
import Link from 'next/link';
import HeroText from '@/components/HeroText';

// import { BackgroundBeams } from '@/components/ui/BackgroundBeams';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export const metadata: Metadata = {
    title: 'Pyro - Where your world plays',
};

export default function Home() {
    return (
        <div className='flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1'>
            <div className='relative z-10 min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl bg-white'>
                {/* <div aria-hidden className='pointer-events-none absolute inset-0 z-0 select-none hue-rotate-90'>
                    <BackgroundBeams />
                </div> */}
                <div className='relative mx-auto flex flex-col items-center gap-16 px-4 py-32 text-center xl:px-24'>
                    <div className='flex xl:hidden'>
                        <h1 className='text-4xl font-black leading-[1] tracking-tighter'>Where your world plays</h1>
                    </div>
                    <div className='hidden xl:flex'>
                        <HeroText />
                    </div>
                    <div className='relative w-full max-w-[55ch]'>
                        <div className='flex w-full flex-col gap-8'>
                            <p className='text-xl leading-[190%]'>
                                Pyro is a new game hosting platform that makes it easy to play your favorite games with
                                friends. Incredible reliability, unlimited storage for all of your files, and beautiful
                                software to manage it all.
                            </p>
                            <div className='inline-flex items-center gap-5 rounded-full border border-dashed border-brand/50 p-2'>
                                <Link
                                    href='https://pay.pyro.host'
                                    className='flex w-full items-center justify-center gap-4 rounded-full bg-brandGrad py-5 text-sm font-bold text-white shadow-lg'
                                >
                                    <p>Start a game server in minutes</p>
                                    <ArrowRightIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
