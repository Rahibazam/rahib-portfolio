import { personalityCardClass } from './personalityStyles';

type VideoFeatureCardProps = {
  sources: string[];
};

function BladeFallback() {
  return (
    <svg viewBox="0 0 520 360" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover">
      <defs>
        <linearGradient id="video-fallback-sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#071127" /><stop offset="1" stopColor="#17091f" /></linearGradient>
        <linearGradient id="video-fallback-blade" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e7fbff" /><stop offset=".38" stopColor="#38bfff" /><stop offset=".75" stopColor="#6c4cff" /><stop offset="1" stopColor="#ff5138" /></linearGradient>
        <radialGradient id="video-fallback-haze"><stop stopColor="#0ac4ff" stopOpacity=".34" /><stop offset="1" stopColor="#0ac4ff" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="520" height="360" fill="url(#video-fallback-sky)" />
      <circle cx="265" cy="230" r="190" fill="url(#video-fallback-haze)" />
      {[45, 91, 133, 370, 424, 479].map((x, i) => <circle key={x} cx={x} cy={70 + (i * 41) % 180} r={i % 2 ? 2 : 3} fill={i % 2 ? '#ff5c35' : '#baf4ff'} opacity=".72" />)}
      <path d="M246 305 259 66l14-31 12 30-1 240Z" fill="url(#video-fallback-blade)" />
      <path d="m177 251 191-1" stroke="#040711" strokeWidth="17" strokeLinecap="round" />
      <path d="m191 250 163-1" stroke="#ff5c35" strokeOpacity=".55" strokeWidth="2" />
      <path d="M268 31 250 70h35Z" fill="#dffaff" />
      <path d="M0 294c92-39 154-28 235-9 103 24 178 17 285-20v95H0Z" fill="#03050e" />
      <path d="M0 320c102-30 178-14 256 0 92 16 174 7 264-22" fill="none" stroke="#6c4cff" strokeOpacity=".24" strokeWidth="2" />
    </svg>
  );
}

export function VideoFeatureCard({ sources }: VideoFeatureCardProps) {
  return (
    <article className={`${personalityCardClass} h-full min-h-[22rem] p-0`}>
      {sources.length ? (
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover">
          {sources.map((source) => <source key={source} src={source} type={source.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />)}
        </video>
      ) : <BladeFallback />}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,7,18,.12),transparent_55%,rgba(3,5,15,.8)),radial-gradient(circle_at_center,transparent_30%,rgba(2,5,16,.42))]" />
    </article>
  );
}
