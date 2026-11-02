import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Building, Calculator } from "lucide-react";
import { serviceAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Areas - Cardboard Bale Recycling Requests Across the US",
  description:
    "We accept cardboard bale recycling requests from businesses across the United States. Availability depends on partner suppliers in your area. Browse by state and city.",
  keywords: [
    "cardboard recycling service areas",
    "cardboard pickup near me",
    "cardboard bale collection areas",
    "cardboard recycling by state",
  ],
  alternates: { canonical: "/service-areas" },
};

function formatStateSlug(stateName: string): string {
  return stateName.toLowerCase().replace(/\s+/g, "-");
}

function formatCitySlug(cityName: string): string {
  return cityName.toLowerCase().replace(/\s+/g, "-");
}

const regions = [
  {
    name: "Northeast",
    states: [
      "Maine",
      "New Hampshire",
      "Vermont",
      "Massachusetts",
      "Rhode Island",
      "Connecticut",
      "New York",
      "New Jersey",
      "Pennsylvania",
    ],
  },
  {
    name: "Southeast",
    states: [
      "Delaware",
      "Maryland",
      "Virginia",
      "West Virginia",
      "Kentucky",
      "Tennessee",
      "North Carolina",
      "South Carolina",
      "Georgia",
      "Florida",
      "Alabama",
      "Mississippi",
      "Arkansas",
      "Louisiana",
    ],
  },
  {
    name: "Midwest",
    states: [
      "Ohio",
      "Michigan",
      "Indiana",
      "Illinois",
      "Wisconsin",
      "Minnesota",
      "Iowa",
      "Missouri",
      "North Dakota",
      "South Dakota",
      "Nebraska",
      "Kansas",
    ],
  },
  {
    name: "Southwest",
    states: ["Texas", "Oklahoma", "New Mexico", "Arizona"],
  },
  {
    name: "West",
    states: [
      "Montana",
      "Wyoming",
      "Colorado",
      "Utah",
      "Idaho",
      "Washington",
      "Oregon",
      "Nevada",
      "California",
    ],
  },
  {
    name: "Alaska & Hawaii",
    states: ["Alaska", "Hawaii"],
  },
];

const coveragePoints = [
  {
    title: "Requests from anywhere in the US",
    text: "Any business can send a request, wherever it is.",
  },
  {
    title: "Availability depends on partners",
    text: "Whether pickup, a bale purchase or equipment is available depends on partner suppliers near you.",
  },
  {
    title: "Partners set the terms",
    text: "Price, schedule and service area are set by the partner supplier that follows up.",
  },
  {
    title: "Remote areas",
    text: "In rural areas, Alaska and Hawaii, freight distances can limit options. Send a request and we will pass it on.",
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Service Areas
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We accept cardboard recycling requests from businesses across the
              United States. Availability depends on partner suppliers in your
              area.
            </p>
            <div className="text-center">
              <Link
                href="/quote"
                className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Calculator className="w-5 h-5 inline mr-2" />
                Get Local Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How Coverage Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cardboard Bale Recycling is a referral service. Requests go to
                partner suppliers in our network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coveragePoints.map((point) => (
                <div
                  key={point.title}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-6">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Browse by Region
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose a state for local information.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {region.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {region.states.map((state) => (
                      <Link
                        key={state}
                        href={`/${formatStateSlug(state)}`}
                        className="inline-block bg-primary-50 hover:bg-primary-100 text-primary-700 hover:text-primary-800 text-xs font-medium px-3 py-2 rounded transition-colors duration-200 border border-primary-200 hover:border-primary-300"
                      >
                        {state}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All States Directory */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                State and City Directory
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Local pages for states and cities where businesses often
                request cardboard recycling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAreas.map((stateArea) => (
                <div
                  key={stateArea.state}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg">
                      <Building className="w-5 h-5 text-primary-600" />
                    </div>
                    <Link
                      href={`/${formatStateSlug(stateArea.state)}`}
                      className="font-bold text-gray-900 hover:text-primary-600 transition-colors"
                    >
                      {stateArea.state}
                    </Link>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Cities:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stateArea.cities.map((city) => (
                        <Link
                          key={city}
                          href={`/${formatStateSlug(
                            stateArea.state
                          )}/${formatCitySlug(city)}`}
                          className="text-xs bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-700 px-2 py-1 rounded border border-gray-200 hover:border-primary-200 transition-colors duration-200"
                        >
                          {city}
                        </Link>
                      ))}
                    </div>
                  </div>
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
              Request Cardboard Recycling in Your Area
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Send a free request and we will pass it to partner suppliers that
              serve your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Calculator className="w-5 h-5 inline mr-2" />
                Get Local Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
