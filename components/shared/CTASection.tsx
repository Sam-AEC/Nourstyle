import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  section: "women" | "men";
  centered?: boolean;
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  section,
  centered = true,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "section",
        section === "women" ? "bg-women-surface" : "bg-men-surface"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "space-y-6",
            centered && "mx-auto max-w-3xl text-center"
          )}
        >
          <h2 className="text-balance">{title}</h2>

          {description && (
            <p
              className={cn(
                "text-lg",
                section === "women" ? "text-women-text-muted" : "text-men-text-muted"
              )}
            >
              {description}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div
              className={cn(
                "flex flex-col gap-4 pt-4 sm:flex-row",
                centered && "justify-center"
              )}
            >
              {primaryCTA && (
                <Link href={primaryCTA.href} className="btn btn-primary btn-lg group">
                  {primaryCTA.label}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              )}

              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="btn btn-secondary btn-lg">
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
