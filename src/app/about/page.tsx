import type { Metadata } from 'next';
import Image from 'next/image';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AboutHeroVisual } from '@/components/about/AboutHeroVisual';
import { AboutPersonalityGrid } from '@/components/about/AboutPersonalityGrid';
import { BrandMark } from '@/components/brand/BrandMark';
import { HeadingAccent, HomeSectionHeader } from '@/components/home/HomeSectionHeader';
import { FloatingSection } from '@/components/motion/FloatingSection';
import { AnimationVisibilityBoundary } from '@/components/motion/AnimationVisibilityBoundary';
import { ScrollFadeHero } from '@/components/motion/ScrollFadeHero';
import { PageShell } from '@/components/motion/PageShell';
import { Reveal } from '@/components/motion/Reveal';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { ButtonTransitionLink } from '@/components/ui/Button';
import { BuildTogetherBackground } from '@/components/ui/BuildTogetherBackground';
import { Container } from '@/components/ui/Container';
import { aboutExperience, aboutIntroCards, aboutPrinciples, aboutSnapshots, aboutToolkit } from '@/data/about';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbStructuredData, getProfilePageStructuredData } from '@/lib/structuredData';
import { getSocialMetadata } from '@/lib/socialMetadata';

export const metadata: Metadata = {
  title: 'About Rahib Azam | CRM, HubSpot & Web Technologist',
  description: 'Meet Rahib Azam, a CRM & Web Technologist focused on HubSpot, automation, CRM architecture, reporting, web development, CMS builds, and landing pages.',
  alternates: {
    canonical: '/about'
  },
  ...getSocialMetadata({
    title: 'About Rahib Azam | CRM, HubSpot & Web Technologist',
    description: 'Meet Rahib Azam, a CRM & Web Technologist focused on HubSpot, automation, CRM architecture, reporting, web development, CMS builds, and landing pages.',
    path: '/about'
  })
};

