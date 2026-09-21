import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { FileCheck2, Handshake, Mail, Scale, ShieldCheck } from 'lucide-react';
import { HeadingAccent } from '@/components/home/HomeSectionHeader';
import { PageShell } from '@/components/motion/PageShell';
import { Reveal } from '@/components/motion/Reveal';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { ButtonTransitionLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { getSocialMetadata } from '@/lib/socialMetadata';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Rahib Azam',
  description:
    'The terms governing use of Rahib Azam’s portfolio website, inquiries, portfolio materials, and professional service information.',
  alternates: {
    canonical: '/terms'
  },
  ...getSocialMetadata({
    title: 'Terms & Conditions | Rahib Azam',
    description: 'The terms governing use of Rahib Azam’s portfolio website, inquiries, portfolio materials, and professional service information.',
    path: '/terms'
  })
};

const contactEmail = siteConfig.email;

const sections = [
  { id: 'scope', label: 'Website purpose and scope' },
  { id: 'permitted-use', label: 'Permitted use' },
  { id: 'acceptable-use', label: 'Acceptable use' },
  { id: 'inquiries', label: 'Contact forms and inquiries' },
  { id: 'services', label: 'Services, quotes, and payments' },
  { id: 'intellectual-property', label: 'Intellectual property' },
  { id: 'portfolio-materials', label: 'Portfolio and third-party materials' },
  { id: 'platforms', label: 'Platforms, credentials, and links' },
  { id: 'availability', label: 'Availability and accuracy' },
  { id: 'advice-results', label: 'Advice and results' },
  { id: 'disclaimers', label: 'Disclaimers and liability' },
  { id: 'privacy', label: 'Privacy, children, and accounts' },
  { id: 'separate-agreements', label: 'Separate agreements' },
  { id: 'legal', label: 'Governing terms' },
  { id: 'changes-contact', label: 'Changes and contact' }
] as const;

const overview = [
  { label: 'Website role', value: 'Portfolio', Icon: FileCheck2 },
  { label: 'Form submission', value: 'Not a contract', Icon: Handshake },
  { label: 'Paid services', value: 'Separate terms', Icon: ShieldCheck },
  { label: 'Governing law', value: 'Bangladesh', Icon: Scale }
] as const;

function TermsSection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-secondary/20 py-10 sm:py-12">
      <div className="grid gap-5 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8">
        <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-secondary/75">
          Protocol / {number}
        </p>
        <div>
          <h2 className="site-h2-section">
            {title}
          </h2>
          <div className="mt-6 space-y-5 text-[0.98rem] leading-7 text-white/72 sm:text-base sm:leading-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function TermsList({ children }: { children: ReactNode }) {
  return <ul className="grid gap-3 pl-0">{children}</ul>;
}

function TermsItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden="true" className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 bg-secondary shadow-[0_0_10px_rgba(10,196,255,.7)]" />
      <span>{children}</span>
    </li>
  );
}

