import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Cardboard Bale Recycling | Turn Your Waste Into Revenue",
    template: "%s | Cardboard Bale Recycling",
  },
  description:
    "Professional cardboard bale recycling services. Turn your cardboard waste into revenue with our pickup, processing, and revenue-sharing program. Serving businesses nationwide.",
  keywords: [
    "cardboard bale recycling",
    "cardboard waste pickup",
    "sell cardboard bales",
    "cardboard recycling services",
    "waste management",
    "cardboard disposal",
    "environmental recycling",
    "business recycling",
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
      "Professional cardboard bale recycling services. Turn your cardboard waste into revenue with our pickup, processing, and revenue-sharing program.",
    siteName: "Cardboard Bale Recycling",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardboard Bale Recycling | Turn Your Waste Into Revenue",
    description:
      "Professional cardboard bale recycling services. Turn your cardboard waste into revenue with our pickup, processing, and revenue-sharing program.",
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
    google: "google-verification-code",
    yandex: "yandex-verification-code",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
