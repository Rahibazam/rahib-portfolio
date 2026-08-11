'use client';

import type { CSSProperties } from 'react';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Globe2,
  Mail,
  MessageCircleQuestion,
  Plus,
  ShieldCheck,
  Target,
  Zap
} from 'lucide-react';
import { HubSpotMark } from '@/components/brand/HubSpotMark';
import { Reveal } from '@/components/motion/Reveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { ButtonLink } from '@/components/ui/Button';
import { contactFaqTabs } from '@/data/contact';

type ContactFaqTab = (typeof contactFaqTabs)[number];
type ContactFaqTabId = ContactFaqTab['id'];
type ContactFaqAccent = ContactFaqTab['accent'];

const accentStyles = {
  orange: {
    text: 'text-[#F57722]',
    border: 'border-[#F57722]/70',
    tabActive:
      'border-secondary/70 bg-[linear-gradient(145deg,rgba(12,24,58,.78),rgba(10,13,40,.72))] text-white shadow-[0_0_24px_rgba(10,196,255,.18),inset_0_1px_0_rgba(255,255,255,.08)]',
    tabIcon: 'text-[#F57722] drop-shadow-[0_0_12px_rgba(245,119,34,.58)]',
    tabText: 'text-[#F57722] drop-shadow-[0_0_12px_rgba(245,119,34,.58)]',
    badge: 'border-[#F57722]/60 bg-[#F57722]/10 text-[#F57722] shadow-[0_0_18px_rgba(245,119,34,.22)]',
    color: '#F57722',
    iconFilter: 'drop-shadow(0 0 12px rgba(245,119,34,.58))',
    glow: 'rgba(245,119,34,.34)',
    softGlow: 'rgba(245,119,34,.14)',
    ring: 'border-[#F57722]/30'
  },
  cyan: {
    text: 'text-secondary',
    border: 'border-secondary/70',
    tabActive:
      'border-secondary/70 bg-[linear-gradient(145deg,rgba(12,24,58,.78),rgba(10,13,40,.72))] text-white shadow-[0_0_24px_rgba(10,196,255,.20),inset_0_1px_0_rgba(255,255,255,.08)]',
    tabIcon: 'text-secondary drop-shadow-[0_0_12px_rgba(10,196,255,.58)]',
    tabText: 'text-secondary drop-shadow-[0_0_12px_rgba(10,196,255,.58)]',
    badge: 'border-secondary/60 bg-secondary/10 text-secondary shadow-[0_0_18px_rgba(10,196,255,.22)]',
    color: '#0AC4FF',
    iconFilter: 'drop-shadow(0 0 12px rgba(10,196,255,.58))',
    glow: 'rgba(10,196,255,.34)',
    softGlow: 'rgba(10,196,255,.14)',
    ring: 'border-secondary/30'
  },
  violet: {
    text: 'text-[#8b6cff]',
    border: 'border-[#8b6cff]/70',
    tabActive:
      'border-secondary/70 bg-[linear-gradient(145deg,rgba(12,24,58,.78),rgba(10,13,40,.72))] text-white shadow-[0_0_24px_rgba(10,196,255,.18),inset_0_1px_0_rgba(255,255,255,.08)]',
    tabIcon: 'text-[#8b6cff] drop-shadow-[0_0_12px_rgba(139,108,255,.58)]',
    tabText: 'text-[#8b6cff] drop-shadow-[0_0_12px_rgba(139,108,255,.58)]',
    badge: 'border-[#8b6cff]/60 bg-[#8b6cff]/10 text-[#8b6cff] shadow-[0_0_18px_rgba(139,108,255,.22)]',
    color: '#8b6cff',
    iconFilter: 'drop-shadow(0 0 12px rgba(139,108,255,.58))',
    glow: 'rgba(139,108,255,.34)',
    softGlow: 'rgba(139,108,255,.14)',
    ring: 'border-[#8b6cff]/30'
  }
} as const satisfies Record<ContactFaqAccent, Record<string, string>>;

