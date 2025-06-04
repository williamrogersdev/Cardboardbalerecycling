import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Minus,
  MapPin,
  Info,
} from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { ContactForm } from "@/components/ui/contact-form";
import {
  stateCardboardPricing,
  nationalAveragePrice,
  serviceVolumeTiers,
} from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Current cardboard bale recycling prices by state. View real-time market rates across major US markets, typically $70-120 per ton.",
  keywords: [
    "cardboard bale pricing",
    "cardboard recycling rates by state",
    "market prices per ton",
    "cardboard pricing",
    "recycling rates",
  ],
};

export default function PricingPage(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        subtitle="💰 Current Market Rates"
        title="Cardboard Pricing by State"
        description="Real-time cardboard bale pricing across major US markets. Current rates range from $70-120 per ton based on location, quality, and market conditions."
        primaryCta={{
          text: "Get Local Quote",
          href: "/quote",
        }}
        secondaryCta={{
          text: "View All States",
          href: "#state-pricing",
        }}
      />

      {/* National Average */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              National Average Price
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current national average for cardboard bale recycling. Actual
              pricing varies by location and quality.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  National Average
                </h3>
                <div className="flex items-center gap-1">
                  {nationalAveragePrice.trend === "up" && (
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  )}
                  {nationalAveragePrice.trend === "down" && (
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  )}
                  {nationalAveragePrice.trend === "stable" && (
                    <Minus className="w-5 h-5 text-gray-600" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      nationalAveragePrice.trend === "up"
                        ? "text-green-600"
                        : nationalAveragePrice.trend === "down"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {nationalAveragePrice.trend}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  {formatCurrency(nationalAveragePrice.averagePrice)}
                </div>
                <div className="text-xl text-gray-600 mb-2">per ton</div>
                <div className="text-lg text-gray-500">
                  Range: {formatCurrency(nationalAveragePrice.priceRange.min)} -{" "}
                  {formatCurrency(nationalAveragePrice.priceRange.max)}
                </div>
              </div>

              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {nationalAveragePrice.description}
              </p>

              <div className="text-xs text-gray-500">
                Last updated:{" "}
                {new Date(
                  nationalAveragePrice.lastUpdated
                ).toLocaleDateString()}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Factors Affecting Pricing
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-blue-800 text-sm">
                    {nationalAveragePrice.factors.map((factor, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                        <span>{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State Pricing */}
      <section id="state-pricing" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing by State
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regional pricing varies based on local market conditions,
              transportation costs, and demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateCardboardPricing.map((state) => (
              <div
                key={state.abbreviation}
                className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {state.state}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1">
                    {state.marketTrend === "up" && (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    )}
                    {state.marketTrend === "down" && (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    {state.marketTrend === "stable" && (
                      <Minus className="w-4 h-4 text-gray-600" />
                    )}
                    <span
                      className={`text-xs font-medium ${
                        state.marketTrend === "up"
                          ? "text-green-600"
                          : state.marketTrend === "down"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {state.marketTrend}
                    </span>
                  </div>
                </div>

                <div className="text-center mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {formatCurrency(state.priceRange.min)} -{" "}
                    {formatCurrency(state.priceRange.max)}
                  </div>
                  <div className="text-sm text-gray-600">per ton</div>
                </div>

                <div className="mb-3">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Major Cities:
                  </div>
                  <div className="text-sm text-gray-600">
                    {state.majorCities.join(", ")}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-600">{state.notes}</div>
                </div>

                <div className="text-xs text-gray-500">
                  Updated: {new Date(state.lastUpdated).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Levels by Volume
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different service levels based on your monthly cardboard volume.
              Higher volumes receive enhanced services and priority scheduling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceVolumeTiers.map((tier, index) => (
              <div
                key={tier.id}
                className={cn(
                  "bg-white rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-xl",
                  index === 1
                    ? "border-primary-500 ring-4 ring-primary-100 scale-105"
                    : "border-gray-200 hover:border-primary-300"
                )}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Common
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{tier.description}</p>
                  <div className="text-lg font-semibold text-primary-600">
                    {tier.volumeRange}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                      Service Features
                    </h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Calculator */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revenue Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estimate your potential monthly revenue based on volume and
              location.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 card-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Calculate Your Revenue
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your State
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option>Select your state</option>
                      {stateCardboardPricing.map((state) => (
                        <option
                          key={state.abbreviation}
                          value={state.abbreviation}
                        >
                          {state.state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Volume (tons)
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option>5-10 tons</option>
                      <option>10-25 tons</option>
                      <option>25-50 tons</option>
                      <option>50+ tons</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Disposal Cost (monthly)
                    </label>
                    <input
                      type="number"
                      placeholder="$500"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Estimated Monthly Benefit
                </h4>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Volume:</span>
                    <span className="font-semibold text-gray-900">
                      10-25 tons
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rate range:</span>
                    <span className="font-semibold text-gray-900">
                      $75-$110/ton
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Revenue:</span>
                    <span className="font-semibold text-green-600">
                      $750 - $2,750
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Disposal savings:</span>
                    <span className="font-semibold text-green-600">$500</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">
                        Total Monthly Benefit:
                      </span>
                      <span className="text-2xl font-bold text-primary-600">
                        $1,250 - $3,250
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/quote"
                    className="btn-primary w-full justify-center"
                  >
                    Get Accurate Quote
                  </Link>
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
                Get Local Pricing
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Pricing varies by location and market conditions. Get an
                accurate quote based on your specific location and volume
                requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Get Local Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <ContactForm
                title="Get State-Specific Pricing"
                description="Tell us your location and volume for accurate local pricing."
                className="bg-transparent border border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        <Link href="/quote" className="btn-primary">
          Request Custom Quote
        </Link>
      </div>
    </>
  );
}
