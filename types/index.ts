export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  zipCode: string;
  service: string;
  monthlyVolume: string;
  timeframe: string;
  message: string;
  smsConsent: boolean;
}

export interface QuoteFormData extends ContactFormData {
  currentDisposalCost: number;
  pickupFrequency: "weekly" | "bi-weekly" | "monthly";
  equipmentNeeds: string;
  specialRequirements: string;
  city: string;
  state: string;
}

export interface ServiceArea {
  state: string;
  cities: string[];
  active: boolean;
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
