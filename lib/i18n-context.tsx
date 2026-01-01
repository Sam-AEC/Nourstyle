"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

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
                subtitle: "Women's Hair Services"
            },
            men: {
                title: "Sharp Cuts, Zero Hassle",
                subtitle: "Men's Grooming"
            }
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
                subtitle: "Dameskapper"
            },
            men: {
                title: "Strak Kapsel, Geen Gedoe",
                subtitle: "Herenkapper"
            }
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
