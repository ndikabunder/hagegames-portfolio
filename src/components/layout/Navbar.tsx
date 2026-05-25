"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const mainLinks = [
  { href: "/games", label: "Games" },
  { href: "/about", label: "Explore" },
  { href: "/contact", label: "Developer" },
];

const utilityLinks = [
  { href: "/contact", label: "Join us" },
  { href: "/contact", label: "Press" },
  { href: "/contact", label: "Support" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      {!scrolled && (
        <div className="hidden border-b border-white/10 bg-background/80 backdrop-blur-xl md:block">
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-end gap-7 px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-muted lg:px-8">
            {utilityLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-accent">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <nav
        className={cn(
          "transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300",
          scrolled
            ? "border-b border-border/80 bg-background shadow-[0_18px_40px_-30px_rgba(0,0,0,0.9)] backdrop-blur-none"
            : "border-b border-white/10 bg-background/72 backdrop-blur-md"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-6 transition-[height] duration-300 lg:px-8",
            scrolled ? "h-24" : "h-20"
          )}
        >
          <Link href="/" className="group flex items-center">
            <Image src="https://hagegames.com/logo.png" alt="HageGames" width={140} height={40} className="h-8 w-auto" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {mainLinks.map((link) => {
              const active =
                link.href === "/games"
                  ? pathname.startsWith("/games")
                  : pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-extrabold uppercase tracking-[0.18em] transition-colors duration-300",
                    active
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/games"
              aria-label="Search games"
              className="ml-5 flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Search size={18} />
            </Link>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-b border-border bg-background px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {[{ href: "/", label: "Home" }, ...mainLinks, ...utilityLinks].map(
                (link) => (
                  <Link
                    key={`${link.label}-${link.href}`}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl border border-border px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
