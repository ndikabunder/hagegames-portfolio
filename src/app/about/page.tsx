import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Gamepad2,
  Handshake,
  Heart,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { games, stats } from "@/data/games";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about HageGames, our studio culture, game portfolio, and production values.",
};

const studioSnapshots = [
  {
    title: "Production room",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Design review",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Developer desks",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
];

const values = [
  {
    title: "Kindness",
    body: "We make better games when people feel safe to speak clearly, disagree well, and improve together.",
    icon: <Heart size={24} />,
  },
  {
    title: "Craft",
    body: "Every system, frame, and player-facing detail should earn its place in the final experience.",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Partnership",
    body: "We respect developers, publishers, players, and the long road between a pitch and a shipped game.",
    icon: <Handshake size={24} />,
  },
];

const awards = [
  "6 studio awards and nominations",
  "12+ shipped game projects",
  "Multi-platform release experience",
  "Live support for growing communities",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(230,57,70,0.18),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-5xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                About HageGames
              </p>
              <h1 className="mt-6 text-4xl font-extrabold uppercase leading-[0.92] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
                A passionate studio built around playable worlds.
              </h1>
              <div className="mt-8 grid grid-cols-1 gap-6 text-base leading-relaxed text-muted sm:text-lg md:grid-cols-2">
                <p>
                  We are a creative game team bonded by our love for atmospheric
                  worlds, deliberate systems, and games that give players a
                  reason to stay.
                </p>
                <p>
                  From internal projects to production partnerships, we focus on
                  clear collaboration, practical craft, and momentum from first
                  prototype to launch.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-8 flex items-end justify-between gap-6">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Life at HageGames
              </h2>
              <span className="hidden text-sm font-bold uppercase tracking-[0.18em] text-accent sm:inline">
                Studio snapshots
              </span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {studioSnapshots.map((snapshot, index) => (
              <AnimatedSection
                key={snapshot.title}
                delay={index * 0.04}
              >
                <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-border/70 bg-surface">
                  <Image
                    src={snapshot.image}
                    alt={`${snapshot.title} at HageGames`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                      Snapshot 0{index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold tracking-tight">
                      {snapshot.title}
                    </h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <AnimatedSection className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                Our games
              </span>
              <h2 className="mt-5 text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance sm:text-5xl">
                Genre-flexible, systems-first, player-focused.
              </h2>
              <p className="mt-6 text-muted leading-relaxed">
                Our portfolio moves through action RPGs, medieval strategy,
                cozy simulation, and management games. The common thread is a
                strong world identity and mechanics players can learn, test,
                and master.
              </p>
              <Link
                href="/games"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-background transition-colors hover:bg-accent-hover"
              >
                Check out our games <ArrowUpRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {games.slice(0, 4).map((game) => (
                  <Link
                    key={game.slug}
                    href={`/games/${game.slug}`}
                    className="group relative min-h-52 overflow-hidden rounded-[1.5rem] border border-border/70 bg-surface"
                  >
                    <Image
                      src={game.thumbnail}
                      alt={game.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 text-lg font-extrabold tracking-tight">
                      {game.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.08}>
                <article className="rounded-[1.5rem] border border-border/70 bg-background p-6 sm:min-h-72 sm:p-8">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-background">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {value.body}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <AnimatedSection className="lg:col-span-6">
              <article className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface p-6 sm:min-h-[420px] md:p-10">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
                <Users className="relative mb-8 text-accent" size={38} />
                <h2 className="relative text-3xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-4xl">
                  Why work with us?
                </h2>
                <p className="relative mt-6 text-muted leading-relaxed">
                  Joining HageGames means working alongside people who care
                  about games, respect production realities, and enjoy solving
                  hard creative problems together.
                </p>
                <Link
                  href="/contact"
                  className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-background transition-colors hover:bg-accent-hover"
                >
                  View roles <ArrowUpRight size={16} />
                </Link>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-6">
              <article className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface p-6 sm:min-h-[420px] md:p-10">
                <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
                <Gamepad2 className="relative mb-8 text-accent" size={38} />
                <h2 className="relative text-3xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-4xl">
                  A production partner
                </h2>
                <p className="relative mt-6 text-muted leading-relaxed">
                  We partner with teams who need practical game development,
                  porting, art direction, optimization, or live operations
                  support without losing the original vision.
                </p>
                <Link
                  href="/contact"
                  className="relative mt-8 inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
                >
                  Pitch your game <ArrowUpRight size={16} />
                </Link>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(230,57,70,0.18),transparent_36%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <AnimatedSection className="lg:col-span-5">
              <Trophy className="mb-8 text-accent" size={42} />
              <h2 className="text-3xl font-extrabold uppercase leading-[0.96] tracking-tight text-balance sm:text-5xl">
                Recognition, milestones, and hard-earned wins.
              </h2>
              <p className="mt-6 text-muted leading-relaxed">
                We keep score by what players remember, what partners trust us
                with, and what the team learns from every launch.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.25rem] border border-border/70 bg-surface p-6"
                  >
                    <p className="text-4xl font-extrabold text-accent">
                      {stat.value}
                      {stat.suffix}
                    </p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
                {awards.map((award) => (
                  <div
                    key={award}
                    className="rounded-[1.25rem] border border-border/70 bg-surface p-6"
                  >
                    <p className="text-sm font-bold text-foreground">{award}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
