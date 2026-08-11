export type HubSpotIconName =
  | 'setup'
  | 'automation'
  | 'cleanup'
  | 'reporting'
  | 'forms'
  | 'integration'
  | 'properties'
  | 'workflow'
  | 'dashboard'
  | 'pipeline'
  | 'routing'
  | 'quality';

export const hubspotServices = [
  { title: 'HubSpot Setup & Implementation', description: 'Complete HubSpot CRM setup, property architecture, pipelines, and configuration built for scale.', icon: 'setup' },
  { title: 'Workflow Automation', description: 'Smart workflows, lead nurturing, task automation, and internal notifications that save time and close more deals.', icon: 'automation' },
  { title: 'CRM Cleanup & Optimization', description: 'Clean data, fix duplicates, restructure pipelines, and make your CRM reliable again.', icon: 'cleanup' },
  { title: 'Reporting & Dashboards', description: 'Custom reports and dashboards that give real insights and help you make better decisions.', icon: 'reporting' },
  { title: 'Forms & Landing Pages', description: 'High-converting forms and landing pages that capture leads and match your brand perfectly.', icon: 'forms' },
  { title: 'Integrations & Sync', description: 'Connect HubSpot with the tools you use every day. Clean sync, no messy data, no headaches.', icon: 'integration' }
] as const satisfies ReadonlyArray<{ title: string; description: string; icon: HubSpotIconName }>;

export const hubspotProblems = [
  { title: 'Messy Properties', description: 'Too many duplicate, unclear, unused, or badly named fields.', icon: 'properties' },
  { title: 'Broken Workflows', description: 'Automations that overlap, conflict, or silently stop doing what the team expects.', icon: 'workflow' },
  { title: 'Weak Reporting', description: 'Dashboards that look busy but do not explain what is actually happening.', icon: 'dashboard' },
  { title: 'Pipeline Confusion', description: 'Deal stages, owners, lifecycle stages, and handoffs that do not reflect the real sales process.', icon: 'pipeline' },
  { title: 'Poor Lead Routing', description: 'Forms, lists, notifications, and ownership logic that create delays or duplicate work.', icon: 'routing' },
  { title: 'Data Quality Issues', description: 'Missing fields, duplicate records, inconsistent sources, and unreliable segmentation.', icon: 'quality' }
] as const satisfies ReadonlyArray<{ title: string; description: string; icon: HubSpotIconName }>;

export const hubspotProcess = [
  { number: '01', title: 'Discover', description: 'I audit your current setup, understand your goals, and map the gaps.' },
  { number: '02', title: 'Strategize', description: 'I design the right structure, automations, and reporting for your business.' },
  { number: '03', title: 'Implement', description: 'I build, configure, and integrate everything cleanly.' },
  { number: '04', title: 'Optimize', description: 'I refine, test, document, and improve the system for long-term growth.' }
] as const;

export const hubspotTools = [
  ['Slack', 'slack'], ['Gmail', 'gmail'], ['Google Ads', 'ads'], ['WordPress', 'wordpress'],
  ['Shopify', 'shopify'], ['Salesforce', 'salesforce'], ['Zapier', 'zapier'], ['Make', 'make'],
  ['Calendly', 'calendly'], ['DocuSign', 'docusign'], ['Aircall', 'aircall'], ['Google Sheets', 'sheets']
] as const;

export const hubspotProjects = [
  {
    title: 'Full HubSpot CRM Rebuild',
    category: 'CRM Setup & Architecture',
    description: 'Rebuilt and cleaned a complex HubSpot CRM setup with pipelines, properties, reporting, business units, and governance improvements.',
    tags: ['HubSpot', 'CRM', 'Pipelines', 'Reporting', 'Data Cleanup'],
    visual: 'crm',
    status: 'Draft case study'
  },
  {
    title: 'Duplicate Deal Prevention System',
    category: 'Workflow Automation',
    description: 'Designed workflow logic to prevent duplicate deals while preserving multiple lead creation flows and vendor-specific routing requirements.',
    tags: ['Workflows', 'Deals', 'Lead Routing', 'QA'],
    visual: 'workflow',
    status: 'Draft case study'
  },
  {
    title: 'Campaign Workflow & Reporting Support',
    category: 'Marketing Operations',
    description: 'Supported campaign properties, nurture logic, lifecycle tracking, forms, and reporting visibility for CRM-driven marketing operations.',
    tags: ['Automation', 'Forms', 'Lifecycle', 'Reporting'],
    visual: 'reporting',
    status: 'Draft case study'
  }
] as const;
