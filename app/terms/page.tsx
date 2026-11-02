import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for cardboardbalerecycling.com, a referral service that passes cardboard recycling requests to partner suppliers.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "November 2, 2026";

export default function TermsPage() {
  return (
    <article className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Use</h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              A Referral Service
            </h2>
            <p>
              Cardboard Bale Recycling (cardboardbalerecycling.com) is a
              referral service. We pass the requests you send through this
              site to partner recyclers and suppliers in our network. We do not
              collect, buy, sell, rent or transport cardboard or equipment
              ourselves, and we are not a party to any agreement you make with
              a partner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Partner Suppliers
            </h2>
            <p>
              Partner suppliers set their own prices, payment terms, pickup
              schedules, delivery, warranties, returns and service areas. Any
              quote, contract or transaction is between you and the partner.
              Please review a partner&apos;s terms before you agree to them.
              We cannot promise that a partner will be available in your area
              or will respond to every request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Information on This Site
            </h2>
            <p>
              The content on this site is general information about cardboard
              recycling. It is not professional, legal or regulatory advice.
              Rules on waste and recycling vary, so check current regulations
              that apply to your business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              No Warranty
            </h2>
            <p>
              This site and its content are provided &quot;as is&quot;, without
              warranties of any kind. We do not warrant the accuracy of the
              content or the products, services or conduct of any partner
              supplier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Cardboard Bale Recycling
              is not liable for any indirect, incidental or consequential
              damages, or for any loss arising from your use of this site or
              from any dealings with a partner supplier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Using the Site
            </h2>
            <p>
              Please send accurate information and use the forms only for
              genuine requests. Your information is handled as described in
              our{" "}
              <Link
                href="/privacy-policy"
                className="text-primary-600 underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Changes and Contact
            </h2>
            <p>
              We may update these terms. The date at the top shows when they
              last changed. Questions can be sent through our{" "}
              <Link href="/quote" className="text-primary-600 underline">
                contact form
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
