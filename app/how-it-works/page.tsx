import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Truck,
  Scale,
  DollarSign,
  CheckCircle,
  Clock,
  Recycle,
  ArrowRight,
  FileText,
  Calculator,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works - Cardboard Bale Recycling Process",
  description:
    "Learn how our cardboard bale recycling process works. From initial contact to payment, discover how we turn your cardboard waste into revenue.",
  keywords: [
    "how cardboard recycling works",
    "cardboard bale process",
    "recycling steps",
    "cardboard pickup process",
    "cardboard waste management",
  ],
};

const processSteps = [
  {
    id: 1,
    title: "Contact & Assessment",
    description:
      "Get in touch with us for a free consultation. We'll assess your cardboard volume and provide a customized recycling plan.",
    icon: Phone,
    details: [
      "Free initial consultation",
      "Volume assessment",
      "Custom recycling plan",
      "No obligation quote",
    ],
    timeframe: "Same day response",
  },
  {
    id: 2,
    title: "Pickup Scheduling",
    description:
      "We schedule convenient pickup times that work with your business operations. No disruption to your workflow.",
    icon: Truck,
    details: [
      "Flexible scheduling",
      "Regular pickup routes",
      "Emergency pickups available",
      "Professional logistics team",
    ],
    timeframe: "24-48 hours",
  },
  {
    id: 3,
    title: "Weighing & Documentation",
    description:
      "We weigh your cardboard bales on-site and provide detailed documentation for your records.",
    icon: Scale,
    details: [
      "Certified scale equipment",
      "Detailed weight certificates",
      "Chain of custody documentation",
      "Digital record keeping",
    ],
    timeframe: "During pickup",
  },
  {
    id: 4,
    title: "Payment Processing",
    description:
      "Receive prompt payment based on current market rates. We offer multiple payment options for your convenience.",
    icon: DollarSign,
    details: [
      "Competitive market rates",
      "Multiple payment methods",
      "Transparent pricing",
      "Regular payment reports",
    ],
    timeframe: "Within 7 days",
  },
];

const benefits = [
  {
    title: "Environmental Impact",
    description:
      "Help reduce landfill waste and support sustainable recycling practices.",
    icon: Recycle,
    stats: "Up to 95% waste reduction",
  },
  {
    title: "Revenue Generation",
    description:
      "Turn your waste disposal costs into a revenue stream for your business.",
    icon: DollarSign,
    stats: "Average 15-25% ROI",
  },
  {
    title: "Time Savings",
    description:
      "No need to manage waste disposal logistics - we handle everything.",
    icon: Clock,
    stats: "Save 10+ hours/month",
  },
  {
    title: "Compliance Assurance",
    description:
      "Meet environmental regulations with proper documentation and processes.",
    icon: FileText,
    stats: "100% compliance rate",
  },
];

export default function HowItWorksPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              How Our Process Works
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From initial contact to payment, discover how we make cardboard
              recycling simple, profitable, and environmentally responsible for
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Simple 4-Step Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our streamlined process ensures maximum efficiency and value for
                your cardboard recycling needs.
              </p>
            </div>

            <div className="space-y-8 lg:space-y-16">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full shadow-lg">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary-600 mb-1">
                          Step {step.id}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-primary-600 font-semibold">
                      <Clock className="w-5 h-5" />
                      <span>Timeframe: {step.timeframe}</span>
                    </div>
                  </div>

                  {/* Step Visual */}
                  <div className="flex-1 max-w-md">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                      <div className="text-center">
                        <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg mx-auto mb-6 border border-gray-200">
                          <step.icon className="w-12 h-12 text-primary-500" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-600">
                          Professional and reliable service at every step
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow (except for last step) */}
                  {index < processSteps.length - 1 && (
                    <div className="flex lg:hidden items-center justify-center w-full py-4">
                      <ArrowRight className="w-8 h-8 text-primary-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Process?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our proven process delivers measurable benefits for your
                business and the environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                    <benefit.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="text-primary-600 font-semibold text-sm">
                    {benefit.stats}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join thousands of businesses that have transformed their cardboard
              waste into revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Calculator className="w-5 h-5 inline mr-2" />
                Get Free Quote
              </Link>
              <Link
                href="/pricing"
                className="border border-primary-300 hover:border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
