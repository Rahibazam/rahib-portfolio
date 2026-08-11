'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { motionDurations } from './variants';

export function AnimatedBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background">
      <div className="grid-overlay absolute inset-0 opacity-35 sm:opacity-50" />
      <div className="noise-overlay absolute inset-0" />
      <motion.div
        className="absolute -left-32 top-8 h-80 w-80 rounded-full bg-secondary/18 blur-3xl will-change-transform sm:h-[32rem] sm:w-[32rem] sm:bg-secondary/25"
        animate={reducedMotion ? undefined : { x: [0, 24, 0], y: [0, -26, 0], scale: [1, 1.06, 1] }}
        transition={reducedMotion ? undefined : { duration: motionDurations.background, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-32 top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl will-change-transform sm:h-[38rem] sm:w-[38rem] sm:bg-accent/30"
        animate={reducedMotion ? undefined : { x: [0, -24, 0], y: [0, 28, 0], scale: [1, 1.05, 1] }}
        transition={reducedMotion ? undefined : { duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/8 blur-3xl sm:h-[28rem] sm:w-[28rem] sm:bg-secondary/10"
        style={{ x: '-50%' }}
        animate={reducedMotion ? undefined : { opacity: [0.34, 0.62, 0.34], scale: [1, 1.08, 1] }}
        transition={reducedMotion ? undefined : { duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-[18%] hidden h-[34rem] w-[58rem] -translate-x-1/2 rounded-[50%] border border-secondary/10 opacity-45 lg:block"
        style={{ x: '-50%' }}
        animate={reducedMotion ? undefined : { rotate: [0, 4, 0] }}
        transition={reducedMotion ? undefined : { duration: 34, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-[24%] hidden h-[26rem] w-[46rem] -translate-x-1/2 rounded-[50%] border border-accent/10 opacity-35 lg:block"
        style={{ x: '-50%' }}
        animate={reducedMotion ? undefined : { rotate: [0, -5, 0] }}
        transition={reducedMotion ? undefined : { duration: 40, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.58))]" />
    </div>
  );
}
