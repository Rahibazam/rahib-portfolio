'use client';

import { useCallback, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Radio, ShieldCheck } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';

type HomeTestimonialsDeckProps = {
  testimonials: Testimonial[];
};

const signalBars = [35, 58, 42, 76, 52, 88, 61, 100, 72, 44, 82, 55, 69, 38, 64, 47, 31];

export function HomeTestimonialsDeck({ testimonials }: HomeTestimonialsDeckProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const total = testimonials.length;

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext();
    }
  };

  if (total === 0) return null;

  const activeTestimonial = testimonials[activeIndex];
  const previousIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  return (
    <div
      className="relative isolate mt-10 overflow-hidden border-y border-secondary/25 py-7 outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:py-9"
      role="region"
      aria-roledescription="carousel"
      aria-label="Anonymous client testimonials"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(10,196,255,.11),transparent_25rem),radial-gradient(circle_at_76%_54%,rgba(139,108,255,.10),transparent_32rem)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(10,196,255,.18)_1px,transparent_1px)] [background-size:100%_3.5rem]" />

      <div className="relative mx-auto max-w-[92rem] px-4 sm:px-7 lg:px-10">
        <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="relative grid h-10 w-10 shrink-0 place-items-center border border-secondary/45 bg-secondary/[0.08] text-secondary shadow-[0_0_20px_rgba(10,196,255,.16)]">
              <Radio aria-hidden="true" className="h-4 w-4" />
              {!prefersReducedMotion ? <span aria-hidden="true" className="absolute inset-[-5px] animate-ping border border-secondary/20 [animation-duration:2.4s]" /> : null}
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.22em] text-secondary">Client transmission / decoded</p>
              <p className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-white/35">Identity redacted by policy</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/42 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_12px_rgba(10,196,255,.8)]" />
            Signal locked
          </div>
        </div>

        <div className="relative grid min-h-[28rem] items-stretch md:min-h-[27rem] lg:grid-cols-[10rem_minmax(0,1fr)_10rem] xl:grid-cols-[13rem_minmax(0,1fr)_13rem]">
          <button
            type="button"
            onClick={showPrevious}
            className="group/edge relative hidden overflow-hidden border-r border-white/10 px-5 text-left outline-none transition-colors duration-500 hover:bg-secondary/[0.055] focus-visible:bg-secondary/[0.055] lg:block"
            aria-label={`Show previous testimonial: ${testimonials[previousIndex].title}`}
          >
            <span className="absolute inset-y-10 right-0 w-px origin-center scale-y-0 bg-secondary shadow-[0_0_14px_rgba(10,196,255,.7)] transition-transform duration-500 group-hover/edge:scale-y-100 group-focus-visible/edge:scale-y-100" />
            <span className="absolute left-5 top-1/2 w-52 -translate-y-1/2 -rotate-90 whitespace-nowrap font-mono text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/28 transition-colors duration-500 group-hover/edge:text-secondary/75 group-focus-visible/edge:text-secondary/75">
              Previous / {testimonials[previousIndex].title}
            </span>
            <ArrowLeft aria-hidden="true" className="absolute bottom-7 left-1/2 h-4 w-4 -translate-x-1/2 text-white/25 transition-all duration-300 group-hover/edge:-translate-x-[70%] group-hover/edge:text-secondary" />
          </button>

          <div className="relative flex min-w-0 items-center overflow-hidden px-1 py-10 sm:px-7 md:py-12 xl:px-14">
            <span aria-hidden="true" className="pointer-events-none absolute left-0 top-1/2 h-px w-12 bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.55))] sm:w-20" />
            <span aria-hidden="true" className="pointer-events-none absolute right-0 top-1/2 h-px w-12 bg-[linear-gradient(90deg,rgba(139,108,255,.55),transparent)] sm:w-20" />

            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeTestimonial.id}
                className="relative z-10 mx-auto w-full max-w-[58rem]"
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 22, filter: 'blur(9px)', clipPath: 'inset(0 0 100% 0)' }}
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'inset(0 0 0% 0)' }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -18, filter: 'blur(7px)', clipPath: 'inset(100% 0 0 0)' }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.58, ease: [0.16, 1, 0.3, 1] }}
                aria-live="polite"
                aria-atomic="true"
                drag={!prefersReducedMotion ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) showNext();
                  if (info.offset.x > 60) showPrevious();
                }}
              >
                <div className="flex items-center gap-3 font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/40">
                  <span className="text-secondary">Transmission {String(activeIndex + 1).padStart(2, '0')}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-[linear-gradient(90deg,rgba(10,196,255,.45),transparent)]" />
                  <span>{activeTestimonial.focus}</span>
                </div>

                <h3 className="mt-7 font-display text-base font-black uppercase tracking-[0.1em] text-purple-300 sm:text-lg">{activeTestimonial.title}</h3>
                <blockquote className="mt-5 max-w-[54rem] font-display text-[clamp(1.45rem,3.1vw,2.65rem)] font-bold leading-[1.2] tracking-[-0.02em] text-white drop-shadow-[0_0_20px_rgba(10,196,255,.08)]">
                  “{activeTestimonial.quote}”
                </blockquote>

                <footer className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center border border-secondary/30 bg-[#07112d] text-secondary">
                      <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-display text-xs font-black uppercase tracking-[0.1em] text-white">Anonymous client</p>
                      <p className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-white/38">Identity intentionally withheld</p>
                    </div>
                  </div>

                  <div aria-hidden="true" className="flex h-8 items-center gap-1">
                    {signalBars.map((height, index) => (
                      <motion.span
                        key={`${activeTestimonial.id}-${index}`}
                        className="w-px bg-[linear-gradient(180deg,#8b6cff,var(--secondary))] shadow-[0_0_6px_rgba(10,196,255,.45)]"
                        initial={{ height: prefersReducedMotion ? `${height}%` : '12%', opacity: 0.35 }}
                        animate={{ height: `${height}%`, opacity: 0.45 + height / 200 }}
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.38, delay: prefersReducedMotion ? 0 : index * 0.018 }}
                      />
                    ))}
                  </div>
                </footer>
              </motion.article>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="group/edge relative hidden overflow-hidden border-l border-white/10 px-5 text-left outline-none transition-colors duration-500 hover:bg-purple/[0.055] focus-visible:bg-purple/[0.055] lg:block"
            aria-label={`Show next testimonial: ${testimonials[nextIndex].title}`}
          >
            <span className="absolute inset-y-10 left-0 w-px origin-center scale-y-0 bg-purple shadow-[0_0_14px_rgba(139,108,255,.7)] transition-transform duration-500 group-hover/edge:scale-y-100 group-focus-visible/edge:scale-y-100" />
            <span className="absolute right-5 top-1/2 w-52 -translate-y-1/2 rotate-90 whitespace-nowrap font-mono text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/28 transition-colors duration-500 group-hover/edge:text-purple-300 group-focus-visible/edge:text-purple-300">
              Next / {testimonials[nextIndex].title}
            </span>
            <ArrowRight aria-hidden="true" className="absolute bottom-7 left-1/2 h-4 w-4 -translate-x-1/2 text-white/25 transition-all duration-300 group-hover/edge:-translate-x-[30%] group-hover/edge:text-purple-300" />
          </button>
        </div>

        <div className="relative border-t border-white/10 pt-5">
          <div aria-hidden="true" className="absolute left-0 right-0 top-[-1px] h-px bg-[linear-gradient(90deg,rgba(10,196,255,.55),rgba(139,108,255,.45),transparent)]" style={{ width: `${((activeIndex + 1) / total) * 100}%` }} />
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={showPrevious}
              className="group/control grid h-11 w-11 shrink-0 place-items-center border border-secondary/30 bg-[#07112d]/80 text-white transition duration-300 hover:border-secondary/70 hover:text-secondary hover:shadow-[0_0_20px_rgba(10,196,255,.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 lg:hidden"
              aria-label="Show previous testimonial"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover/control:-translate-x-0.5" />
            </button>

            <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 sm:gap-3" aria-label={`Testimonial ${activeIndex + 1} of ${total}`}>
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={testimonial.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group/tuner relative flex h-8 flex-1 items-center justify-center outline-none sm:max-w-20"
                    aria-label={`Show testimonial ${index + 1}: ${testimonial.title}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className={`h-px w-full transition-all duration-500 ${isActive ? 'bg-secondary shadow-[0_0_10px_rgba(10,196,255,.75)]' : 'bg-white/16 group-hover/tuner:bg-white/38 group-focus-visible/tuner:bg-white/38'}`} />
                    <span className={`absolute h-2 w-2 rotate-45 border transition-all duration-500 ${isActive ? 'scale-100 border-secondary bg-secondary shadow-[0_0_12px_rgba(10,196,255,.8)]' : 'scale-75 border-white/25 bg-[#07112d] group-hover/tuner:border-purple/70 group-focus-visible/tuner:border-purple/70'}`} />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={showNext}
              className="group/control grid h-11 w-11 shrink-0 place-items-center border border-secondary/30 bg-[#07112d]/80 text-white transition duration-300 hover:border-purple/70 hover:text-purple-300 hover:shadow-[0_0_20px_rgba(139,108,255,.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 lg:hidden"
              aria-label="Show next testimonial"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover/control:translate-x-0.5" />
            </button>
          </div>

          <p className="mt-3 text-center font-mono text-[0.55rem] font-bold uppercase tracking-[0.2em] text-white/32" aria-live="polite">
            Frequency {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} · drag or use arrow keys
          </p>
        </div>
      </div>
    </div>
  );
}
