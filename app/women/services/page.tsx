import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTASection } from "@/components/shared/CTASection";
import { womenServices, groupServicesByCategory, pricingNotes } from "@/config/services";
import { brand } from "@/config/brand";
import { generateMetadata } from "@/config/site";

export const metadata: Metadata = generateMetadata({
  title: "Women's Hair Services & Pricing",
  description: "Explore our full range of women's hair services including cuts, color, balayage, highlights, and special occasion styling. Transparent pricing in Amsterdam.",
  path: "/women/services",
});

export default function WomenServicesPage() {
  const servicesByCategory = groupServicesByCategory(womenServices);

  return (
    <>
      {/* Header */}
      <section className="section-sm bg-women-surface">
        <div className="container-narrow text-center">
          <h1 className="mb-6">Women's Services & Pricing</h1>
          <p className="text-lg text-women-text-muted">
            Professional hair services tailored to you. All prices include consultation, and we use only premium products.
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
                  <ServiceCard key={service.id} service={service} section="women" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="section bg-women-surface">
        <div className="container-narrow">
          <h3 className="mb-6 text-2xl">Pricing Information</h3>
          <div className="space-y-3">
            {pricingNotes.women.map((note, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-women-primary">•</span>
                <p className="text-women-text-muted">{note}</p>
              </div>
            ))}
            {pricingNotes.general.map((note, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-women-primary">•</span>
                <p className="text-women-text-muted">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-women-border bg-white p-6">
            <h4 className="mb-2 font-semibold">Not sure which service is right for you?</h4>
            <p className="mb-4 text-women-text-muted">
              Book a complimentary consultation, or message us with your hair goals and we'll recommend the perfect service.
            </p>
            <Link href="/women/contact" className="btn btn-secondary">
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
        section="women"
      />
    </>
  );
}
