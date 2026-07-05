import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FadeUp } from "@/components/FadeUp";
import { getService, services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  // "public-sector" has its own dedicated page (app/services/public-sector),
  // so it's excluded from this generic stub.
  return services
    .filter((service) => service.slug !== "public-sector")
    .map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} — LynxLogic`,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="flex-1">
      {/* Intro */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-40 sm:pb-24 sm:pt-48">
          <Link
            href="/#services"
            className="font-mono text-xs uppercase tracking-[0.15em] text-steel-text transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
          >
            ← Services
          </Link>

          <FadeUp
            as="p"
            delay={0.05}
            className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-steel-text"
          >
            Services
          </FadeUp>

          <FadeUp
            as="h1"
            delay={0.1}
            className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] text-bone sm:text-6xl"
          >
            {service.title}
          </FadeUp>

          <FadeUp
            as="p"
            delay={0.15}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/70"
          >
            {service.overview ?? service.summary}
          </FadeUp>

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

      {/* What this covers */}
      {service.covers && (
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <h2 className="font-display text-2xl font-medium text-bone sm:text-3xl">
              What this covers
            </h2>
            <ul className="mt-12 divide-y divide-line border-t border-line">
              {service.covers.map((item) => (
                <li
                  key={item}
                  className="py-4 text-base text-bone/80 first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Who this is for */}
      {service.whoFor && (
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-medium text-bone sm:text-3xl">
                Who this is for
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-bone/70">
                {service.whoFor}
              </p>
              <Link
                href="/#process"
                className="mt-6 inline-flex items-center font-mono text-xs uppercase tracking-[0.15em] text-steel-text transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
              >
                See how an engagement runs →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-medium text-bone sm:text-3xl">
              Want to talk about your process?
            </h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-[4px] border border-line px-6 py-3 text-sm font-medium text-bone transition-colors hover:border-amber hover:text-amber focus-visible:border-amber focus-visible:text-amber focus-visible:outline-none"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
