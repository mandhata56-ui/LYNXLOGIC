import { Hero } from "@/sections/Hero";
import { ProofStrip } from "@/sections/ProofStrip";
import { Services } from "@/sections/Services";
import { Work } from "@/sections/Work";
import { Process } from "@/sections/Process";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProofStrip />
      <Services />
      <Work />
      <Process />
    </main>
  );
}
