import { Clock, Euro } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/config/services";

interface ServiceCardProps {
  service: Service;
  section: "women" | "men";
}

export function ServiceCard({ service, section }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "card group relative overflow-hidden",
        service.popular && "ring-2",
        service.popular && section === "women" && "ring-women-primary",
        service.popular && section === "men" && "ring-men-primary"
      )}
    >
      {/* Popular Badge */}
      {service.popular && (
        <div
          className={cn(
            "absolute right-0 top-0 rounded-bl-lg px-3 py-1 text-xs font-semibold text-white",
            section === "women" ? "bg-women-primary" : "bg-men-primary"
          )}
        >
          Popular
        </div>
      )}

      <div className="space-y-4">
        {/* Service Name */}
        <h3 className="text-xl font-semibold">{service.name}</h3>

        {/* Description */}
        <p
          className={cn(
            "text-sm leading-relaxed",
            section === "women" ? "text-women-text-muted" : "text-men-text-muted"
          )}
        >
          {service.description}
        </p>

        {/* Duration & Price */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 opacity-60" />
            <span>{service.duration}</span>
          </div>

          <div
            className={cn(
              "flex items-center gap-1 text-lg font-bold",
              section === "women" ? "text-women-primary" : "text-men-primary"
            )}
          >
            <Euro className="h-5 w-5" />
            <span>{service.price.replace("€", "")}</span>
          </div>
        </div>
      </div>
    </div>
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
