"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { brand, getWhatsAppLink, getGoogleMapsLink, formatPhone } from "@/config/brand";
import { menServices } from "@/config/services";
import { useI18n } from "@/lib/i18n-context";

export function MenContactContent() {
  const { locale, t } = useI18n();

  const serviceNames = menServices.map((service) => {
    const nameKey = `services.items.${service.id}.name`;
    const translated = t(nameKey);
    return translated !== nameKey ? translated : service.name;
  });

  const content = locale === "nl"
    ? {
      title: "Neem Contact Op",
      subtitle: "Vragen? Wil je boeken? Neem gerust contact op.",
      bookTitle: "Boek Online",
      bookDesc: "24 7 online planning",
      callTitle: "Bel Ons",
      chatTitle: "WhatsApp",
      chatDesc: "Snel bericht",
      emailTitle: "Email",
      formTitle: "Stuur Ons een Bericht",
      visitTitle: "Bezoek Ons",
      locationTitle: "Locatie",
      directions: "Route",
      scheduleTitle: "Flexibele Planning",
      scheduleDesc: "Afspraken op basis van beschikbaarheid. Boek online om beschikbare tijden te zien.",
      scheduleLink: "Bekijk Beschikbare Tijden",
      mapTitle: "Salon Locatie",
      parkingTitle: "Parkeren en Vervoer",
      parkingDesc: "Gratis parkeren in de buurt. Ook goed bereikbaar met openbaar vervoer, 5 minuten lopen vanaf de tram.",
      directTitle: "Liever Direct Boeken?",
      directDesc: "Gebruik het online boekingssysteem om tijden te bekijken en direct te reserveren.",
      directCta: "Boek Afspraak",
    }
    : {
      title: "Get in Touch",
      subtitle: "Questions? Want to book? Reach out anytime!",
      bookTitle: "Book Online",
      bookDesc: "24 7 online scheduling",
      callTitle: "Call Us",
      chatTitle: "WhatsApp",
      chatDesc: "Quick chat",
      emailTitle: "Email",
      formTitle: "Send Us a Message",
      visitTitle: "Visit Us",
      locationTitle: "Location",
      directions: "Get Directions",
      scheduleTitle: "Flexible Scheduling",
      scheduleDesc: "Appointments available based on calendar availability. Book online to see real time open slots.",
      scheduleLink: "Check Available Times",
      mapTitle: "Salon Location",
      parkingTitle: "Parking and Transport",
      parkingDesc: "Free street parking available in the neighborhood. Also easily accessible by public transport, 5 minute walk from tram stop.",
      directTitle: "Prefer to Book Directly?",
      directDesc: "Use our online booking system to see available times and reserve your spot in seconds.",
      directCta: "Book Appointment",
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
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a
              href={getGoogleMapsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="card group text-center transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10 transition-colors group-hover:bg-men-primary">
                <MapPin className="h-8 w-8 text-men-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 font-semibold">{content.locationTitle}</h3>
              <p className="text-sm text-men-text-muted">
                {brand.contact.address.street}, {brand.contact.address.city}
              </p>
            </a>

            <a
              href={brand.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group text-center transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10 transition-colors group-hover:bg-men-primary">
                <Calendar className="h-8 w-8 text-men-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 font-semibold">{content.bookTitle}</h3>
              <p className="text-sm text-men-text-muted">
                {content.bookDesc}
              </p>
            </a>

            <a
              href={`tel:${brand.contact.phone}`}
              className="card group text-center transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10 transition-colors group-hover:bg-men-primary">
                <Phone className="h-8 w-8 text-men-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 font-semibold">{content.callTitle}</h3>
              <p className="text-sm text-men-text-muted">
                {formatPhone(brand.contact.phone)}
              </p>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="card group text-center transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10 transition-colors group-hover:bg-men-primary">
                <MessageCircle className="h-8 w-8 text-men-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 font-semibold">{content.chatTitle}</h3>
              <p className="text-sm text-men-text-muted">
                {content.chatDesc}
              </p>
            </a>

            <a
              href={`mailto:${brand.contact.email}`}
              className="card group text-center transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10 transition-colors group-hover:bg-men-primary">
                <Mail className="h-8 w-8 text-men-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 font-semibold">{content.emailTitle}</h3>
              <p className="text-sm text-men-text-muted">
                {brand.contact.email}
              </p>
            </a>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl">{content.formTitle}</h2>
              <ContactForm section="men" services={serviceNames} />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl">{content.visitTitle}</h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-men-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">{content.locationTitle}</h3>
                      <p className="text-men-text-muted">
                        {brand.contact.address.street}<br />
                        {brand.contact.address.postalCode} {brand.contact.address.city}<br />
                        {brand.contact.address.country}
                      </p>
                      <a
                        href={getGoogleMapsLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm mt-3 inline-flex items-center gap-2"
                      >
                        <MapPin className="h-4 w-4" />
                        {content.directions}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-men-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">{content.scheduleTitle}</h3>
                      <p className="text-sm text-men-text-muted">
                        {content.scheduleDesc}
                      </p>
                      <a
                        href={brand.booking.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm text-men-primary hover:underline"
                      >
                        {content.scheduleLink}
                      </a>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg border border-men-border">
                    <div className="aspect-video bg-men-surface">
                      <iframe
                        src="https://maps.google.com/maps?q=Van+Zuylenstraat+21,+'s-Hertogenbosch&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={content.mapTitle}
                      />
                    </div>
                  </div>

                  <div className="rounded-lg bg-men-surface p-4">
                    <h4 className="mb-2 font-semibold">{content.parkingTitle}</h4>
                    <p className="text-sm text-men-text-muted">
                      {content.parkingDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4">{content.directTitle}</h2>
            <p className="mb-8 text-lg text-men-text-muted">
              {content.directDesc}
            </p>
            <a
              href={brand.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <Calendar className="h-5 w-5" />
              {content.directCta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
