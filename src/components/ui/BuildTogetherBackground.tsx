export function BuildTogetherBackground() {
  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-[linear-gradient(145deg,rgba(7,17,38,0.985),rgba(8,19,48,0.975)_45%,rgba(19,15,61,0.965)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_0%,rgba(10,196,255,.18),transparent_28%),radial-gradient(circle_at_100%_100%,rgba(108,76,255,.20),transparent_40%)]" />
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_0%,rgba(10,196,255,.30),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(108,76,255,.34),transparent_44%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div aria-hidden="true" className="absolute inset-x-0 -inset-y-32 z-10 translate-y-28 overflow-hidden transition-transform duration-1000 ease-out [mask-image:radial-gradient(ellipse_at_center,white,transparent)] motion-safe:group-hover:translate-y-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(10,196,255,.30),transparent_74%)]" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/1.7] w-[200%] rounded-[50%] border border-[#0A0F26]/70 bg-[#070B1D] shadow-[0_-30px_90px_rgba(10,196,255,.18),0_-12px_36px_rgba(108,76,255,.10)]" />
      </div>
    </>
  );
}
