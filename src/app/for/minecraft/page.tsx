import clsx from 'clsx';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { PyroButton } from '@/components/ui/PyroButton';
import PyroPill from '@/components/ui/PyroPill';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import { getGameBySlug, plans } from '@/lib/static';

export const metadata: Metadata = {
    title: 'Pyro - Minecraft Hosting',
};

const Checkmark = ({ brand }: { brand?: boolean }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
        fill='none'
        viewBox='0 0 18 18'
        className='absolute left-0 top-[2px] h-4 w-4'
        aria-hidden='true'
    >
        <path
            fill={brand ? '#FF4438' : 'currentColor'}
            fillRule='evenodd'
            d='M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18m3.626-11.687a.7.7 0 0 0-1.252-.626l-3.066 6.131-1.813-1.813a.7.7 0 0 0-.99.99l2.5 2.5a.7.7 0 0 0 1.121-.182z'
            clipRule='evenodd'
        ></path>
    </svg>
);

const getPlanDescription = (slug: string) => {
    switch (slug) {
        case 'solo':
            return 'Perfect for you and a few friends to play together.';
        case 'friends':
            return 'Great for small communities running an SMP or modpacks.';
        case 'community':
            return 'Ideal for larger communities and groups .';
        case 'network':
            return 'For extraordinarily large networks and communities.';
    }
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

            <section className='container relative flex flex-col items-center py-32 pt-24'>
                <div className='flex flex-col items-center gap-8 text-center'>
                    <h1 className='text-[max(48px,min(5vw,72px))] font-extrabold leading-[1.09] tracking-tighter'>
                        Minecraft Hosting
                    </h1>
                    <p className='max-w-3xl text-xl font-medium leading-[190%] text-[#ffffff99]'>
                        With Pyro, you can host your own Minecraft server with ease. Whether you&apos;re playing with
                        friends or running a public server, we&apos;ve got a plan for you.
                    </p>
                </div>
                <div className='relative mx-auto mt-20 w-full md:mt-9 lg:w-full xl:mt-12'>
                    <h2 className='sr-only'>Pyro pricing plans</h2>
                    <ul className='grid-gap relative z-10 grid grid-cols-1 gap-x-6 gap-y-4 md:gap-y-6 lg:grid-cols-2 lg:gap-y-4 xl:grid-cols-4'>
                        {plans.map((plan) => (
                            <li
                                className={clsx(
                                    'group relative flex min-h-full flex-col rounded-xl bg-[#ffffff15] px-8 pb-10 pt-5 sm:p-5 xl:px-6 xl:py-5',
                                    {
                                        'border-[1px] border-brand': plan.slug === 'friends',
                                        'border border-transparent': plan.slug !== 'friends',
                                    },
                                )}
                                key={plan.slug}
                            >
                                <div className='mb-6 flex flex-col border-b border-dashed border-white/20 pb-5 xl:mb-5'>
                                    <h3
                                        className={clsx('text-xl font-medium leading-none tracking-tight xl:text-lg', {
                                            'text-brand': plan.slug === 'friends',
                                        })}
                                    >
                                        {plan.name}

                                        {plan.slug === 'friends' && (
                                            <span className='ml-2 rounded-full bg-brand px-2 py-1 text-xs font-bold text-white'>
                                                Recommended
                                            </span>
                                        )}
                                    </h3>

                                    <p className='relative mt-14 text-[36px] font-bold leading-none tracking-tighter md:mt-4 xl:mt-9 xl:text-[32px]'>
                                        ${plan.price}{' '}
                                        <span className='text-[20px] font-normal tracking-normal text-[#ffffff99]'>
                                            /month
                                        </span>
                                    </p>
                                    <a
                                        className={clsx(
                                            'mt-9 inline-flex items-center justify-center whitespace-nowrap rounded-full px-12 py-4 text-center font-bold shadow-md outline-none transition-colors duration-200',
                                            {
                                                'bg-brand hover:bg-brand/70': plan.slug === 'friends',
                                                'bg-[#ffffff22] hover:bg-[#ffffff33]': plan.slug !== 'friends',
                                            },
                                        )}
                                        href='https://pay.pyro.host'
                                    >
                                        Get started
                                    </a>
                                    <p className='mt-9 font-light leading-snug lg:min-h-max xl:mt-8'>
                                        {getPlanDescription(plan.slug)}
                                    </p>
                                </div>
                                <div className='mt-auto flex grow flex-col'>
                                    <ul className='flex flex-col flex-wrap gap-y-4'>
                                        <li className='relative pl-6 leading-tight tracking-tight'>
                                            <Checkmark brand={plan.slug === 'friends'} />
                                            <span>{plan.cpu} CPU cores</span>
                                        </li>

                                        <li className='relative pl-6 leading-tight tracking-tight'>
                                            <Checkmark brand={plan.slug === 'friends'} />
                                            <span>
                                                {plan.ram} GB of RAM with {plan.overflow} GB overflow
                                            </span>
                                        </li>
                                        <li className='relative pl-6 leading-tight tracking-tight'>
                                            <Checkmark brand={plan.slug === 'friends'} />
                                            <span>Unlimited players</span>
                                        </li>

                                        <li className='relative pl-6 leading-tight tracking-tight'>
                                            <Checkmark brand={plan.slug === 'friends'} />
                                            <span>Unlimited storage</span>
                                        </li>

                                        <li className='relative pl-6 leading-tight tracking-tight'>
                                            <Checkmark brand={plan.slug === 'friends'} />
                                            <span>15 free backups included</span>
                                        </li>

                                        <li className='relative pl-6 leading-tight tracking-tight'>
                                            <Checkmark brand={plan.slug === 'friends'} />
                                            <span>Support over Discord</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className='mx-auto mt-12 max-w-3xl text-center text-xl font-medium leading-[190%] text-[#ffffff99]'>
                        Not sure which plan is right for you?{' '}
                        <Link className='text-brand underline' href={`/for/${game.slug}/#recommended`}>
                            Explore detailed plan features
                        </Link>
                    </p>
                </div>
            </section>

            <section
                id='recommended'
                className='relative z-10 w-full overflow-clip rounded-3xl rounded-t-none bg-gradient-to-b from-[#000000] to-[#121212]'
            >
                <div className='container relative grid gap-12 pb-20 pt-24 lg:gap-20 lg:py-40'>
                    <div className='relative z-[14] flex flex-col items-start justify-start'>
                        <h1 className='mx-auto mb-6 text-[max(48px,min(5vw,64px))] font-extrabold leading-[1.09] tracking-tighter text-white'>
                            <div className='flex flex-row items-center gap-4'>Why Pyro is right for you</div>
                        </h1>

                        <h2 className='mx-auto mb-12 max-w-4xl text-center text-xl font-medium leading-[190%] text-[#ffffff99]'>
                            All Pyro plans are fully-featured and come with everything you need to run a successful
                            Minecraft server. You get the same great features no matter which plan you choose.
                        </h2>

                        <div className='mb-8 flex w-full flex-col items-center gap-8 md:flex-row'>
                            <div className='relative flex min-h-[450px] w-full flex-col gap-4 overflow-hidden rounded-3xl bg-[#232323] p-8 text-center'>
                                <Image
                                    aria-hidden
                                    src='/img/unlimitedplayers_final.png'
                                    fill
                                    alt=''
                                    quality={100}
                                    className='pointer-events-none select-none object-cover'
                                />
                                <div className='relative mb-2 mt-auto text-3xl font-bold tracking-tight'>
                                    No player limits. Invite as many friends as you want with zero extra charges.
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
                                    Only pay for the RAM you need. Everything else is included on Pyro, for free.
                                </div>
                            </div>
                        </div>

                        <div className='mb-8 flex w-full flex-col items-center gap-8 md:flex-row'>
                            <div className='relative flex min-h-[450px] w-full flex-col gap-4 overflow-hidden rounded-3xl bg-[#232323] p-8 text-center'>
                                <Image
                                    aria-hidden
                                    src='/img/unlimitedstorage.png'
                                    fill
                                    alt=''
                                    className='pointer-events-none select-none object-cover'
                                    quality={100}
                                    style={{
                                        maskImage: 'radial-gradient(85% 100% at 50% 120%, transparent 55.5%, white)',
                                    }}
                                />
                                <div className='relative mb-2 mt-auto text-3xl font-bold tracking-tight'>
                                    Unlimited storage. Upload as many worlds, mods, and plugins as you want.
                                </div>
                            </div>

                            <div className='relative flex min-h-[450px] w-full flex-col gap-4 overflow-hidden rounded-3xl bg-[#232323] p-8 text-center'>
                                <Image
                                    aria-hidden
                                    src='/img/unlimitedmods_fixfix.png'
                                    fill
                                    alt=''
                                    quality={100}
                                    className='pointer-events-none select-none object-cover'
                                    style={{
                                        maskImage: 'radial-gradient(85% 100% at 50% 120%, transparent 55.5%, white)',
                                    }}
                                />
                                <div className='relative mb-2 mt-auto text-3xl font-bold tracking-tight'>
                                    Works with all your favorite mods and plugins. No restrictions.
                                </div>
                            </div>
                        </div>

                        <div className='flex w-full flex-col items-center'>
                            <div className='relative flex w-full flex-col gap-4 overflow-hidden rounded-3xl bg-[#232323] p-8'>
                                <div className='relative mb-2 text-3xl font-bold tracking-tight'>
                                    A minimum of 2 CPU cores on every plan. Always.
                                </div>
                                <div
                                    className='relative mb-2 max-w-[47rem] text-xl'
                                    style={{
                                        textWrap: 'balance',
                                    }}
                                >
                                    Why? Although Minecraft is single-threaded, your mods and plugins will take
                                    advantage of multiple cores. Your Pyro server will simply run smoother and faster.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative z-10 w-full overflow-clip'>
                <div className='container relative grid gap-12 pb-20 pt-24 lg:gap-20 lg:py-40'>
                    <div className='relative z-[14] flex max-w-[600px] flex-col items-start justify-start'>
                        <PyroPill
                            leftChild={
                                <Image
                                    src='/img/pyrodactylorange.png'
                                    width={24}
                                    height={24}
                                    alt=''
                                    className='h-6 w-6'
                                />
                            }
                        >
                            Better Software
                        </PyroPill>
                        <h1 className='mb-6 max-w-4xl text-[max(48px,min(5vw,84px))] font-extrabold leading-[1.09] tracking-tighter text-white'>
                            <div className='flex flex-row items-center gap-4'>Manage it all with Pyro&apos;s app</div>
                        </h1>
                        <p className='mb-6 text-xl font-medium leading-[190%] text-[#ffffff99]'>
                            With Pyro, you don’t hop through loops to get from paying to playing, it just works better.
                            It’s like a super-app for your server.
                        </p>
                    </div>
                    <div className='relative flex w-full flex-col gap-5 xl:flex-row'>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5'>
                            <div className='relative grid aspect-video w-full place-items-center overflow-hidden'>
                                <Image src='/img/panel/home.png' fill alt='' className='object-cover' />
                            </div>
                        </div>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:w-[45%] xl:gap-5'>
                            <div className='xl:px-auto relative grid place-items-center overflow-hidden rounded-2xl border-2 border-white/10 bg-[#ffffff08] p-4 text-white sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
                                <ul className='relative flex flex-col gap-4 lg:gap-8'>
                                    <li className='leading-[190%]'>
                                        <span className='font-bold'>Easy. </span>
                                        <span>
                                            Whether you’re a complete beginner or a seasoned pro, Pyro makes it easy to
                                            manage your server.
                                        </span>
                                    </li>
                                    <li className='leading-[190%]'>
                                        <span className='font-bold'>Fast. </span>
                                        <span>
                                            Uncompromising speed. Optimal performance. Pyro software is entirely
                                            bullet-proof.
                                        </span>
                                    </li>
                                    <li className='leading-[190%]'>
                                        <span className='font-bold'>Powerful. </span>
                                        <span>With an in-browser IDE, file searching, CMD+K, and so much more.</span>
                                    </li>
                                    <li className='leading-[190%]'>
                                        <span className='font-bold'>Delightful. </span>
                                        <span>You’ve never used anything like Pyro before.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Carousel
                        className='dark w-full'
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <div className='relative aspect-video h-full w-full overflow-hidden rounded-2xl bg-[#d6b4ba0f]'>
                                    <Image className='select-none' fill alt='' src='/img/panel/files.png' />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className='relative aspect-video h-full w-full overflow-hidden rounded-2xl'>
                                    <Image className='select-none' fill alt='' src='/img/panel/editor.png' />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className='relative aspect-video h-full w-full overflow-hidden rounded-2xl'>
                                    <Image className='select-none' fill alt='' src='/img/panel/home.png' />
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <p className='mt-4 text-center text-xs font-bold opacity-50'>Drag or swipe to see more</p>
                    </Carousel>
                </div>
            </section>

            <section className='relative z-10 w-full overflow-clip rounded-3xl rounded-b-none bg-gradient-to-b from-[#121212] to-black'>
                <div className='container relative grid gap-4 pb-20 pt-24 lg:gap-12 lg:py-40'>
                    <h1 className='mx-auto mb-4 text-[max(48px,min(5vw,64px))] font-extrabold leading-[1.09] tracking-tighter text-white'>
                        <div className=''>Frequently Asked Questions</div>
                    </h1>

                    <Accordion className='mx-auto w-full max-w-3xl text-left' type='multiple'>
                        <AccordionItem className='text-left' value='item-1'>
                            <AccordionTrigger className='text-left'>
                                Can I add plugins and mods to my Minecraft server?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes! You can add plugins and mods to your Minecraft server. You have full control over
                                your server, so you can upload your own mods and plugins, and install them with ease.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='text-left' value='item-2'>
                            <AccordionTrigger className='text-left'>
                                Can I upgrade my Pyro server later?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes! You can upgrade your server at any time. You can easily upgrade your server by
                                selecting a new plan and paying the difference. Your server will be upgraded instantly.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='text-left' value='item-3'>
                            <AccordionTrigger className='text-left'>
                                Can I switch between mod loaders? Does Pyro support Fabric, Forge, Neoforge?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes! You can switch between games and software at any time. Our panel allows you to
                                easily switch with just a few clicks. And with free backups, you can switch back to your
                                old setup at any time.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='text-left' value='item-4'>
                            <AccordionTrigger className='text-left'>
                                How much storage do I get with my Minecraft server on Pyro?
                            </AccordionTrigger>
                            <AccordionContent>
                                You get unlimited storage with your Minecraft server. You can upload as many worlds,
                                mods, and plugins as you want. There are no limits to how much storage you can use. You
                                only pay for the RAM you need.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='text-left' value='backups'>
                            <AccordionTrigger className='text-left'>Does Pyro offer backups?</AccordionTrigger>
                            <AccordionContent>
                                Yes! Pyro offers multiple free backups for all servers. You can create a backup of your
                                server at any time, and restore it in one click. You can also schedule backups to run
                                automatically, so you never lose your progress.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='text-left' value='offsite'>
                            <AccordionTrigger className='text-left'>
                                Can I store my Pyro backups elsewhere, like Google Drive?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes! You can store your backups offsite, like on Google Drive. You can set up automatic
                                backups to run on a schedule. You can also download your backups at any time, so you
                                always have a copy of your server.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='text-left' value='item-5'>
                            <AccordionTrigger className='text-left'>Does Pyro have player limits?</AccordionTrigger>
                            <AccordionContent>
                                No, we do not have player limits. You can invite as many friends as you want to play on
                                your server. There are no extra charges for additional players. Ever.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='text-left' value='item-6'>
                            <AccordionTrigger className='text-left'>
                                Can I run a public server with Pyro?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes! You can run a public server with Pyro. You can set up your server to be public or
                                private, using Minecraft&apos;s whitelist system, or a plugin that manages it for you.
                                You have full control over your server, so you can customize it to your liking.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='text-left' value='item-7'>
                            <AccordionTrigger className='text-left'>
                                Can I invite others to manage my server?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes! You can invite others to manage your server. You can create multiple accounts with
                                different permissions, so you can give others access to your server without giving them
                                full control. You can also revoke access at any time.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='text-left' value='refunds'>
                            <AccordionTrigger className='text-left'>
                                Does Pyro offer refunds if I&apos;m not satisfied?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes! We offer a 24-hour money-back guarantee. If you&apos;re not satisfied with your
                                server, you can request a refund within 24 hours of purchase. All we ask is that you let
                                us know why you&apos;re not satisfied, so we can improve.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            <section className='relative z-10 flex flex-col items-center gap-8 overflow-hidden rounded-b-3xl px-4 py-48 text-center xl:px-24'>
                <div className='relative top-12' aria-hidden>
                    <div
                        className='pointer-events-none absolute left-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                        style={
                            {
                                '--circle-background': '#FF4438',
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className='pointer-events-none absolute left-0 top-[-80px] z-[0] hidden h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%] xl:block'
                        style={
                            {
                                '--circle-background': '#FF4438',
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className='pointer-events-none absolute right-0 top-[400px] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                        style={
                            {
                                '--circle-background': '#FF4438',
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className='pointer-events-none absolute left-[220px] top-[400px] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                        style={
                            {
                                '--circle-background': '#FF4438',
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className='pointer-events-none absolute right-[200px] top-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                        style={
                            {
                                '--circle-background': '#FF4438',
                            } as React.CSSProperties
                        }
                    ></div>
                </div>
                <div className='img-opacity-animation pointer-events-none absolute inset-0 select-none'>
                    <div className='pointer-events-none relative inset-0 h-screen min-h-screen w-screen select-none'>
                        <Image
                            alt=''
                            aria-hidden
                            src='/img/herobackground.svg'
                            fill
                            className='pointer-events-none select-none object-cover opacity-25'
                        />
                    </div>
                </div>
                <h1 className='relative max-w-4xl py-4 pb-3 pt-5 text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter lg:pb-5'>
                    Still have questions?
                </h1>
                <p className='relative text-xl leading-[195%] text-[#ffffff99]'>
                    Contact us and get in touch with our team if you have any questions, or desire a custom plan.
                </p>
                <div className='flex flex-col items-center gap-4 sm:flex-row'>
                    <PyroButton
                        leftChild={
                            <svg viewBox='0 0 16 16' className='h-4 w-4'>
                                <path
                                    fill='currentColor'
                                    d='M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z'
                                ></path>
                            </svg>
                        }
                        color={'brand'}
                        type={'ghost'}
                        external
                        href='https://pyro.host/discord'
                    >
                        Contact Us
                    </PyroButton>
                    <PyroButton color={'white'} type={'ghost'} href='https://pyro.host/for'>
                        View other games
                    </PyroButton>
                </div>
            </section>
        </>
    );
};

export default Page;
