import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isExternalHref(href: string) {
  return href.startsWith('//') || /^[a-z][a-z\d+.-]*:/i.test(href);
}
