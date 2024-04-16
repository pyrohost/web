'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

export default function Cobe() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        let phi = 0;

        if (canvasRef.current === null) {
            return;
        }

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 1200 * 2,
            height: 1200 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 0.7,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.1, 0.1, 0.1],
            markerColor: [1, 0.2, 0.3],
            glowColor: [0, 0, 0],

            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [51.5074, -0.1278], size: 0.05 },
                { location: [35.6895, 139.6917], size: 0.08 },
                { location: [55.7558, 37.6176], size: 0.08 },
                { location: [52.52, 13.405], size: 0.08 },
                { location: [48.8566, 2.3522], size: 0.08 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.0004;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return <canvas ref={canvasRef} style={{ width: 1200, height: 1200, maxWidth: '100%', aspectRatio: 1 }} />;
}
