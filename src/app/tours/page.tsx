"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { FEATURED_SERVICES, CONTACT_INFO, FeaturedService } from "@/data/cabData";
import {
  MapPin,
  ArrowLeft,
  Sparkles,
  Compass,
  ArrowRight,
  Info,
} from "lucide-react";

export default function ToursPage() {
  const [tours, setTours] = useState<FeaturedService[]>(FEATURED_SERVICES);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.tours) && data.tours.length > 0) {
          const mapped = data.tours.map((t: any) => {
            const defaultItem = FEATURED_SERVICES.find((f) => f.id === t.id);
            return {
              id: t.id || `tour-${Date.now()}`,
              title: t.title || "Tour Destination",
              routeText: t.routeText || t.title,
              description: t.description || "Scenic travel destination in Uttarakhand.",
              image: t.image || defaultItem?.image || "/images/kedarnath.jpg",
              distanceTime: t.distanceTime || "Scenic Route",
              sedanFare: Number(t.sedanFare) || 3500,
              ertigaFare: Number(t.ertigaFare) || 4500,
              innovaFare: Number(t.innovaFare) || 5500,
              tempoFare: Number(t.tempoFare) || 7500,
              badge: t.badge || defaultItem?.badge || "Popular Destination",
              priceHighlight: t.priceHighlight || defaultItem?.priceHighlight,
              dailyRates: defaultItem?.dailyRates,
              itinerary: defaultItem?.itinerary,
              pricingExplanation: defaultItem?.pricingExplanation,
              highlights: defaultItem?.highlights || [
                "Scenic Himalayan mountain landscapes and pleasant weather",
                "Renowned viewpoints, cultural heritage, and local sightseeing spots",
              ],
              inclusions: defaultItem?.inclusions || [],
            };
          });
          setTours(mapped);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header Link & Title */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 transition-all mb-3 shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 ml-2">
              <Compass className="w-3.5 h-3.5 text-amber-700" />
              Tour Sightseeing Places
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
              Explore Our <span className="royal-gold-text">Destinations & Places</span>
            </h1>

            <p className="mt-1 text-sm sm:text-base font-bold text-amber-600">
              Har Safar, Vishwas Ke Saath.
            </p>

            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Discover beautiful mountain hill stations, holy pilgrimages, and scenic valley routes across Uttarakhand.
            </p>

            {/* Quick Link to Dedicated Packages Page */}
            <div className="mt-4">
              <Link
                href="/packages"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-xl transition-all shadow-xs"
              >
                <span>Looking for Vehicle Fares & Tour Packages? Click Here</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* SIGHTSEEING TOUR PLACES (Only Name, Photo & What kind of place it is) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((place) => (
              <div
                key={place.id}
                id={place.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-slate-300"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={place.image}
                      alt={place.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Place Category Tag */}
                    <div className="absolute top-3 left-3 bg-slate-950/85 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                      {place.distanceTime.split("•")[0]}
                    </div>
                  </div>

                  {/* Place Name & Description of What Kind of Place It Is */}
                  <div className="p-5">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-800 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      <span className="truncate">{place.routeText}</span>
                    </div>

                    {/* Place Name */}
                    <h2 className="text-lg font-black text-slate-950 mb-2 leading-snug">
                      {place.title}
                    </h2>

                    {/* What Kind of Place It Is (Description) */}
                    <div className="text-xs text-slate-600 leading-relaxed space-y-2 mb-4">
                      <p>{place.description}</p>
                    </div>

                    {/* Place Highlights & Characteristics */}
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5 mb-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                        <Info className="w-3 h-3 text-amber-600" />
                        About this destination:
                      </div>
                      {place.highlights.map((h, i) => (
                        <div key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions linking to full Package and Booking */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Link
                      href={`/packages#${place.id}`}
                      className="flex-1 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold text-center transition-all flex items-center justify-center gap-1"
                    >
                      <span>View Package & Fares</span>
                      <ArrowRight className="w-3 h-3 text-amber-400" />
                    </Link>

                    <Link
                      href="/book"
                      className="py-2 px-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold text-center transition-all"
                    >
                      Book Cab
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Packages Callout Banner */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#0b1325] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Complete Tour Packages
              </span>
              <h3 className="text-base sm:text-lg font-black text-white">
                Looking for Detailed Vehicle Pricing & Inclusions?
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Check our fixed transparent rates for Sedan, Ertiga SUV, Innova Crysta, and Tempo Traveller.
              </p>
            </div>

            <Link
              href="/packages"
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm whitespace-nowrap transition-all shadow-md"
            >
              Explore Packages & Fares →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActionBar />
    </div>
  );
}
