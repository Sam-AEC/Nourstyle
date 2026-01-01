"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n-context";

interface Brand {
    name: string;
    logo: string;
}

const brands: Brand[] = [
    { name: "L'Oréal Professional", logo: "/images/brands/loreal.svg" },
    { name: "Olaplex", logo: "/images/brands/olaplex.svg" },
    { name: "Schwarzkopf IGORA", logo: "/images/brands/schwarzkopf.svg" },
    { name: "Keune", logo: "/images/brands/keune.svg" },
];

interface BrandLogosProps {
    section?: "women" | "men";
}

export function BrandLogos({ section = "women" }: BrandLogosProps) {
    const { t } = useI18n();
    const borderColor = section === "women"
        ? "border-women-border/20"
        : "border-men-border/20";

    const textColor = section === "women"
        ? "text-women-text-muted"
        : "text-men-text-muted";

    return (
        <section className={`py-8 border-t border-b ${borderColor}`}>
            <div className="container">
                <p className={`text-center text-sm ${textColor} mb-6`}>
                    {t("brands.title")}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {brands.map((brand) => (
                        <div
                            key={brand.name}
                            className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                            title={brand.name}
                        >
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                width={120}
                                height={40}
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
