import { Check, Circle } from 'lucide-react';
import { personalityCardClass } from './personalityStyles';

const techStack = [
  'CRM Systems',
  'HubSpot Operations',
  'Web CMS Builds',
  'Landing Pages',
  'Frontend Logic',
  'React Interfaces',
  'API Integrations',
  'Backend Systems',
  'AI Automations',
  'Product Dashboards'
];

export function TechStackObjectivesCard() {
  return (
    <article className={`${personalityCardClass} tech-stack-objectives-card isolate min-h-[43rem] p-7 sm:p-8 lg:p-9`}>
      <span aria-hidden="true" className="absolute right-5 top-5 z-10 h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_10px_3px_rgba(10,196,255,.65)]" />
      <span aria-hidden="true" className="absolute bottom-6 right-7 z-10 h-1 w-1 rounded-full bg-purple shadow-[0_0_8px_2px_rgba(108,76,255,.7)]" />
      <h3 className="relative z-10 font-display text-lg font-black uppercase tracking-[0.04em] text-secondary drop-shadow-[0_0_12px_rgba(10,196,255,.7)] lg:text-xl">Tech Stack Objectives</h3>
      <div className="relative z-10 mt-9 lg:mt-11">
        <div aria-hidden="true" className="absolute bottom-2 left-1/2 top-2 w-px -translate-x-1/2 bg-gradient-to-b from-secondary via-cyan-100/65 to-purple shadow-[0_0_13px_rgba(10,196,255,.75)]" />
        <ul className="space-y-[1.45rem] lg:space-y-[1.72rem]">
          {techStack.map((item, index) => {
            const complete = index < 5;
            return (
              <li key={item} className="relative grid grid-cols-[1fr_2.75rem_1fr] items-center text-[0.95rem] font-bold text-white/88 sm:text-base lg:text-[1.05rem]">
                <span className={index % 2 ? 'col-start-3 pl-3 text-left' : 'col-start-1 pr-3 text-right'}>{item}</span>
                <span className={`relative z-10 col-start-2 row-start-1 mx-auto grid h-8 w-8 place-items-center rounded-full border bg-[#081027] lg:h-9 lg:w-9 ${complete ? 'border-secondary text-secondary shadow-[0_0_15px_5px_rgba(10,196,255,.3)]' : 'border-cyan-100/80 text-cyan-100 shadow-[0_0_11px_rgba(10,196,255,.24)]'}`}>
                  {complete ? <Check aria-hidden="true" className="h-[1.05rem] w-[1.05rem] lg:h-5 lg:w-5" /> : <Circle aria-hidden="true" className="h-3.5 w-3.5 lg:h-4 lg:w-4" />}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
