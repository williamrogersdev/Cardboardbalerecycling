import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Calculator,
  FileText,
  Download,
  TrendingUp,
  Recycle,
  Lightbulb,
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Users,
  BarChart3,
  Leaf,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources - Cardboard Recycling Guides, Tools & Information",
  description:
    "Access comprehensive cardboard recycling resources including guides, calculators, market trends, and educational materials to maximize your recycling program.",
  keywords: [
    "cardboard recycling guides",
    "recycling calculator",
    "cardboard market trends",
    "recycling resources",
    "sustainability guides",
    "waste management tools",
  ],
};

const resourceCategories = [
  {
    title: "Getting Started Guides",
    description:
      "Essential information for businesses new to cardboard recycling",
    icon: BookOpen,
    color: "bg-blue-500",
    resources: [
      {
        title: "Cardboard Recycling 101",
        description:
          "Complete beginner's guide to cardboard recycling for businesses",
        type: "Guide",
        downloadUrl: "#",
        readTime: "5 min read",
      },
      {
        title: "Setting Up Your Program",
        description:
          "Step-by-step instructions for implementing a recycling program",
        type: "Checklist",
        downloadUrl: "#",
        readTime: "3 min read",
      },
      {
        title: "Quality Standards Guide",
        description: "Learn what makes cardboard suitable for recycling",
        type: "Guide",
        downloadUrl: "#",
        readTime: "4 min read",
      },
    ],
  },
  {
    title: "Financial Tools",
    description: "Calculators and tools to estimate your recycling revenue",
    icon: Calculator,
    color: "bg-green-500",
    resources: [
      {
        title: "Revenue Calculator",
        description:
          "Calculate potential monthly revenue from your cardboard waste",
        type: "Calculator",
        downloadUrl: "#",
        readTime: "Interactive",
      },
      {
        title: "ROI Analysis Template",
        description: "Excel template to analyze return on investment",
        type: "Template",
        downloadUrl: "#",
        readTime: "Download",
      },
      {
        title: "Cost Comparison Tool",
        description: "Compare disposal costs vs. recycling revenue",
        type: "Tool",
        downloadUrl: "#",
        readTime: "Interactive",
      },
    ],
  },
  {
    title: "Market Intelligence",
    description: "Stay informed about cardboard market trends and pricing",
    icon: TrendingUp,
    color: "bg-purple-500",
    resources: [
      {
        title: "Monthly Market Report",
        description: "Current cardboard commodity prices and market trends",
        type: "Report",
        downloadUrl: "#",
        readTime: "10 min read",
      },
      {
        title: "Price Forecast 2024",
        description: "Expert predictions for cardboard market pricing",
        type: "Analysis",
        downloadUrl: "#",
        readTime: "8 min read",
      },
      {
        title: "Industry Trends",
        description: "Latest developments in cardboard recycling industry",
        type: "Insights",
        downloadUrl: "#",
        readTime: "6 min read",
      },
    ],
  },
  {
    title: "Compliance & Documentation",
    description: "Legal requirements and documentation for recycling programs",
    icon: FileText,
    color: "bg-orange-500",
    resources: [
      {
        title: "Compliance Checklist",
        description: "Ensure your recycling program meets all regulations",
        type: "Checklist",
        downloadUrl: "#",
        readTime: "5 min read",
      },
      {
        title: "Documentation Templates",
        description: "Standard forms and certificates for record keeping",
        type: "Templates",
        downloadUrl: "#",
        readTime: "Download",
      },
      {
        title: "Environmental Impact Report",
        description: "Template for measuring your environmental benefits",
        type: "Template",
        downloadUrl: "#",
        readTime: "Download",
      },
    ],
  },
];

const quickStats = [
  {
    title: "Environmental Impact",
    stats: [
      { label: "CO2 Saved per Ton", value: "3.3 tons", icon: Leaf },
      { label: "Trees Saved per Ton", value: "17 trees", icon: Leaf },
      { label: "Energy Saved", value: "64% less", icon: Lightbulb },
      { label: "Water Saved", value: "50% less", icon: Recycle },
    ],
  },
  {
    title: "Financial Benefits",
    stats: [
      { label: "Average Revenue per Ton", value: "$85-120", icon: DollarSign },
      { label: "Disposal Cost Savings", value: "$45-75", icon: TrendingUp },
      { label: "Monthly ROI", value: "15-25%", icon: BarChart3 },
      { label: "Payback Period", value: "2-4 months", icon: Calculator },
    ],
  },
];

