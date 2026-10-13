import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedThreeServicesSection from "@/components/FeaturedThreeServicesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Top Navbar with Logo at extreme left corner */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* FIRST PAGE HERO: 50/50 Split (Left text, Right full image) + Booking Widget */}
        <HeroSection />

        {/* 3 Dedicated Places: Delhi ➔ Dehradun, Haridwar ➔ Kedarnath, Mussoorie Sightseeing */}
        <FeaturedThreeServicesSection />

        {/* FAQs ONLY (Customer Reviews are now on their own dedicated /reviews page) */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Conversion Bar */}
      <FloatingActionBar />
    </div>
  );
}
