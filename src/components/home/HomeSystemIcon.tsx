type HomeSystemIconProps = {
  type: 'crm' | 'automation' | 'growth';
};

const iconClass = 'h-24 w-24 lg:h-28 lg:w-28';

export function HomeSystemIcon({ type }: HomeSystemIconProps) {
  if (type === 'crm') {
    return (
      <svg aria-hidden="true" viewBox="0 0 112 112" className={`${iconClass} drop-shadow-[0_0_22px_rgba(10,196,255,0.48)]`}>
        <defs><linearGradient id="crm-shell" x1="18" y1="14" x2="94" y2="98" gradientUnits="userSpaceOnUse"><stop stopColor="#11CCFF" /><stop offset="1" stopColor="#6C4CFF" /></linearGradient></defs>
        <rect x="13" y="16" width="86" height="80" rx="18" fill="#07152D" stroke="url(#crm-shell)" strokeWidth="2" />
        <ellipse cx="55" cy="37" rx="22" ry="9" fill="#0B2B50" stroke="#72E5FF" strokeWidth="2" />
        <path d="M33 37v18c0 5 10 9 22 9s22-4 22-9V37M33 55v18c0 5 10 9 22 9 6 0 12-1 16-3" fill="none" stroke="#29CFFF" strokeWidth="2.5" />
        <circle cx="82" cy="72" r="12" fill="#171240" stroke="#A797FF" strokeWidth="2" />
        <path d="m76 72 4 4 8-9" fill="none" stroke="#C9C2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="29" r="3" fill="#26D4FF" /><circle cx="89" cy="31" r="3" fill="#8B6CFF" />
      </svg>
    );
  }

  if (type === 'automation') {
    return (
      <svg aria-hidden="true" viewBox="0 0 112 112" className={`${iconClass} drop-shadow-[0_0_22px_rgba(108,76,255,0.52)]`}>
        <defs><linearGradient id="automation-line" x1="17" y1="18" x2="95" y2="94" gradientUnits="userSpaceOnUse"><stop stopColor="#18D2FF" /><stop offset="1" stopColor="#8B6CFF" /></linearGradient></defs>
        <rect x="15" y="16" width="82" height="80" rx="18" fill="#080F29" stroke="url(#automation-line)" strokeWidth="2" />
        <path d="M31 38h21c9 0 9 16 18 16h11M31 75h21c9 0 9-16 18-16h11" fill="none" stroke="url(#automation-line)" strokeWidth="3" strokeLinecap="round" />
        <rect x="24" y="29" width="16" height="16" rx="5" fill="#0C3154" stroke="#31D8FF" strokeWidth="2" /><rect x="72" y="46" width="16" height="16" rx="5" fill="#1B1749" stroke="#A28FFF" strokeWidth="2" /><rect x="24" y="67" width="16" height="16" rx="5" fill="#0C3154" stroke="#31D8FF" strokeWidth="2" />
        <path d="m28.5 37 3 3 5-6M76.5 54l3 3 5-6M28.5 75l3 3 5-6" fill="none" stroke="#D4F8FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 112 112" className={`${iconClass} drop-shadow-[0_0_22px_rgba(10,196,255,0.48)]`}>
      <defs><linearGradient id="web-frame" x1="15" y1="16" x2="98" y2="95" gradientUnits="userSpaceOnUse"><stop stopColor="#16D2FF" /><stop offset="1" stopColor="#795CFF" /></linearGradient></defs>
      <rect x="13" y="19" width="86" height="69" rx="13" fill="#07142C" stroke="url(#web-frame)" strokeWidth="2" />
      <path d="M13 37h86" stroke="#229EC7" strokeWidth="2" />
      <circle cx="25" cy="28" r="3" fill="#20D2FF" /><circle cx="35" cy="28" r="3" fill="#6487FF" /><circle cx="45" cy="28" r="3" fill="#9A82FF" />
      <rect x="24" y="48" width="27" height="26" rx="5" fill="#0B3151" stroke="#2BD7FF" strokeWidth="1.5" />
      <path d="M60 50h25M60 59h20M60 68h15" stroke="#B8B2E8" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 96h28M50 88v8M62 88v8" stroke="#8B79FF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="m30 61 6-5 7 7" fill="none" stroke="#D0F8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
