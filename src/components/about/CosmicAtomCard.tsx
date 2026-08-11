import { personalityCardClass } from './personalityStyles';

const stars = [
  [8, 14, 1], [15, 63, 2], [22, 30, 1], [29, 78, 1], [36, 12, 2], [43, 51, 1],
  [51, 22, 1], [57, 83, 2], [63, 9, 1], [69, 43, 1], [76, 72, 1], [84, 17, 2],
  [91, 58, 1], [12, 88, 1], [32, 93, 2], [48, 68, 1], [72, 91, 1], [94, 31, 1]
];

export function CosmicAtomCard() {
  return (
    <article className={`${personalityCardClass} flex min-h-[22rem] items-center justify-center p-4 sm:p-5 lg:min-h-[25rem]`}>
      <div role="img" aria-label="Layered cosmic reactor with four orbit rings and moving particles" className="relative aspect-square w-full max-w-[29rem] overflow-hidden">
        <div aria-hidden="true" className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.82),rgba(10,196,255,.62)_9%,rgba(74,57,255,.42)_23%,transparent_64%)] blur-xl" />
        <div aria-hidden="true" className="absolute left-[10%] top-[52%] h-px w-[80%] -rotate-[24deg] bg-gradient-to-r from-transparent via-secondary/75 to-transparent shadow-[0_0_9px_rgba(10,196,255,.7)]" />
        <div aria-hidden="true" className="absolute left-[15%] top-[44%] h-px w-[72%] rotate-[31deg] bg-gradient-to-r from-transparent via-purple/65 to-transparent" />
        {stars.map(([left, top, size], index) => (
          <span key={`${left}-${top}`} aria-hidden="true" className="about-star absolute rounded-full bg-white shadow-[0_0_7px_rgba(255,255,255,.9)]" style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, animationDelay: `${index * -0.37}s` }} />
        ))}
        <div className="about-cosmic-orbit absolute inset-[18%_5%] rounded-[50%] border border-secondary/75 shadow-[0_0_14px_rgba(10,196,255,.32)] [--orbit-tilt:-8deg]"><i className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-white shadow-[0_0_9px_3px_rgba(10,196,255,.9)]" /></div>
        <div className="about-cosmic-orbit about-cosmic-orbit-reverse absolute inset-[19%_7%] rounded-[50%] border border-purple/75 shadow-[0_0_14px_rgba(108,76,255,.34)] [--orbit-tilt:48deg]"><i className="absolute bottom-[8%] right-[8%] h-2.5 w-2.5 rounded-full bg-purple shadow-[0_0_10px_3px_rgba(108,76,255,.9)]" /></div>
        <div className="about-cosmic-orbit absolute inset-[25%_2%] rounded-[50%] border border-cyan-100/55 [--orbit-tilt:-42deg] [animation-duration:30s]"><i className="absolute left-[11%] top-[10%] h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_2px_rgba(10,196,255,.9)]" /></div>
        <div className="about-cosmic-orbit about-cosmic-orbit-reverse absolute inset-[31%_4%] rounded-[50%] border border-white/35 [--orbit-tilt:78deg] [animation-duration:34s]"><i className="absolute right-[18%] top-[3%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_2px_white]" /></div>
        <div aria-hidden="true" className="about-nucleus absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-[radial-gradient(circle_at_38%_32%,white,#57d7ff_22%,#5142ff_62%,#120b39)] shadow-[0_0_20px_8px_rgba(10,196,255,.78),0_0_58px_24px_rgba(108,76,255,.44)]" />
      </div>
    </article>
  );
}
