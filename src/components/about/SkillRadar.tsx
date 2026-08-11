const center = { x: 190, y: 176 };
const radius = 108;

const capabilities = [
  { name: 'Data Cleanup', value: 82, potential: 92, label: { x: 190, y: 24, anchor: 'middle' as const } },
  { name: 'Web Execution', value: 80, potential: 90, label: { x: 362, y: 98, anchor: 'end' as const } },
  { name: 'HubSpot', value: 90, potential: 96, label: { x: 350, y: 256, anchor: 'end' as const } },
  { name: 'CRM Architecture', value: 88, potential: 94, label: { x: 190, y: 318, anchor: 'middle' as const } },
  { name: 'Landing Pages', value: 90, potential: 95, label: { x: 34, y: 256, anchor: 'start' as const } },
  { name: 'Music', value: 100, potential: 100, label: { x: 22, y: 98, anchor: 'start' as const } }
];

function pointFor(index: number, value = 100) {
  const angle = -Math.PI / 2 + (index * Math.PI * 2) / capabilities.length;
  const scaledRadius = radius * (value / 100);

  return {
    x: center.x + Math.cos(angle) * scaledRadius,
    y: center.y + Math.sin(angle) * scaledRadius
  };
}

function pointsFor(key: 'value' | 'potential') {
  return capabilities.map((capability, index) => {
    const point = pointFor(index, capability[key]);
    return `${point.x},${point.y}`;
  }).join(' ');
}

function CapabilityLabel({ name, x, y, anchor }: { name: string; x: number; y: number; anchor: 'start' | 'middle' | 'end' }) {
  return (
    <text x={x} y={y} textAnchor={anchor} dominantBaseline="middle" fill="rgba(250,250,250,.9)" fontSize="13.2" fontWeight="850">
      {name}
    </text>
  );
}

export function SkillRadar() {
  return (
    <svg viewBox="0 0 380 358" role="img" aria-label="Systems and web capability radar chart for Data Cleanup, Web Execution, HubSpot, CRM Architecture, Landing Pages, and Music" className="mx-auto w-full max-w-[23rem] overflow-visible">
      {[1, 0.75, 0.5, 0.25].map((scale) => {
        const points = capabilities.map((_, index) => {
          const point = pointFor(index, 100 * scale);
          return `${point.x},${point.y}`;
        }).join(' ');
        return <polygon key={scale} points={points} fill="none" stroke="rgba(216,248,255,.3)" strokeWidth="1" />;
      })}
      {capabilities.map((_, index) => {
        const axis = pointFor(index);
        return <line key={index} x1={center.x} y1={center.y} x2={axis.x} y2={axis.y} stroke="rgba(216,248,255,.24)" />;
      })}
      <polygon points={pointsFor('potential')} fill="none" stroke="url(#growth-potential-gradient)" strokeWidth="2" strokeDasharray="7 6" strokeLinecap="round" opacity=".82" />
      <polygon points={pointsFor('value')} fill="rgba(10,196,255,.18)" stroke="#0AC4FF" strokeWidth="2.5" />
      {capabilities.map((capability, index) => {
        const point = pointFor(index, capability.value);
        return <circle key={capability.name} cx={point.x} cy={point.y} r="4.5" fill="#0AC4FF" className="drop-shadow-[0_0_7px_rgba(10,196,255,1)]" />;
      })}
      {capabilities.map((capability) => <CapabilityLabel key={capability.name} name={capability.name} {...capability.label} />)}
      <defs>
        <linearGradient id="growth-potential-gradient" x1="82" x2="298" y1="70" y2="286" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0AC4FF" />
          <stop offset=".55" stopColor="#8C6CFF" />
          <stop offset="1" stopColor="#D8F8FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
