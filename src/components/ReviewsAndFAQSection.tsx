"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Phone, HelpCircle } from "lucide-react";
import { FAQS, CONTACT_INFO } from "@/data/cabData";

export default function ReviewsAndFAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-14 sm:py-18 bg-slate-50 text-slate-800 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* ONLY FAQs (Reviews removed completely as requested) */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Clear Travel Answers for Your Journey
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Important information on routes, timings, fares, and mountain safety.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full py-3.5 px-5 text-left font-bold text-sm sm:text-base text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="p-1 rounded-full bg-slate-100 text-slate-600 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Helpline Callout */}
        <div className="mt-8 p-5 rounded-2xl bg-[#0f172a] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-sm text-amber-400">Have more questions about your trip?</h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Our 24/7 Haridwar & Dehradun travel desk is ready to assist you.
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Ramraj%20Cabs%2C%20I%20have%20a%20question%20regarding%20taxi%20booking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Desk
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" /> {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
