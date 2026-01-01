import type { Metadata } from "next";
import { generateMetadata } from "@/config/site";
import { MenServicesContent } from "@/components/men/MenServicesContent";

export const metadata: Metadata = generateMetadata({
  title: "Men's Grooming Services & Pricing",
  description: "Professional men's haircuts, fades, beard trims, and grooming services in Amsterdam. Transparent pricing, quality results.",
  path: "/men/services",
});

export default function MenServicesPage() {
  return <MenServicesContent />;
}
