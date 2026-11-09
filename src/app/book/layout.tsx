import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Cab Online in Dehradun & Haridwar",
  description:
    "Fast 24/7 online taxi booking with Ram Raj Cabs. Instant confirmation on WhatsApp, verified local Pahadi drivers, and 100% transparent fares.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book Cab Online in Dehradun & Haridwar | Ram Raj Cabs",
    description:
      "Fast 24/7 online taxi booking with Ram Raj Cabs. Instant confirmation on WhatsApp, verified local Pahadi drivers, and 100% transparent fares.",
    url: "https://www.ramrajcabs.com/book",
    images: [
      {
        url: "/images/ramraj-logo-hq.jpg",
        width: 1200,
        height: 630,
        alt: "Book Ram Raj Cabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Cab Online in Dehradun & Haridwar | Ram Raj Cabs",
    description:
      "Fast 24/7 online taxi booking with Ram Raj Cabs. Instant confirmation on WhatsApp.",
    images: ["/images/ramraj-logo-hq.jpg"],
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
