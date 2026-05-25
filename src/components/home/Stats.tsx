import { stats } from "@/data/games";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Stats() {
  return (
    <section className="relative border-y border-border/70 bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 divide-x divide-y divide-border/70 border-x border-border/70 md:grid-cols-4 md:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="px-5 py-8 md:px-7 md:py-10">
                <p className="text-4xl font-extrabold tracking-tight text-accent md:text-5xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-3 max-w-32 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
