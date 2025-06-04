import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Truck,
  Phone,
  CheckCircle,
  Clock,
  Users,
  Building,
  Globe,
  Star,
  Calculator,
  ExternalLink,
} from "lucide-react";
import { serviceAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Areas - Nationwide Cardboard Bale Recycling Coverage",
  description:
    "Discover our nationwide cardboard bale recycling service areas. We serve all 50 states with professional pickup, processing, and revenue-sharing programs.",
  keywords: [
    "cardboard recycling service areas",
    "nationwide cardboard pickup",
    "cardboard recycling coverage",
    "cardboard bale collection areas",
    "recycling service locations",
  ],
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
    hubCity: "New York, NY",
    coverage: "95%",
    avgResponseTime: "24 hours",
    specialties: [
      "High-volume commercial",
      "Dense urban areas",
      "Logistics optimization",
    ],
    coordinator: "Northeast Operations Team",
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
    hubCity: "Atlanta, GA",
    coverage: "98%",
    avgResponseTime: "36 hours",
    specialties: [
      "Manufacturing districts",
      "Port logistics",
      "Distribution centers",
    ],
    coordinator: "Southeast Operations Team",
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
    hubCity: "Chicago, IL",
    coverage: "92%",
    avgResponseTime: "48 hours",
    specialties: [
      "Industrial complexes",
      "Agricultural packaging",
      "Transportation hubs",
    ],
    coordinator: "Midwest Operations Team",
  },
  {
    name: "Southwest",
    states: ["Texas", "Oklahoma", "New Mexico", "Arizona"],
    hubCity: "Dallas, TX",
    coverage: "94%",
    avgResponseTime: "42 hours",
    specialties: [
      "Oil & gas industry",
      "Large-scale operations",
      "Border logistics",
    ],
    coordinator: "Southwest Operations Team",
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
    hubCity: "Los Angeles, CA",
    coverage: "89%",
    avgResponseTime: "36 hours",
    specialties: [
      "Tech industry",
      "E-commerce fulfillment",
      "Environmental compliance",
    ],
    coordinator: "West Coast Operations Team",
  },
  {
    name: "Alaska & Hawaii",
    states: ["Alaska", "Hawaii"],
    hubCity: "Special Logistics",
    coverage: "85%",
    avgResponseTime: "7-14 days",
    specialties: [
      "Remote logistics",
      "Seasonal operations",
      "Specialized shipping",
    ],
    coordinator: "Remote Operations Team",
  },
];

const serviceFeatures = [
  {
    title: "Nationwide Coverage",
    description:
      "Complete coverage across all 50 states with regional expertise and local knowledge.",
    icon: Globe,
    stat: "50 States Covered",
  },
  {
    title: "Regional Hubs",
    description:
      "Strategically located processing facilities ensure efficient logistics and faster service.",
    icon: Building,
    stat: "12 Regional Hubs",
  },
  {
    title: "Dedicated Teams",
    description:
      "Local teams understand regional regulations, markets, and business needs.",
    icon: Users,
    stat: "250+ Team Members",
  },
  {
    title: "Premium Service",
    description:
      "Consistent high-quality service standards maintained across all service areas.",
    icon: Star,
    stat: "98% Satisfaction Rate",
  },
];

const majorCities = [
  { name: "New York, NY", population: "8.3M", businesses: "12,000+" },
  { name: "Los Angeles, CA", population: "4.0M", businesses: "8,500+" },
  { name: "Chicago, IL", population: "2.7M", businesses: "6,200+" },
  { name: "Houston, TX", population: "2.3M", businesses: "5,800+" },
  { name: "Phoenix, AZ", population: "1.7M", businesses: "4,100+" },
  { name: "Philadelphia, PA", population: "1.6M", businesses: "3,900+" },
  { name: "San Antonio, TX", population: "1.5M", businesses: "3,200+" },
  { name: "San Diego, CA", population: "1.4M", businesses: "3,100+" },
  { name: "Dallas, TX", population: "1.3M", businesses: "4,700+" },
  { name: "Austin, TX", population: "1.0M", businesses: "2,800+" },
  { name: "Jacksonville, FL", population: "950K", businesses: "2,400+" },
  { name: "San Jose, CA", population: "1.0M", businesses: "2,900+" },
];

