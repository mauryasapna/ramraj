"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { CUSTOMER_REVIEWS, CONTACT_INFO } from "@/data/cabData";
import {
  Star,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  Edit3,
  Check,
  X,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export default function ReviewsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [reviewText, setReviewText] = useState("");
  const [copiedStatus, setCopiedStatus] = useState(false);

  const handlePostToGoogle = () => {
    if (reviewText.trim()) {
      navigator.clipboard.writeText(reviewText.trim()).catch(() => {});
      setCopiedStatus(true);
      setTimeout(() => setCopiedStatus(false), 4000);
    }
    window.open(CONTACT_INFO.googleReviewUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header Link & Quick Add Button */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 transition-all shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100/80 px-3 py-1 rounded-full hidden sm:inline-block">
                Verified Reviews
              </span>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                Write a Review
              </button>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              4.9 / 5 Rating on Google (1,500+ Verified Trips)
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
              Customer Reviews & Feedback — <span className="text-amber-600">Ramraj Cabs</span>
            </h1>

            <p className="mt-1 text-sm sm:text-base font-bold text-amber-600">
              Har Safar, Vishwas Ke Saath.
            </p>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Trusted by families, corporate travellers, and pilgrims across Uttarakhand and Delhi NCR.
              Have you traveled with us? We would love to hear your feedback on Google Reviews!
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={CONTACT_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:shadow-amber-500/25 hover:brightness-105 active:scale-95 transition-all border border-amber-300"
              >
                <GoogleIcon className="w-4 h-4" />
                <span>Write a Review on Google</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-900" />
              </a>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 shadow-sm active:scale-95 transition-all cursor-pointer"
              >
                <Edit3 className="w-4 h-4 text-amber-600" />
                <span>Review Form</span>
              </button>
            </div>
          </div>

          {/* Google Review Highlight Banner */}
          <div className="mb-10 bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex items-start sm:items-center gap-4 text-left">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-inner flex-shrink-0">
                  <GoogleIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-base sm:text-lg text-slate-900">
                      Ramraj Cabs on Google
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Business
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-800">4.9 Star Rating</span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500">1,500+ Happy Pilgrims & Tourists</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 max-w-xl">
                    Your valuable review motivates our local Pahadi chauffeurs and helps fellow travellers choose reliable cab services across Uttarakhand.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2.5 flex-shrink-0">
                <a
                  href={CONTACT_INFO.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all text-center"
                >
                  <GoogleIcon className="w-4 h-4 bg-white rounded-full p-0.5" />
                  <span>Review on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* CUSTOMER REVIEWS GRID */}
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Recent Verified Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {CUSTOMER_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Trip
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="font-extrabold text-base text-slate-900">{rev.author}</div>
                  <div className="text-xs text-slate-500">{rev.location}</div>
                  <div className="text-xs text-amber-800 font-semibold mt-1 bg-amber-50 px-2.5 py-1 rounded-lg w-fit">
                    {rev.trip}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review Submission Box */}
          <div className="bg-[#0b1325] text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
                <HeartHandshake className="w-4 h-4" /> Feedback & Bookings
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Traveled with Ramraj Cabs recently?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                We value your experience. Share your journey review on Google or book your next trip with transparent fares.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={CONTACT_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-950 font-black rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <GoogleIcon className="w-4 h-4" /> Add Google Review
              </a>

              <Link
                href="/book"
                className="flex-1 sm:flex-none px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm text-center transition-all"
              >
                Book Cab
              </Link>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Ramraj%20Cabs%2C%20I%20want%20to%20share%20my%20review%20feedback.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Review Add Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close review modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-amber-50 rounded-2xl border border-amber-200/60">
                <GoogleIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  Add Your Review for Ramraj Cabs
                </h3>
                <p className="text-xs text-slate-500">
                  Your feedback will be published on our verified Google Business profile
                </p>
              </div>
            </div>

            {/* Star Rating Selector */}
            <div className="mb-4 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Select Your Rating:
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => {
                  const isFilled = (hoverRating ?? selectedRating) >= star;
                  return (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      onClick={() => setSelectedRating(star)}
                      className="p-1 hover:scale-125 transition-transform cursor-pointer"
                      aria-label={`${star} star`}
                    >
                      <Star
                        className={`w-7 h-7 ${
                          isFilled
                            ? "fill-amber-400 text-amber-500"
                            : "text-slate-300 fill-slate-100"
                        }`}
                      />
                    </button>
                  );
                })}
                <span className="ml-2 text-xs font-bold text-slate-700">
                  {hoverRating ?? selectedRating} / 5 Stars
                </span>
              </div>
            </div>

            {/* Review Textarea */}
            <div className="mb-4">
              <label
                htmlFor="reviewTextInput"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                Write Your Review (Optional):
              </label>
              <textarea
                id="reviewTextInput"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your travel experience, vehicle condition, and driver punctuality..."
                rows={3}
                className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none text-slate-800"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Tip: Your written review will be automatically copied so you can paste it directly on Google Reviews.
              </p>
            </div>

            {/* Notification if copied */}
            {copiedStatus && (
              <div className="mb-4 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Review copied to clipboard! Opening Google Reviews...</span>
              </div>
            )}

            {/* Submit / Post Button */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={handlePostToGoogle}
                className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <GoogleIcon className="w-4 h-4" />
                <span>Post on Google Reviews</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={CONTACT_INFO.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  Direct Google Reviews link <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingActionBar />
    </div>
  );
}
