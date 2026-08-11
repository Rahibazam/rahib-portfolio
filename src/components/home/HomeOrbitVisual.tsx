import { BarChart3, Code2, PanelsTopLeft, Workflow } from 'lucide-react';
import { BrandMark } from '@/components/brand/BrandMark';
import { HeroOrbitVisual } from '@/components/visuals/HeroOrbitVisual';

const orbitIcons = [
  {
    label: 'Code systems',
    Icon: Code2
  },
  {
    label: 'Workflow automation',
    Icon: Workflow
  },
  {
    label: 'Analytics reporting',
    Icon: BarChart3
  },
  {
    label: 'Web interfaces',
    Icon: PanelsTopLeft
  }
];

export function HomeOrbitVisual() {
  return (
    <HeroOrbitVisual
      ariaLabel="CRM, automation, analytics, and web systems command panel"
      floatingIcons={orbitIcons}
      center={<BrandMark className="relative h-36 w-36 drop-shadow-[0_18px_22px_rgba(0,0,0,0.38)] drop-shadow-[0_0_42px_rgba(10,196,255,0.5)] sm:h-48 sm:w-48 lg:h-56 lg:w-56" />}
    />
  );
}
