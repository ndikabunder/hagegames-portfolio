# AGENTS.md — HageGames Portfolio

## Project Overview

Website portfolio untuk **HageGames** game studio. Next.js 14 App Router, Tailwind CSS, Framer Motion, TypeScript. Dark theme, indigo accent.

## Coding Conventions

- TypeScript strict, App Router (layout.tsx, page.tsx)
- Static data in `src/data/`, no CMS
- Server Components default, `"use client"` only when needed
- Tailwind CSS only, no CSS modules
- `cn()` utility for conditional classes
- One component per file, PascalCase
- `next/image` for images, `next/link` for navigation
- Framer Motion for animations

## Agent Skills

### Issue tracker
Local markdown in `.scratch/`.

### Triage labels
Default: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix.

### Domain docs
Single-context. `CONTEXT.md` + `docs/adr/` at root if needed.
