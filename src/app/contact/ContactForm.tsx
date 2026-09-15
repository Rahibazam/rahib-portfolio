'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { Button } from '@/components/ui/Button';
import { submitHubSpotForm } from '@/lib/submitHubSpotForm';

const fieldShellClass = 'relative w-full';

const fieldClass =
  'peer min-h-12 w-full rounded-[0.8rem] border-2 border-[#0AC4FF]/30 bg-[#0000] px-4 pb-2 pt-5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] outline-none backdrop-blur-lg transition hover:border-[#0AC4FF]/48 focus:border-[#0AC4FF] focus:shadow-[inset_0_1px_0_rgba(255,255,255,.08)] focus-visible:outline-none';

const selectFieldClass =
  'peer min-h-12 w-full rounded-[0.8rem] border-2 border-[#0AC4FF]/30 bg-[#0000] px-4 pb-2 pt-5 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,.06)] outline-none backdrop-blur-lg transition hover:border-[#0AC4FF]/48 focus:border-[#0AC4FF]/95 focus:shadow-[inset_0_1px_0_rgba(255,255,255,.08)] focus-visible:outline-none';

const floatingLabelClass =
  'pointer-events-none absolute left-4 top-1.5 z-10 translate-y-0 text-[0.68rem] font-semibold leading-none tracking-[0.04em] text-white/65 transition-all duration-200 ease-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[rgba(255,255,255,0.9)] peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-[0.68rem] peer-focus:font-semibold peer-focus:tracking-[0.04em] peer-focus:text-[#0AC4FF]';

const selectFloatingLabelClass = (hasValue: boolean) =>
  [
    'pointer-events-none absolute left-4 z-10 leading-none transition-all duration-200 ease-out group-focus-within:top-1.5 group-focus-within:translate-y-0 group-focus-within:text-[0.68rem] group-focus-within:font-semibold group-focus-within:tracking-[0.04em] group-focus-within:text-[#0AC4FF]',
    hasValue
      ? 'top-1.5 translate-y-0 text-[0.68rem] font-semibold tracking-[0.04em] text-white/65'
      : 'top-1/2 -translate-y-1/2 text-sm font-medium tracking-normal text-[rgba(255,255,255,0.9)]'
  ].join(' ');

