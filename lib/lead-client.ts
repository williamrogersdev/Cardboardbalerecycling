// Browser side of a lead: the submission id, attribution, and the POST to
// this site's own /api/leads (which holds the 1DB key on the server). The
// route renames the attribution keys below to 1DB's own names.

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const CLICK_ID_PARAMS = ["gclid", "gbraid", "wbraid", "fbclid", "msclkid", "ttclid"];
const ATTRIBUTION_STORAGE_KEY = "cbr_lead_attribution";

/** A fresh id for one submission; kept across retries, renewed after a success. */
export function newSubmissionId(): string {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => (b < 16 ? "0" : "") + b.toString(16)).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

/** The client id in a `_ga` cookie (GA1.1.123.456 -> 123.456). */
function gaClientId(): string {
  const match = document.cookie.match(/(?:^|;\s*)_ga=([^;]+)/);
  const parts = match ? decodeURIComponent(match[1]).split(".") : [];
  return parts.length >= 4 ? parts.slice(-2).join(".") : "";
}

/**
 * The visit's first-touch attribution: utm_* and click IDs from the URL (only
 * when present), the referrer and the landing page. Kept for the visit so a
 * form on a later page still knows where the visitor came from.
 */
export function readAttribution(): Record<string, string> {
  try {
    const stored = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (stored) return JSON.parse(stored) as Record<string, string>;
  } catch {
    // Storage blocked: fall through and read this page.
  }
  const params = new URLSearchParams(window.location.search);
  const found: Record<string, string> = {};
  for (const key of [...UTM_PARAMS, ...CLICK_ID_PARAMS]) {
    const value = params.get(key);
    if (value) found[key] = value;
  }
  if (document.referrer) found.referrer = document.referrer;
  found.landing_page = window.location.href;
  try {
    sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(found));
  } catch {
    // Not kept for the visit; this page's values still go with the lead.
  }
  return found;
}

export type LeadResult =
  | { kind: "ok" }
  | { kind: "fields"; fields: Record<string, string> }
  | { kind: "too-many" }
  | { kind: "failed" };

/**
 * POSTs a lead to /api/leads. Retries once after a second, only on a network
 * error or a 5xx other than 503 (missing config, which a retry can't fix),
 * with the same submission_id.
 */
export async function sendLead(
  values: object,
  submissionId: string,
  attribution: Record<string, string>,
): Promise<LeadResult> {
  const ga = gaClientId();
  const body = JSON.stringify({
    ...values,
    ...attribution,
    ...(ga ? { ga_client_id: ga } : {}),
    current_page: window.location.href,
    pageUrl: window.location.href,
    submission_id: submissionId,
  });

  let response: Response | null = null;
  for (let attempt = 0; attempt < 2; attempt++) {
    if (attempt > 0) await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body,
      });
    } catch {
      response = null;
      continue;
    }
    if (response.status < 500 || response.status === 503) break;
  }

  if (response?.ok) return { kind: "ok" };
  if (response?.status === 429) return { kind: "too-many" };
  if (response?.status === 400) {
    const data: { fields?: Record<string, string> } = await response.json().catch(() => ({}));
    if (data.fields && Object.keys(data.fields).length > 0) return { kind: "fields", fields: data.fields };
  }
  return { kind: "failed" };
}

/** 10 digits, or 11 starting with 1, with an area code from 2 to 9 (what 1DB accepts). */
export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  const national = digits.length === 11 && digits.charAt(0) === "1" ? digits.slice(1) : digits;
  return /^[2-9]\d{9}$/.test(national);
}
