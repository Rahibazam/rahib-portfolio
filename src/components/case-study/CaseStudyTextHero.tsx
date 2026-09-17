'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowLeft } from 'lucide-react';
import { HeadingAccent } from '@/components/home/HomeSectionHeader';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { Badge } from '@/components/ui/Badge';

type CaseStudyTextHeroProps = {
  category: string;
  heroStatement: string;
  status: string;
  tags: string[];
  title: string;
  year: string;
};

export function CaseStudyTextHero({ category, heroStatement, status, tags, title, year }: CaseStudyTextHeroProps) {
  const reducedMotion = useReducedMotion();
  const titleWords = title.trim().split(/\s+/);
  const titleAccent = titleWords.pop() ?? title;
  const titleLead = titleWords.join(' ');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 180, 560], [1, 0.88, 0]);
  const y = useTransform(scrollY, [0, 560], [0, -52]);
  const scale = useTransform(scrollY, [0, 560], [1, 0.96]);

  return (
    <section className="mobile-case-hero relative min-h-[165svh]">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[42%] h-[28rem] w-[min(70rem,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(10,196,255,.09),rgba(108,76,255,.055)_42%,transparent_72%)] blur-3xl" />

      <motion.div
        className="mobile-case-hero-panel sticky top-0 flex min-h-svh flex-col items-center justify-center px-1 pb-16 pt-28 text-center sm:px-5 sm:pb-20 sm:pt-32"
        style={reducedMotion ? undefined : { opacity, scale, y }}
      >
        <TransitionLink href="/portfolio" className="premium-underline-link inline-flex items-center gap-2 py-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-white/48">
          <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> Back to portfolio
        </TransitionLink>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Badge variant="status" className="rounded-lg">{status}</Badge>
          <Badge variant="soft" className="rounded-lg">{year}</Badge>
        </div>

        <p className="mt-8 font-mono text-[0.68rem] font-bold uppercase tracking-[0.19em] text-[#ff805f] sm:text-xs">{category}</p>
        <h1 className="home-display mt-5 max-w-[72rem] text-[clamp(2.7rem,7vw,6.7rem)] font-black uppercase leading-[0.92] tracking-[-0.035em] text-white">
          {titleLead} <HeadingAccent>{titleAccent}.</HeadingAccent>
        </h1>
        <p className="mx-auto mt-7 max-w-[54rem] text-base leading-8 text-white/68 sm:text-xl sm:leading-9 lg:text-[1.35rem]">{heroStatement}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
        </div>

        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.55rem] font-bold uppercase tracking-[0.18em] text-white/30 sm:bottom-9">
          <span>Explore the rebuild</span>
          <ArrowDown aria-hidden="true" className="h-3.5 w-3.5 text-secondary/60" />
        </div>
      </motion.div>
    </section>
  );
}