export default function TermsPage() {
  return (
    <PageShell>
      <Container className="mobile-page mobile-page-legal mobile-page-terms max-w-[108rem] px-5 pt-32 sm:px-8 sm:pt-36 lg:pt-40 xl:px-10">
        <Reveal variant="plain">
          <header className="relative overflow-hidden border-y border-secondary/25 px-0 py-14 sm:py-16 lg:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(10,196,255,.12),transparent_28rem),radial-gradient(circle_at_92%_85%,rgba(108,76,255,.14),transparent_32rem)]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.7),rgba(139,108,255,.5),transparent)]" />
            <div className="relative z-10 max-w-5xl">
              <h1 className="home-display text-[clamp(2.7rem,6.4vw,5.8rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white">
                Clear terms. No <HeadingAccent>fine-print fog.</HeadingAccent>
              </h1>
              <p className="mt-8 max-w-3xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                These Terms &amp; Conditions explain the rules that apply when you use this website, submit an inquiry, view portfolio materials, or consider working with me.
              </p>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-l border-secondary/45 pl-5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.15em] text-white/58">
                <span>Effective September 11, 2026</span>
                <span>Last updated September 11, 2026</span>
              </div>
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.08} variant="panel">
          <section aria-label="Terms and conditions at a glance" className="border-b border-secondary/25">
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
              <nav aria-label="Terms and conditions sections" className="mt-3 border-l border-secondary/25">
                {sections.map((section, index) => (
                  <a key={section.id} href={`#${section.id}`} className="group flex min-h-11 gap-3 border-b border-white/[0.055] py-3 pl-4 text-sm leading-5 text-white/64 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70">
                    <span className="font-mono text-[0.62rem] text-secondary/65">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.label}</span>
                  </a>
                ))}
              </nav>
            </details>
            <div className="max-sm:hidden">
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-secondary">Terms index</p>
              <nav aria-label="Terms and conditions sections" className="mt-5 border-l border-secondary/25">
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
              <p className="text-sm leading-6 text-white/52">Have a question about these terms?</p>
              <a className="premium-underline-link mt-2 inline-flex break-all text-sm font-semibold text-secondary" href={`mailto:${contactEmail}?subject=Terms%20and%20Conditions%20Question`}>
                {contactEmail}
              </a>
            </div>
          </aside>

          <article className="min-w-0">
            <TermsSection id="scope" number="01" title="Website purpose and scope">
              <p>
                This website is a personal professional portfolio operated by <strong className="font-semibold text-white">Rahib Azam</strong>, based in Dhaka, Bangladesh. In these Terms, “I,” “me,” and “my” refer to Rahib Azam, and “you” refers to a visitor or person using the website.
              </p>
              <p>
                The site presents information about my professional experience, CRM and HubSpot work, web implementation, automation, systems, projects, case studies, skills, services, background, and contact details. These Terms apply when you browse the site, submit an inquiry, access portfolio materials, or otherwise interact with its public content.
              </p>
              <p>
                By using the website, you agree that these Terms apply to that use. If you do not agree, please do not use the website. The website itself is not a client agreement, statement of work, proposal, employment agreement, consultancy agreement, or other contract governing paid services.
              </p>
            </TermsSection>

            <TermsSection id="permitted-use" number="02" title="Permitted use">
              <p>You may use the website for lawful personal, informational, and professional purposes. This includes:</p>
              <TermsList>
                <TermsItem>Browsing public pages and reading portfolio materials.</TermsItem>
                <TermsItem>Reviewing my experience, capabilities, project examples, and service information.</TermsItem>
                <TermsItem>Contacting me about legitimate projects, freelance work, consulting, employment, collaboration, or other professional opportunities.</TermsItem>
                <TermsItem>Sharing links to publicly available pages.</TermsItem>
              </TermsList>
              <p>You may not use the website in a way that damages it, interferes with other visitors, violates applicable law, or misuses its content, identity, or infrastructure.</p>
            </TermsSection>

            <TermsSection id="acceptable-use" number="03" title="Acceptable use">
              <p>When using the website, you agree not to:</p>
              <TermsList>
                <TermsItem>Attempt unauthorized access to the site, hosting environment, forms, administrative systems, or connected services.</TermsItem>
                <TermsItem>Introduce malware, malicious scripts, viruses, harmful code, or deliberately overload, disrupt, or bypass site protections.</TermsItem>
                <TermsItem>Abuse or spam forms; submit fraudulent inquiries; impersonate another person or organization; or provide deliberately false contact information.</TermsItem>
                <TermsItem>Access information that is not intentionally public or scrape content at a scale that interferes with normal operation.</TermsItem>
                <TermsItem>Republish substantial portions of the site as your own, use my work or branding to impersonate me, or clone the site for deceptive or unauthorized commercial purposes.</TermsItem>
              </TermsList>
              <p>Ordinary browser access, reasonable sharing, accessibility tools, link previews, and normal search-engine indexing are not prohibited.</p>
            </TermsSection>

            <TermsSection id="inquiries" number="04" title="Contact forms and inquiries">
              <p>
                Submitting a form or sending a message does not create a contract, client relationship, duty to accept work, duty to provide a quote, reservation of availability, or obligation to respond within a particular period. I may accept, decline, or choose not to respond to an inquiry.
              </p>
              <p>
                A general inquiry is not confidential unless we separately agree that it is. Do not submit confidential, proprietary, privileged, security-sensitive, or highly sensitive personal information through a general form unless we have agreed on an appropriate communication method.
              </p>
            </TermsSection>

            <TermsSection id="services" number="05" title="Professional services, quotes, and payments">
              <p>
                Service descriptions are general information and are not binding offers to provide a specific service at a particular price, scope, timeline, or availability. Projects vary according to requirements, complexity, access, existing systems, data quality, integrations, third-party limitations, deadlines, and client dependencies.
              </p>
              <p>
                Unless confirmed in an agreed written document, website pricing, examples, discussions, and estimates are not final quotations. An estimate may change if the scope or requirements change, unknown technical issues arise, required access is unavailable, third-party systems add work, or assumptions prove incorrect.
              </p>
              <p>
                Paid work may be invoiced through Payoneer, bank transfer, or another agreed method. The site is not an online store or checkout. Fees, currency, deposits, milestones, due dates, late payments, refunds, and cancellation rights are governed by the applicable proposal, invoice, statement of work, service agreement, and mandatory law. These website Terms do not create an automatic right to a refund.
              </p>
            </TermsSection>

            <TermsSection id="intellectual-property" number="06" title="Intellectual property">
              <p>
                Unless stated otherwise, original website material I created—including copy, portfolio descriptions, original graphics and illustrations, personal branding, interface designs, custom visual systems, animations, and custom source code—is owned by me or used under an applicable license. Third-party and open-source code remains subject to its own license and ownership terms.
              </p>
              <p>You may view the site for normal personal or professional evaluation and share links to public pages. Without permission, you may not:</p>
              <TermsList>
                <TermsItem>Reproduce or republish substantial portions of the site, sell or license my original content, or present my work as your own.</TermsItem>
                <TermsItem>Remove relevant attribution, use my branding to impersonate me, or clone the design or content for deceptive or unauthorized commercial purposes.</TermsItem>
              </TermsList>
              <p>Nothing in these Terms transfers any intellectual-property right to you except the limited permission to access and use the public site as described above.</p>
            </TermsSection>

            <TermsSection id="portfolio-materials" number="07" title="Portfolio, client, and third-party materials">
              <p>
                Client names, company names, logos, screenshots, trademarks, product names, interfaces, and other third-party materials remain the property of their respective owners. Their appearance does not mean I own those brands or that an organization endorses this website.
              </p>
              <p>
                Portfolio pages may condense complex work, simplify explanations, select representative details, contextualize or round metrics, and omit implementation details to protect confidentiality. Different organizations, systems, users, datasets, budgets, and circumstances produce different outcomes; a case study is not a promise that another project will achieve the same result.
              </p>
              <p>
                I take reasonable care not to intentionally publish confidential client information. If you reasonably believe public material contains confidential or unauthorized information, contact me at{' '}
                <a className="font-semibold text-secondary underline decoration-secondary/35 underline-offset-4 hover:text-cyan-100" href={`mailto:${contactEmail}?subject=Portfolio%20Material%20Concern`}>
                  {contactEmail}
                </a>{' '}
                so I can review it.
              </p>
            </TermsSection>

            <TermsSection id="platforms" number="08" title="Platforms, credentials, and external links">
              <p>
                Work shown here may involve HubSpot, Salesforce, WordPress, Google products, Payoneer, Zapier, and other CRM, CMS, automation, analytics, or web platforms. Mentioning a product does not mean I own, operate, represent, or speak for its provider, or claim a partnership, employment relationship, sponsorship, certification, or endorsement unless expressly stated.
              </p>
              <p>
                Certifications, badges, qualifications, and credentials should be read according to their stated status. They may expire, be renewed, be replaced or retired by the issuer, or reflect knowledge assessed at a particular time.
              </p>
              <p>
                External sites control their own content, availability, security, terms, and privacy practices. A link does not mean I endorse everything on the destination, and I am not responsible for a third-party site merely because it is linked here.
              </p>
            </TermsSection>

            <TermsSection id="availability" number="09" title="Website availability, accuracy, and changes">
              <p>
                I aim to keep the website useful and working, but continuous availability is not guaranteed. It may be updated, redesigned, temporarily unavailable, under maintenance, affected by software or provider outages, or changed without notice. I may modify, suspend, remove, or replace pages, projects, features, forms, downloads, integrations, or other content where reasonably necessary.
              </p>
              <p>
                Professional circumstances, technologies, certifications, services, pricing, availability, and third-party products change. I aim for accuracy but do not promise every statement will always be current or error-free. If a fact is important to a potential engagement, confirm it directly before relying on it.
              </p>
            </TermsSection>

            <TermsSection id="advice-results" number="10" title="No professional advice or guaranteed results">
              <p>
                Website content is not legal, accounting, tax, investment, financial, compliance, security, or regulatory advice. Technical descriptions involving CRM, analytics, privacy configuration, reporting, healthcare, legal organizations, or regulated environments are not substitutes for advice from an appropriately qualified professional.
              </p>
              <p>
                I do not guarantee that a system, website, CRM structure, automation, workflow, design, or technical approach will produce a specific result. Revenue, leads, conversion, search ranking, traffic, sales, pipeline growth, acquisition, email performance, advertising performance, CRM adoption, and business growth depend on factors outside my control. Any specific performance commitment must be agreed separately in writing.
              </p>
            </TermsSection>

            <TermsSection id="disclaimers" number="11" title="Website disclaimers and limitation of liability">
              <p>
                To the extent permitted by applicable law, the public website is provided on an “as is” and “as available” basis. I do not promise uninterrupted operation, identical rendering across every browser or device, permanent availability of links or downloads, or a complete absence of technical errors.
              </p>
              <p>
                To the extent permitted by law, I am not liable for indirect, incidental, consequential, special, or similar loss arising solely from use of, or inability to use, this public portfolio website. This may include loss connected to outdated public information, third-party websites, downtime, browser incompatibility, external service failures, or unauthorized misuse by another person.
              </p>
              <p>
                These limitations concern the public website, not paid professional services governed by a separate agreement. Nothing in these Terms excludes or limits liability that cannot lawfully be excluded, including liability arising from fraud, fraudulent misrepresentation, gross negligence, or death or personal injury where applicable law prohibits limitation.
              </p>
            </TermsSection>

            <TermsSection id="privacy" number="12" title="Privacy, children, and user accounts">
              <p>
                Use of the website is also subject to the{' '}
                <TransitionLink className="font-semibold text-secondary underline decoration-secondary/35 underline-offset-4 hover:text-cyan-100" href="/privacy">
                  Privacy Policy
                </TransitionLink>
                , which explains collection, providers, cookies, retention, payments, international processing, and privacy rights. I do not sell personal information collected through this website.
              </p>
              <p>
                This professional portfolio is not directed to children under 18, and I do not knowingly solicit professional inquiries from them. If a child submits information in circumstances where it should not have been collected, I will handle it under the Privacy Policy and applicable law.
              </p>
              <p>
                The website does not currently provide ordinary visitors with accounts, customer dashboards, stored payment wallets, public profiles, community forums, or user-generated-content features. These Terms may be updated before such features are introduced.
              </p>
            </TermsSection>

            <TermsSection id="separate-agreements" number="13" title="Separate professional agreements">
              <p>
                These website Terms do not replace separately agreed contractual terms. If you become a client, contractor, employer, collaborator, or other professional counterparty, a separate agreement may address scope, deliverables, acceptance, revisions, fees, payment, confidentiality, data protection, intellectual-property ownership, support, termination, liability, governing law, and dispute resolution.
              </p>
              <p>Where a valid separate agreement conflicts with these website Terms, that agreement controls for the services and subject matter it governs.</p>
            </TermsSection>

            <TermsSection id="legal" number="14" title="Governing law, severability, and no waiver">
              <p>
                Unless mandatory law requires otherwise, these Terms and use of the website are governed by the laws of Bangladesh. Mandatory consumer, privacy, and other statutory protections remain unaffected. A professional engagement may use different governing-law or dispute-resolution terms stated in its separate agreement.
              </p>
              <p>
                If a competent authority finds a provision invalid, illegal, or unenforceable, it should be limited only as much as necessary, and the remaining provisions continue to apply where legally possible. If I do not enforce a provision immediately, that does not permanently waive it; a waiver in one situation does not automatically apply to another.
              </p>
              <p>These Terms, together with the Privacy Policy and any policy expressly incorporated here, are the general terms for the public website. They do not replace a separate professional agreement.</p>
            </TermsSection>

            <TermsSection id="changes-contact" number="15" title="Changes and contact">
              <p>
                I may update these Terms when website features, services, payment methods, providers, business practices, or applicable laws change. The “Last updated” date will identify the current version. Updated Terms apply to later use of the website to the extent permitted by law.
              </p>
              <p>
                Questions about these Terms can be sent to{' '}
                <a className="font-semibold text-secondary underline decoration-secondary/35 underline-offset-4 hover:text-cyan-100" href={`mailto:${contactEmail}?subject=Terms%20and%20Conditions%20Question`}>
                  {contactEmail}
                </a>
                . Terms for an actual project or professional engagement should be discussed and agreed separately.
              </p>
              <div className="mt-8 border-l border-secondary/50 bg-[linear-gradient(90deg,rgba(10,196,255,.08),transparent)] px-5 py-4 text-white/82">
                <p className="font-semibold text-white">The short version</p>
                <p className="mt-2">Browse the portfolio, review the work, share public links, and contact me about legitimate opportunities. Do not misuse the site, impersonate my work, attack its infrastructure, or spam its forms. A message does not make you a client, and paid work needs separate agreed terms.</p>
              </div>
            </TermsSection>

            <Reveal variant="plain">
              <div className="mt-10 flex flex-col items-start justify-between gap-6 border-y border-secondary/25 py-8 sm:flex-row sm:items-center">
                <div className="flex items-start gap-4">
                  <Mail aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-secondary" />
                  <div>
                    <p className="font-display text-lg font-bold uppercase text-white">Clear scope starts with a real agreement.</p>
                    <p className="mt-2 text-sm leading-6 text-white/58">Website information is general. Project-specific responsibilities belong in writing.</p>
                  </div>
                </div>
                <ButtonTransitionLink href="/contact" variant="secondary" className="shrink-0">
                  Discuss a project <Handshake aria-hidden="true" className="h-4 w-4" />
                </ButtonTransitionLink>
              </div>
            </Reveal>
          </article>
        </div>
      </Container>
    </PageShell>
  );
}
