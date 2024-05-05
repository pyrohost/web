import { Metadata } from 'next';
import Link from 'next/link';
import HeroText from '@/components/HeroText';

// import { BackgroundBeams } from '@/components/ui/BackgroundBeams';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Pyro - Where your world plays',
};

export default function Home() {
    return (
        <div className='flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1'>
            <div className='relative z-10 min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl bg-white'>
                <div className='relative'>
                    <div
                        className='pointer-events-none absolute left-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                        style={
                            {
                                '--circle-background': 'rgba(113 64 253 / 100%)',
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className='pointer-events-none absolute left-0 top-[-80px] z-[0] hidden h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%] xl:block'
                        style={
                            {
                                '--circle-background': 'rgba(246 111 143 / 100%)',
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className='pointer-events-none absolute right-0 top-[400px] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                        style={
                            {
                                '--circle-background': 'rgba(25 146 215 / 100%)',
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className='pointer-events-none absolute left-[220px] top-[400px] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                        style={
                            {
                                '--circle-background': 'rgba(255 125 70 / 100%)',
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className='pointer-events-none absolute right-[200px] top-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                        style={
                            {
                                '--circle-background': 'rgba(255 125 70 / 100%)',
                            } as React.CSSProperties
                        }
                    ></div>
                </div>
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
            <section className='relative z-10 flex flex-col items-center gap-16 px-4 py-32 text-center text-white xl:px-24'></section>
            <section className='relative z-10 w-full overflow-clip rounded-3xl bg-white'>
                <Image
                    src='/img/softwarehero2.png'
                    width={1161}
                    height={845}
                    alt=''
                    className='absolute -top-[10rem] right-0 h-[845px] w-[1161px] object-cover'
                />
                <div className='container relative grid gap-12 pb-20 pt-24 lg:gap-20 lg:py-40'>
                    <div className='relative z-[14] flex max-w-[600px] flex-col items-start justify-start'>
                        <div className='mb-4'>
                            <div className='flex h-8 cursor-default select-none items-center gap-[6px] rounded-full border border-brand/30 bg-brand/10 px-[11px] py-[4px] text-brand'>
                                <Image
                                    src='/img/pyrodactylorange.png'
                                    width={24}
                                    height={24}
                                    alt=''
                                    className='h-6 w-6'
                                />
                                <div className='text-15 font-medium'>Pyro Software</div>
                            </div>
                        </div>
                        <h1 className='mb-6 max-w-4xl text-[max(84px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter'>
                            <div className='flex flex-row items-center gap-4'>One app to manage it all</div>
                        </h1>
                        <p className='mb-6 text-xl font-medium leading-[190%] text-[#3C3C3C] opacity-65'>
                            With Pyro, you don’t hop through loops to get from paying to playing, it just works better.
                            It’s like a super-app for your server, and it comes with every Pyro plan.
                        </p>

                        <Link
                            href='https://pay.pyro.host'
                            className='flex w-fit items-center justify-center gap-4 rounded-full border-2 border-neutral-800/10 px-6 py-3 text-sm font-bold'
                        >
                            <p>Learn more</p>
                        </Link>
                    </div>
                    <div className='relative flex w-full flex-col  gap-5 xl:flex-row'>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5'>
                            <div className='xl:px-auto relative grid w-full place-items-center overflow-hidden rounded-[32px] bg-brand/20 p-4 sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
                                <Image
                                    src='/img/panel_light.png'
                                    width={1029}
                                    height={550}
                                    alt=''
                                    className='relative scale-105'
                                />
                            </div>
                        </div>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:w-[40%] xl:gap-5'>
                            <div className='xl:px-auto relative grid place-items-center overflow-hidden rounded-[32px] border-2 border-neutral-800/10 p-4 sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
                                <ul className='relative flex flex-col gap-8'>
                                    <li className='leading-[190%]'>
                                        <span className='font-bold'>Easy. </span>
                                        <span>
                                            Whether you’re a complete beginner or a pro, Pyro makes it easy to manage
                                            your server.
                                        </span>
                                    </li>
                                    <li className='leading-[190%]'>
                                        <span className='font-bold'>Fast. </span>
                                        <span>
                                            Uncompromising speed, all the time. {'>'}100ms interactions for a seamless
                                            experience.
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
                </div>
            </section>
            <section className='relative z-10 flex flex-col items-center gap-8 px-4 py-32 text-center text-white xl:px-24'>
                <Image src='/img/pyrocpu.png' width={335} height={335} alt='' className='h-32 w-32' />
                <h1 className='max-w-3xl py-4 pb-3 pt-5 text-[max(84px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter lg:pb-5'>
                    Make Pyro where your world plays
                </h1>
                <div className='inline-flex items-center gap-5 rounded-full border border-dashed border-brand/50 p-2'>
                    <Link
                        href='https://pay.pyro.host'
                        className='flex w-full items-center justify-center gap-4 rounded-full bg-brandGrad px-6 py-5 text-sm font-bold text-white shadow-lg'
                    >
                        <p>Start a game server in minutes</p>
                        <ArrowRightIcon />
                    </Link>
                </div>
            </section>
        </div>
    );
}
