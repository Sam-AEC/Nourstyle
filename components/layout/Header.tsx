"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

interface HeaderProps {
  section: "women" | "men";
  navLinks: readonly { href: string; label: string }[];
}

export function Header({ section, navLinks }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const themeClass = section === "women" ? "theme-women" : "theme-men";
  const otherSection = section === "women" ? "men" : "women";
  const otherSectionLabel = section === "women" ? "Men's Section" : "Women's Section";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-sm",
        section === "women"
          ? "border-women-border bg-white/95"
          : "border-men-border bg-men-bg/95"
      )}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link
            href={`/${section}`}
            className="text-2xl font-bold tracking-tight md:text-3xl"
          >
            <span className={section === "women" ? "text-women-primary" : "text-men-primary"}>
              {brand.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:opacity-80",
                  section === "women" ? "text-women-text" : "text-men-text"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Switch Section Link */}
            <Link
              href={`/${otherSection}`}
              className={cn(
                "text-sm font-medium underline underline-offset-4 opacity-60 transition-opacity hover:opacity-100"
              )}
            >
              {otherSectionLabel}
            </Link>

            {/* Call Button */}
            <a
              href={`tel:${brand.contact.phone}`}
              className="btn btn-primary btn-sm"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium transition-colors hover:opacity-80"
                >
                  {link.label}
                </Link>
              ))}

              {/* Switch Section */}
              <Link
                href={`/${otherSection}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium underline underline-offset-4 opacity-60"
              >
                {otherSectionLabel}
              </Link>

              {/* Mobile Call Button */}
              <a
                href={`tel:${brand.contact.phone}`}
                className="btn btn-primary w-full"
              >
                <Phone className="h-4 w-4" />
                Call {brand.contact.phone}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
