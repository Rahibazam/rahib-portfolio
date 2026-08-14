import { cn } from '@/lib/utils';

type GlassCardProps = {
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
  strength?: 'default' | 'strong';
  interactive?: boolean;
  effect?: 'none' | 'system';
};

export function GlassCard({
  className,
  contentClassName,
  children,
  strength = 'default',
  interactive = true,
  effect = 'system'
}: GlassCardProps) {
  const hasSystemEffect = interactive && effect === 'system';

  return (
    <div
      className={cn(
        'group/card relative isolate overflow-hidden rounded-card p-5 sm:p-6',
        strength === 'strong' ? 'glass-panel-strong' : 'glass-panel',
        interactive && 'interactive-card',
        hasSystemEffect &&
          'transform-gpu transition-all duration-300 ease-premium motion-safe:hover:-translate-y-1 focus-within:border-secondary/45',
        className
      )}
    >
      {hasSystemEffect ? (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 group-focus-within/card:opacity-100"
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(10,196,255,.16),transparent_38%),radial-gradient(circle_at_100%_100%,rgba(139,108,255,.16),transparent_42%)]" />
          </span>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-[-35%] left-[-65%] z-0 w-[55%] rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.10),rgba(10,196,255,.14),transparent)] opacity-0 blur-[1px] transition-all duration-700 ease-out group-hover/card:left-[115%] group-hover/card:opacity-100 group-focus-within/card:left-[115%] group-focus-within/card:opacity-100 motion-reduce:hidden"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-4 z-0 h-5 w-5 border-l border-t border-[#0AC4FF]/0 transition-colors duration-300 group-hover/card:border-[#0AC4FF]/70 group-focus-within/card:border-[#0AC4FF]/70"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-4 z-0 h-5 w-5 border-r border-t border-[#8b6cff]/0 transition-colors duration-300 group-hover/card:border-[#8b6cff]/70 group-focus-within/card:border-[#8b6cff]/70"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 left-4 z-0 h-5 w-5 border-b border-l border-[#8b6cff]/0 transition-colors duration-300 group-hover/card:border-[#8b6cff]/60 group-focus-within/card:border-[#8b6cff]/60"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 right-4 z-0 h-5 w-5 border-b border-r border-[#0AC4FF]/0 transition-colors duration-300 group-hover/card:border-[#0AC4FF]/60 group-focus-within/card:border-[#0AC4FF]/60"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-0 z-0 h-px scale-x-0 bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.75),rgba(139,108,255,.65),transparent)] opacity-0 transition-all duration-300 group-hover/card:scale-x-100 group-hover/card:opacity-100 group-focus-within/card:scale-x-100 group-focus-within/card:opacity-100"
          />
        </>
      ) : null}

      <div className={cn('relative z-10', contentClassName)}>{children}</div>
    </div>
  );
}
