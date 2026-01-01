"use client";

import Image from "next/image";
import { Award, Scissors, Sparkles, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { brand } from "@/config/brand";
import { imageConfig } from "@/config/images";
import { useI18n } from "@/lib/i18n-context";

export function MenAboutContent() {
  const { locale, t } = useI18n();

  const content = locale === "nl"
    ? {
        title: `Over ${brand.name}`,
        subtitle: "Jouw prive barbershop in Amsterdam",
        introTitle: "Welkom in de Stoel",
        intro: [
          `Ik ben een professionele barber met ${brand.about.experience} in herenverzorging, gespecialiseerd in moderne kapsels, klassieke fades en precisie baardwerk.`,
          "Of je nu een strakke zakelijke coupe wilt, een frisse fade of een complete verzorgingssessie, ik focus op constante kwaliteit.",
          "Ik geloof in eerst goed luisteren. Door grondig overleg zorg ik dat je precies de look krijgt die je wilt. Of het nu gaat om een frisse kleur of een strakke fade, ik zet me in voor salonkwaliteit in een ontspannen, persoonlijke setting.",
          `Ik opende deze prive barbershop in ${brand.about.yearEstablished} omdat ik geloof dat je niet hoeft te wachten voor een goede knipbeurt. Hier krijg je mijn volledige aandacht. Geen afleiding, geen haast, alleen professionele service.`,
        ],
        trainingTitle: "Training en Ervaring",
        certifications: [
          "Gediplomeerd stylist",
          "Kleur specialist certificaat",
          "Barber training certificaat",
        ],
        valuesTitle: "Wat Maakt Ons Anders",
        values: [
          {
            title: "Vaardigheid en Precisie",
            description: "Doorlopende training in de nieuwste technieken. Van klassieke coupes tot moderne fades, elk detail telt.",
            icon: Scissors,
          },
          {
            title: "Geen Wachttijd, Geen Gedoe",
            description: "Je afspraak is jouw moment. Prive een op een service zorgt voor een vlotte en relaxte ervaring.",
            icon: Award,
          },
          {
            title: "Professionele Setup",
            description: "Professionele apparatuur, premium producten en een schone omgeving. Barbershop kwaliteit zonder de drukte.",
            icon: Sparkles,
          },
        ],
        faqTitle: "Veelgestelde Vragen",
        faq: [
          {
            question: "Doe je moderne fades en trendy herenstijlen?",
            answer: "Ja. Ik heb ervaring met moderne herenstijlen zoals skin fades, tapers, getextureerde coupes en klassieke knipbeurten. Ik blijf bij via trainingen.",
          },
          {
            question: "Hoe vaak moet ik knippen?",
            answer: "Voor fades en korte stijlen is elke 2 tot 3 weken ideaal. Voor langere stijlen is 4 tot 6 weken normaal. Ik adviseer op basis van jouw kapsel en haargroei.",
          },
          {
            question: "Accepteer je inloop?",
            answer: "Ik werk op afspraak voor kwaliteit en geen wachttijd. Toch heb ik vaak ruimte voor dezelfde dag of volgende dag. Bel of stuur een bericht.",
          },
          {
            question: "Wat zit er in de knipbeurt en baard combo?",
            answer: "Je krijgt een volledige knipbeurt, baard trim en vorm, warme handdoek behandeling en styling. Het complete pakket tegen een pakketprijs.",
          },
          {
            question: "Is parkeren mogelijk?",
            answer: "Ja, gratis parkeren in de buurt. Ook goed bereikbaar met openbaar vervoer, 5 minuten lopen vanaf de tram.",
          },
        ],
        ctaTitle: "Klaar voor een frisse look?",
        ctaDesc: "Boek je afspraak en ervaar professionele herenverzorging in Amsterdam.",
        ctaSecondary: "Neem Contact Op",
      }
    : {
        title: `About ${brand.name}`,
        subtitle: "Your private barbershop in Amsterdam",
        introTitle: "Welcome to the Chair",
        intro: [
          `I'm a professional barber with ${brand.about.experience} in men's grooming, specializing in modern cuts, classic fades, and precision beard work.`,
          "Whether you want a sharp business cut, a fresh fade, or a complete grooming session, I focus on delivering consistent quality every single time.",
          brand.about.approach,
          `I opened this private barbershop in ${brand.about.yearEstablished} because I believe you should not have to wait in line for a great haircut. Here, you get my full attention. No distractions, no rush, just professional service.`,
        ],
        trainingTitle: "Training and Experience",
        certifications: [
          "Licensed Professional Stylist",
          "Color Specialist Certification",
          "Barber Training Certificate",
        ],
        valuesTitle: "What Makes Us Different",
        values: [
          {
            title: "Skill and Precision",
            description: "Continuous training on the latest techniques. From classic cuts to modern fades, every detail matters.",
            icon: Scissors,
          },
          {
            title: "No Wait, No Hassle",
            description: "Your appointment time is your time. Private one on one service means you are in and out efficiently.",
            icon: Award,
          },
          {
            title: "Professional Setup",
            description: "All professional equipment, premium products, and a clean environment. Barbershop quality without the crowd.",
            icon: Sparkles,
          },
        ],
        faqTitle: "Frequently Asked Questions",
        faq: [
          {
            question: "Do you do modern fades and trendy men's styles?",
            answer: "Yes. I'm experienced in all current men's styles, skin fades, tapers, textured crops, and classic cuts. I stay updated on trends and techniques through regular training.",
          },
          {
            question: "How often should I get a haircut?",
            answer: "For fades and short styles, every 2 to 3 weeks keeps you looking sharp. For longer styles, 4 to 6 weeks is typical. I'll recommend a schedule based on your specific haircut and how fast your hair grows.",
          },
          {
            question: "Do you accept walk ins?",
            answer: "I operate by appointment to ensure quality service and no waiting. However, I keep flexible hours and can often accommodate same day or next day bookings. Just call or message me.",
          },
          {
            question: "What is included in the haircut and beard combo?",
            answer: "You get a full haircut, beard trim and shaping, hot towel treatment, and styling. It is the complete grooming experience at a package price.",
          },
          {
            question: "Is parking available?",
            answer: "Yes, free street parking is available in the neighborhood. The salon is also easily accessible by public transport, 5 minute walk from tram stop.",
          },
        ],
        ctaTitle: "Ready to Look Sharp?",
        ctaDesc: "Book your appointment and experience quality men's grooming in Amsterdam.",
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

              <div className="space-y-4 text-men-text-muted">
                {content.intro.map((paragraph, index) => (
                  <p key={`intro-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4">
                <h3 className="mb-4 text-xl font-semibold">{content.trainingTitle}</h3>
                <div className="space-y-2">
                  {content.certifications.map((cert, index) => (
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

      <section className="section surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">{content.valuesTitle}</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.values.map((value) => (
              <div key={value.title} className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10">
                  <value.icon className="h-8 w-8 text-men-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-men-text-muted">
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
                <p className="text-men-text-muted">{item.answer}</p>
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
          href: "/men/contact",
        }}
        section="men"
      />
    </>
  );
}
