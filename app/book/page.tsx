import { Metadata } from "next";
import { brand } from "@/config/brand";
import { BookingPageContent } from "@/components/shared/BookingPageContent";

export const metadata: Metadata = {
  title: `Book Appointment | ${brand.name}`,
  description: "Schedule your hair appointment online. Flexible hours available.",
};

export default function BookingPage() {
  return <BookingPageContent />;
}
