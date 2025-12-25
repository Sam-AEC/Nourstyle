"use client";

import { Clock, Euro } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/config/services";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
  section: "women" | "men";
}

export function ServiceCard({ service, section }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
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
          Popular
        </div>
      )}

      <div className="relative space-y-4 z-10">
        {/* Service Name */}
        <h3 className="text-xl font-bold font-heading">{service.name}</h3>

        {/* Description */}
        <p
          className={cn(
            "text-base leading-relaxed",
            section === "women" ? "text-women-text-muted" : "text-men-text-muted"
          )}
        >
          {service.description}
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
            <Euro className="h-5 w-5 stroke-[2.5]" />
            <span>{service.price.replace("€", "")}</span>
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
