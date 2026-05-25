import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { games } from "@/data/games";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const releases = games.slice(0, 5);

export function FeaturedGames() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(230,57,70,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-background">
                New
              </span>
              <h2 className="mt-5 text-4xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl">
                New releases
              </h2>
            </div>
            <Link
              href="/games"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-background transition-colors hover:bg-accent-hover"
            >
              See what&apos;s new <ArrowUpRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-4">
          {releases.map((game, index) => (
            <AnimatedSection key={game.slug} delay={index * 0.05}>
              <Link
                href={`/games/${game.slug}`}
                className="group grid grid-cols-1 overflow-hidden rounded-[1.5rem] border border-border/70 bg-surface transition-[background-color,border-color] duration-300 hover:border-accent/45 hover:bg-surface-elevated md:grid-cols-[18rem_1fr_auto]"
              >
                <div className="relative aspect-[16/9] bg-background md:aspect-auto md:min-h-40">
                  <Image
                    src={game.thumbnail}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 288px"
                  />
                </div>

                <div className="min-w-0 p-5 sm:p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-background">
                      {game.status === "released" ? "Out now" : "Coming soon"}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                      {game.genre.join(" / ")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-balance md:text-3xl">
                    {game.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {game.shortDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border/70 p-5 sm:p-6 md:border-l md:border-t-0 md:p-7">
                  <span className="text-sm font-bold uppercase tracking-[0.14em] text-accent">
                    {game.status === "released" ? "Buy game" : "Wishlist"}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="ml-5 text-muted transition-colors group-hover:text-accent"
                  />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
