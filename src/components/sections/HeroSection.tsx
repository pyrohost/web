import Image from 'next/image';
import Section from '@/components/sections/_components/SectionLayout';
import ExternalLinkButton from '@/components/sections/_components/ExternalLinkButton';

const HeroSection = () => {
    return (
        <>
            <div className='pointer-events-none absolute -top-40 z-20 flex min-h-screen w-full select-none items-center justify-center'>
                <div className='pointer-events-none absolute inset-0 -z-20 flex h-full w-full select-none justify-between opacity-10 blur-sm contrast-200'>
                    <div className='relative h-full w-[29%]'>
                        <Image
                            alt=''
                            aria-hidden
                            src='/img/chips2-nbg.png'
                            fill
                            className='pointer-events-none select-none object-cover'
                        />
                    </div>
                    <div className='relative h-full w-[25%]'>
                        <Image
                            alt=''
                            aria-hidden
                            src='/img/chips-nbg.png'
                            fill
                            className='pointer-events-none select-none object-cover'
                        />
                    </div>
                </div>
            </div>
            <div
                style={{
                    background:
                        'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(204, 67, 67, 0.3),var(--transparent))',
                }}
                className='relative h-full min-h-screen w-full px-4 md:px-16'
            >
                <div className='img-opacity-animation pointer-events-none absolute inset-0 select-none'>
                    <div className='pointer-events-none relative inset-0 h-screen min-h-screen w-screen select-none'>
                        <Image
                            alt=''
                            aria-hidden
                            src='/img/firenew.svg'
                            fill
                            className='pointer-events-none select-none object-cover opacity-45'
                        />
                    </div>
                </div>
                <div className='relative flex h-full min-h-screen flex-col items-center justify-end pb-36 text-center'>
                    <Section.Title maxWidth={1250}>
                        <span
                            className=''
                            style={{
                                padding: '0 0.5rem',
                            }}
                        >
                            <div className='flex h-[406px] items-center justify-center'>
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
                                    <path d='M1 354H1921' stroke='url(#path)' vectorEffect='non-scaling-stroke'></path>
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
                    </Section.Title>
                    <Section.Description hero maxWidth={700}>
                        Pyro is a new game hosting platform that makes it easy to play your favorite games with friends.
                        Incredible reliability, unlimited storage, a beautiful game panel, and more, starting at just
                        $6.
                    </Section.Description>
                    <div className='mt-10 flex w-fit'>
                        <ExternalLinkButton href='https://pay.pyro.host' text='Order your server now' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
