import type { Metadata } from "next";
import { FadeUp } from "@/components/FadeUp";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — LynxLogic",
  description:
    "Get in touch with LynxLogic about AI automation, IT consulting, or public sector efficiency work.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section>
        <div className="mx-auto max-w-2xl px-6 pb-24 pt-40 sm:pb-32 sm:pt-48">
          <FadeUp
            as="p"
            className="font-mono text-xs uppercase tracking-[0.2em] text-steel"
          >
            Contact
          </FadeUp>
          <FadeUp
            as="h1"
            delay={0.1}
            className="mt-4 font-display text-4xl font-medium leading-[1.05] text-bone sm:text-5xl"
          >
            Tell us what you're working on.
          </FadeUp>
          <FadeUp
            as="p"
            delay={0.15}
            className="mt-6 max-w-md text-lg text-bone/70"
          >
            A few lines is enough to start. We'll follow up to set up a
            call.
          </FadeUp>

          <FadeUp as="div" delay={0.2} className="mt-16">
            <ContactForm />
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
