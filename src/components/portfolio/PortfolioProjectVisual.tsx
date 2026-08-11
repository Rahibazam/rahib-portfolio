import { BarChart3, Check, GitBranch, Image as ImageIcon, PanelsTopLeft, Workflow } from 'lucide-react';

export function PortfolioProjectVisual({ slug, featured = false }: { slug: string; featured?: boolean }) {
  const heightClass = featured ? 'h-72 sm:h-96 lg:h-full lg:min-h-[30rem]' : 'h-56';

  if (slug === 'duplicate-deal-prevention-system' || slug === 'campaign-workflow-reporting-support') {
    return (
      <div aria-hidden="true" className={`relative overflow-hidden bg-[radial-gradient(circle_at_50%_45%,rgba(108,76,255,0.2),transparent_43%),#070b1d] ${heightClass}`}>
        <div className="absolute left-[8%] top-[40%] rounded-lg border border-secondary/35 bg-[#0b1636] px-3 py-2 font-mono text-[0.6rem] uppercase tracking-widest text-cyan-100">Trigger</div>
        <div className="absolute left-[42%] top-[17%] rounded-lg border border-purple/40 bg-[#111035] px-3 py-2 font-mono text-[0.6rem] uppercase tracking-widest text-purple-100">Validate</div>
        <div className="absolute right-[8%] top-[48%] rounded-lg border border-secondary/30 bg-[#0b1636] px-3 py-2 font-mono text-[0.6rem] uppercase tracking-widest text-cyan-100">Route</div>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 220"><path d="M70 108C135 108 135 55 190 55M213 63C250 66 268 114 334 114" fill="none" stroke="#0ac4ff" strokeOpacity=".46" strokeWidth="2" strokeDasharray="5 6" /></svg>
        <Workflow className="absolute bottom-6 left-1/2 h-10 w-10 -translate-x-1/2 text-secondary/75" />
      </div>
    );
  }

  if (slug === 'private-memory-album-web-app') {
    return (
      <div aria-hidden="true" className={`grid grid-cols-[1.2fr_0.8fr] gap-3 overflow-hidden bg-[linear-gradient(145deg,#0b1732,#161037)] p-5 ${heightClass}`}>
        <div className="relative overflow-hidden rounded-xl border border-secondary/20 bg-[radial-gradient(circle_at_35%_30%,rgba(10,196,255,0.28),transparent_35%),linear-gradient(145deg,#11264a,#080b1b)]"><ImageIcon className="absolute bottom-4 left-4 h-8 w-8 text-secondary/70" /></div>
        <div className="grid gap-3"><span className="rounded-xl border border-purple/25 bg-purple/[0.08]" /><span className="rounded-xl border border-secondary/20 bg-secondary/[0.06]" /></div>
      </div>
    );
  }

  if (slug === 'landing-page-cms-execution') {
    return (
      <div aria-hidden="true" className={`relative overflow-hidden bg-[linear-gradient(145deg,#0b1935,#080a1d)] p-5 ${heightClass}`}>
        <div className="h-full overflow-hidden rounded-xl border border-white/15 bg-[#080d21] shadow-[0_0_30px_rgba(10,196,255,0.1)]">
          <div className="flex h-9 items-center gap-2 border-b border-white/10 px-4"><span className="h-2 w-2 rounded-full bg-secondary/60" /><span className="h-2 w-2 rounded-full bg-purple/60" /><span className="ml-2 h-2 w-24 rounded bg-white/10" /></div>
          <div className="grid h-[calc(100%-2.25rem)] grid-cols-[1.1fr_0.9fr] items-center gap-4 p-5"><div><span className="block h-2 w-16 rounded bg-secondary/45" /><span className="mt-4 block h-4 w-full rounded bg-white/24" /><span className="mt-2 block h-4 w-4/5 rounded bg-white/15" /><span className="mt-5 block h-8 w-24 rounded bg-gradient-to-r from-secondary to-purple" /></div><PanelsTopLeft className="mx-auto h-16 w-16 text-purple-200" /></div>
        </div>
      </div>
    );
  }

  if (slug === 'analytics-dashboard-reporting-system') {
    return (
      <div aria-hidden="true" className={`grid grid-cols-[0.85fr_1.15fr] gap-4 overflow-hidden bg-[linear-gradient(145deg,#08152f,#0d0a26)] p-5 ${heightClass}`}>
        <div className="grid place-items-center rounded-xl border border-white/10 bg-white/[0.025]"><BarChart3 className="h-16 w-16 text-secondary drop-shadow-[0_0_16px_rgba(10,196,255,0.45)]" /></div>
        <div className="flex items-end justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-5"><span className="h-[35%] w-6 rounded-t bg-secondary/45" /><span className="h-[58%] w-6 rounded-t bg-secondary/65" /><span className="h-[82%] w-6 rounded-t bg-gradient-to-t from-secondary to-purple" /><span className="h-[51%] w-6 rounded-t bg-purple/55" /></div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`relative overflow-hidden bg-[linear-gradient(145deg,#09172f,#08091e)] p-5 ${heightClass}`}>
      <div className="grid h-full grid-cols-3 gap-3">
        {['New', 'Qualified', 'Active'].map((label, index) => <div key={label} className="rounded-xl border border-white/10 bg-white/[0.025] p-3"><p className="font-mono text-[0.55rem] uppercase tracking-widest text-white/40">{label}</p><div className="mt-4 grid gap-2">{Array.from({ length: index + 2 }, (_, item) => <span key={item} className="flex h-7 items-center gap-2 rounded-md border border-secondary/15 bg-secondary/[0.04] px-2"><Check className="h-3 w-3 text-secondary" /><span className="h-1 w-8 rounded bg-white/20" /></span>)}</div></div>)}
      </div>
      <GitBranch className="absolute bottom-3 right-3 h-8 w-8 text-purple-200/75" />
    </div>
  );
}
