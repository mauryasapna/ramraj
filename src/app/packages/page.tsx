"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { FEATURED_SERVICES, CONTACT_INFO, FeaturedService } from "@/data/cabData";
import {
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Package,
} from "lucide-react";

export default function PackagesPage() {
  const [packages, setPackages] = useState<FeaturedService[]>(FEATURED_SERVICES);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.tours) && data.tours.length > 0) {
          const mapped = data.tours.map((t: any) => {
            const defaultItem = FEATURED_SERVICES.find((f) => f.id === t.id);
            return {
              id: t.id || `package-${Date.now()}`,
              title: t.title || "Tour Package",
              routeText: t.routeText || t.title,
              description: t.description || "All-inclusive tour cab package.",
              image: t.image || defaultItem?.image || "/images/kedarnath.jpg",
              distanceTime: t.distanceTime || "Standard Route",
              sedanFare: Number(t.sedanFare) || 3500,
              ertigaFare: Number(t.ertigaFare) || 4500,
              innovaFare: Number(t.innovaFare) || 5500,
              tempoFare: Number(t.tempoFare) || 7500,
              badge: t.badge || defaultItem?.badge || "All-Inclusive Package",
              priceHighlight: t.priceHighlight || defaultItem?.priceHighlight,
              dailyRates: defaultItem?.dailyRates,
              itinerary: defaultItem?.itinerary,
              pricingExplanation: defaultItem?.pricingExplanation,
              highlights: defaultItem?.highlights || [
                "24/7 dedicated cab with local Pahadi chauffeur",
                "Clean air-conditioned vehicle with luggage carrier",
                "All tolls, driver allowance, and taxes included",
              ],
              inclusions: defaultItem?.inclusions || [
                "Expressway & Hill Tolls Included",
                "Fuel Included",
                "Driver Allowance Included",
              ],
            };
          });
          setPackages(mapped);
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
              <Package className="w-3.5 h-3.5 text-amber-700" />
              All-Inclusive Cab Packages
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
              RAMRAJ CABS <span className="royal-gold-text">Tour Packages</span>
            </h1>

            <p className="mt-1 text-sm sm:text-base font-bold text-amber-600">
              Har Safar, Vishwas Ke Saath.
            </p>

            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Complete transparent pricing for Sedans, Ertiga SUVs, Innova Crysta, and Tempo Travellers.
              All toll taxes, state permits, fuel, and driver allowances are fully included.
            </p>
          </div>

          {/* PACKAGE CARDS GRID — PURE TEXT & PACKAGE FARES (NO IMAGES) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                id={pkg.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-slate-300"
              >
                <div>
                  {/* Clean Package Header Bar (No Images) */}
                  <div className="bg-slate-900 text-white p-4 sm:p-5 border-b border-slate-800">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="bg-slate-800/90 text-amber-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 border border-slate-700">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {pkg.distanceTime.split("•")[0]}
                      </span>

                      {pkg.badge && (
                        <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs">
                          {pkg.badge.split("•")[0]}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="truncate">{pkg.routeText}</span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-black text-white leading-snug">
                      {pkg.title}
                    </h2>
                  </div>

                  {/* Package Details & Highlights */}
                  <div className="p-4 sm:p-5">
                    <p className="text-xs text-slate-600 leading-relaxed mb-3.5">
                      {pkg.description}
                    </p>

                    {/* Key Route Features */}
                    <div className="space-y-1.5 mb-3.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                        Key Inclusions & Highlights
                      </span>
                      {pkg.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Inclusions pills */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {pkg.inclusions.map((inc, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-[10px] font-semibold"
                        >
                          ✓ {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vehicle Fares Matrix & CTAs */}
                <div className="p-4 sm:p-5 pt-0">
                  <div className="pt-2.5 border-t border-slate-100 mb-3.5 grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/70">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">Sedan</span>
                      <span className="text-sm font-black text-slate-900">
                        ₹{pkg.sedanFare.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/70">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">Ertiga SUV</span>
                      <span className="text-sm font-black text-amber-700">
                        ₹{pkg.ertigaFare.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/70">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">Innova Crysta</span>
                      <span className="text-sm font-black text-slate-800">
                        ₹{pkg.innovaFare.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/70">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">Tempo Traveller</span>
                      <span className="text-sm font-black text-slate-800">
                        ₹{pkg.tempoFare.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/book"
                      className="flex-1 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold text-center transition-all shadow-xs"
                    >
                      Book Package
                    </Link>

                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Ramraj%20Cabs%2C%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(
                        pkg.title
                      )}%20package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all shadow-xs"
                      title="WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="p-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold flex items-center justify-center transition-all shadow-xs"
                      aria-label="Call Ramraj Cabs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Banner */}
          <div className="mt-10 p-5 rounded-2xl bg-[#0b1325] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-white">
                  100% All-Inclusive Fixed Pricing Guarantee
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Every package includes driver allowances, highway tolls, hill taxes, and state border permits. No surprises at destination.
                </p>
              </div>
            </div>

            <Link
              href="/book"
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm whitespace-nowrap transition-all shadow-md"
            >
              Book Instant Cab
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActionBar />
    </div>
  );
}
