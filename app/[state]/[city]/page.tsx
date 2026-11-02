import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  DollarSign,
  Calculator,
  CheckCircle,
  Truck,
  Wrench,
  Handshake,
} from "lucide-react";
import { serviceAreas } from "@/lib/data";
import { OrganizationJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

interface CityPageProps {
  params: Promise<{
    state: string;
    city: string;
  }>;
}

function slugOf(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function findPlace(stateSlug: string, citySlug: string) {
  const area = serviceAreas.find((a) => slugOf(a.state) === stateSlug);
  const city = area?.cities.find((c) => slugOf(c) === citySlug);
  return area && city ? { stateName: area.state, cityName: city } : null;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return serviceAreas.flatMap((area) =>
    area.cities.map((city) => ({
      state: slugOf(area.state),
      city: slugOf(city),
    }))
  );
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { state, city } = await params;
  const place = findPlace(state, city);
  if (!place) return {};
  const { stateName, cityName } = place;

  return {
    title: `${cityName}, ${stateName} Cardboard Bale Recycling - Pickup Quotes`,
    description: `Request cardboard bale pickup, bale sales or baler rental in ${cityName}, ${stateName}. Requests go to partner suppliers in our network; availability depends on partners near you.`,
    keywords: [
      `${cityName} cardboard recycling`,
      `cardboard bale pickup ${cityName}`,
      `sell cardboard bales ${cityName}`,
      `cardboard recycling ${cityName} ${stateName}`,
    ],
    alternates: { canonical: `/${state}/${city}` },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { state, city } = await params;
  const place = findPlace(state, city);

  if (!place) {
    notFound();
  }

  const { stateName, cityName } = place;

  const serviceFeatures = [
    {
      title: "Pickup Requests",
      description: `Request pickup of baled or loose cardboard in ${cityName}`,
      icon: Truck,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Pricing by Quote",
      description: "Partner buyers quote based on grade, volume and market",
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Partner Network",
      description: `Requests go to partner suppliers that serve ${cityName}`,
      icon: Handshake,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Baler Rental",
      description: "Ask about renting or leasing a baler through a partner",
      icon: Wrench,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const checklist = [
    `Requests from businesses in ${cityName} and nearby`,
    "Free, no-obligation quote request",
    "Baled or loose cardboard",
    "Pickup schedule set with the partner supplier",
    "Availability depends on partner suppliers near you",
  ];

  return (
    <>
      <OrganizationJsonLd city={cityName} state={stateName} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://cardboardbalerecycling.com" },
          { name: "Service Areas", url: "https://cardboardbalerecycling.com/service-areas" },
          { name: stateName, url: `https://cardboardbalerecycling.com/${state}` },
          { name: cityName, url: `https://cardboardbalerecycling.com/${state}/${city}` },
        ]}
      />
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
                Request cardboard bale pickup, sell your bales or ask about
                baler rental in {cityName}, {stateName}. We pass your request
                to partner suppliers in our network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="btn-primary text-lg py-4 px-8">
                  Get {cityName} Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 lg:py-24">
          <div className="container-max">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Requests From {cityName} Businesses
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Stores, warehouses, plants and distribution centers in{" "}
                    {cityName} can send one free request for cardboard bale
                    pickup or a bale purchase quote.
                  </p>

                  <div className="space-y-4">
                    {checklist.map((reason) => (
                      <div key={reason} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Pricing in {cityName}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    What a partner offers depends on your cardboard&apos;s
                    grade and condition, your volume, distance to the nearest
                    mill or processor and the current market. Pricing is by
                    quote.
                  </p>
                  <Link href="/pricing" className="btn-outline">
                    How Pricing Works
                  </Link>
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
                  What You Can Request in {cityName}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  All services are provided by partner suppliers in our
                  network.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceFeatures.map((feature) => (
                  <div
                    key={feature.title}
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
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
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
                  From your request to a partner&apos;s quote
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Request",
                    text: `Send the free quote request for your ${cityName} site`,
                  },
                  {
                    title: "Match",
                    text: "We pass it to partner suppliers that serve your area",
                  },
                  {
                    title: "Follow-Up",
                    text: "A partner supplier contacts you to confirm details",
                  },
                  {
                    title: "Quote",
                    text: "You review the partner's price, schedule and terms",
                  },
                ].map((step, index) => (
                  <div key={step.title} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.text}</p>
                  </div>
                ))}
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
                Send a free request and a partner supplier will follow up.
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
                  href={`/${state}`}
                  className="border border-primary-300 hover:border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                >
                  View {stateName} Page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
