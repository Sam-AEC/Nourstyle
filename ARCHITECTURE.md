# NourStyle Salon - Architecture Decision Record

## Project Overview
Home-based hair salon in Amsterdam serving both women and men with a unique dual-path website experience.

## Technology Stack

### Core Framework
- **Next.js 14.2+** with App Router
- **TypeScript 5.3+** for type safety
- **React 18+** with Server Components

### Styling
- **Tailwind CSS 3.4+** for utility-first styling
- **CSS Variables** for theme management (women/men themes)
- **shadcn/ui** for accessible component primitives

### Forms & Data
- **Web3Forms** for contact form submissions (free tier: 250/month)
- **React Hook Form** for form validation
- **Zod** for schema validation

### SEO & Performance
- **Next.js Metadata API** for SEO optimization
- **next-sitemap** for automatic sitemap generation
- **Sharp** for automatic image optimization

### Deployment
- **Vercel** (free tier) - zero config, automatic HTTPS, edge optimization

## Architecture Decisions

### 1. Dual-Path Structure
```
/                    → Entry page (Women/Men choice)
/women/*             → Women's section (light theme)
/men/*               → Men's section (dark theme)
/privacy, /terms     → Shared legal pages
```

**Rationale:** Allows tailored messaging and design for each audience segment while maintaining a unified brand.

### 2. Theme System
- CSS custom properties for dual themes
- Server-side theme detection based on route
- No client-side theme switcher (reduces complexity)

### 3. Image Strategy
- Placeholder images with clear naming for easy replacement
- Next.js Image component for automatic optimization
- Images stored in `/public/images/`

### 4. Content Management
- Brand configuration centralized in `/config/brand.ts`
- Service data in `/config/services.ts`
- Easy to migrate to CMS later (Sanity/Contentful)

### 5. Contact Form Solution
**Choice: Web3Forms**
- ✅ Free tier (250 submissions/month)
- ✅ No backend required
- ✅ GDPR compliant
- ✅ Email notifications
- ✅ Spam protection built-in
- ❌ No database storage (acceptable for MVP)

Alternative considered: Formspree (100/month free) - chose Web3Forms for higher limit.

### 6. Booking Integration
**Recommendation: Fresha (embedded)**
- Free for salon owners
- EU-compliant
- SMS/Email reminders
- Easy embed or link
- Popular in Netherlands

Implementation: Link to external Fresha booking page initially. Can embed widget later.

### 7. Instagram Integration
**Choice: Manual gallery + Instagram link**
- Avoids API token maintenance complexity
- Owner updates gallery images periodically
- Direct link to Instagram profile for live feed
- Can add Juicer.io widget later if needed (free tier available)

## File Structure
```
nourstyle/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Entry page (Women/Men split)
│   ├── women/
│   │   ├── layout.tsx             # Women's section layout (light theme)
│   │   ├── page.tsx               # Women's home
│   │   ├── services/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── men/
│   │   ├── layout.tsx             # Men's section layout (dark theme)
│   │   ├── page.tsx               # Men's home
│   │   ├── services/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── ui/                        # shadcn/ui components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── forms/
│   │   └── ContactForm.tsx
│   └── shared/
│       ├── Hero.tsx
│       ├── ServiceCard.tsx
│       ├── Testimonial.tsx
│       └── CTAButton.tsx
├── config/
│   ├── brand.ts                   # Centralized brand config
│   ├── services.ts                # Service listings
│   └── site.ts                    # Site metadata
├── lib/
│   └── utils.ts
└── public/
    └── images/
        ├── women/
        └── men/
```

## Scaling Roadmap

### Phase 2: Enhanced Features (3-6 months)
- Add blog with MDX
- Implement before/after image comparison
- Add Instagram API integration
- Set up email newsletter (ConvertKit free tier)

### Phase 3: Client Portal (6-12 months)
- NextAuth for authentication
- Client dashboard
- Booking history
- Loyalty program

### Phase 4: Monetization (12+ months)
- Stripe integration for deposits
- Package/membership sales
- Gift certificate system

## Performance Targets
- Lighthouse Score: 95+ (all metrics)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Core Web Vitals: All "Good"

## SEO Strategy
- Semantic HTML
- OpenGraph & Twitter Cards
- Structured data (LocalBusiness schema)
- Sitemap.xml & robots.txt
- Fast loading times
- Mobile-first responsive design

## Security & Compliance
- GDPR-compliant forms (consent checkboxes)
- Privacy policy & terms of service
- Secure headers via Vercel
- No cookies (除了 essential analytics if added later)
- SSL/TLS via Vercel

## Maintenance Requirements
- Monthly dependency updates
- Quarterly content refresh (gallery images)
- Annual SEO review
- Estimated: 2-4 hours/month

---

**Decision Date:** 2025-12-25
**Last Updated:** 2025-12-25
**Status:** Approved ✅
