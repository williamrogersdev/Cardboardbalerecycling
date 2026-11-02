import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardList,
  Share2,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Recycle,
  DollarSign,
  Clock,
  Package,
  Calculator,
} from "lucide-react";
import { HowToJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "How It Works - Cardboard Bale Recycling Requests",
  description:
    "How a cardboard recycling request works: you send one free request, we pass it to partner suppliers in our network, and a partner follows up with a quote.",
  keywords: [
    "how cardboard recycling works",
    "cardboard bale process",
    "cardboard pickup process",
    "sell cardboard bales",
    "cardboard recycling quote",
  ],
  alternates: { canonical: "/how-it-works" },
};

const processSteps = [
  {
    id: 1,
    title: "Send Your Request",
    description:
      "Fill in the free, no-obligation quote request. Tell us what you need, your monthly cardboard volume and where your business is.",
    icon: ClipboardList,
    details: [
      "Free request form",
      "Baled or loose cardboard",
      "Pickup, bale sales or baler rental",
      "No obligation",
    ],
  },
  {
    id: 2,
    title: "We Pass It to Partners",
    description:
      "Cardboard Bale Recycling is a referral service. We send your request to partner recyclers and suppliers in our network that serve your area.",
    icon: Share2,
    details: [
      "Matched by location and service",
      "Your details go only to partners preparing a quote",
      "Availability depends on partners near you",
    ],
  },
  {
    id: 3,
    title: "A Partner Follows Up",
    description:
      "A partner supplier contacts you to confirm details such as bale size, grade, access for trucks and how often you need pickup.",
    icon: MessageSquare,
    details: [
      "Questions about your material and site",
      "Pickup schedule options",
      "Equipment options if you need a baler",
    ],
  },
  {
    id: 4,
    title: "Review the Quote",
    description:
      "The partner prepares a quote. Prices, weighing, payment terms and schedules are set by the partner, and you decide whether to go ahead.",
    icon: DollarSign,
    details: [
      "Pricing by quote",
      "Terms set by the partner supplier",
      "You decide whether to proceed",
    ],
  },
];

const tips = [
  {
    title: "Keep Bales Clean",
    description:
      "Remove plastic film, foam, wood and food waste before baling. Clean bales are easier to sell.",
    icon: Recycle,
  },
  {
    title: "Keep Bales Dry",
    description:
      "Store bales under cover. Wet cardboard weighs more but is worth less and can be refused.",
    icon: Package,
  },
  {
    title: "Know Your Volume",
    description:
      "An estimate of your monthly volume helps a partner suggest the right pickup schedule and equipment.",
    icon: Calculator,
  },
  {
    title: "Plan Storage",
    description:
      "Think about where bales will wait for pickup and how a truck will reach them.",
    icon: Clock,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <HowToJsonLd />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                How It Works
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                One request reaches partner recyclers and suppliers in our
                network. Here is what happens after you send it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="border border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                >
                  View Services
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
                  Four Steps
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From your request to a partner supplier&apos;s quote.
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Visual */}
                    <div className="flex-1 max-w-md">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                        <div className="text-center">
                          <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg mx-auto mb-6 border border-gray-200">
                            <step.icon className="w-12 h-12 text-primary-500" />
                          </div>
                          <p className="text-xl font-bold text-gray-900">
                            Step {step.id}: {step.title}
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

        {/* Tips Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-max">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Before You Request a Quote
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A few things that make cardboard easier to collect and sell.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tips.map((tip) => (
                  <div
                    key={tip.title}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                      <tip.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tip.description}
                    </p>
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
                Send a free request and a partner supplier will follow up.
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
                  How Pricing Works
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
