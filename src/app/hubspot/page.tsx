import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BarChart3,
  Blocks,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Database,
  FileSignature,
  FormInput,
  GitBranch,
  Grid3X3,
  Mail,
  Megaphone,
  MessageSquare,
  PanelTop,
  PanelsTopLeft,
  PhoneCall,
  Route,
  Sheet,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Workflow,
  Wrench,
  Zap
} from 'lucide-react';
import { PageShell } from '@/components/motion/PageShell';
import { Reveal } from '@/components/motion/Reveal';
import { FloatingSection } from '@/components/motion/FloatingSection';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ButtonTransitionLink } from '@/components/ui/Button';
import { HubSpotHeroVisual } from '@/components/hubspot/HubSpotHeroVisual';
import { HubSpotMark } from '@/components/brand/HubSpotMark';
import { HubSpotProjectVisual } from '@/components/hubspot/HubSpotProjectVisual';
import { HubSpotSectionHeader } from '@/components/hubspot/HubSpotSectionHeader';
import { HubSpotProblemMap } from '@/components/hubspot/HubSpotProblemMap';
import {
  hubspotProcess,
  hubspotProjects,
  hubspotServices,
  hubspotTools,
  type HubSpotIconName
} from '@/data/hubspot';

const serviceIcons: Record<HubSpotIconName, LucideIcon> = {
  setup: Database,
  automation: Workflow,
  cleanup: ShieldCheck,
  reporting: BarChart3,
  forms: FormInput,
  integration: Blocks,
  properties: Grid3X3,
  workflow: Wrench,
  dashboard: PanelTop,
  pipeline: GitBranch,
  routing: Route,
  quality: CheckCircle2
};

const processIcons = [ShieldCheck, Sparkles, Wrench, BarChart3];

const toolIcons: Record<string, LucideIcon> = {
  slack: MessageSquare,
  gmail: Mail,
  ads: Megaphone,
  wordpress: PanelsTopLeft,
  shopify: ShoppingBag,
  salesforce: Cloud,
  zapier: Zap,
  make: Workflow,
  calendly: CalendarDays,
  docusign: FileSignature,
  aircall: PhoneCall,
  sheets: Sheet
};

