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
  linkType?: 'external';
  target?: '_blank';
  rel?: 'nofollow noopener noreferrer';
  buttonLabel?: 'View Live Site ↗';
  generateCaseStudyPage?: false;
  visualMode?: 'code-preview';
};

export const projects: Project[] = [
  {
    "title": "HubSpot CRM Rebuild",
    "slug": "hubspot-crm-rebuild",
    "category": "CRM Architecture",
    "summary": "Rebuilt a live HubSpot CRM across properties, lifecycle logic, pipelines, automation, governance, reporting, and data cleanup while resolving a large duplicate population without pausing day-to-day operations.",
    "impact": [
      "Large duplicate cleanup",
      "Multiple business units",
      "Live-instance rebuild"
    ],
    "tags": [
      "HubSpot",
      "CRM",
      "Automation",
      "Reporting",
      "Data Cleanup"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": true,
    "status": "Published case study",
    "href": "/portfolio/hubspot-crm-rebuild"
  },
  {
    "title": "HVAC Lifecycle Automation",
    "slug": "hvac-lifecycle-automation",
    "category": "Lifecycle Automation",
    "summary": "Built a multi-system HVAC lead lifecycle across HubSpot, Zapier, Instantly, Aircall, Slack, and Meta workflows, including multi-touch nurture, role-based sequencing, hot-lead routing, win-back, monthly drip, and deal-based suppression.",
    "impact": [
      "Multi-touch nurture",
      "Role-based nurture track",
      "Delayed win-back logic"
    ],
    "tags": [
      "HubSpot",
      "Zapier",
      "Instantly",
      "Aircall",
      "Automation"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": true,
    "status": "Published case study",
    "href": "/portfolio/hvac-lifecycle-automation"
  },
  {
    "title": "Audit Nurture System",
    "slug": "audit-nurture-system",
    "category": "HubSpot Automation",
    "summary": "Built and QA’d a multi-touch audit nurture with primary and fallback paths, booking and reply exits, webhook-driven deal creation, reconciliation, scheduling, error alerts, and production isolation safeguards validated through extensive automated testing.",
    "impact": [
      "Extensive QA coverage",
      "Primary nurture path",
      "Fallback nurture path"
    ],
    "tags": [
      "HubSpot",
      "Webhooks",
      "Automation",
      "Nurture",
      "QA"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": false,
    "status": "Published case study",
    "href": "/portfolio/audit-nurture-system"
  },
  {
    "title": "Pardot Database Rebuild",
    "slug": "pardot-database-rebuild",
    "category": "CRM Data Operations",
    "summary": "Audited a large Pardot prospect database, separated unmailable records, resolved duplicate groups, created cleaned master and sendable audiences, then supported imports, nurture enrollment, scoring review, and sender-authentication cleanup.",
    "impact": [
      "Large database audited",
      "Sendable audience isolated",
      "Bulk imports reconciled"
    ],
    "tags": [
      "Pardot",
      "Salesforce",
      "Data Cleanup",
      "Automation",
      "Deliverability"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": true,
    "status": "Published case study",
    "href": "/portfolio/pardot-database-rebuild"
  },
  {
    "title": "Website QA Crawler",
    "slug": "website-qa-crawler",
    "category": "Web QA Tooling",
    "summary": "Built a TypeScript website QA crawler with Crawlee, Playwright, and axe-core that audits five sitemap classes across desktop and mobile, tracks render integrity, captures screenshots, and exports JSON, CSV, and HTML diagnostic reports.",
    "impact": [
      "5 sitemap classes",
      "32 automated tests",
      "3 report formats"
    ],
    "tags": [
      "TypeScript",
      "Crawlee",
      "Playwright",
      "axe-core",
      "Web QA"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": true,
    "status": "Published case study",
    "href": "/portfolio/website-qa-crawler"
  },
  {
    "title": "HubSpot Form Finder",
    "slug": "hubspot-form-finder",
    "category": "Marketing Ops Tool",
    "summary": "Built a Python and Playwright crawler that rendered 397 website pages in Chromium, extracted active HubSpot form IDs, separated cloned and internal identifiers, compared each page against one approved target form, and exported review-ready CSV classifications.",
    "impact": [
      "397 pages scanned",
      "4 status classes",
      "10 core CSV fields"
    ],
    "tags": [
      "Python",
      "Playwright",
      "HubSpot",
      "Chromium",
      "CSV"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": true,
    "status": "Published case study",
    "href": "/portfolio/hubspot-form-finder"
  },
  {
    "title": "NERO AI Second Brain",
    "slug": "nero-ai-second-brain",
    "category": "AI Knowledge System",
    "summary": "Built an AI-assisted Obsidian second brain spanning 14 vault sections, five operating modes, protected journal originals, project tracking, metadata rules, cross-note recall, contradiction checks, and agent instructions designed to turn personal notes into an active working system.",
    "impact": [
      "14 vault sections",
      "5 operating modes",
      "Protected journal originals"
    ],
    "tags": [
      "Obsidian",
      "AI Agents",
      "Markdown",
      "Knowledge Base",
      "Automation"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": false,
    "status": "Published case study",
    "href": "/portfolio/nero-ai-second-brain"
  },
  {
    "title": "Private Media Archive",
    "slug": "private-media-archive",
    "category": "Personal Web App",
    "summary": "Built a password-protected Next.js media archive with seven structured content collections, 141-plus labeled entries, responsive galleries, image and video lightboxes, protected routes, typed content, and long-form story modals designed to keep a growing private archive maintainable.",
    "impact": [
      "7 content collections",
      "141+ media entries",
      "Protected route system"
    ],
    "tags": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Protected Routes",
      "Media UX"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": false,
    "status": "Published case study",
    "href": "/portfolio/private-media-archive"
  },
  {
    "title": "Legacy Portfolio Website",
    "slug": "legacy-portfolio-website",
    "category": "Frontend Website",
    "summary": "Built and shipped a three-page personal portfolio with HTML, JavaScript, Tailwind, DaisyUI, animated backgrounds, page transitions, drawer navigation, a music player, responsive sections, and separate production CSS tooling instead of relying on CDN-only styles.",
    "impact": [
      "3 core pages",
      "6 JavaScript modules",
      "Tailwind 4.1.8"
    ],
    "tags": [
      "Web / CMS",
      "Personal Projects"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": false,
    "status": "Published case study",
    "href": "/portfolio/legacy-portfolio-website"
  },
  {
    "title": "Extreme Surfing",
    "slug": "extreme-surfing",
    "category": "Multi-Page Web Build",
    "summary": "Built a responsive adventure-sports concept across service, activity, FAQ, review, and supporting pages. Apparently one homepage was not enough ocean, so the project kept acquiring routes.",
    "impact": [
      "Multi-page architecture",
      "Responsive page system",
      "Reusable visual patterns"
    ],
    "tags": [
      "Web / CMS",
      "Personal Projects"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": false,
    "status": "Live web build",
    "href": "https://rahibazam.github.io/extreme-surfing/",
    "linkType": "external",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer",
    "buttonLabel": "View Live Site ↗",
    "generateCaseStudyPage": false,
    "visualMode": "code-preview"
  },
  {
    "title": "Rinterio",
    "slug": "rinterio",
    "category": "Design-to-Code Build",
    "summary": "Translated a supplied interior-design Figma into a responsive Tailwind and DaisyUI interface, focusing on layout fidelity, component structure, typography, and getting the design to behave outside Figma.",
    "impact": [
      "Figma-to-code execution",
      "Responsive layout work",
      "Structured component styling"
    ],
    "tags": [
      "Web / CMS",
      "Landing Pages",
      "Personal Projects"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": false,
    "status": "Live web build",
    "href": "https://rahibazam.github.io/rinterio/",
    "linkType": "external",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer",
    "buttonLabel": "View Live Site ↗",
    "generateCaseStudyPage": false,
    "visualMode": "code-preview"
  },
  {
    "title": "Legal Solutions",
    "slug": "legal-solutions",
    "category": "Front-End Web Concept",
    "summary": "Built a responsive fictional law-firm website around a clean professional visual system, structured content sections, strong hierarchy, and the radical legal-tech concept of making information easy to scan.",
    "impact": [
      "Responsive front-end",
      "Clear content hierarchy",
      "Professional visual system"
    ],
    "tags": [
      "Web / CMS",
      "Landing Pages",
      "Personal Projects"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": false,
    "status": "Live web build",
    "href": "https://rahibazam.github.io/legal-solutions/",
    "linkType": "external",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer",
    "buttonLabel": "View Live Site ↗",
    "generateCaseStudyPage": false,
    "visualMode": "code-preview"
  },
  {
    "title": "Tea House",
    "slug": "tea-house",
    "category": "Responsive Landing Page",
    "summary": "Built a responsive Tailwind product page with hero messaging, featured products, editorial content, review cards, news sections, and enough tea imagery to make the browser feel adequately hydrated.",
    "impact": [
      "Responsive product layout",
      "Multi-section composition",
      "Tailwind implementation"
    ],
    "tags": [
      "Web / CMS",
      "Landing Pages",
      "Personal Projects"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": false,
    "status": "Live web build",
    "href": "https://rahibazam.github.io/tea-house-built-with-tailwind/",
    "linkType": "external",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer",
    "buttonLabel": "View Live Site ↗",
    "generateCaseStudyPage": false,
    "visualMode": "code-preview"
  },
  {
    "title": "Penguin Fashion",
    "slug": "penguin-fashion",
    "category": "E-Commerce Web Concept",
    "summary": "Built a responsive Tailwind fashion storefront concept with product-focused sections, strong promotional hierarchy, and mobile-friendly layouts. No penguins were consulted during the information-architecture phase.",
    "impact": [
      "Responsive storefront layout",
      "Product-focused interface",
      "Mobile-friendly composition"
    ],
    "tags": [
      "Web / CMS",
      "Landing Pages",
      "Personal Projects"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": false,
    "status": "Live web build",
    "href": "https://rahibazam.github.io/penguin-fashion-tailwind/",
    "linkType": "external",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer",
    "buttonLabel": "View Live Site ↗",
    "generateCaseStudyPage": false,
    "visualMode": "code-preview"
  },
  {
    "title": "G3 Architect",
    "slug": "g3-architect",
    "category": "Architecture Web Concept",
    "summary": "Built a responsive architecture-firm concept around large visual sections, project presentation, structured company content, and a layout that had to remain orderly even when the screen stopped cooperating.",
    "impact": [
      "Responsive content layout",
      "Architecture-focused presentation",
      "Structured visual hierarchy"
    ],
    "tags": [
      "Web / CMS",
      "Landing Pages",
      "Personal Projects"
    ],
    "image": "/images/projects/project-placeholder.svg",
    "featured": false,
    "status": "Live web build",
    "href": "https://rahibazam.github.io/g3-architect-website/",
    "linkType": "external",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer",
    "buttonLabel": "View Live Site ↗",
    "generateCaseStudyPage": false,
    "visualMode": "code-preview"
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
