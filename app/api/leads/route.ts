import {
  SMS_CONSENT_TEXT,
  monthlyVolumeOptions,
  pickupFrequencyOptions,
  serviceOptions,
  timeframeOptions,
} from "@/lib/lead-options";

// Set on the server so the browser never chooses the form.
const FORM_SLUG = "cardboard-bale-recycling-contact";

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const US_ZIP = /^\d{5}(-\d{4})?$/;
const CA_POSTAL = /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/;
const SUBMISSION_ID = /^[A-Za-z0-9._:-]{8,128}$/;
const TRY_AGAIN = "We could not send your request. Please try again or call us directly.";
const TOO_MANY = "Too many requests. Please wait a moment and try again.";
const CHECK_FIELDS = "Check the highlighted fields";

// Sent by the form under these names, passed to 1DB as `_1db_<name>`, only when present.
const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "referrer",
  "landing_page",
  "current_page",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "ttclid",
  "ga_client_id",
];

// 1DB names a bad field by its own key; the forms know it by this name.
const FORM_FIELD_FOR: Record<string, string> = {
  first_name: "firstName",
  last_name: "lastName",
  email: "email",
  phone: "phone",
  company: "company",
  postal_code: "zipCode",
  address_line_1: "address",
  city: "city",
  state: "state",
  lead_type: "service",
  service_label: "service",
  product_type: "service",
  product_label: "service",
  quantity: "monthlyVolume",
  timeframe: "timeframe",
  message: "message",
  sms_consent: "smsConsent",
  sms_consent_text: "smsConsent",
};

type Payload = Record<string, unknown>;

function text(payload: Payload, key: string): string {
  const value = payload[key];
  return typeof value === "string" ? value.trim() : "";
}

function ticked(value: unknown): boolean {
  return value === true || value === "true" || value === "on" || value === "yes";
}

function findOption<T extends { value: string }>(options: T[], value: string): T | undefined {
  return options.find((option) => option.value === value);
}

function validate(payload: Payload): Record<string, string> {
  const fields: Record<string, string> = {};
  const firstName = text(payload, "firstName");
  const lastName = text(payload, "lastName");
  const email = text(payload, "email");
  const zipCode = text(payload, "zipCode");
  const timeframe = text(payload, "timeframe");
  const pickupFrequency = text(payload, "pickupFrequency");
  const disposalCost = payload.currentDisposalCost;

  if (!firstName || firstName.length > 80) fields.firstName = "Enter a first name (up to 80 characters)";
  if (!lastName || lastName.length > 80) fields.lastName = "Enter a last name (up to 80 characters)";
  if (!email || !EMAIL_RE.test(email)) fields.email = "Please enter a valid email address";

  // 10 digits, or 11 starting with 1, with an area code that can't start with 0 or 1.
  const digits = text(payload, "phone").replace(/\D/g, "");
  const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (!/^[2-9]\d{9}$/.test(national)) fields.phone = "Please enter a valid phone number";

  if (!US_ZIP.test(zipCode) && !CA_POSTAL.test(zipCode)) fields.zipCode = "Please enter a valid ZIP code";
  if (!findOption(serviceOptions, text(payload, "service"))) fields.service = "Please choose how we can help";
  if (!findOption(monthlyVolumeOptions, text(payload, "monthlyVolume"))) {
    fields.monthlyVolume = "Please select a monthly volume range";
  }

  if (text(payload, "company").length > 120) fields.company = "Company name cannot exceed 120 characters";
  if (text(payload, "address").length > 200) fields.address = "Address cannot exceed 200 characters";
  if (text(payload, "city").length > 80) fields.city = "City cannot exceed 80 characters";
  if (text(payload, "state").length > 40) fields.state = "State cannot exceed 40 characters";
  if (timeframe && !findOption(timeframeOptions, timeframe)) fields.timeframe = "Please choose one of the options";
  if (pickupFrequency && !findOption(pickupFrequencyOptions, pickupFrequency)) {
    fields.pickupFrequency = "Please choose one of the options";
  }
  if (
    disposalCost !== undefined &&
    disposalCost !== null &&
    disposalCost !== "" &&
    !(typeof disposalCost === "number" && Number.isFinite(disposalCost) && disposalCost >= 0 && disposalCost <= 10_000_000)
  ) {
    fields.currentDisposalCost = "Enter a dollar amount";
  }
  if (text(payload, "specialRequirements").length > 1000) {
    fields.specialRequirements = "Special requirements cannot exceed 1000 characters";
  }
  if (text(payload, "message").length > 2000) fields.message = "Message cannot exceed 2000 characters";
  return fields;
}

