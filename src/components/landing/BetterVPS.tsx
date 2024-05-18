import Image from 'next/image';
import { PyroButton } from '../ui/PyroButton';

const BetterVPS = () => {
    return (
        <section className='relative z-10 w-full overflow-clip rounded-3xl rounded-t-none bg-gradient-to-b from-black to-[#121212] '>
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
                            <div className='text-15 font-medium'>Better VPS</div>
                        </div>
                    </div>
                    <h1 className='mb-6 max-w-4xl text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter'>
                        <div className='flex flex-row items-center gap-4'>A VPS like no other</div>
                    </h1>
                    <p className='mb-6 text-xl font-medium leading-[190%] text-[#ffffff99]'>
                        Power your next project with Pyro&apos;s VPS. With zero bandwidth limits, storage that scales,
                        and incredible uptime, you&apos;ll never want to go back.
                    </p>

                    <PyroButton
                        leftChild={
                            <svg viewBox='0 0 16 16' className='h-4 w-4'>
                                <path
                                    fill='currentColor'
                                    d='M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z'
                                ></path>
                            </svg>
                        }
                        color={'black'}
                        type={'outlineLight'}
                        external
                        href='https://pyro.host/discord'
                    >
                        Contact Us
                    </PyroButton>
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
                                    className='relative mb-8 w-full opacity-75'
                                />
                                <div className='mb-2 mt-auto text-2xl font-bold tracking-tight'>
                                    Unlimited bandwidth. No overages, zero throttling
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
                                    className='relative mb-8 w-full opacity-75'
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
                                    Incredible uptime and performance, powered by Pyro
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BetterVPS;
