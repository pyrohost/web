import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

const useIntersectionObserver = (
    targetRef: React.RefObject<Element>,
    options: IntersectionObserverOptions = {},
): boolean => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        // Ensure the Intersection Observer API is supported
        if ('IntersectionObserver' in window) {
            observer.current = new IntersectionObserver((entries) => {
                // Update state based on whether the target element is intersecting
                setIsIntersecting(entries[0].isIntersecting);
            }, options);

            // Start observing the target element
            if (targetRef.current) {
                observer.current.observe(targetRef.current);
            }

            // Cleanup: Stop observing when the component unmounts
            return () => {
                if (observer.current) {
                    observer.current.disconnect();
                }
            };
        } else {
            // Fallback for browsers that do not support Intersection Observer
            console.warn('Intersection Observer is not supported in this browser.');
        }
    }, [targetRef, options]);

    return isIntersecting;
};

export default useIntersectionObserver;
