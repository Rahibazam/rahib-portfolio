import { Clock3, Coffee, Gauge, Linkedin, Mail, Music2, Rocket, ShieldCheck, TimerReset, Wifi, Zap, type LucideIcon } from 'lucide-react';
import { siteConfig } from './site';

export const contactQuickInfo = [
  {
    label: 'Email',
    value: siteConfig.email,
    note: 'Best for full project context',
    icon: Mail,
    accent: 'cyan'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rahib-azam',
    note: 'For professionally shaped sentences',
    icon: Linkedin,
    accent: 'blue'
  },
  {
    label: 'Timezone',
    value: 'BST / UTC+6',
    note: 'Dhaka, Bangladesh',
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
    eyebrow: 'THE ORANGE PORTAL',
    title: 'HubSpot Implementation Questions',
    description: 'HubSpot CRM implementation, cleanup, workflow automation, reporting, lead routing, lifecycle stages, forms, and property naming conventions that stopped making sense three admins ago.',
    questions: [
      {
        question: 'What areas of HubSpot do you work in?',
        answer:
          'I work across HubSpot CRM implementation, Marketing Hub, Sales Hub, Service Hub, forms, lists, workflow automation, properties, pipelines, reporting, lifecycle stages, imports, lead routing, integrations, and connected tools. Basically the parts where one “small change” can unexpectedly acquire a family tree.'
      },
      {
        question: 'Can you clean up an existing HubSpot portal?',
        answer: 'Yes. HubSpot CRM cleanup includes auditing properties, duplicates, lists, lifecycle logic, pipelines, associations, workflows, reporting, and whatever keeps generating the mess again. Cleaning the symptom while leaving the machine that creates it is just scheduled disappointment.'
      },
      {
        question: 'Can you build workflows and lead routing?',
        answer: 'Yes. I build HubSpot workflow automation for routing, nurture, lifecycle updates, tasks, notifications, deal logic, suppression, and data maintenance. I test enrollment and edge cases first because live contacts are not an appropriate sandbox, despite what chaos suggests.'
      },
      {
        question: 'Do you handle HubSpot reports and dashboards?',
        answer: 'Yes. I build and troubleshoot HubSpot reporting and dashboards around lifecycle stages, sources, campaigns, deals, funnels, operational KPIs, and custom properties. Sometimes the dashboard is broken. Sometimes it is reporting exactly what the CRM told it, which is somehow worse.'
      },
      {
        question: 'Can you work with HubSpot integrations?',
        answer: 'Yes. I have worked with Zapier, Aircall, Calendly, DocuSign, Attentive, Google Ads, Bettermode, Koalify, Salesforce, Pardot, and other connected systems. I care about field behavior, data flow, failure points, and leaving enough documentation for the next human.'
      }
    ]
  },
  {
    id: 'web',
    label: 'Web',
    icon: 'web',
    accent: 'cyan',
    eyebrow: 'THE 834PX PROBLEM',
    title: 'Web Development Questions',
    description: 'Website development, landing pages, WordPress, HubSpot CMS, front-end implementation, responsive behavior, accessibility, performance, and screen widths with deeply held beliefs.',
    questions: [
      {
        question: 'What kind of web development work do you take on?',
        answer: 'I build responsive websites, landing pages, CMS pages, front-end components, forms, and implementation-heavy web projects. I am especially useful when the website has to cooperate with CRM, analytics, technical SEO, accessibility, performance, or a form that has somehow become organizationally significant.'
      },
      {
        question: 'Do you work with WordPress websites?',
        answer: 'Yes. I handle WordPress development, page updates, CMS implementation, technical SEO changes, schema, internal linking, QA, and troubleshooting. I can work inside an existing site without immediately suggesting we burn it down and begin a new civilization.'
      },
      {
        question: 'Can you build HubSpot CMS pages?',
        answer: 'Yes. I provide HubSpot CMS development for responsive pages, landing pages, forms, modules, content updates, and CRM-connected experiences. I keep the implementation editable because “only I know how this works” is not a maintenance plan.'
      },
      {
        question: 'Do you build with Next.js too?',
        answer: 'Yes. I use Next.js, TypeScript, Tailwind CSS, and modern front-end tooling for custom web development where a traditional CMS is not the right fit. I also make personal projects needlessly cinematic, which is technically unrelated but spiritually relevant.'
      },
      {
        question: 'Can you handle technical SEO implementation?',
        answer: 'Yes, on the implementation side. Metadata rollouts, internal linking, schema changes, canonical and robots checks, live verification, and QA across large URL sets are all familiar. Strategy can stay with the SEO lead; I make the approved changes survive reality.'
      }
    ]
  },
  {
    id: 'general',
    label: 'General',
    icon: 'general',
    accent: 'violet',
    eyebrow: 'LOGISTICS, THE FINAL BOSS',
    title: 'Working Together',
    description: 'Project scope, remote collaboration, communication, and how to prevent the first message from becoming a scavenger hunt.',
    questions: [
      {
        question: 'What kind of projects are the best fit?',
        answer: 'Defined implementation problems are ideal—HubSpot cleanup, CRM architecture, workflow automation, reporting, CMS work, landing pages, technical SEO changes, integrations, or custom web development. Messy is completely fine. “We will discover the scope together for six months” is less romantic.'
      },
      {
        question: 'Do you work remotely with other teams?',
        answer: 'Yes. I work remotely from Dhaka and collaborate asynchronously across time zones. Clear written context, screenshots, documented decisions, and fewer surprise meetings generally produce better work and preserve the local introvert population.'
      },
      {
        question: 'Do you handle strategy or implementation?',
        answer: 'Implementation is the center of my work. I can audit, identify structural issues, map the technical path, and flag risks, but I do not cosplay as your entire marketing department. Clear ownership is attractive. Professionally speaking.'
      },
      {
        question: 'How do you usually communicate during projects?',
        answer: 'Mostly written, concise, and specific. Links, screenshots, acceptance criteria, and documented decisions are beautiful. When something is complex, I break it into steps and report what changed, what was verified, and what remains suspicious.'
      },
      {
        question: 'What should I include in the first message?',
        answer: 'Send the platform, the problem, what you tried, the deadline, and the outcome you need. Mention access limits, approvals, or systems that cannot be disturbed. If the explanation needs twelve screenshots, congratulations, you have correctly identified my preferred genre.'
      }
    ]
  }
] as const;

export const contactFaqs = contactFaqTabs[0].questions;

export const contactStats = [
  { label: 'Working Since', value: '2021', note: 'CRM, HubSpot, and web systems', icon: Rocket },
  { label: 'HubSpot Onboardings', value: '50+', note: 'Supported during INSIDEA work', icon: TimerReset },
  { label: 'Pages & Emails', value: '100+', note: 'Optimized during earlier client work', icon: Zap },
  { label: 'CRM Backfill', value: '307 deals', note: 'Normalized for reporting consistency', icon: Wifi },
  { label: 'Nurture QA', value: '41 tests', note: 'Run before production activation', icon: Music2 },
  { label: 'SEO Rollout', value: '137 URLs', note: 'Tracked through implementation workbook', icon: Coffee },
  { label: 'Links Implemented', value: '444', note: 'Across one internal-linking rollout', icon: Gauge },
  { label: 'Prospecting Pilot', value: '25 leads', note: '19 identified as viable prospects', icon: ShieldCheck }
] as const satisfies ReadonlyArray<{
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
}>;
