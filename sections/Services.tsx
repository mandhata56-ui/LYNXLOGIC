"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FadeUp } from "@/components/FadeUp";
import { services } from "@/lib/services";

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

export function Services() {
  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <FadeUp as="p" className="font-mono text-xs uppercase tracking-[0.2em] text-steel">
          Services
        </FadeUp>
        <FadeUp
          as="h2"
          delay={0.1}
          className="mt-4 max-w-2xl font-display text-3xl font-medium text-bone sm:text-4xl"
        >
          Three ways we bring structure to the noise.
        </FadeUp>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-16 divide-y divide-line border-t border-line"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={item}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid gap-4 rounded-[4px] py-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber sm:grid-cols-[80px_1fr_32px] sm:items-center sm:gap-10"
              >
                <span className="font-mono text-sm text-steel">
                  {service.index}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium text-bone transition-colors group-hover:text-steel sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base text-bone/70">
                    {service.summary}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden font-mono text-lg text-steel transition-transform duration-300 group-hover:translate-x-1 sm:block"
                >
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
