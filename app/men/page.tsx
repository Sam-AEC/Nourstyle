import type { Metadata } from "next";
import { generateMetadata } from "@/config/site";
import { MenHomeContent } from "@/components/men/MenHomeContent";

export const metadata: Metadata = generateMetadata({
  title: "Men's Barber Amsterdam | Precision Fades & Grooming",
  description: "Top rated men's barber in Amsterdam. Expert fades, beard grooming, and classic cuts. Private studio atmosphere with premium service.",
  keywords: ["barber amsterdam", "men's haircut amsterdam", "skin fade amsterdam", "beard trim amsterdam", "private barber"],
  openGraph: {
    images: ["/images/men-hero.jpg"],
  },
  path: "/men",
});

export default function MenHomePage() {
  return <MenHomeContent />;
}
