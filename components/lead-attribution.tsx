"use client";

import { useEffect } from "react";
import { readAttribution } from "@/lib/lead-client";

/** Records where the visit came from on its first page, for the lead forms. */
export function LeadAttribution() {
  useEffect(() => {
    readAttribution();
  }, []);
  return null;
}
