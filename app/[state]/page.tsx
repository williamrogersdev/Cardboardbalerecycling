import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Building,
  DollarSign,
  Calculator,
  CheckCircle,
  Truck,
  Wrench,
  Handshake,
} from "lucide-react";
import { serviceAreas } from "@/lib/data";
import { OrganizationJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

interface StatePageProps {
  params: Promise<{
    state: string;
  }>;
}

function slugOf(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function findState(stateSlug: string) {
  return serviceAreas.find((area) => slugOf(area.state) === stateSlug);
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    state: slugOf(area.state),
  }));
}

export async function generateMetadata({
  params,
}: StatePageProps): Promise<Metadata> {
  const { state } = await params;
  const stateName = findState(state)?.state ?? state;

  return {
    title: `${stateName} Cardboard Bale Recycling - Pickup and Bale Sales Quotes`,
    description: `Request cardboard bale pickup, bale sales or baler rental in ${stateName}. Requests go to partner suppliers in our network; availability depends on partners near you.`,
    keywords: [
      `${stateName} cardboard recycling`,
      `cardboard bale pickup ${stateName}`,
      `sell cardboard bales ${stateName}`,
      `cardboard recycling services ${stateName}`,
    ],
    alternates: { canonical: `/${state}` },
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { state } = await params;
  const stateService = findState(state);

  if (!stateService) {
    notFound();
  }

  const stateName = stateService.state;

  const features = [
    {
      title: "Pickup Requests",
      text: `Request pickup of baled or loose cardboard anywhere in ${stateName}.`,
      icon: Truck,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Pricing by Quote",
      text: "Partner buyers quote based on grade, volume and the current market.",
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Partner Network",
      text: `Requests go to partner suppliers that serve ${stateName}.`,
      icon: Handshake,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Baler Rental",
      text: "Ask about renting or leasing a baler through a partner supplier.",
      icon: Wrench,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <>
      <OrganizationJsonLd state={stateName} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://cardboardbalerecycling.com" },
          { name: "Service Areas", url: "https://cardboardbalerecycling.com/service-areas" },
          { name: stateName, url: `https://cardboardbalerecycling.com/${state}` },
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
                  {stateName}
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Cardboard Bale Recycling in {stateName}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Request cardboard bale pickup, sell your bales or ask about
                baler rental in {stateName}. We pass your request to partner
                suppliers in our network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="btn-primary text-lg py-4 px-8">
                  Get {stateName} Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* State Overview */}
        <section className="py-16 lg:py-24">
          <div className="container-max">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Requests From {stateName} Businesses
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Stores, warehouses, plants and distribution centers in{" "}
                    {stateName} can send one free request. Availability depends
                    on partner suppliers near you.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Free, no-obligation quote request",
                      "Baled or loose cardboard",
                      "Pickup schedule set with the partner",
                      "Pricing by quote from partner buyers",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Pricing in {stateName}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Cardboard prices change with the market and depend on grade,
                    bale condition, volume and distance to the nearest mill or
                    processor. A partner supplier quotes after reviewing your
                    request.
                  </p>
                  <Link href="/pricing" className="btn-outline">
                    How Pricing Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-max">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Cities in {stateName}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Local pages for cities where businesses often request
                  cardboard recycling. Requests from elsewhere in {stateName}{" "}
                  are welcome too.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stateService.cities.map((city) => (
                  <Link
                    key={city}
                    href={`/${state}/${slugOf(city)}`}
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
                      Cardboard recycling requests in {city}
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

        {/* Features */}
        <section className="py-16 lg:py-24">
          <div className="container-max">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What You Can Request in {stateName}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  All services are provided by partner suppliers in our network.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="text-center">
                    <div
                      className={`flex items-center justify-center w-16 h-16 ${feature.color} rounded-full mx-auto mb-4`}
                    >
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{feature.text}</p>
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
                Ready to Start Recycling in {stateName}?
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
    </>
  );
}
