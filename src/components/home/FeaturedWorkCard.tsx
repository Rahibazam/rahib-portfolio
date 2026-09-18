import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { TransitionLink } from '@/components/motion/TransitionLink';

type FeaturedWorkCardProps = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  href: string;
};

export function FeaturedWorkCard({ title, image, description, tags, href }: FeaturedWorkCardProps) {
  return (
    <article className="mobile-image-card home-module group relative flex h-full min-w-0 flex-col overflow-hidden rounded-card border-secondary/40 bg-primary lg:min-h-[22rem]">
      <div className="mobile-image-card-media relative aspect-[16/10] min-w-0 overflow-hidden border-b border-secondary/20 lg:absolute lg:inset-0 lg:aspect-auto lg:border-b-0">
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover transition duration-700 ease-premium group-hover:scale-[1.025]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030611]/45 via-[#050817]/20 to-[#09132a]/5 lg:from-[#030611] lg:via-[#050817]/55 lg:to-[#09132a]/10" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(10,196,255,0.08),transparent_45%,rgba(108,76,255,0.08))]" />
        <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-4 sm:gap-2.5 sm:p-5">
          {tags.map((tag) => (
            <span key={tag} className="rounded-md border border-secondary/40 bg-[#0877c8]/85 px-3 py-1.5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-md sm:px-4 sm:text-[0.68rem] sm:tracking-[0.12em]">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mobile-image-card-content relative z-10 flex min-w-0 flex-1 flex-col p-6 sm:p-8 lg:absolute lg:inset-x-0 lg:bottom-0 lg:block">
        <h3 className="max-w-xl font-display text-2xl font-black uppercase leading-[1.05] tracking-[-0.02em] text-white sm:text-[2rem]">{title}</h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/64 lg:text-white/70">{description}</p>
        <TransitionLink href={href} className="mt-5 inline-flex w-fit max-w-full flex-wrap items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-secondary transition group-hover:text-cyan-100">
          View project <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
        </TransitionLink>
      </div>
    </article>
  );
}
