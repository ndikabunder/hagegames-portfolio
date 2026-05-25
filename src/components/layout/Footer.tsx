import Link from "next/link";
import Image from "next/image";
import {
  AtSign,
  Camera,
  Gamepad2,
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

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent shadow-[0_18px_45px_-28px_var(--accent)]">
            <Gamepad2 size={28} />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Follow us on socials
          </h2>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-11 sm:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/40 text-foreground transition-[background-color,border-color,color,transform] duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-accent hover:text-background sm:h-16 sm:w-16"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl text-center">
          <Link href="/" className="inline-block">
            <Image src="https://hagegames.com/logo.png" alt="HageGames" width={140} height={40} className="mx-auto h-8 w-auto" />
          </Link>

          <nav className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-bold text-foreground">
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

          <div className="mt-8 border-t border-border pt-8 flex flex-col gap-4 text-sm font-bold text-foreground sm:flex-row sm:items-center sm:justify-center sm:gap-8">
            <p>
              Website by{" "}
              <a href="#" className="underline decoration-accent underline-offset-4 hover:text-accent">
                HageGames Studio
              </a>
            </p>
            <p>© HageGames 2026</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
