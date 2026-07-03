import { FadeUp } from "@/components/FadeUp";

interface Metric {
  value: string;
  label: string;
}

interface ProofStripProps {
  /** Real metrics, supplied later. Omit to show just the trust line. */
  metrics?: Metric[];
}

export function ProofStrip({ metrics }: ProofStripProps) {
  return (
    <section className="border-b border-line">
      <FadeUp
        as="div"
        className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="font-mono text-sm text-bone/50">
          Trusted by teams in Australia and the United States.
        </p>

        {metrics && metrics.length > 0 && (
          <dl className="flex flex-wrap gap-x-10 gap-y-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <dt className="font-mono text-2xl text-bone">
                  {metric.value}
                </dt>
                <dd className="font-mono text-[11px] uppercase tracking-[0.15em] text-steel">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </FadeUp>
    </section>
  );
}
