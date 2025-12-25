import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Award, Heart, Instagram } from "lucide-react";
import { Hero } from "@/components/shared/Hero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Testimonial } from "@/components/shared/Testimonial";
import { CTASection } from "@/components/shared/CTASection";
import { brand, getWhatsAppLink } from "@/config/brand";
import { womenServices, getPopularServices } from "@/config/services";
import { siteConfig, generateMetadata } from "@/config/site";

export const metadata: Metadata = generateMetadata({
  title: "Women's Hair Services in Amsterdam",
  description: "Expert hair cutting, coloring, and styling for women. Personalized one-on-one service in a private Amsterdam salon. Balayage, highlights, and more.",
  path: "/women",
});

export default function WomenHomePage() {
  const popularServices = getPopularServices(womenServices);
  const testimonials = siteConfig.testimonials.women;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Beautiful Hair, Personal Touch"
        subtitle="Women's Hair Services"
        description="Personalized cuts, expert color, and special occasion styling in a private Amsterdam salon."
        primaryCTA={{
          label: brand.cta.primary,
          href: brand.booking.url,
        }}
        secondaryCTA={{
          label: "View Services",
          href: "/women/services",
        }}
        imageSrc="/images/women-hero.jpg"
        imageAlt="Women's Hair Styling"
        section="women"
      />

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Why Choose NourStyle?</h2>
            <p className="text-lg text-women-text-muted">
              {brand.about.tagline}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-women-primary/10">
                <Award className="h-8 w-8 text-women-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Expert Styling</h3>
              <p className="text-women-text-muted">
                {brand.about.experience} of professional experience with all hair types and the latest techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-women-primary/10">
                <Heart className="h-8 w-8 text-women-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">One-on-One Attention</h3>
              <p className="text-women-text-muted">
                No crowded salon, no distractions. Just you and your stylist in a relaxed, private environment.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-women-primary/10">
                <Calendar className="h-8 w-8 text-women-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Easy Booking</h3>
              <p className="text-women-text-muted">
                Book online 24/7, flexible hours, and convenient Amsterdam location with parking available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="section bg-women-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Popular Services</h2>
            <p className="text-lg text-women-text-muted">
              From everyday cuts to stunning color transformations
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularServices.map((service) => (
              <ServiceCard key={service.id} service={service} section="women" />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/women/services" className="btn btn-primary btn-lg">
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
            <p className="text-lg text-women-text-muted">
              Real feedback from happy clients
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
              ⭐ 4.9/5 average rating based on 30+ reviews
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="section bg-women-surface">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Instagram className="mx-auto mb-4 h-12 w-12 text-women-primary" />
            <h2 className="mb-4">See Our Latest Work</h2>
            <p className="mb-8 text-lg text-women-text-muted">
              Follow us on Instagram for daily inspiration and our newest styles
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <Instagram className="h-5 w-5" />
                Follow on Instagram
              </a>
              <Link href="/women/gallery" className="btn btn-secondary btn-lg">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready for Your Dream Hair?"
        description="Book your appointment today or message us with any questions. We can't wait to help you look and feel amazing!"
        primaryCTA={{
          label: brand.cta.primary,
          href: brand.booking.url,
        }}
        secondaryCTA={{
          label: "Contact Us",
          href: "/women/contact",
        }}
        section="women"
      />
    </>
  );
}
