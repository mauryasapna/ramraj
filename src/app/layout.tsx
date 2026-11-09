import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a1222",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ramrajcabs.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Ram Raj Cabs | Best Taxi Service in Dehradun & Uttarakhand",
    template: "%s | Ram Raj Cabs",
  },
  description:
    "Book Ram Raj Cabs in Dehradun & Haridwar. Reliable one-way, outstation & round-trip taxi service to Delhi NCR, Mussoorie, Rishikesh & Chardham with verified local Pahadi drivers. 24/7 transparent pricing.",
  keywords: [
    "Ram Raj Cabs",
    "Taxi Service in Dehradun",
    "Cab Service in Dehradun",
    "Taxi Service in Haridwar",
    "Dehradun to Delhi cab",
    "Delhi to Dehradun taxi",
    "Dehradun to Mussoorie taxi",
    "Dehradun to Rishikesh cab",
    "Chardham Yatra taxi service",
    "Uttarakhand taxi service",
    "Outstation cab Dehradun",
  ],
  authors: [{ name: "Ram Raj Cabs", url: "https://www.ramrajcabs.com" }],
  creator: "Ram Raj Cabs",
  publisher: "Ram Raj Cabs",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ram Raj Cabs | Best Taxi Service in Dehradun & Uttarakhand",
    description:
      "Book Ram Raj Cabs in Dehradun & Haridwar. Reliable one-way, outstation & round-trip taxi service to Delhi NCR, Mussoorie, Rishikesh & Chardham with verified local Pahadi drivers. 24/7 transparent pricing.",
    url: "https://www.ramrajcabs.com",
    siteName: "Ram Raj Cabs",
    images: [
      {
        url: "/images/ramraj-logo-hq.jpg",
        width: 1200,
        height: 630,
        alt: "Ram Raj Cabs Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Raj Cabs | Best Taxi Service in Dehradun & Uttarakhand",
    description:
      "Book one-way, outstation & round-trip cabs in Dehradun, Haridwar, and Delhi NCR with verified native Pahadi drivers.",
    images: ["/images/ramraj-logo-hq.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://www.ramrajcabs.com/#localbusiness",
      name: "Ram Raj Cabs",
      alternateName: ["RAMRAJ CABS", "Ramraj Cabs"],
      url: "https://www.ramrajcabs.com",
      logo: "https://www.ramrajcabs.com/images/ramraj-logo-hq.jpg",
      image: "https://www.ramrajcabs.com/images/ramraj-logo-hq.jpg",
      telephone: "+91 9128961411",
      email: "travellervikashraj@gmail.com",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Dehradun",
        },
        {
          "@type": "City",
          name: "Haridwar",
        },
        {
          "@type": "City",
          name: "Rishikesh",
        },
        {
          "@type": "City",
          name: "Mussoorie",
        },
        {
          "@type": "AdministrativeArea",
          name: "Uttarakhand",
        },
        {
          "@type": "AdministrativeArea",
          name: "Delhi NCR",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1500",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: ["https://share.google/PG33IVXHFpk8JwsHH"],
    },
    {
      "@type": "Organization",
      "@id": "https://www.ramrajcabs.com/#organization",
      name: "Ram Raj Cabs",
      alternateName: ["RAMRAJ CABS", "Ramraj Cabs"],
      url: "https://www.ramrajcabs.com",
      logo: "https://www.ramrajcabs.com/images/ramraj-logo-hq.jpg",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91 9128961411",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
      ],
      sameAs: ["https://share.google/PG33IVXHFpk8JwsHH"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
