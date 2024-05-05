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
                        <h1 className='mb-6 max-w-4xl text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter'>
                            <div className='flex flex-row items-center gap-4'>One app to manage it all</div>
                        </h1>
                        <p className='mb-6 text-xl font-medium leading-[190%] text-[#3C3C3C] opacity-65'>
                            With Pyro, you don’t hop through loops to get from paying to playing, it just works better.
                            It’s like a super-app for your server.
                        </p>

                        <Link
                            href='https://pay.pyro.host'
                            className='flex w-fit items-center justify-center gap-4 rounded-full border-2 border-neutral-800/10 px-6 py-3 text-sm font-bold'
                        >
                            <p>Learn more</p>
                        </Link>
                    </div>
                    <div className='relative flex w-full flex-col gap-5 xl:flex-row'>
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
                                <ul className='relative flex flex-col gap-4 lg:gap-16'>
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
                                            Uncompromising speed. Optimial performance. Pyro software is entirely
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
                </div>
                <div
                    className='container relative grid gap-12 pb-20 pt-24 lg:gap-20 lg:py-40'
                    style={
                        {
                            '--circle-background': '#3A42FF',
                        } as React.CSSProperties
                    }
                >
                    <div className='pointer-events-none absolute left-0 right-auto top-[0] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%] xl:left-auto xl:right-[50px]'></div>
                    <div className='relative z-[14] flex max-w-[700px] flex-col items-start justify-start'>
                        <div className='mb-4'>
                            <div className='flex h-8 cursor-default select-none items-center gap-[6px] rounded-full border border-[#3A42FF]/30 bg-[#3A42FF]/10 px-[11px] py-[4px] text-[#3A42FF]'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                >
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M11.9996 1.25C11.3523 1.25 10.8873 1.65936 10.641 1.90644C10.5378 2.01 10.4419 2.13129 10.3448 2.25393C10.1612 2.48602 9.97372 2.723 9.72585 2.85411C9.45986 2.99481 9.12847 2.89996 8.84314 2.8183L8.84312 2.8183C8.79246 2.8038 8.74325 2.78972 8.69612 2.77744C8.39818 2.69989 7.94408 2.58244 7.46289 2.64649C7.25379 2.67432 6.97942 2.74083 6.76685 2.9301C6.51511 3.15425 6.47447 3.43315 6.51128 3.64394C6.55607 3.9004 6.71491 4.11086 6.87083 4.31102L7.76315 5.4599L7.80338 5.51191C8.01996 5.79212 8.23862 6.07503 8.5264 6.28636C8.75278 6.4526 9.03923 6.5 9.32009 6.5H14.679C14.9599 6.5 15.2463 6.4526 15.4727 6.28636C15.7605 6.07504 15.9791 5.79215 16.1957 5.51194L16.236 5.4599L17.1283 4.31102C17.2842 4.11086 17.443 3.90039 17.4878 3.64394C17.5246 3.43315 17.484 3.15425 17.2323 2.9301C17.0197 2.74083 16.7453 2.67432 16.5362 2.64649C16.055 2.58244 15.6009 2.69989 15.303 2.77744C15.2559 2.78972 15.2066 2.80381 15.156 2.81831C14.8706 2.89996 14.5393 2.99481 14.2733 2.85411C14.0254 2.723 13.8379 2.48602 13.6543 2.25393C13.5572 2.13129 13.4613 2.01001 13.3581 1.90644C13.1118 1.65936 12.6468 1.25 11.9996 1.25ZM21.4339 16.8954C20.8804 13.5816 19.2507 10.4506 16.8355 8.11274L16.8355 8.11274C16.7348 8.01526 16.6844 7.9665 16.5724 7.88473C16.3473 7.72042 15.945 7.5576 15.6691 7.51914C15.5317 7.5 15.4329 7.5 15.2354 7.5H8.76409C8.56657 7.5 8.46781 7.5 8.33046 7.51914C8.05447 7.5576 7.65216 7.72042 7.42712 7.88473C7.32296 7.96078 7.23045 8.04847 7.13799 8.13796C5.31986 9.89741 3.23574 12.883 2.56564 16.8954C2.28233 18.5918 2.93708 20.0804 4.0623 21.12C5.17625 22.1493 6.75561 22.75 8.40281 22.75H15.5967C17.2439 22.75 18.8233 22.1493 19.9372 21.12C21.0624 20.0804 21.7172 18.5918 21.4339 16.8954ZM12.6628 11.8047C12.6628 11.3905 12.327 11.0547 11.9128 11.0547C11.4986 11.0547 11.1628 11.3905 11.1628 11.8047V11.9182C10.7744 12.0091 10.416 12.1703 10.1148 12.3925C9.62718 12.7523 9.24976 13.31 9.24976 13.9941C9.24976 14.5757 9.4606 15.1396 10.0155 15.5134C10.507 15.8445 11.1688 15.954 11.9128 15.954C12.5661 15.954 12.9068 16.0546 13.0683 16.1599C13.1623 16.2212 13.2498 16.3109 13.2498 16.6155C13.2498 16.8375 13.1709 16.9552 13.0023 17.0565C12.7882 17.185 12.4209 17.2771 11.9128 17.2771C11.3794 17.2771 10.9649 17.1019 10.747 16.9069C10.4383 16.6307 9.96415 16.657 9.68792 16.9656C9.41168 17.2743 9.43797 17.7484 9.74662 18.0246C10.1229 18.3614 10.6188 18.5922 11.1628 18.7026V18.8047C11.1628 19.2189 11.4986 19.5547 11.9128 19.5547C12.327 19.5547 12.6628 19.2189 12.6628 18.8047V18.7221C13.0586 18.6605 13.4421 18.5421 13.7747 18.3423C14.3615 17.9899 14.7498 17.4018 14.7498 16.6155C14.7498 15.9119 14.4894 15.2959 13.8877 14.9035C13.3536 14.5551 12.6508 14.454 11.9128 14.454C11.2655 14.454 10.9708 14.3484 10.8536 14.2694C10.7998 14.2332 10.7498 14.1921 10.7498 13.9941C10.7498 13.8987 10.8006 13.7506 11.0054 13.5995C11.2099 13.4486 11.5283 13.3326 11.9128 13.3326C12.4476 13.3326 12.8285 13.5521 12.9854 13.7585C13.2361 14.0883 13.7066 14.1524 14.0364 13.9018C14.3661 13.6511 14.4302 13.1806 14.1796 12.8508C13.8227 12.3813 13.2753 12.0619 12.6628 11.9185V11.8047Z'
                                        fill='#3A42FF'
                                    />
                                </svg>
                                <div className='text-15 font-medium'>Better Pricing</div>
                            </div>
                        </div>
                        <h1 className='mb-6 max-w-4xl text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter'>
                            <div className='flex flex-row items-center gap-4'>Hosting with unmatched value</div>
                        </h1>
                        <p className='mb-6 text-xl font-medium leading-[190%] text-[#3C3C3C] opacity-65'>
                            Never pay more to play a specific game. With Pyro, you get unlimited storage, a powerful
                            software suite, and efficient hardware. No hidden fees, zero add-ons, it&apos;s just
                            included.
                        </p>

                        <Link
                            href='https://pay.pyro.host'
                            className='flex w-fit items-center justify-center gap-4 rounded-full border-2 border-neutral-800/10 px-6 py-3 text-sm font-bold'
                        >
                            <p>Host your game server with Pyro</p>
                        </Link>
                    </div>
                    <div className='relative flex w-full flex-col gap-5 xl:flex-row'>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5'>
                            <div className='xl:px-auto relative grid place-items-center overflow-hidden rounded-[32px] border-2 border-neutral-800/10 p-4 sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
                                <div className='flex h-full flex-col items-center text-center'>
                                    <Image
                                        src='/img/backups_2x_final.png'
                                        width={576}
                                        height={400}
                                        alt=''
                                        className='relative mb-8 w-full'
                                    />
                                    <div className='mb-2 mt-auto text-2xl font-bold tracking-tight'>
                                        Free backups included. Never lose your worlds or data again
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5'>
                            <div className='xl:px-auto relative grid place-items-center overflow-hidden rounded-[32px] border-2 border-neutral-800/10 p-4 sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
                                <div className='flex h-full flex-col items-center text-center'>
                                    <Image
                                        src='/img/storage_final.png'
                                        width={576}
                                        height={400}
                                        alt=''
                                        className='relative mb-8 w-full '
                                    />
                                    <div className='mb-2 mt-auto text-2xl font-bold tracking-tight'>
                                        Unlimited storage for all of your files, mods, and worlds
                                    </div>
                                </div>
                            </div>
                        </div>{' '}
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5'>
                            <div className='xl:px-auto relative grid w-full place-items-center overflow-hidden rounded-[32px] bg-[#3A42FF]/20 p-4 text-center sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
                                <div className='flex flex-col items-center'>
                                    <Image
                                        src='/img/lock_final_final.png'
                                        width={576}
                                        height={400}
                                        alt=''
                                        className='relative mb-8 scale-105'
                                    />
                                    <div className='mb-2 mt-auto text-2xl font-bold tracking-tight text-[#3A42FF]'>
                                        Secured with Cloudflare Magic Transit for DDoS protection
                                    </div>
                                </div>
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
