import { BarChart3, Check, GitBranch, PieChart } from 'lucide-react';

export function HubSpotProjectVisual({ variant }: { variant: 'crm' | 'workflow' | 'reporting' }) {
  if (variant === 'workflow') {
    return (
      <div aria-hidden="true" className="relative h-52 overflow-hidden border-b border-secondary/20 bg-[radial-gradient(circle_at_50%_45%,rgba(108,76,255,0.18),transparent_42%),#070b1d]">
        <div className="absolute left-[12%] top-[42%] rounded-lg border border-secondary/35 bg-[#0b1636] px-3 py-2 text-[0.62rem] uppercase tracking-widest text-cyan-100">Form</div>
        <div className="absolute left-[42%] top-[18%] rounded-lg border border-purple/40 bg-[#111035] px-3 py-2 text-[0.62rem] uppercase tracking-widest text-purple-100">Check</div>
        <div className="absolute right-[10%] top-[48%] rounded-lg border border-[#ff5c35]/35 bg-[#1c101b] px-3 py-2 text-[0.62rem] uppercase tracking-widest text-[#ff9a80]">Deal</div>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 200"><path d="M92 100C145 100 138 48 190 48M210 54C252 58 260 105 315 105" fill="none" stroke="#0ac4ff" strokeOpacity=".45" strokeWidth="2" strokeDasharray="5 6" /></svg>
        <GitBranch className="absolute bottom-6 left-1/2 h-9 w-9 -translate-x-1/2 text-secondary/70" />
      </div>
    );
  }

  if (variant === 'reporting') {
    return (
      <div aria-hidden="true" className="relative grid h-52 grid-cols-[0.8fr_1.2fr] gap-4 overflow-hidden border-b border-secondary/20 bg-[linear-gradient(145deg,#09122c,#08091e)] p-6">
        <div className="grid place-items-center rounded-xl border border-white/10 bg-white/[0.025]"><PieChart className="h-20 w-20 text-purple-300 drop-shadow-[0_0_18px_rgba(108,76,255,0.42)]" /></div>
        <div className="flex items-end justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-5"><span className="h-[36%] w-7 rounded-t bg-secondary/50" /><span className="h-[62%] w-7 rounded-t bg-secondary/70" /><span className="h-[82%] w-7 rounded-t bg-gradient-to-t from-secondary to-purple" /><span className="h-[54%] w-7 rounded-t bg-purple/60" /></div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="relative h-52 overflow-hidden border-b border-secondary/20 bg-[linear-gradient(145deg,#09162f,#08091e)] p-5">
      <div className="grid h-full grid-cols-3 gap-3">
        {['New', 'Qualified', 'Active'].map((label, index) => <div key={label} className="rounded-xl border border-white/10 bg-white/[0.025] p-3"><p className="font-mono text-[0.6rem] uppercase tracking-widest text-white/40">{label}</p><div className="mt-4 grid gap-2">{Array.from({ length: index + 2 }, (_, item) => <span key={item} className="flex h-7 items-center gap-2 rounded-md border border-secondary/15 bg-secondary/[0.04] px-2"><Check className="h-3 w-3 text-secondary" /><span className="h-1 w-8 rounded bg-white/20" /></span>)}</div></div>)}
      </div>
      <BarChart3 className="absolute bottom-3 right-3 h-8 w-8 text-[#ff5c35]/65" />
    </div>
  );
}
