"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Phone,
  MapPin,
  Car,
  User,
  Smartphone
} from "lucide-react";
import { CONTACT_INFO, FEATURED_SERVICES } from "@/data/cabData";

export default function BookingWidget() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("kedarnath-yatra");
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [selectedVehicle, setSelectedVehicle] = useState<"sedan" | "ertiga" | "innova" | "tempo" | "custom">("sedan");
  const [customVehicle, setCustomVehicle] = useState("");
  const [pickupDate, setPickupDate] = useState("2026-10-12");
  const [pickupTime, setPickupTime] = useState("07:00");
  const [passengerName, setPassengerName] = useState("");
  const [passengerPhone, setPassengerPhone] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    try {
      const now = new Date();
      setPickupDate(now.toISOString().split("T")[0]);
    } catch {
      // fallback
    }
  }, []);

  // Selected Service
  const currentService = useMemo(() => {
    return FEATURED_SERVICES.find((s) => s.id === selectedServiceId) || FEATURED_SERVICES[0];
  }, [selectedServiceId]);

  // Dynamic Fare calculation
  const calculatedFare = useMemo(() => {
    let fare = currentService.sedanFare;
    if (selectedVehicle === "ertiga") fare = currentService.ertigaFare;
    else if (selectedVehicle === "innova") fare = currentService.innovaFare;
    else if (selectedVehicle === "tempo") fare = currentService.tempoFare;
    else if (selectedVehicle === "custom") fare = currentService.sedanFare;

    if (tripType === "round-trip" && selectedServiceId !== "mussoorie-sightseeing") {
      return Math.round(fare * 1.85);
    }
    return fare;
  }, [currentService, selectedVehicle, tripType, selectedServiceId]);

  // WhatsApp link generator
  const generateWhatsAppLink = () => {
    const vehicleLabels: Record<string, string> = {
      sedan: "Prime Sedan (Dzire / Etios)",
      ertiga: "Family SUV (Maruti Ertiga)",
      innova: "Royal SUV (Innova Crysta)",
      tempo: "Tempo Coach (12-17 Seater)",
      custom: `Customer Choice: ${customVehicle.trim() || "Custom Vehicle"}`,
    };

    const chosenVehicle =
      selectedVehicle === "custom"
        ? (customVehicle.trim() ? `Custom: ${customVehicle.trim()}` : "Customer Choice (To be discussed)")
        : (customVehicle.trim() ? `${vehicleLabels[selectedVehicle]} (Special Choice: ${customVehicle.trim()})` : vehicleLabels[selectedVehicle]);

    let msg = `*Namaste Ramraj Cabs!*%0A`;
    msg += `I want to book a cab with the following details:%0A%0A`;
    msg += `📍 *Service / Route:* ${currentService.title}%0A`;
    msg += `🏷️ *Service Note:* ${currentService.description}%0A`;
    msg += `🔄 *Trip Type:* ${tripType === "round-trip" ? "Round Trip" : "One-Way / Sightseeing"}%0A`;
    msg += `📅 *Pickup Date:* ${pickupDate}%0A`;
    msg += `⏰ *Pickup Time:* ${pickupTime}%0A`;
    msg += `🚘 *Vehicle:* ${chosenVehicle}%0A`;
    msg += `💰 *Estimated Fare:* ₹${calculatedFare.toLocaleString("en-IN")}%0A`;
    if (passengerName) msg += `👤 *Passenger:* ${passengerName}%0A`;
    if (passengerPhone) msg += `📞 *Phone:* ${passengerPhone}%0A`;
    msg += `%0APlease confirm cab and driver details. Thank you!`;

    return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${msg}`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    window.open(generateWhatsAppLink(), "_blank");
  };

  return (
    <div id="booking" className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800">
      {/* Compact Header */}
      <div className="bg-[#0f172a] px-5 py-3 border-b border-slate-800 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
          <Car className="w-4 h-4 text-amber-400" /> Instant Cab Booking
        </span>
        <span className="text-[11px] font-medium text-slate-300">
          All Tolls & Driver Included • Fixed Fare
        </span>
      </div>

      <div className="p-4 sm:p-6">
        {bookingSuccess && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-emerald-900 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Opening WhatsApp with your trip details... Our desk will confirm shortly.</span>
          </div>
        )}

        <form onSubmit={handleBookingSubmit} className="space-y-3.5">
          {/* Dropdown 1: Select Travel Destination / Route */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              Select Your Travel Destination / Route:
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => {
                setSelectedServiceId(e.target.value);
                setBookingSuccess(false);
              }}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-slate-50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-800 font-semibold text-slate-900 cursor-pointer transition-colors"
            >
              {FEATURED_SERVICES.map((srv) => (
                <option key={srv.id} value={srv.id}>
                  {srv.title} — {srv.description}
                </option>
              ))}
            </select>
          </div>

          {/* Row: Trip Type & Vehicle Class Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Dropdown 2: Trip Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Trip Type:
              </label>
              <select
                value={tripType}
                onChange={(e) => setTripType(e.target.value as any)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-slate-50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-800 font-medium text-slate-900 cursor-pointer"
              >
                <option value="one-way">One-Way / Sightseeing</option>
                {selectedServiceId !== "mussoorie-sightseeing" && (
                  <option value="round-trip">Round Trip</option>
                )}
              </select>
            </div>

            {/* Dropdown 3: Select Vehicle Class & Price with Write your choice option */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                <span>Select Vehicle Class / Write your choice:</span>
                <span className="text-[11px] text-amber-700 font-bold">Fare Updates Live</span>
              </label>
              <select
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value as any)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-slate-50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-800 font-semibold text-slate-900 cursor-pointer"
              >
                <option value="sedan">
                  Prime Sedan (Dzire / Etios - 4 Seats) — ₹{currentService.sedanFare.toLocaleString("en-IN")}
                </option>
                <option value="ertiga">
                  Family SUV (Maruti Ertiga - 6 Seats) — ₹{currentService.ertigaFare.toLocaleString("en-IN")}
                </option>
                <option value="innova">
                  Royal SUV (Innova Crysta - 7 Seats) — ₹{currentService.innovaFare.toLocaleString("en-IN")}
                </option>
                <option value="tempo">
                  Tempo Coach (12-17 Seater) — ₹{currentService.tempoFare.toLocaleString("en-IN")}
                </option>
                <option value="custom">
                  ✍️ Write your choice (Other / Custom Vehicle)
                </option>
              </select>

              {/* Write your choice Input Field */}
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[11px] font-bold text-slate-700">
                    Write your choice (Preferred Vehicle):
                  </label>
                  {selectedVehicle === "custom" && (
                    <span className="text-[10px] text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded-full">
                      Custom Choice Active
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Write your choice (e.g. Fortuner, Urbania, Kia Carens, Dzire...)"
                  value={customVehicle}
                  onChange={(e) => {
                    setCustomVehicle(e.target.value);
                    if (e.target.value.trim() && selectedVehicle !== "custom") {
                      setSelectedVehicle("custom");
                    }
                  }}
                  className={`w-full px-3 py-1.5 text-xs sm:text-sm rounded-xl border font-medium text-slate-900 transition-all ${
                    selectedVehicle === "custom"
                      ? "border-amber-500 bg-amber-50/60 ring-2 ring-amber-400/30"
                      : "border-slate-300 bg-white focus:ring-1 focus:ring-slate-800"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Row: Date, Time & Passenger Inputs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-500" /> Pickup Date
              </label>
              <input
                type="date"
                required
                value={pickupDate}
                min={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs sm:text-sm rounded-xl border border-slate-300 font-medium text-slate-900 focus:ring-1 focus:ring-slate-800"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-500" /> Pickup Time
              </label>
              <input
                type="time"
                required
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs sm:text-sm rounded-xl border border-slate-300 font-medium text-slate-900 focus:ring-1 focus:ring-slate-800"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1 flex items-center gap-1">
                <User className="w-3 h-3 text-slate-500" /> Name <span className="font-normal text-slate-400">(Opt.)</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs sm:text-sm rounded-xl border border-slate-300 font-medium text-slate-900 focus:ring-1 focus:ring-slate-800"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1 flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-slate-500" /> Mobile No.
              </label>
              <input
                type="tel"
                placeholder="9876543210"
                value={passengerPhone}
                onChange={(e) => setPassengerPhone(e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs sm:text-sm rounded-xl border border-slate-300 font-medium text-slate-900 focus:ring-1 focus:ring-slate-800"
              />
            </div>
          </div>

          {/* Compact Pricing Bar & CTA */}
          <div className="pt-2">
            <div className="p-3.5 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">
                    Fixed All-Inclusive Fare:
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-amber-400">
                    ₹{calculatedFare.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="hidden sm:block text-[11px] text-slate-300 border-l border-slate-700 pl-3 space-y-0.5">
                  <div className="text-emerald-400">✓ Driver & Fuel Included</div>
                  <div className="text-emerald-400">✓ Toll & State Taxes Included</div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" /> Book on WhatsApp
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs sm:text-sm font-black flex items-center justify-center gap-1 transition-all active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
