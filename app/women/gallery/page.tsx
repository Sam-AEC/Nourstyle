import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instagram, ExternalLink } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { brand } from "@/config/brand";
import { generateMetadata } from "@/config/site";
import { imageConfig } from "@/config/images";
import { blurDataURL } from "@/lib/image-utils";

export const metadata: Metadata = generateMetadata({
  title: "Gallery - Women's Hair Transformations",
  description: "Browse our portfolio of women's haircuts, color transformations, balayage, and special occasion styles. Real results from our Amsterdam salon.",
  path: "/women/gallery",
});

// Placeholder gallery images - replace with actual client photos
const galleryImages = [
  { id: 1, src: imageConfig.womenGallery[0], alt: "Balayage hair color", category: "Color" },
  { id: 2, src: imageConfig.womenGallery[1], alt: "Women's haircut", category: "Cut & Style" },
  { id: 3, src: imageConfig.womenGallery[2], alt: "Highlights transformation", category: "Color" },
  { id: 4, src: imageConfig.womenGallery[3], alt: "Special occasion updo", category: "Styling" },
  { id: 5, src: imageConfig.womenGallery[4], alt: "Long layered cut", category: "Cut & Style" },
  { id: 6, src: imageConfig.womenGallery[5], alt: "Ombre color", category: "Color" },
  { id: 7, src: imageConfig.womenGallery[6], alt: "Bob haircut", category: "Cut & Style" },
  { id: 8, src: imageConfig.womenGallery[7], alt: "Full highlights", category: "Color" },
  { id: 9, src: imageConfig.womenGallery[8], alt: "Beach waves styling", category: "Styling" },
];

export default function WomenGalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="section-sm bg-women-surface">
        <div className="container-narrow text-center">
          <h1 className="mb-6">Our Work</h1>
          <p className="text-lg text-women-text-muted">
            Real transformations, real clients. Browse our portfolio of cuts, color, and styling.
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
                className="group relative overflow-hidden rounded-lg border border-women-border bg-women-surface shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Category Badge */}
                  <div className="absolute left-3 top-3 rounded-full bg-women-primary px-3 py-1 text-xs font-semibold text-white">
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
          <div className="mt-12 rounded-lg border border-women-border bg-women-surface p-8 text-center">
            <p className="text-women-text-muted">
              📸 More photos coming soon! This gallery will showcase real client transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="section bg-women-surface">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Instagram className="mx-auto mb-4 h-12 w-12 text-women-primary" />
            <h2 className="mb-4">See More on Instagram</h2>
            <p className="mb-8 text-lg text-women-text-muted">
              We share fresh styles daily on Instagram. Follow us for before & afters, hair tips, and styling inspiration!
            </p>
            <a
              href={brand.social.instagram.women}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg inline-flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              Follow @{brand.social.instagram.women.split('/').pop()}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Love What You See?"
        description="Let's create your perfect look. Book your appointment today!"
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
