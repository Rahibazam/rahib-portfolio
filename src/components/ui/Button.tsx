import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-[#0AC4FF]/45 bg-[linear-gradient(135deg,var(--secondary),#4f46ff)] text-white shadow-[0_0_24px_rgba(10,196,255,.22),inset_0_1px_0_rgba(255,255,255,.18)] hover:border-[#8b6cff]/85 hover:shadow-[0_0_34px_rgba(10,196,255,.32),0_0_28px_rgba(139,108,255,.24)] focus-visible:border-[#8b6cff]/85',
  secondary:
    'border-[#0AC4FF]/35 bg-[radial-gradient(circle_at_20%_0%,rgba(10,196,255,.10),transparent_42%),linear-gradient(145deg,rgba(7,15,38,.72),rgba(8,10,34,.68))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.07),0_0_20px_rgba(10,196,255,.08)] backdrop-blur-xl hover:border-[#8b6cff]/75 hover:shadow-[0_0_26px_rgba(10,196,255,.20),0_0_24px_rgba(108,76,255,.18)] focus-visible:border-[#8b6cff]/75',
  ghost:
    'border-transparent bg-transparent text-white/64 hover:bg-white/[0.05] hover:text-white'
};

const sliderClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.24),rgba(139,108,255,.36),transparent)]',
  secondary:
    'bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.28),rgba(139,108,255,.32),transparent)]',
  ghost:
    'bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.14),rgba(139,108,255,.18),transparent)]'
};

const underlayClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.22),transparent_34%),linear-gradient(135deg,var(--secondary),#4f46ff)]',
  secondary:
    'bg-[radial-gradient(circle_at_20%_0%,rgba(10,196,255,.12),transparent_42%),linear-gradient(145deg,rgba(7,15,38,.88),rgba(8,10,34,.78))]',
  ghost: 'bg-transparent'
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 text-xs',
  md: 'min-h-12 px-6 text-sm',
  lg: 'min-h-14 px-7 text-sm',
  icon: 'h-11 w-11 p-0'
};

export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    'group relative isolate inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[0.85rem] border font-bold uppercase tracking-[0.12em] transition duration-300 ease-premium disabled:pointer-events-none disabled:opacity-45 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AC4FF]/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B1D]',
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

function ButtonEffects({ variant }: { variant: ButtonVariant }) {
  if (variant === 'ghost') {
    return null;
  }

  return (
    <>
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-y-0 left-0 z-[1] w-[145%] -translate-x-full skew-x-[-18deg] opacity-95 transition-transform duration-500 ease-out group-hover:translate-x-[45%] group-focus-visible:translate-x-[45%]',
          sliderClasses[variant]
        )}
      />
      <span
        aria-hidden="true"
        className={cn('pointer-events-none absolute inset-0 z-0', underlayClasses[variant])}
      />
    </>
  );
}

function ButtonContent({ children }: { children: ReactNode }) {
  return <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({ className, variant = 'primary', size = 'md', type = 'button', children, ...props }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...props}>
      <ButtonEffects variant={variant} />
      <ButtonContent>{children}</ButtonContent>
    </button>
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({ className, variant = 'primary', size = 'md', children, ...props }: ButtonLinkProps) {
  return (
    <a className={buttonClasses({ variant, size, className })} {...props}>
      <ButtonEffects variant={variant} />
      <ButtonContent>{children}</ButtonContent>
    </a>
  );
}

type ButtonTransitionLinkProps = ButtonLinkProps & {
  href: string;
};

export function ButtonTransitionLink({ className, variant = 'primary', size = 'md', children, ...props }: ButtonTransitionLinkProps) {
  return (
    <TransitionLink className={buttonClasses({ variant, size, className })} {...props}>
      <ButtonEffects variant={variant} />
      <ButtonContent>{children}</ButtonContent>
    </TransitionLink>
  );
}
