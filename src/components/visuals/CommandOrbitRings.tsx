type CommandOrbitRingsProps = {
  accent?: 'purple' | 'orange';
};

export function CommandOrbitRings({ accent = 'purple' }: CommandOrbitRingsProps) {
  return (
    <>
      <div aria-hidden="true" className="command-orbit-ring absolute inset-[15%_1%] rounded-[50%] border border-secondary/50 sm:inset-[15%_-7%]" />
      <div aria-hidden="true" className="command-orbit-ring command-orbit-ring-reverse absolute inset-[27%_2%] rounded-[50%] border border-purple/50 sm:inset-[27%_-3%]" />
      <div aria-hidden="true" className="command-orbit-ring absolute inset-[38%_-3%] hidden rounded-[50%] border border-secondary/30 sm:block [animation-duration:42s]" />
      <span aria-hidden="true" className="absolute left-[1%] top-[43%] h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_15px_5px_rgba(10,196,255,0.85)]" />
      <span aria-hidden="true" className="absolute right-[1%] top-[24%] h-2 w-2 rounded-full bg-white shadow-[0_0_14px_4px_rgba(255,255,255,0.8)]" />
      <span aria-hidden="true" className={`absolute bottom-[28%] right-[12%] h-2 w-2 rounded-full ${accent === 'orange' ? 'bg-[#ff7a59] shadow-[0_0_14px_4px_rgba(255,122,89,0.72)]' : 'bg-purple shadow-[0_0_14px_4px_rgba(108,76,255,0.85)]'}`} />
    </>
  );
}