const featureStrip = [
  {
    title: 'No Fluff',
    description: 'Direct answers. No corporate speak.',
    Icon: Zap,
    accent: 'cyan'
  },
  {
    title: 'Real World',
    description: 'Experience from actual projects.',
    Icon: ShieldCheck,
    accent: 'violet'
  },
  {
    title: 'Technical',
    description: 'Deep enough to be useful, not overwhelming.',
    Icon: Code2,
    accent: 'violet'
  },
  {
    title: 'Fast Replies',
    description: 'You ask, I respond.',
    Icon: Target,
    accent: 'cyan'
  }
] as const;

function TabIcon({ tab, className, style }: { tab: ContactFaqTab; className?: string; style?: CSSProperties }) {
  if (tab.icon === 'hubspot') {
    return <HubSpotMark className={className} style={style} />;
  }

  if (tab.icon === 'web') {
    return <Globe2 aria-hidden="true" className={className} style={style} strokeWidth={1.65} />;
  }

  return <MessageCircleQuestion aria-hidden="true" className={className} style={style} strokeWidth={1.65} />;
}

function HeroTabIcon({ tab, className }: { tab: ContactFaqTab; className?: string }) {
  if (tab.icon === 'hubspot') {
    return <HubSpotMark className={className} />;
  }

  if (tab.icon === 'web') {
    return <Code2 aria-hidden="true" className={className} strokeWidth={1.55} />;
  }

  return <MessageCircleQuestion aria-hidden="true" className={className} strokeWidth={1.55} />;
}

function ContactFaqVisual({ tab }: { tab: ContactFaqTab }) {
  const accent = accentStyles[tab.accent];

  return (
    <div>
      <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(10,196,255,.12),transparent_46%),linear-gradient(145deg,rgba(7,15,38,.82),rgba(8,10,34,.76))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur-xl sm:p-6">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 48%, ${accent.softGlow}, transparent 38%)`
          }}
        />
        <div className="relative mx-auto grid aspect-square max-w-[19rem] place-items-center">
          <div
            aria-hidden="true"
            className={`about-cta-orbit absolute h-[78%] w-[92%] rounded-[50%] border ${accent.ring}`}
            style={{
              '--orbit-duration': '32s',
              '--orbit-start': '-12deg'
            } as CSSProperties}
          />
          <div
            aria-hidden="true"
            className={`about-cta-orbit about-cta-orbit-reverse absolute h-[58%] w-[94%] rounded-[50%] border ${accent.ring}`}
            style={{
              '--orbit-duration': '38s',
              '--orbit-start': '12deg'
            } as CSSProperties}
          />
          <div aria-hidden="true" className="absolute h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_18px_rgba(10,196,255,.85)] left-[18%] top-[58%]" />
          <div
            aria-hidden="true"
            className="absolute h-2.5 w-2.5 rounded-full shadow-[0_0_18px_currentColor] right-[18%] top-[28%]"
            style={{ color: accent.glow, backgroundColor: accent.glow }}
          />
          <div
            className={`relative grid h-28 w-28 place-items-center rounded-full border ${accent.border} bg-[#08152D]/86 shadow-[0_0_44px_rgba(10,196,255,.12),inset_0_1px_0_rgba(255,255,255,.12),inset_0_0_34px_currentColor] sm:h-32 sm:w-32`}
            style={{ color: accent.glow }}
          >
            <HeroTabIcon tab={tab} className={`h-16 w-16 ${accent.tabIcon} sm:h-20 sm:w-20`} />
          </div>
        </div>
      </div>

      <div className="mt-7 border-t border-white/10 pt-7">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-secondary">Still have a question?</p>
        <p
          className="mt-4 text-2xl font-semibold leading-9 text-white"
          style={{
            fontFamily:
              'Inter, Manrope, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
          }}
        >
          If it&apos;s not here, hit me up.
          <br />
          I don&apos;t bite (much).
        </p>
        <ButtonLink href="#contact-form" size="lg" className="mt-7 min-h-14 w-full rounded-lg px-7 text-xs sm:w-auto">
          <Mail aria-hidden="true" className="h-4 w-4" />
          Ask Me Anything
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </ButtonLink>
        <p className="mt-5 text-sm text-white/48">Usually replies within 12 hours.</p>
      </div>
    </div>
  );
}

