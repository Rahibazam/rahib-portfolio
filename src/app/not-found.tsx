import { Container } from '@/components/ui/Container';
import { TransitionLink } from '@/components/motion/TransitionLink';

export default function NotFound() {
  return (
    <main className="min-h-screen pt-32">
      <Container>
        <div className="glass-panel rounded-[2rem] p-8 text-center sm:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary/80">404</p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">System view not found.</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60">The page you are looking for does not exist or has moved.</p>
          <TransitionLink href="/" className="mt-8 inline-flex rounded-full bg-button-gradient px-6 py-3 text-sm font-bold text-white shadow-glow">
            Return Home
          </TransitionLink>
        </div>
      </Container>
    </main>
  );
}
