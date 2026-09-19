import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ArrowUpRight, Clock3, Database, Mail, ShieldCheck } from 'lucide-react';
import { HeadingAccent } from '@/components/home/HomeSectionHeader';
import { PageShell } from '@/components/motion/PageShell';
import { Reveal } from '@/components/motion/Reveal';
import { ButtonTransitionLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | Rahib Azam',
  description:
    'How Rahib Azam collects, uses, stores, and protects personal information submitted through this website.',
  alternates: {
    canonical: '/privacy'
  }
};

const privacyEmail = siteConfig.email;

const sections = [
  { id: 'scope', label: 'Who controls your information' },
  { id: 'information', label: 'Information collected' },
  { id: 'use-and-bases', label: 'How and why it is used' },
  { id: 'providers', label: 'Service providers' },
  { id: 'cookies', label: 'Cookies and analytics' },
  { id: 'retention', label: 'Retention' },
  { id: 'rights', label: 'Your privacy rights' },
  { id: 'transfers', label: 'International transfers' },
  { id: 'marketing', label: 'Email, advertising, and sales' },
  { id: 'payments', label: 'Payments' },
  { id: 'security', label: 'Security and children' },
  { id: 'third-parties', label: 'Third-party links and social media' },
  { id: 'changes', label: 'Changes and contact' }
] as const;

const overview = [
  { label: 'Data sales', value: 'Never', Icon: ShieldCheck },
  { label: 'Advertising profile', value: 'Not created', Icon: Database },
  { label: 'Automated decisions', value: 'None', Icon: ArrowUpRight },
  { label: 'Privacy requests', value: 'Available', Icon: Mail }
] as const;

function PolicySection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-secondary/20 py-10 sm:py-12">
      <div className="grid min-w-0 gap-5 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8">
        <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-secondary/75">
          Protocol / {number}
        </p>
        <div className="min-w-0">
          <h2 className="site-h2-section">
            {title}
          </h2>
          <div className="policy-copy mt-6 space-y-5 text-[0.98rem] leading-7 text-white/72 sm:text-base sm:leading-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function BulletList({ children }: { children: ReactNode }) {
  return <ul className="grid gap-3 pl-0">{children}</ul>;
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden="true" className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 bg-secondary shadow-[0_0_10px_rgba(10,196,255,.7)]" />
      <span>{children}</span>
    </li>
  );
}

