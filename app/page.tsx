import Link from "next/link";
import { ArrowRight, Leaf, TrendingUp, Handshake } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactForm } from "@/components/ui/contact-form";
import { faqItems, serviceOfferings } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        subtitle="♻️ Cardboard Recycling Requests"
        title="Turn Your Cardboard Bales Into a Recycling Program"
        description="Request cardboard bale pickup, sell your baled cardboard or ask about baler rental. We pass your request to partner recyclers and suppliers in our network, and a partner follows up with a quote."
        primaryCta={{
          text: "Get Free Quote",
          href: "/quote",
        }}
        secondaryCta={{
          text: "How It Works",
          href: "/how-it-works",
        }}
      />

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Recycle Your Cardboard Bales?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Baled cardboard is a traded material. Recycling it can lower what
              you spend on trash hauling, and clean bales can often be sold.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Offset Disposal Costs
              </h3>
              <p className="text-gray-600">
                Clean, dry bales can have resale value. Partner buyers quote a
                price based on grade, volume and the current market.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4">
                <Leaf className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Keep Cardboard Out of the Trash
              </h3>
              <p className="text-gray-600">
                Recycled cardboard fiber is used to make new paperboard, so
                recycling your bales keeps that material in use instead of in a
                landfill.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Handshake className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                One Request, Partner Quotes
              </h3>
              <p className="text-gray-600">
                Send one free, no-obligation request. A partner supplier that
                serves your area follows up with pricing and scheduling.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-primary">
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You Can Request
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pickup, bale sales and equipment, all available through partner
              suppliers in our network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOfferings.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqItems}
        className="bg-white"
        description="How requests, partner suppliers and pricing work."
      />

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Recycling?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Tell us about your cardboard and where you are. We pass your
                request to partner suppliers in our network, and a partner
                follows up with a quote.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/quote" className="btn-primary">
                  Get Free Quote
                </Link>
                <Link href="/services" className="btn-outline">
                  Learn More
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Free, no-obligation request
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Pickup schedules set with the partner
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Pricing by quote</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Baled or loose cardboard
                  </span>
                </div>
              </div>
            </div>

            <div>
              <ContactForm
                title="Get Your Free Quote"
                description="Tell us about your cardboard and a partner supplier will follow up."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
