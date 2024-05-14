import { GameSearchBar } from '@/components/GameSearchBar';
import Image from 'next/image';
import Link from 'next/link';

export default function Search() {
    return (
        <div className='flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1'>
            <div className='relative z-10 min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl'>
                <div className='pointer-events-none absolute inset-0 -z-20 flex h-full w-full select-none justify-between opacity-10 blur-sm contrast-200'>
                    <div className='relative h-full w-[29%]'>
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
                <div className='relative mx-auto flex flex-col items-center gap-8 px-4 py-16 text-center xl:px-24'>
                    <div className='container mx-auto flex flex-col gap-4'>
                        <h1 className='mr-auto text-[max(24px,min(5vw,48px))] font-extrabold leading-[1.09] tracking-tighter'>
                            Search for games
                        </h1>
                        <p className='mb-4 mr-auto text-left leading-[190%]'>
                            Unlike other hosting platforms, Pyro doesn&apos;t charge you based on what game you want to
                            play.
                            <br />
                            Are we crazy? Maybe,{' '}
                            <Link
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://twitter.com/withpyro/status/1789515476944687125'
                                className='text-brand'
                            >
                                but we&apos;re also the best
                            </Link>
                            .
                        </p>
                        <GameSearchBar />
                    </div>
                </div>
            </div>
        </div>
    );
}
