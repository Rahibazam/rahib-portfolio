import type { MetadataRoute } from 'next';
import { caseStudies } from '@/data/caseStudies';
import { getSiteUrl } from '@/lib/siteUrl';

const staticRoutes: Array<{
  path: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
  createdAt: string;
  updatedAt: string;
}> = [
  { path: '', changeFrequency: 'weekly', priority: 1, createdAt: '2026-08-11', updatedAt: '2026-08-11' },
  { path: '/portfolio', changeFrequency: 'weekly', priority: 0.9, createdAt: '2026-08-11', updatedAt: '2026-08-11' },
  { path: '/hubspot', changeFrequency: 'monthly', priority: 0.8, createdAt: '2026-08-11', updatedAt: '2026-08-11' },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7, createdAt: '2026-08-11', updatedAt: '2026-08-11' },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.7, createdAt: '2026-08-11', updatedAt: '2026-08-11' },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3, createdAt: '2026-09-11', updatedAt: '2026-09-11' },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3, createdAt: '2026-09-11', updatedAt: '2026-09-11' }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority, updatedAt }) => ({
      url: `${siteUrl}${path}`,
      lastModified: updatedAt,
      changeFrequency,
      priority
    })),
    ...caseStudies.filter(({ publicationStatus }) => publicationStatus === 'published').map(({ slug, updatedAt }) => ({
      url: `${siteUrl}/portfolio/${slug}`,
      lastModified: updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }))
  ];
}
