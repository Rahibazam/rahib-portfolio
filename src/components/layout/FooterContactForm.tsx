'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, Send } from 'lucide-react';
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
      const result = await submitHubSpotForm({
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
      setStatus({ type: 'success', message: result.message ?? 'Thanks — your message has been sent.' });
      startedAt.current = Date.now();
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Your message could not be sent. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-6 rounded-row border border-secondary/25 bg-[linear-gradient(145deg,rgba(2,5,17,0.72),rgba(8,13,35,0.92))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_26px_rgba(10,196,255,0.07)]">
      <div aria-hidden="true" className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px overflow-hidden opacity-0">
        <label htmlFor="footer-company-website">Company website</label>
        <input id="footer-company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <div className="flex items-center gap-3 rounded-lg border border-secondary/20 bg-white/[0.025] px-4 transition duration-300 ease-premium focus-within:border-secondary/55 focus-within:bg-[#050b1d]/55 focus-within:shadow-[0_0_0_3px_rgba(10,196,255,0.09),0_0_26px_rgba(10,196,255,0.13)]">
        <input
          id="footer-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          required
          maxLength={254}
          className="footer-project-input min-w-0 flex-1 bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-white/45"
        />
        <Send aria-hidden="true" className="h-5 w-5 shrink-0 text-secondary drop-shadow-[0_0_9px_rgba(10,196,255,0.7)]" />
      </div>

      <label htmlFor="footer-project" className="sr-only">Tell me about your project</label>
      <div className="mt-2 flex items-start gap-3 rounded-lg border border-secondary/20 bg-white/[0.025] px-4 transition duration-300 ease-premium focus-within:border-secondary/55 focus-within:bg-[#050b1d]/55 focus-within:shadow-[0_0_0_3px_rgba(10,196,255,0.09),0_0_26px_rgba(10,196,255,0.13)]">
        <textarea
          id="footer-project"
          name="project_details"
          rows={2}
          placeholder="Tell me about your project"
          required
          maxLength={2000}
          className="footer-project-input min-h-20 min-w-0 flex-1 resize-y bg-transparent py-3.5 text-sm leading-5 text-white outline-none placeholder:text-white/45"
        />
      </div>

      <p className="px-2 pb-1 pt-3 text-[0.66rem] leading-4 text-white/46">
        By submitting, you agree that I may use your information to respond. See the{' '}
        <TransitionLink href="/privacy" className="premium-underline-link text-cyan-100/78 hover:text-cyan-100">
          Privacy Policy
        </TransitionLink>
        .
      </p>

      {status ? (
        <p
          aria-live="polite"
          className={`px-2 pb-1 pt-2 text-xs leading-5 ${status.type === 'error' ? 'text-rose-200' : 'text-emerald-200'}`}
        >
          {status.message}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="mt-2 min-h-14 w-full rounded-lg shadow-[0_0_24px_rgba(10,196,255,0.14)] hover:brightness-110 hover:shadow-[0_0_34px_rgba(10,196,255,0.28)] focus-visible:border-cyan-100/70 focus-visible:shadow-[0_0_0_3px_rgba(10,196,255,0.1),0_0_30px_rgba(10,196,255,0.24)] active:brightness-95"
      >
        {isSubmitting ? 'Sending...' : 'Start a conversation'} <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Button>
    </form>
  );
}
