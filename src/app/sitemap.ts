import type { MetadataRoute } from 'next';
import { caseStudies } from '@/data/caseStudies';
import { getSiteUrl } from '@/lib/siteUrl';

const staticRoutes: Array<{
  path: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
}> = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/portfolio', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/hubspot', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: `${siteUrl}${path}`,
      changeFrequency,
      priority
    })),
    ...caseStudies.map(({ slug }) => ({
      url: `${siteUrl}/portfolio/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }))
  ];
}
