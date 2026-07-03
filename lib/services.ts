export interface Service {
  slug: string;
  index: string;
  title: string;
  summary: string;
}

export const services: Service[] = [
  {
    slug: "ai-automation",
    index: "01",
    title: "AI Automation",
    summary:
      "Your team stops doing the repetitive parts of the job — data entry, approvals, handoffs between tools — and gets hours back every week, with processes that keep running whether or not someone's watching them.",
  },
  {
    slug: "it-consulting",
    index: "02",
    title: "IT Consulting",
    summary:
      "Your systems stop fighting each other. Legacy platforms, scattered vendors, and patched-together infrastructure get replaced with architecture built to scale, so IT becomes something that supports growth instead of blocking it.",
  },
  {
    slug: "public-sector",
    index: "03",
    title: "Government & Public Sector Efficiency",
    summary:
      "Public processes move faster and answer to clearer standards of accountability. Departments gain measurable reductions in processing time, fewer points of failure, and service delivery that the public can see and trust.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
