export type Project = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  impact: string[];
  tags: string[];
  image?: string;
  featured: boolean;
  status?: string;
};

export const projects: Project[] = [
  {
    title: 'HubSpot CRM Rebuild',
    slug: 'hubspot-crm-rebuild',
    category: 'HubSpot / CRM Architecture',
    summary:
      'Rebuilt and cleaned a complex HubSpot CRM setup with business units, lifecycle logic, pipelines, properties, reporting, deduplication, and governance improvements.',
    impact: ['Cleaner CRM structure', 'Improved reporting visibility', 'Reduced messy data', 'Better pipeline clarity'],
    tags: ['HubSpot', 'CRM', 'Business Units', 'Reporting'],
    image: '/images/projects/project-placeholder.svg',
    featured: true,
    status: 'Draft case study'
  },
  {
    title: 'Duplicate Deal Prevention System',
    slug: 'duplicate-deal-prevention-system',
    category: 'HubSpot Automation',
    summary:
      'Designed workflow logic to prevent duplicate deals while preserving multiple lead creation flows and vendor-specific routing requirements.',
    impact: ['Reduced duplicate deals', 'Protected existing workflows', 'Improved sales ops hygiene'],
    tags: ['Workflows', 'Deals', 'Automation', 'QA'],
    image: '/images/projects/project-placeholder.svg',
    featured: true,
    status: 'Draft case study'
  },
  {
    title: 'Private Memory Album Web App',
    slug: 'private-memory-album-web-app',
    category: 'Next.js / Personal Web App',
    summary:
      'Built a private password-gated memory archive with seasons, galleries, videos, protected routes, responsive media handling, and a polished personal interface.',
    impact: ['Private protected routes', 'Season-based media structure', 'Responsive images and videos'],
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Media'],
    image: '/images/projects/project-placeholder.svg',
    featured: true,
    status: 'Draft case study'
  },
  {
    title: 'Landing Page and CMS Execution',
    slug: 'landing-page-cms-execution',
    category: 'Web / CMS',
    summary:
      'Created and supported responsive pages, HubSpot CMS modules, content updates, QA fixes, and conversion-focused page structures.',
    impact: ['Responsive implementation', 'CMS-friendly structure', 'Cleaner handoff process'],
    tags: ['HTML', 'CSS', 'HubSpot CMS', 'Responsive QA'],
    image: '/images/projects/project-placeholder.svg',
    featured: false,
    status: 'Draft case study'
  },
  {
    title: 'Campaign Workflow & Reporting Support',
    slug: 'campaign-workflow-reporting-support',
    category: 'HubSpot / Marketing Operations',
    summary:
      'Supported campaign properties, nurture logic, lifecycle tracking, forms, and reporting visibility for CRM-driven marketing operations.',
    impact: ['Cleaner campaign structure', 'More reliable lifecycle tracking', 'Improved reporting visibility'],
    tags: ['HubSpot', 'Automation', 'Forms', 'Lifecycle', 'Reporting'],
    featured: false,
    status: 'Draft case study'
  },
  {
    title: 'Analytics Dashboard / Reporting System',
    slug: 'analytics-dashboard-reporting-system',
    category: 'Reporting / Analytics',
    summary:
      'Structured a dashboard-style reporting system for clearer campaign, source, funnel, and operational visibility.',
    impact: ['Clearer reporting views', 'Consolidated operational signals', 'Decision-ready dashboard structure'],
    tags: ['Reporting', 'Dashboards', 'Analytics', 'Data'],
    featured: false,
    status: 'Draft case study'
  }
];
