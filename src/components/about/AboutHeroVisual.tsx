import { BarChart3, Code2, Network, Workflow } from 'lucide-react';
import { BrandMark } from '@/components/brand/BrandMark';
import { HeroOrbitVisual } from '@/components/visuals/HeroOrbitVisual';

const identityIcons = [
  { label: 'Web systems', Icon: Code2 },
  { label: 'CRM architecture', Icon: Network },
  { label: 'Automation workflows', Icon: Workflow },
  { label: 'Reporting systems', Icon: BarChart3 }
];

export function AboutHeroVisual() {
  return (
    <HeroOrbitVisual
      ariaLabel="Rahib Azam profile command center for CRM, web, automation, and reporting systems"
      floatingIcons={identityIcons}
      center={(
        <div className="relative flex flex-col items-center text-center">
          <BrandMark className="h-28 w-28 drop-shadow-[0_18px_22px_rgba(0,0,0,0.38)] drop-shadow-[0_0_42px_rgba(10,196,255,0.5)] sm:h-40 sm:w-40 lg:h-48 lg:w-48" />
          <p className="mt-2 font-display text-lg font-black text-white sm:text-2xl">Rahib Azam</p>
          <p className="mt-1 font-mono text-[0.56rem] font-bold uppercase tracking-[0.18em] text-secondary sm:text-xs">CRM &amp; Web Technologist</p>
        </div>
      )}
    />
  );
}
