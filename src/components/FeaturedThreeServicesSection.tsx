"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  MapPin,
  MessageCircle,
  ArrowRight,
  Sparkles,
  X,
  Calendar,
  Car,
  ShieldCheck,
  Phone,
  Compass,
} from "lucide-react";
import { FEATURED_SERVICES, CONTACT_INFO, FeaturedService } from "@/data/cabData";

export default function FeaturedThreeServicesSection() {
  const tours = FEATURED_SERVICES;
  const [selectedTourForModal, setSelectedTourForModal] = useState<FeaturedService | null>(null);

  return (
    <section id="services" className="py-10 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Cab Tour Packages
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Popular Tour Packages & Cab Services
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
            Fixed transparent pricing with native Pahadi drivers. Dzire, Ertiga & Innova Crysta available 24/7.
          </p>
        </div>

        {/* Compact Grid: Responsive 4-Column on Desktop / 2-Column on Tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tours.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* 1. Compact Image Container */}
                <div className="relative h-36 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={srv.image || "/images/kedarnath.jpg"}
                    alt={srv.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-slate-950/85 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-xs shadow-xs flex items-center gap-1">
                    <Calendar className="w-2.5 h-2.5 text-amber-400" />
                    {srv.badge || srv.distanceTime}
                  </div>
                </div>

                {/* 2. Highlighted Banner Directly Under Photo */}
                <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-3 py-1.5 text-white flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-200 animate-pulse flex-shrink-0" />
                    <span className="text-[10px] uppercase font-black tracking-wider text-amber-100">
                      Fare:
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-black text-white tracking-wide bg-black/25 px-2 py-0.5 rounded-md border border-white/20">
                    {srv.priceHighlight || `₹${srv.sedanFare.toLocaleString("en-IN")}`}
                  </div>
                </div>

                {/* 3. Card Content - Clean, Compact & uncluttered */}
                <div className="p-3.5">
                  <div className="text-[10px] font-semibold text-amber-700 mb-0.5 flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 text-amber-600 flex-shrink-0" />
                    <span className="truncate">{srv.routeText}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1 leading-snug truncate">
                    {srv.title}
                  </h3>

                  <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                    {srv.description}
                  </p>
                </div>
              </div>

              {/* 4. Action Buttons Footer - Compact */}
              <div className="p-3 pt-2 border-t border-slate-100 bg-slate-50/60">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSelectedTourForModal(srv)}
                    className="flex-1 py-1.5 px-2 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg text-xs font-black text-center transition-all shadow-xs flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                  >
                    View More <ArrowRight className="w-3 h-3" />
                  </button>

                  <Link
                    href="/book"
                    className="py-1.5 px-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold text-center transition-all shadow-xs"
                  >
                    Book
                  </Link>

                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Ramraj%20Cabs%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(
                      srv.title
                    )}%20(${srv.priceHighlight}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center justify-center transition-all shadow-xs"
                    aria-label="WhatsApp Inquiry"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages Link */}
        <div className="mt-8 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shadow-xs"
          >
            Explore Complete Packages & Pricing <ArrowRight className="w-3 h-3 text-amber-400" />
          </Link>
        </div>
      </div>

      {/* VIEW MORE MODAL (Details, Rates & Itinerary if available) */}
      {selectedTourForModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedTourForModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative my-6 text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-900 text-white p-3.5 sm:p-5 rounded-t-2xl sm:rounded-t-3xl flex items-center justify-between z-10 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  Package Details
                </span>
                <h3 className="text-base sm:text-2xl font-black text-white leading-tight">
                  {selectedTourForModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTourForModal(null)}
                className="p-1.5 sm:p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="p-3.5 sm:p-6 space-y-3 sm:space-y-6">
              {/* Highlighted Price Pill in Modal */}
              <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 border border-amber-400 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                <div>
                  <div className="text-[10px] sm:text-xs font-bold text-amber-800 uppercase tracking-wider">
                    Total Package Fare
                  </div>
                  <div className="text-xl sm:text-3xl font-black text-amber-600">
                    {selectedTourForModal.priceHighlight}
                  </div>
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-slate-600 sm:text-right">
                  <span className="font-bold text-slate-800 inline sm:block mr-1 sm:mr-0">
                    {selectedTourForModal.badge}
                  </span>
                  <span>All tolls, driver allowance & fuel included</span>
                </div>
              </div>

              {/* Vehicle Options & Fares Breakdown (Compact 3-column grid) */}
              <div>
                <h4 className="text-xs sm:text-sm font-black uppercase text-slate-800 tracking-wider mb-1.5 sm:mb-2.5 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
                  Vehicle Rates & Seating
                </h4>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl p-1.5 sm:p-3 text-center">
                    <div className="text-[10px] sm:text-xs font-bold text-slate-600 truncate">Dzire</div>
                    <div className="text-[9px] sm:text-xs text-slate-400 hidden sm:block">4+1 Pax</div>
                    <div className="text-xs sm:text-sm font-black text-amber-700 mt-0.5 sm:mt-1 truncate">
                      {selectedTourForModal.dailyRates?.dzire || `₹${selectedTourForModal.sedanFare.toLocaleString("en-IN")}`}
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl p-1.5 sm:p-3 text-center">
                    <div className="text-[10px] sm:text-xs font-bold text-slate-600 truncate">Ertiga</div>
                    <div className="text-[9px] sm:text-xs text-slate-400 hidden sm:block">7+1 Pax</div>
                    <div className="text-xs sm:text-sm font-black text-amber-700 mt-0.5 sm:mt-1 truncate">
                      {selectedTourForModal.dailyRates?.ertiga || `₹${selectedTourForModal.ertigaFare.toLocaleString("en-IN")}`}
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl p-1.5 sm:p-3 text-center">
                    <div className="text-[10px] sm:text-xs font-bold text-slate-600 truncate">Innova</div>
                    <div className="text-[9px] sm:text-xs text-slate-400 hidden sm:block">7+1 Pax</div>
                    <div className="text-xs sm:text-sm font-black text-amber-700 mt-0.5 sm:mt-1 truncate">
                      {selectedTourForModal.dailyRates?.innova || `₹${selectedTourForModal.innovaFare.toLocaleString("en-IN")}`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Day-by-Day Itinerary (Ultra-compact layout for Mobile) */}
              {selectedTourForModal.itinerary && selectedTourForModal.itinerary.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2.5">
                    <h4 className="text-xs sm:text-sm font-black uppercase text-slate-800 tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
                      Day-Wise Yatra Itinerary
                    </h4>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded-full">
                      {selectedTourForModal.itinerary.length} Days Plan
                    </span>
                  </div>
                  <div className="space-y-1 sm:space-y-2 relative before:absolute before:inset-0 before:left-2 sm:before:left-3 before:w-0.5 before:bg-amber-300/70">
                    {selectedTourForModal.itinerary.map((item, idx) => (
                      <div key={idx} className="relative flex items-start gap-1.5 sm:gap-3 pl-0 sm:pl-0.5">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-500 text-slate-950 font-black text-[9px] sm:text-[10px] flex items-center justify-center flex-shrink-0 z-10 shadow-xs mt-0.5">
                          {idx + 1}
                        </div>
                        <div className="bg-slate-50 hover:bg-amber-50/50 border border-slate-200/90 rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:p-3 flex-1 transition-colors">
                          <div className="flex items-baseline gap-1.5 flex-wrap">
                            <span className="font-black text-[10px] sm:text-xs text-amber-800 bg-amber-100/90 px-1.5 py-0.2 rounded uppercase flex-shrink-0">
                              {item.day}
                            </span>
                            <h5 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                              {item.title}
                            </h5>
                          </div>
                          {item.desc && (
                            <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 sm:mt-1 leading-snug">
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Route & Highlights list for Sightseeing / Intercity without multi-day itinerary */}
              {(!selectedTourForModal.itinerary || selectedTourForModal.itinerary.length === 0) && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
                    Trip Highlights & Attractions:
                  </div>
                  <div className="space-y-1">
                    {selectedTourForModal.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inclusions Checkbox List */}
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-lg sm:rounded-xl p-2.5 sm:p-4">
                <div className="text-[11px] sm:text-xs font-black text-emerald-900 uppercase tracking-wider mb-1.5 sm:mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700" />
                  What is Included in This Fare:
                </div>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-emerald-950 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">Dedicated Cab & Driver</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">Full Fuel Included</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">All Road & Hill Tolls</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">Driver Allowance</span>
                  </div>
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <Link
                  href="/book"
                  onClick={() => setSelectedTourForModal(null)}
                  className="w-full sm:flex-1 py-2.5 sm:py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-xl text-xs sm:text-sm text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  Book This Cab Now <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Ramraj%20Cabs%2C%20I%20want%20to%20book%20${encodeURIComponent(
                    selectedTourForModal.title
                  )}%20(${selectedTourForModal.priceHighlight}).%20Please%20share%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> WhatsApp Inquiry
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="w-full sm:w-auto px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> Call {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
