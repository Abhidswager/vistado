# Vistado — Abhishek Sharma Portfolio

Premium single-page portfolio for **Abhishek Sharma**, founder of **Vistado** — Creative Designer & E-commerce Website Specialist.

Production rebuild of the approved Claude Design version. Pixel-identical visuals, now a clean, deployable codebase.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** (brand tokens) + ported design CSS
- **Framer Motion** (scroll reveals, mobile menu, micro-interactions)
- **next/image** optimized images
- SEO: metadata, Open Graph, Twitter cards, JSON-LD, `robots.txt`, `sitemap.xml`, web manifest
- **Vercel-ready**

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Build & run production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx         # SEO metadata, fonts, JSON-LD structured data
  page.tsx           # composes every section in order
  globals.css        # resets, keyframes, responsive breakpoints
components/           # one file per section + reusable Reveal / SectionLabel / Marquee / WhatsAppButton
content/             # ← EDIT YOUR CONTENT HERE (no code needed)
  profile.json       # name, bio, stats, tools, education, experience, contact, social, SEO
  services.json
  projects.json
  testimonials.json
  faq.json
lib/
  content.ts         # typed content loaders
  types.ts
public/
  images/            # ← REPLACE IMAGES HERE (keep the same filename)
  robots.txt  sitemap.xml  site.webmanifest  favicon.svg
```

## ✏️ Editing content

All copy lives in `content/*.json`. Change text, stats, services, projects, reviews or FAQ there — **no component edits required**.

## 🖼 Replacing images

Every image is a plain file in `public/images/`. To swap one, upload a new file with the **same filename** — no code changes needed.

| What | Path |
|---|---|
| Hero portrait | `public/images/profile.jpg` |
| About photo | `public/images/about.jpg` |
| Service images | `public/images/services/0X-*.webp` |
| Portfolio projects | `public/images/projects/project-01..12.webp` |
| Testimonial avatars | `public/images/testimonials/testimonial-01..06.jpg` |
| Social share image | `public/images/og-image.jpg` |

The included files are lightweight branded placeholders — replace them with real work. Paths are defined in the matching `content/*.json` if you ever want to rename them.

## 📨 Contact form (Formspree)

The form posts to **Formspree**. Set your endpoint in one of two places:

1. **Recommended** — copy `.env.example` to `.env.local` and set:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_id
   ```
2. Or edit the clearly-marked `FORMSPREE_ENDPOINT` constant at the top of
   `components/Contact.tsx`.

Until an endpoint is set, the form shows the success state without making a network call, so the UI always behaves. Fields submitted: `name`, `email`, `phone`, `service`, `budget`, `location`, `message`.

## 💬 WhatsApp

Floating glass button (bottom-right) deep-links to `https://wa.me/918271989643` with a pre-filled message. Edit the number/message in `content/profile.json → contact`.

## 🔍 SEO

- Per-page metadata + Open Graph + Twitter cards (`app/layout.tsx`)
- JSON-LD structured data (`Person` + `ProfessionalService`)
- `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`, `favicon.svg`
- Update the production domain in `app/layout.tsx`, `sitemap.xml`, `robots.txt` and `NEXT_PUBLIC_SITE_URL`.

## ▲ Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the env vars from `.env.example` (optional).
4. Deploy.

---

© Vistado · Abhishek Sharma
