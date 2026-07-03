import { Hero } from "@/sections/Hero";
import { ProofStrip } from "@/sections/ProofStrip";
import { Services } from "@/sections/Services";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProofStrip />
      <Services />
    </main>
  );
}
