import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Cardboard Bale Recycling handles the information you send through our quote request form, who receives it and how long it is kept.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "November 2, 2026";

export default function PrivacyPolicyPage() {
  return (
    <article className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Who We Are
            </h2>
            <p>
              Cardboard Bale Recycling (cardboardbalerecycling.com) is a
              referral service. We do not collect, buy or process cardboard
              ourselves. When you send a request, we pass it to partner
              recyclers and suppliers in our network so they can prepare a
              quote.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              What the Form Collects
            </h2>
            <p className="mb-3">
              Our quote request and contact forms ask for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your name, email address and phone number</li>
              <li>Your company name and, if you give them, address, city and state</li>
              <li>Your ZIP or postal code</li>
              <li>
                What you need (pickup, a bale purchase quote, baler rental or
                something else), your monthly volume, timeframe, pickup
                frequency and any message you write
              </li>
              <li>Whether you agree to receive text messages about your request</li>
            </ul>
            <p className="mt-3">
              With your request we also record technical details that help us
              understand how you found the site: the page you sent it from,
              the referring page, campaign tags in the link you followed (such
              as utm_source), your IP address and your browser&apos;s user
              agent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How Your Information Is Used and Shared
            </h2>
            <p className="mb-3">
              We use your information only to handle your request. Requests are
              sent to the 1DB lead platform, which records them and forwards
              them to partner suppliers in our network that may be able to
              help. Those partners use your details to contact you and prepare
              a quote.
            </p>
            <p>
              We do not sell your information, and we do not share it for
              advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Text Messages
            </h2>
            <p>
              If you tick the box on the form, a partner supplier may text you
              about your request. Message and data rates may apply. Reply STOP
              to opt out at any time. Agreeing to texts is not required to send
              a request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Analytics and Cookies
            </h2>
            <p>
              This site uses cookieless PostHog analytics to count visits and
              see which pages are used. It sets no advertising cookies. The
              forms keep where your visit came from in your browser&apos;s
              session storage, which is cleared when you close the tab.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How Long We Keep It
            </h2>
            <p>
              We keep request details for as long as needed to pass them to
              partners and handle follow-up, and then only as long as needed
              for record-keeping or legal reasons. Partner suppliers that
              receive your request keep it under their own policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Your Choices
            </h2>
            <p>
              You can ask to see, correct or delete the information you sent
              us. To make a request, use our{" "}
              <Link href="/quote" className="text-primary-600 underline">
                contact form
              </Link>{" "}
              and choose &quot;Something else&quot;.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy. The date at the top shows when it
              last changed.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
