"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { games } from "@/data/games";
import { GameCard } from "@/components/games/GameCard";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type Filter = "all" | "released" | "coming_soon";

const filters: { label: string; value: Filter }[] = [
  { label: "All Games", value: "all" },
  { label: "Released", value: "released" },
  { label: "Coming Soon", value: "coming_soon" },
];

export function GameGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filter = (searchParams.get("status") as Filter) || "all";
  const filtered = filter === "all" ? games : games.filter((g) => g.status === filter);

  function setFilter(value: Filter) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("status");
    } else {
      params.set("status", value);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className={cn(
              "px-4 py-2.5 rounded-lg text-xs uppercase tracking-[0.12em] font-medium transition-[background-color,border-color,color] duration-300 sm:px-5 sm:tracking-[0.15em]",
              filter === f.value
                ? "bg-accent text-background"
                : "border border-border/50 text-muted hover:text-foreground hover:border-accent/30"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((game, i) => (
          <AnimatedSection key={game.slug} delay={i * 0.08}>
            <GameCard game={game} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
