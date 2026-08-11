'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

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

const textareaFloatingLabelClass =
  'pointer-events-none absolute left-4 top-4 z-10 translate-y-0 text-sm font-medium leading-none tracking-normal text-[rgba(255,255,255,0.9)] transition-all duration-200 ease-out peer-focus:top-1.5 peer-focus:text-[0.68rem] peer-focus:font-semibold peer-focus:tracking-[0.04em] peer-focus:text-[#0AC4FF] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[0.68rem] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:tracking-[0.04em] peer-[:not(:placeholder-shown)]:text-white/65';

export function ContactForm() {
  const [status, setStatus] = useState('Usually replies within 12 hours');
  const [projectType, setProjectType] = useState('');
  const [budgetTimeline, setBudgetTimeline] = useState('');
  const [bestTime, setBestTime] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      'This form is not connected to a backend yet. For now, please reach me through email or one of the contact links below.'
    );
  }

  return (
    <form className="grid gap-3.5" onSubmit={handleSubmit}>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <div className={fieldShellClass}>
          <label className="sr-only" htmlFor="firstName">
            First Name
          </label>
          <input id="firstName" name="firstName" className={fieldClass} autoComplete="given-name" placeholder=" " />
          <span className={floatingLabelClass}>First Name</span>
        </div>
        <div className={fieldShellClass}>
          <label className="sr-only" htmlFor="lastName">
            Last Name
          </label>
          <input id="lastName" name="lastName" className={fieldClass} autoComplete="family-name" placeholder=" " />
          <span className={floatingLabelClass}>Last Name</span>
        </div>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div className={fieldShellClass}>
          <label className="sr-only" htmlFor="email">
            Email Address
          </label>
          <input id="email" name="email" type="email" className={fieldClass} autoComplete="email" placeholder=" " />
          <span className={floatingLabelClass}>Email Address</span>
        </div>
        <div className="group relative w-full">
          <label className="sr-only" htmlFor="projectType">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            className={`${selectFieldClass} appearance-none pr-12 ${projectType ? 'text-white/90' : 'text-transparent'}`}
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
          >
            <option value="" disabled hidden aria-hidden="true" />
            <option className="bg-[#071126] text-white">HubSpot / CRM</option>
            <option className="bg-[#071126] text-white">Website / Landing Page</option>
            <option className="bg-[#071126] text-white">Automation / AI Workflow</option>
            <option className="bg-[#071126] text-white">Frontend Build</option>
            <option className="bg-[#071126] text-white">Not sure yet</option>
          </select>
          <span className={selectFloatingLabelClass(Boolean(projectType))}>Project Type</span>
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
            Budget or Timeline
          </label>
          <select
            id="budgetTimeline"
            name="budgetTimeline"
            className={`${selectFieldClass} appearance-none pr-12 ${budgetTimeline ? 'text-white/90' : 'text-transparent'}`}
            value={budgetTimeline}
            onChange={(event) => setBudgetTimeline(event.target.value)}
          >
            <option value="" disabled hidden aria-hidden="true" />
            <option className="bg-[#071126] text-white">Small fix</option>
            <option className="bg-[#071126] text-white">Project build</option>
            <option className="bg-[#071126] text-white">Ongoing support</option>
            <option className="bg-[#071126] text-white">Not sure yet</option>
          </select>
          <span className={selectFloatingLabelClass(Boolean(budgetTimeline))}>Budget or Timeline</span>
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
            name="bestTime"
            className={`${selectFieldClass} appearance-none pr-12 ${bestTime ? 'text-white/90' : 'text-transparent'}`}
            value={bestTime}
            onChange={(event) => setBestTime(event.target.value)}
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
          Tell me about your project...
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldClass} min-h-32 resize-y leading-6`}
          placeholder=" "
        />
        <span className={textareaFloatingLabelClass}>Tell me about your project...</span>
      </div>

      <div className="mt-1.5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="md"
          className="group min-h-12 w-full rounded-lg px-7 text-sm shadow-[0_12px_30px_rgba(37,107,255,.30),0_0_28px_rgba(108,76,255,.22)] sm:w-auto"
        >
          Send Message
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <p aria-live="polite" className="flex items-start gap-2 text-sm leading-6 text-white/58">
          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.9)]" />
          {status}
        </p>
      </div>
    </form>
  );
}
