import type { SVGProps } from 'react';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import { BrandMark } from '@/components/brand/BrandMark';
import { Container } from '@/components/ui/Container';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { FooterContactForm } from '@/components/layout/FooterContactForm';
import { navItems, siteConfig } from '@/data/site';

function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5Zm4.813 15.141a.653.653 0 0 1-.897.217c-2.456-1.5-5.55-1.84-9.19-1.008a.653.653 0 1 1-.291-1.274c3.984-.91 7.404-.518 10.16 1.166.308.188.405.59.218.899Zm1.284-2.858a.817.817 0 0 1-1.122.27c-2.812-1.728-7.1-2.23-10.424-1.22a.817.817 0 0 1-.475-1.563c3.797-1.153 8.522-.594 11.75 1.39.384.236.505.738.271 1.123Zm.11-2.975c-3.373-2.003-8.94-2.188-12.158-1.21a.98.98 0 1 1-.57-1.875c3.694-1.123 9.842-.906 13.728 1.4a.98.98 0 0 1-1 1.685Z" />
    </svg>
  );
}

export function Footer() {
  const socialIcons = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rahib-azam/', Icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/Rahibazam/', Icon: Github },
    { label: 'Instagram', href: 'https://www.instagram.com/rahib.1x1/', Icon: Instagram },
    { label: 'Facebook', href: 'https://www.facebook.com/rahib.1x1/', Icon: Facebook },
    { label: 'Spotify', href: 'https://open.spotify.com/user/317hi3rvqhayq7j2dt2iwkuyua6u?si=01921a9d93ab4e5d', Icon: SpotifyIcon }
  ];

  const systemLinks = [
    { label: 'CRM Architecture', href: '/portfolio?tags=crm#project-grid' },
    { label: 'HubSpot Automation', href: '/portfolio?tags=hubspot,automation#project-grid' },
    { label: 'Web Experiences', href: '/portfolio?tags=web-cms,landing-pages#project-grid' },
    { label: 'Data & Reporting', href: '/portfolio?tags=reporting,data-cleanup#project-grid' }
  ];

  return (
    <footer className="relative z-10 pb-12 pt-10">
      <Container className="max-w-[108rem] px-5 sm:px-8 xl:px-10">
        <div className="relative isolate overflow-hidden rounded-panel p-px shadow-[0_26px_90px_rgba(0,0,0,.42),0_0_34px_rgba(10,196,255,.18),0_0_54px_rgba(139,108,255,.16)] before:absolute before:-inset-2 before:-z-10 before:rounded-[inherit] before:bg-[linear-gradient(90deg,var(--secondary),#8b6cff)] before:opacity-30 before:blur-2xl after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:bg-[linear-gradient(90deg,var(--secondary),#8b6cff)] after:opacity-55">
          <div className="home-module-strong relative overflow-hidden rounded-[inherit] border-secondary/35 p-7 sm:p-10 lg:p-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.72fr_0.92fr_1.2fr] lg:gap-0">
            <div>
              <div className="flex items-center gap-4">
                <BrandMark className="h-16 w-16 drop-shadow-[0_0_18px_rgba(10,196,255,0.45)]" />
                <div>
                  <span className="text-lg font-black uppercase tracking-[0.15em] text-white">Rahib <span className="text-secondary">Azam</span></span>
                  <span aria-hidden="true" className="mt-3 block h-1.5 w-44 max-w-full -rotate-1 rounded-full bg-[linear-gradient(90deg,var(--secondary),#8b6cff,transparent)] shadow-[0_0_18px_rgba(10,196,255,.55),0_0_28px_rgba(139,108,255,.42)]" />
                </div>
              </div>
              <p className="mt-6 max-w-md text-base leading-7 text-white/62">I build and streamline CRM and digital systems that help businesses automate, scale, and achieve more.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialIcons.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Rahib Azam on ${label}`}
                    className="group grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-secondary/30 bg-secondary/[0.07] text-secondary shadow-[0_0_18px_rgba(10,196,255,0.1)] transition duration-300 ease-premium hover:-translate-y-0.5 hover:border-secondary/65 hover:bg-secondary/[0.12] hover:text-cyan-100 hover:shadow-[0_0_28px_rgba(10,196,255,0.32)] active:translate-y-0 active:scale-95"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 transition duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(10,196,255,0.9)]" />
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:border-l lg:border-white/10 lg:px-10">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-secondary">Navigation</p>
              <div className="mt-5 grid gap-3.5">
              {navItems.map((item) => (
                <TransitionLink key={item.href} href={item.href} className="premium-underline-link w-fit py-1 text-sm font-semibold uppercase tracking-[0.1em] text-white/58">
                  {item.label}
                </TransitionLink>
              ))}
              </div>
            </div>
            <div className="lg:border-l lg:border-white/10 lg:px-10">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-secondary">Systems</p>
              <div className="mt-5 grid gap-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-white/52">
                {systemLinks.map((item) => (
                  <TransitionLink key={item.href} href={item.href} className="premium-underline-link w-fit py-1">
                    {item.label}
                  </TransitionLink>
                ))}
              </div>
            </div>
            <div className="lg:border-l lg:border-white/10 lg:pl-10">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-secondary">Let’s talk</p>
              <p className="mt-5 text-base leading-7 text-white/62">Have a project in mind? Let’s build something outstanding.</p>
              <FooterContactForm />
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs uppercase tracking-[0.1em] text-white/42 sm:flex-row sm:justify-between">
            <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
            <span>Built with care, systems, and coffee.</span>
          </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
