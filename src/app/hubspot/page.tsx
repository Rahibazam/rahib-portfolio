import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
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
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { ButtonTransitionLink } from '@/components/ui/Button';
import { HubSpotHeroVisual } from '@/components/hubspot/HubSpotHeroVisual';
import { HubSpotMark } from '@/components/brand/HubSpotMark';
import { HubSpotProjectVisual } from '@/components/hubspot/HubSpotProjectVisual';
import { HubSpotSectionHeader } from '@/components/hubspot/HubSpotSectionHeader';
import {
  hubspotProblems,
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
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {hubspotServices.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              return (
                <Reveal key={service.title} delay={index * 0.06}>
                  <GlassCard className="home-module flex h-full min-h-72 flex-col justify-center border-secondary/30 p-7 lg:min-h-[20rem] lg:p-9">
                    <div className="grid h-16 w-16 place-items-center rounded-card border border-secondary/35 bg-secondary/[0.08] text-secondary shadow-[0_0_28px_rgba(10,196,255,0.16),inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <Icon aria-hidden="true" className="h-8 w-8 drop-shadow-[0_0_10px_rgba(10,196,255,0.75)]" />
                    </div>
                    <h3 className="mt-7 font-display text-xl font-black uppercase leading-tight text-white lg:text-[1.45rem]">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62 lg:text-base">{service.description}</p>
                    <TransitionLink href="/contact" className="mt-6 inline-flex w-fit items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-secondary hover:text-cyan-100">Learn more <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" /></TransitionLink>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="problems" className="scroll-mt-28 py-14 sm:py-16">
          <HubSpotSectionHeader title="HubSpot Problems I Fix" description="Most HubSpot issues are not tool problems. They are structure, data, process, and visibility problems." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {hubspotProblems.map((problem, index) => {
              const Icon = serviceIcons[problem.icon];
              return (
                <Reveal key={problem.title} delay={index * 0.05}>
                  <article className="home-module interactive-card h-full min-h-60 rounded-card border-secondary/25 p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-xl border border-[#ff5c35]/25 bg-[#ff5c35]/[0.07] text-[#ff805f] shadow-[0_0_22px_rgba(255,92,53,0.1)]">
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#ff5c35]/20 bg-[#ff5c35]/[0.06] px-3 py-1.5 font-mono text-[0.63rem] uppercase tracking-[0.13em] text-[#ff9b83]"><AlertTriangle className="h-3.5 w-3.5" /> Audit finding</span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-black uppercase text-white">{problem.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62 lg:text-base">{problem.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="process" className="scroll-mt-28 py-14 sm:py-16">
          <HubSpotSectionHeader title="How I Build HubSpot Systems" description="A practical process for turning messy portals into clean, scalable systems." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
            {hubspotProcess.map((step, index) => {
              const Icon = processIcons[index];
              return (
                <Reveal key={step.number} delay={index * 0.07} className="relative">
                  <GlassCard className="home-module flex h-full min-h-64 flex-col items-center justify-center border-secondary/30 p-7 text-center" interactive={false}>
                    <span className="grid h-16 w-16 place-items-center rounded-full border border-secondary/45 bg-[#07112d] font-mono text-lg font-bold text-secondary shadow-[0_0_28px_rgba(10,196,255,0.18)]">{step.number}</span>
                    <div className="mt-5 grid h-12 w-12 place-items-center rounded-xl border border-purple/35 bg-purple/[0.08] text-purple-100"><Icon aria-hidden="true" className="h-6 w-6" /></div>
                    <h3 className="mt-5 font-display text-xl font-black uppercase text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">{step.description}</p>
                  </GlassCard>
                  {index < hubspotProcess.length - 1 ? <ArrowRight aria-hidden="true" className="absolute -right-9 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-secondary drop-shadow-[0_0_8px_rgba(10,196,255,0.7)] xl:block" /> : null}
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="tools" className="scroll-mt-28 py-14 sm:py-16">
          <HubSpotSectionHeader title="Tools & Integrations" description="HubSpot works best when the rest of your stack is connected cleanly." />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {hubspotTools.map(([label, icon], index) => {
              const Icon = toolIcons[icon];
              return (
                <Reveal key={label} delay={Math.min(index * 0.035, 0.32)}>
                  <div className="home-module interactive-card flex min-h-32 flex-col items-center justify-center rounded-card border-secondary/20 p-4 text-center">
                    <Icon aria-hidden="true" className={`h-8 w-8 ${index % 4 === 0 ? 'text-[#ff805f]' : index % 3 === 0 ? 'text-purple-200' : 'text-secondary'} drop-shadow-[0_0_10px_currentColor]`} />
                    <span className="mt-4 text-sm font-bold text-white/78">{label}</span>
                  </div>
                </Reveal>
              );
            })}
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
