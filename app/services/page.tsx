import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { ContactForm } from "@/components/ui/contact-form";
import { serviceOfferings } from "@/lib/data";
import { ServiceJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Cardboard Recycling Services - Bale Pickup, Bale Sales & Baler Rental",
  description:
    "Request cardboard bale pickup, sell baled cardboard, arrange loose cardboard pickup or ask about baler rental. Partner suppliers in our network prepare the quotes.",
  keywords: [
    "cardboard bale collection",
    "sell cardboard bales",
    "loose cardboard pickup",
    "baler rental",
    "cardboard recycling services",
    "commercial recycling",
    "OCC recycling services",
  ],
  alternates: { canonical: "/services" },
};

const industries = [
  {
    title: "Retail & Grocery",
    points: [
      "Cardboard from deliveries and displays",
      "Vertical balers suit back-of-store space",
      "Pickup timed around store deliveries",
    ],
    note: "A common fit for stores with steady cardboard from incoming shipments.",
  },
  {
    title: "Manufacturing",
    points: [
      "Larger volumes from packaging and shipping",
      "Horizontal balers for high volumes",
      "Bales sold to partner buyers by quote",
    ],
    note: "For plants that generate cardboard from inbound materials and outbound packaging.",
  },
  {
    title: "Warehousing & Distribution",
    points: [
      "Volumes that rise and fall with the season",
      "Several pickup points on one site",
      "Pickup frequency matched to your volume",
    ],
    note: "For distribution centers where cardboard builds up quickly at the docks.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServiceJsonLd />
      {/* Hero Section */}
      <HeroSection
        subtitle="🚛 Through Partner Suppliers"
        title="Cardboard Recycling Services"
        description="Pickup for baled or loose cardboard, quotes for selling your bales and baler rental, all available through partner recyclers and suppliers in our network."
        primaryCta={{
          text: "Get Service Quote",
          href: "/quote",
        }}
        secondaryCta={{
          text: "How Pricing Works",
          href: "/pricing",
        }}
      />

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You Can Request
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cardboard Bale Recycling is a referral service. Each service below
              is provided by a partner supplier in our network, which sets its
              own prices, schedules and terms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceOfferings.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                benefits={service.benefits}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How a Request Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From your request to a partner&apos;s quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Request",
                text: "Tell us your cardboard volume, location and what you need.",
              },
              {
                title: "Match",
                text: "We pass your request to partner suppliers that serve your area.",
              },
              {
                title: "Quote",
                text: "A partner supplier follows up to confirm details and prepare a quote.",
              },
              {
                title: "Decide",
                text: "You review the partner's price, schedule and terms before anything is agreed.",
              },
            ].map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mx-auto mb-4 font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Business Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cardboard recycling looks different depending on how much you
              generate and how much space you have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.title} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {industry.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 text-sm">{industry.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Start Your Recycling Program
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Send a free, no-obligation request. A partner supplier in our
                network follows up to discuss pickup, pricing and equipment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn-primary">
                  Get Service Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/how-it-works" className="btn-outline">
                  Learn How It Works
                </Link>
              </div>
            </div>

            <div>
              <ContactForm
                title="Request Service Information"
                description="Tell us about your business and a partner supplier will follow up."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
