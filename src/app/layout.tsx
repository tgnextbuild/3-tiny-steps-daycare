import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { blinker, fredoka } from "@/lib/fonts";
import { searchIndex } from "@/data/search-index";
import { siteConfig, siteUrl } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  // Resolves relative URLs (the Open Graph image, canonical links) against
  // the real domain instead of Next's localhost fallback during the build.
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${blinker.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <Header searchIndex={searchIndex} />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCta />
        <Analytics />
      </body>
    </html>
  );
}
