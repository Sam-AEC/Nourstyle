import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTASection } from "@/components/shared/CTASection";
import { menServices, groupServicesByCategory, pricingNotes } from "@/config/services";
import { brand } from "@/config/brand";
import { generateMetadata } from "@/config/site";

export const metadata: Metadata = generateMetadata({
  title: "Men's Grooming Services & Pricing",
  description: "Professional men's haircuts, fades, beard trims, and grooming services in Amsterdam. Transparent pricing, quality results.",
  path: "/men/services",
});

export default function MenServicesPage() {
  const servicesByCategory = groupServicesByCategory(menServices);

  return (
    <>
      {/* Header */}
      <section className="section-sm surface">
        <div className="container-narrow text-center">
          <h1 className="mb-6">Men's Services & Pricing</h1>
          <p className="text-lg text-men-text-muted">
            Professional grooming services. All prices include consultation and styling.
          </p>
        </div>
      </section>

      {/* Services by Category */}
      <section className="section">
        <div className="container">
          {Object.entries(servicesByCategory).map(([category, services]) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="mb-8 text-3xl">{category}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} section="men" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="section surface">
        <div className="container-narrow">
          <h3 className="mb-6 text-2xl">Pricing Information</h3>
          <div className="space-y-3">
            {pricingNotes.men.map((note, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-men-primary">•</span>
                <p className="text-men-text-muted">{note}</p>
              </div>
            ))}
            {pricingNotes.general.map((note, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-men-primary">•</span>
                <p className="text-men-text-muted">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-men-border bg-men-surface p-6">
            <h4 className="mb-2 font-semibold">Questions about services?</h4>
            <p className="mb-4 text-men-text-muted">
              Not sure which cut or style is right for you? Message us and we'll help you decide.
            </p>
            <Link href="/men/contact" className="btn btn-secondary">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Book Your Appointment?"
        description="Choose your preferred date and time in our easy online booking system."
        primaryCTA={{
          label: brand.cta.primary,
          href: brand.booking.url,
        }}
        section="men"
      />
    </>
  );
}