export default function ServiceAreasPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nationwide Service Coverage
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From coast to coast, we provide professional cardboard bale
              recycling services across all 50 states with regional expertise
              and local support.
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

      {/* Service Features */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our National Network?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our extensive network ensures consistent, reliable service no
                matter where your business is located.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-primary-600 font-semibold text-sm">
                    {feature.stat}
                  </div>
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
                Regional Service Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our regional approach ensures specialized expertise and
                optimized logistics for your area. Click any state to view
                detailed coverage.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {region.name}
                      </h3>
                      <p className="text-gray-600">Hub: {region.hubCity}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-600">
                        {region.coverage}
                      </div>
                      <div className="text-sm text-gray-600">Coverage Rate</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-600">
                        {region.avgResponseTime}
                      </div>
                      <div className="text-sm text-gray-600">Avg Response</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      States Served:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {region.states.map((state, idx) => (
                        <Link
                          key={idx}
                          href={`/${formatStateSlug(state)}`}
                          className="inline-block bg-primary-50 hover:bg-primary-100 text-primary-700 hover:text-primary-800 text-xs font-medium px-3 py-2 rounded transition-colors duration-200 border border-primary-200 hover:border-primary-300"
                        >
                          {state}
                          <ExternalLink className="w-3 h-3 inline ml-1" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Specialties:
                    </h4>
                    <div className="space-y-2">
                      {region.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {specialty}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Users className="w-4 h-4" />
                      <span>Managed by: {region.coordinator}</span>
                    </div>
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
                Complete State Directory
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Click any state or city to view local service information and
                pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAreas.map((stateArea, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg">
                      <Building className="w-5 h-5 text-primary-600" />
                    </div>
                    <Link
                      href={`/${formatStateSlug(stateArea.state)}`}
                      className="font-bold text-gray-900 hover:text-primary-600 transition-colors group"
                    >
                      {stateArea.state}
                      <ExternalLink className="w-4 h-4 inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Cities We Serve:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stateArea.cities.map((city, cityIdx) => (
                        <Link
                          key={cityIdx}
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

                  <div className="pt-3 border-t border-gray-200">
                    <Link
                      href={`/${formatStateSlug(stateArea.state)}`}
                      className="text-primary-600 hover:text-primary-700 font-semibold text-sm inline-flex items-center gap-1"
                    >
                      View {stateArea.state} Details
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Serving Major Metropolitan Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide specialized services to the largest business centers
                across America.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {majorCities.map((city, index) => {
                const [cityName, stateAbbr] = city.name.split(", ");
                const fullStateName =
                  serviceAreas.find((area) =>
                    area.state
                      .toLowerCase()
                      .includes(stateAbbr?.toLowerCase().replace(/[^a-z]/g, ""))
                  )?.state || stateAbbr;

                return (
                  <Link
                    key={index}
                    href={
                      fullStateName
                        ? `/${formatStateSlug(fullStateName)}/${formatCitySlug(
                            cityName
                          )}`
                        : "#"
                    }
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary-100 group-hover:bg-primary-200 rounded-lg transition-colors">
                        <Building className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {city.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Population: {city.population}
                        </p>
                      </div>
                    </div>
                    <div className="text-primary-600 group-hover:text-primary-700 font-semibold text-sm flex items-center gap-1">
                      {city.businesses} Businesses Served
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Service Standards Across All Areas
                </h2>
                <p className="text-lg text-gray-600">
                  No matter where you're located, you'll receive the same
                  high-quality service and support.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Reliable Pickup Schedule
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Consistent, on-time pickups tailored to your business
                        needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Professional Equipment
                      </h3>
                      <p className="text-gray-600 text-sm">
                        State-of-the-art trucks and certified weighing systems
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Competitive Pricing
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Fair market rates based on current commodity prices
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Complete Documentation
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Detailed records and certificates for compliance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Local Support
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Dedicated regional teams for personalized service
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Fast Payment
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Prompt payment processing within 7 business days
                      </p>
                    </div>
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
              Ready to Start Recycling in Your Area?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              No matter where you're located, we're ready to serve your
              cardboard recycling needs.
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
