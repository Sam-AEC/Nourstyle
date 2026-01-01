"use client";

import Link from "next/link";
import Image from "next/image";
import { Scissors, Sparkles, MapPin, Phone } from "lucide-react";
import { brand } from "@/config/brand";
import { imageConfig } from "@/config/images";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function HomePage() {
  const { locale } = useI18n();
  const content = locale === "nl"
    ? {
        menTitle: "Heren",
        menSubtitle: "Verzorging, Fades, Baard",
        menCta: "Ga naar de Barbershop",
        menAlt: "Heren verzorging",
        womenTitle: "Dames",
        womenSubtitle: "Knippen, Kleur, Styling",
        womenCta: "Ga naar de Salon",
        womenAlt: "Dames haarstyling",
      }
    : {
        menTitle: "Men",
        menSubtitle: "Grooming, Fades, Beard",
        menCta: "Enter Barbershop",
        menAlt: "Men's Grooming Services",
        womenTitle: "Women",
        womenSubtitle: "Cuts, Color, Styling",
        womenCta: "Enter Salon",
        womenAlt: "Women's Hair Services",
      };

  return (
    <main className="flex min-h-screen flex-col bg-neutral-900">
      {/* Logo Header - Floating Glass */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-0 right-0 top-0 z-30 p-6 flex justify-center pointer-events-none"
      >
        <div className="bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
            {brand.name}
          </h1>
        </div>
      </motion.header>

      {/* Split Screen Container */}
      <div className="grid flex-1 md:grid-cols-2 h-full">
        {/* Men's Section */}
        <Link
          href="/men"
          className="group relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden md:min-h-screen border-b-4 border-men-primary md:border-b-0 md:border-r-4"
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="relative h-full w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <Image
                  src={imageConfig.menHero}
                  alt={content.menAlt}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              <div className="absolute inset-0 bg-gradient-to-t from-men-bg/90 via-men-primary/20 to-black/30 transition-all duration-700 group-hover:via-men-primary/30" />
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 p-8 text-center text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md shadow-xl ring-1 ring-white/50 transition-all group-hover:scale-110 group-hover:bg-men-primary/80"
            >
              <Scissors className="h-10 w-10 text-white" />
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl font-bold font-heading mb-3 drop-shadow-xl md:text-7xl"
            >
              {content.menTitle}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-lg font-medium text-white/90 tracking-wide uppercase text-shadow-sm md:text-xl"
            >
              {content.menSubtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="overflow-hidden rounded-full"
            >
              <span className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-lg font-bold text-men-bg shadow-lg transition-all duration-300 group-hover:bg-men-primary group-hover:text-white group-hover:shadow-men-primary/50 group-hover:shadow-2xl">
                {content.menCta}
              </span>
            </motion.div>
          </motion.div>
        </Link>

        {/* Women's Section */}
        <Link
          href="/women"
          className="group relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden md:min-h-screen"
        >
          {/* Background Image with Cinematic Zoom */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="relative h-full w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <Image
                  src={imageConfig.womenHero}
                  alt={content.womenAlt}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              <div className="absolute inset-0 bg-gradient-to-t from-women-primary/90 via-women-primary/20 to-black/30 transition-all duration-700 group-hover:via-women-primary/40" />
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 p-8 text-center text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md shadow-xl ring-1 ring-white/50 transition-all group-hover:scale-110 group-hover:bg-women-primary/80"
            >
              <Sparkles className="h-10 w-10 text-white" />
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl font-bold font-heading mb-3 drop-shadow-xl md:text-7xl"
            >
              {content.womenTitle}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-lg font-medium text-white/90 tracking-wide uppercase text-shadow-sm md:text-xl"
            >
              {content.womenSubtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="overflow-hidden rounded-full"
            >
              <span className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-lg font-bold text-women-primary shadow-lg transition-all duration-300 group-hover:bg-women-primary group-hover:text-white group-hover:shadow-women-primary/50 group-hover:shadow-2xl">
                {content.womenCta}
              </span>
            </motion.div>
          </motion.div>
        </Link>
      </div>

      {/* Location Info Bar - Mobile Optimized */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative md:absolute bottom-0 md:bottom-6 left-0 md:left-4 right-0 md:right-4 z-30 flex justify-center pointer-events-none w-full bg-black/40 md:bg-transparent py-4 md:py-0"
      >
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 rounded-none md:rounded-2xl border-t border-white/10 md:border border-white/10 bg-transparent md:bg-black/60 px-6 py-2 md:py-3 text-sm text-white md:backdrop-blur-md md:shadow-2xl pointer-events-auto">
          <a href={`https://maps.google.com/?q=${brand.contact.address.street},+${brand.contact.address.city}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-women-secondary transition-colors">
            <MapPin className="h-4 w-4 text-women-secondary" />
            <span>{brand.contact.address.neighborhood}, {brand.contact.address.city}</span>
          </a>
          <span className="hidden md:inline text-white/20">|</span>
          <a href={`tel:${brand.contact.phone}`} className="flex items-center gap-2 hover:text-women-secondary transition-colors">
            <Phone className="h-4 w-4 text-women-secondary" />
            <span>{brand.contact.phone}</span>
          </a>
        </div>
      </motion.div>
    </main>
  );
}
