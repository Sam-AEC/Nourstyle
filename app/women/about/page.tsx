import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { generateMetadata } from "@/config/site";
import { WomenAboutContent } from "@/components/women/WomenAboutContent";

export const metadata: Metadata = generateMetadata({
  title: "About Us, Your Amsterdam Hair Stylist",
  description: `Meet your stylist. ${brand.about.experience} of professional hair expertise, specializing in women's cuts and color in a private Amsterdam salon.`,
  path: "/women/about",
});

export default function WomenAboutPage() {
  return <WomenAboutContent />;
}
