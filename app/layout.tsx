import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Houses HTX \u2014 The Insider Guide to Houston Homes",
    template: "%s | Houses HTX",
  },
  description:
    "Neighborhood stories, market insights, and active listings. The insider guide to finding your home in Houston.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Houses HTX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
