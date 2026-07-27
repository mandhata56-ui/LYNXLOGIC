export interface Service {
  slug: string;
  index: string;
  title: string;
  summary: string;
  /** One-line outcome promise shown on the homepage service card. */
  promise?: string;
  /** Short proof points shown under the promise on the homepage card. */
  points?: string[];
  /** Expanded intro paragraph used on the service detail page. */
  overview?: string;
  /** Concrete scope items shown under "What this covers". */
  covers?: string[];
  /** Short qualifying paragraph shown under "Who this is for". */
  whoFor?: string;
}

export const services: Service[] = [
  {
    slug: "ai-automation",
    index: "01",
    title: "AI Automation",
    summary:
      "Your team stops doing the repetitive parts of the job — data entry, approvals, handoffs between tools — and gets hours back every week, with processes that keep running whether or not someone's watching them.",
    promise:
      "Your team stops doing the repetitive parts of the job — data entry, approvals, handoffs between tools — and gets hours back every week.",
    points: [
      "Processes that keep running whether or not someone is watching them",
      "Built on the tools your team already uses, not a parallel system",
      "Human checkpoints where accuracy actually matters",
    ],
    overview:
      "AI Automation engagements target the manual, repetitive work sitting inside an otherwise fine process — data entry between systems that don't talk to each other, approvals that wait on someone to notice an email, reports assembled by hand every week. We map where that manual effort actually lives, then build automation that removes it without requiring your team to change how they work.",
    covers: [
      "Workflow and approval automation — routing, notifications, sign-off chains",
      "Data entry and reconciliation between disconnected systems",
      "Scheduled reporting and dashboards built from data you already have",
      "Integration between tools you already use — CRM, ERP, spreadsheets, internal tools",
      "AI-assisted document processing — extraction, classification, summarization",
    ],
    whoFor:
      "Teams where the software already works, but a person still has to shepherd data between it — and where that shepherding is eating hours every week that could go elsewhere.",
  },
  {
    slug: "it-consulting",
    index: "02",
    title: "IT Consulting",
    summary:
      "Your systems stop fighting each other. Legacy platforms, scattered vendors, and patched-together infrastructure get replaced with architecture built to scale, so IT becomes something that supports growth instead of blocking it.",
    promise:
      "Your systems stop fighting each other. Legacy platforms and patched-together infrastructure get replaced with architecture built to scale.",
    points: [
      "Senior architecture — IT that supports growth instead of blocking it",
      "Vendor sprawl consolidated into a system you can reason about",
      "A migration path, not a rip-and-replace gamble",
    ],
    overview:
      "IT Consulting engagements focus on the infrastructure and systems behind day-to-day operations — the platforms, vendors, and architecture decisions that either support growth or quietly slow it down. We assess what's actually running, where the risk and cost sit, and build a path to infrastructure that scales without a rebuild every two years.",
    covers: [
      "Infrastructure and vendor audits",
      "Systems architecture and migration planning",
      "Legacy platform modernization",
      "Security and access posture review",
      "Tooling consolidation — reducing redundant or overlapping software spend",
    ],
    whoFor:
      "Teams that have grown past their original setup — where infrastructure decisions made early are now creating friction, risk, or cost that wasn't there at the start.",
  },
  {
    slug: "public-sector",
    index: "03",
    title: "Government & Public Sector Efficiency",
    summary:
      "Public processes move faster and answer to clearer standards of accountability. Departments gain measurable reductions in processing time, fewer points of failure, and service delivery that the public can see and trust.",
    promise:
      "Measurable reductions in processing time, fewer points of failure, and service delivery the public can see and trust.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
