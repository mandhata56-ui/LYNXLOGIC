import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-40 sm:pb-32 sm:pt-48">
          <Link
            href="/#services"
            className="font-mono text-xs uppercase tracking-[0.15em] text-steel-text transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
          >
            ← Services
          </Link>

          <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-steel-text">
            {service.index}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] text-bone sm:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-bone/70">
            {service.summary}
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
