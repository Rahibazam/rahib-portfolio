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
  href?: string;
};

export const projects: Project[] = [
  {
    title: 'HubSpot CRM Rebuild',
    slug: 'hubspot-crm-rebuild',
    category: 'CRM Architecture',
    summary: 'Reworked a complex HubSpot environment across properties, lifecycle logic, pipelines, deduplication, governance, automation, and reporting to create a cleaner, more dependable operating foundation.',
    impact: ['Cleaner data model', 'Clearer pipeline logic', 'Better reporting structure'],
    tags: ['HubSpot', 'CRM', 'Pipelines', 'Reporting', 'Data Cleanup'],
    image: '/images/projects/project-placeholder.svg',
    featured: true,
    status: 'Published case study',
    href: '/portfolio/hubspot-crm-rebuild'
  },
  {
    title: 'Duplicate Deal Prevention System', slug: 'duplicate-deal-prevention-system', category: 'HubSpot Automation',
    summary: 'Designed workflow logic that prevented duplicate deals while preserving multiple lead-creation paths, vendor routing requirements, company-association edge cases, and the workflows already depending on them.',
    impact: ['Duplicate prevention', 'Existing flows protected', 'Edge cases handled'], tags: ['HubSpot', 'Workflows', 'Deals', 'Lead Routing', 'QA'], featured: true, status: 'Draft case study'
  },
  {
    title: 'AI Prospecting Agent Pilot', slug: 'ai-prospecting-agent-pilot', category: 'CRM Automation',
    summary: 'Configured and tested HubSpot AI prospecting workflows against CRM, activity, company, deal, and industry context, enrolling 25 leads and identifying 19 viable prospects for outreach.',
    impact: ['25 leads enrolled', '19 viable prospects', 'Controlled credit usage'], tags: ['HubSpot', 'AI', 'Prospecting', 'CRM', 'Automation'], featured: true, status: 'Draft case study'
  },
  {
    title: 'Audit Nurture Automation', slug: 'audit-nurture-automation', category: 'Lifecycle Automation',
    summary: 'Built and QA’d a multi-touch audit nurture with reply and booking stops, production isolation safeguards, webhook ingestion, deal creation, scheduling logic, reconciliation, and error alerts.',
    impact: ['41 QA tests', 'Production safeguards', 'Automated deal creation'], tags: ['HubSpot', 'Workflows', 'Webhooks', 'Nurture', 'QA'], featured: false, status: 'Draft case study'
  },
  {
    title: 'CRM Reporting Cleanup', slug: 'crm-reporting-cleanup', category: 'Reporting Operations',
    summary: 'Created a deal-level reporting property and backfilled 307 matching records so one vendor-specific lead-generation segment had a cleaner, more consistent source of truth for reporting.',
    impact: ['307 deals backfilled', 'Single reporting field', 'Cleaner segmentation'], tags: ['HubSpot', 'Deals', 'Properties', 'Reporting', 'Data Cleanup'], featured: false, status: 'Draft case study'
  },
  {
    title: 'Technical SEO Metadata Rollout', slug: 'technical-seo-metadata-rollout', category: 'Technical SEO Implementation',
    summary: 'Worked through a 137-URL implementation workbook, updating more than 120 title and meta-description targets with live verification, canonical checks, and deployment QA across WordPress pages.',
    impact: ['137 URLs tracked', '120+ updates completed', 'Live QA verified'], tags: ['WordPress', 'Technical SEO', 'Metadata', 'QA', 'CMS'], featured: false, status: 'Draft case study'
  },
  {
    title: 'Internal Linking Rollout', slug: 'internal-linking-rollout', category: 'Technical SEO Implementation',
    summary: 'Reconciled a large internal-linking audit into an implementation ledger, completed 444 approved link changes, documented 14 skips, and re-verified the live site after rollout.',
    impact: ['444 links implemented', '14 skips documented', 'Live re-verification'], tags: ['Internal Linking', 'SEO', 'WordPress', 'QA', 'Content Ops'], featured: false, status: 'Draft case study'
  },
  {
    title: 'Website QA Crawler', slug: 'website-qa-crawler', category: 'Web Development Tooling',
    summary: 'Built a TypeScript crawler with Crawlee to inspect page, location, industry, city, and case-study sitemap URLs for repeatable website QA and implementation checks.',
    impact: ['Multi-sitemap crawling', 'Repeatable QA checks', 'TypeScript tooling'], tags: ['TypeScript', 'Crawlee', 'Web QA', 'Automation', 'Sitemaps'], featured: false, status: 'Draft case study'
  },
  {
    title: 'Private Memory Album Web App', slug: 'private-memory-album-web-app', category: 'Next.js Web App',
    summary: 'Built a password-gated private memory archive with season pages, galleries, videos, protected routes, responsive media handling, and a custom interface designed around a personal storytelling system.',
    impact: ['Protected experience', 'Responsive media', 'Custom archive structure'], tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Protected Routes', 'Media'], featured: false, status: 'Draft case study'
  },
  {
    title: 'Landing Page & CMS Execution', slug: 'landing-page-cms-execution', category: 'Web Development & CMS',
    summary: 'Built and supported responsive landing pages, HubSpot CMS modules, WordPress updates, form experiences, technical QA fixes, and conversion-focused page structures across client implementation work.',
    impact: ['Responsive builds', 'CMS-ready execution', 'Structured QA'], tags: ['HubSpot CMS', 'WordPress', 'HTML', 'CSS', 'Responsive QA'], featured: false, status: 'Draft case study'
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
