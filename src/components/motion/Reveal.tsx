'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { easeOutExpo } from './variants';

type RevealVariant = 'system' | 'panel' | 'plain';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  variant?: RevealVariant;
  once?: boolean;
};

const revealVariants = {
  system: {
    hidden: { opacity: 0, y: 30, scale: 0.985, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    duration: 0.72
  },
  panel: {
    hidden: { opacity: 0, y: 18, scale: 0.992, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    duration: 0.56
  },
  plain: {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
    duration: 0.5
  }
} as const;

const reducedReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
} as const;

export function Reveal({ children, className, delay = 0, amount = 0.18, variant = 'system', once = true }: RevealProps) {
  const reducedMotion = useReducedMotion();
  const reveal = reducedMotion ? reducedReveal : revealVariants[variant];
  const duration = reducedMotion ? 0.2 : revealVariants[variant].duration;
  const clampedDelay = reducedMotion ? 0 : Math.min(delay, 0.5);
  const showScanline = !reducedMotion && variant !== 'plain';

  return (
    <motion.div
      data-reveal=""
      className={cn(showScanline && 'relative isolate', className)}
      initial={reveal.hidden}
      whileInView={reveal.visible}
      viewport={{ once, amount }}
      transition={{ duration, delay: clampedDelay, ease: easeOutExpo }}
    >
      {showScanline ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
          <motion.span
            data-system-scanline=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(110deg,transparent_0%,transparent_36%,rgba(255,255,255,.10)_44%,rgba(10,196,255,.18)_50%,rgba(139,108,255,.14)_56%,transparent_64%,transparent_100%)] bg-[length:240%_100%] opacity-0 blur-[1px]"
            initial={{ opacity: 0, backgroundPosition: '145% 0%' }}
            whileInView={{ opacity: [0, 0.55, 0], backgroundPosition: ['145% 0%', '-45% 0%'] }}
            viewport={{ once, amount }}
            transition={{ duration: variant === 'panel' ? 0.62 : 0.78, delay: clampedDelay + 0.08, ease: easeOutExpo }}
          />
        </div>
      ) : null}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
