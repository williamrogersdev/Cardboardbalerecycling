// Lead options shared by the contact form, the quote form and /api/leads.
// Each option keeps the site's own wording (shown on the form, sent to 1DB as
// service_label / product_label) and exactly one Repackify value.
// lead_type is one of buy, sell, recycle, waste, inquiry; product_type is a
// slug from Repackify's live lead API schema, or none when no slug fits (1DB
// then applies the site's default product).

export type LeadType = "buy" | "sell" | "recycle" | "waste" | "inquiry";

export interface ServiceOption {
  value: string;
  label: string;
  leadType: LeadType;
  productType?: string;
  productLabel?: string;
}

// The site picks up and pays for cardboard ($70-120 per ton), baled or loose,
// and rents balers and compactors. One choice carries both the lead type and the
// product, so a lead can never pair "rent a baler" with "cardboard bales".
export const serviceOptions: ServiceOption[] = [
  {
    value: "sell-bales",
    label: "Sell my cardboard bales",
    leadType: "sell",
    productType: "cardboard-bales",
    productLabel: "Cardboard bales",
  },
  {
    value: "loose-cardboard",
    label: "Pick up my loose cardboard",
    leadType: "sell",
    productType: "cardboard-bales",
    productLabel: "Loose cardboard",
  },
  {
    value: "baler-rental",
    label: "Rent a baler or compactor",
    leadType: "buy",
    productType: "equipment",
    productLabel: "Baler or compactor",
  },
  {
    value: "other",
    label: "Something else",
    leadType: "inquiry",
  },
];

// Monthly cardboard volume in tons. quantity is the low end of the range, so
// a lead never claims more than the visitor said.
export const monthlyVolumeOptions: { value: string; label: string; tons: number }[] = [
  { value: "2-5", label: "2-5 tons", tons: 2 },
  { value: "5-10", label: "5-10 tons", tons: 5 },
  { value: "10-25", label: "10-25 tons", tons: 10 },
  { value: "25-50", label: "25-50 tons", tons: 25 },
  { value: "50-100", label: "50-100 tons", tons: 50 },
  { value: "100+", label: "100+ tons", tons: 100 },
];

export const timeframeOptions: { value: string; label: string }[] = [
  { value: "asap", label: "ASAP" },
  { value: "within_2_weeks", label: "Within 2 weeks" },
  { value: "within_a_month", label: "Within a month" },
  { value: "just_pricing", label: "Just pricing for now" },
];

export const pickupFrequencyOptions: { value: string; label: string }[] = [
  { value: "weekly", label: "Weekly" },
  { value: "bi-weekly", label: "Bi-weekly" },
  { value: "monthly", label: "Monthly" },
];

export const SMS_CONSENT_TEXT =
  "Text me about this request. Message and data rates may apply. Reply STOP to opt out.";