export default function AboutPage() {
  const publicRoot = join(process.cwd(), 'public');
  const videoSources = [
    ['/media/about-feature-video.webm', 'media/about-feature-video.webm'],
    ['/media/about-feature-video.mp4', 'media/about-feature-video.mp4']
  ].filter(([, relativePath]) => existsSync(join(publicRoot, relativePath))).map(([publicPath]) => publicPath);
  const availableAudio = {
    '/audio/major-crimes.mp3': existsSync(join(publicRoot, 'audio/major-crimes.mp3')),
    '/audio/anything-human.mp3': existsSync(join(publicRoot, 'audio/anything-human.mp3'))
  };
  const availableArtwork = {
    '/images/about/major-crimes-cover.webp': existsSync(join(publicRoot, 'images/about/major-crimes-cover.webp')),
    '/images/about/anything-human-cover.webp': existsSync(join(publicRoot, 'images/about/anything-human-cover.webp'))
  };

  return (
    <PageShell>
      <JsonLd data={getBreadcrumbStructuredData([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />
      <JsonLd data={getProfilePageStructuredData()} />
      <Container className="mobile-page mobile-page-about max-w-[108rem] px-5 pt-32 sm:px-8 sm:pt-36 lg:pt-40 xl:px-10">
        <ScrollFadeHero className="grid min-h-[calc(100svh-5rem)] items-center gap-12 pb-24 xl:min-h-[48rem] xl:grid-cols-[1.03fr_0.97fr] xl:gap-4">
          <div aria-hidden="true" className="pointer-events-none absolute -left-52 top-1/5 h-[34rem] w-[34rem] rounded-full bg-secondary/[0.09] blur-[120px]" />
          <Reveal priority className="relative z-10">
            <h1 className="home-display max-w-[58rem] text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.98] tracking-[-0.03em] text-white">
              There is a person.<br />Management <HeadingAccent>regrets this.</HeadingAccent>
            </h1>
            <p className="mt-8 max-w-[46rem] text-base leading-7 text-white/72 sm:text-lg lg:text-[1.18rem] lg:leading-8">I’m Rahib Azam, a CRM &amp; Web Technologist, HubSpot Specialist, and web developer from Dhaka. I build CRM, automation, reporting, CMS, and front-end systems, fix weird things, and occasionally lose a measurable amount of time to three pixels.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-5">
              <ButtonTransitionLink href="/portfolio" size="lg" className="min-h-16 w-full px-9 sm:w-auto">See The Work <ArrowRight className="h-4 w-4" /></ButtonTransitionLink>
              <ButtonTransitionLink href="/contact" variant="secondary" size="lg" className="min-h-16 w-full px-9 sm:w-auto">Send A Problem <ArrowRight className="h-4 w-4" /></ButtonTransitionLink>
            </div>
          </Reveal>
          <FloatingSection className="relative z-0 xl:-mr-2" distance={5} duration={10}><AboutHeroVisual /></FloatingSection>
        </ScrollFadeHero>

        <section className="mobile-about-editorial py-14 sm:py-16">
          <HomeSectionHeader title={<>The Non-LinkedIn <HeadingAccent>Version</HeadingAccent></>} description="The professional summary is useful. Unfortunately, I also have a personality." />
          <div className="mt-10 border-y border-secondary/25 lg:grid lg:grid-cols-3">
            {aboutIntroCards.map(({ title, Icon, paragraphs }, index) => (
              <Reveal key={title} delay={index * 0.07} className="h-full">
                <article className={`system-rail-item group/intro relative h-full min-h-72 overflow-hidden px-5 py-9 transition-colors duration-500 motion-reduce:transition-none sm:px-7 sm:py-11 lg:min-h-[23rem] lg:px-9 lg:py-12 ${index > 0 ? 'border-t border-secondary/20 lg:border-l lg:border-t-0' : ''}`}>
                  <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(10,196,255,.1),transparent_48%)] opacity-0 transition-opacity duration-500 group-hover/intro:opacity-100 motion-reduce:transition-none" />
                  <div className="relative z-10 flex items-center justify-between gap-5">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-white/28 transition-colors duration-500 group-hover/intro:text-secondary/80 motion-reduce:transition-none">Profile / 0{index + 1}</span>
                    <Icon className={`h-11 w-11 transition-[filter,color] duration-500 motion-reduce:transition-none ${index === 1 ? 'text-purple-200 drop-shadow-[0_0_13px_rgba(139,108,255,.55)] group-hover/intro:drop-shadow-[0_0_21px_rgba(139,108,255,.8)]' : 'text-secondary drop-shadow-[0_0_13px_rgba(10,196,255,.55)] group-hover/intro:drop-shadow-[0_0_21px_rgba(10,196,255,.8)]'}`} />
                  </div>
                  <span aria-hidden="true" className="relative z-10 mt-6 block h-px bg-[linear-gradient(90deg,rgba(10,196,255,.55),rgba(139,108,255,.3),transparent)]" />
                  <h2 className="site-h2-module relative z-10 mt-7">{title}</h2>
                  {paragraphs.map((paragraph) => <p key={paragraph} className="relative z-10 mt-5 text-sm leading-7 text-white/66 transition-colors duration-500 group-hover/intro:text-white/76 motion-reduce:transition-none lg:text-base">{paragraph}</p>)}
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mobile-about-principles py-14 sm:py-16">
          <HomeSectionHeader title={<>Things I Keep <HeadingAccent>Doing</HeadingAccent></>} description="Less manifesto, more recurring behavior that has somehow become professionally useful." />
          <div className="mt-10 border-y border-secondary/25 lg:grid lg:grid-cols-3">
            {aboutPrinciples.map(({ title, Icon, description }, index) => (
              <Reveal key={title} delay={index * 0.07} className="h-full">
                <article className={`mobile-icon-card-layout system-rail-item group/principle relative flex h-full min-h-56 items-start gap-6 overflow-hidden px-5 py-9 transition-colors duration-500 motion-reduce:transition-none sm:px-7 sm:py-10 lg:min-h-64 lg:px-9 ${index > 0 ? 'border-t border-secondary/20 lg:border-l lg:border-t-0' : ''}`}>
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(108,76,255,.055))] opacity-0 transition-opacity duration-500 group-hover/principle:opacity-100 motion-reduce:transition-none" />
                  <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-secondary/40 bg-[#07112d] text-secondary shadow-[0_0_24px_rgba(10,196,255,.15),inset_0_0_16px_rgba(10,196,255,.08)] transition-[border-color,box-shadow,color] duration-500 group-hover/principle:border-purple/65 group-hover/principle:text-white group-hover/principle:shadow-[0_0_30px_rgba(10,196,255,.28),0_0_22px_rgba(139,108,255,.2)] motion-reduce:transition-none"><Icon className="h-7 w-7" /></div>
                  <div className="relative z-10">
                    <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-secondary/60">Principle 0{index + 1}</span>
                    <h2 className="site-h2-module mt-3">{title}</h2>
                    <p className="mt-4 text-sm leading-7 text-white/64 transition-colors duration-500 group-hover/principle:text-white/76 motion-reduce:transition-none">{description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mobile-about-personality py-14 sm:py-16">
          <HomeSectionHeader title={<>Patch Notes: <HeadingAccent>Human</HeadingAccent></>} description="Introvert, heavy music, games, side projects, clean UI, questionable sleep, and a known tendency to overengineer harmless objects." />
          <div aria-hidden="true" className="mt-7 h-px w-full bg-gradient-to-r from-secondary/65 via-secondary/20 to-transparent shadow-[0_0_10px_rgba(10,196,255,.2)]" />
          <div className="mt-8"><AboutPersonalityGrid videoSources={videoSources} availableAudio={availableAudio} availableArtwork={availableArtwork} /></div>
          <div className="mt-8 flex items-center justify-center gap-5 text-center font-mono text-[0.62rem] uppercase tracking-[0.12em] text-white/35 before:h-px before:w-24 before:bg-gradient-to-r before:from-transparent before:to-secondary/65 after:h-px after:w-24 after:bg-gradient-to-r after:from-secondary/65 after:to-transparent">Tools change. Principles don’t. Curiosity never stops.</div>
        </section>

        <section className="mobile-about-toolkit py-14 sm:py-16">
          <HomeSectionHeader
            title={<>CRM, Web &amp; Automation <HeadingAccent>Toolkit</HeadingAccent></>}
            personalityLabel="Things I Click"
            description="The stack changes by problem. These are tools I have used for HubSpot implementation, CRM systems, automation, web development, CMS work, and QA. They are currently aware of my existence."
          />

          <div className="mt-10 divide-y divide-secondary/20 border-y border-secondary/25">
            {aboutToolkit.map(({ title, description, image, accent, items }) => {
              const isPurple = accent === 'purple';
              const isBlue = accent === 'blue';
              const accentText = isPurple ? 'text-purple-200' : 'text-secondary';
              const accentLine = isPurple
                ? 'bg-purple shadow-[0_0_16px_rgba(108,76,255,.8)]'
                : 'bg-secondary shadow-[0_0_16px_rgba(10,196,255,.8)]';
              const imageBloom = isPurple
                ? 'bg-violet-500/18'
                : isBlue
                  ? 'bg-[radial-gradient(circle_at_center,rgba(10,196,255,.18),rgba(108,76,255,.14)_48%,transparent_70%)]'
                  : 'bg-cyan-400/18';
              const imageBaseGlow = isPurple
                ? 'bg-purple-400/18'
                : isBlue
                  ? 'bg-[linear-gradient(90deg,rgba(10,196,255,.18),rgba(108,76,255,.2))]'
                  : 'bg-cyan-300/18';
              const imageHorizon = isPurple
                ? 'via-purple-300/60 shadow-[0_0_28px_rgba(108,76,255,.45)]'
                : isBlue
                  ? 'via-secondary/60 shadow-[0_0_30px_rgba(10,196,255,.42),0_0_34px_rgba(108,76,255,.26)]'
                  : 'via-cyan-300/60 shadow-[0_0_28px_rgba(10,196,255,.45)]';
              const imageDrop = isPurple
                ? 'drop-shadow-[0_0_46px_rgba(108,76,255,.32)]'
                : isBlue
                  ? 'drop-shadow-[0_0_44px_rgba(10,196,255,.30)]'
                  : 'drop-shadow-[0_0_42px_rgba(10,196,255,.28)]';
              const chipAccent = isPurple
                ? 'border-purple-300/35 bg-[linear-gradient(145deg,rgba(22,20,62,.78),rgba(13,12,42,.72))] hover:border-purple-300/70 hover:bg-[linear-gradient(145deg,rgba(34,27,82,.86),rgba(18,15,52,.8))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_0_28px_rgba(108,76,255,.20)]'
                : 'border-secondary/35 bg-[linear-gradient(145deg,rgba(12,24,58,.78),rgba(10,13,40,.72))] hover:border-secondary/70 hover:bg-[linear-gradient(145deg,rgba(16,35,76,.86),rgba(12,16,48,.8))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_0_28px_rgba(10,196,255,.18)]';

              return (
                <article
                  key={title}
                  className="mobile-image-card group relative overflow-hidden transition-colors duration-500 ease-premium hover:bg-white/[0.012] motion-reduce:transition-none"
                >
                  <div className="system-rail-item relative overflow-hidden bg-[radial-gradient(circle_at_15%_0%,rgba(10,196,255,.065),transparent_30%),radial-gradient(circle_at_100%_100%,rgba(108,76,255,.09),transparent_42%),linear-gradient(145deg,rgba(7,15,38,.42),rgba(8,10,34,.32))] backdrop-blur-[12px]">
                    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${isPurple ? 'shadow-[inset_0_0_34px_rgba(108,76,255,.055)]' : 'shadow-[inset_0_0_34px_rgba(10,196,255,.045)]'}`} />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.1),transparent_28%,transparent_68%,rgba(108,76,255,.08))] opacity-50" />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(10,196,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(10,196,255,.22)_1px,transparent_1px)] [background-size:44px_44px]" />
                    <div aria-hidden="true" className={`pointer-events-none absolute -left-16 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full blur-[82px] ${isPurple ? 'bg-purple/16' : 'bg-secondary/16'}`} />
                    <div aria-hidden="true" className={`pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full blur-[96px] ${isPurple ? 'bg-purple/19' : isBlue ? 'bg-secondary/16' : 'bg-purple/14'}`} />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/35 to-purple/45" />

                    <div aria-hidden="true" className={`pointer-events-none absolute right-5 top-1/2 hidden h-[70%] w-36 -translate-y-1/2 opacity-45 lg:block ${accentText}`}>
                      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-current/60 to-transparent" />
                      <div className="absolute right-0 top-[18%] h-px w-28 bg-gradient-to-l from-current/60 via-current/25 to-transparent" />
                      <div className="absolute right-0 top-[42%] h-px w-20 bg-gradient-to-l from-current/45 to-transparent" />
                      <div className="absolute right-0 bottom-[22%] h-px w-24 bg-gradient-to-l from-current/50 via-current/20 to-transparent" />
                      <span className="absolute right-0 top-[18%] h-2 w-2 rounded-full bg-current shadow-[0_0_14px_currentColor]" />
                      <span className="absolute right-12 top-[18%] h-1.5 w-1.5 rounded-full bg-current/75 shadow-[0_0_10px_currentColor]" />
                      <span className="absolute right-20 top-[42%] h-1.5 w-1.5 rounded-full bg-current/65 shadow-[0_0_9px_currentColor]" />
                      <span className="absolute right-6 bottom-[22%] h-2 w-2 rounded-full bg-current/75 shadow-[0_0_12px_currentColor]" />
                      <div className="absolute right-4 top-[58%] h-16 w-20 opacity-30 [background-image:radial-gradient(circle,currentColor_1px,transparent_1.8px)] [background-size:16px_16px]" />
                    </div>

                    <div className="mobile-image-card-layout relative z-10 grid gap-7 p-6 md:p-8 lg:min-h-[14.75rem] lg:grid-cols-[minmax(20rem,0.38fr)_auto_1fr] lg:items-center lg:gap-8 xl:grid-cols-[minmax(22.5rem,0.32fr)_auto_minmax(16rem,0.23fr)_1fr] xl:gap-10">
                      <div className="mobile-image-card-media relative flex min-h-[13.5rem] items-center justify-center overflow-hidden [-webkit-mask-image:radial-gradient(ellipse_at_center,black_48%,rgba(0,0,0,.82)_62%,transparent_82%)] [mask-image:radial-gradient(ellipse_at_center,black_48%,rgba(0,0,0,.82)_62%,transparent_82%)] lg:min-h-[15.5rem]">
                        <div aria-hidden="true" className={`absolute h-60 w-72 rounded-full blur-[70px] ${imageBloom}`} />
                        <div aria-hidden="true" className={`absolute bottom-7 h-16 w-56 rounded-full blur-2xl ${imageBaseGlow}`} />
                        <div aria-hidden="true" className={`absolute inset-x-10 bottom-10 h-px bg-gradient-to-r from-transparent to-transparent ${imageHorizon}`} />
                        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_46%,rgba(7,11,31,.28)_78%)]" />
                        <div aria-hidden="true" className="absolute h-44 w-64 rounded-full bg-[#071025]/25 blur-2xl" />
                        <Image
                          src={image}
                          alt={`${title} toolkit visual`}
                          width={420}
                          height={300}
                          sizes="(min-width: 1280px) 360px, (min-width: 1024px) 340px, (min-width: 640px) 320px, 86vw"
                          className={[
                            'relative z-10 h-auto max-h-[14.5rem] w-[min(94%,20rem)] object-contain opacity-[0.92] brightness-[0.96] contrast-[1.08] saturate-[1.08] mix-blend-screen transition duration-500 ease-premium group-hover:scale-[1.035] group-hover:opacity-100 group-hover:brightness-[1.05] sm:max-h-[16rem] sm:w-[min(94%,22rem)] lg:max-h-[17.5rem] lg:w-[108%] xl:max-h-[18.5rem]',
                            imageDrop
                          ].join(' ')}
                          style={{
                            WebkitMaskImage: 'radial-gradient(ellipse at center, black 58%, rgba(0,0,0,.88) 72%, transparent 92%)',
                            maskImage: 'radial-gradient(ellipse at center, black 58%, rgba(0,0,0,.88) 72%, transparent 92%)'
                          }}
                        />
                      </div>

                      <div aria-hidden="true" className={`hidden h-32 w-[2px] rounded-full bg-gradient-to-b from-transparent via-current to-transparent opacity-85 shadow-[0_0_20px_currentColor,0_0_40px_currentColor] lg:block ${accentText}`} />

                      <div className="mobile-image-card-content relative min-w-0">
                        <h2 className="site-h2-module">{title}</h2>
                        <span aria-hidden="true" className={`mt-3 block h-[3px] w-12 rounded-full ${accentLine}`} />
                        <p className="mt-5 max-w-[19rem] text-base leading-[1.55] text-white/72 lg:text-[1.03rem]">{description}</p>
                      </div>

                      <div className="flex flex-wrap gap-3 lg:col-span-3 lg:pr-0 xl:col-span-1 xl:pr-8">
                        {items.map(({ label, Icon: ItemIcon }) => (
                          <span
                            key={label}
                            className={[
                              'group/chip inline-flex min-h-10 min-w-0 max-w-full items-center gap-2 whitespace-normal break-words rounded-xl px-3 py-2 text-[0.82rem] font-semibold text-white/[0.92] shadow-[inset_0_1px_0_rgba(255,255,255,.10),0_0_18px_rgba(10,196,255,.08)] backdrop-blur-xl transition duration-300 hover:text-white sm:min-h-12 sm:gap-2.5 sm:rounded-2xl sm:px-4 sm:text-[0.92rem] motion-safe:hover:-translate-y-0.5',
                              chipAccent
                            ].join(' ')}
                          >
                            <ItemIcon className={`h-[1.05rem] w-[1.05rem] shrink-0 ${accentText} opacity-90 drop-shadow-[0_0_9px_currentColor] transition duration-300 group-hover/chip:opacity-100`} />
                            <span>{label}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mobile-about-experience py-14 sm:py-16">
          <HomeSectionHeader
            title={<>CRM, HubSpot &amp; Web <HeadingAccent>Experience</HeadingAccent></>}
            personalityLabel="Previously On Rahib"
            description="Hands-on HubSpot, CRM automation, web development, CMS, reporting, SEO, and implementation work. Apparently “he kept fixing stuff” is not considered sufficient professional history."
          />

          <div className="relative mt-10 space-y-5">
            <div aria-hidden="true" className="absolute bottom-8 left-[1.18rem] top-8 w-px bg-gradient-to-b from-transparent via-secondary/55 to-purple/45 shadow-[0_0_20px_rgba(10,196,255,.38)] max-[430px]:left-3 sm:left-[1.45rem]" />

            {aboutExperience.map((item, index) => {
              const isPurple = index % 2 === 1;
              const borderGradient = isPurple
                ? 'bg-[linear-gradient(135deg,rgba(108,76,255,.78),rgba(10,196,255,.34),rgba(168,85,247,.55),rgba(255,255,255,.16))]'
                : 'bg-[linear-gradient(135deg,rgba(10,196,255,.75),rgba(108,76,255,.42),rgba(255,255,255,.18),rgba(10,196,255,.45))]';
              const cardGlow = isPurple
                ? 'shadow-[0_24px_80px_rgba(0,0,0,.42),0_0_54px_rgba(108,76,255,.16)] hover:shadow-[0_32px_100px_rgba(0,0,0,.48),0_0_72px_rgba(108,76,255,.22)]'
                : 'shadow-[0_24px_80px_rgba(0,0,0,.42),0_0_44px_rgba(10,196,255,.14)] hover:shadow-[0_32px_100px_rgba(0,0,0,.48),0_0_64px_rgba(10,196,255,.2)]';
              const accentText = isPurple ? 'text-purple-200' : 'text-secondary';
              const dateBadge = isPurple
                ? 'border-purple-300/35 bg-[linear-gradient(145deg,rgba(22,20,62,.78),rgba(13,12,42,.72))] text-white/[0.92] shadow-[inset_0_1px_0_rgba(255,255,255,.10),0_0_18px_rgba(108,76,255,.10)] hover:border-purple-300/70 hover:bg-[linear-gradient(145deg,rgba(34,27,82,.86),rgba(18,15,52,.8))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_0_28px_rgba(108,76,255,.20)]'
                : 'border-secondary/35 bg-[linear-gradient(145deg,rgba(12,24,58,.78),rgba(10,13,40,.72))] text-white/[0.92] shadow-[inset_0_1px_0_rgba(255,255,255,.10),0_0_18px_rgba(10,196,255,.08)] hover:border-secondary/70 hover:bg-[linear-gradient(145deg,rgba(16,35,76,.86),rgba(12,16,48,.8))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_0_28px_rgba(10,196,255,.18)]';
              const categoryBadge = isPurple
                ? 'border-purple-300/30 bg-[linear-gradient(145deg,rgba(22,20,62,.72),rgba(13,12,42,.68))] text-white/[0.88] shadow-[inset_0_1px_0_rgba(255,255,255,.10),0_0_16px_rgba(108,76,255,.10)] hover:border-purple-300/65 hover:bg-[linear-gradient(145deg,rgba(34,27,82,.82),rgba(18,15,52,.76))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_0_24px_rgba(108,76,255,.18)]'
                : 'border-secondary/30 bg-[linear-gradient(145deg,rgba(12,24,58,.72),rgba(10,13,40,.68))] text-white/[0.88] shadow-[inset_0_1px_0_rgba(255,255,255,.10),0_0_16px_rgba(10,196,255,.08)] hover:border-secondary/65 hover:bg-[linear-gradient(145deg,rgba(16,35,76,.82),rgba(12,16,48,.76))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_0_24px_rgba(10,196,255,.16)]';

              return (
                <Reveal key={item.role} delay={index * 0.06}>
                  <div className="relative grid grid-cols-[2.4rem_1fr] items-center gap-4 max-[430px]:grid-cols-[1.5rem_1fr] max-[430px]:gap-2 sm:grid-cols-[2.9rem_1fr]">
                    <div className="relative z-10 flex items-center justify-center">
                      <span
                        aria-hidden="true"
                        className={`h-3.5 w-3.5 rounded-full ${isPurple ? 'bg-purple-200 shadow-[0_0_18px_5px_rgba(108,76,255,.7)]' : 'bg-secondary shadow-[0_0_18px_5px_rgba(10,196,255,.7)]'}`}
                      />
                    </div>

                    <article
                      className={[
                        'group relative min-w-0 overflow-visible rounded-row p-px transition duration-500 ease-premium hover:-translate-y-1 sm:overflow-hidden',
                        cardGlow
                      ].join(' ')}
                    >
                      <div aria-hidden="true" className={`absolute inset-0 rounded-row opacity-80 transition duration-500 group-hover:opacity-100 ${borderGradient}`} />

                      <div className="relative min-w-0 overflow-visible rounded-[calc(0.75rem_-_1px)] bg-[radial-gradient(circle_at_15%_0%,rgba(10,196,255,.09),transparent_30%),radial-gradient(circle_at_100%_100%,rgba(108,76,255,.14),transparent_42%),linear-gradient(145deg,rgba(7,15,38,.96),rgba(8,10,34,.94))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.1),inset_0_-1px_0_rgba(10,196,255,.08)] backdrop-blur-[22px] sm:overflow-hidden sm:p-8">
                        <div aria-hidden="true" className={`pointer-events-none absolute inset-0 rounded-[calc(0.75rem_-_1px)] ${isPurple ? 'shadow-[inset_0_1px_0_rgba(255,255,255,.10),inset_0_0_28px_rgba(108,76,255,.08)]' : 'shadow-[inset_0_1px_0_rgba(255,255,255,.10),inset_0_0_28px_rgba(10,196,255,.06)]'}`} />
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.1),transparent_28%,transparent_68%,rgba(108,76,255,.08))] opacity-50" />
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(10,196,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(10,196,255,.22)_1px,transparent_1px)] [background-size:44px_44px]" />
                        <div aria-hidden="true" className={`pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full blur-[84px] ${isPurple ? 'bg-purple/20' : 'bg-secondary/16'}`} />

                        <div aria-hidden="true" className={`pointer-events-none absolute right-5 top-1/2 hidden h-[68%] w-28 -translate-y-1/2 opacity-35 sm:block ${accentText}`}>
                          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-current/60 to-transparent" />
                          <div className="absolute right-0 top-[24%] h-px w-24 bg-gradient-to-l from-current/55 via-current/20 to-transparent" />
                          <div className="absolute right-0 bottom-[30%] h-px w-18 bg-gradient-to-l from-current/45 to-transparent" />
                          <span className="absolute right-0 top-[24%] h-2 w-2 rounded-full bg-current shadow-[0_0_14px_currentColor]" />
                          <span className="absolute right-10 bottom-[30%] h-1.5 w-1.5 rounded-full bg-current/70 shadow-[0_0_10px_currentColor]" />
                        </div>

                        <div className="relative z-10 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
                          <div>
                            <p className={`font-mono text-[0.64rem] font-bold uppercase tracking-[0.2em] ${accentText}`}>System log 0{index + 1}</p>
                            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between lg:block">
                              <div>
                                <h2 className="site-h2-module">{item.role}</h2>
                                <p className="mt-2 font-semibold text-cyan-100/78">{item.company}</p>
                              </div>
                            </div>
                            <p className="mt-5 max-w-4xl text-sm leading-7 text-white/66 sm:text-[0.95rem]">{item.description}</p>
                            <div className="mt-5 flex flex-wrap gap-2.5 lg:hidden">
                              <span className={`inline-flex min-h-12 w-fit max-w-full items-center gap-2.5 whitespace-normal break-words rounded-2xl border px-4 py-2 font-mono text-[0.72rem] font-bold uppercase tracking-[0.22em] backdrop-blur-xl transition duration-300 motion-safe:hover:-translate-y-0.5 ${dateBadge}`}>{item.date}</span>
                              <span className={`inline-flex min-h-10 w-fit max-w-full items-center gap-2 whitespace-normal break-words rounded-2xl border px-3.5 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.24em] backdrop-blur-xl transition duration-300 motion-safe:hover:-translate-y-0.5 ${categoryBadge}`}>
                                <Sparkles className={`h-3.5 w-3.5 ${accentText} drop-shadow-[0_0_9px_currentColor]`} />
                                Experience
                              </span>
                            </div>
                          </div>

                          <div className="hidden gap-3 lg:flex lg:flex-col lg:items-end">
                            <span className={`inline-flex h-12 w-fit items-center gap-2.5 whitespace-nowrap rounded-2xl border px-4 font-mono text-[0.72rem] font-bold uppercase tracking-[0.22em] backdrop-blur-xl transition duration-300 motion-safe:hover:-translate-y-0.5 ${dateBadge}`}>{item.date}</span>
                            <span className={`inline-flex h-10 w-fit items-center gap-2 whitespace-nowrap rounded-2xl border px-3.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.24em] backdrop-blur-xl transition duration-300 motion-safe:hover:-translate-y-0.5 ${categoryBadge}`}>
                              <Sparkles className={`h-3.5 w-3.5 ${accentText} drop-shadow-[0_0_9px_currentColor]`} />
                              Experience
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="mobile-about-snapshots py-14 sm:py-16">
          <HomeSectionHeader
            title={<>Character <HeadingAccent>Sheet</HeadingAccent></>}
            description="Useful facts, plus several details that explain why the rest of the website sounds like this."
          />

          <Reveal>
            <div className="relative mt-10 rounded-[2rem] p-px shadow-[0_28px_90px_rgba(0,0,0,.42),0_0_52px_rgba(10,196,255,.12),0_0_64px_rgba(108,76,255,.10)]">
              <div aria-hidden="true" className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(10,196,255,.78),rgba(10,196,255,.24)_28%,rgba(108,76,255,.50)_72%,rgba(255,255,255,.20))] opacity-90" />
              <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-[radial-gradient(circle_at_15%_0%,rgba(10,196,255,0.09),transparent_30%),radial-gradient(circle_at_100%_100%,rgba(108,76,255,0.14),transparent_42%),linear-gradient(145deg,rgba(7,15,38,0.96),rgba(8,10,34,0.94))] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11 xl:px-11 xl:py-12">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[calc(2rem-1px)] shadow-[inset_0_1px_0_rgba(255,255,255,.10),inset_0_0_34px_rgba(10,196,255,.07),inset_0_0_42px_rgba(108,76,255,.06)]" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(10,196,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(10,196,255,.22)_1px,transparent_1px)] [background-size:44px_44px]" />
                <span aria-hidden="true" className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent shadow-[0_0_18px_rgba(10,196,255,.45)]" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-300/35 to-transparent shadow-[0_0_18px_rgba(108,76,255,.35)]" />

                <div className="relative z-10 grid gap-6 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-7">
                  {[aboutSnapshots.slice(0, 3), aboutSnapshots.slice(3)].map((column, columnIndex) => (
                    <div key={columnIndex} className="space-y-6 xl:space-y-7">
                      {column.map(({ title, Icon, description }, index) => {
                        const actualIndex = columnIndex * 3 + index;
                        const isPurple = actualIndex === 1 || actualIndex === 4;
                        const isRightColumn = columnIndex === 1;

                        return (
                          <div
                            key={title}
                            className={[
                              'group relative overflow-hidden p-px transition duration-500 ease-premium motion-safe:hover:-translate-y-1',
                              '[clip-path:polygon(0_0,calc(100%_-_2rem)_0,100%_2rem,100%_100%,2rem_100%,0_calc(100%_-_2rem))]',
                              isPurple
                                ? 'bg-[linear-gradient(135deg,rgba(168,85,247,.9),rgba(108,76,255,.62)_38%,rgba(10,196,255,.28)_72%,rgba(255,255,255,.2))] shadow-[0_20px_60px_rgba(0,0,0,.34),0_0_36px_rgba(108,76,255,.18)] hover:shadow-[0_24px_72px_rgba(0,0,0,.44),0_0_54px_rgba(108,76,255,.34)]'
                                : 'bg-[linear-gradient(135deg,rgba(10,196,255,.9),rgba(10,196,255,.28)_34%,rgba(108,76,255,.56)_72%,rgba(255,255,255,.2))] shadow-[0_20px_60px_rgba(0,0,0,.34),0_0_34px_rgba(10,196,255,.16)] hover:shadow-[0_24px_72px_rgba(0,0,0,.44),0_0_54px_rgba(10,196,255,.32)]'
                            ].join(' ')}
                          >
                            <div className="relative grid min-h-[11.25rem] grid-cols-[4.6rem_1fr] gap-4 overflow-hidden bg-[radial-gradient(circle_at_15%_0%,rgba(10,196,255,0.09),transparent_30%),radial-gradient(circle_at_100%_100%,rgba(108,76,255,0.14),transparent_42%),linear-gradient(145deg,rgba(7,15,38,0.96),rgba(8,10,34,0.94))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.10),inset_0_0_28px_rgba(10,196,255,.07)] [clip-path:polygon(0_0,calc(100%_-_2rem)_0,100%_2rem,100%_100%,2rem_100%,0_calc(100%_-_2rem))] max-[430px]:grid-cols-1 max-[430px]:gap-5 sm:min-h-[12rem] sm:grid-cols-[5rem_1fr] sm:p-7 xl:min-h-[11.5rem] xl:p-8">
                              <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${isPurple ? 'shadow-[inset_0_1px_0_rgba(255,255,255,.10),inset_0_0_30px_rgba(108,76,255,.08)]' : 'shadow-[inset_0_1px_0_rgba(255,255,255,.10),inset_0_0_28px_rgba(10,196,255,.07)]'}`} />
                              {isRightColumn ? (
                                <>
                                  <span aria-hidden="true" className={`absolute right-0 top-0 h-px w-40 bg-gradient-to-l to-transparent shadow-[0_0_24px_currentColor] ${isPurple ? 'from-purple-200 via-purple-300/75 text-purple-300' : 'from-cyan-200 via-secondary/75 text-secondary'}`} />
                                  <span aria-hidden="true" className={`absolute left-0 top-0 h-px w-32 bg-gradient-to-r to-transparent shadow-[0_0_22px_currentColor] ${isPurple ? 'from-purple-300 via-purple-300/60 text-purple-300' : 'from-secondary via-secondary/60 text-secondary'}`} />
                                  <span aria-hidden="true" className={`absolute left-0 top-0 h-14 w-px bg-gradient-to-b to-transparent shadow-[0_0_22px_currentColor] ${isPurple ? 'from-purple-300 via-purple-300/45 text-purple-300' : 'from-secondary via-secondary/45 text-secondary'}`} />
                                  <span aria-hidden="true" className={`absolute bottom-0 right-6 h-px w-36 bg-gradient-to-l to-transparent shadow-[0_0_18px_currentColor] ${isPurple ? 'from-purple-300/80 via-purple-300/40 text-purple-300' : 'from-secondary/80 via-secondary/40 text-secondary'}`} />
                                </>
                              ) : (
                                <>
                                  <span aria-hidden="true" className={`absolute left-0 top-0 h-px w-40 bg-gradient-to-r to-transparent shadow-[0_0_24px_currentColor] ${isPurple ? 'from-purple-200 via-purple-300/75 text-purple-300' : 'from-cyan-200 via-secondary/75 text-secondary'}`} />
                                  <span aria-hidden="true" className={`absolute right-0 top-0 h-px w-32 bg-gradient-to-l to-transparent shadow-[0_0_22px_currentColor] ${isPurple ? 'from-purple-300 via-purple-300/60 text-purple-300' : 'from-secondary via-secondary/60 text-secondary'}`} />
                                  <span aria-hidden="true" className={`absolute right-0 top-0 h-14 w-px bg-gradient-to-b to-transparent shadow-[0_0_22px_currentColor] ${isPurple ? 'from-purple-300 via-purple-300/45 text-purple-300' : 'from-secondary via-secondary/45 text-secondary'}`} />
                                  <span aria-hidden="true" className={`absolute bottom-0 left-6 h-px w-36 bg-gradient-to-r to-transparent shadow-[0_0_18px_currentColor] ${isPurple ? 'from-purple-300/80 via-purple-300/40 text-purple-300' : 'from-secondary/80 via-secondary/40 text-secondary'}`} />
                                </>
                              )}
                              <div aria-hidden="true" className={`absolute right-5 top-1/2 flex -translate-y-1/2 flex-col gap-2 ${isPurple ? 'text-purple-300' : 'text-secondary'}`}>
                                <span className="h-1.5 w-1.5 rounded-full bg-current/70 shadow-[0_0_8px_currentColor]" />
                                <span className="h-1.5 w-1.5 rounded-full bg-current/45" />
                                <span className="h-1.5 w-1.5 rounded-full bg-current/70 shadow-[0_0_8px_currentColor]" />
                              </div>
                              <div aria-hidden="true" className={`absolute -right-10 -top-10 h-44 w-44 rounded-full blur-[62px] ${isPurple ? 'bg-purple/24' : 'bg-secondary/22'}`} />
                              <div className={`relative flex h-16 w-16 shrink-0 items-center justify-center self-center ${isPurple ? 'text-purple-300' : 'text-secondary'}`}>
                                <div
                                  aria-hidden="true"
                                  className={[
                                    'absolute inset-0 [clip-path:polygon(12%_0,100%_0,100%_78%,78%_100%,0_100%,0_12%)]',
                                    isPurple
                                      ? 'border border-purple-300/45 bg-purple/[0.075] shadow-[0_0_18px_rgba(108,76,255,.36),inset_0_1px_0_rgba(180,120,255,.12)]'
                                      : 'border border-secondary/45 bg-secondary/[0.07] shadow-[0_0_18px_rgba(10,196,255,.34),inset_0_1px_0_rgba(77,208,255,.12)]'
                                  ].join(' ')}
                                />
                                <div
                                  aria-hidden="true"
                                  className={[
                                    'absolute inset-2 [clip-path:polygon(14%_0,100%_0,100%_76%,76%_100%,0_100%,0_14%)]',
                                    isPurple ? 'border border-purple-300/24' : 'border border-secondary/24'
                                  ].join(' ')}
                                />
                                <span aria-hidden="true" className="absolute -right-1 top-2 h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
                                <span aria-hidden="true" className="absolute left-1/2 top-1/2 h-px w-14 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-current/35 to-transparent" />
                                <span aria-hidden="true" className="absolute left-2 top-2 h-px w-4 bg-current/45 shadow-[0_0_8px_currentColor]" />
                                <span aria-hidden="true" className="absolute bottom-2 right-2 h-px w-4 bg-current/35" />
                                <Icon className="relative h-7 w-7 drop-shadow-[0_0_10px_currentColor]" />
                              </div>
                              <div>
                                <p className={`font-mono text-sm font-black tracking-[0.28em] ${isPurple ? 'text-purple-200' : 'text-secondary'}`}>0{actualIndex + 1}</p>
                                <h3 className="mt-2 font-display text-xl font-black leading-tight tracking-[0.02em] text-white sm:text-2xl xl:text-[1.65rem]">{title}</h3>
                                <p className="mt-3 text-sm leading-6 text-white/72 sm:text-base sm:leading-7">{description}</p>
                                <div aria-hidden="true" className={`mt-4 flex justify-end gap-1.5 ${isPurple ? 'text-purple-200' : 'text-secondary'}`}>
                                  <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
                                  <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
                                  <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mt-9 grid gap-4 border-t border-secondary/25 pt-6 font-mono text-[0.72rem] uppercase tracking-[0.24em] text-white/48 sm:grid-cols-2">
                  <div aria-hidden="true" className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/65 to-transparent shadow-[0_0_16px_rgba(10,196,255,.45)]" />
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-secondary/90">Baseline</span>
                    <span className="text-white/30">—</span>
                    <span>Dhaka, BD • Remote-first</span>
                  </p>
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:justify-end">
                    <span className="text-secondary/90">System Online</span>
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.9)]" />
                    <span className="text-purple-100/60">v1.0.0</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mobile-about-cta py-14 pb-24 sm:py-16 sm:pb-28">
          <Reveal>
            <AnimationVisibilityBoundary className="group/build-cta relative mx-auto overflow-visible rounded-[2rem] p-px shadow-[0_28px_90px_rgba(0,0,0,.45),0_0_42px_rgba(10,196,255,.20),0_0_58px_rgba(108,76,255,.16)]">
              <div aria-hidden="true" className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(10,196,255,.95),rgba(10,196,255,.28)_30%,rgba(108,76,255,.76)_78%,rgba(255,255,255,.16))] opacity-95 transition-opacity duration-500 group-hover/build-cta:opacity-100" />

              <div className="relative min-w-0 overflow-hidden rounded-[calc(2rem-1px)]">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                  <BuildTogetherBackground />
                </div>

                <div className="relative z-30 grid min-w-0 gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[470px] lg:grid-cols-[minmax(0,1.08fr)_minmax(23rem,0.92fr)] lg:items-center lg:gap-10 lg:px-16 xl:px-20">
                  <div aria-hidden="true" className="pointer-events-none relative order-1 mx-auto flex h-56 w-full max-w-[18rem] items-center justify-center sm:h-64 sm:max-w-[22rem] lg:order-2 lg:h-[29rem] lg:max-w-[29rem] xl:h-[32rem] xl:max-w-[32rem]">
                    <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(10,196,255,.20),rgba(108,76,255,.16)_42%,transparent_68%)] blur-2xl" />
                    <span className="about-cta-orbit absolute h-[42%] w-[92%] rounded-[50%] border border-[#0AC4FF]/78 shadow-[0_0_34px_rgba(10,196,255,.42)] [--orbit-duration:32s] [--orbit-start:-12deg]" />
                    <span className="about-cta-orbit about-cta-orbit-reverse absolute h-[55%] w-[92%] rounded-[50%] border border-[#4B6BFF]/70 shadow-[0_0_34px_rgba(75,107,255,.36),0_0_28px_rgba(10,196,255,.20)] [--orbit-duration:38s] [--orbit-start:30deg]" />
                    <span className="about-cta-orbit absolute h-[78%] w-[45%] rounded-[50%] border border-[#8B5CF6]/66 shadow-[0_0_32px_rgba(139,92,246,.34),0_0_24px_rgba(108,76,255,.22)] [--orbit-duration:44s] [--orbit-start:18deg]" />
                    <span className="absolute left-[8%] top-[34%] h-2.5 w-2.5 rounded-full bg-[#0AC4FF] shadow-[0_0_22px_rgba(10,196,255,.98)] sm:h-3 sm:w-3" />
                    <span className="absolute right-[10%] top-[43%] h-2.5 w-2.5 rounded-full bg-[#9BA7FF] shadow-[0_0_20px_rgba(124,77,255,.72),0_0_14px_rgba(30,167,255,.45)] sm:h-3 sm:w-3" />
                    <span className="absolute bottom-[16%] right-[14%] h-3.5 w-3.5 rounded-full bg-[#8B5CFF] shadow-[0_0_26px_rgba(108,76,255,.98)] sm:h-4 sm:w-4" />
                    <div className="relative z-20 flex h-24 w-24 items-center justify-center rounded-full border border-[#0AC4FF]/34 bg-[#071126]/95 shadow-[inset_0_1px_0_rgba(10,196,255,.18),inset_0_0_26px_rgba(10,196,255,.08),0_0_56px_rgba(10,196,255,.32),0_0_70px_rgba(108,76,255,.24)] sm:h-28 sm:w-28 lg:h-32 lg:w-32">
                      <div className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(10,196,255,.18),rgba(108,76,255,.12),transparent_72%)]" />
                      <BrandMark className="relative h-12 w-12 drop-shadow-[0_0_24px_rgba(10,196,255,.76)] sm:h-14 sm:w-14 lg:h-16 lg:w-16" />
                    </div>
                  </div>

                  <div className="order-2 min-w-0 text-left [overflow-wrap:anywhere] lg:order-1">
                    <div className="mb-6 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                      <span>ENOUGH CHARACTER DEVELOPMENT</span>
                      <span aria-hidden="true" className="h-px w-10 shrink-0 bg-gradient-to-r from-secondary to-transparent shadow-[0_0_12px_rgba(10,196,255,.8)]" />
                    </div>

                    <h2 className="site-h2-statement">
                      BACK TO THE{' '}
                      <span className="bg-gradient-to-r from-[#06C2FF] via-[#1BA6FF] to-[#8B5CFF] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(10,196,255,.24)]">
                        PROBLEMS
                      </span>
                    </h2>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                      If you have a HubSpot system, CRM workflow, website, CMS build, or technical implementation behaving strangely, send it over. I have made worse decisions voluntarily.
                    </p>

                    <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
                      <TransitionLink
                        href="/contact"
                        className="group/btn inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-cyan-100/25 bg-[linear-gradient(90deg,#08B8FF_0%,#256BFF_55%,#6C4CFF_100%)] px-7 font-display text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_34px_rgba(10,196,255,.28),0_0_26px_rgba(108,76,255,.20)] transition duration-300 hover:shadow-[0_16px_44px_rgba(10,196,255,.38),0_0_44px_rgba(108,76,255,.28)] motion-safe:hover:-translate-y-0.5 sm:w-auto"
                      >
                        SEND A PROBLEM
                        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </TransitionLink>
                      <TransitionLink
                        href="/portfolio"
                        className="group/btn inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-[#0AC4FF]/50 bg-[#08152d] px-7 font-display text-sm font-black uppercase tracking-[0.16em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_0_18px_rgba(10,196,255,.10)] transition duration-300 hover:border-[#0AC4FF]/80 hover:bg-[#0b1b3a] hover:shadow-[0_0_34px_rgba(10,196,255,.24)] motion-safe:hover:-translate-y-0.5 sm:w-auto"
                      >
                        SEE THE WORK
                        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </TransitionLink>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationVisibilityBoundary>
          </Reveal>
        </section>
      </Container>
    </PageShell>
  );
}
