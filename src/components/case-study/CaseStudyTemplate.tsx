import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleDotDashed,
  GitBranch,
  Layers3,
  ScanSearch
} from 'lucide-react';
import type { CaseStudy } from '@/data/caseStudies';
import type { Project } from '@/data/projects';
import { siteConfig } from '@/data/site';
import { CaseStudyTextHero } from '@/components/case-study/CaseStudyTextHero';
import { CaseStudySystemSpine } from '@/components/case-study/CaseStudySystemSpine';
import { HeadingAccent, HomeSectionHeader } from '@/components/home/HomeSectionHeader';
import { PageShell } from '@/components/motion/PageShell';
import { Reveal } from '@/components/motion/Reveal';
import { ButtonTransitionLink } from '@/components/ui/Button';
import { BuildTogetherBackground } from '@/components/ui/BuildTogetherBackground';
import { Container } from '@/components/ui/Container';

type CaseStudyTemplateProps = {
  caseStudy: CaseStudy;
  project: Project;
};

const stageIcons = [ScanSearch, Layers3, GitBranch, CircleDotDashed];

export function CaseStudyTemplate({ caseStudy, project }: CaseStudyTemplateProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    author: { '@type': 'Person', name: siteConfig.name },
    keywords: project.tags.join(', '),
    dateCreated: caseStudy.year,
    genre: project.category
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />

      <Container className="mobile-page mobile-page-case-study max-w-[108rem] px-5 sm:px-8 xl:px-10">
        <CaseStudyTextHero
          category={project.category}
          heroStatement={caseStudy.heroStatement}
          status={caseStudy.status}
          tags={project.tags}
          title={project.title}
          year={caseStudy.year}
        />

        <Reveal>
          <section aria-label="Engagement overview" className="border-y border-secondary/25">
            <div className="grid sm:grid-cols-2 xl:grid-cols-4">
              {caseStudy.facts.map((fact, index) => (
                <div key={fact.label} className={`system-rail-item min-h-28 px-5 py-6 sm:px-7 ${index > 0 ? 'border-t border-secondary/15 xl:border-l xl:border-t-0' : ''} ${index % 2 === 1 ? 'sm:border-l' : 'sm:border-l-0'} ${index >= 2 ? 'sm:border-t' : 'sm:border-t-0'}`}>
                  <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-secondary/65">{fact.label}</p>
                  <p className="mt-3 font-display text-lg font-black uppercase text-white">{fact.value}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <nav aria-label="Case study sections" className="mobile-case-nav -mx-5 max-w-none overflow-x-auto overscroll-x-contain px-5 py-8 sm:-mx-8 sm:px-8 xl:mx-0 xl:px-0">
          <div className="flex min-w-max items-center gap-7 border-b border-white/10 pb-4 font-mono text-[0.66rem] font-bold uppercase tracking-[0.16em] text-white/46 xl:min-w-0">
            {[
              ['Challenge', '#challenge'],
              ['Approach', '#approach'],
              ['Architecture', '#architecture'],
              ['Outcomes', '#outcomes'],
              ['Deliverables', '#deliverables']
            ].map(([label, href]) => <a key={href} href={href} className="premium-underline-link py-2 hover:text-secondary">{label}</a>)}
          </div>
        </nav>

        <section id="challenge" className="scroll-mt-28 py-14 sm:py-16">
          <HomeSectionHeader title={<>The System <HeadingAccent>Problem</HeadingAccent></>} description="A CRM rebuild starts by identifying the connected failures underneath the visible symptoms." />
          <div className="mt-10 border-y border-secondary/25 lg:grid lg:grid-cols-[0.94fr_1.06fr]">
            <Reveal className="h-full">
              <div className="h-full px-5 py-9 sm:px-8 sm:py-11 lg:px-10 lg:py-14">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#ff805f]">Root cause / 01</p>
                <h2 className="site-h2-section mt-5 max-w-2xl">{caseStudy.challenge.title}</h2>
                {caseStudy.challenge.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-6 max-w-2xl text-base leading-8 text-white/66">{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="h-full border-t border-secondary/20 lg:border-l lg:border-t-0">
              <div className="h-full px-5 py-9 sm:px-8 sm:py-11 lg:px-10 lg:py-14">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-secondary">Audit signals</p>
                    <p className="mt-2 text-sm text-white/45">What the system was telling us.</p>
                  </div>
                  <ScanSearch aria-hidden="true" className="h-10 w-10 text-secondary drop-shadow-[0_0_16px_rgba(10,196,255,.48)]" />
                </div>
                <div className="mt-8 divide-y divide-secondary/15 border-y border-secondary/20">
                  {caseStudy.challenge.signals.map((signal, index) => (
                    <div key={signal} className="system-rail-item flex min-h-16 items-center gap-4 px-2 py-4 sm:px-4">
                      <span className="font-mono text-[0.62rem] font-bold text-secondary/55">{String(index + 1).padStart(2, '0')}</span>
                      <p className="text-sm leading-6 text-white/68 sm:text-base">{signal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="approach" className="scroll-mt-28 py-14 sm:py-16">
          <HomeSectionHeader title={<>Rebuild <HeadingAccent>Sequence</HeadingAccent></>} description="The work moved from diagnosis to architecture, implementation, and governance—in that order." />
          <div className="relative mt-12 border-y border-secondary/25 py-4 sm:py-6 lg:grid lg:grid-cols-4 lg:py-10">
            <span aria-hidden="true" className="pointer-events-none absolute bottom-12 left-9 top-12 w-px bg-[linear-gradient(180deg,rgba(10,196,255,.68),rgba(139,108,255,.5),rgba(255,107,69,.4))] shadow-[0_0_12px_rgba(10,196,255,.3)] sm:left-12 lg:bottom-auto lg:left-[12.5%] lg:right-[12.5%] lg:top-28 lg:h-px lg:w-auto" />
            {caseStudy.stages.map((stage, index) => {
              const Icon = stageIcons[index] ?? CircleDotDashed;
              return (
                <Reveal key={stage.number} delay={index * 0.07} className="relative z-10 h-full">
                  <article className={`system-rail-item group/stage relative flex h-full min-h-56 gap-6 px-2 py-7 sm:px-5 lg:min-h-[19rem] lg:flex-col lg:items-center lg:px-7 lg:py-8 lg:text-center xl:px-9 ${index > 0 ? 'lg:border-l lg:border-secondary/15' : ''}`}>
                    <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-secondary/45 bg-[#07112d] text-secondary shadow-[0_0_24px_rgba(10,196,255,.18),inset_0_0_18px_rgba(10,196,255,.08)] transition-[border-color,box-shadow,color] duration-500 group-hover/stage:border-purple/70 group-hover/stage:text-white group-hover/stage:shadow-[0_0_32px_rgba(10,196,255,.3),0_0_25px_rgba(139,108,255,.22)] motion-reduce:transition-none lg:h-20 lg:w-20">
                      <Icon aria-hidden="true" className="h-6 w-6 lg:h-8 lg:w-8" />
                    </div>
                    <div className="relative z-10 pt-0.5 lg:pt-0">
                      <span className="font-mono text-xs font-bold tracking-[0.2em] text-secondary/70">Stage {stage.number}</span>
                      <h3 className="mt-3 font-display text-xl font-black uppercase leading-tight text-white">{stage.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/60">{stage.description}</p>
                      <p className="mt-5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-purple-200/70">Output / {stage.output}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="architecture" className="scroll-mt-28 py-14 sm:py-16">
          <HomeSectionHeader title={<>Target System <HeadingAccent>Architecture</HeadingAccent></>} description="Four connected layers turned the portal from a collection of tools into an operating system." />
          <Reveal className="mt-10">
            <div className="mobile-architecture-module home-module-strong relative min-w-0 overflow-visible rounded-panel border-secondary/35 p-5 sm:p-8 lg:p-10">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                <div className="absolute inset-0 technical-paper-overlay opacity-70" />
              </div>
              <CaseStudySystemSpine layers={caseStudy.layers} />
            </div>
          </Reveal>
        </section>

        <section id="outcomes" className="scroll-mt-28 py-14 sm:py-16">
          <HomeSectionHeader title={<>Qualitative <HeadingAccent>Outcomes</HeadingAccent></>} description="The engagement focused on structural improvement, so the strongest results are clearer operations—not invented vanity percentages." />
          <div className="mt-10 border-y border-secondary/25">
            <div className="hidden grid-cols-[0.22fr_0.39fr_0.39fr] border-b border-secondary/20 px-6 py-4 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/38 md:grid">
              <span>System</span><span>Before</span><span>After rebuild</span>
            </div>
            {caseStudy.outcomes.map((outcome, index) => (
              <Reveal key={outcome.title} delay={index * 0.05}>
                <div className={`system-rail-item grid gap-5 px-5 py-7 sm:px-7 md:grid-cols-[0.22fr_0.39fr_0.39fr] md:items-center ${index > 0 ? 'border-t border-secondary/15' : ''}`}>
                  <h3 className="font-display text-lg font-black uppercase text-white">{outcome.title}</h3>
                  <p className="flex items-start gap-3 text-sm leading-7 text-white/48"><span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-[#ff805f]/75" />{outcome.before}</p>
                  <p className="flex items-start gap-3 text-sm leading-7 text-cyan-100/78"><ArrowRight aria-hidden="true" className="mt-1.5 h-4 w-4 shrink-0 text-secondary" />{outcome.after}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="deliverables" className="scroll-mt-28 py-14 sm:py-16">
          <HomeSectionHeader title={<>What Was <HeadingAccent>Delivered</HeadingAccent></>} description="A reusable case study should make the work tangible without exposing confidential client data." />
          <div className="mt-10 grid border-y border-secondary/25 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudy.deliverables.map((deliverable, index) => (
              <Reveal key={deliverable} delay={Math.min(index * 0.045, 0.25)} className="h-full">
                <div className={`system-rail-item flex h-full min-h-28 items-center gap-4 px-5 py-6 sm:px-7 ${index > 0 ? 'border-t border-secondary/15 sm:border-l sm:border-t-0' : ''} ${index >= 2 ? 'sm:border-t' : ''} ${index % 3 === 0 ? 'lg:border-l-0' : ''} ${index >= 3 ? 'lg:border-t' : ''}`}>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-secondary/35 bg-secondary/[0.07] text-secondary shadow-[0_0_18px_rgba(10,196,255,.12)]"><Check aria-hidden="true" className="h-4 w-4" /></span>
                  <div>
                    <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-white/32">Deliverable {String(index + 1).padStart(2, '0')}</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white/72">{deliverable}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="mobile-case-final-cta group/build-cta relative my-14 overflow-visible rounded-[2rem] p-px shadow-[0_28px_90px_rgba(0,0,0,.45),0_0_42px_rgba(10,196,255,.20),0_0_58px_rgba(108,76,255,.16)]">
            <div aria-hidden="true" className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(10,196,255,.95),rgba(10,196,255,.28)_30%,rgba(108,76,255,.76)_78%,rgba(255,255,255,.16))] opacity-95 transition-opacity duration-500 group-hover/build-cta:opacity-100" />

            <div className="relative min-h-[31rem] overflow-visible rounded-[calc(2rem-1px)]">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                <BuildTogetherBackground />
              </div>

              <div className="relative z-30 flex min-h-[31rem] items-center justify-center px-6 py-16 text-center sm:px-10 lg:px-14">
                <div className="mx-auto w-full max-w-6xl">
                  <div className="flex items-center justify-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                    <span aria-hidden="true" className="h-px w-8 bg-gradient-to-l from-secondary to-transparent shadow-[0_0_12px_rgba(10,196,255,.8)]" />
                    <span>System note / final</span>
                    <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-secondary to-transparent shadow-[0_0_12px_rgba(10,196,255,.8)]" />
                  </div>

                  <h2 className="site-h2-statement mt-6">Architecture before <HeadingAccent>automation.</HeadingAccent></h2>
                  <p className="mx-auto mt-7 max-w-5xl text-base leading-8 text-white/72 sm:text-lg">{caseStudy.reflection}</p>
                  <p className="mx-auto mt-5 max-w-5xl font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white">{caseStudy.confidentiality}</p>

                  <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <ButtonTransitionLink href="/contact" size="lg" className="w-full rounded-lg px-8 sm:w-auto">Discuss a CRM project <ArrowRight aria-hidden="true" className="h-4 w-4" /></ButtonTransitionLink>
                    <ButtonTransitionLink href="/portfolio" variant="secondary" size="lg" className="w-full rounded-lg px-8 sm:w-auto">Back to project archive <ArrowLeft aria-hidden="true" className="h-4 w-4" /></ButtonTransitionLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </Container>
    </PageShell>
  );
}
