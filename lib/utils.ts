import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * The URL segment for a state or city name, as the [state] and [city] routes
 * build it ("St. Louis" -> "st.-louis"). The sitemap must use the same rule.
 */
export function placeSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
