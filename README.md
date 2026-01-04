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
│   └── globals.css      # Global styles with custom utilities
├── components/
│   ├── Navigation.tsx  # Fixed navigation header with logo
│   ├── Logo.tsx         # ELAH logo component (stylized E)
│   ├── Hero.tsx         # Hero section with video embed
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
- **Fully static**: No backend, no auth, ready for Vercel deployment

