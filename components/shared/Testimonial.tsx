"use client";

import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  text: string;
  service?: string;
  rating: number;
  section: "women" | "men";
}

export function Testimonial({
  name,
  text,
  service,
  rating,
  section,
}: TestimonialProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card relative h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
    >
      {/* Quote Icon */}
      <div
        className={cn(
          "absolute right-6 top-6 opacity-[0.08]",
          section === "women" ? "text-women-primary" : "text-men-primary"
        )}
      >
        <Quote className="h-16 w-16" />
      </div>

      <div className="relative space-y-6 pt-2">
        {/* Rating Stars - Animated Fill */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < rating
                  ? section === "women"
                    ? "fill-women-primary text-women-primary"
                    : "fill-men-primary text-men-primary"
                  : "text-neutral-200 fill-neutral-100"
              )}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-lg italic leading-relaxed text-balance font-light">
          "{text}"
        </p>
      </div>

      {/* Author & Service */}
      <div className="mt-8 pt-4 border-t border-dashed border-neutral-200/50">
        <p className="font-bold font-heading text-lg">{name}</p>
        {service && (
          <p
            className={cn(
              "text-sm font-medium mt-1 uppercase tracking-wide",
              section === "women" ? "text-women-text-muted" : "text-men-text-muted"
            )}
          >
            {service}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function TestimonialSimple({
  name,
  text,
  section,
}: {
  name: string;
  text: string;
  section: "women" | "men";
}) {
  return (
    <blockquote className="space-y-3">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              section === "women"
                ? "fill-women-primary text-women-primary"
                : "fill-men-primary text-men-primary"
            )}
          />
        ))}
      </div>
      <p className="italic">"{text}"</p>
      <cite className="not-italic font-semibold">— {name}</cite>
    </blockquote>
  );
}
