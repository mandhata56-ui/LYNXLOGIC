import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudy, caseStudies } from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — LynxLogic`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main className="flex-1">
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-40 sm:pb-32 sm:pt-48">
          <Link
            href="/#work"
            className="font-mono text-xs uppercase tracking-[0.15em] text-steel transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
          >
            ← Work
          </Link>

          <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-steel">
            {study.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] text-bone sm:text-6xl">
            {study.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-bone/70">
            {study.client}. {study.summary}
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-[4px] border border-line px-6 py-3 text-sm font-medium text-bone transition-colors hover:border-amber hover:text-amber focus-visible:border-amber focus-visible:text-amber focus-visible:outline-none"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
