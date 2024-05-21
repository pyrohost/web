import { Metadata } from 'next';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
                    {/* <p>
                        NOTICE: This page is a work-in-progress. You caught us in the middle of making banger ass marketing material. Our work is open source, so keep track of progress here: <PyroLink external href='https://github.com/pyrohost/web'>https://github.com/pyrohost/web</PyroLink>
                    </p> */}
                    <h1 className='text-[max(48px,min(5vw,72px))] font-extrabold leading-[1.09] tracking-tighter'>
                        Minecraft Hosting
                    </h1>
                    <p className='max-w-2xl text-lg leading-[190%] text-[#ffffff99]'>
                        With Pyro, you can host your own Minecraft server with ease. Whether you&apos;re playing with
                        friends or running a public server, we&apos;ve got a plan for you.
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

                        <div className='flex w-full flex-col items-center gap-8 md:flex-row'>
                            <div className='relative flex min-h-[450px] w-full flex-col gap-4 overflow-hidden rounded-3xl bg-[#232323] p-8 text-center'>
                                <Image
                                    aria-hidden
                                    src='/img/unlimitedplayers_final.png'
                                    fill
                                    alt=''
                                    className='pointer-events-none select-none object-cover'
                                />
                                <div className='relative mb-2 mt-auto text-3xl font-bold tracking-tight'>
                                    No player limits. Invite as many friends as you want, zero extra charges.
                                </div>
                            </div>

                            <div className='relative flex min-h-[450px] w-full flex-col gap-4 overflow-hidden rounded-3xl bg-[#232323] p-8 text-center'>
                                <Image
                                    aria-hidden
                                    src='/img/unlimitedspecs.png'
                                    quality={100}
                                    fill
                                    alt=''
                                    className='pointer-events-none select-none object-cover'
                                />
                                <div className='relative mb-2 mt-auto text-3xl font-bold tracking-tight'>
                                    Only pay for the RAM you need. Upgrade or downgrade at any time.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative z-10 flex flex-col items-center gap-8 px-4 py-32 text-center xl:px-24'>
                <div className='container relative grid gap-12 pb-20 pt-24 lg:gap-20 lg:py-40'>
                    <h1 className='mx-auto mb-16 text-[max(48px,min(5vw,64px))] font-extrabold leading-[1.09] tracking-tighter text-white'>
                        <div className=''>Frequently Asked Questions</div>
                    </h1>

                    <Accordion className='mx-auto w-full max-w-3xl text-left' type='multiple'>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger>Can I add plugins and mods to my Minecraft server?</AccordionTrigger>
                            <AccordionContent>
                                Yes! You can add plugins and mods to your Minecraft server. You have full control over
                                your server, so you can upload your own mods and plugins, and install them with ease.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-2'>
                            <AccordionTrigger>Can I upgrade my Pyro server later?</AccordionTrigger>
                            <AccordionContent>
                                Yes! You can upgrade your server at any time. You can easily upgrade your server by
                                selecting a new plan and paying the difference. Your server will be upgraded instantly.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-3'>
                            <AccordionTrigger>
                                Can I switch between mod loaders? Does Pyro support Fabric, Forge, Neoforge?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes! You can switch between games and software at any time. Our panel allows you to
                                easily switch with just a few clicks. And with free backups, you can switch back to your
                                old setup at any time.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-4'>
                            <AccordionTrigger>
                                How much storage do I get with my Minecraft server on Pyro?
                            </AccordionTrigger>
                            <AccordionContent>
                                You get unlimited storage with your Minecraft server. You can upload as many worlds,
                                mods, and plugins as you want. There are no limits to how much storage you can use. You
                                only pay for the RAM you need.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-5'>
                            <AccordionTrigger>Does Pyro have player limits?</AccordionTrigger>
                            <AccordionContent>
                                No, we do not have player limits. You can invite as many friends as you want to play on
                                your server. There are no extra charges for additional players. Ever.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-6'>
                            <AccordionTrigger>Can I run a public server with Pyro?</AccordionTrigger>
                            <AccordionContent>
                                Yes! You can run a public server with Pyro. You can set up your server to be public or
                                private, using Minecraft&apos;s whitelist system, or a plugin that manages it for you.
                                You have full control over your server, so you can customize it to your liking.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-7'>
                            <AccordionTrigger>Can I invite others to manage my server?</AccordionTrigger>
                            <AccordionContent>
                                Yes! You can invite others to manage your server. You can create multiple accounts with
                                different permissions, so you can give others access to your server without giving them
                                full control. You can also revoke access at any time.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </>
    );
};

export default Page;
