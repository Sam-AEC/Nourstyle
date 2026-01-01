"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ArrowRight, Globe } from "lucide-react";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";

interface HeaderProps {
  section: "women" | "men";
  navLinks: readonly { href: string; label: string }[];
}

export function Header({ section, navLinks }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleLocale = () => setLocale(locale === 'en' ? 'nl' : 'en');

  const otherSection = section === "women" ? "men" : "women";
  const otherSectionLabel = t(section === "women" ? "nav.switch_men" : "nav.switch_women");

  // Map the navLinks to use translated labels
  // We infer the key from the href (e.g., /women/services -> nav.services)
  const translatedLinks = navLinks.map(link => {
    const key = `nav.${link.href.split('/').pop() || 'home'}`;
    // Special case for root paths if needed, but 'home' covers it usually if href is just /women
    const translationKey = link.href.endsWith(section) ? 'nav.home' : key;
    return {
      ...link,
      label: t(translationKey)
    };
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300",
        section === "women"
          ? "border-women-border/50 bg-white/80 supports-[backdrop-filter]:bg-white/60"
          : "border-men-border/50 bg-men-bg/80 supports-[backdrop-filter]:bg-men-bg/60"
      )}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            <span className={cn(
              "text-2xl font-bold font-heading tracking-tight md:text-3xl transition-colors",
              section === "women" ? "text-women-primary" : "text-men-primary"
            )}>
              {brand.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {translatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-opacity-80 relative group",
                  section === "women" ? "text-women-text" : "text-men-text"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full",
                  section === "women" ? "bg-women-primary" : "bg-men-primary"
                )} />
              </Link>
            ))}

            <div className="h-4 w-px bg-neutral-200/50 mx-2" />

            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80",
                section === "women" ? "text-women-text" : "text-men-text"
              )}
            >
              <Globe className="h-4 w-4" />
              <span>{locale.toUpperCase()}</span>
            </button>

            {/* Switch Section Link */}
            <Link
              href={`/${otherSection}`}
              className={cn(
                "text-sm font-medium transition-all hover:opacity-100 opacity-60 flex items-center gap-1",
                section === "women" ? "text-women-text" : "text-men-text"
              )}
            >
              {otherSectionLabel}
            </Link>

            {/* Call Button */}
            <a
              href={`tel:${brand.contact.phone}`}
              className="btn btn-primary btn-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">{brand.contact.phone}</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLocale}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80",
                section === "women" ? "text-women-text" : "text-men-text"
              )}
            >
              <Globe className="h-4 w-4" />
              <span>{locale.toUpperCase()}</span>
            </button>

            <button
              onClick={toggleMobileMenu}
              className={cn(
                "p-2 rounded-full transition-colors",
                section === "women" ? "hover:bg-women-primary/10 text-women-text" : "hover:bg-men-primary/10 text-men-text"
              )}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "absolute left-0 right-0 top-full overflow-hidden border-t md:hidden backdrop-blur-xl",
              section === "women"
                ? "bg-women-bg/95 border-women-border"
                : "bg-men-bg/95 border-men-border"
            )}
          >
            <nav className="container flex flex-col gap-6 py-8">
              {translatedLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between text-2xl font-heading font-medium transition-colors p-2 rounded-lg",
                      section === "women"
                        ? "text-women-text hover:bg-women-primary/10 hover:text-women-primary"
                        : "text-men-text hover:bg-men-primary/10 hover:text-men-primary"
                    )}
                  >
                    {link.label}
                    <ArrowRight className="h-5 w-5 opacity-50" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="my-4 h-px bg-current opacity-10"
              />

              {/* Mobile Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <Link
                  href={`/${otherSection}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex w-full items-center justify-center gap-2 rounded-xl border p-4 text-base font-medium transition-all active:scale-95",
                    section === "women"
                      ? "border-women-primary/20 bg-women-primary/5 text-women-primary"
                      : "border-men-primary/20 bg-men-primary/5 text-men-primary"
                  )}
                >
                  {otherSectionLabel}
                </Link>

                <a
                  href={`tel:${brand.contact.phone}`}
                  className="btn btn-primary w-full justify-center rounded-xl py-4 text-lg shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  Call {brand.contact.phone}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
