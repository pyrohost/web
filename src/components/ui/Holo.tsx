'use client';

import * as React from 'react';

interface HoloProps {
    children: React.ReactNode;
    radius?: number;
}

const Holo = ({ children, radius }: HoloProps) => {
    const [node, setNode] = React.useState<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if (node == null) {
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            const w = node.clientWidth;
            const h = node.clientHeight;
            const b = node.getBoundingClientRect();

            const mX = (e.clientX - b.left) / w;
            const mY = (e.clientY - b.top) / h;
            const rX = -(mX - 0.5) * 12;
            const rY = (mY - 0.5) * 12;
            const bgX = 40 + 20 * mX;
            const bgY = 40 + 20 * mY;

            node.style.setProperty('--m-x', 100 * mX + '%');
            node.style.setProperty('--m-y', 100 * mY + '%');
            node.style.setProperty('--bg-x', bgX + '%');
            node.style.setProperty('--bg-y', bgY + '%');
            node.style.setProperty('--r-x', rX + 'deg');
            node.style.setProperty('--r-y', rY + 'deg');
        };

        const handleMouseEnter = () => {
            node.style.setProperty('--opacity', '0.6');
            const id = setTimeout(() => {
                node.style.setProperty('--duration', '0ms');
            }, 300);
            return () => clearTimeout(id);
        };

        const handleMouseLeave = () => {
            node.style.setProperty('--duration', '300ms');
            node.style.setProperty('--opacity', '0');
            node.style.setProperty('--m-x', '50%');
            node.style.setProperty('--m-y', '50%');
            node.style.setProperty('--bg-x', '50%');
            node.style.setProperty('--bg-y', '50%');
            node.style.setProperty('--r-x', '0deg');
            node.style.setProperty('--r-y', '0deg');
        };

        node.addEventListener('mousemove', handleMouseMove);
        node.addEventListener('mouseenter', handleMouseEnter);
        node.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            node.removeEventListener('mousemove', handleMouseMove);
            node.removeEventListener('mouseenter', handleMouseEnter);
            node.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [node]);

    return (
        <div ref={setNode} className='attributeWrapper'>
            <div className='contentWrapper' style={{ borderRadius: radius }}>
                <div className='imageWrapper'>{children}</div>
                <div className='spotlight' />
                <div className='holo' />
            </div>
        </div>
    );
};

export default Holo;
