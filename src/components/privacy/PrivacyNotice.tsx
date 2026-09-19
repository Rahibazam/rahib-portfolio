'use client';

import { useSyncExternalStore } from 'react';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { Button } from '@/components/ui/Button';

const PRIVACY_NOTICE_KEY = 'rahib-privacy-notice-acknowledged-v1';
const PRIVACY_NOTICE_EVENT = 'rahib-privacy-notice-change';

function subscribeToPrivacyNotice(callback: () => void) {
  window.addEventListener(PRIVACY_NOTICE_EVENT, callback);
  return () => window.removeEventListener(PRIVACY_NOTICE_EVENT, callback);
}

function getPrivacyNoticeSnapshot() {
  try {
    return window.localStorage.getItem(PRIVACY_NOTICE_KEY) !== 'true';
  } catch {
    return true;
  }
}

export function PrivacyNotice() {
  const isVisible = useSyncExternalStore(subscribeToPrivacyNotice, getPrivacyNoticeSnapshot, () => false);

  function acknowledgeNotice() {
    try {
      window.localStorage.setItem(PRIVACY_NOTICE_KEY, 'true');
    } catch {
      // The notice can still be dismissed when storage is unavailable.
    }

    window.dispatchEvent(new Event(PRIVACY_NOTICE_EVENT));
  }

  if (!isVisible) return null;

  return (
    <aside
      aria-labelledby="privacy-notice-title"
      aria-describedby="privacy-notice-description"
      className="fixed inset-x-4 z-[70] mx-auto max-w-[38rem] [bottom:max(1rem,env(safe-area-inset-bottom))] sm:inset-x-6 sm:bottom-6"
    >
      <div className="relative isolate overflow-hidden rounded-[1.1rem] border border-secondary/40 bg-[linear-gradient(145deg,rgba(6,20,43,.98),rgba(13,13,48,.98))] p-3.5 shadow-[0_20px_70px_rgba(0,0,0,.52),0_0_38px_rgba(10,196,255,.13)] backdrop-blur-xl sm:p-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.72),rgba(139,108,255,.58),transparent)]"
        />
        <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-secondary shadow-[0_0_14px_rgba(10,196,255,.9)]" />
              <p id="privacy-notice-title" className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary sm:text-xs">
                Privacy signal
              </p>
            </div>
            <p id="privacy-notice-description" className="mt-2 text-[0.82rem] leading-5 text-white/78 sm:text-[0.84rem]">
              This site uses HubSpot and similar technologies to understand how people use it, measure what is working, and respond when you get in touch. Your data is not sold.
            </p>
            <TransitionLink
              href="/privacy"
              className="premium-underline-link mt-1 inline-flex py-1 text-[0.82rem] font-semibold text-cyan-100"
            >
              Read the Privacy Policy
            </TransitionLink>
          </div>

          <Button
            type="button"
            size="sm"
            onClick={acknowledgeNotice}
            className="min-h-10 w-full shrink-0 rounded-lg px-5 sm:w-auto"
          >
            Got It
          </Button>
        </div>
      </div>
    </aside>
  );
}
