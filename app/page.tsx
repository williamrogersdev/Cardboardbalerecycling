import Link from "next/link";
import { ArrowRight, Leaf, TrendingUp, Shield } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ContactForm } from "@/components/ui/contact-form";
import { serviceOfferings, testimonials } from "@/lib/data";

export default function HomePage(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        subtitle="♻️ Sustainable Waste Management"
        title="Turn Your Cardboard Waste Into Revenue"
        description="Professional cardboard bale recycling services that help businesses reduce costs, generate income, and meet environmental goals. We handle pickup, processing, and payment - you just focus on your business."
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
              Why Choose Cardboard Bale Recycling?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your waste management from a cost center into a revenue
              stream while supporting environmental sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Generate Revenue
              </h3>
              <p className="text-gray-600">
                Turn your cardboard waste into a profitable revenue stream with
                competitive market rates up to $120 per ton.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4">
                <Leaf className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Environmental Impact
              </h3>
              <p className="text-gray-600">
                Support sustainability goals and reduce your carbon footprint
                while meeting environmental compliance requirements.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Professional Service
              </h3>
              <p className="text-gray-600">
                Reliable pickup schedules, professional documentation, and
                transparent pricing with dedicated account management.
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
              Comprehensive Recycling Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pickup to payment, we handle every aspect of your cardboard
              recycling program.
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

      {/* Statistics Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50</div>
              <div className="text-primary-100">States Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$120</div>
              <div className="text-primary-100">Max Price/Ton</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24hrs</div>
              <div className="text-primary-100">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of businesses already profiting from their
              cardboard waste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
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
                Ready to Start Recycling?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get a free quote and discover how much revenue you can generate
                from your cardboard waste. Our experts will assess your needs
                and provide a customized recycling solution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    Free assessment and quote
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Flexible pickup schedules
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Competitive market rates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Professional documentation
                  </span>
                </div>
              </div>
            </div>

            <div>
              <ContactForm
                title="Get Your Free Quote"
                description="Tell us about your cardboard waste and we'll provide a customized recycling solution."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
