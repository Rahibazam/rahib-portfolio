type HomeSystemIconProps = {
  type: 'crm' | 'automation' | 'growth';
};

export function HomeSystemIcon({ type }: HomeSystemIconProps) {
  if (type === 'crm') {
    return (
      <svg aria-hidden="true" viewBox="0 0 88 96" className="h-24 w-24 drop-shadow-[0_0_22px_rgba(255,92,53,0.48)] lg:h-28 lg:w-28">
        <path d="M10 5h68l-6 73-28 13-28-13L10 5Z" fill="#E84B2C" />
        <path d="M44 12v70l21-10 5-60H44Z" fill="#FF6A3D" />
        <path d="M24 24h41l-1 10H35l2 10h26l-4 28-15 7-15-7-2-14h11l1 7 5 3 6-3 1-11H27l-3-30Z" fill="white" />
      </svg>
    );
  }

  if (type === 'automation') {
    return (
      <svg aria-hidden="true" viewBox="0 0 88 96" className="h-24 w-24 drop-shadow-[0_0_22px_rgba(10,196,255,0.5)] lg:h-28 lg:w-28">
        <path d="M10 5h68l-6 73-28 13-28-13L10 5Z" fill="#087EC1" />
        <path d="M44 12v70l21-10 5-60H44Z" fill="#10BFF0" />
        <path d="M22 24h44l-1 10H35l1 9h27l-4 29-15 7-16-7-2-14h11l1 7 6 3 6-3 1-12H25L22 24Z" fill="white" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 96 96" className="h-24 w-24 drop-shadow-[0_0_24px_rgba(255,92,53,0.52)] lg:h-28 lg:w-28">
      <path d="M25 18v23m0 0 20 12m-20-12L10 57m35-4 21-12m-21 12v23m21-35 17 16" stroke="#FF6A3D" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="25" cy="14" r="9" fill="#FF6A3D" /><circle cx="8" cy="61" r="8" fill="#FF8A5D" /><circle cx="45" cy="81" r="9" fill="#FF6A3D" /><circle cx="69" cy="37" r="9" fill="#FF6A3D" /><circle cx="86" cy="61" r="8" fill="#FF8A5D" />
    </svg>
  );
}
