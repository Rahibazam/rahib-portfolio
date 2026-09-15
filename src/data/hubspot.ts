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
  { title: 'HubSpot CRM Implementation & Architecture', description: 'HubSpot CRM implementation structures objects, properties, lifecycle stages, pipelines, associations, permissions, and governance around how a business actually operates. I build the version future-you can understand without filing a complaint against present-you.', icon: 'setup' },
  { title: 'HubSpot Workflow Automation', description: 'HubSpot workflow automation uses enrollment triggers and automated actions to manage lead routing, lifecycle updates, nurture, tasks, notifications, deal processes, and data maintenance. I build the version people can still understand six months later. A 47-branch workflow held together by hope does not need another branch. It needs adult supervision.', icon: 'automation' },
  { title: 'CRM Cleanup & Data Quality', description: 'HubSpot CRM cleanup improves data quality by auditing duplicates, properties, lists, associations, imports, and the recurring processes that create unreliable records. Cleaning the symptom while leaving the machine that creates it is just scheduled disappointment.', icon: 'cleanup' },
  { title: 'HubSpot Reporting & Dashboards', description: 'HubSpot reporting and dashboards organize CRM, lifecycle, source, campaign, deal, funnel, and custom-property data into consistent operational views. The goal is fewer meetings titled “which number is correct?” and definitions that survive outside the dashboard builder.', icon: 'reporting' },
  { title: 'Forms, Lead Routing & Lifecycle Automation', description: 'HubSpot forms can trigger qualification, ownership, lead routing, lifecycle updates, tasks, notifications, and follow-up processes so each inquiry reaches the right team with useful context. Leads should enter a process, not the shadow realm.', icon: 'forms' },
  { title: 'HubSpot Integrations & Connected Systems', description: 'HubSpot integrations synchronize data and actions between the CRM and external tools, with field mapping, failure handling, validation, and documentation determining whether the connection remains reliable. I map what moves, what owns it, where it can fail, and what the next person should know before inheriting the adventure.', icon: 'integration' }
] as const satisfies ReadonlyArray<{ title: string; description: string; icon: HubSpotIconName }>;

export const hubspotProblems = [
  { title: 'Property Graveyard', description: 'Hundreds of fields, three with the same name, and nobody willing to delete “Test Property 2.”', icon: 'properties' },
  { title: 'Workflow Spaghetti', description: 'Overlapping triggers and branches turn one update into a choose-your-own-adventure novel.', icon: 'workflow' },
  { title: 'Duplicate Population', description: 'Imports, forms, and process gaps quietly create a second CRM inside the first CRM.', icon: 'quality' },
  { title: 'Handoff Void', description: 'Leads move teams without reliable ownership, context, tasks, lifecycle updates, or any clear indication of who is supposed to care next.', icon: 'routing' },
  { title: 'Dashboard Civil War', description: 'Marketing, sales, and leadership each have a dashboard and, remarkably, three separate realities.', icon: 'dashboard' },
  { title: 'Integration Folklore', description: 'Data moves between tools because someone set it up once. Nobody knows who. Beautiful.', icon: 'pipeline' }
] as const satisfies ReadonlyArray<{ title: string; description: string; icon: HubSpotIconName }>;

export const hubspotProcess = [
  { number: '01', title: 'Audit', description: 'Review CRM structure, workflow automation, data quality, reports, integrations, and anything with a name that sounds suspiciously temporary.' },
  { number: '02', title: 'Map', description: 'Define ownership, required fields, lead routing, edge cases, dependencies, and what absolutely must not explode during implementation.' },
  { number: '03', title: 'Build', description: 'Implement the approved CRM architecture, workflows, reports, forms, cleanup, routing, or integrations without improvising in production.' },
  { number: '04', title: 'Validate', description: 'Test enrollment, data movement, edge cases, reporting, safeguards, and the weird scenario someone remembers at the end.' }
] as const;

export const hubspotTools = [
  ['HubSpot', 'hubspot'], ['Salesforce', 'salesforce'], ['Pardot', 'pardot'], ['Zapier', 'zapier'],
  ['Aircall', 'aircall'], ['Calendly', 'calendly'], ['DocuSign', 'docusign'], ['Attentive', 'attentive'],
  ['Google Ads', 'ads'], ['Google Sheets', 'sheets'], ['Bettermode', 'bettermode'], ['Koalify', 'koalify'],
  ['WordPress', 'wordpress']
] as const;

export const hubspotProjects = [
  {
    title: 'HubSpot CRM Rebuild',
    category: 'CRM Architecture',
    description: 'Reworked CRM structure, lifecycle logic, pipelines, properties, deduplication, automation, governance, and reporting so the portal had a cleaner, more dependable operating foundation.',
    tags: ['Cleaner CRM structure', 'Clearer pipeline logic', 'Stronger reporting foundation'],
    visual: 'crm',
    status: 'Published case study',
    href: '/portfolio/hubspot-crm-rebuild'
  },
  {
    title: 'Duplicate Deal Prevention',
    category: 'HubSpot Workflow Automation',
    description: 'Designed deal-creation guardrails that prevented duplicates while preserving existing lead paths, vendor routing, company-association edge cases, and the workflows already depending on them.',
    tags: ['Duplicate prevention', 'Existing flows protected', 'Edge cases handled'],
    visual: 'workflow',
    status: 'Draft case study',
    href: undefined
  },
  {
    title: 'Audit Nurture Automation',
    category: 'Lifecycle Automation',
    description: 'Built and QA’d a multi-touch nurture with booking and reply stops, webhook ingestion, deal creation, scheduling, reconciliation, isolation safeguards, and production error alerts.',
    tags: ['41 QA tests', 'Automated deal creation', 'Production safeguards'],
    visual: 'reporting',
    status: 'Draft case study',
    href: undefined
  }
] as const;
