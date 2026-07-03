import { Hero } from "@/sections/Hero";
import { ProofStrip } from "@/sections/ProofStrip";
import { Services } from "@/sections/Services";
import { Process } from "@/sections/Process";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProofStrip />
      <Services />
      <Process />
    </main>
  );
}
