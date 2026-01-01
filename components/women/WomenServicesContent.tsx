"use client";

import Link from "next/link";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTASection } from "@/components/shared/CTASection";
import { womenServices, groupServicesByCategory, pricingNotes } from "@/config/services";
import { brand } from "@/config/brand";
import { useI18n } from "@/lib/i18n-context";

const getCategoryKey = (category: string) =>
  category.toLowerCase().replace(/[^a-z0-9]+/g, "_");

export function WomenServicesContent() {
  const { locale, t } = useI18n();
  const servicesByCategory = groupServicesByCategory(womenServices);

  const content = locale === "nl"
    ? {
        title: "Dames Diensten en Prijzen",
        subtitle: "Professionele haarservices op maat. Alle prijzen zijn inclusief consult en we gebruiken alleen premium producten.",
        pricingTitle: "Prijsinformatie",
        questionTitle: "Niet zeker welke dienst bij je past?",
        questionDesc: "Stuur ons een bericht en we helpen je de beste keuze te maken.",
        questionCta: "Neem Contact Op",
        ctaTitle: "Klaar om te boeken?",
        ctaDesc: "Kies je gewenste datum en tijd in ons eenvoudige online boekingssysteem.",
        notesWomen: [
          "Prijzen kunnen varieren bij extra lang of dik haar",
          "Kleurcorrectie op prijs na consult",
          "Alle kleurbehandelingen zijn inclusief consult",
          "Pakketten beschikbaar voor vaste klanten",
        ],
        notesGeneral: [
          "Alle prijzen zijn indicatief en kunnen varieren op basis van haarlengte, dikte en complexiteit",
          "Annuleren kan tot 24 uur van tevoren",
          "Betalingen: contant, pin en digitaal",
        ],
      }
    : {
        title: "Women Services and Pricing",
        subtitle: "Professional hair services tailored to you. All prices include consultation, and we use only premium products.",
        pricingTitle: "Pricing Information",
        questionTitle: "Not sure which service is right for you?",
        questionDesc: "Message us and we will help you choose the best option for your hair.",
        questionCta: "Contact Us",
        ctaTitle: "Ready to Book Your Appointment?",
        ctaDesc: "Choose your preferred date and time in our easy online booking system.",
        notesWomen: pricingNotes.women,
        notesGeneral: pricingNotes.general,
      };

  return (
    <>
      <section className="section-sm bg-women-surface">
        <div className="container-narrow text-center">
          <h1 className="mb-6">{content.title}</h1>
          <p className="text-lg text-women-text-muted">
            {content.subtitle}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {Object.entries(servicesByCategory).map(([category, services]) => {
            const categoryKey = `services.categories.${getCategoryKey(category)}`;
            const translatedCategory = t(categoryKey);
            const displayCategory = translatedCategory !== categoryKey ? translatedCategory : category;

            return (
              <div key={category} className="mb-16 last:mb-0">
                <h2 className="mb-8 text-3xl">{displayCategory}</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <ServiceCard key={service.id} service={service} section="women" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section bg-women-surface">
        <div className="container-narrow">
          <h3 className="mb-6 text-2xl">{content.pricingTitle}</h3>
          <div className="space-y-3">
            {content.notesWomen.map((note, index) => (
              <div key={`women-${index}`} className="flex gap-3">
                <span className="text-women-primary">*</span>
                <p className="text-women-text-muted">{note}</p>
              </div>
            ))}
            {content.notesGeneral.map((note, index) => (
              <div key={`general-${index}`} className="flex gap-3">
                <span className="text-women-primary">*</span>
                <p className="text-women-text-muted">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-women-border bg-white p-6">
            <h4 className="mb-2 font-semibold">{content.questionTitle}</h4>
            <p className="mb-4 text-women-text-muted">
              {content.questionDesc}
            </p>
            <Link href="/women/contact" className="btn btn-secondary">
              {content.questionCta}
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={content.ctaTitle}
        description={content.ctaDesc}
        primaryCTA={{
          label: t("nav.book"),
          href: brand.booking.url,
        }}
        section="women"
      />
    </>
  );
}
