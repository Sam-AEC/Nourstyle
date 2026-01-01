"use client";

import Image from "next/image";
import { Instagram, ExternalLink } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { brand } from "@/config/brand";
import { imageConfig } from "@/config/images";
import { blurDataURL } from "@/lib/image-utils";
import { useI18n } from "@/lib/i18n-context";

const galleryImages = [
  {
    id: 1,
    src: imageConfig.womenGallery[0],
    category: { en: "Color", nl: "Kleur" },
    alt: { en: "Balayage hair color", nl: "Balayage kleuring" },
  },
  {
    id: 2,
    src: imageConfig.womenGallery[1],
    category: { en: "Cut and Style", nl: "Knippen" },
    alt: { en: "Women haircut", nl: "Dames knipbeurt" },
  },
  {
    id: 3,
    src: imageConfig.womenGallery[2],
    category: { en: "Color", nl: "Kleur" },
    alt: { en: "Highlights transformation", nl: "Highlights transformatie" },
  },
  {
    id: 4,
    src: imageConfig.womenGallery[3],
    category: { en: "Styling", nl: "Styling" },
    alt: { en: "Special occasion updo", nl: "Feestelijke opsteek" },
  },
  {
    id: 5,
    src: imageConfig.womenGallery[4],
    category: { en: "Cut and Style", nl: "Knippen" },
    alt: { en: "Long layered cut", nl: "Lange lagen coupe" },
  },
  {
    id: 6,
    src: imageConfig.womenGallery[5],
    category: { en: "Color", nl: "Kleur" },
    alt: { en: "Ombre color", nl: "Ombre kleuring" },
  },
  {
    id: 7,
    src: imageConfig.womenGallery[6],
    category: { en: "Cut and Style", nl: "Knippen" },
    alt: { en: "Bob haircut", nl: "Bob coupe" },
  },
  {
    id: 8,
    src: imageConfig.womenGallery[7],
    category: { en: "Color", nl: "Kleur" },
    alt: { en: "Full highlights", nl: "Volledige highlights" },
  },
  {
    id: 9,
    src: imageConfig.womenGallery[8],
    category: { en: "Styling", nl: "Styling" },
    alt: { en: "Beach waves styling", nl: "Strand golven styling" },
  },
];

export function WomenGalleryContent() {
  const { locale, t } = useI18n();

  const content = locale === "nl"
    ? {
        title: "Ons Werk",
        subtitle: "Echte transformaties, echte klanten. Bekijk ons portfolio van knipbeurten, kleur en styling.",
        morePhotos: "Meer fotos komen snel. Deze galerij laat echte transformaties zien.",
        instaTitle: "Bekijk Meer op Instagram",
        instaDesc: "We delen elke dag frisse stijlen op Instagram. Volg ons voor voor en na, haar tips en styling inspiratie.",
        followLabel: "Volg",
        ctaTitle: "Zie je iets dat je mooi vindt?",
        ctaDesc: "Laten we jouw perfecte look maken. Boek je afspraak vandaag.",
        ctaSecondary: "Neem Contact Op",
      }
    : {
        title: "Our Work",
        subtitle: "Real transformations, real clients. Browse our portfolio of cuts, color, and styling.",
        morePhotos: "More photos coming soon. This gallery will showcase real client transformations.",
        instaTitle: "See More on Instagram",
        instaDesc: "We share fresh styles daily on Instagram. Follow us for before and afters, hair tips, and styling inspiration.",
        followLabel: "Follow",
        ctaTitle: "Love What You See?",
        ctaDesc: "Let us create your perfect look. Book your appointment today.",
        ctaSecondary: "Contact Us",
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg border border-women-border bg-women-surface shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt[locale]}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="absolute left-3 top-3 rounded-full bg-women-primary px-3 py-1 text-xs font-semibold text-white">
                    {image.category[locale]}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium">{image.alt[locale]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-women-border bg-women-surface p-8 text-center">
            <p className="text-women-text-muted">
              {content.morePhotos}
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-women-surface">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Instagram className="mx-auto mb-4 h-12 w-12 text-women-primary" />
            <h2 className="mb-4">{content.instaTitle}</h2>
            <p className="mb-8 text-lg text-women-text-muted">
              {content.instaDesc}
            </p>
            <a
              href={brand.social.instagram.women}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg inline-flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              {content.followLabel} @{brand.social.instagram.women.split("/").pop()}
              <ExternalLink className="h-4 w-4" />
            </a>
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
        secondaryCTA={{
          label: content.ctaSecondary,
          href: "/women/contact",
        }}
        section="women"
      />
    </>
  );
}
