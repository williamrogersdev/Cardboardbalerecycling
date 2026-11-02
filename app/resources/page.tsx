import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Layers,
  Wrench,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Calculator,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources - Cardboard Bale Recycling Guide",
  description:
    "A practical guide to cardboard bale recycling: common cardboard grades, how to make a clean bale, vertical and horizontal balers, and questions to ask a recycler.",
  keywords: [
    "cardboard recycling guide",
    "OCC grade",
    "how to bale cardboard",
    "vertical baler vs horizontal baler",
    "cardboard bale preparation",
  ],
  alternates: { canonical: "/resources" },
};

const grades = [
  {
    name: "Old Corrugated Containers (OCC)",
    description:
      "Used corrugated boxes and sheets, the most common grade from stores, warehouses and plants.",
  },
  {
    name: "Double-Lined Kraft (DLK)",
    description:
      "New corrugated cuttings and offcuts from box plants and converters. Usually cleaner than OCC.",
  },
  {
    name: "Mixed Paper",
    description:
      "Boxboard such as cereal and shoe boxes, office paper and other paper mixed together. Kept separate from corrugated where possible.",
  },
];

const doList = [
  "Flatten boxes before baling",
  "Remove plastic film, foam and packing peanuts",
  "Keep bales dry and under cover",
  "Make bales a consistent size and weight",
  "Tie bales with the wire or strapping your baler is designed for",
];

const dontList = [
  "Wax-coated boxes (often used for produce and meat)",
  "Cardboard soaked with food, grease or oil",
  "Wood pallets, metal or trash in the bale",
  "Wet or moldy cardboard",
];

const balerTypes = [
  {
    name: "Vertical Balers",
    description:
      "Compact, loaded from the front and common in retail stores and smaller warehouses. They suit lower to moderate volumes and limited floor space.",
  },
  {
    name: "Horizontal Balers",
    description:
      "Larger machines, often fed by conveyor, used by distribution centers and plants with high volumes. They need more space and a bigger investment.",
  },
  {
    name: "Compactors",
    description:
      "Compress cardboard into a container that is hauled away. An option when baling isn't practical.",
  },
];

const questions = [
  "Do you buy my bales, collect them at no charge or charge for pickup?",
  "How are bales weighed, and how is the price set?",
  "What grade and condition do you accept?",
  "How often can you pick up, and what access do your trucks need?",
  "If I rent a baler, who handles installation, service and repairs?",
  "What are the contract length and payment terms?",
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cardboard Bale Recycling Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Practical information on cardboard grades, making good bales,
              choosing equipment and what to ask a recycler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#grades"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5 inline mr-2" />
                Start Reading
              </Link>
              <Link
                href="/quote"
                className="border border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grades */}
      <section id="grades" className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Common Cardboard Grades
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Buyers sort recovered paper into grades. Keeping grades apart
                makes your material easier to sell.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {grades.map((grade) => (
                <div
                  key={grade.name}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                    <Layers className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {grade.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {grade.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bale prep */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Making a Clean Bale
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Clean, dry, consistent bales are easier to collect and sell.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Do</h3>
                <ul className="space-y-3">
                  {doList.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Keep Out of the Bale
                </h3>
                <ul className="space-y-3">
                  {dontList.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Balers and Compactors
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The right equipment depends on your volume and space. Partner
                suppliers can advise on rental or lease options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {balerTypes.map((type) => (
                <div
                  key={type.name}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                    <Wrench className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center mt-8">
              Balers are powerful machines. Follow the manufacturer&apos;s
              instructions and check current safety regulations for operating
              them.
            </p>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Questions to Ask a Recycler
              </h2>
              <p className="text-lg text-gray-600">
                Useful to have answered before you agree to a quote.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <ul className="space-y-4">
                {questions.map((question) => (
                  <li key={question} className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-50 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready for a Quote?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Send a free, no-obligation request and a partner supplier in
                our network will follow up.
              </p>
              <Link
                href="/quote"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
              >
                <Calculator className="w-5 h-5 inline mr-2" />
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
