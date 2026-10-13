"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Star, Sparkles, Award, Phone, ArrowRight, MessageSquareQuote } from "lucide-react";
import { CONTACT_INFO } from "@/data/cabData";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a1222] py-10 sm:py-16 lg:py-20 text-white border-b border-slate-800">
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-slate-700 rounded-full blur-[140px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* TRUE 50/50 SPLIT: LEFT HALF TEXT, RIGHT HALF FULL IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* LEFT HALF: TEXT & ACTIONS */}
          <div className="text-left space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/25 via-orange-500/25 to-amber-500/25 border-2 border-amber-400/80 text-amber-300 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
              </span>
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="tracking-wide">Chardham Special Booking Available</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white leading-tight">
              RAMRAJ <span className="text-amber-400">CABS</span>
            </h1>

            {/* Tagline */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-300 tracking-wide">
              Har Safar, <br className="hidden sm:inline" />
              <span className="text-white">Vishwas Ke Saath.</span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Professional travel made seamless, safe, and reliable. Dedicated private cabs, verified native Pahadi chauffeurs, and transparent pricing for every journey.
            </p>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> All Tolls & Driver Included
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 font-medium">
                <Award className="w-4 h-4 text-amber-400" /> Local Pahadi Chauffeurs
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 font-medium">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9/5 Rating
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <Link
                href="/book"
                className="px-6 py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:brightness-105 text-slate-950 font-black rounded-xl text-sm transition-all shadow-lg shadow-amber-500/25 active:scale-95 border border-amber-300 ring-2 ring-amber-400/40 flex items-center gap-2"
              >
                <span>Book Cab Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/tours"
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all"
              >
                View Tours <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </Link>

              <Link
                href="/reviews"
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all"
              >
                <MessageSquareQuote className="w-3.5 h-3.5" /> Reviews
              </Link>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" /> {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* RIGHT HALF: COVERS THE FULL HALF SIDE */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden border-2 border-amber-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white p-4 sm:p-6 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/images/ramraj-logo-hq.jpg"
                  alt="RAMRAJ CABS - Har Safar, Vishwas Ke Saath"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
