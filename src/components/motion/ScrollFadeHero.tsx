'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

type ScrollFadeHeroProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollFadeHero({ children, className }: ScrollFadeHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [naturalFadeEnd, setNaturalFadeEnd] = useState(900);
  const [heroHeight, setHeroHeight] = useState(0);
  const [pinned, setPinned] = useState(false);
  const fadeEnd = pinned ? 560 : naturalFadeEnd;
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, Math.min(180, fadeEnd * 0.24), fadeEnd], [1, 0.88, 0]);
  const y = useTransform(scrollY, [0, fadeEnd], [0, -52]);
  const scale = useTransform(scrollY, [0, fadeEnd], [1, 0.96]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const updateFadeRange = () => {
      const heroTop = hero.getBoundingClientRect().top + window.scrollY;
      setHeroHeight(hero.offsetHeight);
      setNaturalFadeEnd(Math.max(560, Math.round(heroTop + hero.offsetHeight * 0.82)));
    };

    updateFadeRange();
    const resizeObserver = new ResizeObserver(updateFadeRange);
    resizeObserver.observe(hero);
    window.addEventListener('resize', updateFadeRange);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateFadeRange);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)');
    const updatePinnedState = () => setPinned(mediaQuery.matches);

    updatePinnedState();
    mediaQuery.addEventListener('change', updatePinnedState);
    return () => mediaQuery.removeEventListener('change', updatePinnedState);
  }, []);

  return (
    <section
      className="relative"
      style={pinned && heroHeight && !reducedMotion ? { minHeight: heroHeight + fadeEnd } : undefined}
    >
      <motion.div
        ref={heroRef}
        className={cn('relative', !reducedMotion && 'xl:sticky xl:top-0', className)}
        style={reducedMotion ? undefined : { opacity, scale, y }}
      >
        {children}
      </motion.div>
    </section>
  );
}
