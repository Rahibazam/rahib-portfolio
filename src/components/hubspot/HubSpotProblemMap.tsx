import type { LucideIcon } from 'lucide-react';
import { BarChart3, CheckCircle2, GitBranch, Grid3X3, Route, Wrench } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { hubspotProblems, type HubSpotIconName } from '@/data/hubspot';

const problemIcons: Partial<Record<HubSpotIconName, LucideIcon>> = {
  properties: Grid3X3,
  workflow: Wrench,
  dashboard: BarChart3,
  pipeline: GitBranch,
  routing: Route,
  quality: CheckCircle2
};

function ProblemMotif({ type }: { type: HubSpotIconName }) {
  const sharedClass =
    'absolute bottom-5 right-5 h-24 w-32 text-secondary/20 opacity-50 transition-[opacity,color,filter] duration-500 ease-premium group-hover/problem:text-secondary/70 group-hover/problem:opacity-100 group-hover/problem:drop-shadow-[0_0_12px_rgba(10,196,255,.32)] motion-reduce:transition-none sm:h-28 sm:w-36';

  if (type === 'properties') {
    return (
      <div aria-hidden="true" className={sharedClass}>
        {[0, 1, 2, 3].map((row) => (
          <span key={row} className="absolute left-0 right-0 flex items-center gap-2" style={{ top: `${row * 26}%` }}>
            <span className={`h-1.5 w-1.5 rounded-full ${row === 2 ? 'bg-[#ff6b45] shadow-[0_0_10px_rgba(255,107,69,.72)]' : 'bg-current'}`} />
            <span className={`h-px ${row === 2 ? 'w-9 bg-[#ff6b45]/75' : 'flex-1 bg-current'}`} />
            <span className={`h-2 rounded-sm border ${row === 2 ? 'w-12 border-[#ff6b45]/60' : 'w-9 border-current'}`} />
          </span>
        ))}
      </div>
    );
  }

  if (type === 'workflow') {
    return (
      <div aria-hidden="true" className={sharedClass}>
        <span className="absolute left-2 top-1/2 h-px w-20 -translate-y-1/2 bg-current" />
        <span className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-current bg-[#09102b]" />
        <span className="absolute left-[4.7rem] top-[calc(50%-1px)] h-3 w-4 bg-[#09102b]" />
        <span className="absolute left-[4.85rem] top-[calc(50%-1px)] h-px w-3 rotate-[-35deg] bg-[#ff6b45] shadow-[0_0_8px_rgba(255,107,69,.72)]" />
        <span className="absolute right-2 top-[24%] h-3 w-3 rounded-full border border-current bg-[#09102b]" />
        <span className="absolute right-2 bottom-[24%] h-3 w-3 rounded-full border border-current bg-[#09102b]" />
        <span className="absolute right-4 top-[30%] h-px w-10 rotate-[-27deg] origin-right bg-current" />
        <span className="absolute bottom-[30%] right-4 h-px w-10 rotate-[27deg] origin-right bg-current" />
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div aria-hidden="true" className={sharedClass}>
        <span className="absolute inset-x-1 bottom-1 h-px bg-current" />
        {[42, 68, 34, 78, 51].map((height, index) => (
          <span
            key={height}
            className={`absolute bottom-2 w-3 rounded-t-sm border border-b-0 ${index === 2 ? 'border-[#ff6b45]/70 bg-[#ff6b45]/10 shadow-[0_0_10px_rgba(255,107,69,.3)]' : 'border-current bg-secondary/[0.04]'}`}
            style={{ height: `${height}%`, left: `${8 + index * 19}%` }}
          />
        ))}
        <span className="absolute left-[8%] right-[8%] top-[31%] border-t border-dashed border-current opacity-70" />
      </div>
    );
  }

  if (type === 'pipeline') {
    return (
      <div aria-hidden="true" className={sharedClass}>
        <span className="absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 bg-current" />
        {[8, 35, 62, 86].map((left, index) => (
          <span
            key={left}
            className={`absolute grid h-7 w-7 place-items-center rounded-md border text-[0.48rem] font-bold ${index === 2 ? '-translate-y-3 border-[#ff6b45]/75 bg-[#ff6b45]/10 text-[#ff805f] shadow-[0_0_12px_rgba(255,107,69,.28)]' : 'border-current bg-[#09102b] text-current'}`}
            style={{ left: `${left}%`, top: 'calc(50% - 0.875rem)' }}
          >
            {index + 1}
          </span>
        ))}
      </div>
    );
  }

  if (type === 'routing') {
    return (
      <div aria-hidden="true" className={sharedClass}>
        <span className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-current bg-[#09102b]" />
        <span className="absolute left-5 top-1/2 h-px w-12 bg-current" />
        <span className="absolute left-16 top-[25%] h-1/2 w-px bg-current" />
        {[18, 48, 78].map((top, index) => (
          <span key={top} className="absolute left-16 right-4 h-px bg-current" style={{ top: `${top + 8}%` }}>
            <span className={`absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border ${index === 1 ? 'border-[#ff6b45] bg-[#ff6b45]/20 shadow-[0_0_10px_rgba(255,107,69,.65)]' : 'border-current bg-[#09102b]'}`} />
          </span>
        ))}
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={sharedClass}>
      {[0, 1, 2, 3].map((row) => (
        <span key={row} className="absolute left-1 right-1 flex gap-1.5" style={{ top: `${row * 27}%` }}>
          {[0, 1, 2, 3, 4, 5].map((cell) => (
            <span
              key={cell}
              className={`h-3 flex-1 rounded-[2px] border ${row === 1 && (cell === 2 || cell === 3) ? 'border-[#ff6b45]/70 bg-[#ff6b45]/12 shadow-[0_0_8px_rgba(255,107,69,.25)]' : 'border-current bg-secondary/[0.03]'}`}
            />
          ))}
        </span>
      ))}
    </div>
  );
}

export function HubSpotProblemMap() {
  return (
    <div className="relative mt-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[16%] inset-y-[17%] hidden xl:block">
        <span className="absolute left-0 right-0 top-[25%] h-px bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.32)_12%,rgba(10,196,255,.32)_43%,rgba(255,107,69,.52)_50%,rgba(139,108,255,.3)_57%,rgba(139,108,255,.3)_88%,transparent)]" />
        <span className="absolute bottom-[25%] left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(139,108,255,.28)_12%,rgba(139,108,255,.28)_43%,rgba(255,107,69,.46)_50%,rgba(10,196,255,.28)_57%,rgba(10,196,255,.28)_88%,transparent)]" />
        <span className="absolute bottom-[25%] left-1/2 top-[25%] w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(255,107,69,.45),rgba(10,196,255,.22),rgba(139,108,255,.38))]" />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff6b45]/55 bg-[#081029] shadow-[0_0_18px_rgba(255,107,69,.4)]" />
      </div>

      <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {hubspotProblems.map((problem, index) => {
          const Icon = problemIcons[problem.icon];
          if (!Icon) return null;

          return (
            <Reveal key={problem.title} delay={index * 0.05}>
              <article className="group/problem relative isolate h-full min-h-60 overflow-hidden rounded-card border border-secondary/25 bg-[radial-gradient(circle_at_0%_0%,rgba(10,196,255,.12),transparent_17rem),radial-gradient(circle_at_100%_100%,rgba(255,107,69,.075),transparent_15rem),linear-gradient(135deg,rgba(15,29,70,.94),rgba(7,11,31,.92))] p-6 shadow-[0_0_0_1px_rgba(10,196,255,.06),0_22px_72px_rgba(0,0,0,.38),inset_0_1px_0_rgba(255,255,255,.08)] transition-[border-color,box-shadow] duration-500 ease-premium hover:border-[#ff6b45]/75 hover:shadow-[0_0_0_1px_rgba(255,107,69,.22),0_26px_78px_rgba(0,0,0,.48),0_0_34px_rgba(255,107,69,.2),0_0_46px_rgba(10,196,255,.16),inset_0_1px_0_rgba(255,255,255,.12),inset_0_0_42px_rgba(10,196,255,.07)] motion-reduce:transition-none sm:p-7">
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_8%_4%,rgba(10,196,255,.22),transparent_45%),radial-gradient(circle_at_94%_92%,rgba(255,107,69,.18),transparent_48%),linear-gradient(135deg,rgba(10,196,255,.055),rgba(139,108,255,.06))] opacity-0 transition-opacity duration-500 group-hover/problem:opacity-100 motion-reduce:transition-none" />
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.9),rgba(255,107,69,.95),transparent)] opacity-60 shadow-[0_0_14px_rgba(255,107,69,.45)] transition-opacity duration-500 group-hover/problem:opacity-100" />
                <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-[#ff6b45]/0 blur-3xl transition-colors duration-500 group-hover/problem:bg-[#ff6b45]/[0.16] motion-reduce:transition-none" />
                <span aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-secondary/0 blur-3xl transition-colors duration-500 group-hover/problem:bg-secondary/[0.14] motion-reduce:transition-none" />
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-7 bottom-0 h-[2px] origin-center scale-x-0 bg-[linear-gradient(90deg,transparent,#0ac4ff,#ff6b45,transparent)] opacity-0 shadow-[0_0_16px_rgba(10,196,255,.65)] transition-[transform,opacity] duration-500 ease-premium group-hover/problem:scale-x-100 group-hover/problem:opacity-100 motion-reduce:transition-none" />

                <div className="relative z-10 flex items-start justify-between gap-5">
                  <div className="grid h-14 w-14 place-items-center rounded-xl border border-[#ff6b45]/30 bg-[#ff6b45]/[0.07] text-[#ff805f] shadow-[0_0_22px_rgba(255,92,53,.1),inset_0_1px_0_rgba(255,255,255,.06)] transition-[border-color,background-color,box-shadow,color] duration-500 group-hover/problem:border-[#ff6b45]/85 group-hover/problem:bg-[#ff6b45]/[0.16] group-hover/problem:text-[#ffb09c] group-hover/problem:shadow-[0_0_34px_rgba(255,92,53,.48),0_0_18px_rgba(255,107,69,.32),inset_0_1px_0_rgba(255,255,255,.12)] motion-reduce:transition-none">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-sm font-bold tracking-[0.18em] text-secondary/55 transition-[color,filter] duration-500 group-hover/problem:text-[#ff9a80] group-hover/problem:drop-shadow-[0_0_9px_rgba(255,107,69,.75)] motion-reduce:transition-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="relative z-10 max-w-[23rem] pr-10 sm:pr-14">
                  <h3 className="mt-6 font-display text-xl font-black uppercase text-white">{problem.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62 lg:text-base">{problem.description}</p>
                </div>

                <ProblemMotif type={problem.icon} />
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
