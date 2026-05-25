import Link from "next/link";
import { ArrowUpRight, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const beliefs = [
  {
    title: "Kindness",
    description:
      "We work with patience, honesty, and care for the people behind every project.",
    icon: <Heart size={26} />,
  },
  {
    title: "Respect",
    description:
      "We listen first, protect trust, and value clear collaboration over ego.",
    icon: <ShieldCheck size={26} />,
  },
  {
    title: "Craft",
    description:
      "We do what is right for the game, even when the better path is harder.",
    icon: <Sparkles size={26} />,
  },
];

export function Services() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(230,57,70,0.16),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              How we work
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.04] tracking-tight text-balance sm:text-5xl md:text-7xl">
              We believe in kindness, respect, and doing what&apos;s right.
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {beliefs.map((belief, index) => (
            <AnimatedSection key={belief.title} delay={index * 0.08}>
              <article className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface p-6 transition-[background-color,border-color] duration-300 hover:border-accent/40 hover:bg-surface-elevated sm:min-h-[290px] sm:p-8">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                <div className="relative">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-background">
                    {belief.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    {belief.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {belief.description}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              Learn more about us <ArrowUpRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
