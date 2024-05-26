import Image from 'next/image';

import { PyroButton } from '@/components/ui/PyroButton';
import PyroPill from '@/components/ui/PyroPill';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/primitives/Carousel';

const OneApp = () => {
    return (
        <section className='relative z-10 w-full overflow-clip rounded-3xl rounded-t-none bg-gradient-to-b from-[#000000] to-[#121212]'>
            <div className='container relative grid gap-12 pb-20 pt-24 lg:gap-20 lg:py-40'>
                <div className='relative z-[14] flex max-w-[600px] flex-col items-start justify-start'>
                    <PyroPill
                        leftChild={
                            <Image src='/img/pyrodactylorange.png' width={24} height={24} alt='' className='h-6 w-6' />
                        }
                    >
                        Better Software
                    </PyroPill>
                    <h1 className='mb-6 max-w-4xl text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter text-white'>
                        <div className='flex flex-row items-center gap-4'>One app to manage it all</div>
                    </h1>
                    <p className='mb-6 text-xl font-medium leading-[190%] text-[#ffffff99]'>
                        With Pyro, you don’t hop through loops to get from paying to playing, it just works better. It’s
                        like a super-app for your server.
                    </p>

                    <PyroButton variant='black' href='/pyrodactyl/'>
                        Learn more
                    </PyroButton>
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
    );
};

export default OneApp;
