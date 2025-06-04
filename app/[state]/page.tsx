import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Building,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Minus,
  Phone,
  Calculator,
  CheckCircle,
  Users,
  Clock,
  Truck,
} from "lucide-react";
import { serviceAreas, stateCardboardPricing } from "@/lib/data";

interface StatePageProps {
  params: {
    state: string;
  };
}

function formatStateName(stateSlug: string): string {
  return stateSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatCitySlug(cityName: string): string {
  return cityName.toLowerCase().replace(/\s+/g, "-");
}

function formatCurrency(amount: number): string {
  return `$${amount}`;
}

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    state: area.state.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: StatePageProps): Promise<Metadata> {
  const stateName = formatStateName(params.state);

  return {
    title: `${stateName} Cardboard Bale Recycling - Professional Pickup Services`,
    description: `Professional cardboard bale recycling services in ${stateName}. Get competitive rates, reliable pickup, and turn your cardboard waste into revenue.`,
    keywords: [
      `${stateName} cardboard recycling`,
      `cardboard bale pickup ${stateName}`,
      `${stateName} cardboard waste management`,
      `sell cardboard bales ${stateName}`,
      `cardboard recycling services ${stateName}`,
    ],
  };
}

export default function StatePage({ params }: StatePageProps): JSX.Element {
  const stateName = formatStateName(params.state);

  // Find state data
  const stateService = serviceAreas.find(
    (area) => area.state.toLowerCase().replace(/\s+/g, "-") === params.state
  );

  const statePricing = stateCardboardPricing.find(
    (pricing) =>
      pricing.state.toLowerCase().replace(/\s+/g, "-") === params.state
  );

  if (!stateService) {
    notFound();
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-5 h-5 text-green-600" />;
      case "down":
        return <TrendingDown className="w-5 h-5 text-red-600" />;
      default:
        return <Minus className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary-600" />
              <span className="text-lg font-semibold text-primary-600">
                {stateName}
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cardboard Bale Recycling in {stateName}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional cardboard recycling services throughout {stateName}.
              Turn your cardboard waste into revenue with our reliable pickup
              and processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <Link href="/quote" className="btn-primary text-lg py-4 px-8">
                  Get {stateName} Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State Overview */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* State Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Serving {stateName} Businesses
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We provide comprehensive cardboard bale recycling services
                  throughout {stateName}, helping businesses of all sizes turn
                  their cardboard waste into a profitable revenue stream.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Reliable pickup schedules
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Competitive market rates
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Professional documentation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Environmental compliance
                    </span>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              {statePricing && (
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Current {stateName} Rates
                    </h3>
                    <div className="flex items-center gap-2">
                      {getTrendIcon(statePricing.marketTrend)}
                      <span
                        className={`text-sm font-medium ${getTrendColor(
                          statePricing.marketTrend
                        )}`}
                      >
                        {statePricing.marketTrend}
                      </span>
                    </div>
                  </div>

                  <div className="text-center mb-6 p-6 bg-primary-50 rounded-xl">
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      {formatCurrency(statePricing.priceRange.min)} -{" "}
                      {formatCurrency(statePricing.priceRange.max)}
                    </div>
                    <div className="text-gray-600">per ton</div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-600 text-sm">
                      {statePricing.notes}
                    </p>
                  </div>

                  <div className="text-xs text-gray-500">
                    Last updated:{" "}
                    {new Date(statePricing.lastUpdated).toLocaleDateString()}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cities We Serve in {stateName}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional cardboard recycling services available in major
                cities throughout {stateName}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateService.cities.map((city, index) => (
                <Link
                  key={index}
                  href={`/${params.state}/${formatCitySlug(city)}`}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary-100 group-hover:bg-primary-200 rounded-lg transition-colors">
                      <Building className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {city}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Professional cardboard recycling services available
                  </p>
                  <div className="text-primary-600 font-semibold text-sm group-hover:text-primary-700">
                    Learn More →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Us in {stateName}?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Local expertise combined with nationwide resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Local Pickup
                </h3>
                <p className="text-gray-600 text-sm">
                  Regular routes throughout {stateName} for reliable service
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Best Rates
                </h3>
                <p className="text-gray-600 text-sm">
                  Competitive pricing based on {stateName} market conditions
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Local Team
                </h3>
                <p className="text-gray-600 text-sm">
                  Dedicated {stateName} specialists who understand your needs
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fast Response
                </h3>
                <p className="text-gray-600 text-sm">
                  Quick response times for all {stateName} service requests
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-500">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Recycling in {stateName}?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join hundreds of {stateName} businesses already turning their
              cardboard waste into revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Calculator className="w-5 h-5 inline mr-2" />
                Get Free {stateName} Quote
              </Link>
              <Link
                href="/service-areas"
                className="border border-primary-300 hover:border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                View All Service Areas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
