import {
  Bot,
  Box,
  Boxes,
  Braces,
  Code2,
  Database,
  Eye,
  FileCode2,
  Github,
  Globe2,
  Headphones,
  Heart,
  ListChecks,
  MapPin,
  MessagesSquare,
  Music2,
  Network,
  PanelsTopLeft,
  SlidersHorizontal,
  Sparkles,
  Table2,
  Target,
  UserRound,
  Waves,
  Wifi,
  Workflow,
  Zap,
  type LucideIcon
} from 'lucide-react';

export const aboutIntroCards = [
  {
    title: 'How This Happened',
    Icon: UserRound,
    paragraphs: [
      'I started working early, mostly by building whatever needed building: websites, landing pages, CRM setups, workflows, reports, and fixes that kept revealing a larger problem underneath. Very considerate of them.',
      'Eventually I landed in the overlap between HubSpot, CRM architecture, automation, reporting, CMS work, and front-end implementation. Apparently my career strategy was “keep touching adjacent systems until the title becomes difficult to explain.”'
    ]
  },
  {
    title: 'Brain Configuration',
    Icon: Heart,
    paragraphs: [
      'I notice systems before surfaces: who owns the data, what triggers what, where the handoff breaks, which field matters, and why there are four properties called “Lead Source.” This is useful professionally and annoying recreationally.',
      'I am detail-focused enough to spend too long on edge cases, spacing, and naming. Sometimes that is quality control. Sometimes I am moving a button two pixels at 2:13 AM. Both statements can coexist.'
    ]
  },
  {
    title: 'Offline, Allegedly',
    Icon: Music2,
    paragraphs: [
      'I am introverted, remote-first, and suspicious of meetings that could have contained three bullet points. Give me a clear problem, enough context, and a quiet block of time and I am extremely easy to manage.',
      'Outside work, it is heavy music, games, side projects, Obsidian, and occasionally building systems to organize the systems I built to organize other systems. The situation is under control. Do not investigate.'
    ]
  }
] as const satisfies ReadonlyArray<{ title: string; Icon: LucideIcon; paragraphs: readonly string[] }>;

export const aboutPrinciples = [
  {
    title: 'Understand First',
    Icon: Boxes,
    description: 'Trace the system before touching it. Production is a terrible place to begin a character-development arc.'
  },
  {
    title: 'Leave Receipts',
    Icon: Zap,
    description: 'Test, document, verify, and make the work understandable to someone who was not present for the suffering.'
  },
  {
    title: 'Care Too Much',
    Icon: Target,
    description: 'Tiny inconsistencies bother me until they stop, which is occasionally exhausting and frequently useful.'
  }
] as const satisfies ReadonlyArray<{ title: string; Icon: LucideIcon; description: string }>;

export type ToolkitItem = {
  label: string;
  Icon: LucideIcon;
};

export type ToolkitCategory = {
  title: string;
  description: string;
  image: string;
  accent: 'cyan' | 'purple' | 'blue';
  items: ToolkitItem[];
};

