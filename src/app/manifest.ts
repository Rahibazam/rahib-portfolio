import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.metaTitle,
    short_name: siteConfig.name,
    description:
      'HubSpot, CRM architecture, automation, reporting, web development, CMS, and technical systems by Rahib Azam.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#070B1D',
    theme_color: '#070B1D',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}
