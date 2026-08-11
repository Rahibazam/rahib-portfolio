'use client';

import Link from 'next/link';
import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import { isExternalHref } from '@/lib/utils';
import { usePageTransition } from './PageTransitionProvider';

type TransitionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

export function TransitionLink({ href, children, onClick, rel, target, ...props }: TransitionLinkProps) {
  const { navigateWithTransition, isTransitioning } = usePageTransition();
  const pathname = usePathname();
  const isExternal = isExternalHref(href);
  const isHashOnly = href.startsWith('#');
  const isDownload = props.download !== undefined || /\.(?:pdf|zip|docx?|xlsx?|pptx?)(?:[?#]|$)/i.test(href);
  const isSameRoute = !isExternal && !isHashOnly && href.split(/[?#]/)[0] === pathname;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (isExternal || isHashOnly || isDownload || isSameRoute || (target && target !== '_self')) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    if (!isTransitioning) {
      navigateWithTransition(href);
    }
  }

  if (isExternal || isHashOnly || isDownload || (target && target !== '_self')) {
    const safeRel = target === '_blank' ? rel ?? 'noreferrer' : rel;
    return <a href={href} target={target} rel={safeRel} onClick={handleClick} {...props}>{children}</a>;
  }

  return <Link href={href} onClick={handleClick} {...props}>{children}</Link>;
}
