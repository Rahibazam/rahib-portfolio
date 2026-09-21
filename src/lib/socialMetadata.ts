import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { getSiteUrl } from '@/lib/siteUrl';

type SocialMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
};

export function getSocialMetadata({ title, description, path, type = 'website' }: SocialMetadataOptions): Pick<Metadata, 'openGraph' | 'twitter'> {
  const siteUrl = getSiteUrl();
  const image = `${siteUrl}/opengraph-image`;

  return {
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: siteConfig.name,
      type,
      locale: 'en_US',
      images: [{ url: image, width: 1200, height: 630, alt: `${siteConfig.name} — ${siteConfig.role}` }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}
