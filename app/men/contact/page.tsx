import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { generateMetadata } from "@/config/site";
import { MenContactContent } from "@/components/men/MenContactContent";

export const metadata: Metadata = generateMetadata({
  title: "Contact and Book Appointment",
  description: `Get in touch with ${brand.name}. Book online, call, or message us. Located in ${brand.contact.address.city}.`,
  path: "/men/contact",
});

export default function MenContactPage() {
  return <MenContactContent />;
}
