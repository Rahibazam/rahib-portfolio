import { Clock3, Coffee, Gauge, Linkedin, Mail, Music2, Rocket, ShieldCheck, TimerReset, Wifi, Zap, type LucideIcon } from 'lucide-react';

export const contactQuickInfo = [
  {
    label: 'Email',
    value: 'rahib.azam180@gmail.com',
    note: 'I reply to every email.',
    icon: Mail,
    accent: 'cyan'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rahib-azam',
    note: 'Let’s connect professionally.',
    icon: Linkedin,
    accent: 'blue'
  },
  {
    label: 'Timezone',
    value: 'Bangladesh Standard Time (BST)',
    note: 'GMT +6',
    icon: Clock3,
    accent: 'violet'
  }
] as const satisfies ReadonlyArray<{
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
  accent: 'cyan' | 'blue' | 'violet';
}>;

export const contactSocialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rahib-azam',
    ariaLabel: 'Open Rahib Azam on LinkedIn',
    icon: 'linkedin'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Rahibazam',
    ariaLabel: 'Open Rahib Azam on GitHub',
    icon: 'github'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rahib.1x1/',
    ariaLabel: 'Open Rahib Azam on Instagram',
    icon: 'instagram'
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/rahib.ahmed.165/',
    ariaLabel: 'Open Rahib Azam on Facebook',
    icon: 'facebook'
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/user/317hi3rvqhayq7j2dt2iwkuyua6u?si=b74add915b924b09',
    ariaLabel: 'Open Rahib Azam on Spotify',
    icon: 'spotify'
  }
] as const satisfies ReadonlyArray<{
  label: string;
  href: string;
  ariaLabel: string;
  icon: 'linkedin' | 'github' | 'instagram' | 'facebook' | 'spotify';
}>;

export const contactFaqTabs = [
  {
    id: 'hubspot',
    label: 'HubSpot',
    icon: 'hubspot',
    accent: 'orange',
    eyebrow: 'Orange ecosystem, slightly less cursed.',
    title: 'HubSpot Systems',
    description:
      'Workflows, CMS pages, reporting, CRM cleanup, and the little portal gremlins that need taming.',
    questions: [
      {
        question: 'What areas of HubSpot do you work in?',
        answer:
          'Marketing Hub and CMS Hub — I do workflows, emails, landing pages, reports, dashboards, and integrations. Basically, if it’s in the orange ecosystem and not behind an Ops paywall, I’ve probably wrangled it.'
      },
      {
        question: 'Can you build custom HubSpot pages from scratch?',
        answer:
          'Yes. I can build HubSpot CMS pages, landing pages, modules, and responsive layouts using the HubSpot design system and custom code when needed.'
      },
      {
        question: 'Are you familiar with HubSpot reports and dashboards?',
        answer:
          'Yes. I work with CRM data, lifecycle reporting, pipeline visibility, campaign reporting, attribution cleanup, and dashboard structure.'
      },
      {
        question: 'Can you automate things in HubSpot without paying for Ops Hub?',
        answer:
          'Sometimes, yes. It depends on the use case. I usually start with native workflows, lists, properties, and integrations before reaching for custom code.'
      },
      {
        question: 'Do you talk to your workflows like they’re sentient?',
        answer: 'Only when they break for no reason. So yes, occasionally.'
      }
    ]
  },
  {
    id: 'web',
    label: 'Web',
    icon: 'web',
    accent: 'cyan',
    eyebrow: 'Pages that do not collapse under pressure.',
    title: 'Web Builds',
    description:
      'Landing pages, responsive sections, frontend polish, performance cleanup, and web UI that feels intentional.',
    questions: [
      {
        question: 'Can you build landing pages from a design?',
        answer:
          'Yes. I can turn a design reference into a responsive page or section and keep the build close to the original instead of “close enough and slightly cursed.”'
      },
      {
        question: 'Do you work with React and Next.js?',
        answer:
          'Yes. I work with React and Next.js for structured frontend builds, reusable components, responsive layouts, and polished UI interactions.'
      },
      {
        question: 'Can you fix sections that already exist?',
        answer:
          'Yes. A lot of my work is improving existing pages: spacing, responsiveness, component structure, hover states, broken layouts, and the small details that make a site feel finished.'
      },
      {
        question: 'Do you handle responsive QA?',
        answer:
          'Yes. I check common desktop, tablet, and mobile widths, then fix the awkward breakpoints before users find them first.'
      },
      {
        question: 'Can you work inside WordPress or HubSpot CMS?',
        answer:
          'Yes. I can work in both, including page updates, landing pages, CMS structure, forms, and front-end cleanup.'
      }
    ]
  },
  {
    id: 'general',
    label: 'General',
    icon: 'general',
    accent: 'violet',
    eyebrow: 'The “before we both overthink it” lane.',
    title: 'General Questions',
    description:
      'How projects start, how communication works, and what happens before anything becomes a scary scope document.',
    questions: [
      {
        question: 'What kind of projects are a good fit?',
        answer:
          'HubSpot setup, CRM cleanup, automation, reporting, CMS pages, landing pages, frontend sections, and messy systems that need structure.'
      },
      {
        question: 'How do you usually communicate?',
        answer:
          'Async-first works best for me. Clear notes, screenshots, Looms, docs, and focused calls when needed. Basically, less meeting theatre, more useful progress.'
      },
      {
        question: 'Can we start small?',
        answer:
          'Yes. Starting with one workflow, one page, one audit, or one cleanup sprint is often the best way to see if the working style fits.'
      },
      {
        question: 'Do you work with teams in different time zones?',
        answer:
          'Yes. I work remotely from Bangladesh and can coordinate with async updates, planned check-ins, and clear handoffs.'
      },
      {
        question: 'What happens after I reach out?',
        answer:
          'I’ll review what you sent, ask for any missing context, and suggest the cleanest next step. No pressure, no weird sales performance.'
      }
    ]
  }
] as const;

export const contactFaqs = contactFaqTabs[0].questions;

export const contactStats = [
  {
    label: 'Projects Launched',
    value: '25+',
    note: 'Systems shipped that solve real problems.',
    icon: Rocket
  },
  {
    label: 'Average Response Time',
    value: '< 12 hours',
    note: 'Quick replies. No ghosting.',
    icon: TimerReset
  },
  {
    label: 'Workflow Deploy Success',
    value: '98%',
    note: 'Automations that run reliably.',
    icon: Zap
  },
  {
    label: 'Remote Setup',
    value: '100%',
    note: 'Built remotely, delivered globally.',
    icon: Wifi
  },
  {
    label: 'Listening To',
    value: 'Lo-fi / Focus Beats',
    note: 'Keeps the brain in flow.',
    icon: Music2
  },
  {
    label: 'Coffee Intake',
    value: '2–3 cups/day',
    note: 'Function > addiction (maybe).',
    icon: Coffee
  },
  {
    label: 'Notifications Handling',
    value: 'Zero red dot policy',
    note: 'Focus over fluff.',
    icon: Gauge
  },
  {
    label: 'System Uptime',
    value: '99%',
    note: 'I build for reliability.',
    icon: ShieldCheck
  }
] as const satisfies ReadonlyArray<{
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
}>;
