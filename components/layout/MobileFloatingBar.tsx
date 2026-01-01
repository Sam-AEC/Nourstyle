"use client";

import { useEffect, useState } from "react";
import { Phone, Calendar } from "lucide-react";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";

interface MobileFloatingBarProps {
  section: "women" | "men";
}

export function MobileFloatingBar({ section }: MobileFloatingBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden"
        >
          <div className={cn(
            "flex w-full items-center justify-between gap-0.5 p-2 backdrop-blur-lg pb-safe",
             section === "women" ? "bg-white/90 border-t border-women-border" : "bg-men-bg/90 border-t border-men-border"
          )}>
            <a
              href={`tel:${brand.contact.phone}`}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-1 rounded-l-xl py-3 text-xs font-bold uppercase tracking-wide shadow-sm transition-active active:scale-95",
                section === "women" 
                  ? "bg-women-surface text-women-primary border border-women-border" 
                  : "bg-men-surface text-men-primary border border-men-border"
              )}
            >
              <Phone className="h-5 w-5" />
              {t("actions.call")}
            </a>
            
            <a
              href={brand.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex flex-[2] flex-col items-center justify-center gap-1 rounded-r-xl py-3 text-xs font-bold uppercase tracking-wide text-white shadow-lg transition-active active:scale-95",
                section === "women" 
                  ? "bg-women-primary shadow-women-primary/20" 
                  : "bg-men-primary shadow-men-primary/20"
              )}
            >
              <Calendar className="h-5 w-5" />
              {t("nav.book")}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
