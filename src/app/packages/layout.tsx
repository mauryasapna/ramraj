import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Packages & Cab Fares in Dehradun",
  description:
    "All-inclusive fixed transparent taxi fares for Chardham Yatra, Delhi to Dehradun, and Mussoorie sightseeing. Dzire, Ertiga, Innova Crysta & Tempo Traveller with Ram Raj Cabs.",
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: "Tour Packages & Cab Fares in Dehradun | Ram Raj Cabs",
    description:
      "All-inclusive fixed transparent taxi fares for Chardham Yatra, Delhi to Dehradun, and Mussoorie sightseeing with Ram Raj Cabs.",
    url: "https://www.ramrajcabs.com/packages",
    images: [
      {
        url: "/images/chardham.jpg",
        width: 1200,
        height: 630,
        alt: "Ram Raj Cabs Tour Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour Packages & Cab Fares in Dehradun | Ram Raj Cabs",
    description:
      "All-inclusive fixed transparent taxi fares for Chardham Yatra, Delhi to Dehradun, and Mussoorie sightseeing.",
    images: ["/images/chardham.jpg"],
  },
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
