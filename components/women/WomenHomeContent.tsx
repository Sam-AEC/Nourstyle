"use client";

import Link from "next/link";
import { Calendar, Award, Heart, Instagram } from "lucide-react";
import { Hero } from "@/components/shared/Hero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Testimonial } from "@/components/shared/Testimonial";
import { CTASection } from "@/components/shared/CTASection";
import { BrandLogos } from "@/components/shared/BrandLogos";
import { brand } from "@/config/brand";
import { womenServices, getPopularServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import { imageConfig } from "@/config/images";
import { useI18n } from "@/lib/i18n-context";

export function WomenHomeContent() {
    const { locale, t } = useI18n();
    const popularServices = getPopularServices(womenServices);
    const testimonials = locale === "nl"
        ? [
            {
                id: 1,
                name: "Sarah M.",
                text: "Ik ging jaren naar dure salons, maar de persoonlijke aandacht hier is ongekend. Mijn balayage was nog nooit zo mooi.",
                service: "Balayage",
                rating: 5,
            },
            {
                id: 2,
                name: "Lisa K.",
                text: "Eindelijk een stylist die echt luistert. Hij begreep precies wat ik wilde en leverde perfect. De prive setting is zo ontspannen.",
                service: "Knipbeurt en Kleur",
                rating: 5,
            },
            {
                id: 3,
                name: "Emma V.",
                text: "Professioneel, kundig en heel makkelijk online te boeken. Mijn haarkleur is altijd consistent en mooi. Aanrader.",
                service: "Volledige Kleuring",
                rating: 5,
            },
        ]
        : siteConfig.testimonials.women;

    return (
        <>
            <Hero
                title="Beautiful Hair, Personal Touch" // Fallback, key used internally
                subtitle="Women's Hair Services" // Fallback
                description={t('hero.women.description') !== 'hero.women.description' ? t('hero.women.description') : "Personalized cuts, expert color, and special occasion styling in a private Amsterdam salon."}
                primaryCTA={{
                    label: t('nav.book'),
                    href: brand.booking.url,
                }}
                secondaryCTA={{
                    label: t('services.view_all'), // reusing label or similar
                    href: "/women/services",
                }}
                imageSrc={imageConfig.womenHero}
                imageAlt={locale === "nl" ? "Dames haarstyling" : "Women hair styling"}
                section="women"
            />

            <BrandLogos section="women" />

            {/* Why Choose Us */}
            <section className="section">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-6">{t('why_choose.title')}</h2>
                        <p className="text-lg text-women-text-muted">
                            {t('why_choose.subtitle')}
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-women-primary/10">
                                <Award className="h-8 w-8 text-women-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{t('why_choose.expert_title')}</h3>
                            <p className="text-women-text-muted">
                                {t('why_choose.expert_desc')}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-women-primary/10">
                                <Heart className="h-8 w-8 text-women-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{t('why_choose.attention_title')}</h3>
                            <p className="text-women-text-muted">
                                {t('why_choose.attention_desc')}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-women-primary/10">
                                <Calendar className="h-8 w-8 text-women-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{t('why_choose.booking_title')}</h3>
                            <p className="text-women-text-muted">
                                {t('why_choose.booking_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Services */}
            <section className="section bg-women-surface">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4">{t('services.popular_title')}</h2>
                        <p className="text-lg text-women-text-muted">
                            {t('services.popular_subtitle')}
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {popularServices.map((service) => (
                            <ServiceCard key={service.id} service={service} section="women" />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/women/services" className="btn btn-primary btn-lg">
                            {t('services.view_all')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4">{t('testimonials.title')}</h2>
                        <p className="text-lg text-women-text-muted">
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
                                section="women"
                            />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-women-text-muted">
                            {t('testimonials.rating')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Instagram Preview */}
            <section className="section bg-women-surface">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <Instagram className="mx-auto mb-4 h-12 w-12 text-women-primary" />
                        <h2 className="mb-4">{t('instagram.title')}</h2>
                        <p className="mb-8 text-lg text-women-text-muted">
                            {t('instagram.subtitle')}
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href={brand.social.instagram.women}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                <Instagram className="h-5 w-5" />
                                {t('instagram.follow')}
                            </a>
                            <Link href="/women/gallery" className="btn btn-secondary btn-lg">
                                {t('instagram.view_gallery')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title={t('cta.ready')}
                description={t('cta.desc')}
                primaryCTA={{
                    label: t('nav.book'),
                    href: brand.booking.url,
                }}
                secondaryCTA={{
                    label: t('cta.contact'),
                    href: "/women/contact",
                }}
                section="women"
            />
        </>
    );
}
