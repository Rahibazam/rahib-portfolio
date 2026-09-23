import type { Metadata, Viewport } from 'next';
import { Orbitron, Quantico, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'lenis/dist/lenis.css';
import './globals.css';
import { HubSpotTracking } from '@/components/analytics/HubSpotTracking';
import { PrivacyNotice } from '@/components/privacy/PrivacyNotice';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SystemBootLoader } from '@/components/layout/SystemBootLoader';
import { JsonLd } from '@/components/seo/JsonLd';
import { AnimatedBackground } from '@/components/motion/AnimatedBackground';
import { PageTransitionProvider } from '@/components/motion/PageTransitionProvider';
import { SmoothScrollProvider } from '@/components/motion/SmoothScrollProvider';
import { siteConfig } from '@/data/site';
import { getSiteUrl } from '@/lib/siteUrl';
import { getSiteStructuredData } from '@/lib/structuredData';
import { getSocialMetadata } from '@/lib/socialMetadata';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
});

const quantico = Quantico({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-display'
});

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: siteConfig.metaTitle,
  description: siteConfig.metaDescription,
  metadataBase: new URL(getSiteUrl()),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }
    ]
  },
  ...getSocialMetadata({ title: siteConfig.metaTitle, description: siteConfig.metaDescription, path: '/' })
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#070B1D'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${quantico.variable} ${orbitron.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <JsonLd id="site-structured-data" data={getSiteStructuredData()} />
        <SystemBootLoader />
        <SmoothScrollProvider>
          <PageTransitionProvider>
            <div className="site-shell">
              <AnimatedBackground />
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <PrivacyNotice />
          </PageTransitionProvider>
        </SmoothScrollProvider>
        <HubSpotTracking />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
