# HageGames Style Guide

## Brand Feel

HageGames uses a dark, cinematic game-studio look: black surfaces, high contrast text, and a sharp red accent. The UI should feel premium, direct, and game-focused rather than playful pastel or corporate SaaS.

## Fonts

- Display font: `Outfit`, exposed as `--font-syne` / `font-display`.
- Body font: `DM Sans`, exposed as `--font-dm-sans` / `font-body`.
- Headings (`h1` to `h6`) automatically use the display font from `globals.css`.
- Body copy automatically uses the body font from `globals.css`.
- Avoid adding local font-family overrides unless a component has a specific brand need.

## Typography Rules

- Page hero headings: `font-extrabold`, tight leading, large responsive sizes.
- Section headings: use `SectionHeading` when possible.
- Card headings: use `font-bold` or `font-extrabold`; avoid `font-black` unless it is a hero-level moment.
- Body copy: use `text-muted`, `leading-relaxed`, and normal weight for readability.
- Buttons: use the shared `Button` component. Use uppercase only for CTA-style labels.
- Letter spacing should stay close to existing patterns: `tracking-tight` for headings, `tracking-wide` for buttons, and wider tracking only for small uppercase labels.

## Colors

Use the CSS tokens in `src/app/globals.css`.

- Background: `bg-background` / `#050505`
- Default text: `text-foreground` / `#f0f0f0`
- Muted text: `text-muted` / `#7a7a7a`
- Cards and panels: `bg-surface` or `bg-surface-elevated`
- Borders: `border-border`
- Primary accent: `bg-accent`, `text-accent` / `#e63946`
- Accent hover: `bg-accent-hover` / `#ff4d5a`

Avoid introducing large white or purple sections unless the full brand direction changes.

## Layout

- Use `max-w-7xl mx-auto px-6 lg:px-8` for main content width.
- Use dark section backgrounds by default.
- Cards can use rounded corners, but keep them consistent with existing components.
- Prefer `border border-border/50` and subtle accent hover states.

## Motion

- Use `AnimatedSection` for scroll reveal.
- Use Framer Motion only where interaction or reveal benefits from animation.
- Keep motion smooth and restrained: quick fade/slide, subtle hover lift, no distracting loops outside hero/details.

## Assets

- Use `next/image` for real images.
- Remote image domains must be registered in `next.config.ts`.
- Placeholder images should eventually be replaced with real HageGames assets.
