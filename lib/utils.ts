import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumber;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function generateMetaTitle(location?: string, service?: string): string {
  const base = "Cardboard Bale Recycling";
  if (location && service) {
    return `${service} in ${location} | ${base}`;
  }
  if (location) {
    return `${location} Cardboard Recycling Services | ${base}`;
  }
  if (service) {
    return `${service} | ${base}`;
  }
  return `${base} | Turn Your Waste Into Revenue`;
}

export function generateMetaDescription(
  location?: string,
  service?: string
): string {
  const base =
    "Professional cardboard bale recycling services. Turn your cardboard waste into revenue with our pickup, processing, and revenue-sharing program.";
  if (location) {
    return `${base} Serving ${location} and surrounding areas.`;
  }
  return base;
}
