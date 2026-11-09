import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials (4.9★)",
  description:
    "Read 1,500+ verified customer reviews for Ram Raj Cabs. Trusted taxi service for families, pilgrims, and corporate travellers across Dehradun, Haridwar & Delhi NCR.",
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    title: "Customer Reviews & Testimonials (4.9★) | Ram Raj Cabs",
    description:
      "Read 1,500+ verified customer reviews for Ram Raj Cabs. Rated 4.9/5 on Google Reviews.",
    url: "https://www.ramrajcabs.com/reviews",
    images: [
      {
        url: "/images/ramraj-logo-hq.jpg",
        width: 1200,
        height: 630,
        alt: "Ram Raj Cabs Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews & Testimonials (4.9★) | Ram Raj Cabs",
    description:
      "Read 1,500+ verified customer reviews for Ram Raj Cabs. 4.9/5 rating on Google.",
    images: ["/images/ramraj-logo-hq.jpg"],
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
