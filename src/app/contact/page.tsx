import type { Metadata } from 'next';
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';
import { PageShell } from '@/components/motion/PageShell';
import { Reveal } from '@/components/motion/Reveal';
import { FloatingSection } from '@/components/motion/FloatingSection';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { ButtonLink, ButtonTransitionLink } from '@/components/ui/Button';
import { HomeSectionHeader } from '@/components/home/HomeSectionHeader';
import { HomeCTAVisual } from '@/components/home/HomeCTAVisual';
import { HeroOrbitVisual } from '@/components/visuals/HeroOrbitVisual';
import { ContactFaqSection } from '@/components/contact/ContactFaqSection';
import { contactQuickInfo, contactSocialLinks, contactStats } from '@/data/contact';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Rahib Azam',
  description:
    'Contact Rahib Azam for HubSpot, CRM, CMS, web, landing page, reporting, and automation projects.'
};

const quickInfoIconClass = {
  cyan:
    'flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#0AC4FF]/70 bg-[#0000] text-[#0AC4FF] shadow-[0_0_26px_rgba(10,196,255,.22),inset_0_1px_0_rgba(255,255,255,.055)] backdrop-blur-lg',
  blue:
    'flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#3B82F6]/70 bg-[#0000] text-[#3B82F6] shadow-[0_0_26px_rgba(59,130,246,.22),inset_0_1px_0_rgba(255,255,255,.055)] backdrop-blur-lg',
  violet:
    'flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#8B5CF6]/70 bg-[#0000] text-[#8B5CF6] shadow-[0_0_26px_rgba(139,92,246,.22),inset_0_1px_0_rgba(255,255,255,.055)] backdrop-blur-lg'
} as const;

const socialTileClass =
  'group relative isolate flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[0.75rem_1.25rem] border border-[#0AC4FF]/36 bg-[radial-gradient(circle_at_20%_0%,rgba(10,196,255,.12),transparent_46%),linear-gradient(145deg,rgba(7,15,38,.82),rgba(8,10,34,.76))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.07),0_0_20px_rgba(10,196,255,.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8b6cff]/80 hover:shadow-[-4px_-4px_20px_rgba(10,196,255,.30),8px_8px_24px_rgba(108,76,255,.30)] focus-visible:-translate-y-0.5 focus-visible:border-[#8b6cff]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AC4FF]/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B1D] focus-visible:shadow-[-4px_-4px_20px_rgba(10,196,255,.30),8px_8px_24px_rgba(108,76,255,.30)] sm:h-[4.5rem] sm:w-[4.5rem]';

const socialIconClass =
  'relative z-10 h-8 w-8 fill-white transition-all duration-500 group-hover:drop-shadow-[0_0_5px_rgba(10,196,255,.95),0_0_13px_rgba(139,108,255,.78)] group-focus-visible:drop-shadow-[0_0_5px_rgba(10,196,255,.95),0_0_13px_rgba(139,108,255,.78)] sm:h-9 sm:w-9';

const socialDockParticles = [
  { left: '8%', top: '30%', size: '0.22rem', delay: '0s', duration: '7s' },
  { left: '18%', top: '72%', size: '0.16rem', delay: '1.2s', duration: '8.5s' },
  { left: '31%', top: '24%', size: '0.14rem', delay: '2.1s', duration: '7.8s' },
  { left: '46%', top: '68%', size: '0.2rem', delay: '0.7s', duration: '9s' },
  { left: '58%', top: '34%', size: '0.13rem', delay: '1.8s', duration: '8s' },
  { left: '72%', top: '76%', size: '0.18rem', delay: '2.6s', duration: '9.2s' },
  { left: '86%', top: '28%', size: '0.16rem', delay: '1.4s', duration: '7.4s' },
  { left: '94%', top: '62%', size: '0.2rem', delay: '3s', duration: '8.8s' }
] as const;

