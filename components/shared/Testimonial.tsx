import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="card relative">
      {/* Quote Icon */}
      <div
        className={cn(
          "absolute right-4 top-4 opacity-10",
          section === "women" ? "text-women-primary" : "text-men-primary"
        )}
      >
        <Quote className="h-12 w-12" />
      </div>

      <div className="relative space-y-4">
        {/* Rating Stars */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-5 w-5",
                i < rating
                  ? section === "women"
                    ? "fill-women-primary text-women-primary"
                    : "fill-men-primary text-men-primary"
                  : "text-neutral-300"
              )}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-base italic leading-relaxed">
          "{text}"
        </p>

        {/* Author & Service */}
        <div className="border-t pt-4">
          <p className="font-semibold">{name}</p>
          {service && (
            <p
              className={cn(
                "text-sm",
                section === "women" ? "text-women-text-muted" : "text-men-text-muted"
              )}
            >
              {service}
            </p>
          )}
        </div>
      </div>
    </div>
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
