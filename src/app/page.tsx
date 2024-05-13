import { Metadata } from 'next';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Pyro - Where your world plays',
};

export default function Home() {
    return (
        <div className='flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1'>
            <div className='relative z-10 min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl rounded-b-none bg-black text-white'>
                <>
                    <div className='pointer-events-none absolute -top-40 z-20 flex min-h-screen w-full select-none items-center justify-center'>
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
                    </div>
                    <div
                        style={{
                            background:
                                'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(204, 67, 67, 0.3),var(--transparent))',
                        }}
                        className='relative flex h-full min-h-screen w-full flex-col justify-center px-4 md:px-16'
                    >
                        <div className='img-opacity-animation pointer-events-none absolute inset-0 select-none'>
                            <div className='pointer-events-none relative inset-0 h-screen min-h-screen w-screen select-none'>
                                <Image
                                    alt=''
                                    aria-hidden
                                    src='/img/herobackground.svg'
                                    fill
                                    className='pointer-events-none select-none object-cover opacity-45'
                                />
                            </div>
                        </div>
                        <div className='relative flex h-full flex-col items-center justify-end pb-36 text-center'>
                            <h1 className='mb-8 text-[max(48px,min(5vw,72px))] font-black leading-[1] tracking-tighter'>
                                <span
                                    className=''
                                    style={{
                                        padding: '0 0.5rem',
                                    }}
                                >
                                    <div className='mb-12 flex h-[406px] items-center justify-center'>
                                        <Image
                                            alt=''
                                            className='pointer-events-none absolute z-[200]'
                                            aria-hidden
                                            src='/img/pyrocpu.png'
                                            width={400}
                                            height={400}
                                            quality={100}
                                        />
                                        <svg
                                            className='pointer-events-none absolute w-screen'
                                            width='100%'
                                            height='100%'
                                            viewBox='0 0 1920 700'
                                            fill='none'
                                        >
                                            <path
                                                d='M1 3.00354C179.628 198.347 377.216 285 632.684 285C888.152 285 973.973 285 1290.31 285C1606.65 285 1797.76 143.751 1921 1.00002'
                                                stroke='url(#path)'
                                                vectorEffect='non-scaling-stroke'
                                            ></path>
                                            <path
                                                d='M1 197.5C185.5 282.5 336 320 631 320C926 320 980 320 1291 320C1602 320 1746.5 276.5 1921 197.5'
                                                stroke='url(#path)'
                                                vectorEffect='non-scaling-stroke'
                                            ></path>
                                            <path
                                                d='M1 354H1921'
                                                stroke='url(#path)'
                                                vectorEffect='non-scaling-stroke'
                                            ></path>
                                            <path
                                                d='M1 510C185.5 425 336 387.5 631 387.5C926 387.5 980 387.5 1291 387.5C1602 387.5 1746.5 431 1921 510'
                                                stroke='url(#path)'
                                                vectorEffect='non-scaling-stroke'
                                            ></path>
                                            <path
                                                d='M1 704.996C179.628 509.653 377.216 423 632.684 423C888.152 423 973.973 423 1290.31 423C1606.65 423 1797.76 564.249 1921 707'
                                                stroke='url(#path)'
                                                vectorEffect='non-scaling-stroke'
                                            ></path>
                                            <line
                                                x1='0'
                                                y1='0'
                                                x2='80'
                                                y2='0'
                                                stroke='url(#datum)'
                                                strokeWidth='2'
                                                strokeLinecap='round'
                                                transform='translate(-80,0)'
                                                vectorEffect='non-scaling-stroke'
                                            >
                                                <animateMotion
                                                    dur='3s'
                                                    repeatCount='indefinite'
                                                    path='M1 3.00354C179.628 198.347 377.216 285 632.684 285C888.152 285 973.973 285 1290.31 285C1606.65 285 1797.76 143.751 1921 1.00002'
                                                    rotate='auto'
                                                    begin='1'
                                                ></animateMotion>
                                            </line>
                                            <line
                                                x1='0'
                                                y1='0'
                                                x2='80'
                                                y2='0'
                                                stroke='url(#datum)'
                                                strokeWidth='2'
                                                strokeLinecap='round'
                                                transform='translate(-80,0)'
                                                vectorEffect='non-scaling-stroke'
                                            >
                                                <animateMotion
                                                    dur='2.5s'
                                                    repeatCount='indefinite'
                                                    path='M1 197.5C185.5 282.5 336 320 631 320C926 320 980 320 1291 320C1602 320 1746.5 276.5 1921 197.5'
                                                    rotate='auto'
                                                    begin='5'
                                                ></animateMotion>
                                            </line>
                                            <line
                                                x1='0'
                                                y1='0'
                                                x2='80'
                                                y2='0'
                                                stroke='url(#datum)'
                                                strokeWidth='2'
                                                strokeLinecap='round'
                                                transform='translate(-80,0)'
                                                vectorEffect='non-scaling-stroke'
                                            >
                                                <animateMotion
                                                    dur='4s'
                                                    repeatCount='indefinite'
                                                    path='M1 354H1921'
                                                    rotate='auto'
                                                    begin='3'
                                                ></animateMotion>
                                            </line>
                                            <line
                                                x1='0'
                                                y1='0'
                                                x2='80'
                                                y2='0'
                                                stroke='url(#datum)'
                                                strokeWidth='2'
                                                strokeLinecap='round'
                                                transform='translate(-80,0)'
                                                vectorEffect='non-scaling-stroke'
                                            >
                                                <animateMotion
                                                    dur='3.5s'
                                                    repeatCount='indefinite'
                                                    path='M1 510C185.5 425 336 387.5 631 387.5C926 387.5 980 387.5 1291 387.5C1602 387.5 1746.5 431 1921 510'
                                                    rotate='auto'
                                                    begin='2'
                                                ></animateMotion>
                                            </line>
                                            <line
                                                x1='0'
                                                y1='0'
                                                x2='80'
                                                y2='0'
                                                stroke='url(#datum)'
                                                strokeWidth='2'
                                                strokeLinecap='round'
                                                transform='translate(-80,0)'
                                                vectorEffect='non-scaling-stroke'
                                            >
                                                <animateMotion
                                                    dur='4.5s'
                                                    repeatCount='indefinite'
                                                    path='M1 704.996C179.628 509.653 377.216 423 632.684 423C888.152 423 973.973 423 1290.31 423C1606.65 423 1797.76 564.249 1921 707'
                                                    rotate='auto'
                                                    begin='0'
                                                ></animateMotion>
                                            </line>
                                            <defs>
                                                <linearGradient
                                                    id='datum'
                                                    x1='0'
                                                    y1='0'
                                                    x2='80'
                                                    y2='0'
                                                    gradientUnits='userSpaceOnUse'
                                                >
                                                    <stop stopColor='transparent ' offset='0'></stop>
                                                    <stop stopColor='#fa4e49' offset='1'></stop>
                                                </linearGradient>
                                                <linearGradient
                                                    id='path'
                                                    x1='0'
                                                    y1='0'
                                                    x2='100%'
                                                    y2='0'
                                                    gradientUnits='userSpaceOnUse'
                                                >
                                                    <stop stopColor='transparent ' offset='0%'></stop>
                                                    <stop stopColor='#291111' offset='10%'></stop>
                                                    <stop stopColor='#29111166' offset='90%'></stop>
                                                    <stop stopColor='transparent' offset='100%'></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    Where your world plays
                                </span>
                            </h1>
                            <p className='mb-8 max-w-[750px] text-xl leading-[195%] text-[#ffffff99]'>
                                Pyro is a new game hosting platform that makes it easier to play your favorite games
                                with friends. Incredible reliability, a beautiful game panel, and more.
                            </p>
                            <Link
                                href={'https://pay.pyro.host'}
                                className='flex items-center justify-center gap-4 rounded-full bg-brand py-3 pl-8 pr-6 text-sm font-bold'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <p>Start your game server</p>
                                <ArrowRightIcon className='h-6 w-6' />
                            </Link>
                        </div>
                    </div>
                </>
            </div>
            <section className='relative z-10 w-full overflow-clip rounded-3xl rounded-t-none bg-gradient-to-b from-[#000000] to-[#121212] text-white'>
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
                                <div className='text-15 font-medium'>Better Software</div>
                            </div>
                        </div>
                        <h1 className='mb-6 max-w-4xl text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter'>
                            <div className='flex flex-row items-center gap-4'>One app to manage it all</div>
                        </h1>
                        <p className='mb-6 text-xl font-medium leading-[190%] text-[#ffffff99]'>
                            With Pyro, you don’t hop through loops to get from paying to playing, it just works better.
                            It’s like a super-app for your server.
                        </p>

                        <Link
                            href='https://pay.pyro.host'
                            className='flex w-fit items-center justify-center gap-4 rounded-full border-2 border-white/10 px-6 py-3 text-sm font-bold'
                        >
                            <p>Learn more</p>
                        </Link>
                    </div>
                    <div className='relative flex w-full flex-col gap-5 xl:flex-row'>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5'>
                            <div className='relative grid aspect-video w-full place-items-center overflow-hidden'>
                                <Image src='/img/panel/home.png' fill alt='' className='object-cover' />
                            </div>
                        </div>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:w-[45%] xl:gap-5'>
                            <div className='xl:px-auto relative grid place-items-center overflow-hidden rounded-2xl border-2 border-white/10 bg-[#ffffff08] p-4 sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
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
            <section className='relative z-10 flex flex-col items-center gap-8 px-4 py-32 text-center text-white xl:px-24'>
                <h1 className='mb-6 max-w-3xl text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter'>
                    <div className=''>
                        Transparent and <span className='text-brand'>open-source</span>
                    </div>
                </h1>
                <div className='lg max-w-[600px] text-[16px] leading-[190%]'>
                    Pyro is the only hosting company that publicly shares its core source code. We&apos;re transparent
                    about how we operate, we iterate in coordination with our community, and we&apos;re always open to
                    contributions.
                </div>
                <Link
                    href='https://github.com/pyrohost'
                    className='flex w-fit items-center justify-center gap-4 rounded-full border-2 border-white/20 px-6 py-3 text-sm font-bold'
                >
                    <svg height='16' viewBox='0 0 14 14' width='16'>
                        <path
                            d='M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z'
                            fill='currentColor'
                            fillRule='nonzero'
                        ></path>
                    </svg>
                    <p>Star our work on GitHub</p>
                </Link>
                <Image
                    src='/img/transparency-img2x.png'
                    alt=''
                    quality={100}
                    width={239}
                    height={800}
                    className='absolute right-0 top-0'
                />
            </section>
            <section className='relative z-10 w-full overflow-clip rounded-3xl rounded-b-none bg-gradient-to-b from-[#000] to-black text-white'>
                <Image
                    src='/img/minecrafthero.jpg'
                    alt=''
                    width={1920}
                    height={1080}
                    className='absolute inset-0 opacity-15 grayscale'
                    style={{
                        maskImage: 'radial-gradient(85% 100% at 50% 100%, transparent 55.5%, white)',
                    }}
                />
                <div
                    className='container relative grid gap-12 pb-20 pt-24 lg:gap-20 lg:py-40'
                    style={
                        {
                            '--circle-background': '#FF4438',
                        } as React.CSSProperties
                    }
                >
                    <div className='pointer-events-none absolute bottom-0 left-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%] xl:left-auto xl:right-[50px]'></div>
                    {/* <div className='pointer-events-none absolute left-0 right-auto top-[0] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%] xl:left-auto xl:right-[50px]'></div> */}
                    <div className='relative z-[14] flex max-w-[750px] flex-col items-start justify-start'>
                        <div className='mb-4'>
                            <div className='flex h-8 cursor-default select-none items-center gap-[6px] rounded-full border border-brand/30 bg-brand/10 px-[11px] py-[4px] text-brand backdrop-blur-xl'>
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
                                        fill='#FF4438'
                                    />
                                </svg>
                                <div className='text-15 font-medium'>Better Hosting</div>
                            </div>
                        </div>
                        <h1 className='mb-6 max-w-4xl text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter'>
                            <div
                                className=''
                                style={{
                                    textShadow: '0 4px 12px rgba(0,0,0,.9)',
                                }}
                            >
                                All your games, {''}
                                <span className='text-brand'>powered by Pyro</span>
                            </div>
                        </h1>
                        <p className='mb-6 text-xl font-medium leading-[190%] text-[#ffffff99]'>
                            Never pay more to play a specific game. With Pyro, you get unlimited storage, a powerful
                            software suite, and efficient hardware. No hidden fees, zero add-ons, it&apos;s just
                            included.
                        </p>

                        <Link
                            href='https://pay.pyro.host'
                            className='flex w-fit items-center justify-center gap-4 rounded-full border-2 border-white/10 px-6 py-3 text-sm font-bold'
                        >
                            <p>Host your game server, risk-free</p>
                            <ArrowRightIcon className='h-4 w-4' />
                        </Link>
                    </div>
                    <div className='relative flex w-full flex-col gap-5 md:flex-row'>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5'>
                            <div className='xl:px-auto relative grid place-items-center overflow-hidden rounded-[32px] border-2 border-white/10 p-4 sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
                                <div className='flex h-full flex-col items-center text-center'>
                                    <Image
                                        src='/img/backups_dark.png'
                                        width={576}
                                        height={400}
                                        alt=''
                                        className='relative mb-8 w-full grayscale'
                                    />
                                    <div className='mb-2 mt-auto text-2xl font-bold tracking-tight'>
                                        Free backups included. Never lose your worlds or data again
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5'>
                            <div className='xl:px-auto relative grid place-items-center overflow-hidden rounded-[32px] border-2 border-white/10 p-4 sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
                                <div className='flex h-full flex-col items-center text-center'>
                                    <Image
                                        src='/img/storage_dark.png'
                                        width={576}
                                        height={400}
                                        alt=''
                                        className='relative mb-8 w-full'
                                    />
                                    <div className='mb-2 mt-auto text-2xl font-bold tracking-tight'>
                                        Unlimited storage for all of your files, mods, and worlds
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5'>
                            <div className='xl:px-auto relative grid w-full place-items-center overflow-hidden rounded-[32px] bg-brand/10 p-4 text-center sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
                                <div className='flex flex-col items-center'>
                                    <Image
                                        src='/img/lock_color_fix.png'
                                        width={576}
                                        height={400}
                                        alt=''
                                        className='relative mb-8'
                                    />
                                    <div className='mb-2 mt-auto text-2xl font-bold tracking-tight text-brand'>
                                        Secure and private. We don&apos;t sell advertisements or your data
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
                        <div className='col-span-1'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-lg font-bold text-brand'>Overflow Memory</span>
                                <span className=''>
                                    NVMe-based memory that kicks in when you need it most. No more lag.
                                </span>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-lg font-bold text-brand'>Incredibly low latency</span>
                                <span className=''>
                                    Pyro provides the lowest latency possible for your game server, no matter where you
                                    are.
                                </span>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-lg font-bold text-brand'>Zero player limits</span>
                                <span className=''>
                                    Bring as many friends as you want to your server. Pyro has no player limits.
                                </span>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-lg font-bold text-brand'>Free subdomain</span>
                                <span className=''>
                                    Get a free pyro.host subdomain with every server you host with Pyro.
                                </span>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-lg font-bold text-brand'>Mods, plugins, and more</span>
                                <span className=''>
                                    Pyro supports all mods and plugins, no matter how complex they are.
                                </span>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-lg font-bold text-brand'>Phenomenal support</span>
                                <span className=''>
                                    Direct access to our engineers and designers over Discord. We&apos;re here to help.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='relative z-10 flex flex-col items-center gap-8 overflow-hidden px-4 py-32 text-center text-white xl:px-24'>
                <h1 className='relative z-10 mb-6 max-w-[58rem] text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter'>
                    <div className=''>
                        Servers that <span className='text-brand'>spark to life</span> in seconds
                    </div>
                </h1>
                <div className='relative z-10 max-w-[600px] text-[16px] leading-[190%]'>
                    Zero waiting. Zero hassle. Pyro&apos;s servers are globally available and ready to play on as soon
                    as you subscribe. Choose your game, and we&apos;ll take care of the rest.
                </div>
                <div className='min-h-[200px]' />
                <Image
                    src='/img/globe.png'
                    width={1478}
                    height={906}
                    alt={''}
                    aria-hidden
                    className='pointer-events-none absolute top-[35%] mx-auto select-none'
                />
            </section>
            <section className='relative z-10 w-full overflow-clip rounded-3xl rounded-t-none bg-gradient-to-b from-black to-[#121212] text-white'>
                <div
                    className='container relative grid gap-12 pb-20 pt-24 lg:gap-20 lg:py-40'
                    style={
                        {
                            '--circle-background': '#FF4438',
                        } as React.CSSProperties
                    }
                >
                    <div className='pointer-events-none absolute bottom-0 left-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%] xl:left-auto xl:right-[50px]'></div>
                    <div className='pointer-events-none absolute left-0 right-auto top-[0] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%] xl:left-auto xl:right-[50px]'></div>
                    <div className='relative z-[14] flex max-w-[700px] flex-col items-start justify-start'>
                        <div className='mb-4'>
                            <div className='flex h-8 cursor-default select-none items-center gap-[6px] rounded-full border border-brand/30 bg-brand/10 px-[11px] py-[4px] text-brand'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                >
                                    <path
                                        opacity='0.4'
                                        d='M17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227C3.98398 9.26407 2 11.4003 2 14C2 16.7614 4.23858 19 7 19H17.5C19.9853 19 22 16.9853 22 14.5C22 12.0147 19.9853 10 17.5 10L17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5Z'
                                        fill='#FF4438'
                                    />
                                    <path
                                        d='M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10'
                                        stroke='#FF4438'
                                        strokeWidth='1.5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <div className='text-15 font-medium'>Pyro&apos;s VPS</div>
                            </div>
                        </div>
                        <h1 className='mb-6 max-w-4xl text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter'>
                            <div className='flex flex-row items-center gap-4'>A VPS like no other</div>
                        </h1>
                        <p className='mb-6 text-xl font-medium leading-[190%] text-[#ffffff99]'>
                            Power your next project with Pyro&apos;s VPS. With zero bandwidth limits, storage that
                            scales, and incredible uptime, you&apos;ll never want to go back.
                        </p>

                        <Link
                            href='https://pyro.host/discord'
                            className='flex w-fit items-center justify-center gap-4 rounded-full border-2 border-white/10 px-6 py-3 text-sm font-bold'
                        >
                            <svg viewBox='0 0 16 16' className='h-4 w-4'>
                                <path
                                    fill='currentColor'
                                    d='M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z'
                                ></path>
                            </svg>
                            <p>Contact Us</p>
                        </Link>
                    </div>
                    <div className='relative flex w-full flex-col gap-5 md:flex-row'>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5'>
                            <div className='xl:px-auto relative grid place-items-center overflow-hidden rounded-[32px] border-2 border-white/10 p-4 sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
                                <div className='flex h-full flex-col items-center text-center'>
                                    <Image
                                        src='/img/bandwidth_hero.png'
                                        width={576}
                                        height={400}
                                        alt=''
                                        className='relative mb-8 w-full'
                                    />
                                    <div className='mb-2 mt-auto text-2xl font-bold tracking-tight'>
                                        Unlimited bandwidth. No overages, zero throttling.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5'>
                            <div className='xl:px-auto relative grid place-items-center overflow-hidden rounded-[32px] border-2 border-white/10 p-4 sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
                                <div className='flex h-full flex-col items-center text-center'>
                                    <Image
                                        src='/img/shell_hero.png'
                                        width={576}
                                        height={400}
                                        alt=''
                                        className='relative mb-8 w-full'
                                    />
                                    <div className='mb-2 mt-auto text-2xl font-bold tracking-tight'>
                                        Full access to your hardware. Use all of your favorite tools
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5'>
                            <div className='xl:px-auto relative grid w-full place-items-center overflow-hidden rounded-[32px] bg-brand/20 p-4 text-center sm:py-6 lg:p-4 2xl:px-6 2xl:py-6'>
                                <div className='flex flex-col items-center'>
                                    <Image
                                        src='/img/power_hero.png'
                                        width={576}
                                        height={400}
                                        alt=''
                                        className='relative mb-8'
                                    />
                                    <div className='mb-2 mt-auto text-2xl font-bold tracking-tight text-brand'>
                                        Incredible uptime and performance for your projects
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
                        className='flex w-full items-center justify-center gap-4 rounded-full bg-brandGrad px-12 py-5 text-sm font-bold text-white shadow-lg'
                    >
                        <p>Start a game server in minutes</p>
                        <ArrowRightIcon />
                    </Link>
                </div>
            </section>
        </div>
    );
}
