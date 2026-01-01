import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/config/brand";
import { cancellationPolicy } from "@/config/services";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${brand.name}. Understand our policies and your rights when using our services.`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container py-16">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-8 inline-block text-sm text-neutral-600 hover:text-neutral-900">
            Back to Home
          </Link>

          <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>

          <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700">
            <p className="text-sm text-neutral-600">
              <strong>Last Updated:</strong> December 25, 2025
            </p>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">1. Agreement to Terms</h2>
              <p>
                By accessing or using the services of {brand.name}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">2. Services</h2>
              <p>
                {brand.name} provides professional hair salon and grooming services at our Amsterdam location. Services include haircuts, hair coloring, styling, beard grooming, and related treatments as described on our website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">3. Appointments & Booking</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>By Appointment Only:</strong> All services are provided by appointment. Walk ins may be accommodated based on availability.</li>
                <li><strong>Booking Confirmation:</strong> Appointments are confirmed once you receive a confirmation email or SMS.</li>
                <li><strong>Accuracy:</strong> You are responsible for providing accurate contact information and service preferences when booking.</li>
                <li><strong>Timeliness:</strong> Please arrive on time for your appointment. Late arrivals may result in shortened service time or rescheduling.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">4. Cancellation & No Show Policy</h2>
              <div className="rounded-lg bg-neutral-50 p-6">
                <p><strong>Notice Required:</strong> {cancellationPolicy.notice}</p>
                <p className="mt-2">{cancellationPolicy.text}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>To cancel or reschedule, contact us by phone, email, or WhatsApp</li>
                <li>Cancellations made within {cancellationPolicy.notice} or no shows may incur a fee of {cancellationPolicy.fee}</li>
                <li>Repeated no shows may result in requiring a deposit for future bookings</li>
                <li>Emergencies and exceptional circumstances will be handled on a case by case basis</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">5. Pricing & Payment</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Pricing:</strong> Prices are as listed on our website and may vary based on hair length, thickness, or service complexity</li>
                <li><strong>Payment:</strong> Payment is due at the time of service. We accept cash, card (PIN), and digital payments (iDeal/Tikkie)</li>
                <li><strong>Price Changes:</strong> We reserve the right to change prices with reasonable notice. Booked appointments honor the price at the time of booking</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">6. Service Guarantee</h2>
              <p>
                We strive for your complete satisfaction. If you're not happy with your service:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Contact us within 7 days of your appointment</li>
                <li>We will offer a complimentary adjustment or correction</li>
                <li>Refunds are not provided, but we will work to make it right</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">7. Client Responsibilities</h2>
              <p>Clients are expected to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Provide accurate information about hair history, allergies, and health conditions that may affect services</li>
                <li>Communicate clearly about desired results during consultation</li>
                <li>Follow aftercare instructions provided by the stylist</li>
                <li>Respect the stylist's professional judgment and expertise</li>
                <li>Behave respectfully and appropriately at all times</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">8. Liability</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Professional Service:</strong> We use professional grade products and techniques. Results may vary based on hair condition and type</li>
                <li><strong>Allergies & Reactions:</strong> We are not liable for allergic reactions if you fail to disclose known allergies or decline a patch test</li>
                <li><strong>Personal Belongings:</strong> We are not responsible for loss or damage to personal items brought to the salon</li>
                <li><strong>Limitation:</strong> Our liability is limited to the price paid for the service in question</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">9. Photography & Marketing</h2>
              <p>
                We may take photos of hairstyles for our portfolio, website, and social media. By using our services, you consent to such photography unless you explicitly opt out. Your face may be blurred or cropped for privacy if requested.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">10. Health & Safety</h2>
              <p>
                We maintain high standards of hygiene and sanitation. All tools are properly cleaned and sanitized between clients. Please inform us if you:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Have any contagious conditions</li>
                <li>Are pregnant or nursing (important for certain color services)</li>
                <li>Have scalp sensitivities or skin conditions</li>
                <li>Are taking medications that may affect hair or skin</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">11. Intellectual Property</h2>
              <p>
                All content on this website, including text, images, logos, and design, is the property of {brand.name} and protected by copyright. You may not reproduce, distribute, or use our content without permission.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">12. Changes to Terms</h2>
              <p>
                We may update these Terms of Service from time to time. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">13. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Netherlands. Any disputes shall be resolved in the courts of Amsterdam.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">14. Contact Information</h2>
              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 rounded-lg bg-neutral-50 p-6">
                <p><strong>{brand.name}</strong></p>
                <p>{brand.contact.address.street}</p>
                <p>{brand.contact.address.postalCode} {brand.contact.address.city}</p>
                <p className="mt-2">Email: {brand.contact.email}</p>
                <p>Phone: {brand.contact.phone}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
