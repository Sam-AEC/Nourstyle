import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  imageSrc: string;
  imageAlt: string;
  section: "women" | "men";
  overlay?: boolean;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt,
  section,
  overlay = true,
}: HeroProps) {
  return (
    <section className="hero relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {overlay && <div className="hero-overlay" />}
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-wider text-white/90 md:text-base">
              {subtitle}
            </p>
          )}

          <h1 className="text-balance text-white drop-shadow-lg">
            {title}
          </h1>

          {description && (
            <p className="mx-auto max-w-2xl text-lg text-white/95 md:text-xl">
              {description}
            </p>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className={cn(
                    "btn btn-lg group",
                    section === "women"
                      ? "bg-women-primary text-white hover:bg-women-primary/90"
                      : "bg-men-primary text-white hover:bg-men-primary/90"
                  )}
                >
                  {primaryCTA.label}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              )}

              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="btn btn-lg border-2 border-white bg-transparent text-white hover:bg-white hover:text-neutral-900"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-6 rounded-full border-2 border-white/50">
          <div className="mx-auto mt-2 h-2 w-2 animate-pulse rounded-full bg-white/75" />
        </div>
      </div>
    </section>
  );
}
