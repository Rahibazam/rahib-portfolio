import { SkillRadar } from './SkillRadar';
import { personalityCardClass } from './personalityStyles';

export function SkillRadarCard() {
  return (
    <article className={`${personalityCardClass} flex min-h-[24rem] flex-col px-4 pb-5 pt-5 sm:px-5 sm:pb-5 sm:pt-6 lg:min-h-[25rem]`}>
      <h3 className="mx-auto text-center font-display text-[0.98rem] font-black uppercase leading-none text-secondary drop-shadow-[0_0_12px_rgba(10,196,255,.7)] md:whitespace-nowrap xl:text-[clamp(0.96rem,0.9vw,1.1rem)]">Systems + Web Capability Map</h3>
      <div className="mt-2 flex min-h-0 flex-1 items-center justify-center"><SkillRadar /></div>
      <div className="mt-2 flex flex-wrap justify-center gap-x-7 gap-y-2 text-[0.66rem] font-bold text-white/64 sm:gap-x-9">
        <span className="inline-flex items-center gap-2"><i className="h-px w-7 bg-secondary shadow-[0_0_7px_#0ac4ff]" />Current Level</span>
        <span className="inline-flex items-center gap-2"><i className="h-px w-7 border-t border-dashed border-purple shadow-[0_0_7px_rgba(108,76,255,.75)]" />Growth Potential</span>
      </div>
    </article>
  );
}
