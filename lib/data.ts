import {
  ServiceOffering,
  TestimonialData,
  FAQItem,
  PricingTier,
  MarketPricing,
  ServiceArea,
  ComplianceRequirement,
  NationalAveragePrice,
} from "@/types";

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "bale-collection",
    title: "Cardboard Bale Collection",
    description:
      "Regular pickup scheduling with flexible routes and timing to fit your business needs.",
    features: [
      "Flexible pickup schedules",
      "Professional drivers and equipment",
      "Real-time tracking and notifications",
      "Minimal business disruption",
    ],
    benefits: [
      "Reduce storage costs",
      "Improve facility cleanliness",
      "Ensure regular waste removal",
      "Professional service guarantee",
    ],
    icon: "Truck",
  },
  {
    id: "bale-processing",
    title: "Bale Processing",
    description:
      "Expert sorting, cleaning, and preparation of cardboard bales for maximum market value.",
    features: [
      "Quality grading and assessment",
      "Contamination removal",
      "Proper bale preparation",
      "Market-ready packaging",
    ],
    benefits: [
      "Maximize bale value",
      "Meet buyer specifications",
      "Reduce contamination costs",
      "Increase revenue potential",
    ],
    icon: "Settings",
  },
  {
    id: "revenue-sharing",
    title: "Revenue Sharing",
    description:
      "Competitive pricing and transparent payment terms that turn your waste into income.",
    features: [
      "Market-competitive rates",
      "Transparent pricing structure",
      "Regular payment schedules",
      "Detailed revenue reporting",
    ],
    benefits: [
      "Generate revenue from waste",
      "Predictable income stream",
      "Offset disposal costs",
      "Improve bottom line",
    ],
    icon: "DollarSign",
  },
  {
    id: "compliance",
    title: "Compliance & Documentation",
    description:
      "Complete environmental regulations compliance with proper documentation and reporting.",
    features: [
      "Regulatory compliance management",
      "Proper documentation",
      "Environmental reporting",
      "Audit trail maintenance",
    ],
    benefits: [
      "Avoid compliance violations",
      "Reduce regulatory risk",
      "Streamline audits",
      "Maintain clean records",
    ],
    icon: "Shield",
  },
  {
    id: "equipment-rental",
    title: "Equipment Rental",
    description:
      "Professional balers and compaction equipment to optimize your cardboard waste management.",
    features: [
      "High-quality baling equipment",
      "Installation and training",
      "Maintenance and support",
      "Flexible rental terms",
    ],
    benefits: [
      "Increase bale density",
      "Reduce storage space",
      "Improve efficiency",
      "Lower operational costs",
    ],
    icon: "Wrench",
  },
];

