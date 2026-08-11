import { personalityCardClass } from './personalityStyles';

export function Glitch404Card() {
  return (
    <article className={`${personalityCardClass} flex min-h-[22rem] items-center justify-center p-7 text-center lg:min-h-[25rem] lg:p-8`}>
      <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(10,196,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(10,196,255,.1)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      <div className="relative">
        <p className="font-display text-7xl font-black tracking-[0.08em] text-transparent [-webkit-text-stroke:2px_#0ac4ff] drop-shadow-[0_0_18px_rgba(10,196,255,.86)] lg:text-8xl">404</p>
        <h3 className="mt-5 font-display text-2xl font-black uppercase text-white lg:text-[1.65rem]">Column Not Found</h3>
        <p className="mx-auto mt-6 max-w-sm text-sm leading-6 text-white/68 lg:text-[0.95rem] lg:leading-7">Sorry, this column didn’t load.<br />Probably a div inside a span inside another div issue.</p>
        <p className="mt-6 font-mono text-xs font-bold text-secondary lg:text-[0.82rem]">[We’re working on it. Maybe.]</p>
      </div>
    </article>
  );
}
