/**
 * Site Configuration
 *
 * SEO metadata, OpenGraph settings, and site-wide constants.
 */

import { brand } from "./brand";

export const siteConfig = {
  name: brand.name,
  description: brand.description,
  url: process.env.SITE_URL || "https://nourstyle.nl",

  // OpenGraph & Social
  ogImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&fit=crop&q=80",
  twitterHandle: "@nourstyle",

  // Contact
  email: brand.contact.email,
  phone: brand.contact.phone,

  // Navigation Links (Women's Section)
  womenNav: [
    { href: "/women", label: "Home" },
    { href: "/women/services", label: "Services" },
    { href: "/women/gallery", label: "Gallery" },
    { href: "/women/about", label: "About" },
    { href: "/women/contact", label: "Contact" },
  ],

  // Navigation Links (Men's Section)
  menNav: [
    { href: "/men", label: "Home" },
    { href: "/men/services", label: "Services" },
    { href: "/men/gallery", label: "Gallery" },
    { href: "/men/about", label: "About" },
    { href: "/men/contact", label: "Contact" },
  ],

  // Footer Links (Shared)
  footerLinks: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],

  // FAQ Data
  faq: {
    women: [
      {
        question: "What hair services do you specialize in?",
        answer: "I specialize in all aspects of women's hair care - precision cuts, creative coloring (balayage, highlights, full color), and special occasion styling. Since 2022, I've been dedicated to perfecting my craft and have worked with all hair types and textures.",
      },
      {
        question: "Is a home salon as professional as a traditional salon?",
        answer: "Absolutely! My home studio is a dedicated, professional space with salon-grade equipment and products. The advantage is you get one-on-one attention in a private, relaxed environment without the hustle of a busy salon.",
      },
      {
        question: "How long does a color appointment take?",
        answer: "It depends on the service. Simple root touch-ups take about 90 minutes, while full highlights or balayage can take 2.5-3 hours. I always prioritize quality over speed, and I'll give you an accurate time estimate during your consultation.",
      },
      {
        question: "What brands do you use?",
        answer: "I use professional-grade products from trusted brands like L'Oréal Professional, Schwarzkopf, and Redken. All color products are ammonia-free options available for sensitive scalps.",
      },
      {
        question: "Can I bring inspiration photos?",
        answer: "Please do! Photos are incredibly helpful for understanding your vision. I'll let you know if the look is achievable for your hair type and discuss the best approach.",
      },
    ],
    men: [
      {
        question: "Do you do modern fades and trendy men's styles?",
        answer: "Yes! I'm experienced in all current men's styles - skin fades, tapers, textured crops, and classic cuts. I stay updated on trends and techniques through regular training.",
      },
      {
        question: "How often should I get a haircut?",
        answer: "For fades and short styles, every 2-3 weeks keeps you looking sharp. For longer styles, 4-6 weeks is typical. I'll recommend a schedule based on your specific haircut and how fast your hair grows.",
      },
      {
        question: "Do you accept walk-ins?",
        answer: "I operate by appointment to ensure quality service and no waiting. However, I keep flexible hours and can often accommodate same-day or next-day bookings. Just call or message me!",
      },
      {
        question: "What's included in the Haircut + Beard Combo?",
        answer: "You get a full haircut (any style), beard trim and shaping, hot towel treatment, and styling. It's the complete grooming experience at a package price.",
      },
      {
        question: "Is parking available?",
        answer: "Yes, free street parking is available in the neighborhood. The salon is also easily accessible by public transport (5-minute walk from tram stop).",
      },
    ],
  },

  // Testimonials
  testimonials: {
    women: [
      {
        id: 1,
        name: "Sarah M.",
        text: "I've been going to expensive salons for years, but the one-on-one attention here is unmatched. My balayage has never looked better!",
        service: "Balayage",
        rating: 5,
      },
      {
        id: 2,
        name: "Lisa K.",
        text: "Finally found a stylist who really listens! He understood exactly what I wanted and delivered perfectly. The private setting is so relaxing.",
        service: "Haircut & Color",
        rating: 5,
      },
      {
        id: 3,
        name: "Emma V.",
        text: "Professional, skilled, and so easy to book online. My hair color is always consistent and beautiful. Highly recommend!",
        service: "Full Color",
        rating: 5,
      },
    ],
    men: [
      {
        id: 1,
        name: "Mark T.",
        text: "Best fade I've had in Amsterdam. No waiting in line, professional setup, and always consistent quality. My go-to barber now.",
        service: "Skin Fade",
        rating: 5,
      },
      {
        id: 2,
        name: "David R.",
        text: "I appreciate the skill and attention to detail. It's like having a private barber - great conversation and a perfect cut every time.",
        service: "Men's Haircut",
        rating: 5,
      },
      {
        id: 3,
        name: "Alex P.",
        text: "The combo package is fantastic value. Haircut and beard trim, both done perfectly. Convenient online booking too.",
        service: "Haircut + Beard",
        rating: 5,
      },
    ],
  },

  // Business hours for schema markup
  businessHours: "Tu-Fr 10:00-19:00, Sa 10:00-17:00",

  // Structured data
  structuredData: {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: brand.name,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&fit=crop&q=80",
    "@id": process.env.SITE_URL || "https://nourstyle.nl",
    url: process.env.SITE_URL || "https://nourstyle.nl",
    telephone: brand.contact.phone,
    email: brand.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.contact.address.street,
      addressLocality: brand.contact.address.city,
      postalCode: brand.contact.address.postalCode,
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: brand.contact.coordinates.lat,
      longitude: brand.contact.coordinates.lng,
    },
    priceRange: "€€",
    sameAs: [
      brand.social.instagram.women,
      brand.social.instagram.men,
      brand.social.facebook,
    ].filter(Boolean),
  },
} as const;

// Helper to generate page metadata
export const generateMetadata = (page: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}) => {
  const url = `${siteConfig.url}${page.path}`;

  return {
    title: `${page.title} | ${siteConfig.name}`,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: page.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      locale: "en_NL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.ogImage || siteConfig.ogImage],
      creator: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  };
};
