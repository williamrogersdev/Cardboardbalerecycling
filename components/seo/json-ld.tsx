import { faqItems } from "@/lib/data";

interface JsonLdProps {
  type?: "organization" | "localBusiness" | "service" | "faq" | "breadcrumb";
  data?: Record<string, unknown>;
}

// Organization Schema - for the main business
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cardboard Bale Recycling",
    url: "https://cardboardbalerecycling.com",
    logo: "https://cardboardbalerecycling.com/logo.png",
    description:
      "Professional cardboard bale recycling services - Turn your cardboard waste into revenue with our pickup, processing, and revenue-sharing program. Serving businesses nationwide.",
    foundingDate: "2020",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-800-555-0199",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-800-555-0199",
        contactType: "sales",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/cardboardbalerecycling",
      "https://www.linkedin.com/company/cardboardbalerecycling",
      "https://twitter.com/cardboardrecycle",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema - for service location pages
export function LocalBusinessJsonLd({
  city,
  state,
  priceRange = "$70-$120/ton",
}: {
  city?: string;
  state?: string;
  priceRange?: string;
}) {
  const locationName = city && state ? `${city}, ${state}` : "United States";

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://cardboardbalerecycling.com${city && state ? `/${state.toLowerCase().replace(/\s+/g, "-")}/${city.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    name: `Cardboard Bale Recycling - ${locationName}`,
    description: `Professional cardboard bale recycling services in ${locationName}. We pick up, process, and pay for your cardboard waste. Turn your cardboard into revenue.`,
    url: "https://cardboardbalerecycling.com",
    telephone: "+1-800-555-0199",
    priceRange: priceRange,
    image: "https://cardboardbalerecycling.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.7749,
      longitude: -122.4194,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cardboard Recycling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cardboard Bale Collection",
            description:
              "Regular pickup scheduling with flexible routes and timing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bale Processing",
            description:
              "Expert sorting, cleaning, and preparation for maximum value",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Revenue Sharing",
            description:
              "Competitive pricing and transparent payment up to $120/ton",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema - for service pages
export function ServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cardboard Bale Recycling Services",
    provider: {
      "@type": "Organization",
      name: "Cardboard Bale Recycling",
      url: "https://cardboardbalerecycling.com",
    },
    description:
      "Comprehensive cardboard bale recycling services including collection, processing, and revenue sharing. We help businesses turn cardboard waste into profit.",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: "Cardboard Recycling",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "70",
      highPrice: "120",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "70-120",
        priceCurrency: "USD",
        unitText: "per ton",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Recycling Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Collection Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Weekly Pickup",
                description: "Regular weekly cardboard bale collection",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "On-Demand Pickup",
                description: "Flexible pickup scheduling based on your needs",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Processing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Bale Processing",
                description: "Professional sorting and preparation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Equipment Rental",
                description: "Baler and compaction equipment rental",
              },
            },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema - for FAQ pages/sections
export function FAQJsonLd({ items }: { items?: typeof faqItems }) {
  const faqData = items || faqItems;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema - for navigation
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema - for homepage
export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cardboard Bale Recycling",
    url: "https://cardboardbalerecycling.com",
    description:
      "Professional cardboard bale recycling services - Turn your cardboard waste into revenue",
    publisher: {
      "@type": "Organization",
      name: "Cardboard Bale Recycling",
      logo: {
        "@type": "ImageObject",
        url: "https://cardboardbalerecycling.com/logo.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://cardboardbalerecycling.com/service-areas?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// How It Works / Process Schema
export function HowToJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Recycle Cardboard Bales for Revenue",
    description:
      "Learn how to turn your cardboard waste into revenue with our simple 4-step recycling process.",
    totalTime: "P1D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Cardboard bales or loose cardboard",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Baler (optional - we can provide)",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Request a Quote",
        text: "Contact us for a free assessment of your cardboard recycling needs. We'll evaluate your volume and provide competitive pricing.",
        url: "https://cardboardbalerecycling.com/quote",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Schedule Pickup",
        text: "Choose a pickup schedule that works for your business - weekly, bi-weekly, or on-demand options available.",
        url: "https://cardboardbalerecycling.com/how-it-works",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "We Collect & Process",
        text: "Our professional team collects your cardboard, weighs it, and processes it for maximum market value.",
        url: "https://cardboardbalerecycling.com/services",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Get Paid",
        text: "Receive payment for your cardboard based on current market rates. Detailed invoices provided.",
        url: "https://cardboardbalerecycling.com/pricing",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Combined schema for homepage
export function HomePageJsonLd() {
  return (
    <>
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <LocalBusinessJsonLd />
    </>
  );
}
