import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Award, Scissors, Instagram } from "lucide-react";
import { Hero } from "@/components/shared/Hero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Testimonial } from "@/components/shared/Testimonial";
import { CTASection } from "@/components/shared/CTASection";
import { brand, getWhatsAppLink } from "@/config/brand";
import { menServices, getPopularServices } from "@/config/services";
import { siteConfig, generateMetadata } from "@/config/site";
import { imageConfig } from "@/config/images";

export const metadata: Metadata = generateMetadata({
  title: "Men's Barber Amsterdam | Precision Fades & Grooming",
  description: "Top-rated men's barber in Amsterdam. Expert fades, beard grooming, and classic cuts. Private studio atmosphere with premium service.",
  keywords: ["barber amsterdam", "men's haircut amsterdam", "skin fade amsterdam", "beard trim amsterdam", "private barber"],
  openGraph: {
    images: ["/images/men-hero.jpg"],
  },
  path: "/men",
});

export default function MenHomePage() {
  const popularServices = getPopularServices(menServices);
  const testimonials = siteConfig.testimonials.men;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Sharp Cuts, Zero Hassle"
        subtitle="Men's Grooming"
        description="Professional haircuts, fades, and beard grooming in a private Amsterdam barbershop."
        primaryCTA={{
          label: brand.cta.primary,
          href: brand.booking.url,
        }}
        secondaryCTA={{
          label: "View Services",
          href: "/men/services",
        }}
        imageSrc={imageConfig.menHero}
        imageAlt="Men's Haircut and Grooming"
        section="men"
      />

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Why Choose NourStyle?</h2>
            <p className="text-lg text-men-text-muted">
              Skip the barbershop wait. Get quality cuts in a private, professional setting.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10">
                <Scissors className="h-8 w-8 text-men-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Expert Barber Skills</h3>
              <p className="text-men-text-muted">
                {brand.about.experience} of experience with all men's styles - from classic cuts to modern fades.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10">
                <Award className="h-8 w-8 text-men-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">No Waiting in Line</h3>
              <p className="text-men-text-muted">
                Private one-on-one service. Your appointment time is your time - no crowds, no delays.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10">
                <Calendar className="h-8 w-8 text-men-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Easy Online Booking</h3>
              <p className="text-men-text-muted">
                Book 24/7, get reminders, and manage appointments online. Flexible hours including evenings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="section surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Popular Services</h2>
            <p className="text-lg text-men-text-muted">
              From classic cuts to modern fades
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularServices.map((service) => (
              <ServiceCard key={service.id} service={service} section="men" />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/men/services" className="btn btn-primary btn-lg">
              View All Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">What Clients Say</h2>
            <p className="text-lg text-men-text-muted">
              Real feedback from regular clients
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
              ⭐ 4.9/5 average rating based on 30+ reviews
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="section surface">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Instagram className="mx-auto mb-4 h-12 w-12 text-men-primary" />
            <h2 className="mb-4">See Our Latest Work</h2>
            <p className="mb-8 text-lg text-men-text-muted">
              Follow us on Instagram for fresh cuts and grooming inspiration
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={brand.social.instagram.men}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <Instagram className="h-5 w-5" />
                Follow on Instagram
              </a>
              <Link href="/men/gallery" className="btn btn-secondary btn-lg">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready for a Fresh Cut?"
        description="Book your appointment today or message us with any questions. Looking forward to seeing you!"
        primaryCTA={{
          label: brand.cta.primary,
          href: brand.booking.url,
        }}
        secondaryCTA={{
          label: "Contact Us",
          href: "/men/contact",
        }}
        section="men"
      />
    </>
  );
}
