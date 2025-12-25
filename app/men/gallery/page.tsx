import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instagram, ExternalLink } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { brand } from "@/config/brand";
import { generateMetadata } from "@/config/site";

export const metadata: Metadata = generateMetadata({
  title: "Gallery - Men's Haircuts & Grooming",
  description: "Browse our portfolio of men's haircuts, fades, and beard grooming. Real results from our Amsterdam barbershop.",
  path: "/men/gallery",
});

// Placeholder gallery images - replace with actual client photos
const galleryImages = [
  { id: 1, src: "/images/gallery/men-1.jpg", alt: "Skin fade haircut", category: "Haircuts" },
  { id: 2, src: "/images/gallery/men-2.jpg", alt: "Classic men's cut", category: "Haircuts" },
  { id: 3, src: "/images/gallery/men-3.jpg", alt: "Beard trim and shape", category: "Grooming" },
  { id: 4, src: "/images/gallery/men-4.jpg", alt: "Taper fade", category: "Haircuts" },
  { id: 5, src: "/images/gallery/men-5.jpg", alt: "Textured crop", category: "Haircuts" },
  { id: 6, src: "/images/gallery/men-6.jpg", alt: "Beard sculpting", category: "Grooming" },
  { id: 7, src: "/images/gallery/men-7.jpg", alt: "Pompadour style", category: "Haircuts" },
  { id: 8, src: "/images/gallery/men-8.jpg", alt: "Buzz cut", category: "Haircuts" },
  { id: 9, src: "/images/gallery/men-9.jpg", alt: "Full grooming service", category: "Packages" },
];

export default function MenGalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="section-sm surface">
        <div className="container-narrow text-center">
          <h1 className="mb-6">Our Work</h1>
          <p className="text-lg text-men-text-muted">
            Real cuts, real clients. Browse our portfolio of haircuts and grooming.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg border border-men-border bg-men-surface shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Category Badge */}
                  <div className="absolute left-3 top-3 rounded-full bg-men-primary px-3 py-1 text-xs font-semibold text-white">
                    {image.category}
                  </div>

                  {/* Hover Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder Note */}
          <div className="mt-12 rounded-lg border border-men-border bg-men-surface p-8 text-center">
            <p className="text-men-text-muted">
              📸 More photos coming soon! This gallery will showcase real client results.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="section surface">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Instagram className="mx-auto mb-4 h-12 w-12 text-men-primary" />
            <h2 className="mb-4">See More on Instagram</h2>
            <p className="mb-8 text-lg text-men-text-muted">
              We share fresh cuts daily on Instagram. Follow us for style inspiration and grooming tips!
            </p>
            <a
              href={brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg inline-flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              Follow @{brand.social.instagram.split('/').pop()}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Like What You See?"
        description="Let's get you looking sharp. Book your appointment today!"
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
