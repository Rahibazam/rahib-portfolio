import { BarChart3, GitBranch, PieChart, Workflow } from 'lucide-react';
import { HubSpotMark } from '@/components/brand/HubSpotMark';
import { HeroOrbitVisual } from '@/components/visuals/HeroOrbitVisual';

const satellites = [
  { label: 'CRM architecture', Icon: GitBranch },
  { label: 'Workflow automation', Icon: Workflow, iconClassName: 'text-[#ff805f]' },
  { label: 'Reporting dashboards', Icon: BarChart3 },
  { label: 'Performance insights', Icon: PieChart }
];

export function HubSpotHeroVisual() {
  return (
    <HeroOrbitVisual
      ariaLabel="Connected HubSpot CRM, automation, and reporting command center"
      accent="orange"
      floatingIcons={satellites}
      center={<HubSpotMark className="relative h-32 w-32 text-[#ff7a59] drop-shadow-[0_18px_22px_rgba(0,0,0,0.38)] drop-shadow-[0_0_42px_rgba(255,92,53,0.48)] sm:h-44 sm:w-44 lg:h-52 lg:w-52" />}
    />
  );
}
