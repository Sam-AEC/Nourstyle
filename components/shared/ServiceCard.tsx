"use client";

import { Clock, Euro } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/config/services";
import { useI18n } from "@/lib/i18n-context";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
  section: "women" | "men";
}

export function ServiceCard({ service, section }: ServiceCardProps) {
  const { t } = useI18n();

  const nameKey = `services.items.${service.id}.name`;
  const descriptionKey = `services.items.${service.id}.description`;
  const localizedName = t(nameKey);
  const localizedDescription = t(descriptionKey);
  const displayName = localizedName !== nameKey ? localizedName : service.name;
  const displayDescription = localizedDescription !== descriptionKey ? localizedDescription : service.description;

  const fromLabel = t("services.price_from") !== "services.price_from" ? t("services.price_from") : "from";
  const freeLabel = t("services.price_free") !== "services.price_free" ? t("services.price_free") : "FREE";
  const popularLabel = t("services.popular_badge") !== "services.popular_badge" ? t("services.popular_badge") : "Popular";

  const normalizePrice = (price: string) => {
    const trimmed = price.trim();
    const lower = trimmed.toLowerCase();

    if (lower === "free") {
      return freeLabel;
    }

    if (lower.startsWith("from ")) {
      const rest = trimmed.slice(5).trim();
      return `${fromLabel} ${rest}`.trim();
    }

    return trimmed;
  };

  const normalizedPrice = normalizePrice(service.price);
  const hasCurrency = normalizedPrice.includes("€");
  const displayPrice = hasCurrency ? normalizedPrice.replace("€", "").trim() : normalizedPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className={cn(
        "card group relative overflow-hidden transition-all duration-300",
        service.popular && "ring-1 ring-offset-2",
        service.popular && section === "women" && "ring-women-primary ring-offset-women-bg shadow-women-primary/20",
        service.popular && section === "men" && "ring-men-primary ring-offset-men-bg shadow-men-primary/20",
        section === "women" ? "hover:shadow-xl hover:shadow-women-primary/10" : "hover:shadow-xl hover:shadow-men-primary/10"
      )}
    >
      {/* Background Gradient on Hover */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none",
          section === "women"
            ? "bg-gradient-to-br from-women-primary/5 to-transparent"
            : "bg-gradient-to-br from-men-primary/5 to-transparent"
        )}
      />

      {/* Popular Badge */}
      {service.popular && (
        <div
          className={cn(
            "absolute right-0 top-0 rounded-bl-xl px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm z-10",
            section === "women" ? "bg-women-primary" : "bg-men-primary"
          )}
        >
          {popularLabel}
        </div>
      )}

      <div className="relative space-y-4 z-10">
        {/* Service Name */}
        <h3 className="text-xl font-bold font-heading">{displayName}</h3>

        {/* Description */}
        <p
          className={cn(
            "text-base leading-relaxed",
            section === "women" ? "text-women-text-muted" : "text-men-text-muted"
          )}
        >
          {displayDescription}
        </p>

        {/* Duration & Price */}
        <div className={cn(
          "flex items-center justify-between pt-4 border-t",
          section === "women" ? "border-women-border" : "border-men-border"
        )}>
          <div className="flex items-center gap-2 text-sm font-medium opacity-70">
            <Clock className="h-4 w-4" />
            <span>{service.duration}</span>
          </div>

          <div
            className={cn(
              "flex items-center gap-0.5 text-2xl font-bold font-heading",
              section === "women" ? "text-women-primary" : "text-men-primary"
            )}
          >
            {hasCurrency && <Euro className="h-5 w-5 stroke-[2.5]" />}
            <span>{displayPrice}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="card animate-pulse">
      <div className="space-y-4">
        <div className="h-6 w-3/4 rounded bg-neutral-200" />
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-neutral-200" />
          <div className="h-4 w-5/6 rounded bg-neutral-200" />
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="h-4 w-20 rounded bg-neutral-200" />
          <div className="h-6 w-16 rounded bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}
