"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FadeUp } from "@/components/FadeUp";
import { caseStudies } from "@/lib/caseStudies";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Work() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <FadeUp
          as="p"
          className="font-mono text-xs uppercase tracking-[0.2em] text-steel"
        >
          Work
        </FadeUp>
        <FadeUp
          as="h2"
          delay={0.1}
          className="mt-4 max-w-2xl font-display text-3xl font-medium text-bone sm:text-4xl"
        >
          Results, not case study theater.
        </FadeUp>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {caseStudies.map((study) => (
            <motion.div key={study.slug} variants={item}>
              <Link
                href={`/work/${study.slug}`}
                className="group flex h-full flex-col justify-between rounded-[4px] border border-line p-8 transition-all duration-300 hover:-translate-y-1 hover:border-steel/50 hover:shadow-[0_12px_30px_-18px_rgba(62,92,107,0.6)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-steel">
                    {study.eyebrow}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-bone">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-base text-bone/70">
                    {study.summary}
                  </p>
                </div>
                <span className="mt-8 flex items-center justify-between font-mono text-xs uppercase tracking-[0.15em] text-steel">
                  Read case study
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