const socialIcons = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={socialIconClass}>
      <path fill="currentColor" d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V8.98h3.42v1.57h.05a3.75 3.75 0 0 1 3.38-1.86c3.61 0 4.28 2.38 4.28 5.47v6.29h-.02ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.53V8.98H7.1v11.47ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={socialIconClass}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.2-.02-2.18-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.04c.98 0 1.96.13 2.88.38 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.2.67.79.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={socialIconClass}>
      <path fill="currentColor" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.95 1.8a1.45 1.45 0 1 1 0 2.9 1.45 1.45 0 0 1 0-2.9ZM12 7.15A4.85 4.85 0 1 1 12 16.85 4.85 4.85 0 0 1 12 7.15Zm0 2A2.85 2.85 0 1 0 12 14.85 2.85 2.85 0 0 0 12 9.15Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={socialIconClass}>
      <path fill="currentColor" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.8-4.7 4.54-4.7 1.31 0 2.68.23 2.68.23v2.96h-1.5c-1.49 0-1.95.93-1.95 1.88v2.29h3.32l-.53 3.49H13.9V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  ),
  spotify: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={socialIconClass}>
      <path fill="currentColor" d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.5 17.32a.75.75 0 0 1-1.04.25c-2.85-1.74-6.44-2.13-10.66-1.17a.75.75 0 1 1-.33-1.46c4.62-1.05 8.58-.59 11.78 1.36.36.22.47.68.25 1.02Zm1.46-3.24a.94.94 0 0 1-1.29.31c-3.26-2-8.24-2.58-12.09-1.41a.94.94 0 1 1-.54-1.8c4.4-1.33 9.88-.68 13.6 1.6.44.27.58.85.32 1.3Zm.13-3.37C15.18 8.39 8.73 8.17 5 9.3a1.12 1.12 0 1 1-.65-2.14c4.28-1.3 11.4-1.04 15.9 1.64a1.12 1.12 0 1 1-1.16 1.91Z" />
    </svg>
  )
} as const;

