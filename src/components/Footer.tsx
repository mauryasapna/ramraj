import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Mail, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "@/data/cabData";

export default function Footer() {
  return (
    <footer className="bg-[#0b1325] text-slate-300 pt-12 pb-20 md:pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info & Logo */}
          <div className="space-y-3">
            <div className="relative h-14 w-40">
              <Image
                src="/images/ramraj-logo-hq.jpg"
                alt="RAMRAJ CABS Logo"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-amber-400 font-semibold">{CONTACT_INFO.brandName}</strong> —
              {CONTACT_INFO.tagline} Trusted private taxi service for Delhi to Dehradun, Haridwar to Kedarnath, and Mussoorie hill tours.
            </p>

            <div className="pt-1 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-amber-400 transition-colors font-bold">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>{CONTACT_INFO.officeAddress}</span>
              </div>
            </div>
          </div>

          {/* Quick Links to Tours & Gallery */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 pb-1 border-b border-slate-800">
              Dedicated Tours
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/tours#delhi-dehradun" className="hover:text-amber-400 transition-colors">
                  <strong>Delhi → Dehradun</strong>
                  <span className="block text-slate-400 text-[11px]">Comfortable one-way & round-trip cab</span>
                </Link>
              </li>
              <li>
                <Link href="/tours#haridwar-kedarnath" className="hover:text-amber-400 transition-colors">
                  <strong>Haridwar → Kedarnath</strong>
                  <span className="block text-slate-400 text-[11px]">Pilgrimage journey with suitable cab</span>
                </Link>
              </li>
              <li>
                <Link href="/tours#mussoorie-sightseeing" className="hover:text-amber-400 transition-colors">
                  <strong>Mussoorie Sightseeing</strong>
                  <span className="block text-slate-400 text-[11px]">Explore Mussoorie comfortably with dedicated cab</span>
                </Link>
              </li>
              <li className="pt-1 flex flex-wrap items-center gap-2">
                <Link href="/packages" className="text-emerald-400 hover:text-emerald-300 font-semibold">
                  📦 Tour Packages
                </Link>
                <span className="text-slate-600">•</span>
                <Link href="/gallery" className="text-amber-400 hover:text-amber-300 font-semibold">
                  ➔ Gallery
                </Link>
                <span className="text-slate-600">•</span>
                <Link href="/reviews" className="text-amber-400 hover:text-amber-300 font-semibold">
                  Reviews
                </Link>
                <span className="text-slate-600">•</span>
                <a
                  href={CONTACT_INFO.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-amber-200 font-semibold inline-flex items-center gap-1"
                >
                  ★ Google Review
                </a>
              </li>
            </ul>
          </div>

          {/* Booking Policy */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 pb-1 border-b border-slate-800">
              Booking Policy & Guarantee
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                All tolls, expressway tax & driver included
              </p>
              <p>✓ Experienced local Pahadi drivers for mountain safety</p>
              <p>✓ Zero cancellation charges if informed 6 hours prior</p>
              <p>✓ 24/7 dedicated telephone & WhatsApp dispatch</p>
            </div>
            <div className="mt-4">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Ramraj%20Cabs%2C%20I%20want%20to%20book%20a%20cab.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Booking
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 RAMRAJ CABS. All Rights Reserved.</p>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Har Safar, Vishwas Ke Saath.</span>
            <span>•</span>
            <a
              href={CONTACT_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1"
            >
              4.9⭐ Google Rated (Add Review)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
