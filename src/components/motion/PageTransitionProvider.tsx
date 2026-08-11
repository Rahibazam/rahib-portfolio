'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { easeInOutSoft, pageTransitionTimings } from './variants';

export type TransitionPhase = 'idle' | 'entering' | 'covered' | 'leaving';

type TransitionContextValue = {
  navigateWithTransition: (href: string) => void;
  isTransitioning: boolean;
  phase: TransitionPhase;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

function pathnameFromHref(href: string) {
  return new URL(href, window.location.href).pathname;
}

function hashFromHref(href: string) {
  return new URL(href, window.location.href).hash;
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<TransitionPhase>('idle');
  const phaseRef = useRef<TransitionPhase>('idle');
  const pendingPathRef = useRef<string | null>(null);
  const pendingHashRef = useRef<string>('');
  const timersRef = useRef<number[]>([]);

  const timings = prefersReducedMotion ? pageTransitionTimings.reduced : pageTransitionTimings.standard;

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  }, []);

  const updatePhase = useCallback((nextPhase: TransitionPhase) => {
    phaseRef.current = nextPhase;
    setPhase(nextPhase);
  }, []);

  const finishTransition = useCallback(() => {
    pendingPathRef.current = null;
    pendingHashRef.current = '';
    updatePhase('idle');
  }, [updatePhase]);

  const revealDestination = useCallback(() => {
    if (phaseRef.current === 'idle' || phaseRef.current === 'leaving') return;

    const holdTimer = window.setTimeout(() => {
      updatePhase('leaving');
      const finishTimer = window.setTimeout(finishTransition, timings.fadeOutMs);
      timersRef.current.push(finishTimer);
    }, timings.holdMs);

    timersRef.current.push(holdTimer);
  }, [finishTransition, timings.fadeOutMs, timings.holdMs, updatePhase]);

  const navigateWithTransition = useCallback((href: string) => {
    const destinationPath = pathnameFromHref(href);
    if (destinationPath === pathname || phaseRef.current !== 'idle') return;

    clearTimers();
    pendingPathRef.current = destinationPath;
    pendingHashRef.current = hashFromHref(href);
    updatePhase('entering');

    const coverTimer = window.setTimeout(() => {
      updatePhase('covered');
      router.push(href);

      const fallbackTimer = window.setTimeout(revealDestination, 4000);
      timersRef.current.push(fallbackTimer);
    }, timings.fadeInMs);

    timersRef.current.push(coverTimer);
  }, [clearTimers, pathname, revealDestination, router, timings.fadeInMs, updatePhase]);

  useEffect(() => {
    if (pendingPathRef.current !== pathname || phaseRef.current !== 'covered') return;

    const pendingHash = pendingHashRef.current;
    if (!pendingHash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    clearTimers();
    revealDestination();

    if (pendingHash) {
      const scrollTimer = window.setTimeout(() => {
        const target = document.getElementById(decodeURIComponent(pendingHash.slice(1)));
        target?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      }, timings.holdMs + 50);

      timersRef.current.push(scrollTimer);
    }
  }, [clearTimers, pathname, prefersReducedMotion, revealDestination, timings.holdMs]);

  useEffect(() => clearTimers, [clearTimers]);

  const value = useMemo<TransitionContextValue>(() => ({
    isTransitioning: phase !== 'idle',
    navigateWithTransition,
    phase
  }), [navigateWithTransition, phase]);

  const overlayOpacity = phase === 'idle' ? 0 : phase === 'leaving' ? 0 : 1;
  const overlayDuration = phase === 'entering' ? timings.fadeInMs : phase === 'leaving' ? timings.fadeOutMs : 0;

  return (
    <TransitionContext.Provider value={value}>
      {children}
      <motion.div
        aria-hidden="true"
        data-transition-phase={phase}
        className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#030512]"
        initial={false}
        animate={{ opacity: overlayOpacity }}
        transition={{ duration: overlayDuration / 1000, ease: easeInOutSoft }}
        style={{ pointerEvents: phase === 'idle' ? 'none' : 'auto' }}
      >
        <div className="absolute inset-0 opacity-35" style={{ background: 'radial-gradient(circle at 50% 54%, rgba(10,196,255,0.14), transparent 28rem), radial-gradient(circle at 58% 46%, rgba(108,76,255,0.11), transparent 24rem)' }} />
        <div className="noise-overlay absolute inset-0" />
        <motion.div
          className="relative w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-[1.1rem] border border-[#0AC4FF]/35 bg-[radial-gradient(circle_at_18%_0%,rgba(10,196,255,.13),transparent_38%),linear-gradient(145deg,rgba(7,15,38,.82),rgba(8,10,34,.76))] px-5 py-4 shadow-[0_0_32px_rgba(10,196,255,.16),0_0_28px_rgba(139,108,255,.10),inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl"
          initial={false}
          animate={{
            opacity: phase === 'covered' ? 1 : 0,
            y: phase === 'covered' || prefersReducedMotion ? 0 : 8,
            scale: phase === 'covered' || prefersReducedMotion ? 1 : 0.96
          }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.28, ease: easeInOutSoft }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-5 top-0 z-0 h-px bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.62),rgba(139,108,255,.48),transparent)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-3 z-0 h-4 w-4 border-l border-t border-[#0AC4FF]/45"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 right-3 z-0 h-4 w-4 border-b border-r border-[#8b6cff]/45"
          />

          {!prefersReducedMotion ? (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(110deg,transparent_0%,transparent_36%,rgba(255,255,255,.10)_44%,rgba(10,196,255,.16)_50%,rgba(139,108,255,.12)_56%,transparent_64%,transparent_100%)] bg-[length:240%_100%] opacity-0 blur-[1px]"
              animate={
                phase === 'covered'
                  ? { backgroundPosition: ['145%_0%', '-45%_0%'], opacity: [0, 0.55, 0] }
                  : { backgroundPosition: '145%_0%', opacity: 0 }
              }
              transition={{
                duration: 0.95,
                ease: easeInOutSoft,
                repeat: phase === 'covered' ? Infinity : 0,
                repeatDelay: 0.25
              }}
            />
          ) : null}

          <div className="relative z-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-[0.75rem] border border-[#0AC4FF]/40 bg-secondary/[0.08] font-mono text-xs font-black tracking-[0.14em] text-cyan-100 shadow-[0_0_18px_rgba(10,196,255,.20),inset_0_1px_0_rgba(255,255,255,.08)]">
                RA
              </span>

              <div>
                <p className="home-display text-xs font-black uppercase tracking-[0.18em] text-white">
                  Route Sync
                </p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/46">
                  Loading next interface
                </p>
              </div>
            </div>

            <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_14px_rgba(10,196,255,.75)]" />
          </div>

          <div className="relative z-10 mt-4 h-1 overflow-hidden rounded-full bg-white/[0.08]">
            <motion.span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 origin-left rounded-full bg-[linear-gradient(90deg,var(--secondary),#8b6cff)] shadow-[0_0_18px_rgba(10,196,255,.55)]"
              initial={false}
              animate={{ scaleX: phase === 'covered' ? (prefersReducedMotion ? 1 : [0.08, 1]) : 0.08 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.72,
                ease: easeInOutSoft,
                repeat: phase === 'covered' && !prefersReducedMotion ? Infinity : 0,
                repeatType: 'loop'
              }}
              style={{ width: '100%' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used inside PageTransitionProvider');
  }
  return context;
}