export const aboutToolkit: ToolkitCategory[] = [
  {
    title: 'WEB DEVELOPMENT',
    description: 'Front-end development, responsive interfaces, landing pages, accessibility, performance, and custom applications where the pixels must answer for themselves.',
    image: '/images/about/toolkit/web-development.png',
    accent: 'cyan',
    items: [
      { label: 'Next.js', Icon: Code2 },
      { label: 'TypeScript', Icon: Braces },
      { label: 'JavaScript', Icon: Code2 },
      { label: 'HTML', Icon: FileCode2 },
      { label: 'CSS', Icon: Braces },
      { label: 'Tailwind CSS', Icon: Waves },
      { label: 'Bootstrap', Icon: Box },
      { label: 'DaisyUI', Icon: Sparkles }
    ]
  },
  {
    title: 'CRM & CMS',
    description: 'HubSpot, customer data, content, forms, pages, workflows, and the places where “just one field” becomes seventeen.',
    image: '/images/about/toolkit/crm-and-cms.png',
    accent: 'purple',
    items: [
      { label: 'HubSpot', Icon: Network },
      { label: 'HubSpot CMS', Icon: PanelsTopLeft },
      { label: 'HubL', Icon: Code2 },
      { label: 'WordPress', Icon: Globe2 },
      { label: 'Elementor', Icon: PanelsTopLeft },
      { label: 'Salesforce', Icon: Database },
      { label: 'Pardot', Icon: Network }
    ]
  },
  {
    title: 'AUTOMATION & OPS',
    description: 'Workflow automation, lead routing, integrations, scheduling, communication, documentation, and getting humans out of repetitive copy-paste loops.',
    image: '/images/about/toolkit/ai-tools.png',
    accent: 'blue',
    items: [
      { label: 'HubSpot Workflows', Icon: Workflow },
      { label: 'Zapier', Icon: Zap },
      { label: 'Aircall', Icon: MessagesSquare },
      { label: 'Calendly', Icon: ListChecks },
      { label: 'DocuSign', Icon: FileCode2 },
      { label: 'Google Sheets', Icon: Table2 },
      { label: 'Attentive', Icon: Sparkles },
      { label: 'Bettermode', Icon: Network }
    ]
  },
  {
    title: 'AI & DEV TOOLS',
    description: 'Coding, research, QA, content operations, automation experiments, and projects that started with “this would be funny.”',
    image: '/images/about/toolkit/tools-and-platforms.png',
    accent: 'purple',
    items: [
      { label: 'ChatGPT', Icon: Bot },
      { label: 'OpenAI', Icon: Bot },
      { label: 'Claude', Icon: Sparkles },
      { label: 'Claude Code', Icon: Code2 },
      { label: 'Codex', Icon: Code2 },
      { label: 'GitHub', Icon: Github },
      { label: 'VS Code', Icon: Code2 },
      { label: 'Crawlee', Icon: Network },
      { label: 'Firecrawl', Icon: Globe2 },
      { label: 'Obsidian', Icon: Braces }
    ]
  }
];

export const aboutExperience = [
  {
    role: 'CRM & Web Technologist',
    company: 'Digital Authority Partners',
    date: 'Current',
    description: 'Build and QA CRM, automation, web, reporting, SEO, and implementation systems across client work, with a strong production and verification focus.'
  },
  {
    role: 'HubSpot Specialist & CMS Expert',
    company: 'INSIDEA',
    date: '2024–2026',
    description: 'Handled HubSpot onboarding, workflows, CMS execution, reporting, and client implementations in a high-volume environment supporting more than 50 onboardings.'
  },
  {
    role: 'HubSpot Specialist & Web Technologist',
    company: 'Inbouncy LLC',
    date: 'Nov 2021–Jun 2024',
    description: 'Customized CRM setups, automated marketing processes, and optimized more than 100 landing pages and emails across HubSpot and WordPress engagements.'
  },
  {
    role: 'Freelance Web & HubSpot Specialist',
    company: 'Independent',
    date: '2021–Present',
    description: 'Build websites, landing pages, CRM workflows, and technical fixes for smaller engagements where understanding the whole system matters.'
  }
] as const;

export const aboutSnapshots = [
  {
    title: 'Dhaka, Bangladesh',
    Icon: MapPin,
    description: 'Remote from UTC+6, where the coffee is strong and the browser tabs remain internationally distributed.'
  },
  {
    title: 'Remote First',
    Icon: Wifi,
    description: 'Async messages, written context, and fewer surprise calls. Civilization has made remarkable progress.'
  },
  {
    title: 'CRM & Web',
    Icon: Eye,
    description: 'I live between customer systems, automation, reporting, CMS platforms, and front-end implementation.'
  },
  {
    title: 'Quiet By Default',
    Icon: Network,
    description: 'I talk less than the average NPC. This website has been forced to compensate.'
  },
  {
    title: 'Heavy Music',
    Icon: Headphones,
    description: 'Metalcore and heavier alternatives make repetitive implementation feel like an unnecessarily dramatic montage.'
  },
  {
    title: 'Second Brain',
    Icon: SlidersHorizontal,
    description: 'I built an AI-assisted notes system because apparently one brain had reached its operational limit.'
  }
] as const satisfies ReadonlyArray<{ title: string; Icon: LucideIcon; description: string }>;
