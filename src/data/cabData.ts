export interface ItineraryItem {
  day: string;
  title: string;
  desc: string;
}

export interface FeaturedService {
  id: string;
  category?: "dham" | "sightseeing" | "intercity";
  title: string;
  routeText: string;
  description: string;
  image: string;
  distanceTime: string;
  sedanFare: number;
  ertigaFare: number;
  innovaFare: number;
  tempoFare: number;
  badge: string;
  priceHighlight?: string;
  duration?: string;
  dailyRates?: {
    dzire: string;
    ertiga: string;
    innova: string;
  };
  itinerary?: ItineraryItem[];
  pricingExplanation?: string[];
  highlights: string[];
  inclusions: string[];
}

export const CONTACT_INFO = {
  brandName: "RAMRAJ CABS",
  tagline: "Har Safar, Vishwas Ke Saath.",
  subTagline: "Chardham Special Booking Available",
  phone: "+91 9128961411",
  phoneDisplay: "+91 91289 61411",
  whatsapp: "919128961411",
  email: "travellervikashraj@gmail.com",
  officeAddress: "Haridwar & Dehradun, Uttarakhand",
  rating: "4.9",
  reviewsCount: "1,500+",
  googleReviewUrl: "https://share.google/PG33IVXHFpk8JwsHH",
};

