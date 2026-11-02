import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote - Cardboard Bale Pickup and Bale Sales",
  description:
    "Send a free, no-obligation request for cardboard bale pickup, a bale purchase quote or baler rental. Partner suppliers in our network follow up with quotes.",
  alternates: { canonical: "/quote" },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
