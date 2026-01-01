import type { Metadata } from "next";
import { WomenGalleryContent } from "@/components/women/WomenGalleryContent";
import { generateMetadata } from "@/config/site";

export const metadata: Metadata = generateMetadata({
  title: "Gallery, Women Hair Transformations",
  description: "Browse our portfolio of women haircuts, color transformations, balayage, and special occasion styles. Real results from our Amsterdam salon.",
  path: "/women/gallery",
});

export default function WomenGalleryPage() {
  return <WomenGalleryContent />;
}