export const FEATURED_SERVICES: FeaturedService[] = [
  // 1. CHARDHAM YATRA (9N/10D)
  {
    id: "chardham-yatra",
    category: "dham",
    title: "Chardham Yatra",
    routeText: "Haridwar / Delhi ⇄ Yamunotri • Gangotri • Kedarnath • Badrinath",
    description: "Complete 9 Nights 10 Days sacred pilgrimage with dedicated mountain driver.",
    image: "/images/chardham.jpg",
    distanceTime: "9 Nights / 10 Days Yatra",
    sedanFare: 35000,
    ertigaFare: 45000,
    innovaFare: 55000,
    tempoFare: 75000,
    badge: "9 Nights / 10 Days",
    priceHighlight: "35000 to 50000",
    duration: "9 Nights 10 Days",
    dailyRates: {
      dzire: "Dzire / Swift (4 Pax + 1 Driver): ₹3,500/day → ₹35,000 Total",
      ertiga: "Ertiga / XL6 (7 Pax + 1 Driver): ₹4,500/day → ₹45,000 Total",
      innova: "Innova Crysta (7 Pax + 1 Driver): ₹5,500/day → ₹55,000 Total",
    },
    itinerary: [
      { day: "Day 1", title: "Haridwar/Delhi to Barkot / Yamunotri Base", desc: "Scenic mountain drive via Mussoorie to Barkot. Night stay at Barkot." },
      { day: "Day 2", title: "Barkot - Yamunotri Dham Darshan - Barkot", desc: "Drive to Janki Chatti, trek to Yamunotri Dham for darshan & Surya Kund. Return to Barkot." },
      { day: "Day 3", title: "Barkot to Uttarkashi", desc: "Drive along Bhagirathi river to Uttarkashi. Visit Kashi Vishwanath Temple." },
      { day: "Day 4", title: "Uttarkashi - Gangotri Dham Darshan - Uttarkashi", desc: "Excursion to Gangotri Dham via picturesque Harsil valley. Holy dip in Bhagirathi." },
      { day: "Day 5", title: "Uttarkashi to Guptkashi / Sonprayag", desc: "Scenic route through Tehri & Mandakini valley to Guptkashi/Sonprayag base." },
      { day: "Day 6", title: "Sonprayag to Kedarnath Dham Darshan", desc: "Trek/Helicopter to Kedarnath Ji. Evening Sandhya Aarti darshan and temple stay." },
      { day: "Day 7", title: "Kedarnath Dham to Sonprayag / Guptkashi", desc: "Morning darshan at Kedarnath Temple, trek down. Chauffeur standby at Sonprayag." },
      { day: "Day 8", title: "Guptkashi to Badrinath Dham", desc: "Drive via Chopta / Joshimath to holy Badrinath Dham. Evening Aarti at temple." },
      { day: "Day 9", title: "Badrinath Darshan & Mana Village to Pipalkoti", desc: "Tapt Kund snan & Badrinath darshan. Visit India's first village Mana. Drive to Pipalkoti." },
      { day: "Day 10", title: "Pipalkoti to Rishikesh / Haridwar Drop", desc: "Return journey via Devprayag & Rudraprayag Sangam. Drop at Haridwar / Delhi." },
    ],
    highlights: [
      "Dedicated cab with verified native Pahadi chauffeur",
      "Sonprayag base camp & helipad standby included",
      "Expressway tolls, driver allowance & fuel included",
    ],
    inclusions: [
      "Mountain Driver Allowance Included",
      "All Interstate & Hill Tolls Included",
      "Full Tour Fuel Included",
      "Zero Waiting Charges at Bases",
    ],
  },

  // 2. DO DHAM YATRA (5N/6D)
  {
    id: "twodham-yatra",
    category: "dham",
    title: "Do Dham Yatra (Kedarnath & Badrinath)",
    routeText: "Haridwar / Rishikesh ⇄ Kedarnath & Badrinath Dham",
    description: "Special 5 Nights 6 Days pilgrimage covering Baba Kedarnath and Badri Vishal.",
    image: "/images/dodham.jpg",
    distanceTime: "5 Nights / 6 Days Yatra",
    sedanFare: 21000,
    ertigaFare: 27000,
    innovaFare: 33000,
    tempoFare: 45000,
    badge: "5 Nights / 6 Days",
    priceHighlight: "21000 to 33000",
    duration: "5 Nights 6 Days",
    dailyRates: {
      dzire: "Dzire / Swift (4 Pax + 1 Driver): 6 Days × ₹3,500 = ₹21,000 (21k)",
      ertiga: "Ertiga / XL6 (7 Pax + 1 Driver): 6 Days × ₹4,500 = ₹27,000 (27k)",
      innova: "Innova Crysta (7 Pax + 1 Driver): 6 Days × ₹5,500 = ₹33,000 (33k)",
    },
    itinerary: [
      { day: "Day 1", title: "Haridwar/Rishikesh to Guptkashi / Sonprayag", desc: "Drive via Devprayag & Rudraprayag Sangam along Mandakini river to Guptkashi." },
      { day: "Day 2", title: "Sonprayag to Kedarnath Dham Trek / Darshan", desc: "Transfer to Sonprayag base. Trek or heli to Kedarnath Dham. Evening Aarti darshan." },
      { day: "Day 3", title: "Kedarnath Darshan to Sonprayag / Guptkashi", desc: "Morning temple darshan, trek down to Sonprayag. Chauffeur standby. Stay at Guptkashi." },
      { day: "Day 4", title: "Guptkashi to Badrinath Dham", desc: "Scenic mountain drive via Chopta, Joshimath to Badrinath Dham. Evening darshan." },
      { day: "Day 5", title: "Badrinath Darshan & Mana Village to Pipalkoti", desc: "Badrinath temple darshan, explore Mana village, Bhim Pul. Night stay at Pipalkoti." },
      { day: "Day 6", title: "Pipalkoti to Rishikesh / Haridwar Drop", desc: "Drive back with stops at Karnaprayag and Devprayag. Drop at Haridwar / Rishikesh." },
    ],
    highlights: [
      "Complete 5N/6D Kedarnath & Badrinath pilgrimage",
      "Experienced mountain driver with verified hill permit",
      "Standby at Sonprayag & Phata/Sersi helipads",
    ],
    inclusions: [
      "Mountain Driver Allowance Included",
      "All Tolls & State Taxes Included",
      "Complete Fuel for 6 Days Included",
    ],
  },

  // 3. YAMUNOTRI DHAM YATRA (3 DAYS)
  {
    id: "yamunotri-yatra",
    category: "dham",
    title: "Yamunotri Dham Yatra (3 Days)",
    routeText: "Haridwar / Dehradun ⇄ Barkot • Janki Chatti • Yamunotri",
    description: "3 Days dedicated cab pilgrimage to holy Yamunotri Dham via Barkot.",
    image: "/images/yamunotri.jpg",
    distanceTime: "3 Days Special",
    sedanFare: 12000,
    ertigaFare: 15000,
    innovaFare: 18000,
    tempoFare: 25000,
    badge: "3 Days Yatra",
    priceHighlight: "12,000 to 18,000",
    duration: "3 Days / 2 Nights",
    dailyRates: {
      dzire: "Dzire / Swift (4+1): ₹12,000 (12k)",
      ertiga: "Ertiga / XL6 (7+1): ₹15,000 (15k)",
      innova: "Innova Crysta (7+1): ₹18,000 (18k)",
    },
    itinerary: [
      { day: "Day 1", title: "Haridwar / Dehradun to Barkot", desc: "Scenic mountain drive via Mussoorie / Kempty Falls to Barkot. Night stay at Barkot." },
      { day: "Day 2", title: "Barkot to Janki Chatti & Yamunotri Darshan", desc: "Drive to Janki Chatti, trek to Yamunotri Dham for darshan & holy bath in Surya Kund. Return to Barkot." },
      { day: "Day 3", title: "Barkot to Dehradun / Haridwar Drop", desc: "Comfortable drive back through pine forests. Drop at Dehradun / Haridwar." },
    ],
    highlights: [
      "3 Days round-trip dedicated private vehicle",
      "Janki Chatti base standby with native hill chauffeur",
      "Sedan 12k | Ertiga 15k | Innova Crysta 18k",
    ],
    inclusions: ["Driver Allowance Included", "All Tolls & Taxes Included", "Full Fuel Included"],
  },

  // 4. GANGOTRI DHAM YATRA (3 DAYS)
  {
    id: "gangotri-yatra",
    category: "dham",
    title: "Gangotri Dham Yatra (3 Days)",
    routeText: "Haridwar / Dehradun ⇄ Uttarkashi • Harsil • Gangotri Dham",
    description: "3 Days sacred pilgrimage to Gangotri Dham through majestic Harsil Valley.",
    image: "/images/gangotri.jpg",
    distanceTime: "3 Days Special",
    sedanFare: 12000,
    ertigaFare: 15000,
    innovaFare: 18000,
    tempoFare: 25000,
    badge: "3 Days Yatra",
    priceHighlight: "12,000 to 18,000",
    duration: "3 Days / 2 Nights",
    dailyRates: {
      dzire: "Dzire / Swift (4+1): ₹12,000 (12k)",
      ertiga: "Ertiga / XL6 (7+1): ₹15,000 (15k)",
      innova: "Innova Crysta (7+1): ₹18,000 (18k)",
    },
    itinerary: [
      { day: "Day 1", title: "Haridwar / Dehradun to Uttarkashi", desc: "Drive along Bhagirathi river to Uttarkashi. Visit Kashi Vishwanath Temple. Night stay." },
      { day: "Day 2", title: "Uttarkashi to Gangotri Dham Darshan via Harsil", desc: "Excursion to Gangotri Dham via apple orchards of Harsil. Ganga Aarti darshan & return to Uttarkashi." },
      { day: "Day 3", title: "Uttarkashi to Haridwar / Dehradun Drop", desc: "Return scenic drive with mountain stops. Drop at Haridwar / Dehradun." },
    ],
    highlights: [
      "3 Days scenic route covering Gangotri & Harsil Valley",
      "Sedan 12k | Ertiga 15k | Innova Crysta 18k",
      "Experienced local driver for smooth mountain transit",
    ],
    inclusions: ["Driver Allowance Included", "All Tolls & Taxes Included", "Full Fuel Included"],
  },

  // 5. KEDARNATH DHAM YATRA (4 DAYS)
  {
    id: "kedarnath-yatra",
    category: "dham",
    title: "Kedarnath Dham Yatra (4 Days)",
    routeText: "Haridwar / Rishikesh ⇄ Guptkashi • Sonprayag Base",
    description: "4 Days pilgrimage to Baba Kedarnath with Sonprayag standby and helipad transfers.",
    image: "/images/kedarnath.jpg",
    distanceTime: "4 Days Special",
    sedanFare: 14000,
    ertigaFare: 18000,
    innovaFare: 22000,
    tempoFare: 30000,
    badge: "4 Days Yatra",
    priceHighlight: "14,000 to 22,000",
    duration: "4 Days / 3 Nights",
    dailyRates: {
      dzire: "Dzire / Swift (4+1): ₹14,000 (14k)",
      ertiga: "Ertiga / XL6 (7+1): ₹18,000 (18k)",
      innova: "Innova Crysta (7+1): ₹22,000 (22k)",
    },
    itinerary: [
      { day: "Day 1", title: "Haridwar / Rishikesh to Guptkashi / Sonprayag", desc: "Drive via Devprayag & Rudraprayag Sangam along Mandakini river to Guptkashi base. Overnight stay." },
      { day: "Day 2", title: "Sonprayag to Kedarnath Dham Trek / Heli Darshan", desc: "Early morning transfer to Sonprayag/Phata. Darshan of Baba Kedarnath. Evening Aarti & stay at Dham." },
      { day: "Day 3", title: "Kedarnath Darshan to Sonprayag / Guptkashi", desc: "Morning temple darshan, trek down to Sonprayag. Chauffeur standby pickup & night stay at Guptkashi." },
      { day: "Day 4", title: "Guptkashi / Sonprayag to Rishikesh / Haridwar Drop", desc: "Morning drive back to Haridwar / Rishikesh. Drop at railway station or airport." },
    ],
    highlights: [
      "Dedicated pickup & standby at Sonprayag base camp",
      "Sedan 14k | Ertiga 18k | Innova Crysta 22k",
      "Pahadi driver with hill certification",
    ],
    inclusions: ["Driver Allowance Included", "All Tolls & Taxes Included", "Full Fuel Included"],
  },

  // 6. BADRINATH DHAM YATRA (3 DAYS)
  {
    id: "badrinath-yatra",
    category: "dham",
    title: "Badrinath Dham Yatra (3 Days)",
    routeText: "Haridwar / Rishikesh ⇄ Joshimath • Badrinath Dham",
    description: "3 Days pilgrimage to Badri Vishal and India's first village Mana.",
    image: "/images/badrinath.jpg",
    distanceTime: "3 Days Special",
    sedanFare: 12000,
    ertigaFare: 15000,
    innovaFare: 18000,
    tempoFare: 25000,
    badge: "3 Days Yatra",
    priceHighlight: "12,000 to 18,000",
    duration: "3 Days / 2 Nights",
    dailyRates: {
      dzire: "Dzire / Swift (4+1): ₹12,000 (12k)",
      ertiga: "Ertiga / XL6 (7+1): ₹15,000 (15k)",
      innova: "Innova Crysta (7+1): ₹18,000 (18k)",
    },
    itinerary: [
      { day: "Day 1", title: "Haridwar / Rishikesh to Joshimath / Pipalkoti", desc: "Drive via Devprayag, Srinagar, Rudraprayag to Joshimath / Pipalkoti." },
      { day: "Day 2", title: "Joshimath to Badrinath Dham Darshan & Mana", desc: "Drive to Badrinath Dham for darshan. Visit Mana Village, Vyas Gufa, Bhim Pul. Night stay." },
      { day: "Day 3", title: "Pipalkoti / Joshimath to Haridwar Drop", desc: "Drive back along Alaknanda river. Drop at Rishikesh / Haridwar." },
    ],
    highlights: [
      "Direct darshan of Badri Vishal & Mana Village excursion",
      "Sedan 12k | Ertiga 15k | Innova Crysta 18k",
      "Dedicated private vehicle for all 3 days",
    ],
    inclusions: ["Driver Allowance Included", "All Tolls & Taxes Included", "Full Fuel Included"],
  },

  // 7. TUNGNATH & CHOPTA YATRA (3 DAYS)
  {
    id: "tungnath-yatra",
    category: "dham",
    title: "Tungnath & Chopta Yatra (3 Days)",
    routeText: "Haridwar / Rishikesh ⇄ Chopta • Tungnath Mahadev • Chandrashila",
    description: "Sacred pilgrimage to the world's highest Shiva shrine (3,680m) and scenic Chopta meadows.",
    image: "/images/tungnath.jpg",
    distanceTime: "3 Days Special Yatra",
    sedanFare: 12000,
    ertigaFare: 15000,
    innovaFare: 18000,
    tempoFare: 25000,
    badge: "3 Days Yatra",
    priceHighlight: "12,000 to 18,000",
    duration: "3 Days / 2 Nights",
    dailyRates: {
      dzire: "Dzire / Swift (4+1): ₹12,000 (12k)",
      ertiga: "Ertiga / XL6 (7+1): ₹15,000 (15k)",
      innova: "Innova Crysta (7+1): ₹18,000 (18k)",
    },
    itinerary: [
      { day: "Day 1", title: "Haridwar / Rishikesh to Chopta Base", desc: "Drive along Alaknanda & Mandakini rivers via Devprayag & Ukhimath to Chopta. Night stay." },
      { day: "Day 2", title: "Chopta to Tungnath Temple Darshan & Chandrashila", desc: "Early morning trek to holy Tungnath Dham & summit Chandrashila peak. Return to Chopta base." },
      { day: "Day 3", title: "Chopta to Rishikesh / Haridwar Drop", desc: "Scenic return journey with river viewpoint stops. Evening drop at Rishikesh / Haridwar." },
    ],
    highlights: [
      "Darshan of highest Panch Kedar Shiva temple Tungnath",
      "Mini Switzerland Chopta meadows & Chandrashila panorama",
      "Native Pahadi hill driver with dedicated vehicle standby",
    ],
    inclusions: ["Driver Allowance Included", "All Tolls & Taxes Included", "Full Fuel Included"],
  },

  // 8. CHAKRATA HILL TOUR (2 DAYS)
  {
    id: "chakrata-tour",
    category: "sightseeing",
    title: "Chakrata Hill Tour (2 Days)",
    routeText: "Dehradun / Haridwar ⇄ Chakrata • Tiger Falls • Chilmiri Neck",
    description: "Quiet mountain retreat among pristine deodar forests, majestic Tiger Falls, and sunset viewpoints.",
    image: "/images/chakrata.jpg",
    distanceTime: "2 Days Hill Tour",
    sedanFare: 7000,
    ertigaFare: 9000,
    innovaFare: 11000,
    tempoFare: 16000,
    badge: "2 Days Tour",
    priceHighlight: "7,000 to 11,000",
    duration: "2 Days / 1 Night",
    dailyRates: {
      dzire: "Swift Dzire (4+1): ₹7,000",
      ertiga: "Ertiga / XL6 (7+1): ₹9,000",
      innova: "Innova Crysta (7+1): ₹11,000",
    },
    itinerary: [
      { day: "Day 1", title: "Dehradun / Haridwar to Chakrata & Sunset", desc: "Scenic mountain drive via Kalsi to Chakrata. Visit Chilmiri Neck for breathtaking sunset. Night stay." },
      { day: "Day 2", title: "Tiger Falls Sightseeing & Dehradun Drop", desc: "Visit highest cascading Tiger Falls and ancient Deoban deodar forests. Drive back to Dehradun." },
    ],
    highlights: [
      "Spectacular 312 ft cascading Tiger Falls",
      "Peaceful uncrowded pine forests & Himalayan views",
      "Private AC cab with experienced local mountain driver",
    ],
    inclusions: ["Driver Allowance Included", "Tolls & Taxes Included", "Full Fuel Included"],
  },

  // 9. AULI SNOW & SKI TOUR (3 DAYS)
  {
    id: "auli-tour",
    category: "sightseeing",
    title: "Auli Snow & Ski Tour (3 Days)",
    routeText: "Haridwar / Rishikesh ⇄ Joshimath • Auli Ski Resort • Nanda Devi View",
    description: "Unforgettable winter wonderland experience with Asia's longest cable car and snow-capped peaks.",
    image: "/images/auli.jpg",
    distanceTime: "3 Days Special Tour",
    sedanFare: 13000,
    ertigaFare: 16000,
    innovaFare: 19000,
    tempoFare: 26000,
    badge: "3 Days Tour",
    priceHighlight: "13,000 to 19,000",
    duration: "3 Days / 2 Nights",
    dailyRates: {
      dzire: "Swift Dzire (4+1): ₹13,000",
      ertiga: "Ertiga / XL6 (7+1): ₹16,000",
      innova: "Innova Crysta (7+1): ₹19,000",
    },
    itinerary: [
      { day: "Day 1", title: "Haridwar / Rishikesh to Joshimath", desc: "Picturesque drive along Alaknanda river via Devprayag & Karnaprayag to Joshimath. Night stay." },
      { day: "Day 2", title: "Joshimath to Auli Ropeway & Snow Slopes", desc: "Cable car ride to Auli, enjoy skiing slopes, Artificial Lake, and panoramic Nanda Devi view." },
      { day: "Day 3", title: "Joshimath to Rishikesh / Haridwar Drop", desc: "Morning mountain tea, comfortable return drive. Drop at Rishikesh / Haridwar." },
    ],
    highlights: [
      "Auli Ropeway cable car ride & snowy ski slopes",
      "Stunning 360° views of Nanda Devi, Kamet & Trishul",
      "Specialized hill vehicle with skilled Himalayan driver",
    ],
    inclusions: ["Driver Allowance Included", "Hill Tolls & Taxes Included", "Full Fuel Included"],
  },

  // 10. MUSSOORIE SIGHTSEEING (FULL DAY)
  {
    id: "mussoorie-sightseeing",
    category: "sightseeing",
    title: "Mussoorie Sightseeing",
    routeText: "Dehradun / Haridwar ⇄ Mussoorie Queen of Hills",
    description: "Full Day dedicated private cab for complete Mussoorie sightseeing with no rush.",
    image: "/images/mussoorie.jpg",
    distanceTime: "Full Day Dedicated Cab",
    sedanFare: 3500,
    ertigaFare: 4500,
    innovaFare: 5500,
    tempoFare: 7500,
    badge: "Full Day Cab",
    priceHighlight: "₹3,500",
    dailyRates: {
      dzire: "Swift Dzire (4+1): ₹3,500",
      ertiga: "Ertiga / XL6 (7+1): ₹4,500",
      innova: "Innova Crysta (7+1): ₹5,500",
    },
    highlights: [
      "Kempty Falls, Company Garden & Mussoorie Lake",
      "Mall Road, Gun Hill & Camel's Back Road",
      "George Everest Peak & Cloud's End vistas",
      "Dedicated vehicle stays with you all day",
    ],
    inclusions: ["Driver Allowance Included", "Hill Tolls Included", "Full Fuel Included"],
  },

  // 8. HARIDWAR SIGHTSEEING (FULL DAY)
  {
    id: "haridwar-sightseeing",
    category: "sightseeing",
    title: "Haridwar Sightseeing",
    routeText: "Haridwar City & Famous Temples Tour",
    description: "Full Day private cab covering Har Ki Pauri, Mansa Devi, Chandi Devi, Shantikunj & Evening Ganga Aarti.",
    image: "/images/haridwar.jpg",
    distanceTime: "Full Day Dedicated Cab",
    sedanFare: 3500,
    ertigaFare: 4500,
    innovaFare: 5500,
    tempoFare: 7500,
    badge: "Full Day Cab",
    priceHighlight: "₹3,500",
    dailyRates: {
      dzire: "Swift Dzire (4+1): ₹3,500",
      ertiga: "Ertiga / XL6 (7+1): ₹4,500",
      innova: "Innova Crysta (7+1): ₹5,500",
    },
    highlights: [
      "Har Ki Pauri & Evening World-Famous Ganga Aarti",
      "Mansa Devi & Chandi Devi Ropeway Temples",
      "Daksha Mahadev Temple, Maya Devi & Shantikunj",
      "Full Day dedicated cab at your family's disposal",
    ],
    inclusions: ["Driver Allowance Included", "All Parking & Tolls Included", "Full Fuel Included"],
  },

  // 9. RISHIKESH SIGHTSEEING (FULL DAY)
  {
    id: "rishikesh-sightseeing",
    category: "sightseeing",
    title: "Rishikesh Sightseeing",
    routeText: "Rishikesh City, Ashrams & Ghats Tour",
    description: "Full Day private cab covering Ram Jhula, Laxman Jhula, Triveni Ghat, Beatles Ashram & Parmarth Niketan Aarti.",
    image: "/images/rishikesh.jpg",
    distanceTime: "Full Day Dedicated Cab",
    sedanFare: 3500,
    ertigaFare: 4500,
    innovaFare: 5500,
    tempoFare: 7500,
    badge: "Full Day Cab",
    priceHighlight: "₹3,500",
    dailyRates: {
      dzire: "Swift Dzire (4+1): ₹3,500",
      ertiga: "Ertiga / XL6 (7+1): ₹4,500",
      innova: "Innova Crysta (7+1): ₹5,500",
    },
    highlights: [
      "Ram Jhula, Janki Jhula & Laxman Jhula suspension bridges",
      "Beatles Ashram (Chaurasi Kutia) & Neelkanth Mahadev",
      "Triveni Ghat & Parmarth Niketan Divine Ganga Aarti",
      "Dedicated vehicle with experienced local chauffeur",
    ],
    inclusions: ["Driver Allowance Included", "All Parking & Tolls Included", "Full Fuel Included"],
  },

  // 9. DEHRADUN SIGHTSEEING (FULL DAY)
  {
    id: "dehradun-sightseeing",
    category: "sightseeing",
    title: "Dehradun Sightseeing",
    routeText: "Dehradun City & Famous Tourist Spots",
    description: "Full Day dedicated private cab for complete Dehradun tourist destinations.",
    image: "/images/dehradun.jpg",
    distanceTime: "Full Day Dedicated Cab",
    sedanFare: 3500,
    ertigaFare: 4500,
    innovaFare: 5500,
    tempoFare: 7500,
    badge: "Full Day Cab",
    priceHighlight: "₹3,500",
    dailyRates: {
      dzire: "Swift Dzire (4+1): ₹3,500",
      ertiga: "Ertiga / XL6 (7+1): ₹4,500",
      innova: "Innova Crysta (7+1): ₹5,500",
    },
    highlights: [
      "Robber's Cave (Guchhupani) & Sahastradhara springs",
      "Forest Research Institute (FRI) & Tapkeshwar Temple",
      "Malsi Deer Park & Mindrolling Monastery",
      "Private AC cab at your disposal all day",
    ],
    inclusions: ["Driver Allowance Included", "Tolls & Taxes Included", "Full Fuel Included"],
  },

  // 10. JOLLY GRANT AIRPORT DROP / PICKUP
  {
    id: "jolly-grant-airport-transfer",
    category: "intercity",
    title: "Dehradun ⇄ Jolly Grant Airport Transfer",
    routeText: "Dehradun City / Station ⇄ Jolly Grant Airport (Drop & Pickup)",
    description: "Guaranteed on-time airport drop and pickup with flight tracking.",
    image: "/images/airport.jpg",
    distanceTime: "Airport Drop / Pickup",
    sedanFare: 3500,
    ertigaFare: 4500,
    innovaFare: 5500,
    tempoFare: 7500,
    badge: "Airport Transfer",
    priceHighlight: "₹3,500",
    dailyRates: {
      dzire: "Swift Dzire (4+1): ₹3,500",
      ertiga: "Ertiga / XL6 (7+1): ₹4,500",
      innova: "Innova Crysta (7+1): ₹5,500",
    },
    highlights: [
      "Fixed ₹3,500 rate with zero hidden charges",
      "Doorstep pickup in Dehradun directly to Airport terminal",
      "Flight delay tracking with zero waiting charges",
      "Clean AC cab with luggage assistance",
    ],
    inclusions: ["Tolls Included", "Airport Parking Included", "Fuel Included"],
  },

  // 11. DELHI → DEHRADUN (ONE WAY)
  {
    id: "delhi-dehradun-exchangeable",
    category: "intercity",
    title: "Delhi → Dehradun (One Way)",
    routeText: "Delhi NCR → Dehradun Expressway",
    description: "Fast one way expressway cab service from Delhi NCR to Dehradun with doorstep pickup.",
    image: "/images/delhi-dehradun.jpg",
    distanceTime: "Expressway Route • 4.5 Hrs (One Way)",
    sedanFare: 4500,
    ertigaFare: 5800,
    innovaFare: 7200,
    tempoFare: 9500,
    badge: "Delhi → Dehradun One Way",
    priceHighlight: "4,500 to 7,200",
    highlights: [
      "Direct one way expressway route with doorstep pickup",
      "Clean commercial AC vehicle with professional chauffeur",
      "Delhi NCR to Dehradun dedicated one way drop",
      "24/7 round-the-clock booking available",
    ],
    inclusions: ["Expressway Tolls Included", "Driver Allowance Included", "Fuel Included"],
  },

  // 12. DELHI → HARIDWAR (ONE WAY)
  {
    id: "delhi-haridwar-exchangeable",
    category: "intercity",
    title: "Delhi → Haridwar (One Way)",
    routeText: "Delhi NCR → Haridwar Highway",
    description: "Smooth one way highway cab service from Delhi NCR to Haridwar.",
    image: "/images/delhi-haridwar.jpg",
    distanceTime: "Highway Route • 4 Hrs (One Way)",
    sedanFare: 4500,
    ertigaFare: 5800,
    innovaFare: 7200,
    tempoFare: 9500,
    badge: "Delhi → Haridwar One Way",
    priceHighlight: "4,500 to 7,200",
    highlights: [
      "Har Ki Pauri, Railway Station & hotel doorstep drop",
      "Smooth one way highway travel with zero hidden charges",
      "Delhi NCR to Haridwar dedicated one way cab",
      "Experienced drivers with verified commercial permits",
    ],
    inclusions: ["Tolls Included", "Driver Allowance Included", "Fuel Included"],
  },

  // 13. DELHI → MUSSOORIE (ONE WAY)
  {
    id: "delhi-mussoorie-exchangeable",
    category: "intercity",
    title: "Delhi → Mussoorie (One Way)",
    routeText: "Delhi NCR → Mussoorie Queen of Hills",
    description: "Direct one way mountain cab service from Delhi NCR to Mussoorie.",
    image: "/images/delhi-mussoorie.jpg",
    distanceTime: "Direct Mountain Route (One Way)",
    sedanFare: 4500,
    ertigaFare: 5800,
    innovaFare: 7200,
    tempoFare: 9500,
    badge: "Delhi → Mussoorie One Way",
    priceHighlight: "4,500 to 7,200",
    highlights: [
      "Direct hill drive with experienced mountain chauffeur",
      "Doorstep drop at Mall Road, Library Chowk, or your hotel",
      "Delhi NCR to Mussoorie dedicated one way service",
      "Safe, comfortable and scenic journey",
    ],
    inclusions: ["Hill Tolls Included", "Driver Allowance Included", "Fuel Included"],
  },
];

