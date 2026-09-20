/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rahib-azam.vercel.app'
          }
        ],
        destination: 'https://www.rahibazam.com/:path*',
        permanent: true
      }
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
