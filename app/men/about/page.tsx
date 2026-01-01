import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { generateMetadata } from "@/config/site";
import { MenAboutContent } from "@/components/men/MenAboutContent";

export const metadata: Metadata = generateMetadata({
  title: "About Your Amsterdam Barber",
  description: `Meet your barber. ${brand.about.experience} of professional grooming expertise in Amsterdam. Modern cuts, classic service.`,
  path: "/men/about",
});

export default function MenAboutPage() {
  return <MenAboutContent />;
}
