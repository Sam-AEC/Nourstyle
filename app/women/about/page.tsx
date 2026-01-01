import type { Metadata } from "next";
import Image from "next/image";
import { Award, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { brand } from "@/config/brand";
import { generateMetadata, siteConfig } from "@/config/site";
import { imageConfig } from "@/config/images";

export const metadata: Metadata = generateMetadata({
  title: "About Us, Your Amsterdam Hair Stylist",
  description: `Meet your stylist. ${brand.about.experience} of professional hair expertise, specializing in women's cuts and color in a private Amsterdam salon.`,
  path: "/women/about",
});

export default function WomenAboutPage() {
  const faq = siteConfig.faq.women;

  return (
    <>
      {/* Header */}
      <section className="section-sm bg-women-surface">
        <div className="container-narrow text-center">
          <h1 className="mb-6">About {brand.name}</h1>
          <p className="text-lg text-women-text-muted">
            {brand.about.tagline}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={imageConfig.stylistPortrait}
                alt="Professional Hair Stylist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <h2>Hello, I'm Your Stylist!</h2>

              <div className="space-y-4 text-women-text-muted">
                <p>
                  Welcome to {brand.name}! I'm passionate about helping women feel confident and beautiful through personalized hair styling.
                </p>

                <p>
                  With <strong>{brand.about.experience}</strong> in the industry, I've honed my skills in everything from precision cutting to advanced coloring techniques. I specialize in balayage, dimensional color, and creating styles that work with your natural texture and lifestyle.
                </p>

                <p>
                  {brand.about.approach}
                </p>

                <p>
                  My home salon was founded in {brand.about.yearEstablished} to offer an alternative to crowded, rushed appointments. Here, it is just you and me. No distractions, no waiting, just quality time focused on your hair goals.
                </p>
              </div>

              {/* Certifications */}
              <div className="pt-4">
                <h3 className="mb-4 text-xl font-semibold">Credentials & Training</h3>
                <div className="space-y-2">
                  {brand.about.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-women-primary" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-women-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">What Makes Us Different</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-women-primary/10">
                <Award className="h-8 w-8 text-women-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Expertise</h3>
              <p className="text-women-text-muted">
                Continuous education and training to stay on top of the latest techniques and trends. Your hair deserves the best.
              </p>
            </div>

            <div className="card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-women-primary/10">
                <Heart className="h-8 w-8 text-women-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Personal Touch</h3>
              <p className="text-women-text-muted">
                One stylist, one client. I get to know your hair, your preferences, and your goals. You're not just another appointment.
              </p>
            </div>

            <div className="card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-women-primary/10">
                <Sparkles className="h-8 w-8 text-women-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Premium Products</h3>
              <p className="text-women-text-muted">
                Only professional grade products from L'Oréal, Schwarzkopf, and Redken. Your hair health is a priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <h2 className="mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="card">
                <h3 className="mb-3 text-lg font-semibold">{item.question}</h3>
                <p className="text-women-text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Experience the Difference?"
        description="Book your first appointment and discover personalized hair care in Amsterdam."
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
