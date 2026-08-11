import { cn } from '@/lib/utils';

type HubSpotSectionHeaderProps = {
  title: string;
  description: string;
  className?: string;
};

export function HubSpotSectionHeader({ title, description, className }: HubSpotSectionHeaderProps) {
  return (
    <div className={cn('relative pl-6 before:absolute before:bottom-1 before:left-0 before:top-1 before:w-1 before:rounded-full before:bg-secondary before:shadow-[0_0_14px_3px_rgba(10,196,255,0.55)]', className)}>
      <h2 className="home-display text-[1.75rem] font-black uppercase leading-none tracking-[0.025em] text-white sm:text-[2.15rem] lg:text-[2.55rem]">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60 lg:text-base">{description}</p>
    </div>
  );
}
