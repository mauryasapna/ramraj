"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import BookingWidget from "@/components/BookingWidget";
import { ArrowLeft, Sparkles, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/data/cabData";

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b1325] text-slate-100">
      <Navbar />

      <main className="flex-1 flex flex-col justify-center py-6 sm:py-12 px-3 sm:px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto relative z-10 flex flex-col justify-center">
          {/* Top Bar with Back Link */}
          <div className="mb-4 sm:mb-6 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-800 px-3.5 py-1.5 rounded-xl border border-slate-700 transition-all shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>

            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> 24/7 Verified Booking Desk
            </span>
          </div>

          {/* Heading */}
          <div className="text-center mb-5 sm:mb-7">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Book Your Cab with <span className="royal-gold-text">RAMRAJ CABS</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Har Safar, Vishwas Ke Saath. • Instant WhatsApp Confirmation
            </p>
          </div>

          {/* Full Page Responsive Booking Form */}
          <div className="w-full">
            <BookingWidget />
          </div>

          {/* Bottom Security & Direct Helpline */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>
                <strong>100% Fixed Fares:</strong> Zero toll surprises. Pay online or cash to driver.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>Need help?</span>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-amber-400 font-bold hover:underline flex items-center gap-1"
              >
                <Phone className="w-3 h-3" /> {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActionBar />
    </div>
  );
}
