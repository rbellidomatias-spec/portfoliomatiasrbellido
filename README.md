# portfoliobellido

Personal portfolio — **Matías Bellido**
> *Optimizing Reality through Data & AI*

Actuario & Data Scientist. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide. Dark mode, glassmorphism, electric blue / cyan accents. Deployed on Vercel.

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS + custom glass utilities
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **Fonts:** Inter + Space Grotesk (via `next/font`)
- **Deploy:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
portfoliobellido/
├── app/
│   ├── layout.tsx       # Root layout + fonts + metadata
│   ├── page.tsx         # Home page (composes sections)
│   └── globals.css      # Tailwind + glassmorphism utilities
├── components/
│   ├── Hero.tsx
│   ├── Bio.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx     # Symbiosis AI locked card
│   ├── Gallery.tsx
│   ├── Stack.tsx
│   ├── Section.tsx      # Shared section wrapper
│   └── Footer.tsx
├── public/
│   ├── profile.jpg      # <- Add your photo here
│   └── gallery/1..6.jpg # <- Add gallery photos here
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## Assets to add

Before running, drop your images into `public/`:

- `public/profile.jpg` — hero portrait (portrait 4:5)
- `public/gallery/1.jpg` … `6.jpg` — lifestyle grid

## Deploy to Vercel

1. Push this repo to GitHub (see commands below).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset auto-detects **Next.js** — click Deploy.

No environment variables are required by default.

## Sections

1. **Hero** — portrait + "Optimizing Reality through Data & AI"
2. **Bio** — 3 pillars + manifesto
3. **Experience & Education** — LinkedIn-style dual column (Santander Open Academy)
4. **Projects** — Symbiosis AI (locked, `STATUS: Building...`) + AI Agents + Pipelines
5. **Gallery** — minimalist lifestyle grid
6. **Stack** — Python, R, SQL, Claude w/ OpenClaw, N8N & Make, Power BI, Obsidian, APIs & Webhooks

## License

© Matías Bellido. All rights reserved.
