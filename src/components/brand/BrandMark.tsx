import { cn } from '@/lib/utils';

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 72 72" className={cn('overflow-visible', className)}>
      <defs>
        <linearGradient id="rahib-mark-gradient" x1="8" y1="8" x2="64" y2="66" gradientUnits="userSpaceOnUse">
          <stop stopColor="#20D7FF" />
          <stop offset="0.5" stopColor="#168BFF" />
          <stop offset="1" stopColor="#6C4CFF" />
        </linearGradient>
      </defs>
      <path d="M8 12h36.5C55.3 12 62 18.1 62 27.5c0 7.4-4.1 12.7-11 15.2L64 61H47.4L35.9 44.7H25.5L34 32h9.6c3.7 0 5.9-1.7 5.9-4.5 0-2.9-2.2-4.6-5.9-4.6H15.4L8 12Z" fill="url(#rahib-mark-gradient)" />
      <path d="M8 29h18.5l-8.2 12H8V29Z" fill="#0AC4FF" opacity=".72" />
      <path d="M22.5 47h14L47 61H33L22.5 47Z" fill="#4934E8" opacity=".88" />
    </svg>
  );
}
