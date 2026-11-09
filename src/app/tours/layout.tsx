import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Sightseeing & Outstation Cabs in Dehradun",
  description:
    "Explore scenic hill stations and pilgrimage destinations from Dehradun and Haridwar to Mussoorie, Rishikesh, Kedarnath, Badrinath, and Auli with Ram Raj Cabs.",
  alternates: {
    canonical: "/tours",
  },
  openGraph: {
    title: "Tour Sightseeing & Outstation Cabs in Dehradun | Ram Raj Cabs",
    description:
      "Explore scenic hill stations and pilgrimage destinations from Dehradun and Haridwar to Mussoorie, Rishikesh, Kedarnath, Badrinath, and Auli.",
    url: "https://www.ramrajcabs.com/tours",
    images: [
      {
        url: "/images/kedarnath.jpg",
        width: 1200,
        height: 630,
        alt: "Ram Raj Cabs Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour Sightseeing & Outstation Cabs in Dehradun | Ram Raj Cabs",
    description:
      "Explore scenic hill stations and pilgrimage destinations across Uttarakhand with Ram Raj Cabs.",
    images: ["/images/kedarnath.jpg"],
  },
};

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
