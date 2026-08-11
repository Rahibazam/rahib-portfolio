import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, BarChart3, Database, Gauge, PanelsTopLeft, Search, UserRoundCog, Workflow, Wrench } from 'lucide-react';
import { PageShell } from '@/components/motion/PageShell';
import { Reveal } from '@/components/motion/Reveal';
import { FloatingSection } from '@/components/motion/FloatingSection';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { ButtonTransitionLink } from '@/components/ui/Button';
import { HomeOrbitVisual } from '@/components/home/HomeOrbitVisual';
import { HomeSectionHeader } from '@/components/home/HomeSectionHeader';
import { HomeCTAVisual } from '@/components/home/HomeCTAVisual';
import { FeaturedWorkCard } from '@/components/home/FeaturedWorkCard';
import { HomeSystemIcon } from '@/components/home/HomeSystemIcon';
import { homeExperience, homeFeaturedWork, homeProblems, homeProcess, homeSystems, type HomeIconName } from '@/data/home';

function HeadingAccent({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`bg-[linear-gradient(90deg,var(--secondary),#8b6cff)] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(10,196,255,.55)] [filter:drop-shadow(0_0_18px_rgba(10,196,255,.42))_drop-shadow(0_0_24px_rgba(139,108,255,.34))] ${className}`}>
      {children}
    </span>
  );
}

const homeIcons: Record<HomeIconName, LucideIcon> = {
  database: Database,
  handoff: UserRoundCog,
  performance: Gauge,
  automation: Workflow,
  web: PanelsTopLeft,
  diagnose: Search,
  build: Wrench,
  optimise: BarChart3
};

const problemIconStyles = [
  'border-secondary/40 bg-secondary/10 text-secondary shadow-[0_0_35px_rgba(10,196,255,0.2)]',
  'border-purple/45 bg-purple/10 text-[#9f8cff] shadow-[0_0_35px_rgba(108,76,255,0.2)]',
  'border-secondary/40 bg-secondary/10 text-cyan-100 shadow-[0_0_35px_rgba(10,196,255,0.2)]'
];

const systemIconTypes = ['crm', 'automation', 'growth'] as const;

