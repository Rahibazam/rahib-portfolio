const localUrl = 'http://localhost:3000';
const productionUrl = 'https://www.rahibazam.com';

function normalizeSiteUrl(value: string) {
  const url = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  return url.replace(/\/+$/, '');
}

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredUrl) return normalizeSiteUrl(configuredUrl);
  if (process.env.NODE_ENV === 'production') return productionUrl;

  const previewUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  return previewUrl ? normalizeSiteUrl(previewUrl) : localUrl;
}
