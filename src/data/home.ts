export type HomeIconName = 'database' | 'handoff' | 'performance' | 'automation' | 'web' | 'diagnose' | 'build' | 'optimise';

export const homeProblems = [
  {
    title: 'Messy CRM Data',
    description: 'Duplicate records, broken properties, unclear lifecycle stages, and reporting that never adds up.',
    icon: 'database'
  },
  {
    title: 'Broken Lead Handoffs',
    description: 'Disconnected forms, workflows, deals, notifications, and weak sales follow-up.',
    icon: 'handoff'
  },
  {
    title: 'Slow / Weak Web Experiences',
    description: 'Slow pages, poor conversions, weak UX, and hard-to-maintain web experiences.',
    icon: 'performance'
  }
] satisfies Array<{ title: string; description: string; icon: HomeIconName }>;

export const homeSystems = [
  {
    title: 'CRM Systems',
    description: 'HubSpot, Zoho, Salesforce workflows, automations, reports, onboarding.',
    icon: 'database',
    href: '/hubspot'
  },
  {
    title: 'Automation & Data',
    description: 'Clean data, smart workflows, integrations, routing, dashboards, reporting.',
    icon: 'automation',
    href: '/hubspot'
  },
  {
    title: 'Websites & Growth',
    description: 'High-performance websites, landing pages, CRO integrations, tracking.',
    icon: 'web',
    href: '/portfolio'
  }
] satisfies Array<{ title: string; description: string; icon: HomeIconName; href: string }>;

export const homeExperience = [
  {
    role: 'Senior CRM Technical Lead',
    company: 'Digital Authority Partners',
    period: '2023 – Present',
    description: 'Led CRM builds, data architecture, workflow design & reporting for global clients. Built scalable systems that improved visibility, automation and business outcomes.'
  },
  {
    role: 'HubSpot Specialist & Eng. Expert',
    company: 'INSIDEA',
    period: '2022 – 2023',
    description: 'Designed & implemented HubSpot portals, complex workflows, integrations and dashboards. Delivered systems that simplified operations and accelerated growth.'
  },
  {
    role: 'HubSpot Specialist @ Web Technologies',
    company: 'iMagency LLC',
    period: '2021 – 2022',
    description: 'Managed client portals, built workflows, landing pages and reports that drove impact. Streamlined processes and improved performance.'
  },
  {
    role: 'Freelance Web & HubSpot Specialist',
    company: 'Independent',
    period: '2020 – Present',
    description: 'Worked with startups and brands to build clean websites, automate pipelines and fine-tune HubSpot setups.'
  }
];

export const homeProcess = [
  {
    number: '01',
    title: 'Diagnose',
    description: 'Auditing the current setup, finding what’s broken, and mapping what needs to happen.',
    icon: 'diagnose'
  },
  {
    number: '02',
    title: 'Build',
    description: 'Creating clean CRM structures, workflows, reports, pages, and automation systems.',
    icon: 'build'
  },
  {
    number: '03',
    title: 'Optimise',
    description: 'Testing, refining, documenting, and improving the system for long-term reliability.',
    icon: 'optimise'
  }
] satisfies Array<{ number: string; title: string; description: string; icon: HomeIconName }>;

export const homeFeaturedWork = [
  {
    title: 'A team house of first design has a striking appearance',
    image: '/images/projects/featured-architecture.svg',
    tags: ['CRM Setup', 'Automation', 'Reporting'],
    href: '/portfolio'
  },
  {
    title: 'Extreme Surfing',
    image: '/images/projects/featured-surfing.svg',
    tags: ['Landing Page', 'CRO', 'Website'],
    href: '/portfolio'
  }
];
