'use client';

import { type CSSProperties, useEffect, useRef, useState } from 'react';

type MarqueeTextProps = {
  text: string;
  className?: string;
};

type MarqueeStyle = CSSProperties & {
  '--marquee-distance'?: string;
  '--marquee-duration'?: string;
  '--marquee-gap'?: string;
};

const marqueeGap = 40;

export function MarqueeText({ text, className = '' }: MarqueeTextProps) {
  const maskRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [overflow, setOverflow] = useState(false);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const mask = maskRef.current;
    const measuringText = measureRef.current;
    if (!mask || !measuringText) return;
    let frameId = 0;
    let cancelled = false;

    function updateMeasurement() {
      if (!mask || !measuringText) return;
      const nextOverflow = measuringText.scrollWidth > mask.clientWidth + 4;
      setOverflow(nextOverflow);
      setDistance(nextOverflow ? measuringText.scrollWidth + marqueeGap : 0);
    }

    setOverflow(false);
    setDistance(0);
    frameId = window.requestAnimationFrame(updateMeasurement);
    document.fonts?.ready.then(() => {
      if (!cancelled) updateMeasurement();
    });

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateMeasurement);
      return () => {
        cancelled = true;
        window.cancelAnimationFrame(frameId);
        window.removeEventListener('resize', updateMeasurement);
      };
    }

    const observer = new ResizeObserver(updateMeasurement);
    observer.observe(mask);
    observer.observe(measuringText);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [text]);

  const style: MarqueeStyle = overflow
    ? {
        '--marquee-distance': `${distance}px`,
        '--marquee-duration': `${Math.min(Math.max(distance / 18, 8), 14)}s`,
        '--marquee-gap': `${marqueeGap}px`
      }
    : {};

  return (
    <span key={`mask-${text}`} ref={maskRef} data-marquee={overflow ? 'true' : 'false'} className={`about-marquee-mask block min-w-0 ${className}`} title={text}>
      {overflow ? (
        <span key={text} className="about-marquee-track" style={style}>
          <span className="about-marquee-copy">{text}</span>
          <span aria-hidden="true" className="about-marquee-copy">{text}</span>
        </span>
      ) : (
        <span className="about-marquee-static">{text}</span>
      )}
      <span ref={measureRef} aria-hidden="true" className="about-marquee-measure">{text}</span>
    </span>
  );
}
