export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeInOutSoft = [0.65, 0, 0.35, 1] as const;

export const motionDurations = {
  fast: 0.2,
  normal: 0.45,
  slow: 0.72,
  pageFade: 0.55,
  pageHold: 0.12,
  background: 20
} as const;

export const pageTransitionTimings = {
  standard: {
    fadeInMs: 550,
    holdMs: 120,
    fadeOutMs: 550
  },
  reduced: {
    fadeInMs: 100,
    holdMs: 20,
    fadeOutMs: 120
  }
} as const;

export const pageEnterStates = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
} as const;

export const revealStates = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
} as const;
