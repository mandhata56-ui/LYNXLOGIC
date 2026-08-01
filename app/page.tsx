import { Hero } from "@/sections/Hero";
import { TrustStrip } from "@/sections/TrustStrip";
import { Manifesto } from "@/sections/Manifesto";
import { Services } from "@/sections/Services";
import { ProofBand } from "@/sections/ProofBand";
import { WhyUs } from "@/sections/WhyUs";
import { Process } from "@/sections/Process";
import { CallToAction } from "@/sections/CallToAction";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-[1536px] px-[clamp(20px,5vw,64px)]">
        <Hero />
        <TrustStrip />
        <Manifesto />
        <Services />
        <ProofBand />
        <WhyUs />
        <Process />
        <CallToAction />
      </div>
    </main>
  );
}
