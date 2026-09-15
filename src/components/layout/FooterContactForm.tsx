'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, Check, RotateCcw, Send } from 'lucide-react';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { Button } from '@/components/ui/Button';
import { submitHubSpotForm } from '@/lib/submitHubSpotForm';

export function FooterContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus(null);

    try {
      await submitHubSpotForm({
        formType: 'footer',
        fields: {
          email: String(formData.get('email') ?? ''),
          project_details: String(formData.get('project_details') ?? '')
        },
        startedAt: startedAt.current,
        honeypot: String(formData.get('company_website') ?? ''),
        pageName: 'Portfolio Footer Inquiry'
      });

      form.reset();
      setStatus({ type: 'success', message: 'Message received. I will now open seven tabs and pretend this is a normal response.' });
      startedAt.current = Date.now();
    } catch {
      setStatus({
        type: 'error',
        message: 'Perfect. The contact form has also decided to become part of the project.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function startAnotherMessage() {
    setStatus(null);
    startedAt.current = Date.now();
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-5">
      <div aria-hidden="true" className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px overflow-hidden opacity-0">
        <label htmlFor="footer-company-website">Company website</label>
        <input id="footer-company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status?.type === 'success' ? (
        <div className="relative overflow-hidden rounded-lg border border-emerald-300/30 bg-[radial-gradient(circle_at_8%_0%,rgba(10,196,255,.12),transparent_45%),linear-gradient(145deg,rgba(2,9,24,.82),rgba(8,11,34,.88))] px-4 py-4 shadow-[0_0_24px_rgba(10,196,255,.10),inset_0_1px_0_rgba(255,255,255,.07)]">
          <span aria-hidden="true" className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(110,231,183,.7),transparent)]" />
          <div className="flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center border border-emerald-300/35 bg-emerald-300/[0.08] text-emerald-200 shadow-[0_0_16px_rgba(110,231,183,.16)]">
              <Check aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-emerald-200">
                Transmission received
              </p>
              <p aria-live="polite" className="mt-1.5 text-xs leading-5 text-white/62">
                {status.message}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={startAnotherMessage}
            className="premium-underline-link mt-3 inline-flex items-center gap-2 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-cyan-100/72 transition hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70"
          >
            <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />
            Send another
          </button>
        </div>
      ) : (
        <>
          <div className="group/card home-module-strong relative isolate overflow-hidden rounded-lg border-secondary/35 transform-gpu transition-all duration-300 ease-premium focus-within:border-secondary/45">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <div className="flex min-h-11 items-center gap-3 px-3.5">
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email address"
                required
                maxLength={254}
                className="footer-project-input min-w-0 flex-1 bg-transparent py-2.5 text-sm text-white outline-none placeholder:text-white/42"
              />
              <Send aria-hidden="true" className="h-4 w-4 shrink-0 text-secondary drop-shadow-[0_0_8px_rgba(10,196,255,.65)]" />
            </div>

            <span aria-hidden="true" className="block h-px bg-[linear-gradient(90deg,transparent,rgba(10,196,255,.22),rgba(139,108,255,.18),transparent)]" />

            <label htmlFor="footer-project" className="sr-only">Tell me about your project</label>
            <textarea
              id="footer-project"
              name="project_details"
              rows={1}
              placeholder="Tell me about your project"
              required
              maxLength={2000}
              className="footer-project-input min-h-11 max-h-24 w-full resize-none overflow-y-auto bg-transparent px-3.5 py-3 text-sm leading-5 text-white outline-none [field-sizing:content] placeholder:text-white/42"
            />
          </div>

          <p className="mt-2.5 text-[0.62rem] leading-4 text-white/42">
            Used only to reply to your inquiry ·{' '}
            <TransitionLink href="/privacy" className="premium-underline-link text-cyan-100/72 hover:text-cyan-100">
              Privacy
            </TransitionLink>
          </p>

          <div className="mt-3 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 flex-1">
              {status?.type === 'error' ? (
                <p aria-live="polite" className="text-xs leading-5 text-rose-200">
                  {status.message}
                </p>
              ) : (
                <p className="flex items-center gap-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-white/38">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-secondary shadow-[0_0_9px_rgba(10,196,255,.75)]" />
                  <span className="sm:hidden">Secure inquiry route</span>
                  <span className="hidden sm:inline">Secure</span>
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="md"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="w-full rounded-lg shadow-[0_0_24px_rgba(10,196,255,0.14)] hover:brightness-110 hover:shadow-[0_0_34px_rgba(10,196,255,0.28)] focus-visible:border-cyan-100/70 focus-visible:shadow-[0_0_0_3px_rgba(10,196,255,0.1),0_0_30px_rgba(10,196,255,0.24)] active:brightness-95 sm:w-auto"
            >
              {isSubmitting ? 'Sending...' : 'Send The Situation'}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}
    </form>
  );
}
