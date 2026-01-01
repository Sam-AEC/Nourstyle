import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${brand.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container py-16">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-8 inline-block text-sm text-neutral-600 hover:text-neutral-900">
            Back to Home
          </Link>

          <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

          <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700">
            <p className="text-sm text-neutral-600">
              <strong>Last Updated:</strong> December 25, 2025
            </p>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">1. Introduction</h2>
              <p>
                {brand.name} ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Contact Information:</strong> Name, email address, phone number</li>
                <li><strong>Appointment Details:</strong> Preferred services, dates, times, and special requests</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and website usage data</li>
                <li><strong>Communication Data:</strong> Messages you send us via contact forms, email, or WhatsApp</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Process and manage your appointments</li>
                <li>Communicate with you about services, confirmations, and reminders</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">4. Legal Basis (GDPR)</h2>
              <p>Under GDPR, we process your data based on:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Contract:</strong> To fulfill our agreement to provide salon services</li>
                <li><strong>Legitimate Interest:</strong> To operate and improve our business</li>
                <li><strong>Consent:</strong> When you opt in to marketing communications (you can withdraw consent anytime)</li>
                <li><strong>Legal Obligation:</strong> To comply with tax and business regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">5. Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share your information with:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Service Providers:</strong> Third party services that help us operate our business (e.g., Web3Forms for contact forms, booking platforms)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">6. Data Retention</h2>
              <p>
                We retain your personal data only as long as necessary for the purposes outlined in this policy or as required by law. Appointment records are typically kept for 2 years for business and tax purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">7. Your Rights (GDPR)</h2>
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
                <li><strong>Restriction:</strong> Limit how we use your data</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine readable format</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
                <li><strong>Withdraw Consent:</strong> If processing is based on consent</li>
              </ul>
              <p className="mt-4">
                To exercise your rights, contact us at {brand.contact.email}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">8. Cookies</h2>
              <p>
                Our website uses minimal cookies for essential functionality. We do not use tracking or advertising cookies without your consent. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">9. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">10. Third Party Links</h2>
              <p>
                Our website may contain links to third party websites (e.g., Instagram, booking platforms). We are not responsible for the privacy practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">11. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">12. Contact Us</h2>
              <p>
                If you have questions about this privacy policy or your data, please contact us:
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
