"use client";

import Link from "next/link";
import { brand } from "@/config/brand";
import { useI18n } from "@/lib/i18n-context";

interface Section {
  title: string;
  body: string[];
  list?: string[];
}

export function PrivacyContent() {
  const { locale } = useI18n();

  const content = locale === "nl"
    ? {
        back: "Terug naar Home",
        title: "Privacybeleid",
        updatedLabel: "Laatst bijgewerkt",
        updatedDate: "25 december 2025",
        sections: [
          {
            title: "1. Introductie",
            body: [
              `${brand.name} respecteert je privacy en beschermt je persoonsgegevens. Dit beleid legt uit hoe we informatie verzamelen, gebruiken en beveiligen wanneer je onze website of diensten gebruikt.`,
            ],
          },
          {
            title: "2. Welke informatie we verzamelen",
            body: ["We kunnen de volgende informatie verzamelen:"],
            list: [
              "Contactgegevens zoals naam, emailadres en telefoonnummer",
              "Afspraakgegevens zoals gewenste diensten, datums en tijden",
              "Technische gegevens zoals IP adres, browser en apparaatgegevens",
              "Communicatiegegevens zoals berichten via formulieren, email of WhatsApp",
            ],
          },
          {
            title: "3. Hoe we je informatie gebruiken",
            body: ["We gebruiken je informatie om:"],
            list: [
              "Afspraken te plannen en te beheren",
              "Met je te communiceren over bevestigingen en vragen",
              "Klantenservice te bieden",
              "Onze website en diensten te verbeteren",
              "Aan wettelijke verplichtingen te voldoen",
            ],
          },
          {
            title: "4. Wettelijke basis",
            body: ["Volgens de AVG verwerken we je gegevens op basis van:"],
            list: [
              "Een overeenkomst om onze diensten te leveren",
              "Gerechtvaardigd belang om onze onderneming te runnen",
              "Toestemming als je marketing accepteert",
              "Wettelijke verplichtingen",
            ],
          },
          {
            title: "5. Delen van gegevens",
            body: [
              "We verkopen je gegevens niet. We delen gegevens alleen met dienstverleners die helpen met onze werking, zoals het contactformulier of het boekingssysteem, of wanneer de wet dit vereist.",
            ],
          },
          {
            title: "6. Bewaartermijn",
            body: [
              "We bewaren persoonsgegevens zolang dat nodig is voor de doelen van dit beleid. Afspraakgegevens bewaren we meestal 2 jaar voor administratie en belasting.",
            ],
          },
          {
            title: "7. Jouw rechten",
            body: ["Je hebt het recht om:"],
            list: [
              "Inzage te vragen in je gegevens",
              "Onjuiste gegevens te laten corrigeren",
              "Gegevens te laten verwijderen wanneer dat kan",
              "Gebruik van gegevens te beperken",
              "Gegevens over te dragen",
              "Bezwaar te maken tegen verwerking",
              "Toestemming in te trekken",
            ],
          },
          {
            title: "8. Cookies",
            body: [
              "We gebruiken alleen noodzakelijke cookies voor basisfunctionaliteit. We gebruiken geen tracking of advertentiecookies zonder toestemming. Je kunt cookies beheren in je browserinstellingen.",
            ],
          },
          {
            title: "9. Beveiliging",
            body: [
              "We nemen passende technische en organisatorische maatregelen om je gegevens te beschermen. Geen enkele internetverbinding is volledig veilig.",
            ],
          },
          {
            title: "10. Externe links",
            body: [
              "Onze website kan links bevatten naar externe sites zoals Instagram of een boekingssysteem. We zijn niet verantwoordelijk voor hun privacybeleid.",
            ],
          },
          {
            title: "11. Wijzigingen",
            body: [
              "We kunnen dit beleid aanpassen. Nieuwe versies plaatsen we op deze pagina met een bijgewerkte datum.",
            ],
          },
          {
            title: "12. Contact",
            body: [
              "Neem contact met ons op als je vragen hebt over dit beleid of je gegevens.",
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
        title: "Privacy Policy",
        updatedLabel: "Last updated",
        updatedDate: "December 25, 2025",
        sections: [
          {
            title: "1. Introduction",
            body: [
              `${brand.name} respects your privacy and protects your personal data. This policy explains how we collect, use, and safeguard information when you use our website or services.`,
            ],
          },
          {
            title: "2. Information We Collect",
            body: ["We may collect the following information:"],
            list: [
              "Contact information such as name, email address, and phone number",
              "Appointment details such as services, dates, and times",
              "Technical data such as IP address, browser, and device information",
              "Communication data such as messages via forms, email, or WhatsApp",
            ],
          },
          {
            title: "3. How We Use Your Information",
            body: ["We use your information to:"],
            list: [
              "Schedule and manage appointments",
              "Communicate about confirmations and questions",
              "Provide customer support",
              "Improve our website and services",
              "Comply with legal obligations",
            ],
          },
          {
            title: "4. Legal Basis",
            body: ["Under GDPR we process data based on:"],
            list: [
              "A contract to deliver our services",
              "Legitimate interest to run our business",
              "Consent when you opt in to marketing",
              "Legal obligations",
            ],
          },
          {
            title: "5. Data Sharing",
            body: [
              "We do not sell your data. We only share data with service providers that help us operate, such as the contact form or booking system, or when required by law.",
            ],
          },
          {
            title: "6. Data Retention",
            body: [
              "We keep personal data only as long as needed for the purposes in this policy. Appointment records are usually kept for 2 years for administration and tax purposes.",
            ],
          },
          {
            title: "7. Your Rights",
            body: ["You have the right to:"],
            list: [
              "Request access to your data",
              "Correct inaccurate data",
              "Request deletion when possible",
              "Restrict how data is used",
              "Receive your data in a portable format",
              "Object to certain processing",
              "Withdraw consent",
            ],
          },
          {
            title: "8. Cookies",
            body: [
              "We use only necessary cookies for basic functionality. We do not use tracking or advertising cookies without consent. You can manage cookies in your browser settings.",
            ],
          },
          {
            title: "9. Security",
            body: [
              "We take appropriate technical and organizational measures to protect your data. No internet transmission is fully secure.",
            ],
          },
          {
            title: "10. External Links",
            body: [
              "Our website may contain links to external sites such as Instagram or a booking system. We are not responsible for their privacy practices.",
            ],
          },
          {
            title: "11. Changes",
            body: [
              "We may update this policy. New versions will be posted here with an updated date.",
            ],
          },
          {
            title: "12. Contact",
            body: [
              "Contact us if you have questions about this policy or your data.",
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
                {section.title === "12. Contact" && (
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
