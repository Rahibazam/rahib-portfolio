import { BarChart3, Code2, GitBranch, PanelsTopLeft } from 'lucide-react';
import { HeroOrbitVisual } from '@/components/visuals/HeroOrbitVisual';
import { PortfolioCenterMark } from './PortfolioCenterMark';

const nodes = [
  { label: 'Code', Icon: Code2 },
  { label: 'Systems', Icon: GitBranch },
  { label: 'Reporting', Icon: BarChart3 },
  { label: 'Interfaces', Icon: PanelsTopLeft }
];

export function PortfolioHeroVisual() {
  return (
    <HeroOrbitVisual
      ariaLabel="Selected CRM, automation, reporting, and web project dashboard"
      floatingIcons={nodes}
      center={<PortfolioCenterMark />}
    />
  );
}