export const testimonials: TestimonialData[] = [
  {
    id: "retail-chain",
    name: "Michael Rodriguez",
    company: "Metro Retail Solutions",
    role: "Operations Manager",
    content:
      "Switching to cardboard bale recycling has saved us over $15,000 annually in disposal costs while generating additional revenue. The pickup service is reliable and professional.",
    rating: 5,
    location: "Los Angeles, CA",
  },
  {
    id: "manufacturing",
    name: "Sarah Chen",
    company: "Pacific Manufacturing Co.",
    role: "Sustainability Director",
    content:
      "The compliance support and documentation has been invaluable for our environmental reporting. We now meet all regulations while actually making money from our cardboard waste.",
    rating: 5,
    location: "Seattle, WA",
  },
  {
    id: "warehouse",
    name: "David Thompson",
    company: "Central Distribution Hub",
    role: "Facility Manager",
    content:
      "The equipment rental program transformed our waste management. The baler pays for itself and the revenue sharing makes this a true win-win partnership.",
    rating: 5,
    location: "Chicago, IL",
  },
  {
    id: "grocery",
    name: "Lisa Martinez",
    company: "Fresh Foods Markets",
    role: "Store Operations Manager",
    content:
      "Consistent pickup schedules and competitive pricing have made cardboard recycling a profitable part of our operations. Highly recommend their services.",
    rating: 5,
    location: "Houston, TX",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "how-pricing-works",
    question: "How does the pricing for cardboard bales work?",
    answer:
      "Our pricing is based on current market rates and varies by cardboard grade, bale quality, and volume. We offer competitive rates typically ranging from $80-120 per ton, with pricing updated monthly based on market conditions. Higher quality bales and larger volumes receive premium pricing.",
    category: "pricing",
  },
  {
    id: "pickup-frequency",
    question: "How often can you pick up our cardboard bales?",
    answer:
      "We offer flexible pickup schedules including weekly, bi-weekly, and monthly options. The frequency depends on your volume generation and storage capacity. We can also provide on-demand pickups for large accumulations.",
    category: "process",
  },
  {
    id: "minimum-volume",
    question: "Is there a minimum volume requirement?",
    answer:
      "We work with businesses of all sizes. While there is no strict minimum, we typically require at least 2-3 bales per pickup to make service economically viable. Smaller generators can coordinate with nearby businesses for combined pickups.",
    category: "general",
  },
  {
    id: "bale-quality",
    question: "What quality standards do you require for cardboard bales?",
    answer:
      "We accept Grade A (clean, dry corrugated), Grade B (slightly contaminated), and Grade C (mixed cardboard) bales. Clean, dry bales without contamination receive the highest pricing. We provide detailed grading guidelines to help maximize your revenue.",
    category: "process",
  },
  {
    id: "payment-terms",
    question: "What are your payment terms?",
    answer:
      "We typically pay within 30 days of pickup and processing. Payment can be made via check or ACH transfer. We provide detailed invoices showing bale weights, grades, and pricing for complete transparency.",
    category: "pricing",
  },
  {
    id: "compliance-support",
    question: "Do you provide compliance documentation?",
    answer:
      "Yes, we provide complete documentation including certificates of destruction, weight tickets, and environmental compliance reports. This documentation supports your sustainability reporting and regulatory compliance requirements.",
    category: "compliance",
  },
  {
    id: "equipment-needs",
    question: "Do I need my own baling equipment?",
    answer:
      "Not necessarily. We offer equipment rental programs including balers and compactors. We can also pick up loose cardboard, though baled material typically receives better pricing due to transportation efficiency.",
    category: "general",
  },
  {
    id: "service-areas",
    question: "What areas do you serve?",
    answer:
      "We provide nationwide coverage across all 50 US states, with extensive operations in major metropolitan areas. Our network includes processing facilities and pickup routes in every state, ensuring reliable service no matter where your business is located.",
    category: "general",
  },
];

export const stateCardboardPricing = [
  {
    state: "California",
    abbreviation: "CA",
    priceRange: { min: 85, max: 120 },
    marketTrend: "up" as const,
    lastUpdated: "2024-01-15",
    majorCities: ["Los Angeles", "San Francisco", "San Diego"],
    notes: "High demand from Pacific Rim markets",
  },
  {
    state: "Texas",
    abbreviation: "TX",
    priceRange: { min: 75, max: 110 },
    marketTrend: "stable" as const,
    lastUpdated: "2024-01-15",
    majorCities: ["Houston", "Dallas", "Austin", "San Antonio"],
    notes: "Strong manufacturing base drives demand",
  },
  {
    state: "Florida",
    abbreviation: "FL",
    priceRange: { min: 70, max: 105 },
    marketTrend: "up" as const,
    lastUpdated: "2024-01-15",
    majorCities: ["Miami", "Orlando", "Tampa", "Jacksonville"],
    notes: "Growing export market through ports",
  },
  {
    state: "New York",
    abbreviation: "NY",
    priceRange: { min: 80, max: 115 },
    marketTrend: "stable" as const,
    lastUpdated: "2024-01-15",
    majorCities: ["New York City", "Buffalo", "Rochester", "Syracuse"],
    notes: "High population density creates steady supply",
  },
  {
    state: "Illinois",
    abbreviation: "IL",
    priceRange: { min: 75, max: 110 },
    marketTrend: "down" as const,
    lastUpdated: "2024-01-15",
    majorCities: ["Chicago", "Rockford", "Peoria"],
    notes: "Transportation hub with good logistics",
  },
  {
    state: "Pennsylvania",
    abbreviation: "PA",
    priceRange: { min: 75, max: 110 },
    marketTrend: "stable" as const,
    lastUpdated: "2024-01-15",
    majorCities: ["Philadelphia", "Pittsburgh", "Allentown"],
    notes: "Established recycling infrastructure",
  },
  {
    state: "Ohio",
    abbreviation: "OH",
    priceRange: { min: 70, max: 105 },
    marketTrend: "stable" as const,
    lastUpdated: "2024-01-15",
    majorCities: ["Columbus", "Cleveland", "Cincinnati"],
    notes: "Central location benefits distribution",
  },
  {
    state: "Georgia",
    abbreviation: "GA",
    priceRange: { min: 75, max: 110 },
    marketTrend: "up" as const,
    lastUpdated: "2024-01-15",
    majorCities: ["Atlanta", "Savannah", "Augusta"],
    notes: "Growing export market via Savannah port",
  },
];

