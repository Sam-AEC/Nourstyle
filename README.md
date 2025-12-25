# NourStyle Salon - Home Salon Website

A modern, production-ready Next.js website for a home-based hair salon in Amsterdam with a unique dual-path design (Women's & Men's sections).

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

## 🌟 Features

### Core Features
- ✅ **Dual-Path Design** - Separate women's and men's sections with tailored content and themes
- ✅ **Mobile-First Responsive** - Optimized for all devices
- ✅ **SEO Optimized** - Meta tags, OpenGraph, structured data, and sitemap
- ✅ **Contact Forms** - Working contact forms with Web3Forms (free tier)
- ✅ **Booking Integration** - Ready for Fresha/Booksy integration
- ✅ **Modern UI** - Clean, professional design with shadcn/ui components
- ✅ **Zero Cost Hosting** - Deploys to Vercel free tier

### Technical Features
- **Next.js 14 App Router** - Server components, optimized performance
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling with custom theme system
- **Centralized Configuration** - Easy brand/content updates via config files
- **Accessibility** - WCAG AA compliant, semantic HTML
- **GDPR Compliant** - Privacy policy, terms, and data protection

## 📁 Project Structure

```
nourstyle/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Entry page (Women/Men split)
│   ├── globals.css              # Global styles & themes
│   ├── women/                   # Women's section
│   │   ├── layout.tsx           # Light theme layout
│   │   ├── page.tsx             # Women's home
│   │   ├── services/page.tsx    # Services & pricing
│   │   ├── gallery/page.tsx     # Photo gallery
│   │   ├── about/page.tsx       # About & FAQ
│   │   └── contact/page.tsx     # Contact form
│   ├── men/                     # Men's section
│   │   ├── layout.tsx           # Dark theme layout
│   │   ├── page.tsx             # Men's home
│   │   ├── services/page.tsx    # Services & pricing
│   │   ├── gallery/page.tsx     # Photo gallery
│   │   ├── about/page.tsx       # About & FAQ
│   │   └── contact/page.tsx     # Contact form
│   ├── privacy/page.tsx         # Privacy policy
│   └── terms/page.tsx           # Terms of service
├── components/
│   ├── layout/                  # Header, Footer
│   ├── shared/                  # Reusable components
│   └── forms/                   # Contact form
├── config/
│   ├── brand.ts                 # 🎨 Brand config (EDIT THIS!)
│   ├── services.ts              # Services & pricing
│   └── site.ts                  # Site metadata & SEO
├── lib/
│   └── utils.ts                 # Utility functions
└── public/
    └── images/                  # Image assets
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## ⚙️ Configuration

### 1. Brand Configuration (`config/brand.ts`)

**This is the most important file!** Edit this file to customize your salon's information:

```typescript
export const brand = {
  name: "NourStyle",              // Your salon name
  contact: {
    phone: "+31 6 1234 5678",     // Your phone number
    email: "hello@nourstyle.nl",   // Your email
    address: {
      street: "Example Street 123",
      city: "Amsterdam",
      // ... update all address fields
    },
  },
  social: {
    instagram: "https://instagram.com/yoursalon",
    facebook: "https://facebook.com/yoursalon",
  },
  // ... see file for all options
};
```

### 2. Services & Pricing (`config/services.ts`)

Edit services, descriptions, and prices:

```typescript
export const womenServices: Service[] = [
  {
    id: "women-cut-style",
    name: "Women's Cut & Style",
    description: "...",
    duration: "60 min",
    price: "€50",
    category: "Cuts & Styling",
    popular: true,  // Mark as popular service
  },
  // Add/edit/remove services
];
```

### 3. Environment Variables (`.env`)

```bash
# Required for contact forms
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here

# Your site URL (for SEO)
SITE_URL=https://yourdomain.com

