"use client";

import { BookingWidget } from "@/components/shared/BookingWidget";
import { useI18n } from "@/lib/i18n-context";

export function BookingPageContent() {
  const { t } = useI18n();

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold font-heading">{t("booking.page_title")}</h1>
          <p className="text-neutral-500">
            {t("booking.page_subtitle")}
          </p>
        </div>

        <div className="shadow-2xl rounded-xl overflow-hidden">
          <BookingWidget />
        </div>
      </div>
    </div>
  );
}