export const nationalAveragePrice: NationalAveragePrice = {
  averagePrice: 95,
  priceRange: { min: 70, max: 120 },
  trend: "stable" as const,
  description:
    "National average cardboard bale price varies by location, quality, and market conditions.",
  lastUpdated: "2024-01-15",
  factors: [
    "Material quality and contamination levels",
    "Bale density and preparation",
    "Local market demand",
    "Transportation costs",
    "Volume commitments",
  ],
};

export const serviceVolumeTiers = [
  {
    id: "small",
    name: "Small Business",
    description: "Perfect for small retailers and offices",
    volumeRange: "2-10 tons/month",
    features: [
      "Monthly pickup schedule",
      "Basic reporting",
      "Standard payment terms (30 days)",
      "Email support",
      "Market rate pricing",
    ],
    benefits: [
      "No minimum volume requirements",
      "Flexible scheduling",
      "Simple setup process",
    ],
  },
  {
    id: "medium",
    name: "Medium Business",
    description: "Ideal for growing businesses and warehouses",
    volumeRange: "10-50 tons/month",
    features: [
      "Weekly or bi-weekly pickup",
      "Detailed reporting and analytics",
      "Priority payment terms (15 days)",
      "Phone and email support",
      "Premium rate pricing",
      "Equipment rental available",
    ],
    benefits: [
      "Dedicated account manager",
      "Volume-based rate premiums",
      "Customizable pickup schedules",
    ],
  },
  {
    id: "large",
    name: "Enterprise",
    description: "For large operations and multiple locations",
    volumeRange: "50+ tons/month",
    features: [
      "Custom pickup schedules",
      "Real-time tracking and reporting",
      "Express payment terms (7 days)",
      "Dedicated account management",
      "Premium rate pricing",
      "Free equipment rental",
      "Compliance documentation",
    ],
    benefits: [
      "Highest rates and priority service",
      "Multi-location coordination",
      "Custom reporting and analytics",
    ],
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    state: "California",
    cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
    active: true,
  },
  {
    state: "Texas",
    cities: ["Houston", "Dallas", "Austin", "San Antonio"],
    active: true,
  },
  {
    state: "Florida",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville"],
    active: true,
  },
  {
    state: "New York",
    cities: ["New York City", "Albany", "Buffalo", "Rochester"],
    active: true,
  },
  {
    state: "Illinois",
    cities: ["Chicago", "Rockford", "Peoria", "Springfield"],
    active: true,
  },
  {
    state: "Pennsylvania",
    cities: ["Philadelphia", "Pittsburgh", "Allentown"],
    active: true,
  },
  {
    state: "Ohio",
    cities: ["Columbus", "Cleveland", "Cincinnati"],
    active: true,
  },
  {
    state: "Georgia",
    cities: ["Atlanta", "Augusta", "Savannah"],
    active: true,
  },
  {
    state: "North Carolina",
    cities: ["Charlotte", "Raleigh", "Greensboro"],
    active: true,
  },
  {
    state: "Michigan",
    cities: ["Detroit", "Grand Rapids", "Warren"],
    active: true,
  },
  {
    state: "New Jersey",
    cities: ["Newark", "Jersey City", "Paterson"],
    active: true,
  },
  {
    state: "Virginia",
    cities: ["Virginia Beach", "Norfolk", "Richmond"],
    active: true,
  },
  {
    state: "Washington",
    cities: ["Seattle", "Spokane", "Tacoma"],
    active: true,
  },
  {
    state: "Arizona",
    cities: ["Phoenix", "Tucson", "Mesa"],
    active: true,
  },
  {
    state: "Massachusetts",
    cities: ["Boston", "Worcester", "Springfield"],
    active: true,
  },
  {
    state: "Tennessee",
    cities: ["Nashville", "Memphis", "Knoxville"],
    active: true,
  },
  {
    state: "Indiana",
    cities: ["Indianapolis", "Fort Wayne", "Evansville"],
    active: true,
  },
  {
    state: "Missouri",
    cities: ["Kansas City", "St. Louis", "Springfield"],
    active: true,
  },
  {
    state: "Maryland",
    cities: ["Baltimore", "Frederick", "Rockville"],
    active: true,
  },
  {
    state: "Wisconsin",
    cities: ["Milwaukee", "Madison", "Green Bay"],
    active: true,
  },
  {
    state: "Colorado",
    cities: ["Denver", "Colorado Springs", "Aurora"],
    active: true,
  },
  {
    state: "Minnesota",
    cities: ["Minneapolis", "St. Paul", "Rochester"],
    active: true,
  },
  {
    state: "South Carolina",
    cities: ["Charleston", "Columbia", "Greenville"],
    active: true,
  },
  {
    state: "Alabama",
    cities: ["Birmingham", "Montgomery", "Mobile"],
    active: true,
  },
  {
    state: "Louisiana",
    cities: ["New Orleans", "Baton Rouge", "Shreveport"],
    active: true,
  },
  {
    state: "Kentucky",
    cities: ["Louisville", "Lexington", "Bowling Green"],
    active: true,
  },
  {
    state: "Oregon",
    cities: ["Portland", "Eugene", "Salem"],
    active: true,
  },
  {
    state: "Oklahoma",
    cities: ["Oklahoma City", "Tulsa", "Norman"],
    active: true,
  },
  {
    state: "Connecticut",
    cities: ["Hartford", "New Haven", "Stamford"],
    active: true,
  },
  {
    state: "Utah",
    cities: ["Salt Lake City", "West Valley City", "Provo"],
    active: true,
  },
  {
    state: "Iowa",
    cities: ["Des Moines", "Cedar Rapids", "Davenport"],
    active: true,
  },
  {
    state: "Nevada",
    cities: ["Las Vegas", "Henderson", "Reno"],
    active: true,
  },
  {
    state: "Arkansas",
    cities: ["Little Rock", "Fort Smith", "Fayetteville"],
    active: true,
  },
  {
    state: "Mississippi",
    cities: ["Jackson", "Gulfport", "Southaven"],
    active: true,
  },
  {
    state: "Kansas",
    cities: ["Wichita", "Overland Park", "Kansas City"],
    active: true,
  },
  {
    state: "New Mexico",
    cities: ["Albuquerque", "Las Cruces", "Rio Rancho"],
    active: true,
  },
  {
    state: "Nebraska",
    cities: ["Omaha", "Lincoln", "Bellevue"],
    active: true,
  },
  {
    state: "West Virginia",
    cities: ["Charleston", "Huntington", "Morgantown"],
    active: true,
  },
  {
    state: "Idaho",
    cities: ["Boise", "Meridian", "Nampa"],
    active: true,
  },
  {
    state: "Hawaii",
    cities: ["Honolulu", "Pearl City", "Hilo"],
    active: true,
  },
  {
    state: "New Hampshire",
    cities: ["Manchester", "Nashua", "Concord"],
    active: true,
  },
  {
    state: "Maine",
    cities: ["Portland", "Lewiston", "Bangor"],
    active: true,
  },
  {
    state: "Montana",
    cities: ["Billings", "Missoula", "Great Falls"],
    active: true,
  },
  {
    state: "Rhode Island",
    cities: ["Providence", "Warwick", "Cranston"],
    active: true,
  },
  {
    state: "Delaware",
    cities: ["Wilmington", "Dover", "Newark"],
    active: true,
  },
  {
    state: "South Dakota",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen"],
    active: true,
  },
  {
    state: "North Dakota",
    cities: ["Fargo", "Bismarck", "Grand Forks"],
    active: true,
  },
  {
    state: "Alaska",
    cities: ["Anchorage", "Fairbanks", "Juneau"],
    active: true,
  },
  {
    state: "Vermont",
    cities: ["Burlington", "South Burlington", "Rutland"],
    active: true,
  },
  {
    state: "Wyoming",
    cities: ["Cheyenne", "Casper", "Laramie"],
    active: true,
  },
];

export const complianceRequirements: ComplianceRequirement[] = [
  {
    id: "epa-reporting",
    title: "EPA Waste Reporting",
    description:
      "Federal requirements for waste tracking and environmental impact reporting.",
    applicableStates: ["All"],
    required: true,
    documentation: [
      "Waste manifests",
      "Transportation records",
      "Processing certificates",
    ],
  },
  {
    id: "state-permits",
    title: "State Waste Management Permits",
    description:
      "State-specific permits and licenses for waste collection and processing.",
    applicableStates: ["California", "New York", "Texas", "Florida"],
    required: true,
    documentation: [
      "Permit applications",
      "Annual renewals",
      "Compliance reports",
    ],
  },
  {
    id: "dot-regulations",
    title: "DOT Transportation Compliance",
    description:
      "Department of Transportation regulations for waste material transport.",
    applicableStates: ["All"],
    required: true,
    documentation: [
      "Driver certifications",
      "Vehicle inspections",
      "Route documentation",
    ],
  },
];
