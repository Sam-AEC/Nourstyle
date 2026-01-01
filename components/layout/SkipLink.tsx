"use client";

import { useI18n } from "@/lib/i18n-context";

export function SkipLink() {
  const { locale } = useI18n();
  const label = locale === "nl" ? "Ga naar inhoud" : "Skip to main content";

  return (
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black">
      {label}
    </a>
  );
}
