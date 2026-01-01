"use client";

import Link from "next/link";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTASection } from "@/components/shared/CTASection";
import { menServices, groupServicesByCategory, pricingNotes } from "@/config/services";
import { brand } from "@/config/brand";
import { useI18n } from "@/lib/i18n-context";

const getCategoryKey = (category: string) =>
  category.toLowerCase().replace(/[^a-z0-9]+/g, "_");

export function MenServicesContent() {
  const { locale, t } = useI18n();
  const servicesByCategory = groupServicesByCategory(menServices);

  const content = locale === "nl"
    ? {
        title: "Heren Diensten en Prijzen",
        subtitle: "Professionele verzorging. Alle prijzen zijn inclusief consult en styling.",
        pricingTitle: "Prijsinformatie",
        questionTitle: "Vragen over diensten?",
        questionDesc: "Niet zeker welke knipbeurt of stijl bij je past? Stuur ons een bericht en we helpen je kiezen.",
        questionCta: "Stel een Vraag",
        ctaTitle: "Klaar om te boeken?",
        ctaDesc: "Kies je gewenste datum en tijd in ons eenvoudige online boekingssysteem.",
        notesMen: [
          "Inloop is welkom, maar afspraken zijn aanbevolen",
          "Vaste klanten krijgen loyaliteitskorting",
          "Studentenkorting beschikbaar, toon een geldig ID",
        ],
        notesGeneral: [
          "Alle prijzen zijn indicatief en kunnen varieren op basis van haarlengte, dikte en complexiteit",
          "Annuleren kan tot 24 uur van tevoren",
          "Betalingen: contant, pin en digitaal",
        ],
      }
    : {
        title: "Men Services and Pricing",
        subtitle: "Professional grooming services. All prices include consultation and styling.",
        pricingTitle: "Pricing Information",
        questionTitle: "Questions about services?",
        questionDesc: "Not sure which cut or style is right for you? Message us and we will help you decide.",
        questionCta: "Ask a Question",
        ctaTitle: "Ready to Book Your Appointment?",
        ctaDesc: "Choose your preferred date and time in our easy online booking system.",
        notesMen: pricingNotes.men,
        notesGeneral: pricingNotes.general,
      };

  return (
    <>
      <section className="section-sm surface">
        <div className="container-narrow text-center">
          <h1 className="mb-6">{content.title}</h1>
          <p className="text-lg text-men-text-muted">
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
                    <ServiceCard key={service.id} service={service} section="men" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section surface">
        <div className="container-narrow">
          <h3 className="mb-6 text-2xl">{content.pricingTitle}</h3>
          <div className="space-y-3">
            {content.notesMen.map((note, index) => (
              <div key={`men-${index}`} className="flex gap-3">
                <span className="text-men-primary">*</span>
                <p className="text-men-text-muted">{note}</p>
              </div>
            ))}
            {content.notesGeneral.map((note, index) => (
              <div key={`general-${index}`} className="flex gap-3">
                <span className="text-men-primary">*</span>
                <p className="text-men-text-muted">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-men-border bg-men-surface p-6">
            <h4 className="mb-2 font-semibold">{content.questionTitle}</h4>
            <p className="mb-4 text-men-text-muted">
              {content.questionDesc}
            </p>
            <Link href="/men/contact" className="btn btn-secondary">
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
        section="men"
      />
    </>
  );
}
