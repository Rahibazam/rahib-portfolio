import { Badge } from './Badge';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  headingLevel?: 'h1' | 'h2';
  className?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, description, headingLevel = 'h2', className, align = 'left' }: SectionHeaderProps) {
  const Heading = headingLevel;

  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className ?? ''}`}>
      <Badge>{eyebrow}</Badge>
      <Heading className="mt-5 font-display text-balance text-3xl font-black uppercase leading-[1] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </Heading>
      {description ? <p className="mt-5 text-sm leading-7 text-white/62 sm:text-base">{description}</p> : null}
    </div>
  );
}
