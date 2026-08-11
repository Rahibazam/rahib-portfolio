export function PortfolioCenterMark() {
  return (
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true" className="h-36 w-36 drop-shadow-[0_18px_24px_rgba(0,0,0,0.38)] drop-shadow-[0_0_34px_rgba(10,196,255,0.45)] sm:h-48 sm:w-48 lg:h-52 lg:w-52">
      <defs>
        <linearGradient id="portfolio-mark-gradient" x1="32" y1="30" x2="150" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0AC4FF" />
          <stop offset="1" stopColor="#7B5CFF" />
        </linearGradient>
      </defs>
      <rect x="42" y="30" width="104" height="92" rx="15" fill="#091735" stroke="url(#portfolio-mark-gradient)" strokeWidth="5" />
      <path d="M43 55H145" stroke="#DDF8FF" strokeOpacity=".35" strokeWidth="4" />
      <circle cx="57" cy="43" r="4" fill="#0AC4FF" /><circle cx="70" cy="43" r="4" fill="#7B5CFF" />
      <rect x="26" y="66" width="103" height="88" rx="15" fill="#080D25" fillOpacity=".94" stroke="url(#portfolio-mark-gradient)" strokeWidth="5" />
      <path d="M27 91H128" stroke="#DDF8FF" strokeOpacity=".35" strokeWidth="4" />
      <rect x="43" y="106" width="28" height="26" rx="5" fill="#0AC4FF" fillOpacity=".2" stroke="#0AC4FF" strokeWidth="3" />
      <rect x="82" y="106" width="30" height="8" rx="4" fill="#7B5CFF" fillOpacity=".75" />
      <rect x="82" y="123" width="21" height="7" rx="3.5" fill="#DDF8FF" fillOpacity=".35" />
    </svg>
  );
}
