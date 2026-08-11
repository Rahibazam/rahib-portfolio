import { Reveal } from '@/components/motion/Reveal';
import { CosmicAtomCard } from './CosmicAtomCard';
import { Glitch404Card } from './Glitch404Card';
import { MusicPlayerCard } from './MusicPlayerCard';
import { personalityCardClass } from './personalityStyles';
import { SkillRadarCard } from './SkillRadarCard';
import { TechStackObjectivesCard } from './TechStackObjectivesCard';
import { VideoFeatureCard } from './VideoFeatureCard';

function AngularQuoteMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 92 68"
      className="h-16 w-20 overflow-visible drop-shadow-[0_0_16px_rgba(10,196,255,.9)]"
    >
      <path
        d="M7 8h31v18H25l13 34H18L4 25V8h3Zm47 0h31v18H72l13 34H65L51 25V8h3Z"
        fill="url(#angular-quote-gradient)"
      />
      <path
        d="M38 8H7v17l14 35m64-52H54v17l14 35"
        fill="none"
        stroke="rgba(216,248,255,.5)"
        strokeWidth="2"
        strokeLinejoin="miter"
      />
      <defs>
        <linearGradient id="angular-quote-gradient" x1="4" x2="85" y1="8" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F8FDFF" />
          <stop offset=".48" stopColor="#0AC4FF" />
          <stop offset="1" stopColor="#6C4CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

type AboutPersonalityGridProps = {
  videoSources?: string[];
  availableAudio?: Record<string, boolean>;
  availableArtwork?: Record<string, boolean>;
};

export function AboutPersonalityGrid({ videoSources = [], availableAudio = {}, availableArtwork = {} }: AboutPersonalityGridProps) {
  return (
    <div data-personality-grid className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[25rem_25rem_25rem]">
      <Reveal className="order-1 h-full md:row-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
        <TechStackObjectivesCard />
      </Reveal>

      <Reveal delay={0.05} className="order-2 h-full lg:col-start-2 lg:row-start-1">
        <article className={`${personalityCardClass} flex min-h-[22rem] flex-col justify-center p-7 sm:min-h-[23rem] sm:p-8 lg:min-h-[25rem] lg:p-9`}>
          <AngularQuoteMark />
          <p className="mt-6 max-w-lg font-display text-2xl font-bold leading-[1.34] text-white sm:text-[1.7rem] lg:text-[1.85rem]">Every section you see here has been rebuilt at least twice — once because I wasn’t happy, and once because I broke it trying to “<span className="text-gradient">improve</span>” it.</p>
          <div aria-hidden="true" className="absolute bottom-6 right-7 flex gap-2"><i className="h-1 w-1 rounded-full bg-secondary" /><i className="h-1 w-1 rounded-full bg-secondary/70" /><i className="h-1 w-1 rounded-full bg-purple" /></div>
        </article>
      </Reveal>

      <Reveal delay={0.09} className="order-3 h-full lg:col-start-3 lg:row-start-1">
        <VideoFeatureCard sources={videoSources} />
      </Reveal>

      <Reveal delay={0.13} className="order-4 h-full lg:col-start-3 lg:row-start-2">
        <SkillRadarCard />
      </Reveal>

      <Reveal delay={0.17} className="order-5 h-full md:order-7 md:col-span-2 lg:col-span-2 lg:col-start-2 lg:row-start-3">
        <MusicPlayerCard availableAudio={availableAudio} availableArtwork={availableArtwork} />
      </Reveal>

      <Reveal delay={0.08} className="order-6 h-full md:order-5 lg:col-start-2 lg:row-start-2">
        <CosmicAtomCard />
      </Reveal>

      <Reveal delay={0.12} className="order-7 h-full md:order-6 lg:col-start-1 lg:row-start-3">
        <Glitch404Card />
      </Reveal>
    </div>
  );
}
