'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { usePageTransition } from './PageTransitionProvider';
import { easeOutExpo, pageEnterStates } from './variants';

export function PageShell({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const { phase } = usePageTransition();
  const destinationCovered = phase === 'covered';

  return (
    <motion.main
      data-page-content=""
      initial={reducedMotion ? false : pageEnterStates.hidden}
      animate={reducedMotion || !destinationCovered ? pageEnterStates.visible : pageEnterStates.hidden}
      transition={{ duration: reducedMotion ? 0.01 : 0.68, ease: easeOutExpo }}
      className="relative z-10 min-h-screen pb-20"
    >
      {children}
    </motion.main>
  );
}
