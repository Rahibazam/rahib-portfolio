'use client';

import { useId } from 'react';

export type CassetteSvgProps = {
  isPlaying: boolean;
  variant: 'major-crimes' | 'anything-human';
  label: string;
  side: 'SIDE A' | 'SIDE B';
  className?: string;
};

export function CassetteSvg({ isPlaying, variant, label, side, className = '' }: CassetteSvgProps) {
  const id = useId().replace(/:/g, '');
  const reelGlow1Id = `reelGlow1-${id}`;
  const reelGlow2Id = `reelGlow2-${id}`;
  const cassetteBodyId = `cassetteBody-${id}`;
  const cassetteBodyCyanId = `cassetteBodyCyan-${id}`;
  const cassetteBodyVioletId = `cassetteBodyViolet-${id}`;
  const cassetteBodyClipId = `cassetteBodyClip-${id}`;
  const glow1Id = `glow1-${id}`;
  const glow2Id = `glow2-${id}`;
  const accent = variant === 'major-crimes' ? '#ff3f2f' : '#ff48d6';
  const accentMid = variant === 'major-crimes' ? '#c91522' : '#8f3dff';
  const accentDark = variant === 'major-crimes' ? '#4c090c' : '#2f075d';
  const labelStroke = variant === 'major-crimes' ? '#8d2228' : '#6c34d6';
  const sideLabel = side.replace('SIDE ', '');

  return (
    <div className={`cassette-svg-wrap ${isPlaying ? 'cassette-svg-playing' : ''} ${className}`} data-variant={variant} data-label={label} data-side={side}>
      <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" className="h-full w-full">
        <defs>
          <radialGradient id={reelGlow1Id} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cfff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#0088cc" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#003355" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id={reelGlow2Id} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
            <stop offset="40%" stopColor={accentMid} stopOpacity="0.7" />
            <stop offset="100%" stopColor={accentDark} stopOpacity="0.5" />
          </radialGradient>
          <linearGradient id={cassetteBodyId} x1="20" x2="220" y1="18" y2="138" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0f1d46" stopOpacity="0.96" />
            <stop offset="48%" stopColor="#0b1437" stopOpacity="0.93" />
            <stop offset="100%" stopColor="#070b1f" stopOpacity="0.91" />
          </linearGradient>
          <radialGradient id={cassetteBodyCyanId} cx="8%" cy="4%" r="72%">
            <stop offset="0%" stopColor="#0ac4ff" stopOpacity="0.18" />
            <stop offset="38%" stopColor="#0ac4ff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0ac4ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={cassetteBodyVioletId} cx="94%" cy="100%" r="76%">
            <stop offset="0%" stopColor="#6c4cff" stopOpacity="0.16" />
            <stop offset="44%" stopColor="#6c4cff" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#6c4cff" stopOpacity="0" />
          </radialGradient>
          <clipPath id={cassetteBodyClipId} clipPathUnits="userSpaceOnUse">
            <rect x="20" y="18" width="200" height="120" rx="12" ry="12" />
          </clipPath>
          <filter id={glow1Id}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={glow2Id}>
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="128" cy="88" rx="103" ry="66" fill="#6c4cff" opacity="0.08" filter={`url(#${glow2Id})`} />
        <ellipse cx="82" cy="80" rx="52" ry="38" fill="#00cfff" opacity="0.09" filter={`url(#${glow2Id})`} />
        <ellipse cx="166" cy="92" rx="68" ry="44" fill={accent} opacity="0.055" filter={`url(#${glow2Id})`} />

        <g transform="rotate(-8, 120, 80)">
          <rect x="20" y="18" width="200" height="120" rx="12" ry="12" fill="none" stroke={accent} strokeWidth="2.6" opacity="0.24" filter={`url(#${glow2Id})`} />
          <rect x="20" y="18" width="200" height="120" rx="12" ry="12" fill={`url(#${cassetteBodyId})`} stroke={accent} strokeWidth="1.35" opacity="0.96" />
          <g clipPath={`url(#${cassetteBodyClipId})`}>
            <rect x="20" y="18" width="200" height="120" rx="12" ry="12" fill={`url(#${cassetteBodyCyanId})`} />
            <rect x="20" y="18" width="200" height="120" rx="12" ry="12" fill={`url(#${cassetteBodyVioletId})`} />
            <path d="M32 28 C72 17 150 18 209 32 L207 44 C148 32 72 34 32 45 Z" fill="#d8fbff" opacity="0.075" />
            <path d="M36 31 C80 22 150 23 202 34" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.14" />
            <path d="M30 128 C75 116 150 118 208 126" fill="none" stroke="#00cfff" strokeWidth="1.2" opacity="0.14" />
          </g>

          <rect x="55" y="50" width="130" height="55" rx="6" fill="#0a0518" stroke={labelStroke} strokeWidth="1" />
          <rect x="58" y="53" width="124" height="18" rx="4" fill="#ffffff" opacity="0.055" />

          <g className="cassette-svg-reel cassette-svg-reel-left">
            <circle cx="88" cy="77" r="24" fill="#0d0820" stroke="#004488" strokeWidth="1" />
            <circle cx="88" cy="77" r="22" fill="#00cfff" opacity="0.18" filter={`url(#${glow2Id})`} />
            <circle cx="88" cy="77" r="20" fill={`url(#${reelGlow1Id})`} opacity="0.95" filter={`url(#${glow1Id})`} />
            <line x1="88" y1="57" x2="88" y2="97" stroke="#003355" strokeWidth="1.5" opacity="0.6" />
            <line x1="68" y1="77" x2="108" y2="77" stroke="#003355" strokeWidth="1.5" opacity="0.6" />
            <line x1="74" y1="63" x2="102" y2="91" stroke="#003355" strokeWidth="1.5" opacity="0.6" />
            <line x1="74" y1="91" x2="102" y2="63" stroke="#003355" strokeWidth="1.5" opacity="0.6" />
            <circle cx="88" cy="77" r="7" fill="#0a1a2a" stroke="#00cfff" strokeWidth="1.7" />
            <circle cx="88" cy="77" r="3" fill="#00ddff" opacity="0.95" />
          </g>

          <g className="cassette-svg-reel cassette-svg-reel-right">
            <circle cx="158" cy="77" r="24" fill="#0d0820" stroke={variant === 'major-crimes' ? '#88361e' : '#550088'} strokeWidth="1" />
            <circle cx="158" cy="77" r="22" fill={accent} opacity="0.2" filter={`url(#${glow2Id})`} />
            <circle cx="158" cy="77" r="20" fill={`url(#${reelGlow2Id})`} opacity="0.95" filter={`url(#${glow1Id})`} />
            <line x1="158" y1="57" x2="158" y2="97" stroke={variant === 'major-crimes' ? '#3f160f' : '#330033'} strokeWidth="1.5" opacity="0.6" />
            <line x1="138" y1="77" x2="178" y2="77" stroke={variant === 'major-crimes' ? '#3f160f' : '#330033'} strokeWidth="1.5" opacity="0.6" />
            <line x1="144" y1="63" x2="172" y2="91" stroke={variant === 'major-crimes' ? '#3f160f' : '#330033'} strokeWidth="1.5" opacity="0.6" />
            <line x1="144" y1="91" x2="172" y2="63" stroke={variant === 'major-crimes' ? '#3f160f' : '#330033'} strokeWidth="1.5" opacity="0.6" />
            <circle cx="158" cy="77" r="7" fill={variant === 'major-crimes' ? '#2a0809' : '#1a0a2a'} stroke={accent} strokeWidth="1.8" />
            <circle cx="158" cy="77" r="3" fill={accent} opacity="0.95" />
          </g>

          <circle cx="88" cy="115" r="5" fill="#050010" stroke={labelStroke} strokeWidth="0.8" />
          <circle cx="123" cy="115" r="5" fill="#050010" stroke={labelStroke} strokeWidth="0.8" />
          <circle cx="158" cy="115" r="5" fill="#050010" stroke={labelStroke} strokeWidth="0.8" />

          <rect x="28" y="22" width="184" height="22" rx="3" fill="#0b1231" stroke={labelStroke} strokeWidth="0.5" filter={`url(#${glow1Id})`} opacity="0.96" />
          <text x="120" y="30" fill="#00ccff" fontSize="7" textAnchor="middle" fontFamily="'Courier New', monospace" fontWeight="bold" letterSpacing="2">
            {label}
          </text>
          <text x="68" y="37" fill={accent} fontSize="5" textAnchor="middle" fontFamily="monospace">
            {sideLabel}
          </text>
          <text x="120" y="37" fill="#5533aa" fontSize="4" textAnchor="middle" fontFamily="monospace">
            ●●●●●●●●●●●●●●●●
          </text>

          <circle cx="30" cy="30" r="5" fill="#0d0820" stroke={labelStroke} strokeWidth="0.8" filter={`url(#${glow1Id})`} />
          <circle cx="30" cy="30" r="2" fill="#1a1040" />
          <circle cx="210" cy="30" r="5" fill="#0d0820" stroke={labelStroke} strokeWidth="0.8" filter={`url(#${glow1Id})`} />
          <circle cx="210" cy="30" r="2" fill="#1a1040" />
          <circle cx="30" cy="125" r="5" fill="#0d0820" stroke={labelStroke} strokeWidth="0.8" />
          <circle cx="30" cy="125" r="2" fill="#1a1040" />
          <circle cx="210" cy="125" r="5" fill="#0d0820" stroke={labelStroke} strokeWidth="0.8" />
          <circle cx="210" cy="125" r="2" fill="#1a1040" />

          <rect x="65" y="118" width="110" height="1.5" rx="1" fill="#4422aa" opacity="0.5" />
          <text x="210" y="120" fill="#330066" fontSize="3" textAnchor="end" fontFamily="monospace">
            NCD-2
          </text>

          <g clipPath={`url(#${cassetteBodyClipId})`}>
            <rect x="24" y="20" width="192" height="2.6" rx="1.3" fill="#d8fbff" opacity="0.16" />
            <rect x="21" y="19" width="198" height="118" rx="11" ry="11" fill="none" stroke="#ffffff" strokeWidth="0.55" opacity="0.13" />
          </g>
        </g>

        <ellipse cx="120" cy="148" rx="78" ry="9" fill={accent} opacity="0.22" filter={`url(#${glow2Id})`} />
        <ellipse cx="94" cy="148" rx="34" ry="6" fill="#00cfff" opacity="0.16" filter={`url(#${glow1Id})`} />
      </svg>
    </div>
  );
}
