import {
  BarChart3,
  Bot,
  Box,
  Boxes,
  Braces,
  Code2,
  Cpu,
  Database,
  Eye,
  FileCode2,
  GitBranch,
  Github,
  Globe2,
  Headphones,
  Heart,
  ListChecks,
  MapPin,
  MessagesSquare,
  MonitorSmartphone,
  Music2,
  Network,
  Orbit,
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
    title: 'The Short Version',
    Icon: UserRound,
    paragraphs: [
      'I build CRM systems, automate operations, and design websites that don’t just look good — they create clarity and drive growth.',
      'I love turning messy processes into clean, reliable systems that make life easier for businesses and their teams.'
    ]
  },
  {
    title: 'What I Care About',
    Icon: Heart,
    paragraphs: [
      'Clarity over complexity. Systems over spreadsheets. Experience over noise.',
      'I care about building things that are useful, maintainable, and built to make a real impact — not just to impress.'
    ]
  },
  {
    title: 'Outside the Build',
    Icon: Music2,
    paragraphs: [
      'I’m an introvert at heart. I recharge in quiet spaces, think in systems, and find inspiration in heavy riffs and honest lyrics.',
      'Metalcore, rock, and a good bassline help me focus, reset, and stay in the zone.'
    ]
  }
] as const satisfies ReadonlyArray<{ title: string; Icon: LucideIcon; paragraphs: readonly string[] }>;

export const aboutPrinciples = [
  {
    title: 'Systems-First',
    Icon: Boxes,
    description: 'I start with structure. Good systems remove guesswork, scale with you, and keep everything running smooth.'
  },
  {
    title: 'Clean Execution',
    Icon: Zap,
    description: 'I believe in simple, elegant solutions. Clean code, clean design, clean data. Details make the difference.'
  },
  {
    title: 'Quiet Obsession',
    Icon: Target,
    description: 'I don’t chase trends. I obsess over getting things right, refining, and building work I’m proud of.'
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
    description: 'Building responsive, accessible, and high-performance web experiences.',
    image: '/images/about/toolkit/web-development.png',
    accent: 'cyan',
    items: [
      { label: 'HTML', Icon: FileCode2 },
      { label: 'CSS', Icon: Braces },
      { label: 'Tailwind', Icon: Waves },
      { label: 'Bootstrap', Icon: Box },
      { label: 'DaisyUI', Icon: Sparkles },
      { label: 'Next.js', Icon: Code2 },
      { label: 'TypeScript', Icon: Braces },
      { label: 'Responsive QA', Icon: MonitorSmartphone }
    ]
  },
  {
    title: 'CRM & CMS',
    description: 'Designing and optimizing CRM systems, content platforms, and automated workflows.',
    image: '/images/about/toolkit/crm-and-cms.png',
    accent: 'purple',
    items: [
      { label: 'HubSpot', Icon: Network },
      { label: 'WordPress', Icon: Globe2 },
      { label: 'Elementor', Icon: PanelsTopLeft },
      { label: 'Square Space', Icon: Box },
      { label: 'MailChimp', Icon: MessagesSquare },
      { label: 'Eventbrite', Icon: ListChecks },
      { label: 'Attentive', Icon: Sparkles },
      { label: 'CRM Architecture', Icon: Database },
      { label: 'Workflows', Icon: Workflow },
      { label: 'Reporting', Icon: BarChart3 }
    ]
  },
  {
    title: 'AI TOOLS',
    description: 'Leveraging AI to research, automate, create, and ship faster.',
    image: '/images/about/toolkit/ai-tools.png',
    accent: 'blue',
    items: [
      { label: 'OpenAI', Icon: Bot },
      { label: 'Codex', Icon: Code2 },
      { label: 'Claude', Icon: Sparkles },
      { label: 'Claude Cowork', Icon: MessagesSquare },
      { label: 'Cowork', Icon: Bot },
      { label: 'Perplexity', Icon: Cpu },
      { label: 'Gemini', Icon: Orbit },
      { label: 'Copilot', Icon: Bot },
      { label: 'Instantly', Icon: Zap }
    ]
  },
  {
    title: 'TOOLS & PLATFORMS',
    description: 'Essential tools and platforms that power productivity and streamline delivery.',
    image: '/images/about/toolkit/tools-and-platforms.png',
    accent: 'purple',
    items: [
      { label: 'Git', Icon: GitBranch },
      { label: 'VS Code', Icon: Code2 },
      { label: 'GitHub', Icon: Github },
      { label: 'Vercel', Icon: Orbit },
      { label: 'Zapier', Icon: Zap },
      { label: 'Google Sheets', Icon: Table2 },
      { label: 'Slack', Icon: MessagesSquare },
      { label: 'Asana', Icon: ListChecks },
      { label: 'Eventhunt', Icon: Target },
      { label: 'Wise', Icon: Globe2 },
      { label: 'Payoneer', Icon: Network },
      { label: 'OBS', Icon: MonitorSmartphone },
      { label: 'Spotify', Icon: Headphones }
    ]
  }
];

export const aboutExperience = [
  {
    role: 'CRM & Web Technologist',
    company: 'Digital Authority Partners',
    date: 'Dec 2025 – Present',
    description: 'Built and supported CRM systems, HubSpot operations, workflows, reporting, and web execution across client projects.'
  },
  {
    role: 'HubSpot Specialist & CMS Expert',
    company: 'INSIDEA',
    date: 'Jun 2024 – Dec 2025',
    description: 'Implemented HubSpot portals, workflows, landing pages, reporting, integrations, and CRM systems.'
  },
  {
    role: 'HubSpot Specialist & Web Technologist',
    company: 'Inbouncy',
    date: 'Nov 2021 – Jun 2024',
    description: 'Built HubSpot systems, web experiences, landing pages, workflows, and CRM automation for client projects.'
  },
  {
    role: 'Freelance / Personal Builds',
    company: 'Independent',
    date: 'Feb 2021 – Jun 2024',
    description: 'Built personal and freelance web projects, experiments, automations, and systems that shaped my technical foundation.'
  }
] as const;

export const aboutSnapshots = [
  {
    title: 'Based in Bangladesh',
    Icon: MapPin,
    description: 'Working remotely from Dhaka, building for clients and teams around the world.'
  },
  {
    title: 'Remote-First',
    Icon: Wifi,
    description: 'I work best in async environments with clear systems, trust, and clean communication.'
  },
  {
    title: 'Quiet, Observant, Detail-Focused',
    Icon: Eye,
    description: 'I like understanding how things connect, finding what is broken, and making it cleaner.'
  },
  {
    title: 'CRM & Web Technologist',
    Icon: Network,
    description: 'I build systems that reduce chaos and digital experiences that support growth.'
  },
  {
    title: 'Music Keeps Me Locked In',
    Icon: Headphones,
    description: 'Metalcore, rock, and heavy riffs help me focus, reset, and stay in the zone.'
  },
  {
    title: 'Systems Over Noise',
    Icon: SlidersHorizontal,
    description: 'I prefer clarity, structure, and useful work over flashy complexity.'
  }
] as const satisfies ReadonlyArray<{ title: string; Icon: LucideIcon; description: string }>;
