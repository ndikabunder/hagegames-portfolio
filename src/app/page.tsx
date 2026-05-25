import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { FeaturedGames } from "@/components/home/FeaturedGames";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedGames />
      <CTA />
    </>
  );
}
