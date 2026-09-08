# ELAH Website

Production-ready marketing website for ELAH, a reasoning-level security platform for agentic AI.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel deployment

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Newsletter (hero form)

The hero email field POSTs to the **founder dashboard** API. It does not store addresses on this site.

| App | Port | Command |
|-----|------|---------|
| This webpage | **3000** | `npm run dev` in `ELAH-Webpage` |
| Founder dashboard | **3001** | `npm run dev` in `elah-analytics-dashboard` |

Copy `.env.example` to `.env.local` if you need a non-default URL:

```
NEXT_PUBLIC_NEWSLETTER_SUBSCRIBE_URL=http://localhost:3001/api/newsletter/subscribe
```

Consent checkbox is required. Without it, the form does not subscribe anyone.

### Request a demo

Primary CTAs go to **`/demo`**, not a mailto. That matches the usual early-stage B2B SaaS pattern: a short form (name, work email, company, optional role and agenda), then a confirmation and founder follow-up to book 30 minutes.

The form POSTs to the founder dashboard `POST /api/demo/request`. Requests appear under **Demo requests** in the founder admin.

Copy `.env.example` to `.env.local` if you need non-default URLs:

```
NEXT_PUBLIC_NEWSLETTER_SUBSCRIBE_URL=http://localhost:3001/api/newsletter/subscribe
NEXT_PUBLIC_DEMO_REQUEST_URL=http://localhost:3001/api/demo/request
```

## Build for Production

```bash
npm run build
```

The static site will be generated in the `out` directory, ready for Vercel deployment.

## Deploy to Vercel

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx         # Main single page
│   ├── demo/page.tsx    # Request a demo form
│   └── globals.css      # Global styles with custom utilities
├── components/
│   ├── Navigation.tsx  # Fixed navigation header with logo
│   ├── Logo.tsx         # ELAH logo component (stylized E)
│   ├── Hero.tsx         # Hero section
│   ├── HeroNewsletterForm.tsx  # Opt-in email + consent → founder API
│   ├── DemoRequestForm.tsx     # /demo lead form → founder API
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── Industries.tsx
│   ├── Comparison.tsx
│   ├── PromptInjection.tsx
│   ├── DataMoat.tsx
│   ├── Heritage.tsx
│   └── CTA.tsx
└── package.json
```

## Design Features

- **Brand Colors**: Electric blue (#00A8FF) accents matching the ELAH logo
- **Logo Integration**: Stylized "E" logo with dark gray "LAH" text
- **Video Embed**: Google Drive video embedded in Hero section
- **Enhanced Visuals**: 
  - Gradient borders and backgrounds
  - Card-based layouts with hover effects
  - Section dividers with subtle gradients
  - Smooth animations and transitions
- **Navigation**: Fixed header with smooth scroll navigation
- **Dark mode default**: Near-black backgrounds (#0a0a0a), off-white text
- **Enterprise-grade**: Calm, precise tone with professional aesthetics
- **Fully responsive**: Mobile-first design with breakpoints
- **Accessibility**: Semantic HTML, proper ARIA labels, high contrast
- **SEO-optimized**: Comprehensive metadata in layout.tsx
- **Mostly static**: newsletter opt-in and demo requests POST to the founder dashboard (`localhost:3001` locally)

