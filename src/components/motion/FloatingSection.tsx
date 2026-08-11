'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

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

  return (
    <motion.div
      data-floating-element=""
      className={cn('will-change-transform', className)}
      animate={reducedMotion ? undefined : { y: [0, -safeDistance, 0] }}
      transition={reducedMotion ? undefined : { duration: Math.max(duration, 6), delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
