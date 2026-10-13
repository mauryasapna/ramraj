import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramraj Cabs | Premium Taxi Service in Haridwar, Uttarakhand & Delhi NCR",
  description:
    "Book Ramraj Cabs in Haridwar — One-Way & Round Trip Cabs, Har Ki Pauri Sightseeing, Delhi to Haridwar, Dehradun, Rishikesh, Mussoorie & Hill Station Tours. Transparent pricing, local pahadi drivers, 24/7 service.",
  keywords: [
    "Ramraj Cabs",
    "Taxi Service in Haridwar",
    "Cab Service Haridwar",
    "Delhi to Haridwar cab",
    "Haridwar to Delhi taxi",
    "Haridwar local sightseeing cab",
    "Dehradun to Haridwar cab",
    "Haridwar to Rishikesh taxi",
    "Uttarakhand taxi service",
  ],
  icons: {
    icon: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
