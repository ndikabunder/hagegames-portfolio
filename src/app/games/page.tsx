import { Metadata } from "next";
import { Suspense } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GameGrid } from "@/components/games/GameGrid";

export const metadata: Metadata = {
  title: "Games",
  description: "Explore our portfolio of games across multiple platforms and genres.",
};

export default function GamesPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Games"
          subtitle="Explore our portfolio of games across multiple platforms and genres"
        />
        <Suspense>
          <GameGrid />
        </Suspense>
      </div>
    </section>
  );
}
