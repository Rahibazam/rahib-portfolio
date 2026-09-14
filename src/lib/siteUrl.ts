const localUrl = 'http://localhost:3000';

function normalizeSiteUrl(value: string) {
  const url = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  return url.replace(/\/+$/, '');
}

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  return configuredUrl ? normalizeSiteUrl(configuredUrl) : localUrl;
}
