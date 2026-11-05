// Ties a 1DB lead to the visitor's PostHog events without contact details
// (1DB site_analytics.md): the PostHog distinct id goes with the lead, and
// `lead_submitted` is captured only after 1DB accepted it.

type PostHogLike = {
  get_distinct_id?: () => string
  capture?: (event: string, properties?: Record<string, unknown>) => void
}

function posthog(): PostHogLike | undefined {
  if (typeof window === 'undefined') return undefined
  return (window as unknown as { posthog?: PostHogLike }).posthog
}

/** The visitor's PostHog distinct id, when PostHog has loaded. */
export function posthogDistinctId(): string | undefined {
  try {
    const id = posthog()?.get_distinct_id?.()
    return typeof id === 'string' && id ? id : undefined
  } catch {
    return undefined
  }
}

/** Call after the lead route returned ok. Never pass contact details here. */
export function captureLeadSubmitted(submissionId: string | undefined, formSlug: string | undefined): void {
  try {
    posthog()?.capture?.('lead_submitted', { submission_id: submissionId, form_slug: formSlug })
  } catch {
    // analytics must never break the form
  }
}
