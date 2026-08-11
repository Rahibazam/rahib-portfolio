import type { LucideIcon } from 'lucide-react';
import { Suspense } from 'react';
import { ArrowRight, BarChart3, Database, GitBranch, PanelsTopLeft, Rocket, Send, Sparkles } from 'lucide-react';
import { PageShell } from '@/components/motion/PageShell';
import { Reveal } from '@/components/motion/Reveal';
import { FloatingSection } from '@/components/motion/FloatingSection';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { ButtonTransitionLink } from '@/components/ui/Button';
import { HomeSectionHeader } from '@/components/home/HomeSectionHeader';
import { PortfolioHeroVisual } from '@/components/portfolio/PortfolioHeroVisual';
import { PortfolioProjectGrid } from '@/components/portfolio/PortfolioProjectGrid';
import { PortfolioProjectVisual } from '@/components/portfolio/PortfolioProjectVisual';
import { projects } from '@/data/projects';

const systems: Array<{ title: string; description: string; Icon: LucideIcon }> = [
  { title: 'CRM Architecture', description: 'Properties, lifecycle stages, pipelines, associations, governance, and data quality.', Icon: Database },
  { title: 'Workflow Automation', description: 'Lead routing, notifications, nurture flows, task automation, and operational cleanup.', Icon: GitBranch },
  { title: 'Reporting & Visibility', description: 'Dashboards, funnel views, campaign performance, source tracking, and decision-ready data.', Icon: BarChart3 },
  { title: 'Web & CMS Execution', description: 'Responsive pages, HubSpot CMS modules, landing pages, forms, and conversion-focused experiences.', Icon: PanelsTopLeft }
];

