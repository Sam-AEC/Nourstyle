import type { Metadata } from "next";
import { generateMetadata } from "@/config/site";
import { WomenHomeContent } from "@/components/women/WomenHomeContent";

export const metadata: Metadata = generateMetadata({
  title: "Women's Hair Salon Amsterdam | Expert Cuts & Color",
  description: "Premier women's hair salon in Amsterdam specializing in balayage, precision cuts, and luxury styling. Experience one on one attention in a private setting.",
  keywords: ["women's hairdresser amsterdam", "balayage amsterdam", "ladies haircut amsterdam", "hair color specialist", "private hair salon"],
  openGraph: {
    images: ["/images/women-hero.jpg"],
  },
  path: "/women",
});

export default function WomenHomePage() {
  return <WomenHomeContent />;
}
