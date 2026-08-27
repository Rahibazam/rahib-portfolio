'use client';

import { useState } from 'react';
import { BarChart3, Database, GitBranch, Workflow } from 'lucide-react';
import type { CaseStudyLayer } from '@/data/caseStudies';
import { cn } from '@/lib/utils';

type CaseStudySystemSpineProps = {
  layers: CaseStudyLayer[];
};

const spineIcons = [Database, GitBranch, Workflow, BarChart3];

export function CaseStudySystemSpine({ layers }: CaseStudySystemSpineProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative z-10 grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-stretch">
      <div className="border-b border-secondary/20 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-secondary">System spine</p>
            <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-white/34">Target-state sequence</p>
          </div>
          <span className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-purple-200/55">
            {String(layers.length).padStart(2, '0')} connected layers
          </span>
        </div>

        <div aria-hidden="true" className="relative mt-8 max-w-md">
          <span className="absolute bottom-7 left-[1.375rem] top-7 w-px bg-[linear-gradient(180deg,rgba(10,196,255,.86),rgba(10,196,255,.42)_44%,rgba(139,108,255,.72))] shadow-[0_0_14px_rgba(10,196,255,.34)]" />

          <div className="space-y-3">
            {layers.map((layer, index) => {
              const Icon = spineIcons[index] ?? Database;
              const isActive = activeIndex === index;

              return (
                <div
                  key={layer.title}
                  className="group/spine relative grid cursor-default grid-cols-[2.75rem_1fr] items-center gap-4"
                  onMouseEnter={() => setActiveIndex(index)}
                  onPointerDown={() => setActiveIndex(index)}
                >
                  <span
                    className={cn(
                      'relative z-10 grid h-11 w-11 place-items-center rounded-full border text-white/38 transition-[border-color,box-shadow,color,background-color] duration-500 motion-reduce:transition-none',
                      isActive
                        ? 'border-secondary/90 bg-[#0a2947] text-secondary shadow-[0_0_24px_rgba(10,196,255,.38),inset_0_0_14px_rgba(10,196,255,.12)]'
                        : 'border-secondary/25 bg-[#07112d] group-hover/spine:border-secondary/60 group-hover/spine:text-secondary/80'
                    )}
                  >
                    <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.8} />
                  </span>

                  <div
                    className={cn(
                      'relative overflow-hidden border-y px-4 py-3 transition-[border-color,background-color,box-shadow,transform] duration-500 [clip-path:polygon(0_0,calc(100%_-_0.75rem)_0,100%_50%,calc(100%_-_0.75rem)_100%,0_100%,0.5rem_50%)] motion-reduce:transform-none motion-reduce:transition-none',
                      isActive
                        ? 'translate-x-1 border-secondary/55 bg-[linear-gradient(90deg,rgba(10,196,255,.13),rgba(139,108,255,.08),transparent)] shadow-[inset_3px_0_0_rgba(10,196,255,.82),0_0_28px_rgba(10,196,255,.08)]'
                        : 'border-white/[0.08] bg-white/[0.015] group-hover/spine:translate-x-0.5 group-hover/spine:border-secondary/30'
                    )}
                  >
                    <span
                      className={cn(
                        'absolute inset-y-0 left-0 w-12 bg-[linear-gradient(90deg,rgba(10,196,255,.12),transparent)] transition-opacity duration-500 motion-reduce:transition-none',
                        isActive ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    <div className="relative flex items-center justify-between gap-4">
                      <p className={cn('font-display text-sm font-black uppercase tracking-[0.04em] transition-colors duration-500 motion-reduce:transition-none', isActive ? 'text-white' : 'text-white/52')}>
                        {layer.title}
                      </p>
                      <span className={cn('font-mono text-[0.56rem] font-bold tracking-[0.16em] transition-colors duration-500 motion-reduce:transition-none', isActive ? 'text-secondary' : 'text-white/24')}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="ml-[4.25rem] mt-5 flex items-center gap-3 border-t border-secondary/20 pt-4">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_12px_rgba(10,196,255,.78)]" />
            <span className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.16em] text-secondary/65">Governed operating system</span>
            <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(10,196,255,.32),transparent)]" />
          </div>
        </div>

        <p className="mt-7 max-w-sm text-sm leading-7 text-white/58">Good automation and reporting sit on top of a governed data and process model—not the other way around.</p>
      </div>

      <div className="divide-y divide-secondary/15 border-y border-secondary/20">
        {layers.map((layer, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={layer.title}
              className={cn(
                'system-rail-item grid gap-3 px-3 py-6 transition-[background-color,box-shadow] duration-500 motion-reduce:transition-none sm:px-5 lg:grid-cols-[7rem_0.34fr_0.66fr] lg:items-center lg:gap-6',
                isActive && 'bg-secondary/[0.055] shadow-[inset_3px_0_0_rgba(10,196,255,.72),inset_0_0_42px_rgba(10,196,255,.045)]'
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onPointerDown={() => setActiveIndex(index)}
            >
              <p className={cn('font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] transition-colors duration-500 motion-reduce:transition-none', isActive ? 'text-secondary' : 'text-secondary/60')}>{layer.label}</p>
              <h3 className="font-display text-xl font-black uppercase text-white">{layer.title}</h3>
              <p className="text-sm leading-7 text-white/62">{layer.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
