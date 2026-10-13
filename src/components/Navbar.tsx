"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Star, Sparkles, Images, Compass, MessageSquareQuote, Package } from "lucide-react";
import { CONTACT_INFO } from "@/data/cabData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white">
      {/* Top High-Trust Announcement Bar */}
      <div className="bg-[#070d19] text-slate-200 border-b border-slate-800/80 px-2.5 sm:px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-1.5 md:gap-4">
          {/* Top Line on Mobile: Brand and Google Reviews Badge */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold tracking-tight text-[11px] sm:text-xs">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 flex-shrink-0" />
              <span className="tracking-wide">RAMRAJ CABS</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-300 font-medium hidden sm:inline">Har Safar, Vishwas Ke Saath.</span>
            </div>

            {/* Google Review Trust Badge - Clickable & Golden Pill */}
            <a
              href={CONTACT_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/15 to-amber-400/10 hover:from-amber-500/25 hover:to-amber-400/20 text-amber-300 border border-amber-400/35 text-[10.5px] sm:text-[11px] font-semibold transition-all shadow-sm active:scale-95"
            >
              <Star className="w-3 h-3 fill-amber-400 text-amber-400 flex-shrink-0" />
              <span>4.9 (1,500+ Trips)</span>
              <span className="text-amber-400/40 hidden sm:inline">•</span>
              <span className="underline underline-offset-2 decoration-amber-400/60 hidden sm:inline">Google Reviews</span>
            </a>
          </div>

          {/* Bottom Line on Mobile / Right on Desktop: Tagline & 24/7 Helpline */}
          <div className="flex items-center justify-between sm:justify-end gap-2 text-[11px] sm:text-xs pt-1 sm:pt-0 border-t border-slate-800/60 sm:border-t-0">
            <span className="text-slate-300 sm:hidden italic text-[10.5px] font-medium">
              Har Safar, Vishwas Ke Saath.
            </span>

            <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
              <span className="text-slate-400 hidden sm:inline-flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                24/7 Helpline:
              </span>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 hover:text-white transition-all font-bold tracking-wide active:scale-95 shadow-sm text-[11px] sm:text-xs"
              >
                <Phone className="w-3 h-3 text-emerald-400 animate-pulse flex-shrink-0" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar — LOGO AT EXTREME LEFT CORNER */}
      <nav className="w-full bg-white border-b border-slate-200 px-2 sm:px-3 py-2">
        <div className="w-full flex items-center justify-between">
          {/* Logo pinned to the extreme left corner */}
          <Link href="/" className="flex items-center pl-0 flex-shrink-0">
            <div className="relative h-12 w-36 sm:h-14 sm:w-48 flex items-center justify-start">
              <Image
                src="/images/ramraj-logo-hq.jpg"
                alt="RAMRAJ CABS Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav Links (Clean Navigation) */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-slate-950 transition-colors">
              Home
            </Link>

            <Link
              href="/tours"
              className="hover:text-slate-950 transition-colors flex items-center gap-1"
            >
              <Compass className="w-4 h-4 text-amber-600" />
              Tours
            </Link>

            <Link
              href="/packages"
              className="hover:text-slate-950 transition-colors flex items-center gap-1"
            >
              <Package className="w-4 h-4 text-emerald-600" />
              Packages
            </Link>

            <Link
              href="/gallery"
              className="hover:text-slate-950 transition-colors flex items-center gap-1"
            >
              <Images className="w-4 h-4 text-slate-500" />
              Gallery
            </Link>

            <Link
              href="/reviews"
              className="hover:text-slate-950 transition-colors flex items-center gap-1"
            >
              <MessageSquareQuote className="w-4 h-4 text-amber-600" />
              Reviews
            </Link>

            <Link href="/#faq" className="hover:text-slate-950 transition-colors">
              FAQs
            </Link>
          </div>

          {/* Action Buttons at Right — "BOOK CAB" PLACED AT THE SIDE AND PROMINENTLY HIGHLIGHTED */}
          <div className="flex items-center gap-2 sm:gap-2.5 pr-1 sm:pr-2">
            {/* Highly Highlighted "Book Cab" CTA Button */}
            <Link
              href="/book"
              className="relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md hover:shadow-amber-500/20 hover:brightness-105 active:scale-95 transition-all border border-amber-300 ring-2 ring-amber-400/40"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
              </span>
              <span>Book Cab</span>
            </Link>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Ramraj%20Cabs%2C%20I%20want%20to%20inquire%20about%20a%20taxi%20booking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Now</span>
            </a>

            {/* Mobile Call Trigger */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="sm:hidden p-2 bg-slate-900 text-white rounded-lg font-bold"
              aria-label="Call Ramraj Cabs"
            >
              <Phone className="w-4 h-4 text-amber-400" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 space-y-2 pb-2 text-sm font-medium px-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-50 font-bold text-slate-900"
            >
              🏠 Home
            </Link>
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md bg-amber-50 font-bold text-amber-900"
            >
              Book a Cab
            </Link>
            <Link
              href="/tours"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-50 font-bold text-amber-700"
            >
              🧭 Sightseeing Tours (Places & Highlights)
            </Link>
            <Link
              href="/packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-50 font-bold text-emerald-700"
            >
              📦 Tour Packages & Vehicle Fares
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-50 font-semibold text-slate-800"
            >
              🖼️ Photo Gallery
            </Link>
            <Link
              href="/reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-50 font-semibold text-slate-800"
            >
              ⭐ Customer Reviews
            </Link>
            <a
              href={CONTACT_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md bg-amber-50/70 font-bold text-amber-900"
            >
              ✍️ Write a Google Review
            </a>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-50 font-semibold text-slate-800"
            >
              ❓ FAQs
            </Link>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Ramraj%20Cabs%2C%20I%20want%20to%20book%20a%20cab.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 bg-emerald-600 text-white rounded-lg font-bold text-xs"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Booking
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2 bg-slate-900 text-white rounded-lg font-bold text-xs"
              >
                <Phone className="w-4 h-4 text-amber-400" /> Call {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
