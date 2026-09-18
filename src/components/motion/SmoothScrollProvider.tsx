'use client';

import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateEnabledState = () => setEnabled(finePointer.matches && !reducedMotion.matches);

    updateEnabledState();
    finePointer.addEventListener('change', updateEnabledState);
    reducedMotion.addEventListener('change', updateEnabledState);

    return () => {
      finePointer.removeEventListener('change', updateEnabledState);
      reducedMotion.removeEventListener('change', updateEnabledState);
    };
  }, []);

  if (!enabled) return children;

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