const featuredTools = [
  {
    title: "Revenue Calculator",
    description:
      "Calculate your potential monthly revenue from cardboard recycling",
    icon: Calculator,
    features: [
      "Volume estimation",
      "Market rate pricing",
      "Monthly projections",
      "ROI analysis",
    ],
    ctaText: "Launch Calculator",
    ctaUrl: "#calculator",
  },
  {
    title: "Sustainability Tracker",
    description:
      "Track and report your environmental impact and carbon footprint reduction",
    icon: Leaf,
    features: [
      "CO2 reduction tracking",
      "Environmental reports",
      "Goal setting",
      "Progress monitoring",
    ],
    ctaText: "Start Tracking",
    ctaUrl: "#tracker",
  },
  {
    title: "Market Insights Dashboard",
    description: "Real-time cardboard commodity prices and market trends",
    icon: TrendingUp,
    features: [
      "Live pricing data",
      "Market forecasts",
      "Price alerts",
      "Industry news",
    ],
    ctaText: "View Dashboard",
    ctaUrl: "#dashboard",
  },
];

const educationalContent = [
  {
    title: "Cardboard Recycling Best Practices",
    description:
      "Learn industry best practices for maximum efficiency and revenue",
    author: "Sustainability Team",
    publishDate: "December 2024",
    readTime: "8 min read",
    tags: ["Best Practices", "Efficiency", "Quality"],
  },
  {
    title: "Understanding Cardboard Grades",
    description:
      "Complete guide to different cardboard types and their recycling value",
    author: "Operations Team",
    publishDate: "November 2024",
    readTime: "6 min read",
    tags: ["Education", "Quality", "Pricing"],
  },
  {
    title: "Maximizing Your Recycling Revenue",
    description:
      "Strategic approaches to increase revenue from your cardboard waste",
    author: "Business Development",
    publishDate: "November 2024",
    readTime: "10 min read",
    tags: ["Revenue", "Strategy", "Optimization"],
  },
  {
    title: "Environmental Benefits of Cardboard Recycling",
    description:
      "The positive environmental impact of proper cardboard recycling",
    author: "Environmental Team",
    publishDate: "October 2024",
    readTime: "7 min read",
    tags: ["Environment", "Sustainability", "Impact"],
  },
];

export default function ResourcesPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Recycling Resources & Tools
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Access comprehensive guides, calculators, and tools to maximize
              the value and impact of your cardboard recycling program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#tools"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Calculator className="w-5 h-5 inline mr-2" />
                Explore Tools
              </Link>
              <Link
                href="#guides"
                className="border border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                <BookOpen className="w-5 h-5 inline mr-2" />
                Browse Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Quick Reference Stats
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Key metrics to help you understand the impact and value of
                cardboard recycling
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {quickStats.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3">
                          <stat.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section id="tools" className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Tools & Calculators
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Interactive tools to help you plan, optimize, and track your
                recycling program
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                    <tool.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={tool.ctaUrl}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    {tool.ctaText}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section id="guides" className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Resource Library
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive guides, templates, and documents to support your
                recycling program
              </p>
            </div>

            <div className="space-y-12">
              {resourceCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`flex items-center justify-center w-12 h-12 ${category.color} rounded-lg`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.resources.map((resource, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span
                            className={`inline-block text-xs font-semibold px-2 py-1 rounded ${category.color} text-white`}
                          >
                            {resource.type}
                          </span>
                          <Download className="w-4 h-4 text-gray-400" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          {resource.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {resource.readTime}
                          </span>
                          <Link
                            href={resource.downloadUrl}
                            className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                          >
                            Access →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Latest Articles & Insights
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay informed with the latest trends, tips, and insights in
                cardboard recycling
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {educationalContent.map((article, index) => (
                <article
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-primary-50 text-primary-700 text-xs font-medium px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-4">
                      <span>By {article.author}</span>
                      <span>•</span>
                      <span>{article.publishDate}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Read Article
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="#"
                className="border border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-50 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Need Additional Support?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of recycling experts is here to help you optimize your
                program and answer any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <Calculator className="w-5 h-5 inline mr-2" />
                  Get Consultation
                </Link>
                <a
                  href="mailto:support@cardboardbalerecycling.com"
                  className="border border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                >
                  <ExternalLink className="w-5 h-5 inline mr-2" />
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
