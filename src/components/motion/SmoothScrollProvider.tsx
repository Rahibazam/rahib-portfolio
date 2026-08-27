'use client';

import { ReactLenis } from 'lenis/react';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        anchors: true,
        autoRaf: true,
        lerp: 0.075,
        respectReducedMotion: true,
        smoothWheel: true,
        stopInertiaOnNavigate: true,
        syncTouch: false,
        wheelMultiplier: 0.92
      }}
    >
      {children}
    </ReactLenis>
  );
}