export default function PrivacyPage() {
  return (
    <PageShell>
      <Container className="mobile-page mobile-page-legal mobile-page-privacy max-w-[108rem] px-5 pt-32 sm:px-8 sm:pt-36 lg:pt-40 xl:px-10">
        <Reveal variant="plain">
          <header className="relative overflow-hidden border-y border-secondary/25 px-0 py-14 sm:py-16 lg:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(10,196,255,.12),transparent_28rem),radial-gradient(circle_at_92%_85%,rgba(108,76,255,.14),transparent_32rem)]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.7),rgba(139,108,255,.5),transparent)]" />
            <div className="relative z-10 max-w-5xl">
              <h1 className="home-display text-[clamp(2.7rem,6.4vw,5.8rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white">
                Privacy, without the <HeadingAccent>black box.</HeadingAccent>
              </h1>
              <p className="mt-8 max-w-3xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                This policy explains what information I collect through this website, why I use it, which services may process it, how long I keep it, and what you can ask me to do with it.
              </p>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-l border-secondary/45 pl-5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.15em] text-white/58">
                <span>Effective September 11, 2026</span>
                <span>Last updated September 19, 2026</span>
              </div>
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.08} variant="panel">
          <section aria-label="Privacy policy at a glance" className="border-b border-secondary/25">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {overview.map(({ label, value, Icon }, index) => (
                <div
                  key={label}
                  className={`flex min-h-32 items-center gap-4 px-0 py-6 sm:px-6 lg:min-h-36 ${
                    index === 1
                      ? 'border-t border-secondary/15 sm:border-l sm:border-t-0'
                      : index === 2
                        ? 'border-t border-secondary/15 lg:border-l lg:border-t-0'
                        : index === 3
                          ? 'border-t border-secondary/15 sm:border-l lg:border-t-0'
                          : ''
                  }`}
                >
                  <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-secondary drop-shadow-[0_0_12px_rgba(10,196,255,.55)]" strokeWidth={1.7} />
                  <div>
                    <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/42">{label}</p>
                    <p className="mt-2 font-display text-lg font-bold uppercase text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <div className="grid gap-12 py-14 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-start lg:gap-16 lg:py-20 xl:grid-cols-[20rem_minmax(0,1fr)] xl:gap-20">
          <aside className="lg:sticky lg:top-32">
            <details className="legal-mobile-index sm:hidden">
              <summary>Jump to a section</summary>
              <nav aria-label="Privacy policy sections" className="mt-3 border-l border-secondary/25">
                {sections.map((section, index) => (
                  <a key={section.id} href={`#${section.id}`} className="group flex min-h-11 gap-3 border-b border-white/[0.055] py-3 pl-4 text-sm leading-5 text-white/64 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70">
                    <span className="font-mono text-[0.62rem] text-secondary/65">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.label}</span>
                  </a>
                ))}
              </nav>
            </details>
            <div className="max-sm:hidden">
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-secondary">Policy index</p>
              <nav aria-label="Privacy policy sections" className="mt-5 border-l border-secondary/25">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex gap-3 border-b border-white/[0.055] py-3 pl-4 text-sm leading-5 text-white/52 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70"
                  >
                    <span className="font-mono text-[0.62rem] text-secondary/55 transition-colors group-hover:text-secondary">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.label}</span>
                  </a>
                ))}
              </nav>
            </div>
            <div className="mt-8 border-l border-purple/45 pl-4">
              <p className="text-sm leading-6 text-white/52">Need to exercise a privacy right?</p>
              <a className="premium-underline-link mt-2 inline-flex break-all text-sm font-semibold text-secondary" href={`mailto:${privacyEmail}?subject=Privacy%20Request`}>
                {privacyEmail}
              </a>
            </div>
          </aside>

          <article className="min-w-0">
            <PolicySection id="scope" number="01" title="Who controls your information">
              <p>
                This website is operated by <strong className="font-semibold text-white">Rahib Azam</strong>, based in Dhaka, Bangladesh. In this policy, “I,” “me,” and “my” refer to Rahib Azam, and “you” refers to a visitor, person making an inquiry, or client whose relationship began through this website.
              </p>
              <p>
                I determine how personal information submitted through the website is used for my professional activities and am the controller of that information where applicable. Service providers may also process information on my behalf or independently under their own terms.
              </p>
              <p>This policy covers information processed through the website and inquiries or professional relationships that originate through it.</p>
            </PolicySection>

            <PolicySection id="information" number="02" title="Information I collect">
              <p>I may collect the following information when you choose to provide it:</p>
              <BulletList>
                <Bullet>Identity and contact details, such as your name, email address, phone number, company, and preferred contact method.</Bullet>
                <Bullet>Project details, including the service you need, requirements, budget range, timeline, availability, and problems you want help solving.</Bullet>
                <Bullet>Messages, follow-up correspondence, proposals, scheduling details, statements of work, attachments, invoices, and other records connected to an inquiry or engagement.</Bullet>
              </BulletList>
              <p>Please do not submit sensitive personal information that is not necessary for me to understand or respond to your inquiry.</p>
              <p>
                When the relevant services are enabled, technical information may be collected automatically, including an IP address, browser and device information, operating system, screen characteristics, approximate location, referral source, pages viewed, interactions, timestamps, session data, cookie identifiers, analytics identifiers, and information needed to operate or secure the website.
              </p>
            </PolicySection>

            <PolicySection id="use-and-bases" number="03" title="How and why I use information">
              <p>I use personal information only for defined professional, operational, analytical, security, and legal purposes, including to:</p>
              <BulletList>
                <Bullet>Read and respond to messages, evaluate potential work, discuss scope, availability, pricing, and prepare proposals.</Bullet>
                <Bullet>Provide agreed services, communicate about a project, exchange materials, maintain records, handle invoices or payments, and resolve questions or disputes.</Bullet>
                <Bullet>Maintain accurate CRM and professional relationship records.</Bullet>
                <Bullet>Operate, secure, diagnose, and improve the website and understand aggregate usage when analytics is enabled.</Bullet>
                <Bullet>Comply with legal, tax, accounting, fraud-prevention, and record-keeping obligations.</Bullet>
              </BulletList>
              <p>
                For people in the European Economic Area or United Kingdom, the legal basis depends on the context: consent for optional tracking or marketing; steps requested before entering a contract; performance of a contract; compliance with legal obligations; or legitimate interests such as responding to professional inquiries, maintaining business records, securing the site, and improving its operation. I do not rely on legitimate interests where your rights and freedoms override those interests.
              </p>
            </PolicySection>

            <PolicySection id="providers" number="04" title="Service providers and disclosures">
              <p>Depending on which site and business features are active, information may be processed by:</p>
              <div className="divide-y divide-white/10 border-y border-secondary/20">
                {[
                  ['Vercel', 'Website hosting, delivery, security infrastructure, privacy-focused Web Analytics, and Speed Insights performance measurement.'],
                  ['HubSpot', 'Forms, CRM, contact management, inquiry history, and—when enabled—website analytics or visitor tracking.'],
                  ['Google services', 'Email delivery and, if introduced, Google Analytics 4 for website measurement.'],
                  ['Payoneer', 'Payment processing after a project or professional engagement is agreed.']
                ].map(([name, purpose]) => (
                  <div key={name} className="grid gap-2 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
                    <strong className="font-display text-sm uppercase tracking-[0.04em] text-white">{name}</strong>
                    <span>{purpose}</span>
                  </div>
                ))}
              </div>
              <p>
                I may also disclose information to professional advisers, public authorities, or other parties where reasonably necessary to comply with law, protect rights or security, establish or defend legal claims, or complete an authorized business transaction. I do not permit service providers to use personal information for unrelated purposes merely because they provide a service to me.
              </p>
            </PolicySection>

            <PolicySection id="cookies" number="05" title="Cookies, HubSpot, and analytics">
              <p>
                Cookies and similar technologies can remember preferences, keep a website secure, measure performance, and help explain how visitors use a site. Strictly necessary technologies may operate without consent where the law allows. Non-essential analytics or tracking technologies will be presented through a consent choice where required, and should not load before that choice is made.
              </p>
              <p>
                HubSpot may process form submissions, contact details, pages viewed, referral information, device information, and interaction data when its relevant features are enabled. Google Analytics 4 is not currently represented as an active site service; if it is introduced, this policy and the site’s cookie controls will be updated to identify its use and retention settings.
              </p>
              <p>
                Vercel Web Analytics and Speed Insights measure page visits and real-user performance signals such as page-load responsiveness and visual stability. Vercel may receive information such as the page visited, referral source, browser or device category, approximate region, and performance measurements to provide aggregated site and Core Web Vitals reporting.
              </p>
              <p>
                You can also restrict cookies through your browser. Blocking necessary technologies may affect site functionality. A persistent Cookie Settings control will be provided if non-essential tracking is activated.
              </p>
            </PolicySection>

            <PolicySection id="retention" number="06" title="How long I keep information">
              <p>I keep personal information only for as long as reasonably necessary for the purpose for which it was collected, including legal, accounting, security, and dispute-resolution needs. My default retention targets are:</p>
              <div role="region" aria-label="Default data retention periods" tabIndex={0} className="w-full max-w-full overflow-x-auto overscroll-x-contain border-y border-secondary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70">
                <table className="w-full min-w-[38rem] border-collapse text-left text-sm leading-6">
                  <thead className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-secondary">
                    <tr>
                      <th className="py-4 pr-6 font-bold">Record</th>
                      <th className="py-4 font-bold">Default period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr><td className="py-4 pr-6 text-white/82">Inquiries that do not become projects</td><td className="py-4">Up to 24 months after the last interaction</td></tr>
                    <tr><td className="py-4 pr-6 text-white/82">Client, project, contract, invoice, and tax records</td><td className="py-4">Generally 7 years after the engagement ends, or longer if law requires</td></tr>
                    <tr><td className="py-4 pr-6 text-white/82">General CRM relationship records</td><td className="py-4">Up to 3 years after the last meaningful interaction</td></tr>
                    <tr><td className="py-4 pr-6 text-white/82">Security and diagnostic logs</td><td className="py-4">Generally up to 12 months</td></tr>
                    <tr><td className="py-4 pr-6 text-white/82">Analytics information</td><td className="py-4">According to the disclosed provider setting; targeted not to exceed 14 months</td></tr>
                    <tr><td className="py-4 pr-6 text-white/82">Consent and opt-out records</td><td className="py-4">As long as needed to demonstrate or honor your choice</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Information may be deleted sooner when it is no longer needed or when a valid request applies. It may be retained longer where necessary to meet a legal obligation, preserve evidence, prevent fraud, or establish, exercise, or defend legal claims.</p>
            </PolicySection>

            <PolicySection id="rights" number="07" title="Your privacy rights">
              <p>Depending on where you live and the law that applies, you may have the right to request:</p>
              <BulletList>
                <Bullet>Confirmation of whether I process your personal information and access to a copy.</Bullet>
                <Bullet>Correction of incomplete or inaccurate information.</Bullet>
                <Bullet>Deletion, restriction, or objection to certain processing.</Bullet>
                <Bullet>Portability of information you provided in a usable format.</Bullet>
                <Bullet>Withdrawal of consent at any time, without affecting earlier lawful processing.</Bullet>
                <Bullet>A complaint to the data-protection authority where you live or work.</Bullet>
              </BulletList>
              <p>
                These rights may be subject to legal exceptions. I may ask for reasonable information to verify your identity and will respond within the timeframe required by applicable law. I do not charge for ordinary requests unless the law permits a fee for requests that are manifestly unfounded, excessive, or repetitive.
              </p>
              <p>
                Where applicable, these protections include rights under the GDPR, UK GDPR, relevant Bangladesh privacy law, and qualifying U.S. state privacy laws. California residents may request the categories and specific pieces of personal information collected, correction, deletion, and information about disclosures. I do not sell or share personal information for cross-context behavioral advertising and will not discriminate against you for exercising a privacy right.
              </p>
            </PolicySection>

            <PolicySection id="transfers" number="08" title="International data transfers">
              <p>
                I operate from Bangladesh. If you contact me from another country, your information may be received and processed in Bangladesh and in countries where service providers operate. Those countries may have different privacy protections from your own.
              </p>
              <p>
                Where transfer restrictions apply, I and relevant providers will use an appropriate legal mechanism or safeguard, such as approved contractual clauses, an adequacy decision, or another mechanism permitted by law. You may ask for more information about safeguards relevant to your data.
              </p>
            </PolicySection>

            <PolicySection id="marketing" number="09" title="Email, advertising, and data sales">
              <p>
                Submitting an inquiry does not automatically subscribe you to marketing. I may reply to your message, discuss a requested project, send scheduling information, or continue a professional conversation. I am not currently using the website to operate an automated marketing list.
              </p>
              <p>
                If marketing email is introduced, it will use an appropriate legal basis, identify the sender, include a valid postal address and an easy unsubscribe method where required, and honor opt-out requests within the applicable timeframe. Service and relationship messages may still be sent when needed to perform an agreement or respond to you.
              </p>
              <p>I do not currently use visitor data for advertising or remarketing, and I do not sell personal information. This policy and the site’s controls will be updated before those practices change.</p>
            </PolicySection>

            <PolicySection id="payments" number="10" title="Payments">
              <p>
                If a project is agreed, payment may be handled through Payoneer. Payment details submitted through Payoneer are processed by Payoneer under its own terms and privacy practices; I do not receive or store your full card or bank credentials.
              </p>
              <p>I may receive transaction details needed for business and accounting, such as your name, company, currency, amount, transaction reference, payment status, date, invoice information, and other information connected to the transaction.</p>
            </PolicySection>

            <PolicySection id="security" number="11" title="Security, children, and automated decisions">
              <p>
                I use reasonable technical and organizational safeguards intended to reduce the risk of unauthorized access, disclosure, alteration, loss, or misuse. No online service or storage system can be guaranteed completely secure. If a qualifying incident occurs, I will take appropriate containment and notification steps required by law.
              </p>
              <p>
                This professional portfolio is not directed to children under 18, and I do not knowingly collect personal information from children through it. If you believe a child has submitted information, please contact me so I can review and delete it where appropriate.
              </p>
              <p>I do not use personal information collected through this website to make decisions that produce legal or similarly significant effects solely through automated processing.</p>
            </PolicySection>

            <PolicySection id="third-parties" number="12" title="Third-party links and social media">
              <p>
                The website may link to social networks, client sites, project resources, scheduling services, or other third-party websites. Those services determine their own data practices. Their privacy policies apply when you visit or interact with them, and this policy does not control what they collect or how they use it.
              </p>
              <p>Information you post publicly or send through a third-party social platform is also subject to that platform’s settings and privacy practices.</p>
            </PolicySection>

            <PolicySection id="changes" number="13" title="Changes and privacy requests">
              <p>
                I may update this policy when the website, providers, legal obligations, or processing practices change. The “Last updated” date will identify the current version. Material changes will be presented clearly where appropriate rather than treated as though they had always been part of this policy.
              </p>
              <p>
                To ask a question or request access, correction, deletion, restriction, portability, or another privacy action, email{' '}
                <a className="font-semibold text-secondary underline decoration-secondary/35 underline-offset-4 hover:text-cyan-100" href={`mailto:${privacyEmail}?subject=Privacy%20Request`}>
                  {privacyEmail}
                </a>{' '}
                with the subject line “Privacy Request.” Please include enough information for me to understand the request and identify the relevant records, but do not send unnecessary sensitive information.
              </p>
              <div className="mt-8 border-l border-secondary/50 bg-[linear-gradient(90deg,rgba(10,196,255,.08),transparent)] px-5 py-4 text-white/82">
                <p className="font-semibold text-white">The short version</p>
                <p className="mt-2">I limit collection to what supports the website, inquiries, and professional work. I do not sell your information. If you want to know what I hold or ask me to delete it, contact me.</p>
              </div>
            </PolicySection>

            <Reveal variant="plain">
              <div className="mt-10 flex flex-col items-start justify-between gap-6 border-y border-secondary/25 py-8 sm:flex-row sm:items-center">
                <div className="flex items-start gap-4">
                  <Clock3 aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-secondary" />
                  <div>
                    <p className="font-display text-lg font-bold uppercase text-white">A privacy request should be straightforward.</p>
                    <p className="mt-2 text-sm leading-6 text-white/58">Send the request and I’ll respond within the period required by applicable law.</p>
                  </div>
                </div>
                <ButtonTransitionLink href="/contact" variant="secondary" className="shrink-0">
                  Contact Rahib <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </ButtonTransitionLink>
              </div>
            </Reveal>
          </article>
        </div>
      </Container>
    </PageShell>
  );
}
