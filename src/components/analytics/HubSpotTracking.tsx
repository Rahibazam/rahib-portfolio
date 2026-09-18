'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

type HubSpotWindow = Window & {
  _hsq?: Array<[string, ...unknown[]]>;
};

export function HubSpotTracking() {
  const pathname = usePathname();
  const isInitialPageView = useRef(true);
  const [canLoadTracking, setCanLoadTracking] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    // HubSpot's analytics bundle is intentionally kept out of the initial
    // render window; it can otherwise monopolize slower mobile CPUs while the
    // hero and navigation are becoming interactive.
    const trackingTimer = window.setTimeout(() => setCanLoadTracking(true), 8000);
    return () => window.clearTimeout(trackingTimer);
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    if (isInitialPageView.current) {
      isInitialPageView.current = false;
      return;
    }

    const hubSpotWindow = window as HubSpotWindow;
    const path = `${pathname}${window.location.search}`;

    hubSpotWindow._hsq = hubSpotWindow._hsq ?? [];
    hubSpotWindow._hsq.push(['setPath', path]);
    hubSpotWindow._hsq.push(['trackPageView']);
  }, [pathname]);

  if (process.env.NODE_ENV !== 'production' || !canLoadTracking) return null;

  return (
    <Script
      id="hs-script-loader"
      src="https://js-na2.hs-scripts.com/50435581.js"
      strategy="lazyOnload"
    />
  );
}
