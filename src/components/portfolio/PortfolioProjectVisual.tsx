import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  Brain,
  Bug,
  Check,
  Database,
  FileSearch,
  Filter,
  GitBranch,
  Image as ImageIcon,
  Lock,
  Mail,
  Monitor,
  PanelsTopLeft,
  Route,
  Workflow
} from 'lucide-react';

type CaseStudyVisualConfig = {
  icon: LucideIcon;
  eyebrow: string;
  stages: [string, string, string];
  metrics: [string, string, string];
  glow: string;
};

const caseStudyVisuals: Record<string, CaseStudyVisualConfig> = {
  'hubspot-crm-rebuild': {
    icon: Database,
    eyebrow: 'CRM data model',
    stages: ['Properties', 'Lifecycle', 'Reporting'],
    metrics: ['Clean', 'Synced', 'Trusted'],
    glow: 'bg-secondary/20'
  },
  'hvac-lifecycle-automation': {
    icon: Route,
    eyebrow: 'Lead lifecycle',
    stages: ['Capture', 'Route', 'Nurture'],
    metrics: ['New', 'Qualified', 'Booked'],
    glow: 'bg-purple/20'
  },
  'audit-nurture-system': {
    icon: Mail,
    eyebrow: 'Nurture control',
    stages: ['Webhook', 'Schedule', 'Reconcile'],
    metrics: ['Queued', 'Active', 'Exited'],
    glow: 'bg-secondary/20'
  },
  'pardot-database-rebuild': {
    icon: Filter,
    eyebrow: 'Audience recovery',
    stages: ['Segment', 'Deduplicate', 'Validate'],
    metrics: ['Review', 'Sendable', 'Suppressed'],
    glow: 'bg-purple/20'
  },
  'website-qa-crawler': {
    icon: Bug,
    eyebrow: 'Rendered-page QA',
    stages: ['Crawl', 'Inspect', 'Evidence'],
    metrics: ['Pages', 'Checks', 'Findings'],
    glow: 'bg-secondary/20'
  },
  'hubspot-form-finder': {
    icon: FileSearch,
    eyebrow: 'Form discovery',
    stages: ['Render', 'Detect', 'Classify'],
    metrics: ['Found', 'Mapped', 'Reviewed'],
    glow: 'bg-purple/20'
  },
  'nero-ai-second-brain': {
    icon: Brain,
    eyebrow: 'Knowledge system',
    stages: ['Capture', 'Connect', 'Recall'],
    metrics: ['Notes', 'Links', 'Context'],
    glow: 'bg-secondary/20'
  },
  'private-media-archive': {
    icon: Lock,
    eyebrow: 'Protected archive',
    stages: ['Authorize', 'Organize', 'Deliver'],
    metrics: ['Private', 'Indexed', 'Responsive'],
    glow: 'bg-purple/20'
  },
  'legacy-portfolio-website': {
    icon: Monitor,
    eyebrow: 'Frontend system',
    stages: ['Structure', 'Style', 'Ship'],
    metrics: ['Desktop', 'Tablet', 'Mobile'],
    glow: 'bg-secondary/20'
  }
};

