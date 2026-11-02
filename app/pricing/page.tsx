import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info, Layers, Scale, Droplets, MapPin, TrendingUp, Package } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { ContactForm } from "@/components/ui/contact-form";

export const metadata: Metadata = {
  title: "Cardboard Bale Pricing - How Quotes Are Set",
  description:
    "How cardboard bale pricing works: grade, cleanliness, bale weight, volume, location and the market for recovered paper. Pricing is by quote from partner buyers.",
  keywords: [
    "cardboard bale pricing",
    "OCC bale price",
    "sell cardboard bales price",
    "corrugated cardboard prices",
    "cardboard recycling quote",
  ],
  alternates: { canonical: "/pricing" },
};

const factors = [
  {
    title: "Grade",
    description:
      "Old corrugated containers (OCC) are the most common grade. Unprinted, unused corrugated and kraft offcuts are usually treated as separate, cleaner grades. Mixed paper is a different grade again.",
    icon: Layers,
  },
  {
    title: "Contamination",
    description:
      "Plastic film, foam, wood, metal strapping and food waste lower the value of a bale. Too much contamination can mean a bale is refused.",
    icon: Package,
  },
  {
    title: "Moisture",
    description:
      "Wet cardboard weighs more but is worth less. Buyers may deduct for moisture or refuse wet bales, so keep bales under cover.",
    icon: Droplets,
  },
  {
    title: "Bale Weight and Volume",
    description:
      "Dense, consistent bales are easier to load and transport. Buyers usually prefer enough bales to fill a load.",
    icon: Scale,
  },
  {
    title: "Location",
    description:
      "Distance to the nearest mill or processor affects freight costs, so what a partner offers varies by area.",
    icon: MapPin,
  },
  {
    title: "Market Conditions",
    description:
      "Recovered paper is a traded commodity. Its price moves with demand from paper mills and export markets, so quotes change over time.",
    icon: TrendingUp,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        subtitle="💬 Pricing by Quote"
        title="How Cardboard Bale Pricing Works"
        description="We don't publish prices. Partner buyers in our network quote a price for your cardboard based on its grade, condition, volume, location and the current market."
        primaryCta={{
          text: "Get a Quote",
          href: "/quote",
        }}
        secondaryCta={{
          text: "What Affects Price",
          href: "#factors",
        }}
      />

      {/* Pricing Factors */}
      <section id="factors" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Affects the Price
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are the things a partner buyer usually looks at when
              preparing a quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factors.map((factor) => (
              <div
                key={factor.title}
                className="bg-white rounded-xl p-6 card-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg">
                    <factor.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {factor.title}
                  </h3>
                </div>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How quotes work */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-blue-900 mb-3">
                    How Quotes Work
                  </h2>
                  <ul className="space-y-2 text-blue-800 text-sm list-disc pl-5">
                    <li>
                      Cardboard Bale Recycling is a referral service and does
                      not buy cardboard itself.
                    </li>
                    <li>
                      A partner supplier prepares the quote and sets the
                      price, how bales are weighed, payment terms and the
                      pickup schedule.
                    </li>
                    <li>
                      Depending on your volume and location, a partner may
                      offer to buy your bales, collect them at no charge or
                      charge for pickup.
                    </li>
                    <li>
                      Requesting a quote is free and there is no obligation to
                      accept it.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Pricing for Your Area
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Tell us where you are, your monthly volume and how your
                cardboard is stored. A partner supplier follows up with a quote.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <ContactForm
                title="Request Pricing"
                description="Tell us your location and volume and a partner supplier will follow up."
                className="bg-transparent border border-white/20"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
