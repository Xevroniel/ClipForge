# ClipForge Landing Pack v4 (Next.js + TypeScript, Final)

This is the **final, launch-ready** ClipForge marketing site for Vercel.

## Key Optimizations
- Next.js 14 App Router, TypeScript strict mode
- Integrated **official logo** (see `/public/logo-512.png`)
- SEO: Metadata API, Open Graph/Twitter, `app/sitemap.ts`, `app/robots.ts`
- Accessibility: semantic landmarks, skip link, high-contrast theme
- Performance: no blocking fonts (Inter via `next/font`), minimal JS, optimized images
- Security: CSP + security headers in `next.config.mjs`
- Analytics: ready for `@vercel/analytics` (enabled in `layout.tsx`)
- Waitlist forms via env variables (`NEXT_PUBLIC_FORM_EMBED_*`)

## Files
- `app/` — routes
- `lib/rolePacks.ts` — single source of copy per role
- `components/WaitlistEmbed.tsx` — drop-in env-driven form
- `public/` — **logo & icons**, `og-image.png`, favicons
- `brand-assets/` — same assets for design hand-offs

## Environment Variables (Vercel → Project → Settings → Environment Variables)
- `NEXT_PUBLIC_FORM_EMBED_COACHES`
- `NEXT_PUBLIC_FORM_EMBED_CONSULTANTS`
- `NEXT_PUBLIC_FORM_EMBED_PODCASTERS`
- `NEXT_PUBLIC_FORM_EMBED_YOUTUBE`
- `NEXT_PUBLIC_FORM_EMBED_COURSE_CREATORS`

Paste the raw HTML embed from Beehiiv/ConvertKit/Tally.

## Local dev
```bash
npm i
npm run dev
# http://localhost:3000
```

## Deploy (Vercel)
1) Push this repo to GitHub.
2) Vercel → New Project → Import.
3) Framework auto-detect: **Next.js**. Build: `next build`.
4) Add your domain (e.g., clipforge.app). Done.

## Icon & OG Assets
- Logo: `/public/logo-512.png` (source: `/public/logo.png`)
- Favicon: `/public/favicon.ico` (multi-size)
- PWA: `/public/icon-192.png`, `/public/icon-512.png`, `/public/apple-touch-icon.png`
- Social: `/public/og-image.png`

All assets are also duplicated in `/brand-assets` for easy sharing.

© 2025 ClipForge. All rights reserved.