export default function HubSpotPage() {
  return (
    <PageShell>
      <Container className="max-w-[108rem] px-5 pt-32 sm:px-8 sm:pt-36 lg:pt-40 xl:px-10">
        <section className="relative grid min-h-[calc(100svh-5rem)] items-center gap-12 pb-24 xl:min-h-[48rem] xl:grid-cols-[0.95fr_1.05fr] xl:gap-8">
          <div aria-hidden="true" className="pointer-events-none absolute -left-48 top-1/4 h-[34rem] w-[34rem] rounded-full bg-secondary/[0.08] blur-[120px]" />
          <Reveal className="relative z-10">
            <h1 className="home-display max-w-[52rem] text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.98] tracking-[-0.025em] text-white">
              <span className="block xl:whitespace-nowrap">I build HubSpot</span>
              <span className="block xl:whitespace-nowrap">systems that <span className="text-gradient">scale.</span></span>
            </h1>
            <p className="mt-8 max-w-[45rem] text-base leading-7 text-white/70 sm:text-lg lg:text-[1.16rem] lg:leading-8">
              From CRM setup to automation, reporting, and growth systems — I help businesses get the most out of HubSpot.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-5">
              <ButtonTransitionLink href="/contact" size="lg" className="min-h-16 w-full rounded-lg px-10 text-sm sm:w-auto">Let’s talk <ArrowRight aria-hidden="true" className="h-4 w-4" /></ButtonTransitionLink>
              <ButtonTransitionLink href="/portfolio" variant="secondary" size="lg" className="min-h-16 w-full rounded-lg px-10 text-sm sm:w-auto">View case studies <ArrowRight aria-hidden="true" className="h-4 w-4" /></ButtonTransitionLink>
            </div>
          </Reveal>

          <FloatingSection className="relative z-0 xl:-mr-3" distance={5} duration={11}>
            <HubSpotHeroVisual />
          </FloatingSection>
        </section>

        <section id="services" className="scroll-mt-28 py-14 sm:py-16">
          <HubSpotSectionHeader title="What I Do In HubSpot" description="From CRM architecture to reporting and automation, I build HubSpot systems that are clean, scalable, and actually usable." />
          <div className="mt-10 border-y border-secondary/25 lg:grid lg:grid-cols-2">
            {hubspotServices.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              const hasMobileDivider = index < hubspotServices.length - 1;
              const hasDesktopRowDivider = index < hubspotServices.length - 2;
              return (
                <Reveal key={service.title} delay={index * 0.06} className="h-full">
                  <article className={`system-rail-item group/service relative flex h-full min-h-52 gap-5 overflow-hidden px-5 py-8 transition-colors duration-500 motion-reduce:transition-none sm:gap-7 sm:px-7 sm:py-10 lg:min-h-[15rem] lg:px-10 ${index % 2 === 1 ? 'lg:border-l lg:border-secondary/20' : ''} ${hasMobileDivider ? 'border-b border-secondary/20' : ''} ${hasDesktopRowDivider ? 'lg:border-b' : 'lg:border-b-0'}`}>
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(10,196,255,.09),transparent_48%,rgba(139,108,255,.06))] opacity-0 transition-opacity duration-500 group-hover/service:opacity-100 motion-reduce:transition-none" />
                    <div className="relative z-10 flex shrink-0 flex-col items-center gap-4">
                      <span className="font-mono text-[0.65rem] font-bold tracking-[0.18em] text-white/28 transition-colors duration-500 group-hover/service:text-secondary/75 motion-reduce:transition-none">{String(index + 1).padStart(2, '0')}</span>
                      <Icon aria-hidden="true" className={`h-10 w-10 transition-[color,filter] duration-500 motion-reduce:transition-none sm:h-12 sm:w-12 ${index % 3 === 1 ? 'text-purple-200 drop-shadow-[0_0_13px_rgba(139,108,255,.5)] group-hover/service:drop-shadow-[0_0_20px_rgba(139,108,255,.8)]' : index % 3 === 2 ? 'text-[#ff805f] drop-shadow-[0_0_13px_rgba(255,107,69,.45)] group-hover/service:drop-shadow-[0_0_20px_rgba(255,107,69,.75)]' : 'text-secondary drop-shadow-[0_0_13px_rgba(10,196,255,.5)] group-hover/service:drop-shadow-[0_0_20px_rgba(10,196,255,.8)]'}`} />
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-display text-xl font-black uppercase leading-tight text-white lg:text-[1.45rem]">{service.title}</h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 transition-colors duration-500 group-hover/service:text-white/76 motion-reduce:transition-none lg:text-base">{service.description}</p>
                      <span aria-hidden="true" className="mt-6 block h-px w-20 origin-left bg-[linear-gradient(90deg,rgba(10,196,255,.72),rgba(139,108,255,.35),transparent)] transition-transform duration-500 group-hover/service:scale-x-150 motion-reduce:transition-none" />
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="problems" className="scroll-mt-28 py-14 sm:py-16">
          <HubSpotSectionHeader title="HubSpot Problems I Fix" description="Most HubSpot issues are not tool problems. They are structure, data, process, and visibility problems." />
          <HubSpotProblemMap />
        </section>

        <section id="process" className="scroll-mt-28 py-14 sm:py-16">
          <HubSpotSectionHeader title="How I Build HubSpot Systems" description="A practical process for turning messy portals into clean, scalable systems." />
          <div className="relative mt-12 border-y border-secondary/25 py-4 sm:py-6 lg:grid lg:grid-cols-4 lg:py-10">
            <span aria-hidden="true" className="pointer-events-none absolute bottom-12 left-9 top-12 w-px bg-[linear-gradient(180deg,rgba(10,196,255,.68),rgba(139,108,255,.5),rgba(255,107,69,.4))] shadow-[0_0_12px_rgba(10,196,255,.3)] sm:left-12 lg:bottom-auto lg:left-[12.5%] lg:right-[12.5%] lg:top-28 lg:h-px lg:w-auto" />
            {hubspotProcess.map((step, index) => {
              const Icon = processIcons[index];
              return (
                <Reveal key={step.number} delay={index * 0.07} className="relative z-10 h-full">
                  <article className={`system-rail-item group/process relative flex h-full min-h-52 gap-6 px-2 py-7 sm:px-5 lg:min-h-[17rem] lg:flex-col lg:items-center lg:px-7 lg:py-8 lg:text-center xl:px-10 ${index > 0 ? 'lg:border-l lg:border-secondary/15' : ''}`}>
                    <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-secondary/45 bg-[#07112d] text-secondary shadow-[0_0_24px_rgba(10,196,255,.18),inset_0_0_18px_rgba(10,196,255,.08)] transition-[border-color,box-shadow,color] duration-500 group-hover/process:border-[#ff805f]/70 group-hover/process:text-white group-hover/process:shadow-[0_0_32px_rgba(10,196,255,.3),0_0_25px_rgba(255,107,69,.22),inset_0_0_20px_rgba(255,107,69,.12)] motion-reduce:transition-none lg:h-20 lg:w-20">
                      <Icon aria-hidden="true" className="h-6 w-6 lg:h-8 lg:w-8" />
                    </div>
                    <div className="relative z-10 pt-0.5 lg:pt-0">
                      <span className="font-mono text-xs font-bold tracking-[0.2em] text-secondary/70">Stage {step.number}</span>
                      <h3 className="mt-3 font-display text-xl font-black uppercase text-white lg:text-[1.35rem]">{step.title}</h3>
                      <p className="mt-4 max-w-sm text-sm leading-7 text-white/60 transition-colors duration-500 group-hover/process:text-white/76 motion-reduce:transition-none">{step.description}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="tools" className="scroll-mt-28 py-14 sm:py-16">
          <HubSpotSectionHeader title="Tools & Integrations" description="HubSpot works best when the rest of your stack is connected cleanly." />
          <div className="relative mt-10 overflow-hidden border-y border-secondary/25">
            <span aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 h-px bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.28),rgba(139,108,255,.32),transparent)]" />
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {hubspotTools.map(([label, icon], index) => {
              const Icon = toolIcons[icon];
              return (
                <Reveal key={label} delay={Math.min(index * 0.035, 0.32)} className="h-full">
                  <div className={`system-rail-item group/tool relative flex min-h-28 items-center gap-4 border-secondary/15 px-4 py-5 transition-colors duration-500 motion-reduce:transition-none sm:min-h-32 sm:flex-col sm:justify-center sm:text-center ${index % 2 !== 0 ? 'border-l' : ''} ${index >= 2 ? 'border-t sm:border-t-0' : ''} ${index % 3 !== 0 ? 'sm:border-l' : 'sm:border-l-0'} ${index >= 3 ? 'sm:border-t' : ''} ${index % 4 !== 0 ? 'lg:border-l' : 'lg:border-l-0'} ${index >= 4 ? 'lg:border-t' : 'lg:border-t-0'} ${index % 6 !== 0 ? 'xl:border-l' : 'xl:border-l-0'} ${index >= 6 ? 'xl:border-t' : 'xl:border-t-0'}`}>
                    <Icon aria-hidden="true" className={`h-7 w-7 shrink-0 transition-[color,filter] duration-500 group-hover/tool:brightness-125 motion-reduce:transition-none sm:h-8 sm:w-8 ${index % 4 === 0 ? 'text-[#ff805f] drop-shadow-[0_0_10px_rgba(255,107,69,.55)]' : index % 3 === 0 ? 'text-purple-200 drop-shadow-[0_0_10px_rgba(139,108,255,.55)]' : 'text-secondary drop-shadow-[0_0_10px_rgba(10,196,255,.55)]'}`} />
                    <span className="text-sm font-bold text-white/70 transition-colors duration-500 group-hover/tool:text-white motion-reduce:transition-none">{label}</span>
                  </div>
                </Reveal>
              );
            })}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 py-14 sm:py-16">
          <HubSpotSectionHeader title="Featured HubSpot Projects" description="A few examples of HubSpot systems, automations, and CRM improvements I’ve worked on." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {hubspotProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.07} className="h-full">
                <article className="home-module interactive-card flex h-full min-h-[35rem] flex-col overflow-hidden rounded-card border-secondary/30">
                  <HubSpotProjectVisual variant={project.visual} />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-secondary">{project.category}</p>
                      <Badge variant="soft" className="text-[0.58rem]">{project.status}</Badge>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-black uppercase leading-tight text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag} className="min-h-6 px-2.5 text-[0.58rem]">{tag}</Badge>)}</div>
                    <TransitionLink href="/portfolio" className="mt-auto inline-flex w-fit items-center gap-2 pt-7 font-mono text-xs font-bold uppercase tracking-[0.14em] text-secondary hover:text-cyan-100">View case study <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" /></TransitionLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section id="hubspot-cta" className="home-module-strong relative my-14 grid min-h-[22rem] overflow-hidden rounded-panel border-secondary/35 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-14">
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,196,255,0.08),transparent_48%,rgba(108,76,255,0.14))]" />
            <div className="relative z-10">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ff805f]">HubSpot systems, built cleanly</p>
              <h2 className="home-display mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.98] text-white sm:text-5xl lg:text-[4.3rem]">Ready to make HubSpot <span className="text-gradient">actually work?</span></h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/64 lg:text-lg">Let’s build a cleaner CRM, smarter workflows, and reporting your team can trust.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonTransitionLink href="/contact" size="lg" className="w-full rounded-lg px-9 sm:w-auto">Let’s talk <ArrowRight aria-hidden="true" className="h-4 w-4" /></ButtonTransitionLink>
                <ButtonTransitionLink href="/portfolio" variant="secondary" size="lg" className="w-full rounded-lg px-9 sm:w-auto">View portfolio <ArrowRight aria-hidden="true" className="h-4 w-4" /></ButtonTransitionLink>
              </div>
            </div>
            <div className="relative mt-10 grid place-items-center lg:mt-0">
              <div aria-hidden="true" className="absolute h-52 w-52 rounded-full bg-purple/25 blur-3xl" />
              <div className="relative grid h-52 w-52 place-items-center rounded-[2.2rem] border border-purple/45 bg-[linear-gradient(145deg,rgba(13,30,68,0.76),rgba(14,8,45,0.8))] shadow-[inset_1px_1px_0_rgba(255,255,255,0.12),0_0_60px_rgba(108,76,255,0.28)] [transform:rotate(6deg)] sm:h-64 sm:w-64">
                <HubSpotMark className="h-28 w-28 text-[#ff7a59] drop-shadow-[0_0_28px_rgba(255,92,53,0.55)] sm:h-36 sm:w-36" />
              </div>
            </div>
          </section>
        </Reveal>
      </Container>
    </PageShell>
  );
}
