export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface QuoteFormData extends ContactFormData {
  monthlyVolume: string;
  currentDisposalCost: number;
  pickupFrequency: "weekly" | "bi-weekly" | "monthly";
  equipmentNeeds: string;
  specialRequirements: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface ServiceArea {
  state: string;
  cities: string[];
  active: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  minVolume: number;
  maxVolume: number | null;
  pricePerTon: number;
  description: string;
  features: string[];
}

export interface TestimonialData {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  location: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  tags: string[];
  readTime: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "pricing" | "process" | "compliance";
}

export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  icon: string;
}

export interface LocationData {
  state: string;
  city?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  population: number;
  businessCount: number;
  serviceRadius: number;
}

export interface MarketPricing {
  grade: string;
  pricePerTon: number;
  trend: "up" | "down" | "stable";
  description: string;
  lastUpdated: string;
}

export interface ComplianceRequirement {
  id: string;
  title: string;
  description: string;
  applicableStates: string[];
  required: boolean;
  documentation: string[];
}

// Update StateCardboardPricing to remove grades
export interface StateCardboardPricing {
  state: string;
  abbreviation: string;
  priceRange: { min: number; max: number };
  marketTrend: "up" | "down" | "stable";
  lastUpdated: string;
  majorCities: string[];
  notes: string;
}

// Add interface for national pricing
export interface NationalAveragePrice {
  averagePrice: number;
  priceRange: { min: number; max: number };
  trend: "up" | "down" | "stable";
  description: string;
  lastUpdated: string;
  factors: string[];
}

// Update PricingTier to be more service-focused
export interface ServiceVolumeTier {
  id: string;
  name: string;
  description: string;
  volumeRange: string;
  features: string[];
  benefits: string[];
}
