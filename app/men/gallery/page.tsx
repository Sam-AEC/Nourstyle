import type { Metadata } from "next";
import { MenGalleryContent } from "@/components/men/MenGalleryContent";
import { generateMetadata } from "@/config/site";

export const metadata: Metadata = generateMetadata({
  title: "Gallery, Men Haircuts and Grooming",
  description: "Browse our portfolio of men haircuts, fades, and beard grooming. Real results from our Amsterdam barbershop.",
  path: "/men/gallery",
});

export default function MenGalleryPage() {
  return <MenGalleryContent />;
}
