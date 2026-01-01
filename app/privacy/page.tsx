import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { PrivacyContent } from "@/components/shared/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${brand.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
