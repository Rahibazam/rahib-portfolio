import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { TransitionLink } from '@/components/motion/TransitionLink';

type FeaturedWorkCardProps = {
  title: string;
  image: string;
  tags: string[];
  href: string;
};

export function FeaturedWorkCard({ title, image, tags, href }: FeaturedWorkCardProps) {
  return (
    <article className="home-module group relative h-full min-h-80 overflow-hidden rounded-card border-secondary/40 bg-primary sm:min-h-[22rem] lg:min-h-[22rem]">
      <Image src={image} alt="" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover transition duration-700 ease-premium group-hover:scale-[1.025]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030611] via-[#050817]/55 to-[#09132a]/10" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(10,196,255,0.08),transparent_45%,rgba(108,76,255,0.08))]" />
      <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2.5 p-5">
        {tags.map((tag) => (
          <span key={tag} className="rounded-md border border-secondary/40 bg-[#0877c8]/75 px-4 py-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
            {tag}
          </span>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <h3 className="max-w-xl font-display text-2xl font-black uppercase leading-[1.05] tracking-[-0.02em] text-white sm:text-[2rem]">{title}</h3>
        <TransitionLink href={href} className="mt-4 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-secondary transition group-hover:text-cyan-100">
          View project <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
        </TransitionLink>
      </div>
    </article>
  );
}
