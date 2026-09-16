import { siteConfig } from '@/data/site';
import { getSiteUrl } from '@/lib/siteUrl';

export function getSiteStructuredData() {
  const siteUrl = getSiteUrl();
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: `${siteConfig.name} — ${siteConfig.role}`,
        description: siteConfig.metaDescription,
        inLanguage: 'en',
        publisher: {
          '@id': personId
        }
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: siteConfig.name,
        url: siteUrl,
        email: `mailto:${siteConfig.email}`,
        jobTitle: siteConfig.role,
        homeLocation: {
          '@type': 'Place',
          name: siteConfig.location
        },
        sameAs: [siteConfig.linkedin, siteConfig.github],
        knowsAbout: [
          'HubSpot implementation',
          'CRM architecture',
          'Workflow automation',
          'CRM data quality',
          'Reporting and dashboards',
          'Web development',
          'HubSpot CMS',
          'Technical SEO implementation'
        ]
      }
    ]
  };
}
