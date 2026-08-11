'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { Reveal } from '@/components/motion/Reveal';
import { Badge } from '@/components/ui/Badge';
import { PortfolioProjectVisual } from './PortfolioProjectVisual';

const portfolioFilters = [
  { label: 'All', slug: 'all' },
  { label: 'HubSpot', slug: 'hubspot' },
  { label: 'CRM', slug: 'crm' },
  { label: 'Automation', slug: 'automation' },
  { label: 'Reporting', slug: 'reporting' },
  { label: 'Web / CMS', slug: 'web-cms' },
  { label: 'Landing Pages', slug: 'landing-pages' },
  { label: 'Data Cleanup', slug: 'data-cleanup' },
  { label: 'Integrations', slug: 'integrations' },
  { label: 'Personal Projects', slug: 'personal-projects' }
] as const;

type PortfolioFilterSlug = (typeof portfolioFilters)[number]['slug'];
type SelectablePortfolioFilterSlug = Exclude<PortfolioFilterSlug, 'all'>;

const validFilterSlugs = new Set<SelectablePortfolioFilterSlug>(
  portfolioFilters
    .map((filter) => filter.slug)
    .filter((slug): slug is SelectablePortfolioFilterSlug => slug !== 'all')
);

function slugifyFilter(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s*\/\s*/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function getProjectFilterSlugs(project: Project) {
  const searchable = [project.title, project.category, project.summary, ...project.tags].join(' ').toLowerCase();
  const projectTagSlugs = project.tags.map(slugifyFilter);
  const terms: Record<SelectablePortfolioFilterSlug, string[]> = {
    hubspot: ['hubspot'],
    crm: ['crm'],
    automation: ['automation', 'workflow', 'workflows'],
    reporting: ['reporting', 'dashboard', 'dashboards', 'analytics'],
    'web-cms': ['web', 'cms', 'next.js', 'html', 'css'],
    'landing-pages': ['landing-page', 'landing-pages', 'forms', 'conversion'],
    'data-cleanup': ['data-cleanup', 'deduplication', 'duplicate', 'messy-data'],
    integrations: ['integration', 'integrations', 'sync'],
    'personal-projects': ['personal', 'private', 'memory', 'media', 'next.js']
  };

  return portfolioFilters
    .map((filter) => filter.slug)
    .filter((slug): slug is SelectablePortfolioFilterSlug => slug !== 'all')
    .filter((slug) => terms[slug].some((term) => searchable.includes(term) || projectTagSlugs.includes(term)));
}

export function PortfolioProjectGrid({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedTags = useMemo(() => {
    const raw = searchParams.get('tags');
    if (!raw) return [];

    const requestedTags = raw
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag): tag is SelectablePortfolioFilterSlug => validFilterSlugs.has(tag as SelectablePortfolioFilterSlug));

    return portfolioFilters
      .map((filter) => filter.slug)
      .filter((slug): slug is SelectablePortfolioFilterSlug => slug !== 'all' && requestedTags.includes(slug));
  }, [searchParams]);

  const visibleProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;

    return projects.filter((project) => {
      const projectFilterSlugs = getProjectFilterSlugs(project);
      return projectFilterSlugs.some((slug) => selectedTags.includes(slug));
    });
  }, [projects, selectedTags]);

  function updateTags(nextTags: SelectablePortfolioFilterSlug[]) {
    const params = new URLSearchParams(searchParams.toString());

    if (nextTags.length === 0) {
      params.delete('tags');
    } else {
      params.set('tags', nextTags.join(','));
    }

    const query = params.toString().replace(/%2C/g, ',');
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function handleFilterClick(slug: PortfolioFilterSlug) {
    if (slug === 'all') {
      updateTags([]);
      return;
    }

    const nextTags = selectedTags.includes(slug)
      ? selectedTags.filter((tag) => tag !== slug)
      : [...selectedTags, slug];

    const orderedTags = portfolioFilters
      .map((filter) => filter.slug)
      .filter((filterSlug): filterSlug is SelectablePortfolioFilterSlug => filterSlug !== 'all' && nextTags.includes(filterSlug));

    updateTags(orderedTags);
  }

  return (
    <>
      <div aria-label="Filter projects by system" role="group" className="-mx-5 mt-10 overflow-x-auto px-5 pb-3 sm:-mx-8 sm:px-8 xl:mx-0 xl:px-0">
        <div className="flex min-w-max gap-3 rounded-2xl border border-secondary/15 bg-[#05091b]/55 p-2 backdrop-blur-xl xl:min-w-0 xl:flex-wrap">
          {portfolioFilters.map((filter) => {
            const active = filter.slug === 'all' ? selectedTags.length === 0 : selectedTags.includes(filter.slug);
            return (
              <button
                key={filter.slug}
                type="button"
                aria-pressed={active}
                onClick={() => handleFilterClick(filter.slug)}
                className={`min-h-11 shrink-0 rounded-xl border px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] transition duration-300 ${active ? 'border-secondary/55 bg-gradient-to-r from-secondary to-purple text-white shadow-[0_0_24px_rgba(10,196,255,0.28)]' : 'border-white/10 bg-white/[0.025] text-white/58 hover:border-secondary/35 hover:text-cyan-100'}`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {visibleProjects.length ? (
        <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 0.055, 0.28)} className="h-full">
              <article className="home-module interactive-card flex h-full min-h-[35rem] flex-col overflow-hidden rounded-card border-secondary/30">
                <PortfolioProjectVisual slug={project.slug} />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-secondary">{project.category}</p>
                    {project.status ? <Badge variant="soft" className="text-[0.58rem]">{project.status}</Badge> : null}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-black uppercase leading-tight text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{project.summary}</p>
                  <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-cyan-100/75"><ArrowRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-secondary" />{project.impact[0]}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag} className="min-h-6 px-2.5 text-[0.58rem]">{tag}</Badge>)}</div>
                  <span className="mt-auto inline-flex w-fit items-center gap-2 pt-7 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white/42">Case study draft</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="home-module mt-7 rounded-card border-secondary/20 p-8 text-center sm:p-12">
          <p className="font-display text-xl font-black uppercase text-white">No projects match those filters yet.</p>
          <p className="mt-3 text-sm text-white/55">Try clearing the filters or choosing a different system.</p>
          <button
            type="button"
            onClick={() => updateTags([])}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border border-secondary/45 bg-secondary/[0.08] px-5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-secondary transition duration-300 hover:border-secondary/70 hover:bg-secondary/[0.14] hover:text-cyan-100"
          >
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
}
