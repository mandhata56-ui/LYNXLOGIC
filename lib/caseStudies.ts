export interface CaseStudy {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  client: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "healthcare-claims-automation",
    eyebrow: "Australia — Healthcare",
    title: "Claims processing time cut by two-thirds",
    summary:
      "An automated intake and approval pipeline replaced manual data entry, taking turnaround from days to hours.",
    client: "A healthcare operator in Australia",
  },
  {
    slug: "logistics-systems-consolidation",
    eyebrow: "United States — Logistics",
    title: "Six disconnected systems, replaced with one",
    summary:
      "Legacy platforms and manual reconciliation were consolidated into integrated infrastructure built to scale with volume.",
    client: "A logistics provider in the United States",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
