"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, MessageCircle, Phone, HelpCircle } from "lucide-react";
import { FAQS, CONTACT_INFO } from "@/data/cabData";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-8 sm:py-10 bg-slate-50 text-slate-800 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Compact Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
            <HelpCircle className="w-3 h-3 text-slate-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Clear Answers for Your Journey
          </h2>
          <p className="text-slate-600 text-xs mt-0.5">
            Essential information on routes, timings, fares, and mountain safety.
          </p>
        </div>

        {/* Compact Accordion FAQ List */}
        <div className="space-y-2">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full py-2.5 px-4 text-left font-semibold text-xs sm:text-sm text-slate-900 flex justify-between items-center gap-3 hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <span className="p-0.5 rounded-full bg-slate-100 text-slate-500 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-3 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Compact Google Review Prompt */}
        <div className="mt-5 p-3 rounded-xl bg-amber-50/80 border border-amber-200/70 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-base">⭐</span>
            <div>
              <p className="font-bold text-slate-900 text-xs">
                Traveled with Ramraj Cabs recently?
              </p>
              <p className="text-[11px] text-slate-600">
                Share your journey review on verified Google Reviews.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Link
              href="/reviews"
              className="flex-1 sm:flex-none px-3 py-1 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-semibold text-center hover:bg-slate-100 transition-colors"
            >
              Read Reviews
            </Link>
            <a
              href={CONTACT_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs text-center transition-colors shadow-xs"
            >
              ★ Leave Review
            </a>
          </div>
        </div>

        {/* Compact Contact Helpline Callout */}
        <div className="mt-4 p-3.5 rounded-xl bg-[#0f172a] text-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <h4 className="font-bold text-xs text-amber-400">Have more questions about your trip?</h4>
            <p className="text-[11px] text-slate-300 mt-0.5">
              Our 24/7 Haridwar & Dehradun travel desk is ready to assist you.
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Ramraj%20Cabs%2C%20I%20have%20a%20question%20regarding%20taxi%20booking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Desk
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" /> {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
