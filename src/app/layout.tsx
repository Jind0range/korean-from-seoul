import type { Metadata } from "next";
import { Noto_Sans_KR, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-noto" });

const BASE_URL = "https://koreanfromseoul.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Korean From Seoul — Learn Korean Naturally",
    template: "%s — Korean From Seoul",
  },
  description: "Learn Korean naturally — tips, grammar, vocabulary, and culture from the heart of Seoul.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Korean From Seoul",
    title: "Korean From Seoul — Learn Korean Naturally",
    description: "Learn Korean naturally — tips, grammar, vocabulary, and culture from the heart of Seoul.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Korean From Seoul" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korean From Seoul — Learn Korean Naturally",
    description: "Learn Korean naturally — tips, grammar, vocabulary, and culture from the heart of Seoul.",
    images: [`${BASE_URL}/og-image.png`],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: { canonical: BASE_URL },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansKR.variable}`}>
      <body className="min-h-screen bg-stone-50 font-sans text-slate-900 antialiased flex flex-col" style={{ fontFamily: "var(--font-inter), var(--font-noto), sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
