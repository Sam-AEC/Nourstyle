import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { brand, getWhatsAppLink, getGoogleMapsLink, formatPhone } from "@/config/brand";
import { menServices } from "@/config/services";
import { generateMetadata } from "@/config/site";

export const metadata: Metadata = generateMetadata({
  title: "Contact & Book Appointment",
  description: `Get in touch with ${brand.name}. Book online, call, or message us. Located in ${brand.contact.address.city}.`,
  path: "/men/contact",
});

export default function MenContactPage() {
  // Get unique service names for the form
  const serviceNames = menServices.map(s => s.name);

  return (
    <>
      {/* Header */}
      <section className="section-sm surface">
        <div className="container-narrow text-center">
          <h1 className="mb-6">Get in Touch</h1>
          <p className="text-lg text-men-text-muted">
            Questions? Want to book? Reach out anytime!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section">
        <div className="container">
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Book Online */}
            <a
              href={brand.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group text-center transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10 transition-colors group-hover:bg-men-primary">
                <Calendar className="h-8 w-8 text-men-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 font-semibold">Book Online</h3>
              <p className="text-sm text-men-text-muted">
                24/7 online scheduling
              </p>
            </a>

            {/* Call */}
            <a
              href={`tel:${brand.contact.phone}`}
              className="card group text-center transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10 transition-colors group-hover:bg-men-primary">
                <Phone className="h-8 w-8 text-men-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 font-semibold">Call Us</h3>
              <p className="text-sm text-men-text-muted">
                {formatPhone(brand.contact.phone)}
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="card group text-center transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10 transition-colors group-hover:bg-men-primary">
                <MessageCircle className="h-8 w-8 text-men-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 font-semibold">WhatsApp</h3>
              <p className="text-sm text-men-text-muted">
                Quick chat
              </p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${brand.contact.email}`}
              className="card group text-center transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-men-primary/10 transition-colors group-hover:bg-men-primary">
                <Mail className="h-8 w-8 text-men-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 font-semibold">Email</h3>
              <p className="text-sm text-men-text-muted">
                {brand.contact.email}
              </p>
            </a>
          </div>

          {/* Contact Form & Info */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="mb-6 text-2xl">Send Us a Message</h2>
              <ContactForm section="men" services={serviceNames} />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl">Visit Us</h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-men-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Location</h3>
                      <p className="text-men-text-muted">
                        {brand.contact.address.street}<br />
                        {brand.contact.address.postalCode} {brand.contact.address.city}<br />
                        {brand.contact.address.country}
                      </p>
                      <a
                        href={getGoogleMapsLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm text-men-primary hover:underline"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  {/* Booking Availability */}
                  <div className="flex gap-4">
                    <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-men-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Flexible Scheduling</h3>
                      <p className="text-sm text-men-text-muted">
                        Appointments available based on calendar availability. Book online to see real-time open slots.
                      </p>
                      <a
                        href={brand.booking.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm text-men-primary hover:underline"
                      >
                        Check Available Times →
                      </a>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="overflow-hidden rounded-lg border border-men-border">
                    <div className="aspect-video bg-men-surface">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.1234567890!2d4.895!3d52.367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzAxLjIiTiA0wrA1Myc0Mi4wIkU!5e0!3m2!1sen!2snl!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Salon Location"
                      />
                    </div>
                  </div>

                  {/* Parking Info */}
                  <div className="rounded-lg bg-men-surface p-4">
                    <h4 className="mb-2 font-semibold">Parking & Transport</h4>
                    <p className="text-sm text-men-text-muted">
                      Free street parking available in the neighborhood. Also easily accessible by public transport (5-minute walk from tram stop).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Book CTA */}
      <section className="section surface">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4">Prefer to Book Directly?</h2>
            <p className="mb-8 text-lg text-men-text-muted">
              Use our online booking system to see available times and reserve your spot in seconds.
            </p>
            <a
              href={brand.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <Calendar className="h-5 w-5" />
              {brand.cta.primary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
