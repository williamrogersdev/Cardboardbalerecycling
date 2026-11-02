import { faqItems } from "@/lib/data";

const SITE_URL = "https://cardboardbalerecycling.com";
const SITE_NAME = "Cardboard Bale Recycling";
const DESCRIPTION =
  "Cardboard Bale Recycling is a referral service. Businesses request cardboard bale pickup, bale sales and baler rental, and partner suppliers in our network prepare the quotes.";

function JsonLdScript({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Organization schema for the site. No address, phone, geo or ratings: the
// site is a referral service, not a recycler with a location.
export function OrganizationJsonLd({
  city,
  state,
}: {
  city?: string;
  state?: string;
} = {}) {
  const areaServed =
    city && state
      ? [
          { "@type": "City", name: `${city}, ${state}` },
          { "@type": "State", name: state },
        ]
      : state
        ? { "@type": "State", name: state }
        : { "@type": "Country", name: "United States" };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: DESCRIPTION,
    areaServed,
    address: {
      "@type": "PostalAddress",
      ...(city ? { addressLocality: city } : {}),
      ...(state ? { addressRegion: state } : {}),
      addressCountry: "US",
    },
  };

  return <JsonLdScript schema={schema} />;
}

// Service schema for the services page.
export function ServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cardboard bale recycling requests",
    serviceType: "Cardboard Recycling",
    description:
      "Requests for cardboard bale pickup, bale sales, loose cardboard pickup and baler rental, fulfilled by partner suppliers in our network. Pricing is by quote.",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };

  return <JsonLdScript schema={schema} />;
}

// FAQ schema for FAQ sections.
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

  return <JsonLdScript schema={schema} />;
}

// Breadcrumb schema for location pages.
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

  return <JsonLdScript schema={schema} />;
}

// Website schema for the home page.
export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };

  return <JsonLdScript schema={schema} />;
}

// HowTo schema for the how-it-works page.
export function HowToJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to request cardboard bale recycling",
    description:
      "How a cardboard recycling request moves from our form to a partner supplier's quote.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Send a request",
        text: "Fill in the free, no-obligation quote request with your volume, location and what you need.",
        url: `${SITE_URL}/quote`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "We pass it to partners",
        text: "Your request goes to partner recyclers and suppliers in our network that serve your area.",
        url: `${SITE_URL}/how-it-works`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "A partner follows up",
        text: "A partner supplier contacts you to confirm details and prepare a quote.",
        url: `${SITE_URL}/how-it-works`,
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "You decide",
        text: "Review the partner's price, schedule and terms, and decide whether to go ahead.",
        url: `${SITE_URL}/pricing`,
      },
    ],
  };

  return <JsonLdScript schema={schema} />;
}

// Combined schema for the root layout.
export function HomePageJsonLd() {
  return (
    <>
      <OrganizationJsonLd />
      <WebsiteJsonLd />
    </>
  );
}
