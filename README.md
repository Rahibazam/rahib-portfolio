# Rahib Azam — Portfolio

A personal portfolio for my work across **HubSpot, CRM architecture, automation, reporting, data, and web development**.

It is also what happens when a portfolio stops being a résumé with cards and starts developing opinions.

Built with **Next.js, React, TypeScript, Tailwind CSS, and Framer Motion**.

---

## About the project

I wanted this site to do more than list technologies and say I am "passionate about building digital experiences."

So this portfolio is structured around the kind of work I actually do:

- HubSpot implementation and CRM architecture
- workflow automation and lifecycle systems
- CRM cleanup, reporting, and data operations
- integrations and internal tooling
- responsive web development
- HubSpot CMS and WordPress implementation
- technical QA and SEO implementation
- custom tools built when doing something manually one more time felt unreasonable

The visual direction is intentionally closer to a **CRM command center** than a traditional portfolio: dark interfaces, glass panels, cyan/purple lighting, technical diagrams, motion, and more small UI details than were strictly necessary.

That last part was inevitable.

---

## What is inside

The site currently includes:

| Route | Purpose |
| --- | --- |
| `/` | Home, positioning, selected work, experience, process |
| `/portfolio` | Filterable project and case-study archive |
| `/portfolio/[slug]` | Deep-dive case studies for projects where the interesting part is mostly invisible |
| `/hubspot` | HubSpot implementation, CRM, automation, reporting, and integrations |
| `/about` | Background, experience, toolkit, working style, and the human configuration |
| `/contact` | Project inquiry form, FAQs, contact information, and selected delivery metrics |
| `/privacy` | Privacy policy |
| `/terms` | Terms and conditions |

There is also a custom `404`, generated `robots.txt`, and sitemap support.

---

## Portfolio architecture

Not every project needs a 1,000-word case study.

The Portfolio uses one shared grid and filter system, but projects can behave in two ways:

### Internal case studies

Larger CRM, automation, tooling, and systems projects open a dedicated `/portfolio/[slug]` page.

Those pages focus on:

**Challenge → approach → architecture → outcomes → deliverables**

Because screenshots are not especially useful when the interesting part is a data model, workflow graph, crawler, or CRM cleanup system.

### External web builds

Older visual website projects stay in the same Portfolio grid, but their CTA opens the actual live website in a new tab instead of generating a case-study page.

Sometimes the website is the case study. There is no need to write an architectural dissertation about a landing page that you can simply click.

---

## Existing Portfolio filters

Projects use a deliberately small shared taxonomy:

- HubSpot
- CRM
- Automation
- Reporting
- Web / CMS
- Landing Pages
- Data Cleanup
- Integrations
- Personal Projects

No filter button for every library I have ever installed. Civilization continues.

---

## Design system

The UI is built around a dark, technical visual language:

- deep navy / near-black surfaces
- cyan and purple accent lighting
- glassmorphic cards and panels
- animated grid / particle backgrounds
- technical diagrams and dashboard-style UI
- compact labels and monospace details
- responsive floating sections
- custom hover and focus states
- fade-to-black internal route transitions

The goal was to make the site feel distinct without turning every section into a GPU benchmark.

---

## Motion

Motion is used as part of the interface rather than as decoration.

The site includes:

- page-entry animation
- floating/reveal sections
- animated backgrounds
- interactive cards
- route-transition overlays
- smooth scrolling
- reduced-motion handling

`prefers-reduced-motion` is respected so the interface remains usable when motion is disabled.

---

## Content system

Most page copy and project information lives outside the page components in `src/data`.

```txt
src/data/
├── about.ts
├── caseStudies.ts
├── contact.ts
├── home.ts
├── hubspot.ts
├── projects.ts
├── site.ts
└── testimonials.ts
```

This keeps the page components focused on presentation and makes it easier to update projects, case studies, FAQs, experience, and site copy without hunting through JSX.