export function ContactForm() {
  const [status, setStatus] = useState('Usually replies within 12 hours');
  const [statusType, setStatusType] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectType, setProjectType] = useState('');
  const [budgetTimeline, setBudgetTimeline] = useState('');
  const [bestTime, setBestTime] = useState('');
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatusType('idle');
    setStatus('Sending your message...');

    try {
      await submitHubSpotForm({
        formType: 'contact',
        fields: {
          firstname: String(formData.get('firstname') ?? ''),
          lastname: String(formData.get('lastname') ?? ''),
          email: String(formData.get('email') ?? ''),
          project_type:
            projectType === 'Ongoing Support' || projectType === 'Other / Difficult To Explain'
              ? 'Not sure yet'
              : String(formData.get('project_type') ?? ''),
          budget_or_timeline: String(formData.get('budget_or_timeline') ?? ''),
          best_time_to_reach_you: String(formData.get('best_time_to_reach_you') ?? ''),
          project_details: String(formData.get('project_details') ?? '')
        },
        startedAt: startedAt.current,
        honeypot: String(formData.get('company_website') ?? ''),
        pageName: 'Contact Rahib Azam'
      });

      form.reset();
      setProjectType('');
      setBudgetTimeline('');
      setBestTime('');
      setStatusType('success');
      setStatus('It arrived safely. I will now begin the ceremonial opening of too many tabs.');
      startedAt.current = Date.now();
    } catch {
      setStatusType('error');
      setStatus('Perfect. The contact form has also decided to become part of the project.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="relative grid gap-3.5" onSubmit={handleSubmit}>
      <div aria-hidden="true" className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px overflow-hidden opacity-0">
        <label htmlFor="contact-company-website">Company website</label>
        <input id="contact-company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div className={fieldShellClass}>
          <label className="sr-only" htmlFor="firstName">
            First Name
          </label>
          <input id="firstName" name="firstname" className={fieldClass} autoComplete="given-name" placeholder=" " required maxLength={80} />
          <span className={floatingLabelClass}>First Name</span>
        </div>
        <div className={fieldShellClass}>
          <label className="sr-only" htmlFor="lastName">
            Last Name
          </label>
          <input id="lastName" name="lastname" className={fieldClass} autoComplete="family-name" placeholder=" " required maxLength={80} />
          <span className={floatingLabelClass}>Last Name</span>
        </div>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div className={fieldShellClass}>
          <label className="sr-only" htmlFor="email">
            Email Address
          </label>
          <input id="email" name="email" type="email" className={fieldClass} autoComplete="email" placeholder=" " required maxLength={254} />
          <span className={floatingLabelClass}>Email Address</span>
        </div>
        <div className="group relative w-full">
          <label className="sr-only" htmlFor="projectType">
            What has happened?
          </label>
          <select
            id="projectType"
            name="project_type"
            className={`${selectFieldClass} appearance-none pr-12 ${projectType ? 'text-white/90' : 'text-transparent'}`}
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
            required
          >
            <option value="" disabled hidden aria-hidden="true" />
            <option value="HubSpot / CRM" className="bg-[#071126] text-white">HubSpot / CRM</option>
            <option value="Automation / AI Workflow" className="bg-[#071126] text-white">Automation / Reporting</option>
            <option value="Website / Landing Page" className="bg-[#071126] text-white">Website / Landing Page</option>
            <option value="Frontend Build" className="bg-[#071126] text-white">Technical SEO / CMS</option>
            <option value="Ongoing Support" className="bg-[#071126] text-white">Ongoing Support</option>
            <option value="Other / Difficult To Explain" className="bg-[#071126] text-white">Other / Difficult To Explain</option>
          </select>
          <span className={selectFloatingLabelClass(Boolean(projectType))}>What has happened?</span>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/65"
            strokeWidth={1.8}
          />
        </div>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div className="group relative w-full">
          <label className="sr-only" htmlFor="budgetTimeline">
            Budget / Timeline
          </label>
          <select
            id="budgetTimeline"
            name="budget_or_timeline"
            className={`${selectFieldClass} appearance-none pr-12 ${budgetTimeline ? 'text-white/90' : 'text-transparent'}`}
            value={budgetTimeline}
            onChange={(event) => setBudgetTimeline(event.target.value)}
            required
          >
            <option value="" disabled hidden aria-hidden="true" />
            <option className="bg-[#071126] text-white">Small fix</option>
            <option className="bg-[#071126] text-white">Project build</option>
            <option className="bg-[#071126] text-white">Ongoing support</option>
            <option className="bg-[#071126] text-white">Not sure yet</option>
          </select>
          <span className={selectFloatingLabelClass(Boolean(budgetTimeline))}>Budget / Timeline</span>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/65"
            strokeWidth={1.8}
          />
        </div>
        <div className="group relative w-full">
          <label className="sr-only" htmlFor="bestTime">
            Best Time to Reach You
          </label>
          <select
            id="bestTime"
            name="best_time_to_reach_you"
            className={`${selectFieldClass} appearance-none pr-12 ${bestTime ? 'text-white/90' : 'text-transparent'}`}
            value={bestTime}
            onChange={(event) => setBestTime(event.target.value)}
            required
          >
            <option value="" disabled hidden aria-hidden="true" />
            <option className="bg-[#071126] text-white">Morning</option>
            <option className="bg-[#071126] text-white">Afternoon</option>
            <option className="bg-[#071126] text-white">Evening</option>
            <option className="bg-[#071126] text-white">Async is fine</option>
          </select>
          <span className={selectFloatingLabelClass(Boolean(bestTime))}>Best Time to Reach You</span>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/65"
            strokeWidth={1.8}
          />
        </div>
      </div>

      <div className={fieldShellClass}>
        <label className="sr-only" htmlFor="message">
          Project Context
        </label>
        <textarea
          id="message"
          name="project_details"
          rows={4}
          className={`${fieldClass} min-h-32 resize-y leading-6`}
          placeholder="Tell me what is broken, weird, slow, duplicated, manual, held together by vibes, or named FINAL-final-v3. Context is beautiful."
          required
          maxLength={4000}
        />
      </div>

      <p className="text-xs leading-5 text-white/52">
        By submitting this form, you agree that I may process your information to respond to your inquiry. Your data is not sold, and you may request deletion at any time. See the{' '}
        <TransitionLink href="/privacy" className="premium-underline-link text-cyan-100/85 hover:text-cyan-100">
          Privacy Policy
        </TransitionLink>{' '}
        for details.
      </p>

      <div className="mt-1.5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="md"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="group min-h-12 w-full rounded-lg px-7 text-sm shadow-[0_12px_30px_rgba(37,107,255,.30),0_0_28px_rgba(108,76,255,.22)] sm:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send The Situation'}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <div aria-live="polite" className="flex items-start gap-2 text-sm leading-6 text-white/58">
          <span
            className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${
              statusType === 'error'
                ? 'bg-rose-300 shadow-[0_0_12px_rgba(253,164,175,.9)]'
                : 'bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.9)]'
            }`}
          />
          <span>
            {statusType === 'success' ? <strong className="mb-0.5 block font-mono text-xs uppercase tracking-[0.14em] text-emerald-200">Situation Acquired</strong> : null}
            {status}
          </span>
        </div>
      </div>
    </form>
  );
}
