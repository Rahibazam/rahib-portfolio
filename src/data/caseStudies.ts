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
  publicationStatus: 'draft' | 'published' | 'archived';
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
    "slug": "hubspot-crm-rebuild",
    "publicationStatus": "published",
    "status": "Published case study",
    "client": "Confidential CRM engagement",
    "confidentiality": "Client identity, internal data model, and sensitive operating rules remain confidential.",
    "year": "2025–2026",
    "engagement": "Live HubSpot CRM rebuild",
    "role": "CRM implementation specialist",
    "heroStatement": "Rebuilt a live HubSpot environment around cleaner data, lifecycle logic, automation, reporting, and governance while removing a large duplicate population from active operations.",
    "facts": [
      {
        "label": "Records",
        "value": "Large cleanup"
      },
      {
        "label": "Brands",
        "value": "Multiple business units"
      },
      {
        "label": "Platform",
        "value": "Live HubSpot CRM"
      },
      {
        "label": "Model",
        "value": "No migration required"
      }
    ],
    "challenge": {
      "title": "A live CRM needed structural repair without interrupting daily operations",
      "paragraphs": [
        "The existing HubSpot portal had accumulated duplicate records, legacy properties, inconsistent lifecycle logic, and reporting dependencies. Because the instance was already supporting active teams, cleanup had to happen in place without treating production like a disposable sandbox.",
        "The deeper problem was trust. Properties, automation, pipelines, and reports were connected, so changing one layer without mapping the others could recreate the same defects. The rebuild focused on removing duplication and aligning the operating model around shared definitions."
      ],
      "signals": [
        "Large duplicate population existed",
        "Legacy properties remained connected to assets",
        "Lifecycle logic needed consistent definitions",
        "Reporting depended on cleaner source data",
        "Multiple business units shared one portal"
      ]
    },
    "stages": [
      {
        "number": "01",
        "title": "Audit Live System",
        "description": "Mapped CRM objects, dependencies, properties, lifecycle behavior, and reporting constraints before changing production structures or removing legacy fields.",
        "output": "System dependency map"
      },
      {
        "number": "02",
        "title": "Clean Core Data",
        "description": "Manually resolved duplicate contacts and companies, disconnected obsolete properties, and archived legacy fields without breaking assets that still depended on them.",
        "output": "Cleaned CRM foundation"
      },
      {
        "number": "03",
        "title": "Rebuild Operating Logic",
        "description": "Aligned lifecycle rules, pipelines, automation, and governance around the cleaned structure so downstream processes used the same definitions.",
        "output": "Shared operating model"
      },
      {
        "number": "04",
        "title": "Validate Reporting",
        "description": "Rechecked data behavior, automation dependencies, and reporting outputs to confirm the rebuilt structure remained usable across active business units.",
        "output": "Production QA report"
      }
    ],
    "layers": [
      {
        "label": "Layer 01",
        "title": "Data Model",
        "description": "Contacts, companies, properties, associations, and duplicate handling were reorganized around clearer definitions and more dependable record ownership overall."
      },
      {
        "label": "Layer 02",
        "title": "Lifecycle Logic",
        "description": "Lifecycle stages and pipeline behavior were aligned so records moved through the CRM with fewer contradictory states or manual exceptions."
      },
      {
        "label": "Layer 03",
        "title": "Automation Layer",
        "description": "Workflows and routing logic were checked against the rebuilt data model instead of preserving assumptions created by legacy fields."
      },
      {
        "label": "Layer 04",
        "title": "Reporting Layer",
        "description": "Operational reporting was rebuilt around cleaner CRM inputs, with advanced reporting deferred where HubSpot alone was not the right tool."
      }
    ],
    "outcomes": [
      {
        "title": "Data",
        "before": "Large duplicate CRM population",
        "after": "Cleaner production record base"
      },
      {
        "title": "Properties",
        "before": "Legacy fields remained actively connected",
        "after": "Obsolete fields safely retired"
      },
      {
        "title": "Logic",
        "before": "Lifecycle rules had accumulated drift",
        "after": "Shared lifecycle definitions established"
      },
      {
        "title": "Reporting",
        "before": "Outputs depended on inconsistent inputs",
        "after": "Cleaner reporting foundation established"
      }
    ],
    "deliverables": [
      "CRM architecture audit",
      "Duplicate record cleanup",
      "Legacy property retirement",
      "Lifecycle and pipeline redesign",
      "Automation dependency review",
      "Reporting foundation validation"
    ],
    "reflection": "This project reinforced that CRM cleanup is architecture work, not housekeeping. Deleting duplicates helps, but durable improvement came from aligning the data model, lifecycle logic, automation, and reporting around the same definitions. Otherwise the portal simply learns new ways to recreate the old mess."
  },
  {
    "slug": "hvac-lifecycle-automation",
    "publicationStatus": "published",
    "status": "Published case study",
    "client": "Confidential growth engagement",
    "confidentiality": "Client identity, campaign content, phone data, and internal routing rules remain confidential.",
    "year": "2025–2026",
    "engagement": "Multi-channel lifecycle automation",
    "role": "Marketing automation specialist",
    "heroStatement": "Built an HVAC lifecycle system spanning nurture, hot-lead routing, deal suppression, win-back, monthly drip, calling, and cross-platform handoffs across connected marketing tools.",
    "facts": [
      {
        "label": "Main Track",
        "value": "Multi-touch nurture"
      },
      {
        "label": "Champion",
        "value": "Role-based sequence"
      },
      {
        "label": "Win-back",
        "value": "Delayed re-entry"
      },
      {
        "label": "Properties",
        "value": "Campaign state fields"
      }
    ],
    "challenge": {
      "title": "A campaign needed one lifecycle instead of disconnected automation islands",
      "paragraphs": [
        "The campaign crossed HubSpot, Zapier, Instantly, Aircall, Slack, and Meta-related workflows. Without shared state, one contact could enter overlapping sequences, receive follow-up after creating a deal, or reappear in win-back without the controls needed to stop duplicate outreach.",
        "The project became a lifecycle design problem rather than a simple nurture build. Each system needed clear ownership, suppression logic, campaign tagging, reply behavior, and handoff rules so sales activity could interrupt marketing automation cleanly instead of competing with it."
      ],
      "signals": [
        "Main nurture required coordination",
        "Role-based track needed separate logic",
        "Deals had to suppress outreach",
        "Win-back required delayed re-entry",
        "Monthly drip required no open deal"
      ]
    },
    "stages": [
      {
        "number": "01",
        "title": "Map Contact States",
        "description": "Defined campaign tags, role fields, hot-lead status, monthly-drip state, deal conditions, and the transitions connecting each lifecycle path.",
        "output": "Lifecycle state map"
      },
      {
        "number": "02",
        "title": "Build Nurture Paths",
        "description": "Implemented the main and champion sequences, hot-lead bypass logic, reply handling, and one-sequence-at-a-time safeguards reliably across connected tools.",
        "output": "Automated nurture tracks"
      },
      {
        "number": "03",
        "title": "Wire Sales Handoffs",
        "description": "Connected deal creation, Slack alerts, Aircall events, and suppression logic so sales activity could immediately change marketing behavior.",
        "output": "Sales handoff system"
      },
      {
        "number": "04",
        "title": "Add Recovery Loops",
        "description": "Built win-back, nurture completion, monthly drip, re-engagement, and rollback safeguards so long-term follow-up remained controlled after primary sequences ended.",
        "output": "Recovery automation layer"
      }
    ],
    "layers": [
      {
        "label": "Layer 01",
        "title": "Campaign State",
        "description": "Persistent campaign properties identified audience, role, urgency, win-back status, and monthly-drip membership consistently across the entire lifecycle system."
      },
      {
        "label": "Layer 02",
        "title": "Sequence Control",
        "description": "Automation enforced the correct nurture path while preventing hot leads, replies, and active deals from receiving conflicting outreach."
      },
      {
        "label": "Layer 03",
        "title": "Sales Signals",
        "description": "Deal creation, calls, and engagement events updated CRM state and triggered suppression, alerts, or follow-up across connected systems."
      },
      {
        "label": "Layer 04",
        "title": "Long-Term Followup",
        "description": "Win-back and monthly-drip logic created controlled re-engagement paths after the initial nurture ended without reopening every contact blindly."
      }
    ],
    "outcomes": [
      {
        "title": "Nurture",
        "before": "Disconnected sequence behavior across tools",
        "after": "One coordinated lifecycle system"
      },
      {
        "title": "Suppression",
        "before": "Deals could coexist with outreach",
        "after": "Deal activity stopped sequences"
      },
      {
        "title": "Routing",
        "before": "Hot leads risked standard nurture",
        "after": "Hot leads bypassed nurture"
      },
      {
        "title": "Re-engagement",
        "before": "Follow-up lacked durable state",
        "after": "Win-back and drip controlled"
      }
    ],
    "deliverables": [
      "Lifecycle architecture map",
      "Eleven-touch nurture build",
      "Eight-touch champion track",
      "Deal suppression automation",
      "Win-back and drip logic",
      "Aircall and Slack handoffs"
    ],
    "reflection": "The durable part was not any single workflow. It was the shared state between systems. Once campaign tags, deal conditions, replies, calls, and nurture status all meant the same thing across tools, automation stopped behaving like six coworkers forwarding the same email to each other."
  },
  {
    "slug": "audit-nurture-system",
    "publicationStatus": "published",
    "status": "Published case study",
    "client": "Confidential nurture engagement",
    "confidentiality": "Client identity, message copy, workflow names, and internal notification channels remain confidential.",
    "year": "2026",
    "engagement": "Production nurture automation",
    "role": "HubSpot automation specialist",
    "heroStatement": "Built a production-safe audit nurture with webhook ingestion, automated deal creation, exit logic, reconciliation, scheduling, and extensive automated QA before activation.",
    "facts": [
      {
        "label": "QA",
        "value": "Extensive test suite"
      },
      {
        "label": "Primary",
        "value": "Multi-touch nurture"
      },
      {
        "label": "Fallback",
        "value": "Short fallback path"
      },
      {
        "label": "Window",
        "value": "Guarded send window"
      }
    ],
    "challenge": {
      "title": "A nurture needed production safeguards before it could safely send",
      "paragraphs": [
        "The nurture was expected to react to live audit data, route contacts through different message paths, stop on replies or bookings, and create deals through connected automation. A normal linear sequence was not enough because every send depended on current CRM state.",
        "The larger risk was operational. Old contacts, overlapping sequences, webhook failures, scheduling gaps, or stale reconciliation could create incorrect outreach. The system needed default-deny safeguards, repeated exit checks, internal-only testing, and monitoring before production activation."
      ],
      "signals": [
        "Primary nurture used multiple touches",
        "Fallback path used fewer touches",
        "Replies stopped future messages immediately",
        "Bookings stopped future messages immediately",
        "Extensive automated QA validated behavior"
      ]
    },
    "stages": [
      {
        "number": "01",
        "title": "Map Safe Paths",
        "description": "Defined primary and fallback nurture paths, reply and booking exits, isolation rules, scheduling windows, and deal-creation dependencies before production wiring.",
        "output": "Nurture behavior map"
      },
      {
        "number": "02",
        "title": "Build Automation Core",
        "description": "Implemented sequence logic, webhook ingestion, automated deal creation, business-hours scheduling, and stop conditions safely around live contact state.",
        "output": "Automation workflow system"
      },
      {
        "number": "03",
        "title": "Add Recovery Logic",
        "description": "Added reconciliation windows, error alerts, kill-switch behavior, and safeguards preventing old or overlapping contacts from receiving unintended sends.",
        "output": "Production safeguard layer"
      },
      {
        "number": "04",
        "title": "Validate Before Send",
        "description": "Ran extensive automated tests with real audit data routed only to internal email, fixed defects, and confirmed production isolation behavior.",
        "output": "QA validation report"
      }
    ],
    "layers": [
      {
        "label": "Layer 01",
        "title": "Enrollment Logic",
        "description": "Contact state determined which nurture path could run and prevented unsupported or stale records from entering the wrong sequence."
      },
      {
        "label": "Layer 02",
        "title": "Deal Automation",
        "description": "Webhook events and CRM logic created the required deal records while preserving existing ownership and pipeline behavior throughout execution."
      },
      {
        "label": "Layer 03",
        "title": "Safety Controls",
        "description": "Reply checks, booking checks, isolation flags, kill switches, reconciliation windows, and alerts significantly reduced production-send risk during execution."
      },
      {
        "label": "Layer 04",
        "title": "Scheduling Layer",
        "description": "Business-hours scheduling and reconciler logic controlled when automation could safely send, retry, or close out pending nurture work."
      }
    ],
    "outcomes": [
      {
        "title": "Sending",
        "before": "Live conditions could change mid-sequence",
        "after": "State rechecked before sends"
      },
      {
        "title": "Deals",
        "before": "Creation depended on manual follow-up",
        "after": "Deal creation became automated"
      },
      {
        "title": "Safety",
        "before": "Production mistakes had broad consequences",
        "after": "Kill switches and guards added"
      },
      {
        "title": "QA",
        "before": "Behavior relied on spot checking",
        "after": "Extensive QA validated flows"
      }
    ],
    "deliverables": [
      "Nurture architecture map",
      "Primary and fallback sequences",
      "Webhook deal automation",
      "Reply and booking exits",
      "Production safeguard controls",
      "Automated QA suite"
    ],
    "reflection": "This build reinforced that lifecycle automation should fail closed, not optimistic. The visible emails were the easy part. The durable value came from exits, reconciliation, scheduling, error handling, and enough testing to make “it only happens sometimes” a test case instead of a future incident."
  },
  {
    "slug": "pardot-database-rebuild",
    "publicationStatus": "published",
    "status": "Published case study",
    "client": "Confidential healthcare engagement",
    "confidentiality": "Client identity, prospect data, email addresses, and internal campaign details remain confidential.",
    "year": "2026",
    "engagement": "Pardot data and nurture cleanup",
    "role": "CRM data specialist",
    "heroStatement": "Rebuilt the Pardot audience foundation by auditing a large prospect database, separating sendable records, resolving duplicates, and supporting cleaner nurture, import, and deliverability operations.",
    "facts": [
      {
        "label": "Prospects",
        "value": "Large database"
      },
      {
        "label": "Unmailable",
        "value": "Substantial segment"
      },
      {
        "label": "Sendable",
        "value": "Qualified audience"
      },
      {
        "label": "Import",
        "value": "Bulk reconciliation"
      }
    ],
    "challenge": {
      "title": "A large Pardot database needed a usable sendable audience again",
      "paragraphs": [
        "The Pardot database mixed active, unmailable, duplicate, failed-import, and nurture-specific records across recurring operational work. Before new campaigns could be trusted, the audience needed one defensible master dataset and a clear distinction between records that existed and records that were actually sendable.",
        "The project also touched nurture enrollment, scoring behavior, Salesforce imports, and sender authentication. That meant data cleanup could not be separated from campaign operations; every list, import, and suppression decision had downstream consequences for deliverability and reporting."
      ],
      "signals": [
        "Database contained a large prospect base",
        "Substantial segment was unmailable",
        "Multiple duplicate groups were identified",
        "Scoring logic contained conflicting criteria",
        "Sender authentication required DNS coordination"
      ]
    },
    "stages": [
      {
        "number": "01",
        "title": "Audit Prospect Base",
        "description": "Analyzed all prospects, unmailable states, duplicate groups, review groups, and campaign overlap before producing any new working lists.",
        "output": "Database audit ledger"
      },
      {
        "number": "02",
        "title": "Build Master Audiences",
        "description": "Produced a deduplicated master dataset, a sendable audience, exclusion lists, merge candidates, and review files for controlled downstream use.",
        "output": "Audience master files"
      },
      {
        "number": "03",
        "title": "Reconcile Campaign Inputs",
        "description": "Matched imported contacts against nurture needs, existing prospects, overlap rules, and Salesforce behavior before adding records to campaign audiences.",
        "output": "Reconciled nurture lists"
      },
      {
        "number": "04",
        "title": "Harden Deliverability",
        "description": "Reviewed scoring behavior and sender-authentication requirements, generated DNS values, and coordinated clear validation paths for the marketing subdomain.",
        "output": "Deliverability handoff package"
      }
    ],
    "layers": [
      {
        "label": "Layer 01",
        "title": "Master Data",
        "description": "Prospect records were operationally fragmented across exports, failures, and campaign-specific lists with no single cleaned working data base."
      },
      {
        "label": "Layer 02",
        "title": "Sendability Rules",
        "description": "Mailable and unmailable records were separated into explicit audiences so campaign enrollment could use a defensible sendable population consistently."
      },
      {
        "label": "Layer 03",
        "title": "Campaign Inputs",
        "description": "Imports and nurture audiences were reconciled against existing prospects, duplicate behavior, overlap rules, and campaign ownership before enrollment."
      },
      {
        "label": "Layer 04",
        "title": "Deliverability Controls",
        "description": "Scoring, DNS authentication, and sender configuration were documented so campaign operations had clearer technical requirements and handoffs overall."
      }
    ],
    "outcomes": [
      {
        "title": "Audience",
        "before": "Mixed prospect quality and status",
        "after": "Clean master audience created"
      },
      {
        "title": "Sendability",
        "before": "Unmailable records obscured usable scale",
        "after": "Sendable population isolated cleanly"
      },
      {
        "title": "Duplicates",
        "before": "Redundant records required manual review",
        "after": "Duplicate groups explicitly separated"
      },
      {
        "title": "Imports",
        "before": "Recurring failures complicated enrollment",
        "after": "Controlled import workflow established"
      }
    ],
    "deliverables": [
      "Pardot database audit",
      "Deduplicated master audience",
      "Sendable prospect dataset",
      "Duplicate review files",
      "Nurture import reconciliation",
      "Sender authentication handoff"
    ],
    "reflection": "The useful metric was not the original database size; it was whether the system could responsibly act on the audience. This project reinforced that campaign operations get much easier once sendability, duplicates, scoring, and imports stop being separate mysteries and become one governed data process."
  },
  {
    "slug": "website-qa-crawler",
    "publicationStatus": "published",
    "status": "Published case study",
    "client": "Internal engineering tool",
    "confidentiality": "Client-specific URLs, credentials, screenshots, and private crawl evidence are excluded from public examples.",
    "year": "2026",
    "engagement": "Automated page QA platform",
    "role": "Tool builder and QA engineer",
    "heroStatement": "Built a browser QA crawler that checks five sitemap classes across two viewports, classifies render health, captures evidence, and exports structured reports for repeatable validation.",
    "facts": [
      {
        "label": "Sitemaps",
        "value": "5 crawl classes"
      },
      {
        "label": "Viewports",
        "value": "2 QA sizes"
      },
      {
        "label": "Tests",
        "value": "32 automated tests"
      },
      {
        "label": "Reports",
        "value": "JSON CSV HTML"
      }
    ],
    "challenge": {
      "title": "Page QA needed repeatable browser evidence instead of manual spot checks",
      "paragraphs": [
        "Manual page QA was slow to repeat across large site sections and inconsistent when rendering problems, responsive layouts, forms, assets, accessibility, or network behavior changed between runs. A URL list alone could not prove whether the browser actually rendered the page correctly.",
        "The crawler therefore needed to separate real defects from blocked or degraded rendering. The render-integrity layer tracks document, CSS, scripts, fonts, images, backgrounds, iframes, XHR, and fetch activity before deciding which audits are trustworthy enough to run."
      ],
      "signals": [
        "Five sitemap classes feed the crawler",
        "Desktop and mobile viewports are tested",
        "Render health gates downstream audits",
        "Screenshots preserve visual evidence",
        "Thirty-two tests validate crawler behavior"
      ]
    },
    "stages": [
      {
        "number": "01",
        "title": "Build Crawl Engine",
        "description": "Implemented sitemap discovery, Crawlee orchestration, Playwright browsing, exclusions, source tracking, bounded crawling, and repeatable desktop and mobile sessions.",
        "output": "Browser crawl engine"
      },
      {
        "number": "02",
        "title": "Add QA Modules",
        "description": "Added checks for metadata, content, accessibility, assets, links, layout, forms, network behavior, responsive rendering, and interactive components systematically.",
        "output": "Modular QA checks"
      },
      {
        "number": "03",
        "title": "Detect Render Health",
        "description": "Classified pages as healthy, degraded, blocked, or failed by tracking critical resources and visible browser state before running dependent audits.",
        "output": "Render diagnostic layer"
      },
      {
        "number": "04",
        "title": "Package Evidence",
        "description": "Generated JSON, CSV, HTML, screenshots, render diagnostics, tests, fixtures, and staged crawl commands for review and repeatable local execution.",
        "output": "Structured QA reports"
      }
    ],
    "layers": [
      {
        "label": "Layer 01",
        "title": "Crawl Layer",
        "description": "Sitemap-defined URLs are visited in a real browser with bounded discovery, exclusions, source tracking, and repeatable session behavior."
      },
      {
        "label": "Layer 02",
        "title": "Render Layer",
        "description": "Resource loading and visible DOM state determine whether a page is healthy enough for downstream visual and functional checks."
      },
      {
        "label": "Layer 03",
        "title": "Audit Layer",
        "description": "Independent modules systematically inspect accessibility, content, assets, links, layout, forms, metadata, network behavior, and responsive issues across pages."
      },
      {
        "label": "Layer 04",
        "title": "Evidence Layer",
        "description": "Findings are written to machine-readable reports, human-readable HTML, screenshots, and render diagnostics for structured review and technical handoff."
      }
    ],
    "outcomes": [
      {
        "title": "Coverage",
        "before": "Manual spot checks missed broad patterns",
        "after": "Five sitemap classes automated"
      },
      {
        "title": "Rendering",
        "before": "Blocked pages could create false defects",
        "after": "Render health now gates audits"
      },
      {
        "title": "Evidence",
        "before": "Issues depended on manual screenshots",
        "after": "Evidence captured during crawl"
      },
      {
        "title": "Repeatability",
        "before": "QA varied between individual reviews",
        "after": "Automated tests and reports"
      }
    ],
    "deliverables": [
      "Multi-sitemap crawl engine",
      "Desktop and mobile QA",
      "Accessibility audit module",
      "Render health classifier",
      "JSON CSV HTML reports",
      "Screenshot evidence capture"
    ],
    "reflection": "The hardest part was not detecting more issues; it was knowing when not to trust a result. A browser blocked by Cloudflare can generate hundreds of technically correct but useless findings. Render health became the gatekeeper so the tool could distinguish a broken page from a broken audit session."
  },
  {
    "slug": "hubspot-form-finder",
    "publicationStatus": "published",
    "status": "Published case study",
    "client": "Internal marketing-operations tool",
    "confidentiality": "Client URLs, portal identifiers, approved form IDs, and private audit output remain confidential.",
    "year": "2026",
    "engagement": "HubSpot form usage auditor",
    "role": "Tool builder and QA specialist",
    "heroStatement": "Built a rendered HubSpot form-audit crawler that checked 397 pages, resolved active form IDs, classified mismatches, and produced a review-ready CSV instead of source-code guesses.",
    "facts": [
      {
        "label": "Pages",
        "value": "397 rendered pages"
      },
      {
        "label": "Statuses",
        "value": "4 form classes"
      },
      {
        "label": "Fields",
        "value": "10 core columns"
      },
      {
        "label": "Browser",
        "value": "Chromium via Playwright"
      }
    ],
    "challenge": {
      "title": "Form migration QA needed rendered evidence across hundreds of pages",
      "paragraphs": [
        "A simple source crawl could not reliably identify the active HubSpot form on every page because forms rendered dynamically and pages also exposed cloned, correlation, instance, or historical IDs. The audit needed browser execution, not string matching against raw HTML.",
        "The website also contained sections that should not participate in the audit. The tool therefore had to filter sitemap scope, load each relevant page in Chromium, extract multiple form signals, separate active IDs from noise, and flag ambiguous pages for manual review."
      ],
      "signals": [
        "Three hundred ninety-seven pages required review",
        "Dynamic forms defeated raw source scans",
        "Internal IDs created false positives",
        "Four statuses summarized form compliance",
        "Ambiguous pages required manual review"
      ]
    },
    "stages": [
      {
        "number": "01",
        "title": "Define Audit Scope",
        "description": "Loaded sitemap URLs, excluded non-priority content sections, and established the approved form ID used as the compliance target for each rendered page.",
        "output": "Filtered URL inventory"
      },
      {
        "number": "02",
        "title": "Render Real Pages",
        "description": "Used Playwright and Chromium to wait for HubSpot forms, inspect rendered DOM markers, form actions, portal IDs, and active form identifiers.",
        "output": "Rendered form evidence"
      },
      {
        "number": "03",
        "title": "Classify Form Usage",
        "description": "Separated active IDs from cloned or internal identifiers, then classified each page as correct, different, mixed, or missing.",
        "output": "Form status matrix"
      },
      {
        "number": "04",
        "title": "Export Review Data",
        "description": "Wrote URL, portal, active IDs, target comparison, other forms, internal IDs, status, and manual-review flags into a reusable CSV.",
        "output": "Audit CSV report"
      }
    ],
    "layers": [
      {
        "label": "Layer 01",
        "title": "Discovery Layer",
        "description": "Sitemap scope and exclusion rules limit the crawl to website sections where the approved HubSpot form is expected to appear."
      },
      {
        "label": "Layer 02",
        "title": "Browser Layer",
        "description": "Chromium renders each page and waits for dynamic HubSpot forms so active IDs can be observed after client-side execution."
      },
      {
        "label": "Layer 03",
        "title": "Extraction Layer",
        "description": "Multiple DOM and form-action signals identify active form IDs while filtering cloned, correlation, instance-level, and historical identifiers accurately."
      },
      {
        "label": "Layer 04",
        "title": "Reporting Layer",
        "description": "Each URL receives a status, comparison fields, and manual-review flag so remediation can proceed from a structured audit file."
      }
    ],
    "outcomes": [
      {
        "title": "Coverage",
        "before": "Manual checks could miss scattered pages",
        "after": "397 pages reviewed systematically"
      },
      {
        "title": "Accuracy",
        "before": "Raw HTML exposed misleading identifiers",
        "after": "Rendered active IDs isolated"
      },
      {
        "title": "Classification",
        "before": "Form usage required manual interpretation",
        "after": "Four clear statuses produced"
      },
      {
        "title": "Handoff",
        "before": "Findings lived in ad hoc notes",
        "after": "Structured CSV enabled remediation"
      }
    ],
    "deliverables": [
      "Sitemap filtering rules",
      "Chromium rendering crawler",
      "HubSpot ID extraction",
      "False-positive ID filtering",
      "Four-state classification logic",
      "Review-ready CSV export"
    ],
    "reflection": "The interesting part was proving which form was actually active, not which IDs happened to exist in the markup. Once the crawler rendered pages and treated cloned or internal IDs as noise, a 397-page migration check became a structured dataset instead of a browser-tab endurance event."
  },
  {
    "slug": "nero-ai-second-brain",
    "publicationStatus": "published",
    "status": "Published case study",
    "client": "Personal productivity system",
    "confidentiality": "Private journal content, personal records, connected files, and sensitive memory context are excluded entirely.",
    "year": "2026",
    "engagement": "AI-assisted knowledge system",
    "role": "System designer and operator",
    "heroStatement": "Built NERO, an AI-assisted Obsidian second brain with 14 vault sections, five operating modes, protected notes, agent rules, and cross-note recall for real workflows.",
    "facts": [
      {
        "label": "Vault",
        "value": "14 major sections"
      },
      {
        "label": "Modes",
        "value": "5 operating modes"
      },
      {
        "label": "Core",
        "value": "Obsidian knowledge base"
      },
      {
        "label": "Rules",
        "value": "Agent instruction layer"
      }
    ],
    "challenge": {
      "title": "A note vault needed to behave like a system instead of storage",
      "paragraphs": [
        "The vault already contained journals, project notes, work systems, people, health, prompt libraries, dashboards, and archives. The problem was retrieval and coordination: information existed, but finding the current source, connecting related notes, and distinguishing stale context still required manual effort.",
        "NERO was designed as an operating layer over that vault. It needed to recall narrowly, protect original journal entries, respect chronology, detect contradictions, propose controlled writes, synchronize project context, and avoid turning personal notes into an AI-generated rewrite of the user."
      ],
      "signals": [
        "Fourteen vault sections required coordination",
        "Five operating modes guided agent behavior",
        "Journal originals required write protection",
        "Temporal conflicts needed explicit handling",
        "Project context crossed many note types"
      ]
    },
    "stages": [
      {
        "number": "01",
        "title": "Map Vault Structure",
        "description": "Defined the vault hierarchy, source-of-truth rules, metadata expectations, protected areas, project states, and the boundaries between original notes and generated synthesis.",
        "output": "Vault operating model"
      },
      {
        "number": "02",
        "title": "Define Agent Behavior",
        "description": "Created root agent instructions covering identity, retrieval, chronology, privacy, prompt injection, rollback, controlled writes, and reliable task-completion reporting.",
        "output": "Agent instruction layer"
      },
      {
        "number": "03",
        "title": "Add Working Modes",
        "description": "Structured recall, organization, execution, analysis, and planning modes so the same vault could support retrieval, synthesis, project work, and controlled updates.",
        "output": "Five operating modes"
      },
      {
        "number": "04",
        "title": "Test System Safety",
        "description": "Designed tests for cross-note retrieval, contradictions, journal protection, current-focus synthesis, project execution, and safe write behavior before broader use.",
        "output": "System QA framework"
      }
    ],
    "layers": [
      {
        "label": "Layer 01",
        "title": "Knowledge Layer",
        "description": "Fourteen vault sections separate journals, projects, systems, people, prompts, archives, templates, and operational knowledge into clearly navigable working domains."
      },
      {
        "label": "Layer 02",
        "title": "Retrieval Layer",
        "description": "Agent rules use narrow search, links, chronology, freshness, and contradiction checks to recover the most defensible context first."
      },
      {
        "label": "Layer 03",
        "title": "Execution Layer",
        "description": "Operating modes turn retrieved context into planning, analysis, project execution, organization, and proposed updates without bypassing source rules."
      },
      {
        "label": "Layer 04",
        "title": "Safety Layer",
        "description": "Protected journals, controlled writes, rollback expectations, privacy rules, and prompt-injection defenses preserve the vault as a trusted source system."
      }
    ],
    "outcomes": [
      {
        "title": "Recall",
        "before": "Useful context was scattered across notes",
        "after": "Cross-note retrieval became structured"
      },
      {
        "title": "Chronology",
        "before": "Old and current context could conflict",
        "after": "Freshness rules became explicit"
      },
      {
        "title": "Journals",
        "before": "Source writing risked accidental rewriting",
        "after": "Original entries stayed protected"
      },
      {
        "title": "Execution",
        "before": "Notes mostly stored information passively",
        "after": "Vault supported active project work"
      }
    ],
    "deliverables": [
      "Vault architecture map",
      "Root agent instruction file",
      "Five operating modes",
      "Journal protection rules",
      "Recall and contradiction workflow",
      "System safety test plan"
    ],
    "reflection": "NERO reinforced that an AI second brain is mostly an information-governance problem wearing a cool name. Retrieval quality depends on source discipline, chronology, and write boundaries. The useful part is not having an agent that says more; it is having one that knows what not to overwrite."
  },
  {
    "slug": "private-media-archive",
    "publicationStatus": "published",
    "status": "Published case study",
    "client": "Personal product experiment",
    "confidentiality": "Private media, identities, messages, and access credentials are intentionally excluded from the public case study.",
    "year": "2026",
    "engagement": "Private media web app",
    "role": "Product designer and developer",
    "heroStatement": "Built a password-protected Next.js media archive with typed content, protected routes, responsive galleries, video lightboxes, long-form story modals, and a structure designed to scale.",
    "facts": [
      {
        "label": "Collections",
        "value": "7 structured collections"
      },
      {
        "label": "Entries",
        "value": "141+ labeled entries"
      },
      {
        "label": "Stack",
        "value": "Next.js TypeScript"
      },
      {
        "label": "Access",
        "value": "Password protected"
      }
    ],
    "challenge": {
      "title": "A growing private archive needed structure without exposing its content",
      "paragraphs": [
        "The source material lived across folders, chats, and cloud storage, but a simple gallery would lose chronology, captions, and longer context. The application needed a content model that could organize media, preserve narrative structure, and expand without redesigning every new collection.",
        "Privacy added a second constraint. Routes, media browsing, responsive behavior, and story views had to work like a normal product after authentication while keeping the underlying content out of public discovery and easy to extend through reusable components."
      ],
      "signals": [
        "Seven collections needed one shared model",
        "141-plus entries required consistent metadata",
        "Media needed responsive lightbox behavior",
        "Long-form context needed reusable story views",
        "Private access required route protection"
      ]
    },
    "stages": [
      {
        "number": "01",
        "title": "Model The Archive",
        "description": "Defined collections, entry labels, media metadata, featured state, story fields, and navigation patterns so new content could extend one stable structure.",
        "output": "Typed content model"
      },
      {
        "number": "02",
        "title": "Build Protected Access",
        "description": "Implemented password access, protected routes, no-index behavior, shared navigation, and private deployment patterns before connecting the full media archive.",
        "output": "Protected application shell"
      },
      {
        "number": "03",
        "title": "Build Media Experience",
        "description": "Created responsive galleries, image and video lightboxes, featured media states, filtering, and previous-next navigation across desktop and mobile views.",
        "output": "Responsive media system"
      },
      {
        "number": "04",
        "title": "Add Story Views",
        "description": "Added reusable introductions, long-form story modals, captions, collection metadata, and new content without changing the original archive architecture.",
        "output": "Reusable story layer"
      }
    ],
    "layers": [
      {
        "label": "Layer 01",
        "title": "Access Layer",
        "description": "Password gating, protected routes, and no-index behavior keep private content out of public discovery while preserving normal authenticated navigation."
      },
      {
        "label": "Layer 02",
        "title": "Content Layer",
        "description": "Typed collection and entry data separates captions, metadata, featured state, story content, and media paths from reusable interface components."
      },
      {
        "label": "Layer 03",
        "title": "Media Layer",
        "description": "Responsive images, videos, galleries, filters, and lightboxes provide consistent browsing behavior across desktop, tablet, and mobile screen sizes reliably."
      },
      {
        "label": "Layer 04",
        "title": "Story Layer",
        "description": "Reusable introductions and long-form story modals preserve context without coupling narrative content directly to the media presentation components."
      }
    ],
    "outcomes": [
      {
        "title": "Organization",
        "before": "Media lived across disconnected sources",
        "after": "Structured archive model created"
      },
      {
        "title": "Context",
        "before": "Media lacked reusable narrative structure",
        "after": "Story views preserved context"
      },
      {
        "title": "Privacy",
        "before": "Private content needed controlled access",
        "after": "Protected routes and noindex"
      },
      {
        "title": "Growth",
        "before": "New content risked structural drift",
        "after": "Typed model scaled cleanly"
      }
    ],
    "deliverables": [
      "Password-protected application shell",
      "Typed archive content model",
      "Responsive media galleries",
      "Image and video lightboxes",
      "Reusable long-form story views",
      "Private deployment and noindex layer"
    ],
    "reflection": "The project reinforced that personal software benefits from the same architecture discipline as client work. Once access, content, media, and story layers were separated, adding material stopped meaning rebuilding the interface. The private subject matter stayed private; the reusable product thinking became the part worth showing publicly."
  },
  {
    "slug": "legacy-portfolio-website",
    "publicationStatus": "published",
    "status": "Published case study",
    "client": "Personal portfolio website",
    "confidentiality": "Only public portfolio content is included; private local paths and personal contact details are omitted.",
    "year": "2025",
    "engagement": "Personal portfolio build",
    "role": "Frontend developer and designer",
    "heroStatement": "Built a three-page personal portfolio with animated backgrounds, responsive UI, drawer navigation, music playback, page transitions, and a local Tailwind production pipeline.",
    "facts": [
      {
        "label": "Pages",
        "value": "3 core pages"
      },
      {
        "label": "Scripts",
        "value": "6 JS modules"
      },
      {
        "label": "Tailwind",
        "value": "Version 4.1.8"
      },
      {
        "label": "Hosting",
        "value": "GitHub Pages site"
      }
    ],
    "challenge": {
      "title": "A static portfolio needed personality without becoming impossible to maintain",
      "paragraphs": [
        "The original site grew from a simple personal homepage into three substantial HTML pages with animated backgrounds, page transitions, drawer navigation, media, portfolio sections, and responsive behavior. Most interaction lived in standalone JavaScript files rather than a component framework.",
        "The styling also started with Tailwind and DaisyUI loaded through CDN links. Moving to a local production build required introducing the Tailwind CLI, a dedicated CSS entry file, generated output, and a workflow that could survive changes without editing compiled CSS by hand."
      ],
      "signals": [
        "Three HTML pages formed the site",
        "Six JavaScript files handled interactions",
        "Tailwind and DaisyUI began via CDN",
        "Music playback required local scripting",
        "Production CSS needed a build pipeline"
      ]
    },
    "stages": [
      {
        "number": "01",
        "title": "Structure Pages",
        "description": "Separated home, about, and portfolio content into three dedicated pages while keeping navigation, visual language, and responsive behavior consistent.",
        "output": "Three-page site structure"
      },
      {
        "number": "02",
        "title": "Add Interaction Scripts",
        "description": "Built standalone modules for animated backgrounds, drawer navigation, loading, page transitions, playlists, and other interface behavior without a framework.",
        "output": "Six JavaScript modules"
      },
      {
        "number": "03",
        "title": "Refine Responsive UI",
        "description": "Used Tailwind and DaisyUI to structure mobile and desktop layouts, featured work, experience, skills, navigation, and media components.",
        "output": "Responsive interface system"
      },
      {
        "number": "04",
        "title": "Move CSS Local",
        "description": "Replaced CDN-only styling with Tailwind CLI and DaisyUI build tooling, a local source stylesheet, and generated production CSS output.",
        "output": "Production CSS pipeline"
      }
    ],
    "layers": [
      {
        "label": "Layer 01",
        "title": "Page Layer",
        "description": "Three HTML pages separate home, about, and portfolio concerns while sharing one visual identity, responsive behavior, and navigation model."
      },
      {
        "label": "Layer 02",
        "title": "Script Layer",
        "description": "Standalone JavaScript modules control animation, navigation, loading, transitions, playlists, and interface behavior without coupling everything into one oversized file."
      },
      {
        "label": "Layer 03",
        "title": "Style Layer",
        "description": "Tailwind and DaisyUI provide utility-driven responsive styling, later moved into a local production build instead of browser-loaded CDN assets."
      },
      {
        "label": "Layer 04",
        "title": "Media Layer",
        "description": "Images, audio, icons, and animated effects give the static portfolio more personality without requiring a heavyweight application framework."
      }
    ],
    "outcomes": [
      {
        "title": "Structure",
        "before": "One portfolio kept expanding organically",
        "after": "Three focused pages created"
      },
      {
        "title": "Interaction",
        "before": "Behaviors risked one large script",
        "after": "Six modules separated concerns"
      },
      {
        "title": "Styling",
        "before": "CDN dependencies handled production CSS",
        "after": "Local Tailwind build added"
      },
      {
        "title": "Identity",
        "before": "Generic portfolio patterns felt limiting",
        "after": "Custom interactive personality emerged"
      }
    ],
    "deliverables": [
      "Three-page portfolio site",
      "Six JavaScript interaction modules",
      "Animated background system",
      "Page transition behavior",
      "Music player integration",
      "Local Tailwind build pipeline"
    ],
    "reflection": "This site was the point where I stopped treating a portfolio as a résumé with CSS and started treating it as an interface. It also taught me that once a static site has six JavaScript files, a playlist, transitions, and opinions, a framework starts looking less like overengineering."
  }
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
