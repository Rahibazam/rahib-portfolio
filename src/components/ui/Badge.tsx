import { cn } from '@/lib/utils';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'soft' | 'purple' | 'status';
};

const badgeVariants = {
  default: 'border-secondary/30 bg-secondary/10 text-cyan-100',
  soft: 'border-white/10 bg-white/[0.035] text-white/58',
  purple: 'border-purple/30 bg-purple/10 text-purple-100',
  status: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200'
};

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex min-h-7 w-fit items-center rounded-full border px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em]',
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
