import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { ContactForm } from "@/components/ui/contact-form";
import { serviceOfferings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive cardboard bale recycling services including collection, processing, revenue sharing, compliance support, and equipment rental.",
  keywords: [
    "cardboard bale collection",
    "cardboard processing",
    "revenue sharing",
    "equipment rental",
    "compliance support",
    "cardboard recycling services",
  ],
};

export default function ServicesPage(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        subtitle="🚛 Full-Service Solutions"
        title="Complete Cardboard Recycling Services"
        description="From collection to cash, we provide end-to-end cardboard bale recycling services that maximize your revenue while minimizing your environmental impact."
        primaryCta={{
          text: "Get Service Quote",
          href: "/quote",
        }}
        secondaryCta={{
          text: "View Pricing",
          href: "/pricing",
        }}
      />

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Successful Recycling
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive service portfolio covers every aspect of
              cardboard bale recycling, ensuring maximum efficiency and
              profitability for your business.
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
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach that maximizes value and minimizes hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Assessment
              </h3>
              <p className="text-gray-600">
                We evaluate your cardboard waste volume, quality, and logistics
                requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Setup</h3>
              <p className="text-gray-600">
                Custom pickup schedule, equipment installation (if needed), and
                team training.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Collection
              </h3>
              <p className="text-gray-600">
                Regular pickup by professional drivers with real-time tracking
                and reporting.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Payment</h3>
              <p className="text-gray-600">
                Processing, grading, and payment within 30 days with detailed
                reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored recycling programs for different business types and
              industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Retail & Grocery
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700">Daily pickup options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700">Compact baler rental</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700">
                    Store-specific scheduling
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm">
                Perfect for retailers with consistent cardboard volumes from
                shipments and displays.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Manufacturing
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700">Large volume handling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700">Industrial balers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700">
                    Compliance documentation
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm">
                Designed for manufacturers with high-volume cardboard waste from
                packaging and shipping.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Warehousing & Distribution
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700">Multiple pickup points</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700">Volume-based pricing</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm">
                Optimized for distribution centers with fluctuating volumes and
                multiple locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Guarantees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand behind our services with industry-leading commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 card-shadow">
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  24hr
                </div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 card-shadow">
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  99%
                </div>
                <div className="text-sm text-gray-600">On-Time Pickup</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 card-shadow">
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  30 Day
                </div>
                <div className="text-sm text-gray-600">Payment Terms</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 card-shadow">
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Start Your Recycling Program Today
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of businesses already benefiting from our
                comprehensive cardboard recycling services. Get started with a
                free assessment and custom quote.
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
                description="Tell us about your business and we'll recommend the best recycling solution for your needs."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