// ONLY DESTINATION PHOTOS (Excluding home page logo as requested)
export const GALLERY_PHOTOS = [
  { id: "chardham", src: "/images/chardham.jpg", alt: "Char Dham Yatra || चारों धाम की पावन यात्रा ||" },
  { id: "dodham", src: "/images/dodham.jpg", alt: "Do Dham Yatra (Kedarnath & Badrinath)" },
  { id: "kedarnath", src: "/images/kedarnath.jpg", alt: "Kedarnath Dham || हर हर महादेव ||" },
  { id: "badrinath", src: "/images/badrinath.jpg", alt: "Badrinath Dham || जय बद्री विशाल ||" },
  { id: "tungnath", src: "/images/tungnath.jpg", alt: "Tungnath Mahadev Temple Chopta" },
  { id: "chakrata", src: "/images/chakrata.jpg", alt: "Chakrata Tiger Falls Hill Station" },
  { id: "auli", src: "/images/auli.jpg", alt: "Auli Snow Slopes & Ropeway" },
  { id: "yamunotri", src: "/images/yamunotri.jpg", alt: "Yamunotri Dham || जय माँ यमुनोत्री ||" },
  { id: "gangotri", src: "/images/gangotri.jpg", alt: "Gangotri Dham || माँ गंगा की पावन धरा ||" },
  { id: "rishikesh", src: "/images/rishikesh.jpg", alt: "Rishikesh || हर हर गंगे ||" },
  { id: "dehradun", src: "/images/dehradun.jpg", alt: "Dehradun City of Dreams & Hills" },
  { id: "delhi-haridwar", src: "/images/delhi-haridwar.jpg", alt: "Delhi ⇄ Haridwar Cab Service" },
  { id: "delhi-dehradun", src: "/images/delhi-dehradun.jpg", alt: "Delhi ⇄ Dehradun Cab Service" },
  { id: "delhi-mussoorie", src: "/images/delhi-mussoorie.jpg", alt: "Delhi ⇄ Mussoorie Cab Service" },
  { id: "airport", src: "/images/airport.jpg", alt: "Dehradun to Jolly Grant Airport Drop" },
  { id: "haridwar", src: "/images/haridwar.jpg", alt: "Haridwar Har Ki Pauri Ganga Aarti" },
  { id: "delhi", src: "/images/delhi.jpg", alt: "Delhi India Gate Expressway" },
];