function buildLead(payload: Payload, submissionId: string): Payload {
  const service = findOption(serviceOptions, text(payload, "service"))!;
  const volume = findOption(monthlyVolumeOptions, text(payload, "monthlyVolume"))!;

  const lead: Payload = {
    formSlug: FORM_SLUG,
    submission_id: submissionId,
    first_name: text(payload, "firstName"),
    last_name: text(payload, "lastName"),
    email: text(payload, "email"),
    phone: text(payload, "phone"),
    postal_code: text(payload, "zipCode"),
    lead_type: service.leadType,
    service_label: service.label,
    quantity: volume.tons,
    monthly_volume: `${volume.label} per month`,
  };
  if (service.productType) lead.product_type = service.productType;
  if (service.productLabel) lead.product_label = service.productLabel;

  const optional: Record<string, string> = {
    company: text(payload, "company"),
    address_line_1: text(payload, "address"),
    city: text(payload, "city"),
    state: text(payload, "state"),
    timeframe: text(payload, "timeframe"),
    message: text(payload, "message"),
    pickup_frequency: findOption(pickupFrequencyOptions, text(payload, "pickupFrequency"))?.label ?? "",
    special_requirements: text(payload, "specialRequirements"),
    page_url: text(payload, "pageUrl").slice(0, 500),
  };
  for (const key of Object.keys(optional)) {
    if (optional[key]) lead[key] = optional[key];
  }

  // Quote form only: the "Equipment Rental Needed" radio and disposal cost.
  const equipment = text(payload, "equipmentNeeds");
  if (equipment === "true" || equipment === "false") lead.baler_rental = equipment === "true" ? "yes" : "no";
  if (typeof payload.currentDisposalCost === "number") {
    lead.current_monthly_disposal_cost = payload.currentDisposalCost;
  }

  const consented = ticked(payload.smsConsent);
  lead.sms_consent = consented ? "yes" : "no";
  if (consented) lead.sms_consent_text = SMS_CONSENT_TEXT;

  for (const key of ATTRIBUTION_KEYS) {
    const value = text(payload, key);
    if (value) lead[`_1db_${key}`] = value.slice(0, 500);
  }
  return lead;
}

// The site runs on Vercel, which sets x-forwarded-for to the visitor's IP.
// cf-connecting-ip is not read: with no Cloudflare in front, a visitor could set it.
function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (forwarded) return forwarded;
  return request.headers.get("x-real-ip")?.trim() ?? "";
}

function backoffMs(response: Response | null): number {
  const retryAfter = Number(response?.headers.get("Retry-After"));
  if (Number.isFinite(retryAfter) && retryAfter > 0) return Math.min(retryAfter * 1000, 3000);
  return 700;
}

/** POST to 1DB; on a 5xx, a 429 or a network error, try once more with the same body. */
async function sendTo1db(url: string, headers: Record<string, string>, body: string): Promise<Response | null> {
  let response: Response | null = null;
  for (let attempt = 0; attempt < 2; attempt++) {
    if (attempt > 0) await new Promise((resolve) => setTimeout(resolve, backoffMs(response)));
    try {
      response = await fetch(url, { method: "POST", headers, body, signal: AbortSignal.timeout(10_000) });
    } catch {
      response = null;
      continue;
    }
    if (response.status < 500 && response.status !== 429) return response;
  }
  return response;
}

/** 1DB's per-field 400, renamed to the forms' inputs. Empty when no field maps. */
async function formFieldErrors(response: Response): Promise<Record<string, string>> {
  const body: { fields?: Record<string, unknown> } = await response.json().catch(() => ({}));
  const fields: Record<string, string> = {};
  const sent = body.fields ?? {};
  for (const name of Object.keys(sent)) {
    const message = sent[name];
    const formName = Object.prototype.hasOwnProperty.call(FORM_FIELD_FOR, name) ? FORM_FIELD_FOR[name] : undefined;
    if (formName && typeof message === "string" && !fields[formName]) fields[formName] = message;
  }
  return fields;
}

/** The 1DB base URL, also when it was set with /v1/leads on the end. */
function leadsUrl(endpoint: string): string {
  return `${endpoint.replace(/\/+$/, "").replace(/\/v1\/leads$/, "")}/v1/leads`;
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    const parsed: unknown = await request.json();
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) throw new Error("bad body");
    payload = parsed as Payload;
  } catch {
    return Response.json({ error: TRY_AGAIN }, { status: 400 });
  }

  // Honeypot: answer as for a success and send nothing.
  if (ticked(payload.botcheck)) return Response.json({ ok: true });

  const fields = validate(payload);
  const submissionId = text(payload, "submission_id");
  if (!SUBMISSION_ID.test(submissionId)) fields.submission_id = "Please reload the page and try again";
  if (Object.keys(fields).length > 0) {
    return Response.json({ error: CHECK_FIELDS, fields }, { status: 400 });
  }

  const apiEndpoint = process.env.DB_API_ENDPOINT;
  const apiKey = process.env.DB_API_KEY;
  if (!apiEndpoint || !apiKey) {
    console.error("Lead route: DB_API_ENDPOINT or DB_API_KEY is not set");
    return Response.json({ error: TRY_AGAIN }, { status: 503 });
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-API-Key": apiKey,
    "X-1DB-Contract": "2",
  };
  const ip = clientIp(request);
  if (ip) headers["X-1DB-Client-IP"] = ip;
  const userAgent = request.headers.get("user-agent");
  if (userAgent) headers["X-1DB-Client-UA"] = userAgent;

  const response = await sendTo1db(leadsUrl(apiEndpoint), headers, JSON.stringify(buildLead(payload, submissionId)));

  if (!response || response.status >= 500) {
    console.error("Lead route: 1DB failed after one retry", response?.status ?? "network error");
    return Response.json({ error: TRY_AGAIN }, { status: 502 });
  }
  if (response.ok) return Response.json({ ok: true });

  if (response.status === 429) {
    return Response.json(
      { error: TOO_MANY },
      { status: 429, headers: { "Retry-After": response.headers.get("Retry-After") ?? "60" } },
    );
  }

  if (response.status === 400) {
    const serverFields = await formFieldErrors(response);
    if (Object.keys(serverFields).length > 0) {
      return Response.json({ error: CHECK_FIELDS, fields: serverFields }, { status: 400 });
    }
  }

  console.error("Lead route: 1DB refused the lead", response.status);
  return Response.json({ error: TRY_AGAIN }, { status: 400 });
}
