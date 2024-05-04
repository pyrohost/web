'use client';

import { config } from '@react-spring/web';
import TextTransition from './ui/TextTransition';
import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';

const text = ['Minecraft', 'Terraria', 'Factorio', "Garry's Mod", 'Rust'];

const HeroText = () => {
    const [index, setIndex] = useState(0);
    const [overflow, setOverflow] = useState('hidden');

    const props = useSpring({
        maxHeight: '128px',
        from: { maxHeight: '0px' },
        onRest: () => setOverflow('visible'),
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => prevIndex + 1);
        }, 1500);

        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div
            role='heading'
            aria-level={1}
            aria-label='Where your world plays'
            className='relative flex flex-col flex-wrap items-center text-[max(84px,min(5vw,90px))] font-black leading-[1] tracking-tighter'
        >
            <span>Where your</span>
            <animated.div
                style={{ ...props, overflow }}
                className='flex flex-row items-center gap-4 overflow-hidden px-8'
            >
                <div className='grid max-h-[84px] min-h-[84px] min-w-[84px] max-w-[84px] place-content-center overflow-hidden rounded-full bg-[#dddddd]'>
                    <TextTransition inline springConfig={config.stiff} style={{ position: 'relative' }}>
                        <div className=''>
                            <Image
                                className='h-12 w-12'
                                src={`/img/hero/${text[index % text.length].toLowerCase().replace(/[\s"']/g, '')}.png`}
                                width={64}
                                height={64}
                                alt=''
                            ></Image>
                        </div>
                    </TextTransition>
                </div>
                <TextTransition inline springConfig={config.gentle} style={{ position: 'relative' }}>
                    {text[index % text.length]}
                </TextTransition>
            </animated.div>
            <span>world plays</span>
        </div>
    );
};

export default HeroText;
