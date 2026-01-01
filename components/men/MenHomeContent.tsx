"use client";

import Link from "next/link";
import { Calendar, Award, Scissors, Instagram } from "lucide-react";
import { Hero } from "@/components/shared/Hero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Testimonial } from "@/components/shared/Testimonial";
import { CTASection } from "@/components/shared/CTASection";
import { brand } from "@/config/brand";
import { menServices, getPopularServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import { imageConfig } from "@/config/images";
import { useI18n } from "@/lib/i18n-context";

export function MenHomeContent() {
    const { locale, t } = useI18n();
    const popularServices = getPopularServices(menServices);
    const testimonials = locale === "nl"
        ? [
            {
                id: 1,
                name: "Mark T.",
                text: "Beste fade die ik in Amsterdam heb gehad. Geen wachtrij, professionele setup en altijd constante kwaliteit. Mijn vaste barber nu.",
                service: "Skin fade",
                rating: 5,
            },
            {
                id: 2,
                name: "David R.",
                text: "Ik waardeer de aandacht voor detail. Het is alsof je een prive barber hebt. Fijn gesprek en elke keer een perfecte coupe.",
                service: "Herenknipbeurt",
                rating: 5,
            },
            {
                id: 3,
                name: "Alex P.",
                text: "Het combo pakket is veel waar voor je geld. Knipbeurt en baard trim allebei strak. Handig online boeken ook.",
                service: "Knipbeurt en Baard",
                rating: 5,
            },
        ]
        : siteConfig.testimonials.men;

    return (
        <>
            <Hero
                title="Sharp Cuts, Zero Hassle"
                subtitle="Men's Grooming"
                description={t('hero.men.description') !== 'hero.men.description' ? t('hero.men.description') : "Professional haircuts, fades, and beard grooming in a private Amsterdam barbershop."}
                primaryCTA={{
                    label: t('nav.book'),
                    href: brand.booking.url,
                }}
                secondaryCTA={{
                    label: t('services.view_all'), // reusing label or similar
                    href: "/men/services",
                }}
                imageSrc={imageConfig.menHero}
                imageAlt={locale === "nl" ? "Heren knipbeurt en verzorging" : "Men haircut and grooming"}
                section="men"
            />

            <section className="section">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-6">{t('why_choose.title')}</h2>
                        <p className="text-lg text-men-text-muted">
                            {t('why_choose.subtitle')}
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10">
                                <Scissors className="h-8 w-8 text-men-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{t('why_choose.expert_title')}</h3>
                            <p className="text-men-text-muted">
                                {t('why_choose.expert_desc')}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10">
                                <Award className="h-8 w-8 text-men-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{t('why_choose.attention_title')}</h3>
                            <p className="text-men-text-muted">
                                {t('why_choose.attention_desc')}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10">
                                <Calendar className="h-8 w-8 text-men-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{t('why_choose.booking_title')}</h3>
                            <p className="text-men-text-muted">
                                {t('why_choose.booking_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section surface">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4">{t('services.popular_title')}</h2>
                        <p className="text-lg text-men-text-muted">
                            {t('services.popular_subtitle')}
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {popularServices.map((service) => (
                            <ServiceCard key={service.id} service={service} section="men" />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/men/services" className="btn btn-primary btn-lg">
                            {t('services.view_all')}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4">{t('testimonials.title')}</h2>
                        <p className="text-lg text-men-text-muted">
                            {t('testimonials.subtitle')}
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.slice(0, 3).map((testimonial) => (
                            <Testimonial
                                key={testimonial.id}
                                name={testimonial.name}
                                text={testimonial.text}
                                service={testimonial.service}
                                rating={testimonial.rating}
                                section="men"
                            />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-men-text-muted">
                            {t('testimonials.rating')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="section surface">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <Instagram className="mx-auto mb-4 h-12 w-12 text-men-primary" />
                        <h2 className="mb-4">{t('instagram.title')}</h2>
                        <p className="mb-8 text-lg text-men-text-muted">
                            {t('instagram.subtitle')}
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href={brand.social.instagram.men}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                <Instagram className="h-5 w-5" />
                                {t('instagram.follow')}
                            </a>
                            <Link href="/men/gallery" className="btn btn-secondary btn-lg">
                                {t('instagram.view_gallery')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title={t('cta.men_ready')}
                description={t('cta.desc')}
                primaryCTA={{
                    label: t('nav.book'),
                    href: brand.booking.url,
                }}
                secondaryCTA={{
                    label: t('cta.contact'),
                    href: "/men/contact",
                }}
                section="men"
            />
        </>
    );
}