function ContactHeroVisual() {
  const orbitIcons = [
    { label: 'Message thread', Icon: MessageCircle },
    { label: 'Professional contact', Icon: Linkedin },
    { label: 'Direct email', Icon: Mail },
    { label: 'Response time', Icon: Clock3 }
  ] as const;

  return (
    <HeroOrbitVisual
      ariaLabel="Contact communication dashboard with email, messages, and response-time orbit icons"
      floatingIcons={orbitIcons}
      center={
        <div className="relative grid h-36 w-36 place-items-center rounded-[2rem] border border-secondary/45 bg-[#08152D]/95 text-secondary shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_0_46px_rgba(10,196,255,.38)] sm:h-48 sm:w-48 sm:rounded-[2.4rem] lg:h-56 lg:w-56">
          <div aria-hidden="true" className="absolute inset-5 rounded-[1.5rem] border border-secondary/18 sm:inset-7" />
          <Mail className="relative h-20 w-20 drop-shadow-[0_0_28px_rgba(10,196,255,.68)] sm:h-28 sm:w-28 lg:h-32 lg:w-32" strokeWidth={1.45} />
        </div>
      }
    />
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <Container className="max-w-[108rem] px-5 pt-32 sm:px-8 sm:pt-36 lg:pt-40 xl:px-10">
        <section className="relative grid min-h-[calc(100svh-5rem)] items-center gap-12 pb-24 lg:pb-28 xl:min-h-[52rem] xl:grid-cols-[1.03fr_0.97fr] xl:gap-4">
          <div aria-hidden="true" className="pointer-events-none absolute -left-52 top-1/5 h-[34rem] w-[34rem] rounded-full bg-secondary/[0.1] blur-[120px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full bg-purple/[0.1] blur-[130px]" />
          <Reveal className="relative z-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-secondary drop-shadow-[0_0_10px_rgba(10,196,255,0.55)] sm:text-sm">Let’s Talk</p>
            <h1 className="home-display mt-7 max-w-[59rem] text-[clamp(2.8rem,12vw,4.8rem)] font-black uppercase leading-[1.01] tracking-[-0.027em] text-white lg:text-[5.35rem] xl:text-[5.6rem] 2xl:text-[6.15rem]">
              <span className="block">Let’s skip the</span>
              <span className="block text-gradient drop-shadow-[0_0_24px_rgba(108,76,255,0.2)]">small talk.</span>
              </h1>
              <p className="mt-8 max-w-[43rem] text-base leading-7 text-white/72 sm:text-lg lg:text-[1.18rem] lg:leading-8">
                Let’s be honest — I’m not the “networking event” type. This form is introvert-approved.
                Low risk, high reward. No bots. No spam. Just real replies.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-5">
                <ButtonTransitionLink href="#contact-form" size="lg" className="w-full min-h-16 rounded-lg px-10 text-sm sm:w-auto">
                  Start a Project <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </ButtonTransitionLink>
                <ButtonLink href="#" variant="secondary" size="lg" className="w-full min-h-16 rounded-lg px-10 text-sm sm:w-auto">
                  Book a Call <CalendarDays aria-hidden="true" className="h-4 w-4" />
                </ButtonLink>
              </div>
          </Reveal>

          <FloatingSection className="relative z-0 xl:-mr-2" distance={6} duration={10}>
            <ContactHeroVisual />
          </FloatingSection>
        </section>

        <section id="contact-form" className="scroll-mt-28 py-14 sm:py-16">
          <Reveal>
            <GlassCard
              className="home-module-strong overflow-hidden rounded-panel border-secondary/35 p-5 sm:p-6 lg:p-8 xl:p-9"
              contentClassName="lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.75fr)] lg:items-stretch lg:gap-8 xl:gap-10"
            >
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-[1.35rem] border border-[#0AC4FF]/70 bg-[#0000] text-[#0AC4FF] shadow-[0_0_30px_rgba(10,196,255,.24),inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur-lg">
                    <Send className="h-8 w-8 drop-shadow-[0_0_14px_rgba(10,196,255,.62)]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-black uppercase tracking-[0.02em] text-white lg:text-[1.85rem]">Send a Message</h2>
                    <p className="mt-1.5 text-sm leading-6 text-white/58 lg:text-base">Share a few details and I’ll get back to you soon.</p>
                  </div>
                </div>
                <ContactForm />
              </div>

              <aside className="mt-8 flex h-full flex-col border-t border-white/10 pt-7 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
                <h2 className="font-display text-2xl font-black uppercase tracking-[0.02em] text-white lg:text-[1.85rem]">Quick Info</h2>
                <p className="mt-2 text-sm leading-6 text-white/58 lg:text-base">Prefer a quicker ping? Reach out directly.</p>
                <div className="mt-7 grid flex-1 content-start gap-6">
                  {contactQuickInfo.map(({ label, value, note, icon: Icon, accent }) => (
                    <div key={label} className="flex gap-4">
                      <div className={quickInfoIconClass[accent]}>
                        <Icon className="h-7 w-7 drop-shadow-[0_0_12px_currentColor]" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-secondary">{label}</p>
                        <p className="mt-1 break-words text-sm font-semibold text-white lg:text-base">{value}</p>
                        <p className="mt-1 text-sm text-white/50 lg:text-[0.95rem]">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-auto border-t border-white/10 pt-5 text-sm text-white/62 lg:text-base">Available Mon – Fri, 9AM – 9PM (BST)</p>
              </aside>
            </GlassCard>
          </Reveal>
        </section>

        <section className="relative py-10 sm:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-[min(58rem,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(10,196,255,.10),rgba(139,108,255,.07)_42%,transparent_70%)] blur-3xl"
          />

          <Reveal>
            <GlassCard className="home-module-strong relative overflow-hidden rounded-panel border-secondary/35 p-5 sm:p-6 lg:p-7">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                {socialDockParticles.map((particle, index) => (
                  <span
                    key={`social-dock-particle-${index}`}
                    className="absolute rounded-full bg-secondary/80 shadow-[0_0_14px_rgba(10,196,255,.65)] motion-safe:animate-social-dock-particle"
                    style={{
                      left: particle.left,
                      top: particle.top,
                      width: particle.size,
                      height: particle.size,
                      animationDelay: particle.delay,
                      animationDuration: particle.duration
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8 xl:gap-10">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-3 w-3 shrink-0 rounded-[0.2rem] bg-secondary shadow-[0_0_18px_rgba(10,196,255,.75)]"
                    />
                    <h2 className="home-display text-[clamp(1.4rem,2.1vw,2rem)] font-black uppercase leading-[1.08] tracking-[-0.025em] text-white">
                      Find me online,{' '}
                      <span className="bg-[linear-gradient(90deg,var(--secondary),#8b6cff)] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(10,196,255,.55)] [filter:drop-shadow(0_0_18px_rgba(10,196,255,.42))_drop-shadow(0_0_24px_rgba(139,108,255,.34))]">
                        awkwardly
                      </span>
                    </h2>
                  </div>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/66 sm:text-base sm:leading-7">
                    The less formal corners of the internet where I exist, occasionally post, and pretend networking is not terrifying.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:flex-nowrap lg:justify-end">
                  {contactSocialLinks.map(({ label, href, ariaLabel, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ariaLabel}
                      className={socialTileClass}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 scale-0 rounded-full bg-[linear-gradient(180deg,var(--secondary),#8b6cff)] opacity-90 transition-transform duration-300 ease-linear group-hover:scale-150 group-focus-visible:scale-150"
                      />
                      {socialIcons[icon]}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </section>

        <ContactFaqSection />

        <section className="pb-14 sm:pb-16">
          <Reveal>
            <HomeSectionHeader
              title={
                <>
                  Stats &{' '}
                  <span className="bg-[linear-gradient(90deg,var(--secondary),#8b6cff)] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(10,196,255,.55)] [filter:drop-shadow(0_0_18px_rgba(10,196,255,.42))_drop-shadow(0_0_24px_rgba(139,108,255,.34))]">
                    Specs
                  </span>
                </>
              }
              description="A quick signal check for response speed, working style, and systems-first defaults."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="home-module-strong mt-10 grid overflow-hidden rounded-card border-secondary/35 sm:grid-cols-2 lg:grid-cols-4">
              {contactStats.map(({ label, value, note, icon: Icon }) => (
                <div key={label} className="flex min-h-40 gap-5 border-b border-white/10 p-6 sm:border-r lg:[&:nth-child(4n)]:border-r-0 [&:nth-last-child(-n+1)]:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+4)]:border-b-0 lg:p-8">
                  <Icon className="mt-1 h-8 w-8 shrink-0 text-secondary drop-shadow-[0_0_12px_rgba(10,196,255,.55)]" strokeWidth={1.7} />
                  <div>
                    <p className="text-sm font-semibold text-white/62">{label}</p>
                    <p className="mt-3 font-display text-xl font-black text-white lg:text-2xl">{value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/46">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="py-14 pb-24 sm:py-16 sm:pb-28">
          <Reveal>
            <div className="group relative mx-auto overflow-hidden rounded-[2rem] p-px shadow-[0_28px_90px_rgba(0,0,0,.45),0_0_42px_rgba(10,196,255,.20),0_0_58px_rgba(108,76,255,.16)]">
              <div aria-hidden="true" className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(10,196,255,.95),rgba(10,196,255,.28)_30%,rgba(108,76,255,.76)_78%,rgba(255,255,255,.16))] opacity-95 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative min-h-[650px] overflow-hidden rounded-[calc(2rem-1px)] sm:min-h-[610px] lg:min-h-[38rem]">
                <div aria-hidden="true" className="absolute inset-0 z-0 bg-[linear-gradient(145deg,rgba(7,17,38,0.985),rgba(8,19,48,0.975)_45%,rgba(19,15,61,0.965)_100%)]" />
                <div aria-hidden="true" className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_0%,rgba(10,196,255,.18),transparent_28%),radial-gradient(circle_at_100%_100%,rgba(108,76,255,.20),transparent_40%)]" />
                <div aria-hidden="true" className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_0%,rgba(10,196,255,.30),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(108,76,255,.34),transparent_44%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div aria-hidden="true" className="absolute inset-x-0 -inset-y-32 z-10 translate-y-28 overflow-hidden transition-transform duration-1000 ease-out [mask-image:radial-gradient(ellipse_at_center,white,transparent)] motion-safe:group-hover:translate-y-16">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(10,196,255,.30),transparent_74%)]" />
                  <div className="absolute -left-1/2 top-1/2 aspect-[1/1.7] w-[200%] rounded-[50%] border border-[#0A0F26]/70 bg-[#070B1D] shadow-[0_-30px_90px_rgba(10,196,255,.18),0_-12px_36px_rgba(108,76,255,.10)]" />
                </div>

                <div aria-hidden="true" className="pointer-events-none absolute right-[2%] top-1/2 z-20 hidden h-[29rem] w-[29rem] -translate-y-1/2 items-center justify-center lg:flex xl:right-[5%] xl:h-[32rem] xl:w-[32rem]">
                  <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(10,196,255,.20),rgba(108,76,255,.16)_42%,transparent_68%)] blur-2xl" />
                  <HomeCTAVisual expression="wink" ringTilt="dramatic" />
                </div>

                <div className="absolute left-0 top-0 z-30 flex h-full w-full items-center px-6 py-12 sm:px-10 lg:px-16 xl:px-20">
                  <div className="max-w-[720px] text-left lg:max-w-[660px] xl:max-w-[720px]">
                    <div className="mb-6 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                      <span>YOU MADE IT THIS FAR</span>
                      <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-secondary to-transparent shadow-[0_0_12px_rgba(10,196,255,.8)]" />
                    </div>

                    <h2 className="home-display text-[clamp(2.25rem,9vw,4.35rem)] font-black uppercase leading-[0.96] tracking-[-0.045em] text-white sm:text-[clamp(2.85rem,5.35vw,4.35rem)]">
                      LET’S BUILD SOMETHING <br className="hidden sm:block" />
                      THAT{' '}
                      <span className="bg-gradient-to-r from-[#06C2FF] via-[#1BA6FF] to-[#8B5CFF] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(10,196,255,.24)]">
                        ACTUALLY WORKS.
                      </span>
                    </h2>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                      Great ideas deserve clean systems, smart automations, and a partner who gets it.
                    </p>

                    <div aria-hidden="true" className="pointer-events-none relative mt-9 flex h-40 w-full items-center justify-start overflow-hidden lg:hidden">
                      <div className="relative -ml-6 flex h-48 w-80 items-center justify-center scale-90 sm:ml-0 sm:scale-100">
                        <HomeCTAVisual expression="wink" ringTilt="dramatic" />
                      </div>
                    </div>

                    <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
                      <ButtonTransitionLink
                        href="#contact-form"
                        className="group/btn inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-cyan-100/25 bg-[linear-gradient(90deg,#08B8FF_0%,#256BFF_55%,#6C4CFF_100%)] px-7 font-display text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_34px_rgba(10,196,255,.28),0_0_26px_rgba(108,76,255,.20)] transition duration-300 hover:shadow-[0_16px_44px_rgba(10,196,255,.38),0_0_44px_rgba(108,76,255,.28)] motion-safe:hover:-translate-y-0.5 sm:w-auto"
                      >
                        START A PROJECT
                        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </ButtonTransitionLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </Container>
    </PageShell>
  );
}
