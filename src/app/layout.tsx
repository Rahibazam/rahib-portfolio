import type { Metadata, Viewport } from 'next';
import { Orbitron, Quantico, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SystemBootLoader } from '@/components/layout/SystemBootLoader';
import { AnimatedBackground } from '@/components/motion/AnimatedBackground';
import { PageTransitionProvider } from '@/components/motion/PageTransitionProvider';
import { siteConfig } from '@/data/site';

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
  metadataBase: new URL('http://localhost:3000')
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
      className={`${spaceGrotesk.variable} ${quantico.variable} ${orbitron.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <SystemBootLoader />
        <PageTransitionProvider>
          <div className="site-shell">
            <AnimatedBackground />
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </PageTransitionProvider>
      </body>
    </html>
  );
}
