import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { games } from "@/data/games";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  if (!game) return {};
  return { title: game.title, description: game.shortDescription };
}

export default async function GameDetailPage({ params }: Props) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  if (!game) notFound();

  return (
    <article className="pt-20">
      {/* Hero */}
      <div className="relative h-[62svh] min-h-[440px] overflow-hidden sm:h-[55vh]">
        <Image
          src={game.heroImage}
          alt={game.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-5 sm:px-6">
          <div>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {game.genre.map((g) => (
                <span key={g} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs uppercase tracking-wider text-white/80">{g}</span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-balance">{game.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <AnimatedSection>
          <Button href="/games" variant="outline" className="mb-10">
            <ArrowLeft size={14} className="mr-2" /> Back to Games
          </Button>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-5">About the Game</h2>
              <p className="text-muted leading-[1.8]">{game.description}</p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-3">Platforms</h3>
                <div className="flex gap-2 flex-wrap">
                  {game.platforms.map((p) => (
                    <span key={p} className="px-3 py-1.5 rounded-lg bg-surface border border-border/50 text-sm">{p}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-3">Status</h3>
                <span className={`inline-block px-3 py-1.5 rounded-lg text-sm font-medium ${game.status === "released" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-accent/10 text-accent border border-accent/20"}`}>
                  {game.status === "released" ? "Released" : "Coming Soon"}
                </span>
              </div>

              {game.releaseDate && (
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-3">Release Date</h3>
                  <p className="text-sm">{new Date(game.releaseDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                </div>
              )}

              {Object.entries(game.storeLinks).some(([, v]) => v) && (
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-3">Store Links</h3>
                  <div className="flex flex-col gap-2">
                    {Object.entries(game.storeLinks).map(([store, url]) =>
                      url ? (
                        <a key={store} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors">
                          <ExternalLink size={12} /> {store.charAt(0).toUpperCase() + store.slice(1).replace(/([A-Z])/g, " $1")}
                        </a>
                      ) : null
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Screenshots */}
        <AnimatedSection className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {game.screenshots.map((ss, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-border/30">
                <Image src={ss} alt={`${game.title} screenshot ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </article>
  );
}
