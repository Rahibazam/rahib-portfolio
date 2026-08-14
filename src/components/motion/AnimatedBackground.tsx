'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { motionDurations } from './variants';

export function AnimatedBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background">
      <div className="technical-paper-overlay absolute inset-0" />
      <div className="noise-overlay absolute inset-0" />

      <svg
        className="absolute inset-0 h-full w-full opacity-45 sm:opacity-60"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="signal-cyan" x1="0" y1="0" x2="1600" y2="1000" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0AC4FF" stopOpacity="0" />
            <stop offset="0.28" stopColor="#0AC4FF" stopOpacity="0.34" />
            <stop offset="0.7" stopColor="#5865FF" stopOpacity="0.2" />
            <stop offset="1" stopColor="#8B6CFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="signal-violet" x1="1600" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B6CFF" stopOpacity="0" />
            <stop offset="0.34" stopColor="#8B6CFF" stopOpacity="0.28" />
            <stop offset="0.76" stopColor="#0AC4FF" stopOpacity="0.16" />
            <stop offset="1" stopColor="#0AC4FF" stopOpacity="0" />
          </linearGradient>
          <filter id="signal-glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="hidden sm:block" strokeLinecap="round">
          <path d="M-120 208C132 93 285 270 500 191C690 121 816 55 1037 198C1246 333 1415 300 1724 107" stroke="url(#signal-cyan)" strokeWidth="1.2" />
          <path d="M-84 746C122 662 236 774 416 695C610 611 702 440 910 490C1111 539 1201 768 1450 695C1536 669 1626 617 1700 558" stroke="url(#signal-violet)" strokeWidth="1" />
          <path d="M188 1038C260 843 361 816 519 821C746 829 837 966 1031 884C1197 814 1252 584 1477 510C1557 483 1641 478 1714 489" stroke="url(#signal-cyan)" strokeWidth="0.8" strokeDasharray="2 12" />
        </g>

        <g strokeLinecap="round" opacity="0.58">
          <path d="M-80 354C148 270 274 405 449 347C594 300 660 191 818 214C962 235 1054 366 1237 337C1390 312 1511 208 1684 241" stroke="url(#signal-cyan)" strokeWidth="0.8" strokeDasharray="1 16" />
          <path d="M-108 875C128 791 267 891 458 839C659 784 713 660 892 680C1077 701 1185 856 1374 808C1484 780 1588 711 1707 682" stroke="url(#signal-violet)" strokeWidth="0.75" />
        </g>

        <g className="opacity-45 sm:opacity-70" stroke="url(#signal-cyan)" strokeWidth="0.8">
          <path d="M1190 24C1321-38 1498 3 1547 109C1599 221 1494 326 1350 323C1202 320 1103 222 1146 123C1173 60 1265 34 1355 52C1441 69 1487 130 1463 188C1436 252 1340 269 1268 228C1206 193 1191 134 1227 94C1262 54 1336 55 1384 88" />
          <path d="M1240 31C1360-10 1501 39 1523 137C1544 230 1447 299 1334 282C1223 265 1162 184 1198 116C1229 58 1313 44 1380 74C1446 104 1461 164 1422 205C1380 248 1305 235 1271 195C1241 159 1254 112 1298 94" opacity="0.46" />
        </g>

        <g className="opacity-35 sm:opacity-55" stroke="url(#signal-violet)" strokeWidth="0.75">
          <path d="M-42 730C62 624 220 604 320 687C422 771 378 897 258 953C132 1011-25 958-67 843C-96 764-43 690 49 660C142 629 241 668 267 740C293 811 230 877 149 882C73 887 13 840 23 786C34 733 99 704 157 721" />
          <path d="M-7 749C77 664 207 650 282 716C357 781 319 876 224 916C125 957 13 914-10 829C-27 769 18 716 87 702C153 688 217 721 227 773C236 821 187 860 135 853" opacity="0.48" />
        </g>

        <g fill="#0AC4FF">
          <circle cx="449" cy="347" r="2.5" opacity="0.68" />
          <circle cx="818" cy="214" r="2" opacity="0.46" />
          <circle cx="892" cy="680" r="2.5" opacity="0.52" />
          <circle cx="1237" cy="337" r="1.8" opacity="0.42" />
        </g>
        <g fill="#8B6CFF">
          <circle cx="416" cy="695" r="2" opacity="0.5" />
          <circle cx="1374" cy="808" r="2.5" opacity="0.55" />
        </g>

        {!reducedMotion ? (
          <g filter="url(#signal-glow)">
            <motion.circle
              r="3.5"
              fill="#63DCFF"
              animate={{ cx: [-60, 265, 604, 948, 1320, 1660], cy: [350, 392, 281, 266, 331, 244], opacity: [0, 0.9, 0.65, 0.8, 0.55, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.circle
              r="3"
              fill="#9B83FF"
              animate={{ cx: [1660, 1374, 1110, 892, 482, -40], cy: [682, 808, 777, 680, 832, 870], opacity: [0, 0.8, 0.55, 0.75, 0.5, 0] }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear', delay: 4 }}
            />
          </g>
        ) : null}
      </svg>

      <motion.div
        className="absolute -left-32 top-8 h-80 w-80 rounded-full bg-secondary/12 blur-3xl will-change-transform sm:h-[32rem] sm:w-[32rem] sm:bg-secondary/18"
        animate={reducedMotion ? undefined : { x: [0, 24, 0], y: [0, -26, 0], scale: [1, 1.06, 1] }}
        transition={reducedMotion ? undefined : { duration: motionDurations.background, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-32 top-24 h-80 w-80 rounded-full bg-accent/14 blur-3xl will-change-transform sm:h-[38rem] sm:w-[38rem] sm:bg-accent/22"
        animate={reducedMotion ? undefined : { x: [0, -24, 0], y: [0, 28, 0], scale: [1, 1.05, 1] }}
        transition={reducedMotion ? undefined : { duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/8 blur-3xl sm:h-[28rem] sm:w-[28rem] sm:bg-secondary/10"
        style={{ x: '-50%' }}
        animate={reducedMotion ? undefined : { opacity: [0.34, 0.62, 0.34], scale: [1, 1.08, 1] }}
        transition={reducedMotion ? undefined : { duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.58))]" />
    </div>
  );
}
