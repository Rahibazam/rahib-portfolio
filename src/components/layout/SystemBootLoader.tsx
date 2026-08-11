'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const BOOT_KEY = 'rahib-portfolio-system-booted';

const bootMessages = [
  'Initializing interface...',
  'Calibrating CRM chaos...',
  'Warming up the pixels...',
  'Negotiating with HubSpot...',
  'Compiling awkwardly human UI...',
  'Finalizing the not-so-small talk...'
] as const;

export function SystemBootLoader() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReduced);

    try {
      if (window.sessionStorage.getItem(BOOT_KEY)) {
        setShouldRender(false);
        return;
      }
    } catch {
      // If sessionStorage is unavailable, gracefully show the loader for this render only.
    }

    setShouldRender(true);

    const exitDelay = prefersReduced ? 420 : 1900;
    const removeDelay = prefersReduced ? 620 : 2300;

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);

      try {
        window.sessionStorage.setItem(BOOT_KEY, 'true');
      } catch {
        // Ignore storage failures; the loader should still exit cleanly.
      }
    }, exitDelay);

    const removeTimer = window.setTimeout(() => {
      setShouldRender(false);
    }, removeDelay);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (!shouldRender || reducedMotion) return;

    const messageTimer = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % bootMessages.length);
    }, 380);

    return () => window.clearInterval(messageTimer);
  }, [shouldRender, reducedMotion]);

  useEffect(() => {
    if (!shouldRender) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      aria-label="Portfolio system boot loader"
      aria-live="polite"
      className={cn(
        'fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#050816] px-5 text-white',
        'transition-[opacity,filter,clip-path] duration-500 ease-[var(--ease-premium)]',
        isExiting && 'pointer-events-none opacity-0 blur-md [clip-path:inset(0_0_100%_0)]'
      )}
      role="status"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(10,196,255,.16),transparent_32%),radial-gradient(circle_at_82%_88%,rgba(139,108,255,.16),transparent_36%),linear-gradient(135deg,#050816,#070B1D_48%,#030512)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:42px_42px]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.32)_68%,rgba(0,0,0,.72)_100%)]" />

      {!reducedMotion ? (
        <div
          aria-hidden="true"
          className="boot-scanline pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.16),rgba(139,108,255,.14),transparent)] opacity-0 blur-[1px]"
        />
      ) : null}

      <div className="relative w-full max-w-[min(92vw,31rem)]">
        <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(10,196,255,.18),transparent_58%)] blur-3xl" />

        <section className="relative overflow-hidden rounded-[1.55rem] border border-cyan-300/35 bg-[linear-gradient(145deg,rgba(8,18,46,.82),rgba(8,10,34,.88))] px-6 py-7 text-center shadow-[0_0_0_1px_rgba(10,196,255,.08),0_28px_90px_rgba(0,0,0,.58),0_0_55px_rgba(10,196,255,.14)] backdrop-blur-xl sm:px-8 sm:py-8">
          <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.82),rgba(139,108,255,.68),transparent)]" />
          <div aria-hidden="true" className="absolute left-4 top-4 h-8 w-8 border-l border-t border-cyan-300/65" />
          <div aria-hidden="true" className="absolute right-4 top-4 h-8 w-8 border-r border-t border-violet-300/65" />
          <div aria-hidden="true" className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-violet-300/55" />
          <div aria-hidden="true" className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-cyan-300/55" />

          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.38em] text-cyan-300 drop-shadow-[0_0_12px_rgba(10,196,255,.7)]">
            SYSTEM BOOT
          </p>

          <div className="relative mx-auto mt-6 grid h-36 w-36 place-items-center sm:h-40 sm:w-40">
            <div aria-hidden="true" className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(10,196,255,.2),transparent_64%)] blur-xl" />

            {!reducedMotion ? (
              <>
                <div aria-hidden="true" className="boot-orbit absolute inset-3 rounded-full border border-cyan-300/42" />
                <div aria-hidden="true" className="boot-orbit-reverse absolute inset-1 rounded-full border border-violet-300/32 [transform:rotate(58deg)_scaleX(1.18)]" />
                <div aria-hidden="true" className="boot-orbit absolute inset-5 rounded-full border border-blue-400/24 [animation-duration:18s]" />
              </>
            ) : (
              <div aria-hidden="true" className="absolute inset-4 rounded-full border border-cyan-300/35" />
            )}

            <div className="relative grid h-20 w-20 place-items-center rounded-2xl border border-cyan-300/35 bg-[linear-gradient(145deg,rgba(10,196,255,.14),rgba(139,108,255,.18),rgba(3,5,18,.72))] shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_0_35px_rgba(10,196,255,.28)] sm:h-24 sm:w-24">
              <span className="bg-[linear-gradient(90deg,var(--secondary),#8b6cff)] bg-clip-text font-mono text-3xl font-black tracking-[-0.12em] text-transparent drop-shadow-[0_0_18px_rgba(10,196,255,.55)] sm:text-4xl">
                RA
              </span>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="home-display text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl">
              Rahib Azam
            </h1>
            <p className="mt-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.34em] text-cyan-200/80">
              Portfolio System
            </p>
          </div>

          <p className="mt-6 min-h-5 font-mono text-xs font-semibold text-white/70 sm:text-sm">
            {reducedMotion ? bootMessages[0] : bootMessages[messageIndex]}
          </p>

          <div className="mt-5 text-left">
            <div className="mb-2 flex items-center justify-between font-mono text-[0.62rem] font-bold uppercase tracking-[0.24em] text-cyan-200/70">
              <span>Interface Load</span>
              <span>{reducedMotion ? 'READY' : 'SYSTEM LOAD'}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full border border-cyan-300/20 bg-black/35 shadow-[inset_0_1px_8px_rgba(0,0,0,.75)]">
              <div
                className={cn(
                  'h-full origin-left rounded-full bg-[linear-gradient(90deg,var(--secondary),#4b6bff,#8b6cff)] shadow-[0_0_18px_rgba(10,196,255,.55)]',
                  reducedMotion ? 'w-full' : 'boot-progress-fill w-full'
                )}
              />
            </div>
          </div>
        </section>
      </div>

      <p className="absolute bottom-6 px-5 text-center font-mono text-[0.62rem] uppercase tracking-[0.22em] text-white/38">
        No generic spinner detected.
      </p>
    </div>
  );
}
