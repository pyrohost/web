"use client";

import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";

type Props = {
  initialVisible?: boolean;
  /** An estimate of the element's height */
  defaultHeight?: number;
  /** How far outside the viewport in pixels should elements be considered visible?  */
  visibleOffset?: number;
  /** Should the element stay rendered after it becomes visible? */
  stayRendered?: boolean;
  root?: HTMLElement | null;
  /** E.g. 'span', 'tbody'. Default = 'div' */
  rootElement?: string;
  rootElementClass?: string;
  /** E.g. 'span', 'tr'. Default = 'div' */
  placeholderElement?: string;
  placeholderElementClass?: string;
  children: React.ReactNode;
};

const RenderIfVisible = ({
  initialVisible = false,
  defaultHeight = 300,
  visibleOffset = 1000,
  stayRendered = false,
  root = null,
  rootElement = "div",
  rootElementClass = "",
  placeholderElement = "div",
  placeholderElementClass = "",
  children,
}: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(initialVisible);
  const wasVisible = useRef<boolean>(initialVisible);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const [rootHeight, setRootHeight] = useState<number>(defaultHeight);

  useEffect(() => {
    // this is needed because otherwise we'll run into issues when scrolling
    if (innerRef.current) {
      const localRef = innerRef.current;
      const resizeObserver = new ResizeObserver((entries) => {
        const resizeEntry = entries[0];

        /* Sets the height of the container if the previous value is the default one or if the current value is greater than its previous value */
        setRootHeight((prev) => {
          if (
            (prev === defaultHeight && resizeEntry?.contentRect.height !== 0) ||
            (resizeEntry?.contentRect.height &&
              resizeEntry?.contentRect.height > prev!)
          ) {
            return resizeEntry?.contentRect.height ?? 0;
          }
          return prev;
        });
      });

      resizeObserver.observe(localRef);
      return () => {
        if (localRef) {
          resizeObserver.unobserve(localRef);
        }
      };
    }
    return () => {};
  }, [innerRef, setRootHeight, defaultHeight]);

  // Set visibility with intersection observer
  useEffect(() => {
    if (intersectionRef.current) {
      const localRef = intersectionRef.current;
      const observer = new IntersectionObserver(
        (entries) => {
          if (typeof window !== "undefined" && window.requestIdleCallback) {
            window.requestIdleCallback(
              () => setIsVisible(entries[0]?.isIntersecting ?? false),
              {
                timeout: 600,
              },
            );
          } else {
            setIsVisible(entries[0]?.isIntersecting ?? false);
          }
        },
        { root, rootMargin: `${visibleOffset}px 0px ${visibleOffset}px 0px` },
      );

      observer.observe(localRef);
      return () => {
        if (localRef) {
          observer.unobserve(localRef);
        }
      };
    }
    return () => {};
  }, [root, visibleOffset]);

  useEffect(() => {
    if (isVisible) {
      wasVisible.current = true;
    }
  }, [isVisible]);

  const rootStyle = useMemo(
    () => ({ height: `${rootHeight}px` }),
    [rootHeight],
  );

  const rootClasses = useMemo(
    () => `render-if-visible ${rootElementClass}`,
    [rootElementClass],
  );

  const placeholderClasses = useMemo(
    () => `render-if-visible-placeholder ${placeholderElementClass}`,
    [placeholderElementClass],
  );

  return React.createElement(
    rootElement,
    {
      ref: intersectionRef,
      className: rootClasses,
      style: rootStyle,
    },
    <div
      ref={innerRef}
      className="render-if-visible-content"
      style={
        { overflow: "hidden", rootStyle } as DetailedHTMLProps<
          HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >
      }
    >
      {isVisible || (stayRendered && wasVisible.current) ? (
        <>{children}</>
      ) : (
        React.createElement(placeholderElement, {
          className: placeholderClasses,
        })
      )}
    </div>,
  );
};

export default RenderIfVisible;
