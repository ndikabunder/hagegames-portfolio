import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Mail, Newspaper, Send } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Developer",
  description:
    "Contact HageGames for game publishing, press inquiries, support, and business questions.",
};

const contactRoutes = [
  {
    title: "Game Publishing",
    body: "Are you a developer looking for a production or publishing partner? Tell us about the game, the team, and where you are in development.",
    href: "mailto:pitch@hagegames.com",
    label: "Pitch your game",
    icon: <Send size={30} />,
  },
  {
    title: "Press Inquiries",
    body: "Need assets, comments, screenshots, or review materials? Reach out and we will point you to the right press contact.",
    href: "mailto:press@hagegames.com",
    label: "Press info",
    icon: <Newspaper size={30} />,
  },
  {
    title: "General",
    body: "For business questions, partnerships, career conversations, and anything else that does not fit neatly into a category.",
    href: "mailto:hello@hagegames.com",
    label: "Business",
    icon: <BriefcaseBusiness size={30} />,
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(230,57,70,0.18),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-5xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                Developer / Contact
              </p>
              <h1 className="mt-6 text-4xl font-extrabold uppercase leading-[0.92] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
                We want to hear from you.
              </h1>
              <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                Whether you are with the press, need help with a game, want to
                pitch a project, or have a business question, choose the route
                below and we will get you to the right person.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="mb-10 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Contact us
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactRoutes.map((route, index) => (
              <AnimatedSection key={route.title} delay={index * 0.08}>
                <a
                  href={route.href}
                  className="group relative block overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface p-6 transition-[background-color,border-color] duration-300 hover:border-accent/45 hover:bg-surface-elevated sm:min-h-[330px] sm:p-8"
                >
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                  <div className="relative">
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-background">
                      {route.icon}
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                      {route.title}
                    </h3>
                    <p className="mt-5 text-sm leading-relaxed text-muted">
                      {route.body}
                    </p>
                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-accent">
                      {route.label}
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-surface/40 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:px-8">
          <AnimatedSection className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              General form
            </span>
            <h2 className="mt-5 text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance sm:text-5xl">
              Not sure where your message belongs?
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              Send us the details here. For game support, include the game name,
              platform, and a short description of the issue. For pitch
              conversations, include a playable link if you have one.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:hello@hagegames.com"
                className="flex items-center gap-4 text-sm text-foreground hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail size={18} />
                </span>
                hello@hagegames.com
              </a>
              <p className="text-sm text-muted">Jakarta, Indonesia</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="lg:col-span-7">
            <div className="rounded-[1.75rem] border border-border/70 bg-surface p-6 md:p-8">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-[1.5rem] border border-border/70 bg-surface p-6 md:flex md:items-center md:justify-between md:p-8">
              <p className="text-sm text-muted">
                Need support for a particular game? Include the game title and
                platform so we can route your message faster.
              </p>
              <Link
                href="/games"
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-accent/60 hover:text-accent md:mt-0"
              >
                Browse games <ArrowUpRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
