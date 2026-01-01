"use client";

import React, { createContext, useContext, useState } from 'react';

type Locale = 'en' | 'nl';
type Dictionary = Record<string, any>;

const I18nContext = createContext<{
    locale: Locale;
    setLocale: (l: Locale) => void;
    t: (key: string) => string;
}>({
    locale: 'en',
    setLocale: () => { },
    t: (key) => key,
});

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
            switch_men: "Switch to Men"
        },
        hero: {
            women: {
                title: "Beautiful Hair, Personal Touch",
                subtitle: "Women's Hair Services",
                description: "Personalized cuts, expert color, and special occasion styling in a private Amsterdam salon."
            },
            men: {
                title: "Sharp Cuts, Zero Hassle",
                subtitle: "Men's Grooming",
                description: "Professional haircuts, fades, and beard grooming in a private Amsterdam barbershop."
            }
        },
        why_choose: {
            title: "Why Choose NourStyle?",
            subtitle: "One-on-one attention in a private, professional setting.",
            expert_title: "Expert Styling",
            expert_desc: "Professional experience with all hair types and the latest techniques.",
            attention_title: "One-on-One Attention",
            attention_desc: "No crowded salon, no distractions. Just you and your stylist.",
            booking_title: "Easy Booking",
            booking_desc: "Book online 24/7, flexible hours, and convenient location."
        },
        services: {
            popular_title: "Popular Services",
            popular_subtitle: "From everyday cuts to stunning transformations",
            view_all: "View All Services & Pricing"
        },
        testimonials: {
            title: "What Clients Say",
            subtitle: "Real feedback from happy clients",
            rating: "4.9/5 average rating based on 30+ reviews"
        },
        instagram: {
            title: "See Our Latest Work",
            subtitle: "Follow us on Instagram for daily inspiration",
            follow: "Follow on Instagram",
            view_gallery: "View Gallery"
        },
        cta: {
            ready: "Ready for Your Dream Hair?",
            men_ready: "Ready for a Fresh Cut?",
            desc: "Book your appointment today or message us with any questions.",
            contact: "Contact Us"
        },
        footer: {
            contact: "Contact",
            book_title: "Book Appointment",
            flexible_schedule: "Flexible scheduling based on calendar availability.",
            check_availability: "Check Availability",
            rights: "All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        }
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
            switch_men: "Naar Heren"
        },
        hero: {
            women: {
                title: "Prachtig Haar, Persoonlijke Aandacht",
                subtitle: "Dameskapper",
                description: "Persoonlijke aandacht, expert kleurbehandelingen en styling in een prive salon in Amsterdam."
            },
            men: {
                title: "Strak Kapsel, Geen Gedoe",
                subtitle: "Herenkapper",
                description: "Professionele kapsels, fades en baardverzorging in een prive barbershop in Amsterdam."
            }
        },
        why_choose: {
            title: "Waarom NourStyle?",
            subtitle: "Een-op-een aandacht in een prive, professionele setting.",
            expert_title: "Vakkundige Styling",
            expert_desc: "Professionele ervaring met alle haartypes en de nieuwste technieken.",
            attention_title: "Een-op-een Aandacht",
            attention_desc: "Geen drukke salon, geen afleiding. Alleen jij en je stylist.",
            booking_title: "Eenvoudig Boeken",
            booking_desc: "Boek 24/7 online, flexibele tijden en een handige locatie."
        },
        services: {
            popular_title: "Populaire Diensten",
            popular_subtitle: "Van knippen tot prachtige kleurtransformaties",
            view_all: "Bekijk Alle Diensten & Prijzen"
        },
        testimonials: {
            title: "Wat Klanten Zeggen",
            subtitle: "Echte feedback van tevreden klanten",
            rating: "4.9/5 gemiddelde beoordeling o.b.v. 30+ reviews"
        },
        instagram: {
            title: "Bekijk Ons Nieuwste Werk",
            subtitle: "Volg ons op Instagram voor dagelijkse inspiratie",
            follow: "Volg op Instagram",
            view_gallery: "Bekijk Galerij"
        },
        cta: {
            ready: "Klaar voor Jouw Droomkapsel?",
            men_ready: "Klaar voor een Frisse Look?",
            desc: "Boek vandaag nog je afspraak of stuur ons een bericht.",
            contact: "Neem Contact Op"
        },
        footer: {
            contact: "Contact",
            book_title: "Afspraak Maken",
            flexible_schedule: "Flexibele tijden op basis van beschikbaarheid.",
            check_availability: "Bekijk Beschikbaarheid",
            rights: "Alle rechten voorbehouden.",
            privacy: "Privacybeleid",
            terms: "Algemene Voorwaarden"
        }
    }
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>('en');

    // Simple nested key retrieval (e.g., 'nav.home')
    const t = (path: string) => {
        const keys = path.split('.');
        let current: any = dictionaries[locale];

        for (const key of keys) {
            if (current[key] === undefined) return path;
            current = current[key];
        }

        return typeof current === 'string' ? current : path;
    };

    return (
        <I18nContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export const useI18n = () => useContext(I18nContext);
