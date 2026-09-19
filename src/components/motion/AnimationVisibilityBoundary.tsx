'use client';

import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type AnimationVisibilityBoundaryProps = ComponentPropsWithoutRef<'div'> & {
  viewportMargin?: string;
};

export function AnimationVisibilityBoundary({
  children,
  className,
  viewportMargin = '320px 0px',
  ...props
}: AnimationVisibilityBoundaryProps) {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const [isAnimationActive, setIsAnimationActive] = useState(true);

  useEffect(() => {
    const boundary = boundaryRef.current;
    if (!boundary) return;

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsAnimationActive(entry.isIntersecting && !document.hidden),
      { rootMargin: viewportMargin }
    );

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsAnimationActive(false);
        return;
      }

      const rect = boundary.getBoundingClientRect();
      const buffer = 320;
      setIsAnimationActive(rect.bottom >= -buffer && rect.top <= window.innerHeight + buffer);
    };

    observer.observe(boundary);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [viewportMargin]);

  return (
    <div
      ref={boundaryRef}
      data-animation-state={isAnimationActive ? 'running' : 'paused'}
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
}
