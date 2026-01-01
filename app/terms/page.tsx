import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { TermsContent } from "@/components/shared/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${brand.name}. Understand our policies and your rights when using our services.`,
};

export default function TermsPage() {
  return <TermsContent />;
}
