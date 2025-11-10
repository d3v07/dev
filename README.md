## Dev Trivedi — Full‑Stack Developer Portfolio

Building the home of my work on the web. This repo will host the source for my personal site at `devtrivedi.com`.

- **Domain**: `devtrivedi.com` (purchased)
- **Role/Positioning**: Full‑Stack Developer
- **Status**: Planning the initial MVP and scaffolding

### Goals
- **Showcase projects** with clear problem/solution, stack, and impact
- **Demonstrate full‑stack breadth** (frontend, backend, infra, CI/CD)
- **Provide clear contact paths** (email, social, calendar)
- **Perform well** on Core Web Vitals and SEO

### Proposed Stack (pragmatic, fast to ship)
- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling/UI**: Tailwind CSS + shadcn/ui
- **Content**: MDX (via Contentlayer) for projects/blog/case studies
- **Forms/Email**: Resend (or Formspree for zero‑backend MVP)
- **Analytics**: Vercel Analytics and/or Plausible
- **Deployment**: Vercel (preview URLs, easy DNS setup)
- Optional (later): PostgreSQL + Prisma for dynamic content, PostHog for product analytics

### MVP Features
- [ ] Home with strong value proposition and CTA
- [ ] Projects page (filterable) + individual case study pages (MDX)
- [ ] About page (bio, skills, experience timeline, logos)
- [ ] Contact page with working form + email delivery
- [ ] Basic blog (optional in MVP; start with 1–2 posts)
- [ ] SEO essentials (meta, Open Graph, JSON‑LD, sitemap, robots)
- [ ] Dark mode and responsive layout

### Roadmap
#### v0.1 — Foundation
- [ ] Initialize Next.js + TypeScript
- [ ] Tailwind + shadcn/ui setup
- [ ] Base layout, navigation, footer, theme
- [ ] Contentlayer/MDX pipeline
- [ ] Project content schema and sample entries

#### v0.2 — MVP Ready
- [ ] Home, Projects, Project Detail, About, Contact pages
- [ ] Form wiring (Resend/Formspree) + success/failure states
- [ ] SEO: metadata, sitemap, robots, canonical URLs, OG images
- [ ] Deploy to Vercel + connect `devtrivedi.com`

#### v0.3 — Polish
- [ ] Performance pass (Lighthouse > 95)
- [ ] Analytics dashboards
- [ ] Add 1–2 blog posts or case studies
- [ ] Minor animations and micro‑interactions

### Content Plan (initial placeholders)
- **Hero statement**: “Full‑Stack Developer helping teams ship reliable, user‑centric products.”
- **Skills snapshot**: TypeScript, React/Next.js, Node.js, PostgreSQL, Prisma, Docker, CI/CD, Cloud (Vercel/AWS), Testing (Vitest/Jest/Playwright)
- **Projects (draft list)**:
  - Project A — brief value/impact line
  - Project B — brief value/impact line
  - Project C — brief value/impact line
- **Case studies structure**:
  - Context → Problem → Approach → Architecture → Results → What I’d do differently

### SEO & Social
- Add `site.json`/metadata with title, description, and social handles
- Open Graph image generation (Next.js OG/Image)
- JSON‑LD for Person, WebSite, and Article (blog posts)
- Clean, readable URLs; canonical tags

### Deployment
- Host on Vercel; connect `devtrivedi.com` DNS
- Production branch: `main`; deploy previews on PRs

### Local Development (will be updated after scaffolding)
```bash
# prerequisites
node --version   # >= 18
pnpm --version   # or yarn/npm

# after scaffolding is added
pnpm install
pnpm dev
```

### Conventions
- TypeScript everywhere; strict mode
- Accessible components (focus states, landmarks, color contrast)
- Descriptive commit messages; conventional commits preferred

### License
Copyright © Dev Trivedi. All rights reserved.

### Contact
- Email: [add your email]
- LinkedIn: [add link]
- GitHub: [add link]
- Calendly: [optional]

---

If you’re reading this early, you’re catching the build in public. Feedback is welcome.



