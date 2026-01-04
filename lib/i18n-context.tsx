"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Locale = "en" | "nl";
type Dictionary = Record<string, any>;

const I18nContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}>(
  {
    locale: "en",
    setLocale: () => { },
    t: (key) => key,
  }
);

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem("locale");
  if (stored === "en" || stored === "nl") return stored;

  const browser = window.navigator.language?.toLowerCase() || "";
  return browser.startsWith("nl") ? "nl" : "en";
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      about: "About",
      contact: "Contact",
      book: "Book Now",
      switch_women: "Switch to Women",
      switch_men: "Switch to Men",
    },
    hero: {
      women: {
        title: "Beautiful Hair, Personal Touch",
        subtitle: "Women Hair Services",
        description: "Personalized cuts, expert color, and special occasion styling in a private Amsterdam salon.",
      },
      men: {
        title: "Sharp Cuts, Zero Hassle",
        subtitle: "Men Grooming",
        description: "Professional haircuts, fades, and beard grooming in a private Amsterdam barbershop.",
      },
    },
    why_choose: {
      title: "Why Choose Nour Hairstylist",
      subtitle: "One on one attention in a private, professional setting.",
      expert_title: "Expert Styling",
      expert_desc: "Professional experience with all hair types and the latest techniques.",
      attention_title: "One on One Attention",
      attention_desc: "No crowded salon, no distractions. Just you and your stylist.",
      booking_title: "Easy Booking",
      booking_desc: "Book online 24/7, flexible hours, and convenient location.",
    },
    services: {
      popular_title: "Popular Services",
      popular_subtitle: "From everyday cuts to stunning transformations",
      view_all: "View All Services and Pricing",
      popular_badge: "Popular",
      price_from: "from",
      price_free: "FREE",
      price_on_request: "On Request",
      unit_strand: "strand",
      categories: {
        consultation: "Consultation",
        cuts_styling: "Cuts and Styling",
        color: "Color",
        treatments: "Treatments",
        haircuts: "Haircuts",
        grooming: "Grooming",
        packages: "Packages",
        extensions: "Extensions",
      },
      items: {
        "women-wash-cut-dry-long": {
          name: "Long hair wash, cut & dry",
          description: "Wash, cut, and dry for long hair. Optional styling (blow dry/curling iron): +€15.",
        },

        "women-blowdry-styling": {
          name: "Blow dry styling",
          description: "Hair wash, dry, and blow dry styling for a beautiful, groomed look.",
        },
        "women-curls-wash": {
          name: "Curls with curling iron",
          description: "Wash and curls with curling iron for a beautiful, long-lasting look.",
        },
        "women-root-touch": {
          name: "Root Touch Up",
          description: "Touch up roots for a fresh, even color.",
        },
        "women-color-short": {
          name: "Color Short hair",
          description: "Full coloring for short hair for an even, fresh color.",
        },
        "women-color-medium": {
          name: "Color Medium hair",
          description: "Full coloring for medium hair for an even, fresh color.",
        },
        "women-color-long": {
          name: "Color Long hair",
          description: "Full coloring for long hair for an even, fresh color.",
        },
        "women-toner": {
          name: "Toner (rinse)",
          description: "Refreshing toner to neutralize the color and give extra shine.",
        },
        "women-highlights-package-short": {
          name: "Highlights Package (Short Hair)",
          description: "Highlights for short hair with Olaplex and toner for a fresh, even color. Includes cut and dry.",
        },
        "women-highlights-package-medium": {
          name: "Highlights Package (Medium Hair)",
          description: "Highlights for medium hair with Olaplex and toner for a fresh, even color. Includes cut and dry.",
        },
        "women-highlights-package-long": {
          name: "Highlights Package (Long Hair)",
          description: "Highlights for long hair with Olaplex and toner for a fresh, even color. Includes cut and dry.",
        },
        "women-creative-color": {
          name: "Balayage / Babylights / Ombre / Reflex / Face-framing",
          description: "We choose the best treatment for you in the salon. Price depends on length, thickness, and technique.",
        },
        "women-extensions": {
          name: "Micro Keratin Extensions",
          description: "For extra length and volume with a natural look. Treatment and color tailored to your hair.",
        },
        "women-extensions-refit": {
          name: "Micro Keratin extensions Refit",
          description: "Extensions removed and replaced with new micro-keratin per strand.",
        },
        "men-haircut": {
          name: "Men Haircut",
          description: "Complete haircut with consultation, precision cut, and styling. Any length or style.",
        },
        "men-fade": {
          name: "Skin Fade / Taper",
          description: "Modern fade haircut with precise blending. Includes styling.",
        },
        "men-buzz-cut": {
          name: "Buzz Cut",
          description: "Clean, uniform cut with clippers. Quick and classic.",
        },
        "men-kids-cut": {
          name: "Kids Haircut (Under 12)",
          description: "Patient, kid friendly haircut service.",
        },
        "men-beard-trim": {
          name: "Beard Trim and Shaping",
          description: "Detailed beard sculpting with trimmer and scissors. Includes hot towel finish.",
        },
        "men-hot-shave": {
          name: "Traditional Hot Towel Shave",
          description: "Classic straight razor shave with hot towel treatment. Smooth and relaxing.",
        },
        "men-combo": {
          name: "Haircut + Beard Combo",
          description: "Complete grooming package. Haircut and beard trim.",
        },
        "men-full-service": {
          name: "Full Grooming Service",
          description: "The ultimate package: haircut, beard trim, and hot towel shave.",
        },
      },
    },
    testimonials: {
      title: "What Clients Say",
      subtitle: "Real feedback from happy clients",
      rating: "4.9/5 average rating based on 30+ reviews",
      by: "By",
    },
    instagram: {
      title: "See Our Latest Work",
      subtitle: "Follow us on Instagram for daily inspiration",
      follow: "Follow on Instagram",
      view_gallery: "View Gallery",
    },
    cta: {
      ready: "Ready for Your Dream Hair?",
      men_ready: "Ready for a Fresh Cut?",
      desc: "Book your appointment today or message us with any questions.",
      contact: "Contact Us",
    },
    footer: {
      contact: "Contact",
      about: "Private hair studio in Amsterdam for women and men.",
      book_title: "Book Appointment",
      flexible_schedule: "Flexible scheduling based on calendar availability.",
      check_availability: "Check Availability",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    actions: {
      call: "Call",
      menu: "Menu",
    },
    brands: {
      title: "Trusted products we use",
    },
    booking: {
      info_title: "Booking info",
      info_prefix: "Bookings are hosted on",
      info_suffix: "If the calendar does not load, open the booking page directly.",
      info_page: "Booking page",
      loading: "Loading booking system.",
      page_title: "Book Your Appointment",
      page_subtitle: "Choose a time that works for you. No phone calls required.",
    },
  },
  nl: {
    nav: {
      home: "Home",
      services: "Diensten",
      gallery: "Galerij",
      about: "Over Ons",
      contact: "Contact",
      book: "Nu Boeken",
      switch_women: "Naar Dames",
      switch_men: "Naar Heren",
    },
    hero: {
      women: {
        title: "Prachtig Haar, Persoonlijke Aandacht",
        subtitle: "Dameskapper",
        description: "Persoonlijke aandacht, expert kleurbehandelingen en styling in een prive salon in Amsterdam.",
      },
      men: {
        title: "Strak Kapsel, Geen Gedoe",
        subtitle: "Herenkapper",
        description: "Professionele kapsels, fades en baardverzorging in een prive barbershop in Amsterdam.",
      },
    },
    why_choose: {
      title: "Waarom Nour Hairstylist",
      subtitle: "Een op een aandacht in een prive, professionele setting.",
      expert_title: "Vakkundige Styling",
      expert_desc: "Professionele ervaring met alle haartypes en de nieuwste technieken.",
      attention_title: "Een op een Aandacht",
      attention_desc: "Geen drukke salon, geen afleiding. Alleen jij en je stylist.",
      booking_title: "Eenvoudig Boeken",
      booking_desc: "Boek 24/7 online, flexibele tijden en een handige locatie.",
    },
    services: {
      popular_title: "Populaire Diensten",
      popular_subtitle: "Van knippen tot prachtige kleurtransformaties",
      view_all: "Bekijk Alle Diensten en Prijzen",
      popular_badge: "Populair",
      price_from: "vanaf",
      price_free: "GRATIS",
      price_on_request: "Op afspraak",
      unit_strand: "streng",
      categories: {
        consultation: "Consultatie",
        cuts_styling: "Knippen en Styling",
        color: "Kleur",
        treatments: "Behandelingen",
        haircuts: "Herenknip",
        grooming: "Baard en Verzorging",
        packages: "Pakketten",
        extensions: "Extensions",
      },
      items: {
        "women-wash-cut-dry-long": {
          name: "Lang haar wassen, knippen & drogen",
          description: "Wassen, knippen en drogen speciaal voor lang haar. Optie Styling (model föhnen/krultang): +€15.",
        },

        "women-blowdry-styling": {
          name: "Föhnen in model",
          description: "Haar wassen drogen en in model föhnen voor een mooie, verzorgde look.",
        },
        "women-curls-wash": {
          name: "Krullen met krultang (incl. wassen)",
          description: "Wassen en krullen met de krultang voor een mooie, langdurige look.",
        },
        "women-root-touch": {
          name: "Uitgroei bijwerken",
          description: "Uitgroei bijwerken voor een frisse, egale kleur.",
        },
        "women-color-short": {
          name: "Kleuren kort haar",
          description: "Volledige kleuring voor kort haar voor een egale, frisse kleur.",
        },
        "women-color-medium": {
          name: "Kleuren halflang haar",
          description: "Volledige kleuring voor halflang haar voor een egale, frisse kleur.",
        },
        "women-color-long": {
          name: "Kleuren lang haar",
          description: "Volledige kleuring voor lang haar voor een egale, frisse kleur.",
        },
        "women-toner": {
          name: "Toner (spoeling)",
          description: "Opfrissende toner om de kleur te neutraliseren en extra glans te geven.",
        },
        "women-highlights-package-short": {
          name: "Highlights Pakket (Kort haar)",
          description: "Highlights voor kort haar met Olaplex en toner voor een frisse, egale kleur. Inclusief knippen en drogen.",
        },
        "women-highlights-package-medium": {
          name: "Highlights Pakket (Halflang haar)",
          description: "Highlights voor halflang haar met Olaplex en toner voor een frisse, egale kleur. Inclusief knippen en drogen.",
        },
        "women-highlights-package-long": {
          name: "Highlights Pakket (Lang haar)",
          description: "Highlights voor lang haar met Olaplex en toner voor een frisse, egale kleur. Inclusief knippen en drogen.",
        },
        "women-creative-color": {
          name: "Balayage / Babylights / Ombre / Reflex / Face-framing",
          description: "We kiezen samen in de salon welke behandeling het beste bij jou past. Prijs afhankelijk van haarlengte, haardikte en techniek.",
        },
        "women-extensions": {
          name: "Micro Keratine Extensions",
          description: "Voor extra lengte en volume met een natuurlijke uitstraling. De behandeling en kleur worden afgestemd op jouw haar.",
        },
        "women-extensions-refit": {
          name: "Micro Keratine extensions herplaatsing",
          description: "De extensions worden verwijderd en opnieuw geplaatst met nieuwe micro-keratine per streng.",
        },
        "men-haircut": {
          name: "Herenknipbeurt",
          description: "Complete knipbeurt met consult, precisieknip en styling. Elke lengte of stijl.",
        },
        "men-fade": {
          name: "Skin fade en taper",
          description: "Moderne fade met strakke overgangen. Inclusief styling.",
        },
        "men-buzz-cut": {
          name: "Tondeuse coupe",
          description: "Strakke, uniforme tondeuseknip. Snel en klassiek.",
        },
        "men-kids-cut": {
          name: "Kinderknipbeurt tot 12",
          description: "Geduldige, kindvriendelijke knipbeurt.",
        },
        "men-beard-trim": {
          name: "Baard trimmen en vormgeven",
          description: "Gedetailleerde baardverzorging met trimmer en schaar. Inclusief warme handdoek.",
        },
        "men-hot-shave": {
          name: "Traditionele scheerbeurt",
          description: "Klassieke scheerbeurt met open mes en warme handdoek. Glad en ontspannend.",
        },
        "men-combo": {
          name: "Knipbeurt en baard pakket",
          description: "Complete verzorging. Knipbeurt en baardtrim.",
        },
        "men-full-service": {
          name: "Complete verzorgingsservice",
          description: "Het ultieme pakket: knipbeurt, baardtrim en scheerbeurt.",
        },
      },
    },
    testimonials: {
      title: "Wat Klanten Zeggen",
      subtitle: "Echte feedback van tevreden klanten",
      rating: "4.9/5 gemiddelde beoordeling op basis van 30+ beoordelingen",
      by: "Door",
    },
    instagram: {
      title: "Bekijk Ons Nieuwste Werk",
      subtitle: "Volg ons op Instagram voor dagelijkse inspiratie",
      follow: "Volg op Instagram",
      view_gallery: "Bekijk Galerij",
    },
    cta: {
      ready: "Klaar voor Jouw Droomkapsel?",
      men_ready: "Klaar voor een Frisse Look?",
      desc: "Boek vandaag nog je afspraak of stuur ons een bericht.",
      contact: "Neem Contact Op",
    },
    footer: {
      contact: "Contact",
      about: "Prive haarstudio in Amsterdam voor dames en heren.",
      book_title: "Afspraak Maken",
      flexible_schedule: "Flexibele tijden op basis van beschikbaarheid.",
      check_availability: "Bekijk Beschikbaarheid",
      rights: "Alle rechten voorbehouden.",
      privacy: "Privacybeleid",
      terms: "Algemene Voorwaarden",
    },
    actions: {
      call: "Bel",
      menu: "Menu",
    },
    brands: {
      title: "Producten die we gebruiken",
    },
    booking: {
      info_title: "Boekingsinfo",
      info_prefix: "Boekingen lopen via",
      info_suffix: "Als de kalender niet laadt, open de boekingspagina direct.",
      info_page: "Boekingspagina",
      loading: "Boekingssysteem laden.",
      page_title: "Boek je Afspraak",
      page_subtitle: "Kies een tijd die voor je werkt. Geen telefoontjes nodig.",
    },
  },
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Initialize with 'en' to avoid hydration mismatch with server
  const [locale, setLocale] = useState<Locale>("en");

  // Sync with client preference on mount
  useEffect(() => {
    const clientPreference = getInitialLocale();
    if (clientPreference !== "en") {
      setLocale(clientPreference);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  // Simple nested key retrieval (e.g., "nav.home")
  const t = (path: string) => {
    const keys = path.split(".");
    let current: any = dictionaries[locale];

    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }

    return typeof current === "string" ? current : path;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
