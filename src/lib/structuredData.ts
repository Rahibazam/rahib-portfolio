import { siteConfig } from '@/data/site';
import { getSiteUrl } from '@/lib/siteUrl';

export function getSiteStructuredData() {
  const siteUrl = getSiteUrl();
  const { personId, websiteId } = getEntityIds();

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

export function getEntityIds() {
  const siteUrl = getSiteUrl();
  return {
    personId: `${siteUrl}/#person`,
    websiteId: `${siteUrl}/#website`
  };
}

export function getBreadcrumbStructuredData(items: Array<{ name: string; path: string }>) {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`
    }))
  };
}

export function getProfilePageStructuredData() {
  const siteUrl = getSiteUrl();
  const { personId, websiteId } = getEntityIds();

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteUrl}/about#profile`,
    name: `About ${siteConfig.name}`,
    url: `${siteUrl}/about`,
    mainEntity: { '@id': personId },
    isPartOf: { '@id': websiteId }
  };
}
