export type CaseStudyFact = {
  label: string;
  value: string;
};

export type CaseStudyStage = {
  number: string;
  title: string;
  description: string;
  output: string;
};

export type CaseStudyLayer = {
  label: string;
  title: string;
  description: string;
};

export type CaseStudyOutcome = {
  before: string;
  after: string;
  title: string;
};

export type CaseStudy = {
  slug: string;
  status: string;
  client: string;
  confidentiality: string;
  year: string;
  engagement: string;
  role: string;
  heroStatement: string;
  facts: CaseStudyFact[];
  challenge: {
    title: string;
    paragraphs: string[];
    signals: string[];
  };
  stages: CaseStudyStage[];
  layers: CaseStudyLayer[];
  outcomes: CaseStudyOutcome[];
  deliverables: string[];
  reflection: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'hubspot-crm-rebuild',
    status: 'Published case study',
    client: 'Confidential CRM engagement',
    confidentiality: 'Client identity and sensitive implementation details are intentionally withheld.',
    year: '2024',
    engagement: 'CRM rebuild and governance',
    role: 'CRM architecture, implementation, QA',
    heroStatement:
      'Turning a complex HubSpot portal into a cleaner operating system for data, pipelines, automation, and reporting.',
    facts: [
      { label: 'Platform', value: 'HubSpot CRM' },
      { label: 'Focus', value: 'Architecture + cleanup' },
      { label: 'Environment', value: 'Multi-business-unit' },
      { label: 'Delivery', value: 'Audit to governance' }
    ],
    challenge: {
      title: 'The portal had grown faster than its operating rules.',
      paragraphs: [
        'Business units, lifecycle logic, pipelines, properties, automation, and reporting had accumulated without one dependable architecture tying them together.',
        'The result was not one isolated HubSpot issue. It was a connected systems problem: inconsistent data weakened automation, unclear process logic weakened pipelines, and both made reporting harder to trust.'
      ],
      signals: [
        'Duplicate and inconsistently structured CRM data',
        'Lifecycle and pipeline logic that needed alignment',
        'Properties without a clear governance model',
        'Reporting limited by unreliable underlying structure',
        'Business-unit complexity increasing maintenance overhead'
      ]
    },
    stages: [
      {
        number: '01',
        title: 'Audit the system',
        description: 'Mapped properties, lifecycle stages, pipelines, duplicate patterns, reporting dependencies, and business-unit requirements.',
        output: 'Current-state system map'
      },
      {
        number: '02',
        title: 'Design the rules',
        description: 'Defined the target CRM architecture, naming conventions, lifecycle logic, pipeline structure, and ownership expectations.',
        output: 'Target-state architecture'
      },
      {
        number: '03',
        title: 'Rebuild and clean',
        description: 'Consolidated the data model, refined pipelines, reduced duplicate and messy data, and aligned the supporting automation.',
        output: 'Clean implementation'
      },
      {
        number: '04',
        title: 'Validate and govern',
        description: 'Tested process paths and reporting visibility, then documented the rules needed to keep the portal maintainable.',
        output: 'QA and governance layer'
      }
    ],
    layers: [
      {
        label: 'Layer 01',
        title: 'Data model',
        description: 'Properties, naming, associations, required fields, cleanup logic, and deduplication formed the foundation.'
      },
      {
        label: 'Layer 02',
        title: 'Process model',
        description: 'Lifecycle stages, deal stages, business units, ownership, and handoffs were aligned to the real operating process.'
      },
      {
        label: 'Layer 03',
        title: 'Automation controls',
        description: 'Workflow logic supported routing and record updates without hiding weak structure behind more automation.'
      },
      {
        label: 'Layer 04',
        title: 'Visibility layer',
        description: 'Reports and dashboards were rebuilt on cleaner inputs so pipeline and lifecycle activity became easier to interpret.'
      }
    ],
    outcomes: [
      { title: 'CRM structure', before: 'Fragmented and harder to govern', after: 'Cleaner, documented, and easier to maintain' },
      { title: 'Data quality', before: 'Duplicate and inconsistent records', after: 'Reduced messy data and clearer field rules' },
      { title: 'Pipeline clarity', before: 'Stages and handoffs lacked consistency', after: 'Better-aligned pipeline and lifecycle logic' },
      { title: 'Reporting', before: 'Visibility limited by weak inputs', after: 'Improved reporting confidence and clarity' }
    ],
    deliverables: [
      'Current-state CRM audit',
      'Property and naming framework',
      'Lifecycle and pipeline architecture',
      'Data cleanup and deduplication plan',
      'Workflow and process alignment',
      'Reporting visibility improvements',
      'QA checklist and governance guidance'
    ],
    reflection:
      'The rebuild reinforced a simple rule: reliable reporting and automation are outputs of good CRM architecture. Cleaning the surface is useful, but durable improvement comes from fixing the operating rules underneath it.'
  }
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
