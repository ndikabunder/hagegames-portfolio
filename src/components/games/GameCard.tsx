"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Game } from "@/types";
import { ArrowUpRight } from "lucide-react";

export function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game.slug}`} className="group block">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative rounded-2xl overflow-hidden bg-surface border border-border/50 hover:border-accent/30 transition-colors duration-500"
      >
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={game.thumbnail}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          {/* Arrow indicator */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={14} className="text-white" />
          </div>
          {/* Status badge */}
          {game.status === "coming_soon" && (
            <div className="absolute top-4 left-4">
              <span className="text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full bg-accent/90 text-white font-medium">
                Coming Soon
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            {game.genre.slice(0, 2).map((g) => (
              <span key={g} className="text-[11px] uppercase tracking-wider text-muted">{g}</span>
            ))}
          </div>
          <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300">
            {game.title}
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
            {game.shortDescription}
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            {game.platforms.map((p) => (
              <span key={p} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-background border border-border/50 text-muted">
                {p}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
