'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { BrandMark } from '@/components/brand/BrandMark';
import { Container } from '@/components/ui/Container';
import { ButtonTransitionLink } from '@/components/ui/Button';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { navItems, siteConfig } from '@/data/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-[#050817]/90 via-[#050817]/65 to-transparent pb-4 pt-4 backdrop-blur-sm sm:pt-6">
      <Container className="max-w-[108rem] px-5 sm:px-8 xl:px-10">
        <nav className="flex items-center justify-between border-b border-white/[0.025] px-0 py-2 sm:py-3">
          <TransitionLink href="/" aria-label={`${siteConfig.name} home`} className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <BrandMark className="h-12 w-12 drop-shadow-[0_0_14px_rgba(10,196,255,0.4)] sm:h-14 sm:w-14" />
            <span className="hidden text-sm font-black uppercase leading-tight tracking-[0.16em] text-white sm:block">Rahib <span className="text-secondary">Azam</span></span>
          </TransitionLink>

          <div className="hidden items-center gap-4 lg:flex xl:gap-7">
            {navItems.map((item) => (
              <TransitionLink key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} className={`premium-underline-link px-2 py-3 text-xs font-bold uppercase tracking-[0.16em] ${pathname === item.href ? 'text-secondary' : 'text-white/68'}`}>
                {item.label}
              </TransitionLink>
            ))}
          </div>

          <ButtonTransitionLink href="/contact" variant="secondary" className="hidden min-h-12 rounded-lg border-white/25 bg-black/20 px-7 text-xs shadow-[0_0_24px_rgba(10,196,255,0.08)] hover:border-secondary/75 hover:bg-secondary/[0.08] hover:text-cyan-50 hover:shadow-[0_0_36px_rgba(10,196,255,0.28)] lg:inline-flex">
            Work with me <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </ButtonTransitionLink>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-secondary/25 bg-[#0a1230]/80 text-white shadow-glow lg:hidden"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {open ? (
          <div className="glass-panel mt-3 grid rounded-[1.5rem] border-white/10 p-3 lg:hidden">
            {navItems.map((item) => (
              <TransitionLink key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} onClick={() => setOpen(false)} className={`premium-underline-link rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] ${pathname === item.href ? 'bg-secondary/[0.08] text-secondary' : 'text-white/70 hover:bg-white/[0.06]'}`}>
                {item.label}
              </TransitionLink>
            ))}
            <ButtonTransitionLink href="/contact" onClick={() => setOpen(false)} className="mt-2 w-full rounded-xl">Work with me <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></ButtonTransitionLink>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
