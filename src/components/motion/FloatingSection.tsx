'use client';

import { useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import { AnimationVisibilityBoundary } from './AnimationVisibilityBoundary';

type FloatingSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
};

export function FloatingSection({ children, className, delay = 0, duration = 9, distance = 4 }: FloatingSectionProps) {
  const reducedMotion = useReducedMotion();
  const safeDistance = Math.min(Math.max(distance, 2), 8);
  const floatStyle = {
    '--floating-distance': `${-safeDistance}px`,
    '--floating-duration': `${Math.max(duration, 6)}s`,
    '--floating-delay': `${delay}s`
  } as CSSProperties;

  return (
    <AnimationVisibilityBoundary
      data-floating-element=""
      className={cn(!reducedMotion && 'viewport-floating-section', className)}
      style={floatStyle}
    >
      {children}
    </AnimationVisibilityBoundary>
  );
}
