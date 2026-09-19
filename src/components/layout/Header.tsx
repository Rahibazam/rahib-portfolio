'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { BrandMark } from '@/components/brand/BrandMark';
import { Container } from '@/components/ui/Container';
import { ButtonTransitionLink } from '@/components/ui/Button';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { pageTransitionTimings } from '@/components/motion/variants';
import { navItems, siteConfig } from '@/data/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const [menuHandoff, setMenuHandoff] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuDialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuHandoffTimerRef = useRef<number | null>(null);
  const isActiveRoute = (href: string) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    desktopQuery.addEventListener('change', closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      desktopQuery.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  useEffect(() => () => {
    if (menuHandoffTimerRef.current !== null) {
      window.clearTimeout(menuHandoffTimerRef.current);
    }
  }, []);

  function closeMenu({ restoreFocus = true } = {}) {
    if (menuHandoffTimerRef.current !== null) {
      window.clearTimeout(menuHandoffTimerRef.current);
      menuHandoffTimerRef.current = null;
    }

    setOpen(false);
    setMenuHandoff(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  function handOffMenuToRoute(href: string) {
    const destinationPath = href.split(/[?#]/)[0];

    if (destinationPath === pathname) {
      closeMenu({ restoreFocus: false });
      return;
    }

    setMenuHandoff(true);
    const fadeInMs = prefersReducedMotion ? pageTransitionTimings.reduced.fadeInMs : pageTransitionTimings.standard.fadeInMs;

    menuHandoffTimerRef.current = window.setTimeout(() => {
      setOpen(false);
      setMenuHandoff(false);
      menuHandoffTimerRef.current = null;
    }, fadeInMs + 50);
  }

  function handleMenuKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = menuDialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusableElements?.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-[#050817]/90 via-[#050817]/65 to-transparent pb-4 pt-4 backdrop-blur-sm sm:pt-6">
        <Container className="max-w-[108rem] px-5 sm:px-8 xl:px-10">
          <nav className="flex items-center justify-between border-b border-white/[0.025] px-0 py-2 sm:py-3">
            <TransitionLink href="/" aria-label={`${siteConfig.name} home`} className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
              <BrandMark className="h-12 w-12 drop-shadow-[0_0_14px_rgba(10,196,255,0.4)] sm:h-14 sm:w-14" />
              <span className="hidden text-sm font-black uppercase leading-tight tracking-[0.16em] text-white sm:block">Rahib <span className="text-secondary">Azam</span></span>
            </TransitionLink>

            <div className="hidden items-center gap-4 lg:flex xl:gap-7">
              {navItems.map((item) => (
                <TransitionLink key={item.href} href={item.href} aria-current={isActiveRoute(item.href) ? 'page' : undefined} className={`premium-underline-link px-2 py-3 text-xs font-bold uppercase tracking-[0.16em] ${isActiveRoute(item.href) ? 'text-secondary' : 'text-white/68'}`}>
                  {item.label}
                </TransitionLink>
              ))}
            </div>

            <ButtonTransitionLink href="/contact" variant="secondary" className="hidden min-h-12 rounded-lg border-white/25 bg-black/20 px-7 text-xs shadow-[0_0_24px_rgba(10,196,255,0.08)] hover:border-secondary/75 hover:bg-secondary/[0.08] hover:text-cyan-50 hover:shadow-[0_0_36px_rgba(10,196,255,0.28)] lg:inline-flex">
              Bring Me A Problem <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </ButtonTransitionLink>

            <button
              ref={menuButtonRef}
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-secondary/25 bg-[#0a1230]/80 text-white shadow-glow transition-colors hover:border-secondary/60 hover:bg-secondary/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 lg:hidden"
              aria-label="Open navigation menu"
              aria-controls="mobile-command-menu"
              aria-expanded={open}
              onClick={() => {
                setMenuHandoff(false);
                setOpen(true);
              }}
            >
              <Menu size={18} />
            </button>
          </nav>
        </Container>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-command-menu"
            ref={menuDialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-[70] isolate flex min-h-svh flex-col overflow-hidden bg-[#030615] text-white lg:hidden"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            onKeyDown={handleMenuKeyDown}
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_8%,rgba(10,196,255,.15),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(139,108,255,.16),transparent_34%),linear-gradient(155deg,#071128_0%,#030615_48%,#090625_100%)]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:100%_5px]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.85),rgba(139,108,255,.7),transparent)]" />

            <motion.div
              className="relative flex min-h-0 flex-1 flex-col"
              animate={{ opacity: menuHandoff ? 0 : 1 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.08, ease: 'easeOut' }}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <TransitionLink href="/" aria-label={`${siteConfig.name} home`} className="flex items-center gap-3" onClick={() => handOffMenuToRoute('/')}>
                  <BrandMark className="h-11 w-11 drop-shadow-[0_0_16px_rgba(10,196,255,.48)]" />
                  <span className="font-display text-sm font-black uppercase tracking-[0.15em] text-white">Rahib <span className="text-secondary">Azam</span></span>
                </TransitionLink>

                <button
                  ref={closeButtonRef}
                  type="button"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-secondary/35 bg-secondary/[0.06] text-white transition-colors hover:border-secondary/70 hover:bg-secondary/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70"
                  aria-label="Close navigation menu"
                  onClick={() => closeMenu()}
                >
                  <X aria-hidden="true" size={19} />
                </button>
              </div>

            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <motion.nav
                aria-label="Mobile navigation"
                className="border-t border-white/[0.08]"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.045, delayChildren: prefersReducedMotion ? 0 : 0.05 } },
                  closed: { transition: { staggerChildren: 0, staggerDirection: -1 } }
                }}
              >
                {navItems.map((item, index) => {
                  const active = isActiveRoute(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: prefersReducedMotion ? 0 : -12 }
                      }}
                      transition={{ duration: prefersReducedMotion ? 0.01 : 0.24, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <TransitionLink
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        onClick={() => handOffMenuToRoute(item.href)}
                        className={`group relative grid min-h-[3.65rem] grid-cols-[2.5rem_1fr_auto] items-center border-b border-white/[0.08] px-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary/70 ${active ? 'bg-[linear-gradient(90deg,rgba(10,196,255,.13),rgba(139,108,255,.045),transparent)] text-white' : 'text-white/66 hover:bg-white/[0.035] hover:text-white'}`}
                      >
                        <span aria-hidden="true" className={`absolute inset-y-2 left-0 w-px transition-all ${active ? 'bg-secondary shadow-[0_0_14px_rgba(10,196,255,.9)]' : 'bg-transparent group-hover:bg-white/25'}`} />
                        <span className={`font-mono text-[0.68rem] font-semibold tracking-[0.14em] ${active ? 'text-secondary' : 'text-white/32'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-display text-[0.92rem] font-black uppercase tracking-[0.16em]">
                          {item.label}
                        </span>
                        <span aria-hidden="true" className={`font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] ${active ? 'text-secondary' : 'text-transparent'}`}>
                          Active
                        </span>
                      </TransitionLink>
                    </motion.div>
                  );
                })}
              </motion.nav>

              <div className="mt-auto pt-6">
                <ButtonTransitionLink
                  href="/contact"
                  onClick={() => handOffMenuToRoute('/contact')}
                  className="min-h-[3.35rem] w-full rounded-lg px-5 text-xs"
                >
                  Bring Me A Problem <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </ButtonTransitionLink>

                <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-4 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-white/42">
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(10,196,255,.8)]" />
                    Available for select projects
                  </span>
                  <span aria-hidden="true" className="hidden min-[360px]:inline">RA / NAV</span>
                </div>
              </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