export default function PortfolioPage() {
  const featuredProject = projects.find((project) => project.slug === 'hubspot-crm-rebuild') ?? projects[0];

  return (
    <PageShell>
      <Container className="max-w-[108rem] px-5 pt-32 sm:px-8 sm:pt-36 lg:pt-40 xl:px-10">
        <section className="relative grid min-h-[calc(100svh-5rem)] items-center gap-12 pb-20 xl:min-h-[47rem] xl:grid-cols-[0.92fr_1.08fr] xl:gap-8">
          <div aria-hidden="true" className="pointer-events-none absolute -left-52 top-1/5 h-[35rem] w-[35rem] rounded-full bg-secondary/[0.08] blur-[125px]" />
          <Reveal className="relative z-10">
            <Badge className="rounded-lg border-secondary/25 bg-secondary/[0.07] px-4 text-secondary">My Portfolio</Badge>
            <h1 className="home-display mt-7 text-[clamp(3.2rem,14vw,5.2rem)] font-black uppercase leading-[0.96] tracking-[-0.025em] text-white lg:text-[6rem] xl:text-[6.55rem] 2xl:text-[7rem]">
              Selected <span className="text-gradient">Work</span>
            </h1>
            <p className="mt-8 max-w-[43rem] text-base leading-7 text-white/70 sm:text-lg lg:text-[1.16rem] lg:leading-8">
              A collection of projects, experiments, and systems I’ve built to solve real problems, automate the boring stuff, and create experiences that convert.
            </p>
            <div className="mt-8 grid max-w-[39rem] gap-4 sm:grid-cols-2">
              <div className="home-module flex min-h-24 items-center gap-5 rounded-card border-secondary/25 px-6 py-5">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-secondary/30 bg-secondary/[0.08] text-secondary"><Sparkles className="h-6 w-6" /></div>
                <div><p className="font-display text-3xl font-black text-white">25+</p><p className="text-sm text-white/55">Projects Shipped</p></div>
              </div>
              <div className="home-module flex min-h-24 items-center gap-5 rounded-card border-secondary/25 px-6 py-5">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-purple/35 bg-purple/[0.08] text-purple-100"><Rocket className="h-6 w-6" /></div>
                <div><p className="font-display text-3xl font-black text-white">5+</p><p className="text-sm text-white/55">Years Building</p></div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-5">
              <ButtonTransitionLink href="/contact" size="lg" className="min-h-16 w-full rounded-lg px-9 sm:w-auto">Start a project <ArrowRight aria-hidden="true" className="h-4 w-4" /></ButtonTransitionLink>
              <ButtonTransitionLink href="/hubspot" variant="secondary" size="lg" className="min-h-16 w-full rounded-lg px-9 sm:w-auto">Explore HubSpot work <ArrowRight aria-hidden="true" className="h-4 w-4" /></ButtonTransitionLink>
            </div>
          </Reveal>

          <FloatingSection className="relative z-0 xl:-mr-4" distance={5} duration={10}>
            <PortfolioHeroVisual />
          </FloatingSection>
        </section>

        <section id="featured-work" className="scroll-mt-28 py-14 sm:py-16">
          <Reveal>
            <article className="home-module-strong grid overflow-hidden rounded-panel border-secondary/40 lg:min-h-[34rem] lg:grid-cols-[1.08fr_0.92fr]">
              <PortfolioProjectVisual slug={featuredProject.slug} featured />
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-lg"><Sparkles aria-hidden="true" className="mr-2 h-3.5 w-3.5" />Featured Work</Badge>
                  {featuredProject.status ? <Badge variant="soft">{featuredProject.status}</Badge> : null}
                </div>
                <p className="mt-7 font-mono text-xs font-bold uppercase tracking-[0.16em] text-secondary">{featuredProject.category}</p>
                <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">{featuredProject.title}</h2>
                <p className="mt-5 text-base leading-8 text-white/64">{featuredProject.summary}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {featuredProject.impact.map((impact) => <span key={impact} className="flex items-start gap-3 text-sm leading-6 text-cyan-100/75"><ArrowRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-secondary" />{impact}</span>)}
                </div>
                <div className="mt-7 flex flex-wrap gap-2">{featuredProject.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
                <span className="mt-8 inline-flex w-fit items-center rounded-lg border border-white/10 bg-white/[0.025] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white/48">Case study draft</span>
              </div>
            </article>
          </Reveal>
        </section>

        <section id="project-grid" className="scroll-mt-28 py-14 sm:py-16">
          <HomeSectionHeader title="Project Archive" description="Filter the work by system, platform, or execution type." />
          <Suspense fallback={null}>
            <PortfolioProjectGrid projects={projects} />
          </Suspense>
        </section>

        <section id="systems" className="scroll-mt-28 py-14 sm:py-16">
          <HomeSectionHeader title="Systems Behind the Work" description="Every project is built around structure, clarity, automation, and maintainability." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {systems.map(({ title, description, Icon }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <GlassCard className="home-module flex h-full min-h-64 flex-col justify-center border-secondary/30 p-7">
                  <div className="grid h-16 w-16 place-items-center rounded-card border border-secondary/35 bg-secondary/[0.08] text-secondary shadow-[0_0_28px_rgba(10,196,255,0.16)]"><Icon aria-hidden="true" className="h-8 w-8" /></div>
                  <h3 className="mt-7 font-display text-xl font-black uppercase text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{description}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section id="portfolio-cta" className="home-module-strong relative my-14 grid min-h-[22rem] overflow-hidden rounded-panel border-secondary/35 p-7 sm:p-10 lg:grid-cols-[0.82fr_1.18fr_0.8fr] lg:items-center lg:gap-10 lg:p-14">
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,196,255,0.08),transparent_48%,rgba(108,76,255,0.15))]" />
            <div className="relative mt-3 grid place-items-center lg:mt-0">
              <div aria-hidden="true" className="absolute h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
              <div className="relative grid h-40 w-40 place-items-center rounded-[2rem] border border-secondary/40 bg-[linear-gradient(145deg,rgba(13,39,75,0.76),rgba(14,8,45,0.8))] shadow-[inset_1px_1px_0_rgba(255,255,255,0.12),0_0_48px_rgba(10,196,255,0.22)] [transform:rotate(-5deg)]"><Send className="h-20 w-20 text-secondary drop-shadow-[0_0_24px_rgba(10,196,255,0.65)]" /></div>
            </div>
            <div className="relative z-10 mt-8 lg:mt-0">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-secondary">Have a project in mind?</p>
              <h2 className="home-display mt-5 text-4xl font-black uppercase leading-[0.98] text-white sm:text-5xl lg:text-[4rem]">Let’s build something that <span className="text-gradient">actually works.</span></h2>
              <p className="mt-6 text-base leading-7 text-white/64">I help businesses streamline operations, automate workflows, and build high-performing digital experiences.</p>
            </div>
            <div className="relative z-10 mt-8 flex flex-col gap-3 lg:mt-0">
              <ButtonTransitionLink href="/contact" size="lg" className="w-full rounded-lg px-8">Start a project <ArrowRight aria-hidden="true" className="h-4 w-4" /></ButtonTransitionLink>
              <ButtonTransitionLink href="/hubspot" variant="secondary" size="lg" className="w-full rounded-lg px-8">Explore HubSpot <ArrowRight aria-hidden="true" className="h-4 w-4" /></ButtonTransitionLink>
            </div>
          </section>
        </Reveal>
      </Container>
    </PageShell>
  );
}
