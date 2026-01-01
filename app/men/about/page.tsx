import type { Metadata } from "next";
import Image from "next/image";
import { Award, Scissors, Sparkles, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { brand } from "@/config/brand";
import { generateMetadata, siteConfig } from "@/config/site";
import { imageConfig } from "@/config/images";

export const metadata: Metadata = generateMetadata({
  title: "About Your Amsterdam Barber",
  description: `Meet your barber. ${brand.about.experience} of professional grooming expertise in Amsterdam. Modern cuts, classic service.`,
  path: "/men/about",
});

export default function MenAboutPage() {
  const faq = siteConfig.faq.men;

  return (
    <>
      {/* Header */}
      <section className="section-sm surface">
        <div className="container-narrow text-center">
          <h1 className="mb-6">About {brand.name}</h1>
          <p className="text-lg text-men-text-muted">
            Your private barbershop in Amsterdam
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
                alt="Professional Barber"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <h2>Welcome to the Chair</h2>

              <div className="space-y-4 text-men-text-muted">
                <p>
                  I'm a professional barber with <strong>{brand.about.experience}</strong> in men's grooming, specializing in modern cuts, classic fades, and precision beard work.
                </p>

                <p>
                  Whether you want a sharp business cut, a fresh fade, or a complete grooming session, I focus on delivering consistent quality every single time.
                </p>

                <p>
                  {brand.about.approach}
                </p>

                <p>
                  I opened this private barbershop in {brand.about.yearEstablished} because I believe you shouldn't have to wait in line for a great haircut. Here, you get my full attention. No distractions, no rush, just professional service.
                </p>
              </div>

              {/* Certifications */}
              <div className="pt-4">
                <h3 className="mb-4 text-xl font-semibold">Training & Experience</h3>
                <div className="space-y-2">
                  {brand.about.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-men-primary" />
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
      <section className="section surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">What Makes Us Different</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10">
                <Scissors className="h-8 w-8 text-men-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Skill & Precision</h3>
              <p className="text-men-text-muted">
                Continuous training on the latest techniques. From classic cuts to modern fades, every detail matters.
              </p>
            </div>

            <div className="card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10">
                <Award className="h-8 w-8 text-men-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">No Wait, No Hassle</h3>
              <p className="text-men-text-muted">
                Your appointment time is your time. Private one on one service means you are in and out efficiently.
              </p>
            </div>

            <div className="card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10">
                <Sparkles className="h-8 w-8 text-men-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Professional Setup</h3>
              <p className="text-men-text-muted">
                All professional equipment, premium products, and a clean environment. Barbershop quality without the crowd.
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
                <p className="text-men-text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Look Sharp?"
        description="Book your appointment and experience quality men's grooming in Amsterdam."
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
