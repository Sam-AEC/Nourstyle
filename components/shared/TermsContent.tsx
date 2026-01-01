"use client";

import Link from "next/link";
import { brand } from "@/config/brand";
import { useI18n } from "@/lib/i18n-context";

interface Section {
  title: string;
  body: string[];
  list?: string[];
}

export function TermsContent() {
  const { locale } = useI18n();

  const content = locale === "nl"
    ? {
        back: "Terug naar Home",
        title: "Algemene Voorwaarden",
        updatedLabel: "Laatst bijgewerkt",
        updatedDate: "25 december 2025",
        sections: [
          {
            title: "1. Acceptatie",
            body: [
              `Door onze diensten te gebruiken ga je akkoord met deze voorwaarden. Als je niet akkoord gaat, maak dan geen afspraak bij ${brand.name}.`,
            ],
          },
          {
            title: "2. Diensten",
            body: [
              `${brand.name} levert haar en verzorgingsdiensten in Amsterdam. Denk aan knippen, kleuringen, styling en baardverzorging zoals beschreven op onze website.`,
            ],
          },
          {
            title: "3. Afspraken en boeken",
            body: ["Onze afspraken werken als volgt:"],
            list: [
              "Alle diensten zijn op afspraak",
              "Een afspraak is bevestigd na ontvangst van bevestiging per email of bericht",
              "Je bent verantwoordelijk voor correcte contactgegevens",
              "Kom op tijd zodat je volledige behandeling mogelijk is",
            ],
          },
          {
            title: "4. Annuleren en no show",
            body: [
              "Annuleren kan tot 24 uur van tevoren. Bij late annulering of no show kan een vergoeding van 50 procent van de dienstprijs worden gevraagd.",
              "Bij herhaalde no show kunnen we een aanbetaling vragen voor een volgende afspraak.",
            ],
          },
          {
            title: "5. Prijzen en betaling",
            body: ["Over prijzen en betaling:"],
            list: [
              "Prijzen kunnen varieren op basis van haarlengte en complexiteit",
              "Betaling gebeurt direct na de behandeling",
              "We accepteren contant, pin en digitale betalingen zoals iDeal of Tikkie",
              "Prijswijzigingen kunnen voorkomen, maar reeds geboekte afspraken behouden hun prijs",
            ],
          },
          {
            title: "6. Tevredenheid",
            body: [
              "We streven naar tevredenheid. Ben je niet blij met je resultaat, neem dan binnen 7 dagen contact op zodat we een oplossing kunnen bieden.",
            ],
          },
          {
            title: "7. Verantwoordelijkheden",
            body: ["Klanten worden gevraagd om:"],
            list: [
              "Eerlijke informatie te geven over haarverleden en gevoeligheden",
              "Duidelijk te communiceren over wensen",
              "Nazorgadviezen op te volgen",
              "Respectvol te handelen tegenover medewerkers en andere klanten",
            ],
          },
          {
            title: "8. Aansprakelijkheid",
            body: ["Onze aansprakelijkheid is beperkt:"],
            list: [
              "We werken met professionele producten en technieken",
              "We zijn niet aansprakelijk voor reacties als allergie niet is gemeld",
              "We zijn niet verantwoordelijk voor persoonlijke eigendommen",
              "Onze aansprakelijkheid is maximaal gelijk aan het bedrag van de behandeling",
            ],
          },
          {
            title: "9. Fotos en marketing",
            body: [
              "We kunnen fotos maken van kapsels voor portfolio, website en social media. Je kunt altijd aangeven dat je dit niet wilt.",
            ],
          },
          {
            title: "10. Gezondheid en veiligheid",
            body: [
              "We werken hygienisch en schoon. Geef het aan als je klachten hebt, zwanger bent, of gevoelig bent voor bepaalde producten.",
            ],
          },
          {
            title: "11. Intellectueel eigendom",
            body: [
              `Alle inhoud op deze website is eigendom van ${brand.name} en mag niet worden hergebruikt zonder toestemming.`,
            ],
          },
          {
            title: "12. Wijzigingen",
            body: [
              "We kunnen deze voorwaarden aanpassen. De nieuwste versie staat altijd op deze pagina.",
            ],
          },
          {
            title: "13. Toepasselijk recht",
            body: [
              "Deze voorwaarden vallen onder Nederlands recht. Eventuele geschillen worden behandeld in Amsterdam.",
            ],
          },
          {
            title: "14. Contact",
            body: [
              "Neem contact met ons op als je vragen hebt over deze voorwaarden.",
            ],
          },
        ] as Section[],
        contact: {
          name: brand.name,
          street: brand.contact.address.street,
          city: `${brand.contact.address.postalCode} ${brand.contact.address.city}`,
          emailLabel: "Email",
          phoneLabel: "Telefoon",
        },
      }
    : {
        back: "Back to Home",
        title: "Terms of Service",
        updatedLabel: "Last updated",
        updatedDate: "December 25, 2025",
        sections: [
          {
            title: "1. Agreement to Terms",
            body: [
              `By using our services you agree to these terms. If you do not agree, please do not book with ${brand.name}.`,
            ],
          },
          {
            title: "2. Services",
            body: [
              `${brand.name} provides hair and grooming services in Amsterdam, including haircuts, coloring, styling, and beard care as described on our website.`,
            ],
          },
          {
            title: "3. Appointments and Booking",
            body: ["Appointments work as follows:"],
            list: [
              "All services are by appointment",
              "An appointment is confirmed once you receive confirmation by email or message",
              "You are responsible for accurate contact details",
              "Arrive on time so your full service can be delivered",
            ],
          },
          {
            title: "4. Cancellation and No Show",
            body: [
              "You can cancel up to 24 hours in advance. Late cancellations or no show appointments may be charged 50 percent of the service price.",
              "Repeated no show bookings may require a deposit for future appointments.",
            ],
          },
          {
            title: "5. Pricing and Payment",
            body: ["Pricing and payment:"],
            list: [
              "Prices may vary based on hair length and complexity",
              "Payment is due at the time of service",
              "We accept cash, card, and digital payments such as iDeal or Tikkie",
              "Price changes may occur, but existing bookings keep their price",
            ],
          },
          {
            title: "6. Service Satisfaction",
            body: [
              "We aim for full satisfaction. If you are not happy with the result, contact us within 7 days so we can offer a solution.",
            ],
          },
          {
            title: "7. Client Responsibilities",
            body: ["Clients are expected to:"],
            list: [
              "Provide honest information about hair history and sensitivities",
              "Communicate desired results clearly",
              "Follow aftercare advice",
              "Treat staff and other clients with respect",
            ],
          },
          {
            title: "8. Liability",
            body: ["Our liability is limited:"],
            list: [
              "We use professional products and techniques",
              "We are not liable for reactions if allergies are not disclosed",
              "We are not responsible for personal belongings",
              "Liability is limited to the amount paid for the service",
            ],
          },
          {
            title: "9. Photos and Marketing",
            body: [
              "We may take photos of hairstyles for our portfolio, website, and social media. You can always opt out.",
            ],
          },
          {
            title: "10. Health and Safety",
            body: [
              "We maintain clean and hygienic practices. Let us know if you have any conditions, are pregnant, or are sensitive to certain products.",
            ],
          },
          {
            title: "11. Intellectual Property",
            body: [
              `All content on this website is the property of ${brand.name} and may not be reused without permission.`,
            ],
          },
          {
            title: "12. Changes to Terms",
            body: [
              "We may update these terms. The latest version will always be available on this page.",
            ],
          },
          {
            title: "13. Governing Law",
            body: [
              "These terms are governed by the laws of the Netherlands. Any disputes will be handled in Amsterdam.",
            ],
          },
          {
            title: "14. Contact",
            body: [
              "Contact us if you have questions about these terms.",
            ],
          },
        ] as Section[],
        contact: {
          name: brand.name,
          street: brand.contact.address.street,
          city: `${brand.contact.address.postalCode} ${brand.contact.address.city}`,
          emailLabel: "Email",
          phoneLabel: "Phone",
        },
      };

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-16">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-8 inline-block text-sm text-neutral-600 hover:text-neutral-900">
            {content.back}
          </Link>

          <h1 className="mb-8 text-4xl font-bold">{content.title}</h1>

          <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700">
            <p className="text-sm text-neutral-600">
              <strong>{content.updatedLabel}:</strong> {content.updatedDate}
            </p>

            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 text-2xl font-semibold text-neutral-900">{section.title}</h2>
                {section.body.map((paragraph, index) => (
                  <p key={`${section.title}-p-${index}`}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul className="list-disc space-y-2 pl-6">
                    {section.list.map((item) => (
                      <li key={`${section.title}-${item}`}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.title === "14. Contact" && (
                  <div className="mt-4 rounded-lg bg-neutral-50 p-6">
                    <p><strong>{content.contact.name}</strong></p>
                    <p>{content.contact.street}</p>
                    <p>{content.contact.city}</p>
                    <p className="mt-2">{content.contact.emailLabel}: {brand.contact.email}</p>
                    <p>{content.contact.phoneLabel}: {brand.contact.phone}</p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
