import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Pyro - About Us',
};

const Page = () => {
    return (
        <div className='flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1'>
            <div className='relative z-10 min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl bg-black text-white'>
                {/* <div aria-hidden className='pointer-events-none absolute inset-0 z-0 select-none hue-rotate-90'>
                    <BackgroundBeams />
                </div> */}
                <div className='relative mx-auto flex flex-col items-center gap-8 px-4 py-32 text-center xl:px-24'>
                    <div className='-mb-8'>
                        <div className='flex h-8 cursor-default select-none items-center gap-[6px] rounded-full border border-neutral-900/30 px-[11px] py-[4px]'>
                            <div className='text-15 font-medium'>About Us</div>
                        </div>
                    </div>
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
                    <h1 className='max-w-4xl py-4 pb-3 pt-5 text-[max(84px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter lg:pb-5'>
                        <div className='flex flex-row items-center gap-4'>Pioneers of open hosting infrastructure</div>
                    </h1>
                    <div className='relative w-full max-w-[75ch]'>
                        <div className='flex w-full flex-col gap-8'>
                            <p className='text-xl leading-[190%]'>
                                Pyro is on a mission to perfect game hosting. We&apos;re a globally distributed team of
                                engineers and designers dedicated to building the future of hosting with obsessive
                                attention to detail.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
