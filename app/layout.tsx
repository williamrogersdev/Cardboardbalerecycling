import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HomePageJsonLd } from "@/components/seo/json-ld";
import { LeadAttribution } from "@/components/lead-attribution";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#16a34a",
};

export const metadata: Metadata = {
  title: {
    default: "Cardboard Bale Recycling | Turn Your Waste Into Revenue",
    template: "%s | Cardboard Bale Recycling",
  },
  description:
    "Professional cardboard bale recycling services paying $70-$120 per ton. We pick up, process, and pay for your cardboard waste. Free quotes, flexible scheduling, serving all 50 states.",
  keywords: [
    "cardboard bale recycling",
    "cardboard waste pickup",
    "sell cardboard bales",
    "cardboard recycling services",
    "OCC recycling",
    "corrugated cardboard recycling",
    "commercial cardboard recycling",
    "cardboard bale pickup",
    "cardboard waste management",
    "recycling revenue sharing",
    "business recycling services",
    "cardboard disposal",
    "baler rental",
    "industrial cardboard recycling",
  ],
  authors: [{ name: "Cardboard Bale Recycling" }],
  creator: "Cardboard Bale Recycling",
  publisher: "Cardboard Bale Recycling",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cardboardbalerecycling.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cardboardbalerecycling.com",
    title: "Cardboard Bale Recycling | Turn Your Waste Into Revenue",
    description:
      "Professional cardboard bale recycling services paying $70-$120 per ton. We pick up, process, and pay for your cardboard waste. Free quotes and flexible scheduling.",
    siteName: "Cardboard Bale Recycling",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cardboard Bale Recycling - Turn Waste Into Revenue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardboard Bale Recycling | Turn Your Waste Into Revenue",
    description:
      "Professional cardboard bale recycling services paying $70-$120 per ton. We pick up, process, and pay for your cardboard waste.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "business",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "msapplication-TileColor": "#16a34a",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HomePageJsonLd />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LeadAttribution />
      </body>
    </html>
  );
}
