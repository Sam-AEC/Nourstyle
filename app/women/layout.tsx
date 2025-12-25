import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export default function WomenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-women flex min-h-screen flex-col">
      <Header section="women" navLinks={siteConfig.womenNav} />
      <main className="flex-1">{children}</main>
      <Footer section="women" />
    </div>
  );
}
