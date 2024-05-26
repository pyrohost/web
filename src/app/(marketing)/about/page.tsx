import { Metadata } from 'next';
import Image from 'next/image';

import { PyroButton } from '@/components/ui/PyroButton';

export const metadata: Metadata = {
    title: 'Pyro - About Us',
};

const Page = () => {
    return (
        <>
            <section className='relative mx-auto flex flex-col items-center gap-8 overflow-clip px-4 py-32 pb-64 text-center xl:px-24'>
                <div className='-mb-8'>
                    <div className='flex h-8 cursor-default select-none items-center gap-[6px] rounded-full border border-neutral-900/30 px-[11px] py-[4px]'>
                        <div className='text-15 font-medium'>About Us</div>
                    </div>
                </div>
                <h1 className='max-w-4xl py-4 pb-3 pt-5 text-[max(40px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter lg:pb-5'>
                    <div className='flex flex-row items-center gap-4'>Pioneers of open hosting infrastructure</div>
                </h1>
                <div className='relative w-full max-w-[80ch]'>
                    <div className='flex w-full flex-col gap-8'>
                        <p className='text-xl leading-[190%] opacity-50'>
                            Pyro is an atypically talented, globally distributed team of engineers, designers, and
                            strategists building open-source hosting infrastructure. We are on a mission to make hosting
                            accessible to everyone, and we&apos;re building the ecosystem of tools and services to make
                            that possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* <section className='relative z-10 w-full overflow-clip'>
                <div className='container relative grid gap-12 pb-20 pt-24 lg:gap-20 lg:py-40'>
                    <div className='relative z-[14] flex max-w-[700px] flex-col items-start justify-start'>
                        <h1 className='max-w-4xl py-4 pb-3 pt-5 text-[max(40px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter lg:pb-5'>
                            <div className='flex flex-row items-center gap-4'>Pyro Engineering</div>
                        </h1>

                        <p className='mb-6 text-xl font-medium leading-[190%] text-[#ffffff99]'>
                            With decades of combined experience, our engineering team is the best in the business. No
                            one else can match our velocity, quality, and reliability. We&apos;re passionate open-source
                            builders who love what we do and where we work.
                        </p>
                    </div>
                </div>
            </section> */}

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
                    Come work with us
                </h1>
                <p className='relative max-w-2xl text-xl leading-[195%] text-[#ffffff99]'>
                    We&apos;re always looking for talented individuals to join our team. If you&apos;re passionate about
                    open-source and want to help us build the future of hosting, we&apos;d love to hear from you.
                </p>
                <PyroButton
                    leftChildren={
                        <svg viewBox='0 0 16 16' className='h-4 w-4'>
                            <path
                                fill='currentColor'
                                d='M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z'
                            ></path>
                        </svg>
                    }
                    external
                    href='https://pyro.host/discord'
                >
                    Get in touch
                </PyroButton>
            </section>
        </>
    );
};

export default Page;
