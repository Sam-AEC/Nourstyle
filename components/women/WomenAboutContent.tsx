"use client";

import Image from "next/image";
import { Award, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { brand } from "@/config/brand";
import { imageConfig } from "@/config/images";
import { useI18n } from "@/lib/i18n-context";

export function WomenAboutContent() {
  const { locale, t } = useI18n();

  const content = locale === "nl"
    ? {
        title: `Over ${brand.name}`,
        subtitle: "Een op een aandacht in een prive, professionele setting.",
        introTitle: "Hallo, ik ben jouw stylist",
        intro: [
          `Welkom bij ${brand.name}. Ik help vrouwen zich zelfverzekerd en mooi te voelen met persoonlijke haarstyling.`,
          `Met ${brand.about.experience} in het vak heb ik mijn vaardigheden verfijnd van precisie knippen tot geavanceerde kleurtechnieken. Ik specialiseer in balayage, kleur met dimensie en stijlen die passen bij jouw natuurlijke textuur en lifestyle.`,
          "Ik geloof in eerst goed luisteren. Door grondig overleg zorg ik dat je precies de look krijgt die je wilt. Of het nu gaat om een frisse kleur of een scherpe coupe, ik zet me in voor salonkwaliteit in een ontspannen, persoonlijke setting.",
          `Mijn thuissalon is gestart in ${brand.about.yearEstablished} om een alternatief te bieden voor drukke en gehaaste afspraken. Hier zijn we met zijn twee. Geen afleiding, geen wachten, alleen aandacht voor jouw haarwensen.`,
        ],
        trainingTitle: "Opleiding en Training",
        certifications: [
          "Gediplomeerd stylist",
          "Kleur specialist certificaat",
          "Styling training certificaat",
        ],
        valuesTitle: "Wat Maakt Ons Anders",
        values: [
          {
            title: "Expertise",
            description: "Doorlopende training om bij te blijven met nieuwe technieken en trends. Jouw haar verdient het beste.",
            icon: Award,
          },
          {
            title: "Persoonlijke Aandacht",
            description: "Een stylist, een klant. Ik leer jouw haar, voorkeuren en doelen kennen. Je bent geen nummer.",
            icon: Heart,
          },
          {
            title: "Premium Producten",
            description: "Alleen professionele producten van L Oreal, Schwarzkopf en Redken. Gezond haar staat voorop.",
            icon: Sparkles,
          },
        ],
        faqTitle: "Veelgestelde Vragen",
        faq: [
          {
            question: "Welke haarservices doe je?",
            answer: "Ik doe alle aspecten van dames haarverzorging, precisie knippen, creatieve kleuringen zoals balayage, highlights en full color, en styling voor speciale gelegenheden. Sinds 2022 heb ik mijn vak verfijnd en gewerkt met alle haartypes.",
          },
          {
            question: "Is een thuissalon net zo professioneel als een traditionele salon?",
            answer: "Zeker. Mijn thuisstudio is een professionele ruimte met salon apparatuur en producten. Het voordeel is dat je een op een aandacht krijgt in een rustige, prive omgeving zonder drukte.",
          },
          {
            question: "Hoe lang duurt een kleurafspraak?",
            answer: "Dat hangt af van de behandeling. Een uitgroei bijwerken duurt ongeveer 90 minuten, terwijl full highlights of balayage 2.5 tot 3 uur kan duren. Ik geef altijd een duidelijke tijdsinschatting.",
          },
          {
            question: "Welke merken gebruik je?",
            answer: "Ik gebruik professionele producten van merken zoals L Oreal, Schwarzkopf en Redken. Alle kleurproducten zijn ammoniak vrij en geschikt voor gevoelige hoofdhuid.",
          },
          {
            question: "Mag ik inspiratie fotos meenemen?",
            answer: "Graag. Fotos helpen om je wensen te begrijpen. Ik vertel je of de look haalbaar is en wat de beste aanpak is.",
          },
        ],
        ctaTitle: "Klaar om het verschil te ervaren?",
        ctaDesc: "Boek je eerste afspraak en ontdek persoonlijke haarzorg in Amsterdam.",
        ctaSecondary: "Neem Contact Op",
      }
    : {
        title: `About ${brand.name}`,
        subtitle: brand.about.tagline,
        introTitle: "Hello, I am Your Stylist",
        intro: [
          `Welcome to ${brand.name}. I am passionate about helping women feel confident and beautiful through personalized hair styling.`,
          `With ${brand.about.experience} in the industry, I have honed my skills in everything from precision cutting to advanced coloring techniques. I specialize in balayage, dimensional color, and creating styles that work with your natural texture and lifestyle.`,
          brand.about.approach,
          `My home salon was founded in ${brand.about.yearEstablished} to offer an alternative to crowded, rushed appointments. Here, it is just you and me. No distractions, no waiting, just quality time focused on your hair goals.`,
        ],
        trainingTitle: "Credentials and Training",
        certifications: [
          "Licensed Professional Stylist",
          "Color Specialist Certification",
          "Styling Training Certificate",
        ],
        valuesTitle: "What Makes Us Different",
        values: [
          {
            title: "Expertise",
            description: "Continuous education and training to stay on top of the latest techniques and trends. Your hair deserves the best.",
            icon: Award,
          },
          {
            title: "Personal Touch",
            description: "One stylist, one client. I get to know your hair, your preferences, and your goals. You are not just another appointment.",
            icon: Heart,
          },
          {
            title: "Premium Products",
            description: "Only professional grade products from L Oreal, Schwarzkopf, and Redken. Your hair health is a priority.",
            icon: Sparkles,
          },
        ],
        faqTitle: "Frequently Asked Questions",
        faq: [
          {
            question: "What hair services do you specialize in?",
            answer: "I specialize in all aspects of women hair care, precision cuts, creative coloring like balayage, highlights, full color, and special occasion styling. Since 2022, I have been dedicated to perfecting my craft and have worked with all hair types and textures.",
          },
          {
            question: "Is a home salon as professional as a traditional salon?",
            answer: "Absolutely. My home studio is a dedicated, professional space with salon grade equipment and products. The advantage is you get one on one attention in a private, relaxed environment without the hustle of a busy salon.",
          },
          {
            question: "How long does a color appointment take?",
            answer: "It depends on the service. Simple root touch ups take about 90 minutes, while full highlights or balayage can take 2.5 to 3 hours. I always prioritize quality over speed, and I will give you an accurate time estimate during your consultation.",
          },
          {
            question: "What brands do you use?",
            answer: "I use professional grade products from trusted brands like L Oreal, Schwarzkopf, and Redken. All color products are ammonia free options available for sensitive scalps.",
          },
          {
            question: "Can I bring inspiration photos?",
            answer: "Please do. Photos are incredibly helpful for understanding your vision. I will let you know if the look is achievable for your hair type and discuss the best approach.",
          },
        ],
        ctaTitle: "Ready to Experience the Difference?",
        ctaDesc: "Book your first appointment and discover personalized hair care in Amsterdam.",
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={imageConfig.stylistPortrait}
                alt={content.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <h2>{content.introTitle}</h2>

              <div className="space-y-4 text-women-text-muted">
                {content.intro.map((paragraph, index) => (
                  <p key={`intro-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4">
                <h3 className="mb-4 text-xl font-semibold">{content.trainingTitle}</h3>
                <div className="space-y-2">
                  {content.certifications.map((cert, index) => (
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

      <section className="section bg-women-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">{content.valuesTitle}</h2>
          </div>

        <div className="grid gap-8 md:grid-cols-3">
            {content.values.map((value) => (
              <div key={value.title} className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-women-primary/10">
                  <value.icon className="h-8 w-8 text-women-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-women-text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <h2 className="mb-12 text-center">{content.faqTitle}</h2>

          <div className="space-y-6">
            {content.faq.map((item) => (
              <div key={item.question} className="card">
                <h3 className="mb-3 text-lg font-semibold">{item.question}</h3>
                <p className="text-women-text-muted">{item.answer}</p>
              </div>
            ))}
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