export const CUSTOMER_REVIEWS = [
  {
    id: "rev-1",
    author: "Rohit Malhotra",
    name: "Rohit Malhotra",
    location: "Delhi",
    rating: 5,
    trip: "Delhi → Dehradun One-Way Cab",
    date: "12 Mar 2026",
    text: "Booked Ramraj Cabs for Delhi to Dehradun. The Sedan was spotless, driver arrived 10 mins early, and the journey on the new expressway was super smooth. Truly premier service!",
    comment: "Booked Ramraj Cabs for Delhi to Dehradun. The Sedan was spotless, driver arrived 10 mins early, and the journey on the new expressway was super smooth. Truly premier service!",
  },
  {
    id: "rev-2",
    author: "Anjali Rawat",
    name: "Anjali Rawat",
    location: "Haridwar",
    rating: 5,
    trip: "Haridwar → Kedarnath Round Trip",
    date: "04 Mar 2026",
    text: "Our driver was local Pahadi, extremely patient on mountain roads and waited for us at Sonprayag until darshan was complete. Felt completely safe with my parents.",
    comment: "Our driver was local Pahadi, extremely patient on mountain roads and waited for us at Sonprayag until darshan was complete. Felt completely safe with my parents.",
  },
  {
    id: "rev-3",
    author: "Vikram Singhania",
    name: "Vikram Singhania",
    location: "Gurugram",
    rating: 5,
    trip: "Mussoorie Full Day Sightseeing",
    date: "26 Feb 2026",
    text: "Full day sightseeing in Mussoorie was seamless. No parking hassle, driver knew all scenic viewpoints and Kempty Falls shortcuts. Transparent pricing without hidden fees.",
    comment: "Full day sightseeing in Mussoorie was seamless. No parking hassle, driver knew all scenic viewpoints and Kempty Falls shortcuts. Transparent pricing without hidden fees.",
  },
];

export const FAQS = [
  {
    question: "How do I book a cab for Chardham or Do Dham Yatra?",
    answer: "You can book directly via WhatsApp or phone call at +91 91289 61411. We assign a hill-certified Pahadi driver and vehicle on standby.",
  },
  {
    question: "Are your drivers experienced on mountain roads?",
    answer: "Yes, all our chauffeurs are native to Uttarakhand with years of experience navigating Himalayan mountain roads safely.",
  },
  {
    question: "Are toll taxes, driver allowance, and fuel included in the fare?",
    answer: "Yes, our packages are all-inclusive. Expressway & hill toll taxes, state border entry permits, driver night allowance, and fuel are completely included.",
  },
];
