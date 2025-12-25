import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export default function MenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-men flex min-h-screen flex-col">
      <Header section="men" navLinks={siteConfig.menNav} />
      <main className="flex-1">{children}</main>
      <Footer section="men" />
    </div>
  );
}
