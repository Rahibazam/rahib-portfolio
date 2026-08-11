# Rahib Azam Portfolio Revamp — Full Codex Project Kit

This folder is a complete starter kit for rebuilding Rahib Azam's personal portfolio locally before deployment.

The intended local location is:

```bash
/Users/rahib/Code/Projects/rahib-portfolio
```

You can rename the final project folder, but keep the internal structure intact.

---

## What this kit contains

```txt
rahib-portfolio-codex-project-kit/
  README.md
  START_HERE_FOR_CODEX.md
  CODEX_INSTRUCTIONS.md
  package.json
  next.config.mjs
  tailwind.config.ts
  postcss.config.mjs
  tsconfig.json
  .eslintrc.json
  .gitignore

  docs/
    PROJECT_GUIDE.md
    STYLE_GUIDE.md
    ANIMATION_SPEC.md
    ROUTES.md
    QA_CHECKLIST.md
    CONTENT.md
    PROJECTS.json
    SITE_CONFIG.json
    COMPONENTS_SPEC.md
    DATA_SCHEMA.md
    IMPLEMENTATION_PLAN.md
    ACCESSIBILITY_PERFORMANCE.md
    LOCAL_SETUP.md
    DEPLOYMENT_NOTES.md
    CODEX_RUN_PROMPT.md

  design-references/
    Home-v2.png
    Portfolio-v2.png
    HubSpot-v2.png
    About-v2.png
    Contact-v2.png

  public/
    images/
      profile/
      projects/
      backgrounds/
    resume/

  src/
    app/
    components/
    data/
    lib/
```

---

## The most important files for Codex

Codex should read these first, in this order:

1. `START_HERE_FOR_CODEX.md`
2. `CODEX_INSTRUCTIONS.md`
3. `docs/PROJECT_GUIDE.md`
4. `docs/STYLE_GUIDE.md`
5. `docs/ANIMATION_SPEC.md`
6. `docs/ROUTES.md`
7. `docs/CONTENT.md`
8. `docs/PROJECTS.json`
9. `docs/QA_CHECKLIST.md`
10. The reference PNGs in `design-references/`

---

## Local setup

From inside the project folder:

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

Before any final handoff, Codex must run:

```bash
npm run type-check
npm run lint
npm run build
```

If linting is not available due to a Next.js version change, Codex must explain that honestly and still run type-check/build.

---

## Non-negotiables

The finished site must:

- Be mobile-first.
- Follow the provided design reference PNGs closely.
- Use a dark futuristic CRM command-center visual system.
- Include a fade-to-black route transition between all internal pages.
- Include a page loader/transition overlay.
- Include an animated background.
- Include floating sections and glassmorphic cards.
- Respect `prefers-reduced-motion`.
- Avoid generic portfolio template styling.
- Avoid light theme sections.
- Avoid lorem ipsum.
- Avoid fake case studies unless clearly marked as draft placeholders.

---

## Suggested Codex workflow

1. Read `START_HERE_FOR_CODEX.md`.
2. Inspect the starter code.
3. Compare layout and motion requirements against `design-references/`.
4. Implement or refine the Next.js site locally.
5. Keep changes scoped.
6. Run type-check, lint, and build.
7. Return changed files, test results, and remaining TODOs.

---

## Current scaffold status

This kit includes a working starter scaffold, but it is intentionally not the final polished site. Codex should use it as a strong base and then refine the implementation against the design references.

The scaffold already includes:

- Next.js App Router structure.
- Tailwind CSS setup.
- Dark design tokens.
- Route files for Home, About, Portfolio, HubSpot, Contact.
- Header and footer components.
- Animated background component.
- Page transition provider.
- Transition link component.
- Floating/reveal motion helpers.
- Starter content/data files.

Codex should improve, polish, and complete from here.
