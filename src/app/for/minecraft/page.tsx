import { Metadata } from 'next';

import {
    CloudIcon,
    DatabaseIcon,
    HardDriveIcon,
    CpuIcon,
    BlockchainIcon,
    UserHeart,
} from '@/components/icons/HugeIcons';
import Image from 'next/image';
import { PyroButton } from '@/components/ui/PyroButton';
import { getGameBySlug, plans } from '@/lib/static';
import { PyroLink } from '@/components/ui/PyroLink';

export const metadata: Metadata = {
    title: 'Pyro - Minecraft Hosting',
};

const Page = () => {
    const game = getGameBySlug('minecraft')!;

    return (
        <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                aria-hidden='true'
                style={{
                    maskImage: 'radial-gradient(585% 120% at 50% 100%, transparent 11.5%, white)',
                }}
                className='pointer-events-none absolute inset-0 z-0 h-[350px] w-full select-none object-cover opacity-50'
                src={game.images.banner}
                alt={``}
                decoding='async'
                loading='lazy'
            ></img>

            <section className='container relative flex flex-col items-center py-32'>
                <div className='flex flex-col items-center gap-8 text-center'>
                    <p>
                        NOTICE: This page is a work-in-progress. You caught us in the middle of making banger ass marketing material. Our work is open source, so keep track of progress here: <PyroLink external href='https://github.com/pyrohost/web'>https://github.com/pyrohost/web</PyroLink>
                    </p>
                    <h1 className='text-[max(48px,min(5vw,72px))] font-extrabold leading-[1.09] tracking-tighter'>
                        Minecraft Hosting
                    </h1>
                    <p className='max-w-2xl text-lg leading-[190%] text-[#ffffff99]'>
                        Minecraft is a sandbox video game developed and published by Mojang Studios. With Pyro, you can
                        host your own Minecraft server with ease. Whether you&apos;re playing with friends or running a
                        public server, we&apos;ve got a plan for you.
                    </p>

                    <div className='flex flex-row gap-2'>
                        <PyroButton useArrow color='brand' href={`/for/${game.slug}/#recommended`}>
                            View Plans
                        </PyroButton>
                    </div>
                </div>
            </section>

            <section className='relative z-10 w-full overflow-clip rounded-3xl rounded-t-none bg-gradient-to-b from-[#000000] to-[#121212]'>
                <div className='container relative grid gap-12 pb-20 pt-24 lg:gap-20 lg:py-40'>
                    <div className='relative z-[14] flex flex-col items-start justify-start'>
                        <h1 className='mx-auto mb-16 text-[max(48px,min(5vw,64px))] font-extrabold leading-[1.09] tracking-tighter text-white'>
                            <div className='flex flex-row items-center gap-4'>Why Pyro is right for you</div>
                        </h1>
                        {/* <h2 className='mx-auto mb-6 text-[max(18px,min(5vw,20px))] text-white'>
                            <div className='flex flex-row items-center gap-4'>
                                Pyro is the ultimate package for your server, no matter what you play.
                            </div>
                        </h2> */}

                        <div className='flex w-full flex-col items-center gap-8'>
                            <div className='relative flex min-h-[450px] w-full max-w-[650px] flex-col gap-4 overflow-hidden rounded-3xl bg-[#232323] p-8 text-center'>
                                <Image src='/img/unlimitedplayers.png' fill alt='' className='object-cover' />
                                <div className='relative mb-2 mt-auto text-3xl font-bold tracking-tight'>
                                    No player limits. Invite as many friends as you want, zero extra charges.
                                </div>
                            </div>

                            <div className='relative flex min-h-[450px] w-full max-w-[650px] flex-col gap-4 overflow-hidden rounded-3xl bg-[#232323] p-8 text-center'>
                                <Image src='/img/unlimitedplayers.png' fill alt='' className='object-cover' />
                                <div className='relative mb-2 mt-auto text-3xl font-bold tracking-tight'>
                                    Only pay for your memory usage. Everything else is on us.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
