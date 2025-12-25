import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { brand, getWhatsAppLink, getGoogleMapsLink } from "@/config/brand";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface FooterProps {
  section?: "women" | "men";
}

export function Footer({ section }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const themeClass = section === "women" ? "theme-women" : section === "men" ? "theme-men" : "";

  return (
    <footer
      className={cn(
        "border-t",
        section === "women"
          ? "border-women-border bg-women-surface"
          : section === "men"
          ? "border-men-border bg-men-surface"
          : "border-neutral-100 bg-neutral-100"
      )}
    >
      <div className="container py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & About */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <h3 className={cn(
                "text-2xl font-bold",
                section === "women" ? "text-women-primary" : section === "men" ? "text-men-primary" : "text-neutral-900"
              )}>
                {brand.name}
              </h3>
            </Link>
            <p className={cn(
              "mb-4 max-w-md text-sm leading-relaxed",
              section === "men" ? "text-men-text-muted" : "text-women-text-muted"
            )}>
              {brand.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "rounded-full p-2 transition-colors",
                  section === "women"
                    ? "hover:bg-women-primary/10"
                    : section === "men"
                    ? "hover:bg-men-primary/10"
                    : "hover:bg-neutral-200"
                )}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={brand.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "rounded-full p-2 transition-colors",
                  section === "women"
                    ? "hover:bg-women-primary/10"
                    : section === "men"
                    ? "hover:bg-men-primary/10"
                    : "hover:bg-neutral-200"
                )}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href={getGoogleMapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:opacity-80"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  {brand.contact.address.street}<br />
                  {brand.contact.address.postalCode} {brand.contact.address.city}
                </span>
              </a>

              <a
                href={`tel:${brand.contact.phone}`}
                className="flex items-center gap-2 hover:opacity-80"
              >
                <Phone className="h-4 w-4" />
                {brand.contact.phone}
              </a>

              <a
                href={`mailto:${brand.contact.email}`}
                className="flex items-center gap-2 hover:opacity-80"
              >
                <Mail className="h-4 w-4" />
                {brand.contact.email}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 font-semibold">Opening Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  <p>Tue-Fri: {brand.hours.tuesday}</p>
                  <p>Sat: {brand.hours.saturday}</p>
                  <p className={section === "men" ? "text-men-text-muted" : "text-women-text-muted"}>
                    Sun-Mon: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={cn(
          "mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row",
          section === "women"
            ? "border-women-border"
            : section === "men"
            ? "border-men-border"
            : "border-neutral-200"
        )}>
          <p className={section === "men" ? "text-men-text-muted" : "text-women-text-muted"}>
            © {currentYear} {brand.name}. All rights reserved.
          </p>

          <div className="flex gap-6">
            {siteConfig.footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:opacity-80"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
