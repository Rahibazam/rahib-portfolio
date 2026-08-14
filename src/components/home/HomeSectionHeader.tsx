import type { ReactNode } from 'react';
import { Triangle } from 'lucide-react';
import { cn } from '@/lib/utils';

type HomeSectionHeaderProps = {
  title: ReactNode;
  description: string;
  className?: string;
};

type HeadingAccentProps = {
  children: ReactNode;
  className?: string;
};

export function HeadingAccent({ children, className }: HeadingAccentProps) {
  return (
    <span
      className={cn(
        'bg-[linear-gradient(90deg,var(--secondary),#8b6cff)] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(10,196,255,.55)] [filter:drop-shadow(0_0_18px_rgba(10,196,255,.42))_drop-shadow(0_0_24px_rgba(139,108,255,.34))]',
        className
      )}
    >
      {children}
    </span>
  );
}

export function HomeSectionHeader({ title, description, className }: HomeSectionHeaderProps) {
  return (
    <div className={cn('relative grid gap-5 border-t border-secondary/20 pt-8 before:absolute before:left-0 before:top-[-1px] before:h-px before:w-40 before:bg-gradient-to-r before:from-secondary before:to-transparent md:grid-cols-[minmax(0,1fr)_minmax(22rem,0.68fr)] md:items-start', className)}>
      <div className="flex items-center gap-4">
        <span className="relative grid h-8 w-8 shrink-0 translate-y-px place-items-center text-secondary before:absolute before:inset-0 before:rounded-full before:bg-secondary/25 before:blur-md">
          <Triangle aria-hidden="true" className="relative h-[1.05rem] w-[1.05rem] rotate-90 fill-current drop-shadow-[0_0_12px_rgba(10,196,255,1)]" />
        </span>
        <h2 className="home-display text-[1.7rem] font-black uppercase tracking-[0.025em] text-white sm:text-[2rem] lg:text-[2.35rem]">{title}</h2>
      </div>
      <p className="max-w-xl text-sm leading-7 text-white/62 md:justify-self-end lg:text-base">{description}</p>
    </div>
  );
}
