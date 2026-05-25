import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { games } from "@/data/games";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface lg:grid-cols-12">
            <div className="relative min-h-[260px] sm:min-h-[360px] lg:col-span-5">
              <Image
                src={games[1].heroImage}
                alt={games[1].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface lg:bg-gradient-to-l" />
            </div>

            <div className="relative p-6 sm:p-8 md:p-12 lg:col-span-7">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                  Careers at HageGames
                </span>
                <h2 className="mt-5 text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance sm:text-5xl md:text-6xl">
                  Become a HageMaker
                </h2>
                <div className="mt-7 max-w-2xl space-y-4 text-muted leading-relaxed">
                  <p>
                    Joining HageGames means working with people who care deeply
                    about games, craft, and the teams that make them possible.
                  </p>
                  <p>
                    You&apos;ll sharpen your skills, contribute to distinct worlds,
                    and help shape projects that players can remember.
                  </p>
                  <p>Sound like fun? Come build with us.</p>
                </div>

                <Link
                  href="/contact"
                  className="mt-9 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-background transition-colors hover:bg-accent-hover"
                >
                  View our open roles <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
