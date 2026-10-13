"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { GALLERY_PHOTOS } from "@/data/cabData";

export default function GalleryPage() {
  const photos = GALLERY_PHOTOS;

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      <Navbar />

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header Link */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>

            <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">
              Photo Gallery
            </span>
          </div>

          {/* Pure Simple Images Grid (No Zoom, No Extra Text, Excluding Home Page Logo) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="relative h-72 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActionBar />
    </div>
  );
}
