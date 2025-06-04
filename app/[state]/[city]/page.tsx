import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Building,
  DollarSign,
  Phone,
  Calculator,
  CheckCircle,
  Users,
  Clock,
  Truck,
  Star,
  TrendingUp,
} from "lucide-react";
import { serviceAreas, stateCardboardPricing } from "@/lib/data";

interface CityPageProps {
  params: {
    state: string;
    city: string;
  };
}

function formatStateName(stateSlug: string): string {
  return stateSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatCityName(citySlug: string): string {
  return citySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatCurrency(amount: number): string {
  return `$${amount}`;
}

export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];

  serviceAreas.forEach((area) => {
    const stateSlug = area.state.toLowerCase().replace(/\s+/g, "-");
    area.cities.forEach((city) => {
      const citySlug = city.toLowerCase().replace(/\s+/g, "-");
      params.push({
        state: stateSlug,
        city: citySlug,
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const stateName = formatStateName(params.state);
  const cityName = formatCityName(params.city);

  return {
    title: `${cityName}, ${stateName} Cardboard Bale Recycling - Local Pickup Services`,
    description: `Professional cardboard bale recycling in ${cityName}, ${stateName}. Local pickup, competitive rates, and reliable service for your business.`,
    keywords: [
      `${cityName} cardboard recycling`,
      `cardboard bale pickup ${cityName}`,
      `${cityName} ${stateName} cardboard waste`,
      `sell cardboard bales ${cityName}`,
      `cardboard recycling ${cityName} ${stateName}`,
    ],
  };
}

export default function CityPage({ params }: CityPageProps): JSX.Element {
  const stateName = formatStateName(params.state);
  const cityName = formatCityName(params.city);

  // Find state and city data
  const stateService = serviceAreas.find(
    (area) => area.state.toLowerCase().replace(/\s+/g, "-") === params.state
  );

  if (!stateService) {
    notFound();
  }

  const cityExists = stateService.cities.some(
    (city) => city.toLowerCase().replace(/\s+/g, "-") === params.city
  );

  if (!cityExists) {
    notFound();
  }

  const statePricing = stateCardboardPricing.find(
    (pricing) =>
      pricing.state.toLowerCase().replace(/\s+/g, "-") === params.state
  );

  const serviceFeatures = [
    {
      title: "Local Pickup Routes",
      description: `Regular scheduled pickups throughout ${cityName}`,
      icon: Truck,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Competitive Pricing",
      description: `Best rates in the ${cityName} market`,
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Expert Team",
      description: `${cityName}-based specialists who know your area`,
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Fast Response",
      description: `Quick quotes and scheduling for ${cityName} businesses`,
      icon: Clock,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const whyChooseUs = [
    "Established local presence in " + cityName,
    "Understanding of " + cityName + " business needs",
    "Optimized routes for " + cityName + " efficiency",
    "Local support team available",
    "Flexible scheduling options",
    "Environmental compliance assurance",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary-600" />
              <span className="text-lg font-semibold text-primary-600">
                {cityName}, {stateName}
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cardboard Recycling in {cityName}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional cardboard bale recycling services in {cityName},{" "}
              {stateName}. Local pickup, competitive rates, and reliable service
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <Link href="/quote" className="btn-primary text-lg py-4 px-8">
                  Get {cityName} Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* City Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Serving {cityName} Businesses
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We provide comprehensive cardboard bale recycling services
                  throughout {cityName}, helping local businesses turn their
                  cardboard waste into a profitable revenue stream.
                </p>

                <div className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {cityName} Service Highlights
                </h3>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      <Clock className="w-6 h-6 mx-auto mb-2" />
                      24hrs
                    </div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      <Star className="w-6 h-6 mx-auto mb-2" />
                      5.0
                    </div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>

                {statePricing && (
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">
                      Current {stateName} Rates
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      {formatCurrency(statePricing.priceRange.min)} -{" "}
                      {formatCurrency(statePricing.priceRange.max)}
                    </div>
                    <div className="text-sm text-gray-600">per ton</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Businesses in {cityName} Choose Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Local expertise, professional service, and competitive rates for{" "}
                {cityName} businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 ${feature.color} rounded-lg mb-4`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How It Works in {cityName}
              </h2>
              <p className="text-lg text-gray-600">
                Simple, straightforward process for {cityName} businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Contact Us
                </h3>
                <p className="text-gray-600 text-sm">
                  Call or get a quote online for {cityName} service
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Schedule Pickup
                </h3>
                <p className="text-gray-600 text-sm">
                  We'll arrange convenient pickup times for your {cityName}{" "}
                  location
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  We Collect
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional pickup and weighing at your {cityName} facility
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Get Paid
                </h3>
                <p className="text-gray-600 text-sm">
                  Receive payment within 7 days of pickup
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonial */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-xl italic text-gray-700 mb-6">
                  "The team has been fantastic to work with. They understand our{" "}
                  {cityName} operations and always show up when scheduled. We've
                  turned our cardboard waste from a cost center into a revenue
                  stream."
                </blockquote>
                <div className="text-gray-600">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm">
                    Operations Manager, {cityName} Distribution Center
                  </div>
                </div>
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
              Ready to Start in {cityName}?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join other {cityName} businesses turning their cardboard waste
              into revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Calculator className="w-5 h-5 inline mr-2" />
                Get Free {cityName} Quote
              </Link>
              <Link
                href={`/${params.state}`}
                className="border border-primary-300 hover:border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                View {stateName} Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
