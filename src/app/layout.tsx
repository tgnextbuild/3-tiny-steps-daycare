import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { blinker, fredoka } from "@/lib/fonts";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
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
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
