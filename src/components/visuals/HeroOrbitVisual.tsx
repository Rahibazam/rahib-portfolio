import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { CommandOrbitRings } from '@/components/visuals/CommandOrbitRings';

type FloatingIcon = {
  label: string;
  Icon: LucideIcon;
  iconClassName?: string;
};

type HeroOrbitVisualProps = {
  ariaLabel: string;
  center: ReactNode;
  floatingIcons: readonly FloatingIcon[];
  accent?: 'purple' | 'orange';
};

const satelliteSlots = [
  {
    position: 'left-[4%] top-[7%] sm:left-[1%]',
    surface: 'border-cyan-200/45 bg-[#0a1735]/90 text-cyan-100 shadow-[0_18px_44px_rgba(0,0,0,0.44),0_0_38px_rgba(10,196,255,0.23),inset_1px_1px_0_rgba(255,255,255,0.13)]'
  },
  {
    position: 'right-[0%] top-[34%] sm:-right-[3%]',
    surface: 'border-white/25 bg-[#10152d]/88 text-white/90 shadow-[0_18px_46px_rgba(0,0,0,0.5),0_0_30px_rgba(108,76,255,0.17),inset_1px_1px_0_rgba(255,255,255,0.16)]'
  },
  {
    position: 'left-[5%] bottom-[17%] sm:left-[1%]',
    surface: 'border-indigo-300/30 bg-[#0d1430]/92 text-indigo-100 shadow-[0_20px_48px_rgba(0,0,0,0.46),0_0_34px_rgba(82,91,255,0.2),inset_1px_1px_0_rgba(255,255,255,0.12)]'
  },
  {
    position: 'right-[4%] bottom-[8%] sm:right-[0%]',
    surface: 'border-purple/35 bg-[#11132f]/90 text-violet-100 shadow-[0_18px_42px_rgba(0,0,0,0.48),0_0_36px_rgba(108,76,255,0.22),inset_1px_1px_0_rgba(255,255,255,0.14)]'
  }
] as const;

export function HeroOrbitVisual({ ariaLabel, center, floatingIcons, accent = 'purple' }: HeroOrbitVisualProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      data-hero-orbit-visual
      className="relative mx-auto aspect-[0.86] w-full max-w-[27rem] sm:max-w-[34rem] lg:w-[40rem] lg:max-w-[40rem] xl:w-[calc(100vw-55rem)] xl:max-w-[42.5rem] 2xl:max-w-[44rem]"
    >
      <div aria-hidden="true" className="home-command-bloom absolute inset-x-[17%] bottom-[1%] h-24 rounded-full bg-[radial-gradient(ellipse,rgba(67,154,255,0.92),rgba(38,80,255,0.56)_36%,rgba(83,49,229,0.26)_58%,transparent_76%)] blur-2xl" />

      <CommandOrbitRings accent={accent} />

      <div aria-hidden="true" data-command-pane-back className="home-command-panel-back absolute inset-[5.5%_14.2%_7.8%_10.8%] rounded-panel" />
      <div data-command-pane-front className="command-pane-material home-command-panel absolute inset-[4%_15%_7%_10%] overflow-hidden rounded-panel">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(126deg,rgba(255,255,255,0.14),rgba(10,196,255,0.035)_25%,transparent_46%,rgba(66,42,213,0.18)_100%)]" />
        <div aria-hidden="true" className="absolute inset-[1px] rounded-[inherit] border border-white/[0.11]" />
        <div aria-hidden="true" className="absolute -left-[8%] -top-[11%] h-[52%] w-[75%] rotate-[-16deg] bg-[linear-gradient(115deg,rgba(255,255,255,0.16),rgba(95,210,255,0.045)_40%,transparent_68%)] blur-[1px]" />
        <div aria-hidden="true" className="absolute bottom-[8%] right-[-12%] h-[38%] w-[72%] rotate-[-12deg] bg-[linear-gradient(110deg,transparent,rgba(124,92,255,0.1),rgba(255,255,255,0.045))] blur-sm" />
        <div aria-hidden="true" className="absolute -left-20 top-1/4 h-56 w-56 rounded-full bg-secondary/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-20 right-0 h-60 w-60 rounded-full bg-purple/20 blur-3xl" />
        <div aria-hidden="true" className="absolute left-[12%] top-[10%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)]" />
        <div aria-hidden="true" className="absolute right-[14%] top-[15%] h-1 w-1 rounded-full bg-secondary shadow-[0_0_10px_3px_rgba(10,196,255,0.9)]" />
        <div className="absolute inset-0 grid place-items-center">
          <div aria-hidden="true" className="absolute h-[48%] w-[58%] bg-[radial-gradient(ellipse,rgba(10,196,255,0.2),rgba(49,65,255,0.12)_42%,transparent_72%)] blur-3xl" />
          <div aria-hidden="true" className="absolute h-[33%] w-[42%] translate-y-[12%] bg-purple/18 blur-[54px]" />
          {center}
        </div>
      </div>

      {floatingIcons.slice(0, satelliteSlots.length).map(({ label, Icon, iconClassName }, index) => {
        const slot = satelliteSlots[index];

        return (
          <div key={label} aria-label={label} className={`home-icon-float absolute ${slot.position}`} style={{ animationDelay: `${index * -1.4}s` }}>
            <div className={`glass-panel grid h-16 w-16 place-items-center rounded-card border sm:h-20 sm:w-20 lg:h-[5.5rem] lg:w-[5.5rem] ${slot.surface}`}>
              <Icon aria-hidden="true" className={`h-7 w-7 drop-shadow-[0_0_11px_currentColor] sm:h-9 sm:w-9 ${iconClassName ?? ''}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
