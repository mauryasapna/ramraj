import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleet & Travel Photo Gallery",
  description:
    "View real photos of our clean commercial taxi fleet, Chardham Yatra journeys, and scenic mountain tours across Dehradun and Uttarakhand with Ram Raj Cabs.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Fleet & Travel Photo Gallery | Ram Raj Cabs",
    description:
      "View real photos of our clean commercial taxi fleet, Chardham Yatra journeys, and scenic mountain tours across Dehradun and Uttarakhand.",
    url: "https://www.ramrajcabs.com/gallery",
    images: [
      {
        url: "/images/auli.jpg",
        width: 1200,
        height: 630,
        alt: "Ram Raj Cabs Photo Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleet & Travel Photo Gallery | Ram Raj Cabs",
    description:
      "View real photos of our taxi fleet and tours across Uttarakhand with Ram Raj Cabs.",
    images: ["/images/auli.jpg"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