function CaseStudyProjectVisual({ config, heightClass }: { config: CaseStudyVisualConfig; heightClass: string }) {
  const Icon = config.icon;

  return (
    <div aria-hidden="true" className={`relative overflow-hidden bg-[linear-gradient(145deg,#07182f,#0a102b_55%,#171039)] p-4 sm:p-5 ${heightClass}`}>
      <span className={`absolute -right-14 -top-16 h-52 w-52 rounded-full blur-3xl ${config.glow}`} />
      <span className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-secondary/[0.09] blur-3xl" />
      <div className="relative grid h-full grid-cols-[0.78fr_1.22fr] gap-3 sm:gap-4">
        <div className="flex min-w-0 flex-col justify-between rounded-xl border border-secondary/25 bg-[#08152d]/85 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] sm:p-4">
          <p className="font-mono text-[0.48rem] font-bold uppercase tracking-[0.16em] text-secondary/85 sm:text-[0.55rem]">{config.eyebrow}</p>
          <Icon className="h-12 w-12 text-cyan-100 drop-shadow-[0_0_16px_rgba(10,196,255,.55)] sm:h-16 sm:w-16" strokeWidth={1.45} />
          <div className="grid gap-1.5">
            {config.metrics.map((metric, index) => (
              <div key={metric} className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${index === 1 ? 'bg-purple' : 'bg-secondary'}`} />
                <span className="truncate font-mono text-[0.45rem] uppercase tracking-wider text-white/46 sm:text-[0.52rem]">{metric}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex min-w-0 flex-col justify-center gap-2 sm:gap-3">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 240 180" preserveAspectRatio="none">
            <path d="M22 32C88 32 62 90 124 90S154 148 218 148" fill="none" stroke="#23D2FF" strokeOpacity=".32" strokeWidth="2" strokeDasharray="5 7" />
          </svg>
          {config.stages.map((stage, index) => (
            <div key={stage} className={`relative flex min-w-0 items-center gap-3 rounded-xl border bg-[#0a1733]/90 px-3 py-3 sm:px-4 ${index === 1 ? 'ml-3 border-purple/35 sm:ml-7' : 'border-secondary/25'}`}>
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border font-mono text-[0.55rem] font-bold ${index === 1 ? 'border-purple/45 bg-purple/[0.12] text-purple-100' : 'border-secondary/35 bg-secondary/[0.08] text-cyan-100'}`}>0{index + 1}</span>
              <span className="truncate font-mono text-[0.55rem] font-bold uppercase tracking-[0.11em] text-white/72 sm:text-[0.62rem]">{stage}</span>
              <Check className="ml-auto h-3.5 w-3.5 shrink-0 text-secondary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortfolioProjectVisual({
  slug,
  featured = false,
  visualMode
}: {
  slug: string;
  featured?: boolean;
  visualMode?: 'code-preview';
}) {
  const heightClass = featured ? 'h-64 sm:h-96 lg:h-full lg:min-h-[30rem]' : 'h-44 sm:h-56';

  const caseStudyVisual = caseStudyVisuals[slug];
  if (caseStudyVisual) {
    return <CaseStudyProjectVisual config={caseStudyVisual} heightClass={heightClass} />;
  }

  if (slug === 'duplicate-deal-prevention-system' || slug === 'campaign-workflow-reporting-support') {
    return (
      <div aria-hidden="true" className={`relative overflow-hidden bg-[radial-gradient(circle_at_50%_45%,rgba(108,76,255,0.2),transparent_43%),#070b1d] ${heightClass}`}>
        <div className="absolute left-[8%] top-[40%] rounded-lg border border-secondary/35 bg-[#0b1636] px-3 py-2 font-mono text-[0.6rem] uppercase tracking-widest text-cyan-100">Trigger</div>
        <div className="absolute left-[42%] top-[17%] rounded-lg border border-purple/40 bg-[#111035] px-3 py-2 font-mono text-[0.6rem] uppercase tracking-widest text-purple-100">Validate</div>
        <div className="absolute right-[8%] top-[48%] rounded-lg border border-secondary/30 bg-[#0b1636] px-3 py-2 font-mono text-[0.6rem] uppercase tracking-widest text-cyan-100">Route</div>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 220"><path d="M70 108C135 108 135 55 190 55M213 63C250 66 268 114 334 114" fill="none" stroke="#0ac4ff" strokeOpacity=".46" strokeWidth="2" strokeDasharray="5 6" /></svg>
        <Workflow className="absolute bottom-6 left-1/2 h-10 w-10 -translate-x-1/2 text-secondary/75" />
      </div>
    );
  }

  if (slug === 'private-memory-album-web-app') {
    return (
      <div aria-hidden="true" className={`grid grid-cols-[1.2fr_0.8fr] gap-3 overflow-hidden bg-[linear-gradient(145deg,#0b1732,#161037)] p-5 ${heightClass}`}>
        <div className="relative overflow-hidden rounded-xl border border-secondary/20 bg-[radial-gradient(circle_at_35%_30%,rgba(10,196,255,0.28),transparent_35%),linear-gradient(145deg,#11264a,#080b1b)]"><ImageIcon className="absolute bottom-4 left-4 h-8 w-8 text-secondary/70" /></div>
        <div className="grid gap-3"><span className="rounded-xl border border-purple/25 bg-purple/[0.08]" /><span className="rounded-xl border border-secondary/20 bg-secondary/[0.06]" /></div>
      </div>
    );
  }

  if (visualMode === 'code-preview' || slug === 'landing-page-cms-execution') {
    return (
      <div aria-hidden="true" className={`relative overflow-hidden bg-[linear-gradient(145deg,#0b1935,#080a1d)] p-5 ${heightClass}`}>
        <div className="h-full overflow-hidden rounded-xl border border-white/15 bg-[#080d21] shadow-[0_0_30px_rgba(10,196,255,0.1)]">
          <div className="flex h-9 items-center gap-2 border-b border-white/10 px-4"><span className="h-2 w-2 rounded-full bg-secondary/60" /><span className="h-2 w-2 rounded-full bg-purple/60" /><span className="ml-2 h-2 w-24 rounded bg-white/10" /></div>
          <div className="grid h-[calc(100%-2.25rem)] grid-cols-[1.1fr_0.9fr] items-center gap-4 p-5"><div><span className="block h-2 w-16 rounded bg-secondary/45" /><span className="mt-4 block h-4 w-full rounded bg-white/24" /><span className="mt-2 block h-4 w-4/5 rounded bg-white/15" /><span className="mt-5 block h-8 w-24 rounded bg-gradient-to-r from-secondary to-purple" /></div><PanelsTopLeft className="mx-auto h-16 w-16 text-purple-200" /></div>
        </div>
      </div>
    );
  }

  if (slug === 'analytics-dashboard-reporting-system') {
    return (
      <div aria-hidden="true" className={`grid grid-cols-[0.85fr_1.15fr] gap-4 overflow-hidden bg-[linear-gradient(145deg,#08152f,#0d0a26)] p-5 ${heightClass}`}>
        <div className="grid place-items-center rounded-xl border border-white/10 bg-white/[0.025]"><BarChart3 className="h-16 w-16 text-secondary drop-shadow-[0_0_16px_rgba(10,196,255,0.45)]" /></div>
        <div className="flex items-end justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-5"><span className="h-[35%] w-6 rounded-t bg-secondary/45" /><span className="h-[58%] w-6 rounded-t bg-secondary/65" /><span className="h-[82%] w-6 rounded-t bg-gradient-to-t from-secondary to-purple" /><span className="h-[51%] w-6 rounded-t bg-purple/55" /></div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`relative overflow-hidden bg-[linear-gradient(145deg,#09172f,#08091e)] p-3 sm:p-5 ${heightClass}`}>
      <div className="grid h-full grid-rows-3 gap-2 sm:grid-cols-3 sm:grid-rows-1 sm:gap-3">
        {['New', 'Qualified', 'Active'].map((label, index) => (
          <div key={label} className="grid min-w-0 grid-cols-[4.75rem_minmax(0,1fr)] items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 sm:block sm:rounded-xl sm:p-3">
            <p className="font-mono text-[0.52rem] uppercase tracking-widest text-white/40 sm:text-[0.55rem]">{label}</p>
            <div className="flex min-w-0 gap-1.5 sm:mt-4 sm:grid sm:gap-2">
              {Array.from({ length: index + 2 }, (_, item) => (
                <span key={item} className="flex h-6 min-w-0 flex-1 items-center gap-1.5 rounded-md border border-secondary/15 bg-secondary/[0.04] px-1.5 sm:h-7 sm:gap-2 sm:px-2">
                  <Check className="h-2.5 w-2.5 shrink-0 text-secondary sm:h-3 sm:w-3" />
                  <span className="h-1 min-w-0 flex-1 rounded bg-white/20 sm:w-8" />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <GitBranch className="absolute bottom-2 right-2 h-6 w-6 text-purple-200/75 sm:bottom-3 sm:right-3 sm:h-8 sm:w-8" />
    </div>
  );
}