# Booking system URL
NEXT_PUBLIC_BOOKING_URL=https://fresha.com/your-salon
```

## 📝 Setting Up Contact Forms

This site uses **Web3Forms** (free tier: 250 submissions/month).

### Step 1: Get Web3Forms Access Key

1. Go to [web3forms.com](https://web3forms.com)
2. Sign up for free
3. Create a new form
4. Copy your Access Key

### Step 2: Add to Environment

```bash
# In .env file
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=abc123-your-key-here
```

### Step 3: Test

1. Run `npm run dev`
2. Go to `/women/contact` or `/men/contact`
3. Submit a test form
4. Check your email for the submission

**Alternative Contact Form Options:**
- **Formspree** (100/month free) - Similar setup
- **Next.js API Route** - Requires email service (SendGrid, etc.)

## 🖼️ Adding Images

### Required Images

Place these images in `/public/images/`:

```
public/images/
├── women-hero.jpg              # Women's section hero (1920x1080)
├── men-hero.jpg                # Men's section hero (1920x1080)
├── stylist-portrait.jpg        # Your photo (800x800)
├── og-image.jpg                # Social media preview (1200x630)
└── gallery/
    ├── women-1.jpg             # Gallery images (min 800x800)
    ├── women-2.jpg
    ├── men-1.jpg
    └── men-2.jpg
```

### Image Optimization

Next.js automatically optimizes images. Just use:
- JPG format for photos
- PNG for logos/graphics
- Max 2MB per image
- Minimum 1200px wide for hero images

### Placeholder Images

Until you have real photos, use free stock images from:
- [Unsplash](https://unsplash.com) - search "haircut", "salon"
- [Pexels](https://pexels.com) - similar search
- [Pixabay](https://pixabay.com) - free stock photos

## 🎨 Customizing Themes

The site has two themes defined in `tailwind.config.ts`:

**Women's Theme (Light):**
- Background: White (#FFFFFF)
- Primary: Turquoise (#008080)
- Secondary: Coral (#FFBBB1)

**Men's Theme (Dark):**
- Background: Dark (#111111)
- Primary: Teal (#009B8E)
- Text: Light gray (#EEEEEE)

To change colors, edit `tailwind.config.ts`:

```typescript
colors: {
  women: {
    primary: '#008080',  // Change this
    // ...
  },
}
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin claude/build-mvp-website-YZKYQ
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Deploy"

3. **Add Environment Variables:**
   - In Vercel dashboard → Settings → Environment Variables
   - Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - Add `NEXT_PUBLIC_BOOKING_URL`
   - Redeploy

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables
vercel env add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
# Enter your key when prompted

# Deploy to production
vercel --prod
```

### Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test contact forms on both women/men sections
- [ ] Check mobile responsiveness
- [ ] Verify booking links work
- [ ] Test all navigation links
- [ ] Check SEO meta tags (view page source)
- [ ] Add custom domain in Vercel settings

## 📱 Adding a Booking System

### Recommended: Fresha (Free for salons)

1. Create account at [fresha.com](https://fresha.com)
2. Set up your services and availability
3. Get your booking URL
4. Add to `.env`:
   ```bash
   NEXT_PUBLIC_BOOKING_URL=https://fresha.com/your-salon-link
   ```

### Alternative: Booksy

Similar process at [booksy.com](https://booksy.com) - popular in Europe.

## 🔍 SEO Setup

### Update Metadata

Edit `config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Salon Name",
  description: "Your description",
  url: "https://yourdomain.com",
  // ...
};
```

### Google Business Profile

1. Claim your business at [google.com/business](https://google.com/business)
2. Ensure NAP (Name, Address, Phone) matches exactly
3. Add photos, hours, services
4. Link to your website

## 🎯 Future Enhancements Roadmap

### Phase 2 (3-6 months)
- [ ] Add blog with MDX
- [ ] Instagram API integration (auto-update gallery)
- [ ] Email newsletter signup
- [ ] Before/after image comparisons

### Phase 3 (6-12 months)
- [ ] Client portal with NextAuth
- [ ] Booking history dashboard
- [ ] Loyalty program

### Phase 4 (12+ months)
- [ ] Stripe integration for deposits
- [ ] Gift certificates
- [ ] Package/membership sales
- [ ] CMS integration (Sanity/Contentful)

## 🛠️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Lint code
npm run lint
```

## 🐛 Troubleshooting

### Build Errors

**"Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Contact Form Not Working

1. Check `.env` file has correct Web3Forms key
2. Verify key in Web3Forms dashboard is active
3. Check browser console for errors

### Images Not Loading

1. Verify images are in `/public/images/`
2. Check file names match exactly (case-sensitive)
3. Ensure images are JPG/PNG format

## 📄 License

MIT License - feel free to use this project for your salon!

---

**Need help?** Open an issue or contact the developer.

**Ready to launch?** Follow the deployment guide above and go live! 🚀
