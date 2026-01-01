"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }, // Cinematic easing
  },
};

export function Hero({
  title: defaultTitle,
  subtitle: defaultSubtitle,
  description: defaultDescription,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt,
  section,
  overlay = true,
}: HeroProps) {
  const { t } = useI18n();

  // Dynamic translation logic
  const titleKey = `hero.${section}.title`;
  const subtitleKey = `hero.${section}.subtitle`;

  const title = t(titleKey) !== titleKey ? t(titleKey) : defaultTitle;
  const subtitle = t(subtitleKey) !== subtitleKey ? t(subtitleKey) : defaultSubtitle;
  const description = defaultDescription;

  return (
    <section className="hero relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {overlay && <div className="hero-overlay backdrop-blur-[2px]" />}
      </motion.div>

      <div className="container relative z-10 text-center">
        <motion.div
          className="mx-auto max-w-4xl space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90 md:text-base"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            variants={itemVariants}
            className="text-balance text-5xl font-bold font-heading text-white drop-shadow-lg md:text-7xl lg:text-8xl"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-lg text-white/95 md:text-xl font-light leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className={cn(
                    "btn btn-lg group relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl",
                    section === "women"
                      ? "bg-women-primary text-white hover:bg-women-primary/90 shadow-women-primary/50"
                      : "bg-men-primary text-white hover:bg-men-primary/90 shadow-men-primary/50"
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {primaryCTA.label}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )}

              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="btn btn-lg border border-white/30 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:shadow-lg hover:-translate-y-1"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="h-12 w-6 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mt-2 h-1.5 w-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
