'use client';

import React, { useState, useRef, useEffect, memo } from 'react';
import type { CSSProperties, PropsWithChildren } from 'react';

import { useSpring, useTransition, animated, config, SpringConfig } from '@react-spring/web';

export interface TextTransitionProps {
    className?: string;
    delay?: number;
    direction?: 'up' | 'down';
    inline?: boolean;
    springConfig?: SpringConfig;
    style?: CSSProperties;
    translateValue?: string;
}

const TextTransition = ({
    direction = 'up',
    inline = false,
    springConfig = config.default,
    delay = 0,
    className,
    style,
    translateValue: tv = '100%',
    children,
}: PropsWithChildren<TextTransitionProps>) => {
    const initialRun = useRef(true);
    const fromTransform = direction === 'down' ? `-${tv}` : tv;
    const leaveTransform = direction === 'down' ? tv : `-${tv}`;

    const transitions = useTransition([children], {
        enter: { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0%) rotate(0deg) scale(1)' },
        from: { opacity: 0, filter: 'blur(36px)', transform: `translateY(${fromTransform}) rotate(0deg) scale(1)` },
        leave: {
            opacity: 0,
            filter: 'blur(36px)',
            transform: `translateY(${leaveTransform}) rotate(0deg) scale(0.2)`,
            position: 'absolute',
        },
        config: springConfig,
        immediate: initialRun.current,
        delay: initialRun.current ? undefined : delay,
    });

    const [width, setWidth] = useState<number>(0);
    const currentRef = useRef<HTMLDivElement>(null);
    const heightRef = useRef<number | string>('auto');

    useEffect(() => {
        initialRun.current = false;
        const element = currentRef.current;

        if (!element) return;

        const { width, height } = element.getBoundingClientRect();

        setWidth(width);
        heightRef.current = height;
    }, [children, setWidth, currentRef]);

    const widthTransition = useSpring({
        to: { width },
        config: springConfig,
        immediate: initialRun.current,
        delay: initialRun.current ? undefined : delay,
    });

    return (
        <animated.div
            className={`text-transition ${className ?? ''}`}
            style={{
                ...(inline && !initialRun.current ? widthTransition : undefined),
                ...style,
                whiteSpace: inline ? 'nowrap' : 'normal',
                display: inline ? 'inline-flex' : 'flex',
                height: heightRef.current,
                willChange: 'transform, opacity, filter',
            }}
        >
            {transitions((styles, item) => (
                <animated.div ref={item === children ? currentRef : undefined} style={{ ...styles }}>
                    {item}
                </animated.div>
            ))}
        </animated.div>
    );
};

export default TextTransition;
