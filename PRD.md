# PRD — HageGames Portfolio Website

## 1. Overview

Website portfolio untuk **HageGames** — sebuah game studio. Website ini menampilkan profil studio, daftar game yang dikembangkan, layanan, dan informasi kontak. Desain terinspirasi dari [agate.id](https://agate.id/) dan [armorgamesstudios.com](https://armorgamesstudios.com/).

## 2. Goals

- Menampilkan identitas dan profesionalisme HageGames sebagai game studio
- Showcase portfolio game yang telah dan sedang dikembangkan
- Menyediakan informasi kontak dan CTA untuk kolaborasi
- Performa cepat, SEO-friendly, dan responsive di semua device

## 3. Target Audience

- Publisher dan investor game
- Calon klien yang membutuhkan jasa game development
- Pemain yang ingin tahu tentang game dari HageGames
- Calon karyawan/talent

## 4. Tech Stack

| Layer | Tool |
|-------|------|
| Framework | **Next.js 14** (App Router) |
| Styling | **Tailwind CSS** |
| Animation | **Framer Motion** |
| Icons | **Lucide React** |
| Deployment | **Vercel** |
| Language | **TypeScript** |

**Alasan pemilihan:**
- Next.js → SSG/SSR hybrid, SEO optimal, image optimization built-in
- Tailwind CSS → Rapid styling, konsisten, dark theme mudah
- Framer Motion → Smooth scroll animations seperti referensi
- Vercel → Zero-config deployment untuk Next.js

## 5. Sitemap & Halaman

Menggunakan pendekatan **Hybrid** — Landing page utama yang kaya konten + sub-page untuk detail.

```
/                   → Home (landing page utama)
/games              → Daftar semua game (grid/list)
/games/[slug]       → Detail per game
/about              → Tentang studio, visi misi, tim
/contact            → Form kontak & informasi
```

## 6. Struktur Halaman

### 6.1 Home (`/`)

| Section | Deskripsi | Referensi |
|---------|-----------|-----------|
| **Hero** | Full-screen hero dengan tagline animasi (rotating text), background video/image, CTA button | agate.id |
| **Stats** | Angka pencapaian (tahun berdiri, jumlah game, total players, awards) | agate.id |
| **Featured Games** | Carousel/slider 3-5 game unggulan dengan thumbnail, judul, dan short desc | agate.id |
| **About Preview** | Singkat tentang studio + link ke /about | armorgamesstudios.com |
| **Services** | Card grid layanan (Game Development, Game Art, Porting, dll) | agate.id |
| **CTA / Contact** | Section ajakan kolaborasi + link ke /contact | armorgamesstudios.com |

### 6.2 Games (`/games`)

- Grid layout dengan card per game
- Filter berdasarkan status: Released / Coming Soon
- Setiap card: thumbnail, judul, genre, platform icons, status

### 6.3 Game Detail (`/games/[slug]`)

- Hero image/video game
- Deskripsi lengkap
- Screenshots gallery
- Platform & genre tags
- Link ke store (Steam, Play Store, dll)

### 6.4 About (`/about`)

- Studio story / sejarah
- Visi & Misi
- Core values (seperti armorgamesstudios.com)
- Team section (opsional)

### 6.5 Contact (`/contact`)

- Form kontak (nama, email, subject, message)
- Email & social media links
- Lokasi / alamat (opsional)

## 7. Design Direction

### Visual Style
- **Theme**: Dark mode utama (background gelap, teks terang)
- **Typography**: Bold, modern sans-serif (Inter / Space Grotesk)
- **Colors**: Dark base (#0a0a0a), accent color sesuai branding HageGames
- **Imagery**: High-quality game artwork sebagai visual utama

### Interactions & Animations
- Scroll-triggered fade-in/slide-up animations
- Hero text rotation animation (seperti agate.id)
- Hover effects pada game cards (scale + overlay)
- Smooth page transitions
- Parallax subtle pada hero section

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 8. Data Structure

Konten game dan studio disimpan sebagai static data (JSON/MDX) untuk kemudahan update tanpa backend.

```typescript
// types/game.ts
interface Game {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  genre: string[];
  platforms: string[];
  status: "released" | "coming_soon";
  releaseDate?: string;
  thumbnail: string;
  heroImage: string;
  screenshots: string[];
  storeLinks: {
    steam?: string;
    playStore?: string;
    appStore?: string;
    itch?: string;
  };
}
```

## 9. Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Mobile Responsive | ✅ |
| SEO | Meta tags, OG tags, sitemap.xml |
| Accessibility | WCAG 2.1 AA |
| Browser Support | Chrome, Firefox, Safari, Edge (latest 2 versions) |

## 10. Milestones

| Phase | Deliverable | Estimasi |
|-------|-------------|----------|
| 1 | Setup project + Layout + Navigation | 1 hari |
| 2 | Home page (Hero, Stats, Featured Games) | 2 hari |
| 3 | Games page + Game Detail page | 1 hari |
| 4 | About + Contact page | 1 hari |
| 5 | Animations + Polish + Responsive | 1 hari |
| 6 | SEO + Deployment | 0.5 hari |

**Total estimasi: ~6.5 hari kerja**

## 11. Konten yang Dibutuhkan dari HageGames

> ⚠️ Website hagegames.com tidak bisa diakses saat ini. Konten berikut perlu disediakan:

- [ ] Logo studio (SVG/PNG)
- [ ] Tagline / slogan studio
- [ ] Deskripsi singkat studio (about)
- [ ] Daftar game beserta: judul, deskripsi, genre, platform, status, screenshots, store links
- [ ] Angka statistik (tahun berdiri, jumlah game, total downloads/players)
- [ ] Informasi kontak (email, social media)
- [ ] Warna branding / accent color
- [ ] Asset visual (game thumbnails, hero images)

## 12. Out of Scope (v1)

- Blog / News section
- CMS / Admin panel
- Multi-language (i18n)
- User authentication
- E-commerce / in-app purchase
- Backend API

---

*Dokumen ini akan diperbarui seiring perkembangan project.*