export default function HomePage() {
  return (
    <PageShell>
      <Container className="max-w-[108rem] px-5 pt-32 sm:px-8 sm:pt-36 lg:pt-40 xl:px-10">
        <section className="relative grid min-h-[calc(100svh-5rem)] items-center gap-12 pb-24 lg:pb-28 xl:min-h-[52rem] xl:grid-cols-[1.03fr_0.97fr] xl:gap-4">
          <div aria-hidden="true" className="pointer-events-none absolute -left-52 top-1/5 h-[34rem] w-[34rem] rounded-full bg-secondary/[0.1] blur-[120px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full bg-purple/[0.1] blur-[130px]" />
          <Reveal className="relative z-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-secondary drop-shadow-[0_0_10px_rgba(10,196,255,0.55)] sm:text-sm">Welcome to my portfolio</p>
            <h1 className="home-display mt-7 max-w-[59rem] text-[clamp(2.8rem,12vw,4.8rem)] font-black uppercase leading-[1.01] tracking-[-0.027em] text-white lg:text-[5.35rem] xl:text-[5.6rem] 2xl:text-[6.15rem]">
              <span className="block xl:whitespace-nowrap"><span className="block sm:inline">I build</span><span className="block sm:ml-[0.18em] sm:inline">systems</span></span>
              <span className="block xl:whitespace-nowrap"><span className="block sm:inline">that drive</span><HeadingAccent className="block sm:ml-[0.18em] sm:inline">growth.</HeadingAccent></span>
            </h1>
            <p className="mt-8 max-w-[43rem] text-base leading-7 text-white/72 sm:text-lg lg:text-[1.18rem] lg:leading-8">
              I craft and streamline CRM &amp; digital systems that help businesses automate, scale and achieve more.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-5">
              <ButtonTransitionLink href="/portfolio" size="lg" className="w-full min-h-16 rounded-lg px-10 text-sm sm:w-auto">
                View my work <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </ButtonTransitionLink>
              <ButtonTransitionLink href="/contact" variant="secondary" size="lg" className="w-full min-h-16 rounded-lg px-10 text-sm sm:w-auto">
                Work with me <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </ButtonTransitionLink>
            </div>
          </Reveal>

          <FloatingSection className="relative z-0 xl:-mr-2" distance={6} duration={10}>
            <HomeOrbitVisual />
          </FloatingSection>
        </section>

        <section id="problems" className="scroll-mt-28 py-14 sm:py-16">
          <HomeSectionHeader title={<>What I Actually <HeadingAccent>Fix</HeadingAccent></>} description="The operational and web problems I solve — so your business runs smoother and grows faster." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeProblems.map((problem, index) => {
              const Icon = homeIcons[problem.icon];
              return (
                <Reveal key={problem.title} delay={index * 0.08}>
                  <GlassCard className="home-module h-full min-h-64 border-secondary/35 p-7 lg:flex lg:min-h-[17rem] lg:items-center lg:gap-7 lg:p-9">
                    <div className={`grid h-[5.25rem] w-[5.25rem] shrink-0 place-items-center rounded-card border shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ${problemIconStyles[index]}`}>
                      <Icon aria-hidden="true" className="h-11 w-11 drop-shadow-[0_0_14px_currentColor]" />
                    </div>
                    <div><h3 className="mt-5 font-display text-xl font-black leading-tight text-white lg:mt-1 lg:text-[1.55rem]">{problem.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/64 lg:text-base">{problem.description}</p></div>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="systems" className="scroll-mt-28 py-14 sm:py-16">
          <HomeSectionHeader title={<>Systems I <HeadingAccent>Build</HeadingAccent></>} description="I design and build systems that connect data, automate operations and create clarity across your business." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeSystems.map((system, index) => {
              return (
                <Reveal key={system.title} delay={index * 0.08}>
                  <GlassCard className="home-module h-full min-h-64 border-secondary/35 p-7 lg:min-h-[16.5rem] lg:p-9">
                    <div className="flex min-h-[12.5rem] items-center gap-7 lg:min-h-[12rem]">
                      <HomeSystemIcon type={systemIconTypes[index]} />
                      <div>
                        <h3 className="font-display text-xl font-black uppercase leading-tight text-white lg:text-[1.5rem]">{system.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-white/64 lg:text-base">{system.description}</p>
                        <TransitionLink href={system.href} className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-secondary hover:text-cyan-100">
                          Explore <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                        </TransitionLink>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 py-14 sm:py-16">
          <HomeSectionHeader title={<>Professional <HeadingAccent>Experience</HeadingAccent></>} description="A quick overview of where I’ve been, and the work that shaped the systems I build today." />
          <div className="relative mt-10 grid gap-4 pl-5 sm:pl-10">
            <div aria-hidden="true" className="absolute bottom-7 left-[0.28rem] top-7 w-px bg-gradient-to-b from-secondary via-secondary/70 to-purple shadow-[0_0_13px_rgba(10,196,255,0.65)] sm:left-[0.88rem]" />
            {homeExperience.map((experience, index) => (
              <Reveal key={`${experience.role}-${experience.company}`} delay={index * 0.06}>
                <div className="group/experience relative">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[1.47rem] top-1/2 z-20 h-4 w-4 -translate-y-1/2 rounded-full border border-cyan-100 bg-secondary shadow-[0_0_21px_6px_rgba(10,196,255,0.62)] transition-all duration-300 group-hover/experience:scale-125 group-hover/experience:shadow-[0_0_28px_9px_rgba(10,196,255,0.82)] group-focus-within/experience:scale-125 group-focus-within/experience:shadow-[0_0_28px_9px_rgba(10,196,255,0.82)] sm:-left-[2.12rem]"
                  />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[-0.97rem] top-1/2 z-10 h-px w-16 origin-left -translate-y-1/2 scale-x-0 bg-[linear-gradient(90deg,rgba(10,196,255,.95),rgba(139,108,255,.65),transparent)] shadow-[0_0_16px_rgba(10,196,255,.65)] transition-transform duration-500 ease-out group-hover/experience:scale-x-100 group-focus-within/experience:scale-x-100 sm:left-[-1.62rem] sm:w-24"
                  />

                  <article className="home-module interactive-card relative isolate min-h-36 overflow-hidden rounded-card border-secondary/40 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 ease-premium group-hover/experience:border-secondary/70 group-hover/experience:shadow-[0_0_34px_rgba(10,196,255,0.12),0_0_30px_rgba(108,76,255,0.10),inset_0_1px_0_rgba(255,255,255,0.14)] group-focus-within/experience:border-secondary/70 group-focus-within/experience:shadow-[0_0_34px_rgba(10,196,255,0.12),0_0_30px_rgba(108,76,255,0.10),inset_0_1px_0_rgba(255,255,255,0.14)] motion-safe:group-hover/experience:-translate-y-1 motion-safe:group-focus-within/experience:-translate-y-1 sm:p-8 lg:px-10 lg:py-9">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover/experience:opacity-100 group-focus-within/experience:opacity-100"
                  >
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(10,196,255,.13),transparent_34%),radial-gradient(circle_at_100%_100%,rgba(139,108,255,.12),transparent_38%)]" />
                  </span>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-[-60%] left-[-45%] z-0 w-[34%] rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.10),rgba(10,196,255,.16),transparent)] opacity-0 blur-[1px] transition-all duration-700 ease-out group-hover/experience:left-[118%] group-hover/experience:opacity-100 group-focus-within/experience:left-[118%] group-focus-within/experience:opacity-100 motion-reduce:hidden"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute inset-x-8 top-0 z-0 h-px scale-x-0 bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.72),rgba(139,108,255,.62),transparent)] opacity-0 transition-all duration-300 group-hover/experience:scale-x-100 group-hover/experience:opacity-100 group-focus-within/experience:scale-x-100 group-focus-within/experience:opacity-100"
                  />

                  <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-base font-black uppercase tracking-[0.07em] text-white transition-[filter,text-shadow] duration-300 group-hover/experience:drop-shadow-[0_0_10px_rgba(10,196,255,.34)] group-focus-within/experience:drop-shadow-[0_0_10px_rgba(10,196,255,.34)] sm:text-lg">
                        {experience.role} <span className="text-white/35">@</span> {experience.company}
                      </h3>
                      <p className="mt-3 max-w-5xl text-sm leading-7 text-white/62 transition-colors duration-300 group-hover/experience:text-white/72 group-focus-within/experience:text-white/72 lg:text-base">
                        {experience.description}
                      </p>
                    </div>

                    <span className="w-fit shrink-0 rounded-lg border border-secondary/30 bg-secondary/[0.08] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-cyan-100/85 shadow-[inset_0_0_16px_rgba(10,196,255,0.06)] transition-all duration-300 group-hover/experience:border-[#8b6cff]/55 group-hover/experience:bg-secondary/[0.13] group-hover/experience:text-white group-hover/experience:shadow-[0_0_22px_rgba(10,196,255,.18),inset_0_0_18px_rgba(10,196,255,.10)] group-focus-within/experience:border-[#8b6cff]/55 group-focus-within/experience:bg-secondary/[0.13] group-focus-within/experience:text-white group-focus-within/experience:shadow-[0_0_22px_rgba(10,196,255,.18),inset_0_0_18px_rgba(10,196,255,.10)]">
                      {experience.period}
                    </span>
                  </div>
                </article>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="process" className="scroll-mt-28 py-14 sm:py-16">
          <HomeSectionHeader title={<>How I <HeadingAccent>Work</HeadingAccent></>} description="A clean, practical, systems-first process designed for long-term results." />
          <div className="relative mt-10 grid gap-6 md:grid-cols-3 md:gap-14">
            {homeProcess.map((step, index) => {
              const Icon = homeIcons[step.icon];
              return (
                <Reveal key={step.number} delay={index * 0.08} className="relative z-10">
                  <GlassCard className="home-module flex h-full min-h-64 flex-col justify-center border-secondary/35 bg-primary/85 p-7 lg:min-h-[18rem] lg:p-9">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-4xl font-bold tracking-[0.08em] text-secondary drop-shadow-[0_0_14px_rgba(10,196,255,0.5)] lg:text-5xl">{step.number}</span>
                      <div className="grid h-16 w-16 place-items-center rounded-full border border-purple/60 bg-purple/10 text-white shadow-[0_0_34px_rgba(108,76,255,0.28),inset_0_0_20px_rgba(108,76,255,0.12)]">
                        <Icon aria-hidden="true" className="h-7 w-7" />
                      </div>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-black text-white">{step.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62 lg:text-base">{step.description}</p>
                  </GlassCard>
                  {index < homeProcess.length - 1 ? <ArrowRight aria-hidden="true" className="absolute -right-11 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-secondary drop-shadow-[0_0_10px_rgba(10,196,255,0.82)] md:block" /> : null}
                </Reveal>
              );
            })}
          </div>
        </section>

        <Reveal>
          <section id="home-cta" className="home-module-strong relative my-14 scroll-mt-28 overflow-hidden rounded-panel border-secondary/40 p-7 sm:p-10 lg:grid lg:min-h-[23rem] lg:grid-cols-[0.95fr_0.8fr_0.9fr] lg:items-center lg:gap-12 lg:p-14">
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(100deg,rgba(10,196,255,0.06),transparent_42%,rgba(108,76,255,0.08))]" />
            <div className="relative z-10">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-secondary">Let’s build something</p>
              <h2 className="home-display mt-5 text-5xl font-black uppercase leading-[0.96] tracking-[-0.02em] text-white sm:text-6xl lg:text-[4.5rem]">Let’s work <HeadingAccent>together</HeadingAccent></h2>
              <div aria-hidden="true" className="mt-7 h-2 w-72 -rotate-2 rounded-full bg-gradient-to-r from-secondary via-purple to-transparent shadow-[0_0_26px_rgba(108,76,255,0.8)]" />
            </div>
            <div className="relative z-10 mt-7 lg:mt-0">
              <p className="text-sm leading-6 text-white/62">Need a trusted partner to fix, build or scale your CRM and digital systems?</p>
              <p className="mt-2 text-sm leading-6 text-white/48">Let’s create systems that drive clarity, automation and growth.</p>
              <ButtonTransitionLink href="/contact" size="lg" className="mt-7 rounded-lg px-9">Let’s talk <ArrowRight aria-hidden="true" className="h-4 w-4" /></ButtonTransitionLink>
            </div>
            <div className="relative z-10 mt-4 lg:mt-0"><HomeCTAVisual /></div>
          </section>
        </Reveal>

        <section id="featured" className="scroll-mt-28 pb-10 pt-14 sm:pb-12 sm:pt-16">
          <HomeSectionHeader title={<>Featured <HeadingAccent>Work</HeadingAccent></>} description="A few projects I’m proud of — clean setups, automations and websites that perform." />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_0.22fr]">
            {homeFeaturedWork.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08} className="h-full">
                <FeaturedWorkCard {...project} />
              </Reveal>
            ))}
            <Reveal delay={0.16} className="h-full">
              <TransitionLink href="/portfolio" className="home-module interactive-card flex h-full min-h-40 items-center justify-between rounded-card border-secondary/50 p-7 font-display text-xl font-bold uppercase tracking-[0.08em] text-white shadow-[0_0_35px_rgba(10,196,255,0.1)] lg:min-h-[22rem] lg:flex-col lg:items-center lg:justify-center lg:text-center">
                <span>More<br className="hidden lg:block" /> Work</span>
                <ArrowRight aria-hidden="true" className="h-5 w-5 text-secondary" />
              </TransitionLink>
            </Reveal>
          </div>
        </section>
      </Container>
    </PageShell>
  );
}
