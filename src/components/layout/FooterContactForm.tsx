'use client';

import type { FormEvent } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function FooterContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 rounded-row border border-secondary/25 bg-[linear-gradient(145deg,rgba(2,5,17,0.72),rgba(8,13,35,0.92))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_26px_rgba(10,196,255,0.07)]">
      <label htmlFor="footer-project" className="sr-only">Tell me about your project</label>
      <div className="flex items-center gap-3 rounded-lg border border-secondary/20 bg-white/[0.025] px-4 transition duration-300 ease-premium focus-within:border-secondary/55 focus-within:bg-[#050b1d]/55 focus-within:shadow-[0_0_0_3px_rgba(10,196,255,0.09),0_0_26px_rgba(10,196,255,0.13)]">
        <input
          id="footer-project"
          name="project"
          type="text"
          autoComplete="off"
          placeholder="Tell me about your project"
          className="footer-project-input min-w-0 flex-1 bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-white/45"
        />
        <Send aria-hidden="true" className="h-5 w-5 shrink-0 text-secondary drop-shadow-[0_0_9px_rgba(10,196,255,0.7)]" />
      </div>
      <Button type="submit" size="lg" className="mt-2 min-h-14 w-full rounded-lg shadow-[0_0_24px_rgba(10,196,255,0.14)] hover:brightness-110 hover:shadow-[0_0_34px_rgba(10,196,255,0.28)] focus-visible:border-cyan-100/70 focus-visible:shadow-[0_0_0_3px_rgba(10,196,255,0.1),0_0_30px_rgba(10,196,255,0.24)] active:brightness-95">
        Start a conversation <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Button>
    </form>
  );
}
