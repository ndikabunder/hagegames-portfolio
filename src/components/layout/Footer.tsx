import Link from "next/link";
import Image from "next/image";
import {
  AtSign,
  Camera,
  Mail,
  MessageCircle,
  SquarePlay,
  X,
} from "lucide-react";

const socialLinks = [
  { label: "Twitter", href: "https://x.com/hagegames", icon: <X size={24} /> },
  { label: "Instagram", href: "https://instagram.com/hagegames", icon: <Camera size={24} /> },
  { label: "Discord", href: "#", icon: <MessageCircle size={24} /> },
  { label: "YouTube", href: "https://youtube.com/@hagegames", icon: <SquarePlay size={25} /> },
  { label: "Threads", href: "https://threads.net/@hagegames", icon: <AtSign size={24} /> },
  { label: "Email", href: "mailto:hello@hagegames.com", icon: <Mail size={24} /> },
];

const footerLinks = [
  { label: "Contact us", href: "/contact" },
  { label: "Support", href: "/contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Legal", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface">
      <section className="relative overflow-hidden border-y border-border/70 bg-surface px-5 py-16 text-center sm:px-6 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(230,57,70,0.22),transparent_36%),radial-gradient(circle_at_12%_32%,rgba(230,57,70,0.1),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent" />

        <div className="relative mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
            Join our community
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Stay in the loop
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Be the first to know when we announce new games, updates, and behind-the-scenes content.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-background transition-colors hover:bg-accent-hover"
          >
            <MessageCircle size={18} />
            Join our Discord
          </a>
        </div>
      </section>

      <section className="bg-surface px-5 py-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <Link href="/" className="inline-block">
                <Image src="https://hagegames.com/logo.png" alt="HageGames" width={140} height={40} className="h-7 w-auto" />
              </Link>
              <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-foreground">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-border/50 pt-6 flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© HageGames 2026</p>
            <p>
              Website by{" "}
              <a href="#" className="text-foreground underline decoration-accent underline-offset-4 hover:text-accent">
                HageGames Studio
              </a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
