import { Container } from '@/components/ui/Container';
import { TransitionLink } from '@/components/motion/TransitionLink';

export default function NotFound() {
  return (
    <main className="min-h-screen pt-32">
      <Container>
        <div className="glass-panel rounded-[2rem] p-8 text-center sm:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary/80">404 // Out Of Office</p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">This page has left the building.</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60">The route is missing. I checked behind the navbar. Nothing. Return home before I start blaming caching.</p>
          <TransitionLink href="/" className="mt-8 inline-flex rounded-full bg-button-gradient px-6 py-3 text-sm font-bold text-white shadow-glow">
            Retreat Home
          </TransitionLink>
        </div>
      </Container>
    </main>
  );
}
