import { Sparkles, Star } from 'lucide-react';

type HomeCTAVisualProps = {
  expression?: 'smile' | 'wink';
  ringTilt?: 'default' | 'dramatic';
};

export function HomeCTAVisual({ expression = 'smile', ringTilt = 'default' }: HomeCTAVisualProps) {
  const isWinking = expression === 'wink';
  const isDramaticTilt = ringTilt === 'dramatic';

  return (
    <div aria-hidden="true" className="relative mx-auto h-60 w-full max-w-lg sm:h-72">
      <div className="absolute bottom-[10%] left-[29%] h-10 w-[46%] rounded-full bg-purple/35 blur-2xl" />
      <div
        className={`absolute inset-x-[5%] bottom-[17%] h-20 rounded-[50%] border border-secondary/40 shadow-[0_0_30px_rgba(10,196,255,0.12)] ${
          isDramaticTilt ? '[transform:rotate(-14deg)]' : '[transform:rotate(-7deg)]'
        }`}
      />
      <div
        className={`absolute inset-x-[13%] bottom-[24%] h-12 rounded-[50%] border border-purple/55 ${
          isDramaticTilt ? '[transform:rotate(17deg)]' : '[transform:rotate(8deg)]'
        }`}
      />
      <div className="home-cta-node absolute left-[38%] top-[8%] h-28 w-28 rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_20%,#f0edff_0%,#9c8cff_12%,#694cff_36%,#3925a6_68%,#0b0724_100%)] shadow-[inset_-18px_-22px_32px_rgba(4,2,19,0.52),inset_9px_10px_22px_rgba(255,255,255,0.14),0_22px_34px_rgba(4,2,19,0.5),0_0_78px_rgba(108,76,255,0.72)] sm:h-36 sm:w-36">
        <span className="absolute left-[19%] top-[13%] h-[22%] w-[28%] rounded-full bg-white/20 blur-md" />
        <span className="absolute left-[29%] top-[31%] h-4 w-2.5 rounded-full bg-white/80 shadow-[0_0_8px_white] sm:h-5 sm:w-3" />
        {isWinking ? (
          <span className="absolute right-[25%] top-[37%] h-1.5 w-7 -rotate-12 rounded-full bg-white/85 shadow-[0_0_10px_rgba(255,255,255,.92)] sm:right-[24%] sm:h-2 sm:w-8" />
        ) : (
          <span className="absolute right-[29%] top-[31%] h-4 w-2.5 rounded-full bg-white/80 shadow-[0_0_8px_white] sm:h-5 sm:w-3" />
        )}
        <span className="absolute bottom-[25%] left-1/2 h-7 w-14 -translate-x-1/2 rounded-b-full border-b-[5px] border-white/75 sm:h-9 sm:w-16" />
      </div>
      <div className="home-cta-node absolute bottom-[8%] left-[18%] text-secondary [animation-delay:-1.4s]">
        <Sparkles className="h-16 w-16 fill-secondary/35 drop-shadow-[0_0_20px_rgba(10,196,255,0.7)]" />
      </div>
      <div className="home-cta-node absolute bottom-[3%] right-[14%] text-white [animation-delay:-2.7s]">
        <Star className="h-20 w-20 fill-white/16 stroke-[2.2] drop-shadow-[0_10px_10px_rgba(0,0,0,0.42)] drop-shadow-[0_0_26px_rgba(255,255,255,0.52)]" />
      </div>
      <div className="absolute right-[7%] top-[8%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_18px_5px_rgba(255,255,255,0.85)]" />
    </div>
  );
}
