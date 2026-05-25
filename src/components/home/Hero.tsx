"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-background pt-24 sm:pt-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 scale-[1.18]">
          <iframe
            src="https://www.youtube.com/embed/YHhwdyWkwTQ?autoplay=1&mute=1&loop=1&playlist=YHhwdyWkwTQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1"
            className="absolute left-1/2 top-1/2 h-[120vh] min-h-[120vh] w-[120vw] min-w-[120vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="HageGames background reel"
          />
        </div>
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(230,57,70,0.24),transparent_38%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background via-background/75 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl items-center px-5 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-accent sm:mb-6 sm:text-xs"
          >
            HageGames Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-extrabold uppercase leading-[0.92] tracking-tight text-white text-balance sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Crafting fun,
            <span className="block text-accent">exceptional</span>
            and bold games.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-white/78 sm:mt-7 sm:text-lg"
          >
            We build atmospheric games and production partnerships for players,
            studios, and publishers who care about craft, clarity, and momentum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact">Get Started Now</Button>
            <Button href="/games" variant="outline">
              View Our Games
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
