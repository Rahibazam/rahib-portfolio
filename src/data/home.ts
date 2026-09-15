export type HomeIconName = 'database' | 'handoff' | 'performance' | 'automation' | 'web' | 'diagnose' | 'build' | 'optimise';

export const homeProblems = [
  {
    title: 'The CRM Has Lore',
    description: 'Duplicate records, mystery properties, strange associations, and one field everyone fears but nobody remembers creating.',
    icon: 'database'
  },
  {
    title: 'Humans Are The Workflow',
    description: 'Someone is copying data between tools because “it only takes five minutes.” It has taken five minutes 900 times.',
    icon: 'handoff'
  },
  {
    title: 'The Website Has Opinions',
    description: 'Slow pages, brittle CMS sections, odd forms, and one mobile breakpoint apparently designed during a personal crisis.',
    icon: 'performance'
  }
] satisfies Array<{ title: string; description: string; icon: HomeIconName }>;

export const homeSystems = [
  {
    title: 'CRM Architecture',
    description: 'Objects, properties, pipelines, lifecycle stages, associations, governance, cleanup, and fewer existential questions.',
    icon: 'database',
    href: '/hubspot',
    linkLabel: 'Explore CRM Architecture'
  },
  {
    title: 'HubSpot Automation & Data',
    description: 'Workflows, lead routing, nurture, integrations, data quality, dashboards, and robots doing the repetitive bits.',
    icon: 'automation',
    href: '/hubspot',
    linkLabel: 'Explore HubSpot Automation'
  },
  {
    title: 'Web Development',
    description: 'Responsive websites, landing pages, HubSpot CMS, WordPress, Next.js, forms, accessibility, performance, and pixels being politely contained.',
    icon: 'web',
    href: '/portfolio',
    linkLabel: 'View Web Development Work'
  }
] satisfies Array<{ title: string; description: string; icon: HomeIconName; href: string; linkLabel: string }>;

export const homeExperience = [
  {
    role: 'CRM & Web Technologist',
    company: 'Digital Authority Partners',
    period: 'Current',
    description: 'Build and QA CRM, automation, web, reporting, SEO, and implementation systems across client work, usually near whatever has the most tabs open.'
  },
  {
    role: 'HubSpot Specialist & CMS Expert',
    company: 'INSIDEA',
    period: '2024–2026',
    description: 'Delivered HubSpot onboarding, workflows, CMS execution, reporting, and client implementations across a high-volume environment supporting more than 50 onboardings.'
  },
  {
    role: 'HubSpot Specialist & Web Technologist',
    company: 'Inbouncy LLC',
    period: 'Nov 2021–Jun 2024',
    description: 'Customized CRM setups, automated marketing processes, and optimized more than 100 landing pages and emails across HubSpot and WordPress work.'
  },
  {
    role: 'Freelance Web & HubSpot Specialist',
    company: 'Independent',
    period: '2021–Present',
    description: 'Build websites, landing pages, CRM workflows, and technical fixes for smaller projects where one person eventually has to know why everything is connected to everything else.'
  }
];

export const homeProcess = [
  {
    number: '01',
    title: 'Diagnose',
    description: 'Trace the current CRM, automation, website, dependencies, edge cases, and the exact point where everyone stopped asking questions.',
    icon: 'diagnose'
  },
  {
    number: '02',
    title: 'Build',
    description: 'Implement the cleanest practical fix without turning one problem into a 47-step cinematic universe.',
    icon: 'build'
  },
  {
    number: '03',
    title: 'Validate',
    description: 'Test the normal path, the weird path, and the path nobody mentioned until five minutes before launch.',
    icon: 'optimise'
  }
] satisfies Array<{ number: string; title: string; description: string; icon: HomeIconName }>;

export const homeFeaturedWork = [
  {
    title: 'HubSpot CRM Rebuild',
    image: '/images/projects/featured-architecture.svg',
    tags: ['HubSpot', 'CRM Architecture', 'Reporting'],
    href: '/portfolio/hubspot-crm-rebuild'
  },
  {
    title: 'Website QA Crawler',
    image: '/images/projects/featured-surfing.svg',
    tags: ['TypeScript', 'Crawlee', 'Web QA'],
    href: '/portfolio#project-grid'
  }
];
