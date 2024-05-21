import Image from 'next/image';

import { PyroButton } from '../ui/PyroButton';

const SparkToLife = () => {
    return (
        <section className='relative z-10 flex flex-col items-center gap-8 overflow-hidden px-4 py-32 text-center  xl:px-24'>
            <h1 className='relative z-10 mb-6 max-w-[58rem] text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter'>
                <div className=''>
                    Servers that <span className='text-brand'>spark to life</span> in seconds
                </div>
            </h1>
            <div className='relative z-10 max-w-[600px] text-[16px] leading-[190%]'>
                Zero waiting. Zero hassle. Pyro&apos;s servers are globally available and ready to play on as soon as
                you subscribe. Choose your game, and we&apos;ll take care of the rest.
            </div>
            <PyroButton useArrow href='/for/'>
                Start your game server
            </PyroButton>
            <div className='min-h-[200px]' />
            <Image
                src='/img/globenew.png'
                width={1478}
                height={906}
                alt={''}
                aria-hidden
                className='pointer-events-none absolute top-[35%] -z-10 mx-auto select-none'
            />
        </section>
    );
};

export default SparkToLife;
