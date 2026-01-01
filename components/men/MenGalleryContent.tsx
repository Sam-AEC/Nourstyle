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
    src: imageConfig.menGallery[0],
    category: { en: "Haircuts", nl: "Knippen" },
    alt: { en: "Skin fade haircut", nl: "Skin fade knipbeurt" },
  },
  {
    id: 2,
    src: imageConfig.menGallery[1],
    category: { en: "Haircuts", nl: "Knippen" },
    alt: { en: "Classic men cut", nl: "Klassieke herencoupe" },
  },
  {
    id: 3,
    src: imageConfig.menGallery[2],
    category: { en: "Grooming", nl: "Verzorging" },
    alt: { en: "Beard trim and shape", nl: "Baard trim en vorm" },
  },
  {
    id: 4,
    src: imageConfig.menGallery[3],
    category: { en: "Haircuts", nl: "Knippen" },
    alt: { en: "Taper fade", nl: "Taper fade" },
  },
  {
    id: 5,
    src: imageConfig.menGallery[4],
    category: { en: "Haircuts", nl: "Knippen" },
    alt: { en: "Textured crop", nl: "Getextureerde coupe" },
  },
  {
    id: 6,
    src: imageConfig.menGallery[5],
    category: { en: "Grooming", nl: "Verzorging" },
    alt: { en: "Beard sculpting", nl: "Baard vormgeving" },
  },
  {
    id: 7,
    src: imageConfig.menGallery[6],
    category: { en: "Haircuts", nl: "Knippen" },
    alt: { en: "Pompadour style", nl: "Pompadour stijl" },
  },
  {
    id: 8,
    src: imageConfig.menGallery[7],
    category: { en: "Haircuts", nl: "Knippen" },
    alt: { en: "Buzz cut", nl: "Tondeuse coupe" },
  },
  {
    id: 9,
    src: imageConfig.menGallery[8],
    category: { en: "Packages", nl: "Pakketten" },
    alt: { en: "Full grooming service", nl: "Complete verzorgingsservice" },
  },
];

export function MenGalleryContent() {
  const { locale, t } = useI18n();

  const content = locale === "nl"
    ? {
        title: "Ons Werk",
        subtitle: "Echte coupes, echte klanten. Bekijk ons portfolio van knipbeurten en verzorging.",
        morePhotos: "Meer fotos komen snel. Deze galerij laat echte resultaten zien.",
        instaTitle: "Bekijk Meer op Instagram",
        instaDesc: "We delen elke dag frisse coupes op Instagram. Volg ons voor inspiratie en tips.",
        followLabel: "Volg",
        ctaTitle: "Zie je iets wat je mooi vindt?",
        ctaDesc: "Laten we je look scherp maken. Boek je afspraak vandaag.",
        ctaSecondary: "Neem Contact Op",
      }
    : {
        title: "Our Work",
        subtitle: "Real cuts, real clients. Browse our portfolio of haircuts and grooming.",
        morePhotos: "More photos coming soon. This gallery will showcase real client results.",
        instaTitle: "See More on Instagram",
        instaDesc: "We share fresh cuts daily on Instagram. Follow us for style inspiration and grooming tips.",
        followLabel: "Follow",
        ctaTitle: "Like What You See?",
        ctaDesc: "Let us get you looking sharp. Book your appointment today.",
        ctaSecondary: "Contact Us",
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg border border-men-border bg-men-surface shadow-sm transition-shadow hover:shadow-md"
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

                  <div className="absolute left-3 top-3 rounded-full bg-men-primary px-3 py-1 text-xs font-semibold text-white">
                    {image.category[locale]}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium">{image.alt[locale]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-men-border bg-men-surface p-8 text-center">
            <p className="text-men-text-muted">
              {content.morePhotos}
            </p>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Instagram className="mx-auto mb-4 h-12 w-12 text-men-primary" />
            <h2 className="mb-4">{content.instaTitle}</h2>
            <p className="mb-8 text-lg text-men-text-muted">
              {content.instaDesc}
            </p>
            <a
              href={brand.social.instagram.men}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg inline-flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              {content.followLabel} @{brand.social.instagram.men.split("/").pop()}
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
          href: "/men/contact",
        }}
        section="men"
      />
    </>
  );
}
