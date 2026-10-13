"use client";

import React from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { CONTACT_INFO } from "@/data/cabData";

export default function FloatingActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex items-center gap-2">
      <a
        href="/book"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black rounded-xl text-xs active:scale-95 transition-transform shadow-md border border-amber-300"
      >
        <Calendar className="w-3.5 h-3.5 text-slate-950" />
        <span>Book Cab</span>
      </a>

      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Ramraj%20Cabs%2C%20I%20want%20to%20book%20a%20cab%20in%20Haridwar%20%2F%20Uttarakhand.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 text-white rounded-xl text-xs font-bold active:scale-95 transition-transform shadow-sm"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-900 text-white rounded-xl text-xs font-bold active:scale-95 transition-transform"
      >
        <Phone className="w-3.5 h-3.5 text-amber-400" />
        <span>Call Now</span>
      </a>
    </div>
  );
}
