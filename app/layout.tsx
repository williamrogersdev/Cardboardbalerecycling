import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HomePageJsonLd } from "@/components/seo/json-ld";
import { LeadAttribution } from "@/components/lead-attribution";
import { POSTHOG_SNIPPET } from "@/lib/posthog-snippet";

// Self-hosted at build time, so visitors make no request to Google Fonts.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#16a34a",
};

export const metadata: Metadata = {
  title: {
    default: "Cardboard Bale Recycling | Pickup and Bale Sales Quotes",
    template: "%s | Cardboard Bale Recycling",
  },
  description:
    "Request cardboard bale pickup, sell your cardboard bales or ask about baler rental. Cardboard Bale Recycling is a referral service: partner suppliers in our network prepare the quotes.",
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
    title: "Cardboard Bale Recycling | Pickup and Bale Sales Quotes",
    description:
      "Request cardboard bale pickup, sell your cardboard bales or ask about baler rental. Cardboard Bale Recycling is a referral service: partner suppliers in our network prepare the quotes.",
    siteName: "Cardboard Bale Recycling",
  },
  twitter: {
    card: "summary",
    title: "Cardboard Bale Recycling | Pickup and Bale Sales Quotes",
    description:
      "Request cardboard bale pickup, sell your cardboard bales or ask about baler rental. Cardboard Bale Recycling is a referral service: partner suppliers in our network prepare the quotes.",
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
  category: "business",
  manifest: "/manifest.json",
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
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <HomePageJsonLd />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* PostHog through /ingest on this domain (1DB site_analytics.md) */}
        <script data-posthog="injected" dangerouslySetInnerHTML={{ __html: POSTHOG_SNIPPET }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LeadAttribution />
      </body>
    </html>
  );
}
