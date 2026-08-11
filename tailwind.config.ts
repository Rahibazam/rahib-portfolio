import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#070B1D',
        'background-deep': '#050817',
        primary: '#0A0F26',
        secondary: '#0AC4FF',
        accent: '#422AD5',
        surface: {
          DEFAULT: '#0A0F26',
          strong: '#0C1434',
          soft: 'rgba(255, 255, 255, 0.035)'
        },
        cyan: {
          DEFAULT: '#0AC4FF',
          soft: 'rgba(10, 196, 255, 0.16)',
          muted: 'rgba(10, 196, 255, 0.34)'
        },
        purple: {
          DEFAULT: '#6C4CFF',
          deep: '#422AD5',
          soft: 'rgba(66, 42, 213, 0.18)'
        },
        hubspot: '#FF5C35',
        neutralText: '#FAFAFA',
        mutedText: '#BABABA',
        'border-soft': 'rgba(255, 255, 255, 0.08)',
        'border-cyan': 'rgba(10, 196, 255, 0.22)',
        'border-purple': 'rgba(108, 76, 255, 0.32)'
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"SFMono-Regular"', 'Consolas', '"Liberation Mono"', 'monospace']
      },
      boxShadow: {
        card: '0 0 0 1px rgba(10,196,255,0.08), 0 24px 80px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.07)',
        'card-hover': '0 0 0 1px rgba(10,196,255,0.2), 0 28px 90px rgba(0,0,0,0.46), 0 0 48px rgba(10,196,255,0.14), inset 0 1px 0 rgba(255,255,255,0.1)',
        glow: '0 0 40px rgba(10, 196, 255, 0.18)',
        'glow-strong': '0 0 70px rgba(10, 196, 255, 0.3)',
        purple: '0 0 70px rgba(66, 42, 213, 0.28)',
        focus: '0 0 0 4px rgba(10,196,255,0.14)'
      },
      borderRadius: {
        card: '1.125rem',
        panel: '1.375rem',
        'panel-lg': '1.625rem'
      },
      backgroundImage: {
        'panel-gradient': 'linear-gradient(135deg, rgba(10,196,255,0.1), rgba(66,42,213,0.1))',
        'button-gradient': 'linear-gradient(135deg, #0AC4FF 0%, #1677FF 48%, #6C4CFF 100%)',
        'accent-gradient': 'linear-gradient(90deg, #0AC4FF 0%, #8B6CFF 100%)',
        'page-radials': 'radial-gradient(circle at 18% 8%, rgba(10,196,255,0.13), transparent 28rem), radial-gradient(circle at 82% 14%, rgba(66,42,213,0.18), transparent 32rem)'
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
        cinematic: 'cubic-bezier(0.65, 0, 0.35, 1)'
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(18px, -22px, 0) scale(1.08)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' }
        },
        scanline: {
          '0%': { transform: 'translate3d(0, -100%, 0)', opacity: '0' },
          '12%, 88%': { opacity: '0.22' },
          '100%': { transform: 'translate3d(0, 100%, 0)', opacity: '0' }
        }
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        'drift-slow': 'drift 26s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
        scanline: 'scanline 12s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