export function ContactFaqSection() {
  const [activeTabId, setActiveTabId] = useState<ContactFaqTabId>(contactFaqTabs[0].id);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const reducedMotion = useReducedMotion();

  const activeTab = useMemo(
    () => contactFaqTabs.find((tab) => tab.id === activeTabId) ?? contactFaqTabs[0],
    [activeTabId]
  );

  function handleTabChange(tabId: ContactFaqTabId) {
    setActiveTabId(tabId);
    setActiveQuestionIndex(0);
  }

  return (
    <section className="relative pb-14 sm:pb-16">
      <Reveal>
        <div className="border-t border-secondary/25 pt-10">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.8fr] lg:items-start lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 shrink-0 rounded-[0.2rem] bg-secondary shadow-[0_0_18px_rgba(10,196,255,.75)]"
                />
                <h2 className="home-display text-[clamp(1.45rem,2.4vw,2.15rem)] font-black uppercase leading-tight tracking-[-0.025em] text-white">
                  Stuff you’re{' '}
                  <span className="bg-[linear-gradient(90deg,var(--secondary),#8b6cff)] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(10,196,255,.55)] [filter:drop-shadow(0_0_18px_rgba(10,196,255,.42))_drop-shadow(0_0_24px_rgba(139,108,255,.34))]">
                    Probably
                  </span>{' '}
                  Wondering
                </h2>
              </div>
            </div>
            <p className="max-w-[42rem] text-sm leading-6 text-white/66 sm:text-base sm:leading-7 lg:justify-self-end lg:pt-0">
              Straight answers to the usual suspects. No fluff, just the stuff you probably want to know.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="relative z-20 mt-8 -mb-px flex flex-wrap items-end gap-3" role="tablist" aria-label="Contact FAQ categories">
          {contactFaqTabs.map((tab) => {
            const isActive = activeTab.id === tab.id;
            const accent = accentStyles[tab.accent];

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`contact-faq-panel-${tab.id}`}
                id={`contact-faq-tab-${tab.id}`}
                onClick={() => handleTabChange(tab.id)}
                className={`group/chip inline-flex h-11 items-center gap-2.5 whitespace-nowrap rounded-t-xl rounded-b-none border border-b-0 border-secondary/35 bg-[linear-gradient(145deg,rgba(12,24,58,.78),rgba(10,13,40,.72))] px-4 font-display text-[0.74rem] font-black uppercase tracking-[0.16em] text-white/[0.86] shadow-[inset_0_1px_0_rgba(255,255,255,.10),0_0_18px_rgba(10,196,255,.08)] backdrop-blur-xl transition duration-300 hover:border-secondary/70 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_0_28px_rgba(10,196,255,.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B1D] sm:h-12 sm:rounded-t-2xl sm:px-5 sm:text-[0.82rem] ${
                  isActive
                    ? accent.tabActive
                    : ''
                }`}
              >
                <TabIcon
                  tab={tab}
                  className={`h-[1.05rem] w-[1.05rem] shrink-0 opacity-95 transition duration-300 group-hover/chip:opacity-100 ${accent.tabIcon}`}
                  style={{ color: accent.color, filter: accent.iconFilter }}
                />
                <span
                  className={`transition duration-300 ${isActive ? accent.tabText : ''}`}
                  style={isActive ? { color: accent.color, filter: accent.iconFilter } : undefined}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <GlassCard interactive={false} className="home-module-strong relative mt-0 overflow-hidden rounded-panel rounded-tl-none border-secondary/35 p-5 sm:p-6 lg:p-8 xl:p-9">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab.id}
              id={`contact-faq-panel-${activeTab.id}`}
              role="tabpanel"
              aria-labelledby={`contact-faq-tab-${activeTab.id}`}
              className="relative z-10 lg:grid lg:grid-cols-[0.42fr_1fr] lg:items-stretch lg:gap-8 xl:gap-10"
              initial={reducedMotion ? false : { opacity: 0, y: 10, filter: 'blur(8px)' }}
              animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8, filter: 'blur(6px)' }}
              transition={{ duration: reducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative z-10 lg:border-r lg:border-white/10 lg:pr-8">
                <ContactFaqVisual tab={activeTab} />
              </div>

              <div className="relative z-10 mt-8 lg:mt-0">
                <div className="mb-5 rounded-[1rem] border border-white/10 bg-white/[0.025] p-4 sm:p-5">
                  <p className={`font-mono text-xs font-bold uppercase tracking-[0.18em] ${accentStyles[activeTab.accent].text}`}>{activeTab.eyebrow}</p>
                  <h3 className="mt-2 font-display text-2xl font-black uppercase tracking-[-0.01em] text-white">{activeTab.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-white/58 sm:text-base">{activeTab.description}</p>
                </div>

                <div className="grid gap-4">
                  {activeTab.questions.map((faq, index) => {
                    const isActive = activeQuestionIndex === index;
                    const accent = accentStyles[activeTab.accent];

                    return (
                      <motion.article
                        layout={!reducedMotion}
                        transition={{ duration: reducedMotion ? 0 : 0.46, ease: [0.16, 1, 0.3, 1] }}
                        key={`${activeTab.id}-${faq.question}`}
                        className={`relative overflow-hidden rounded-[1rem] border transition duration-300 ${
                          isActive
                            ? `${accent.border} bg-[linear-gradient(135deg,rgba(10,196,255,.07),rgba(139,108,255,.08))] shadow-[0_0_28px_rgba(10,196,255,.10),inset_0_1px_0_rgba(255,255,255,.06)]`
                            : `${accent.ring} bg-white/[0.025]`
                        }`}
                      >
                        <button
                          type="button"
                          className="flex w-full items-start gap-4 p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 focus-visible:ring-inset sm:gap-5 sm:p-5"
                          aria-expanded={isActive}
                          onClick={() => setActiveQuestionIndex((current) => (current === index ? -1 : index))}
                        >
                          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.65rem] border font-mono text-sm font-bold ${isActive ? accent.badge : `${accent.ring} bg-white/[0.035] text-white/54`}`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className={`home-display flex min-h-10 items-center text-[1.25rem] font-black leading-[1.05] tracking-[-0.015em] sm:text-[1.55rem] lg:text-[1.65rem] ${isActive ? 'text-white' : 'text-white/82'}`}>{faq.question}</span>
                            <AnimatePresence initial={false}>
                              {isActive ? (
                                <motion.span
                                  key="answer"
                                  className="block overflow-hidden text-sm leading-7 text-white/62 sm:text-base sm:leading-8"
                                  initial={reducedMotion ? false : { height: 0, opacity: 0, y: -4 }}
                                  animate={reducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1, y: 0 }}
                                  exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0, y: -4 }}
                                  transition={{ duration: reducedMotion ? 0 : 0.46, ease: [0.16, 1, 0.3, 1] }}
                                >
                                  <span className="block pt-4">{faq.answer}</span>
                                </motion.span>
                              ) : null}
                            </AnimatePresence>
                          </span>
                          <motion.span
                            className={`mt-2.5 shrink-0 ${isActive ? accent.text : 'text-white/58'}`}
                            animate={reducedMotion ? { rotate: isActive ? 45 : 0 } : { rotate: isActive ? 45 : 0 }}
                            transition={{ duration: reducedMotion ? 0 : 0.46, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <Plus aria-hidden="true" className="h-5 w-5" />
                          </motion.span>
                        </button>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </GlassCard>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-9 grid gap-4 rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_5%_10%,rgba(10,196,255,0.18)_0,transparent_27rem),radial-gradient(circle_at_90%_85%,rgba(108,76,255,0.22)_0,transparent_31rem),linear-gradient(135deg,rgba(10,18,48,0.96),rgba(6,9,25,0.9))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.04)] sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:p-0">
          {featureStrip.map(({ title, description, Icon, accent }, index) => (
            <div key={title} className="flex gap-4 rounded-[1rem] p-4 lg:rounded-none lg:border-r lg:border-white/10 lg:p-6 lg:last:border-r-0">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.8rem] border ${accent === 'cyan' ? 'border-secondary/45 bg-secondary/10 text-secondary shadow-[0_0_18px_rgba(10,196,255,.14)]' : 'border-[#8b6cff]/45 bg-[#8b6cff]/10 text-[#8b6cff] shadow-[0_0_18px_rgba(139,108,255,.14)]'}`}>
                <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <p className={`font-display text-sm font-black uppercase tracking-[0.13em] ${index % 2 === 0 ? 'text-secondary' : 'text-[#8b6cff]'}`}>{title}</p>
                <p className="mt-1.5 text-sm leading-6 text-white/58">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
