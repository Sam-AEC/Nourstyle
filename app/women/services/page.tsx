import type { Metadata } from "next";
import { generateMetadata } from "@/config/site";
import { WomenServicesContent } from "@/components/women/WomenServicesContent";

export const metadata: Metadata = generateMetadata({
  title: "Women's Hair Services & Pricing",
  description: "Explore our full range of women's hair services including cuts, color, balayage, highlights, and special occasion styling. Transparent pricing in Amsterdam.",
  path: "/women/services",
});

export default function WomenServicesPage() {
  return <WomenServicesContent />;
}