My future self is already difficult enough to work with.

---

## Contact forms + HubSpot

The contact experience submits through a server-side Next.js API route before the data reaches HubSpot.

The form layer includes:

- server-side field validation
- allowed-value validation
- request-size limits
- same-origin checks
- a honeypot field
- minimum completion-time checks
- basic rate limiting
- separate contact and footer form definitions

The site also includes a privacy notice around HubSpot and related tracking technologies.

No client-side secret is required for the public HubSpot form submission flow.

---

## SEO

The site is intentionally built around clear service language rather than keyword soup.

Core topics include:

- HubSpot implementation
- CRM architecture
- workflow automation
- CRM cleanup
- reporting and dashboards
- HubSpot CMS
- web development
- landing page development
- integrations
- data quality

The rule behind the copy is simple:

> **SEO writes the nouns. I write everything around them.**

The project also includes page metadata, `robots.txt`, and sitemap generation.

---

## Accessibility + performance

The site is highly visual, but not at the expense of basic usability.

The implementation accounts for:

- semantic page structure
- keyboard-accessible interactive elements
- visible focus states
- accessible form labels
- reduced-motion preferences
- responsive layouts
- lightweight CSS-based ambient effects where practical
- motion focused primarily on transforms and opacity

The site is tested across small mobile widths as well as desktop layouts because apparently `320px` still has jurisdiction.

---

## Tech stack

| Technology | Use |
| --- | --- |
| [Next.js](https://nextjs.org/) | App Router, routing, metadata, API routes |
| [React](https://react.dev/) | UI composition |
| [TypeScript](https://www.typescriptlang.org/) | Application and data typing |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and responsive layout |
| [Framer Motion](https://www.framer.com/motion/) | UI and page motion |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth scrolling |
| [Lucide React](https://lucide.dev/) | Interface icons |
| [HubSpot](https://www.hubspot.com/) | Contact-form destination and site tooling |

Current project versions are defined in `package.json`.

---

## Local development

Clone the repository:

```bash
git clone https://github.com/Rahibazam/rahib-portfolio.git
cd rahib-portfolio
```

Install dependencies:

```bash
npm install
```

Create your local environment file:

```bash
cp .env.example .env.local
```

The public site URL is the only environment value currently documented:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Available scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run type-check
```

Before shipping changes, I normally run:

```bash
npm run type-check
npm run lint
npm run build
```

A radical process known internally as "checking whether the code still works."

---

## Project structure

```txt
rahib-portfolio/
├── public/
├── scripts/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── api/
│   │   ├── contact/
│   │   ├── hubspot/
│   │   ├── portfolio/
│   │   │   └── [slug]/
│   │   ├── privacy/
│   │   ├── terms/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   ├── data/
│   └── lib/
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## A note on the case studies

Some professional work is intentionally generalized.

Client names, internal architecture, database sizes, commercial results, and operational details are omitted or made less specific where confidentiality matters. The goal is to explain the system and my contribution without turning a public GitHub repository into an accidental client documentation portal.

Personal projects are also selectively anonymized where the underlying content is private.

---

## Why this exists

Partly because I needed a portfolio.

Mostly because once I started rebuilding it, the reasonable stopping point disappeared.

The site is meant to show the overlap I work in: **CRM systems, automation, data, web development, and the implementation work connecting them**.

If you are here to inspect the code, welcome.

If you found an oddly specific responsive bug, I probably want to know.

---

## Author

**Rahib Azam**  
CRM & Web Technologist  
Dhaka, Bangladesh

GitHub: [@Rahibazam](https://github.com/Rahibazam)

---

## License

This is a personal portfolio repository and currently does not include an open-source license.

The source is public for viewing and reference, but the portfolio copy, case-study content, branding, and personal assets are my own. Please do not republish them as your own portfolio.

---

<sub>Built with an unreasonable amount of QA and a completely normal number of browser tabs.</sub>
