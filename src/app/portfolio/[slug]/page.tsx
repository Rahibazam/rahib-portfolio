import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudyTemplate } from '@/components/case-study/CaseStudyTemplate';
import { caseStudies, getCaseStudyBySlug } from '@/data/caseStudies';
import { getProjectBySlug } from '@/data/projects';

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: CaseStudyPageProps): Promise<Metadata> {
  const params = await props.params;
  const caseStudy = getCaseStudyBySlug(params.slug);
  const project = getProjectBySlug(params.slug);

  if (!caseStudy || !project) return {};

  const title = `${project.title} Case Study — Rahib Azam`;

  return {
    title,
    description: caseStudy.heroStatement,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title,
      description: caseStudy.heroStatement,
      type: 'article'
    }
  };
}

export default async function CaseStudyPage(props: CaseStudyPageProps) {
  const params = await props.params;
  const caseStudy = getCaseStudyBySlug(params.slug);
  const project = getProjectBySlug(params.slug);

  if (!caseStudy || !project) notFound();

  return <CaseStudyTemplate caseStudy={caseStudy} project={project} />;
}
