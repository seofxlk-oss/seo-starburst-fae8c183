import {
  Hotel,
  Plane,
  Sofa,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Package,
  Shirt,
  HardHat,
  UtensilsCrossed,
  Sparkles,
  Scale,
  Car,
  Banknote,
  Leaf,
  Code2,
  PartyPopper,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type IntentBucket = "informational" | "commercial" | "transactional";

export interface IndustryIntent {
  type: IntentBucket;
  label: string;
  queries: string[];
}

export interface IndustryService {
  emoji: string;
  title: string;
  body: string;
}

export interface IndustryStat {
  value: string;
  label: string;
}

export interface Industry {
  /** Used in the URL: /<slug> */
  slug: string;
  /** Used by Header dropdown + hub card */
  navLabel: string;
  emoji: string;
  icon: LucideIcon;
  /** Tailwind utility class for accent badge & numbers */
  themeBadge: string;
  themeText: string;

  // ── SEO ──
  seoTitle: string;
  seoDescription: string;
  keywords: string;

  // ── Hero ──
  eyebrow: string;
  h1: string;
  intro: string;
  hubTagline: string;

  // ── Body content ──
  topKeywords: string[];
  keywordBoxTitle: string;
  stats: IndustryStat[];
  intentTitle: string;
  intentSub: string;
  intents: IndustryIntent[];
  servicesLabel: string;
  services: IndustryService[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  hubTopKws: string[];
}

export const INDUSTRIES: Industry[] = [
  // ────────────────────────── HOTELS ──────────────────────────
  {
    slug: "hotel-seo-sri-lanka",
    navLabel: "Hotel & Hospitality SEO",
    emoji: "🏨",
    icon: Hotel,
    themeBadge: "bg-amber-100 text-amber-800 border-amber-200",
    themeText: "text-amber-600",
    seoTitle: "Hotel SEO Sri Lanka — Direct Bookings & Local SEO | SeoFX",
    seoDescription:
      "Hotel SEO services in Sri Lanka. Rank for 'hotels in Sri Lanka', win direct bookings, and stop losing 15–30% to OTAs. Free hotel SEO audit.",
    keywords:
      "hotel seo sri lanka, hotel seo company sri lanka, hospitality seo sri lanka, boutique hotel seo, resort seo sri lanka, hotel marketing sri lanka, direct booking seo, ota commission sri lanka",
    eyebrow: "🏨 Hotels & Hospitality SEO",
    h1: "Hotel SEO in Sri Lanka — Get More Direct Bookings, Stop Losing 15–30% to OTAs",
    intro:
      "When someone searches \"hotels in Sri Lanka\" or \"beach resort Mirissa\", they're ready to book. SeoFX puts your hotel at the top of those searches — driving commission-free direct bookings from guests in UK, Germany, Australia, and beyond.",
    hubTagline:
      "Rank for \"hotels in Sri Lanka\" and direct bookings that bypass OTAs. Target international guests from UK, Germany, Australia.",
    keywordBoxTitle: "What Guests Search to Find Hotels in Sri Lanka",
    topKeywords: ["hotels in Sri Lanka", "boutique hotel Colombo", "beach resort Sri Lanka"],
    hubTopKws: ["hotels in Sri Lanka", "boutique hotel Colombo", "beach resort Sri Lanka"],
    stats: [
      { value: "3×", label: "More direct bookings" },
      { value: "67%", label: "Avg. traffic increase" },
      { value: "0%", label: "OTA commission paid" },
      { value: "12", label: "Target countries" },
    ],
    intentTitle: "What Hotel Guests Are Actually Searching For",
    intentSub: "We map your content to every stage of the guest's booking journey — from dreaming to booking.",
    intents: [
      {
        type: "informational",
        label: "Informational",
        queries: [
          "best places to stay in Sri Lanka",
          "things to do near Galle Fort",
          "is Sri Lanka safe for tourists 2025",
          "Sri Lanka weather by month",
          "what to expect at a Sri Lanka resort",
        ],
      },
      {
        type: "commercial",
        label: "Commercial (Comparing)",
        queries: [
          "best hotels in Mirissa vs Unawatuna",
          "boutique vs luxury resort Sri Lanka",
          "Sri Lanka all inclusive resorts review",
          "top rated beach hotels Trincomalee",
          "Colombo hotel reviews 2025",
        ],
      },
      {
        type: "transactional",
        label: "Transactional (Ready to Book)",
        queries: [
          "book hotel in Colombo direct",
          "cheap beach resort Sri Lanka deals",
          "Sri Lanka hotel special offers",
          "last minute hotels Sri Lanka",
          "Sri Lanka holiday packages with hotel",
        ],
      },
    ],
    servicesLabel: "SEO Services for Hotels in Sri Lanka",
    services: [
      { emoji: "🗺️", title: "Local SEO & Google Maps", body: "Rank in Google Maps and local search so guests find you before OTAs. Optimise your Google Business Profile for maximum visibility." },
      { emoji: "✍️", title: "Room & Experience Content", body: "SEO-optimised pages for every room type, amenity, and experience — targeting how guests actually search." },
      { emoji: "🌍", title: "International Targeting", body: "Hreflang setup and international keyword targeting for UK, German, Australian, and Middle Eastern guests." },
      { emoji: "⭐", title: "Review & Reputation SEO", body: "Turn your positive reviews into ranking power. Build review schema to earn star ratings in Google search results." },
      { emoji: "⚡", title: "Page Speed Optimisation", body: "Fast websites rank higher and convert better. We optimise Core Web Vitals so every second counts." },
      { emoji: "🔗", title: "Travel Website Link Building", body: "Earn backlinks from high-authority travel blogs, tourism boards, and destination guides to boost domain authority." },
    ],
    ctaTitle: "Let's Fill Your Rooms Directly from Google",
    ctaBody:
      "Get a free SEO audit of your hotel website. We'll show you exactly which search terms you're missing and how much booking revenue is being left on the table.",
    ctaButton: "Free Hotel SEO Audit",
  },

  // ────────────────────────── TRAVEL ──────────────────────────
  {
    slug: "travel-seo-sri-lanka",
    navLabel: "Travel & Tourism SEO",
    emoji: "✈️",
    icon: Plane,
    themeBadge: "bg-sky-100 text-sky-800 border-sky-200",
    themeText: "text-sky-600",
    seoTitle: "Travel SEO Sri Lanka — Tour Operator & DMC SEO | SeoFX",
    seoDescription:
      "Travel SEO in Sri Lanka for tour operators, DMCs and travel agencies. Capture tourist search demand from UK, USA, Germany & Australia. Free travel SEO audit.",
    keywords:
      "travel seo sri lanka, tour operator seo sri lanka, tourism seo sri lanka, travel agency seo sri lanka, dmc seo, sri lanka tour seo, travel website seo sri lanka",
    eyebrow: "✈️ Travel & Tourism SEO",
    h1: "Travel SEO in Sri Lanka — Get Found by Tourists Planning a Sri Lanka Trip",
    intro:
      "Travellers from UK, USA, Germany, and Australia search Google hundreds of thousands of times each month to plan Sri Lanka trips. SeoFX helps tour operators, travel agencies, and DMCs capture that demand organically.",
    hubTagline:
      "Get found by tourists planning Sri Lanka trips from Google searches in USA, UK, Germany, and Australia.",
    keywordBoxTitle: "Keywords Tourists Search to Find Sri Lanka Travel",
    topKeywords: ["Sri Lanka tour packages", "best places to visit", "Sri Lanka travel guide"],
    hubTopKws: ["Sri Lanka tour packages", "best places to visit", "Sri Lanka travel guide"],
    stats: [
      { value: "500K+", label: "Monthly searches (global)" },
      { value: "4×", label: "Lead increase potential" },
      { value: "15+", label: "Target countries" },
      { value: "Top 3", label: "Our ranking target" },
    ],
    intentTitle: "What Travellers Search at Every Stage of Planning",
    intentSub: "We create content and optimise pages for every step of a tourist's decision journey.",
    intents: [
      {
        type: "informational",
        label: "Dreaming & Planning",
        queries: [
          "is Sri Lanka worth visiting",
          "Sri Lanka travel tips for beginners",
          "best time to visit Sri Lanka",
          "how many days in Sri Lanka",
          "Sri Lanka vs Maldives for holiday",
        ],
      },
      {
        type: "commercial",
        label: "Researching Options",
        queries: [
          "best tour operators Sri Lanka",
          "Sri Lanka private tour vs group tour",
          "top travel agencies in Sri Lanka",
          "luxury vs budget Sri Lanka tours",
          "recommended Sri Lanka travel company",
        ],
      },
      {
        type: "transactional",
        label: "Ready to Book",
        queries: [
          "book Sri Lanka tour package",
          "Sri Lanka 2-week tour price",
          "affordable Sri Lanka holiday deals",
          "custom Sri Lanka itinerary quote",
          "Sri Lanka family holiday booking",
        ],
      },
    ],
    servicesLabel: "SEO Services for Travel & Tour Operators",
    services: [
      { emoji: "🗺️", title: "Destination Content SEO", body: "Create authoritative guides for every destination in Sri Lanka — content that ranks and converts international visitors." },
      { emoji: "📝", title: "Tour Package Page Optimisation", body: "Every tour page optimised for the exact terms your target audience uses when searching for packages." },
      { emoji: "🌍", title: "Multi-Country Targeting", body: "Target UK, US, German, Australian, and Middle Eastern travellers with localised keyword strategies." },
      { emoji: "📸", title: "Image SEO for Travel", body: "Optimise photos to appear in Google Images — a major traffic channel for travel businesses." },
      { emoji: "⭐", title: "Review & Trust Building", body: "Schema markup for TripAdvisor reviews, tour ratings, and testimonials to show star ratings in Google." },
      { emoji: "✍️", title: "Travel Blog SEO", body: "Build a content hub that ranks for hundreds of long-tail travel keywords and drives year-round organic traffic." },
    ],
    ctaTitle: "Start Capturing Sri Lanka's Tourist Search Traffic",
    ctaBody:
      "We'll audit your travel website and show you the keyword opportunities your competitors are already ranking for.",
    ctaButton: "Free Travel SEO Audit",
  },

  // ────────────────────────── FURNITURE ──────────────────────────
  {
    slug: "furniture-seo-sri-lanka",
    navLabel: "Furniture & Home Decor SEO",
    emoji: "🪑",
    icon: Sofa,
    themeBadge: "bg-teal-100 text-teal-800 border-teal-200",
    themeText: "text-teal-600",
    seoTitle: "Furniture SEO Sri Lanka — Local & Export Furniture SEO | SeoFX",
    seoDescription:
      "Furniture SEO in Sri Lanka for shops, manufacturers and exporters. Rank locally in Colombo, Kandy, Galle and globally for wood furniture buyers. Free audit.",
    keywords:
      "furniture seo sri lanka, furniture shop seo sri lanka, furniture manufacturer seo, wood furniture export seo sri lanka, home decor seo sri lanka, local furniture seo colombo",
    eyebrow: "🪑 Furniture & Home Decor SEO",
    h1: "Furniture SEO in Sri Lanka — Bring Buyers in Colombo, Kandy & Galle Straight to Your Showroom",
    intro:
      "Sri Lankans search Google before buying furniture. SeoFX ensures your furniture shop or manufacturer appears at the top — whether they're searching locally or internationally for Sri Lankan-made wood furniture.",
    hubTagline:
      "Rank locally for buyers searching in Colombo, Kandy, Galle — and export your furniture brand globally.",
    keywordBoxTitle: "Keywords Buyers Search for Furniture in Sri Lanka",
    topKeywords: ["furniture shops Colombo", "solid wood furniture Sri Lanka", "sofa set price Sri Lanka"],
    hubTopKws: ["furniture shops Colombo", "solid wood furniture Sri Lanka", "sofa set price Sri Lanka"],
    stats: [
      { value: "8K+", label: "Monthly local searches" },
      { value: "Local #1", label: "Our ranking target" },
      { value: "B2B", label: "Export buyer targeting" },
      { value: "5×", label: "More showroom enquiries" },
    ],
    intentTitle: "How Furniture Buyers Search in Sri Lanka",
    intentSub: "From inspiration to purchase — we target buyers at every step.",
    intents: [
      {
        type: "informational",
        label: "Research Phase",
        queries: [
          "types of wood furniture in Sri Lanka",
          "sofa vs sectional for small living room",
          "best furniture brands in Sri Lanka",
          "how to choose a dining table",
          "teak vs mahogany furniture",
        ],
      },
      {
        type: "commercial",
        label: "Comparing & Shortlisting",
        queries: [
          "best furniture shops Colombo review",
          "sofa set prices comparison Sri Lanka",
          "top furniture stores Sri Lanka",
          "MDF vs solid wood furniture Sri Lanka",
          "custom vs ready-made furniture cost",
        ],
      },
      {
        type: "transactional",
        label: "Ready to Buy",
        queries: [
          "buy sofa online Sri Lanka delivery",
          "bedroom set price Sri Lanka 2025",
          "order custom furniture Colombo",
          "furniture shop near me Sri Lanka",
          "wholesale furniture Sri Lanka export",
        ],
      },
    ],
    servicesLabel: "SEO Services for Furniture Businesses",
    services: [
      { emoji: "📍", title: "Local SEO & Google Maps", body: "Rank #1 in 'furniture shops near me' and Google Maps for Colombo, Kandy, and Galle — turning searchers into showroom visitors." },
      { emoji: "🛋️", title: "Product Page Optimisation", body: "Every product and category page optimised with the exact keywords buyers use — sizes, materials, price ranges." },
      { emoji: "📸", title: "Visual & Image SEO", body: "Furniture is visual. We optimise every image so your products appear in Google Images and Shopping results." },
      { emoji: "🌍", title: "Export & B2B SEO", body: "Target international wholesale buyers searching for Sri Lankan wood furniture manufacturers and exporters." },
      { emoji: "✍️", title: "Buying Guide Content", body: "Create authoritative content that ranks for research keywords and funnels buyers toward your products." },
      { emoji: "🔗", title: "Home & Decor Link Building", body: "Earn backlinks from interior design blogs, home decor publications, and trade directories." },
    ],
    ctaTitle: "Turn Google Searches into Furniture Sales",
    ctaBody:
      "Free SEO audit for furniture businesses. Discover which local keywords your competitors rank for — and how to outrank them.",
    ctaButton: "Free Furniture SEO Audit",
  },

  // ────────────────────────── EDUCATION ──────────────────────────
  {
    slug: "education-seo-sri-lanka",
    navLabel: "Education SEO",
    emoji: "🎓",
    icon: GraduationCap,
    themeBadge: "bg-violet-100 text-violet-800 border-violet-200",
    themeText: "text-violet-600",
    seoTitle: "Education SEO Sri Lanka — Schools, Institutes & Courses | SeoFX",
    seoDescription:
      "Education SEO in Sri Lanka for schools, institutes, universities and online courses. Rank for course searches and grow enrolments. Free SEO audit.",
    keywords:
      "education seo sri lanka, school seo sri lanka, university seo sri lanka, institute seo sri lanka, online course seo sri lanka, tuition class seo colombo",
    eyebrow: "🎓 Education SEO",
    h1: "Education SEO in Sri Lanka — Fill Your Classes With Students Who Found You on Google",
    intro:
      "Parents and students across Sri Lanka search Google to find schools, institutes, universities, and online courses. SeoFX helps educational institutions rank for the exact searches that lead to enrolments.",
    hubTagline:
      "Attract students searching for courses, institutes, and degrees in Sri Lanka. Dominate course-related searches.",
    keywordBoxTitle: "Keywords Students & Parents Search in Sri Lanka",
    topKeywords: ["courses in Sri Lanka", "best schools Colombo", "online courses Sri Lanka"],
    hubTopKws: ["courses in Sri Lanka", "best schools Colombo", "online courses Sri Lanka"],
    stats: [
      { value: "25K+", label: "Monthly education searches" },
      { value: "3×", label: "More enquiries" },
      { value: "E-E-A-T", label: "Authority strategy" },
      { value: "Zero", label: "Cost per organic lead" },
    ],
    intentTitle: "How Students & Parents Search for Educational Institutions",
    intentSub: "From awareness to enrolment — we optimise for every stage.",
    intents: [
      {
        type: "informational",
        label: "Awareness & Research",
        queries: [
          "best subjects to study in Sri Lanka",
          "career options after A/L Sri Lanka",
          "top universities in Sri Lanka",
          "is online education recognised Sri Lanka",
          "how to choose a school in Colombo",
        ],
      },
      {
        type: "commercial",
        label: "Evaluating Options",
        queries: [
          "best IT institutes Colombo review",
          "private vs government university Sri Lanka",
          "NSBM vs SLIIT comparison",
          "top tuition centres Colombo",
          "affordable MBA Sri Lanka options",
        ],
      },
      {
        type: "transactional",
        label: "Ready to Enrol",
        queries: [
          "apply online IT course Sri Lanka",
          "enrol MBA programme Colombo 2025",
          "school admission forms Colombo",
          "register A/L tuition class",
          "online course with certificate Sri Lanka",
        ],
      },
    ],
    servicesLabel: "SEO Services for Educational Institutions",
    services: [
      { emoji: "🏫", title: "Institution & Course Page SEO", body: "Every course and programme page optimised so students find you when searching for specific qualifications." },
      { emoji: "🎯", title: "Local SEO for Institutes", body: "Dominate local searches and Google Maps so nearby students find your institute before competitors." },
      { emoji: "🔒", title: "E-E-A-T Authority Building", body: "Google rewards education sites that demonstrate Expertise, Experience, Authority, and Trust. We build all four." },
      { emoji: "✍️", title: "Educational Content Marketing", body: "Blog posts, career guides, and FAQ content that ranks for research keywords and builds institutional authority." },
      { emoji: "🌍", title: "International Student Targeting", body: "Attract students from Maldives, Bangladesh, and other countries searching for education in Sri Lanka." },
      { emoji: "📊", title: "Enrolment Conversion Optimisation", body: "Beyond rankings — we optimise your pages to turn visitors into enquiries and enrolments." },
    ],
    ctaTitle: "Fill Every Seat With Organic Search Traffic",
    ctaBody:
      "Get a free SEO audit of your educational institution's website. We'll identify which courses and programmes should be ranking — but aren't.",
    ctaButton: "Free Education SEO Audit",
  },

  // ────────────────────────── HEALTHCARE ──────────────────────────
  {
    slug: "healthcare-seo-sri-lanka",
    navLabel: "Healthcare & Wellness SEO",
    emoji: "🏥",
    icon: HeartPulse,
    themeBadge: "bg-rose-100 text-rose-800 border-rose-200",
    themeText: "text-rose-600",
    seoTitle: "Healthcare SEO Sri Lanka — Hospitals, Clinics & Doctors | SeoFX",
    seoDescription:
      "Healthcare SEO in Sri Lanka for hospitals, clinics, doctors, ayurveda & wellness centres. YMYL-grade strategy that earns trust and books appointments. Free audit.",
    keywords:
      "healthcare seo sri lanka, hospital seo sri lanka, clinic seo sri lanka, doctor seo sri lanka, ayurveda seo sri lanka, medical tourism seo sri lanka, wellness seo sri lanka",
    eyebrow: "🏥 Healthcare & Wellness SEO",
    h1: "Healthcare SEO in Sri Lanka — Help More Patients Find Your Practice on Google",
    intro:
      "Health searches are among the highest-intent on Google. SeoFX helps hospitals, clinics, doctors, ayurveda centres, and wellness brands in Sri Lanka rank for the searches that bring in real patients and clients.",
    hubTagline:
      "Rank for high-intent health searches. Build trust and bring in patients, clients, and wellness seekers.",
    keywordBoxTitle: "Keywords Patients Search for Health Services in Sri Lanka",
    topKeywords: ["doctors in Colombo", "ayurveda Sri Lanka", "private hospital Sri Lanka"],
    hubTopKws: ["doctors in Colombo", "ayurveda Sri Lanka", "private hospital Sri Lanka"],
    stats: [
      { value: "YMYL", label: "Specialist SEO strategy" },
      { value: "40K+", label: "Monthly health searches" },
      { value: "Trust", label: "Authority-first approach" },
      { value: "Local #1", label: "Google Maps target" },
    ],
    intentTitle: "How Patients Search for Healthcare in Sri Lanka",
    intentSub: "Health SEO is about trust and precision. We target every stage of a patient's search.",
    intents: [
      {
        type: "informational",
        label: "Symptom & Information Search",
        queries: [
          "symptoms of dengue fever Sri Lanka",
          "is ayurveda effective for back pain",
          "best food for diabetes in Sri Lanka",
          "mental health stigma in Sri Lanka",
          "cost of dental implants Sri Lanka",
        ],
      },
      {
        type: "commercial",
        label: "Finding the Right Provider",
        queries: [
          "best private hospitals in Colombo",
          "top rated dentists Colombo review",
          "experienced cardiologist Sri Lanka",
          "ayurveda doctor vs hospital Sri Lanka",
          "trusted skin specialist Colombo",
        ],
      },
      {
        type: "transactional",
        label: "Book an Appointment",
        queries: [
          "book appointment doctor Colombo",
          "online consultation Sri Lanka",
          "dental clinic appointment Colombo",
          "ayurveda retreat booking Sri Lanka",
          "physiotherapy clinic near me",
        ],
      },
    ],
    servicesLabel: "SEO Services for Health & Wellness Businesses",
    services: [
      { emoji: "🔒", title: "YMYL & E-E-A-T Strategy", body: "Health pages are 'Your Money, Your Life' content. Google applies strict quality standards — we ensure you meet and exceed them." },
      { emoji: "📍", title: "Local Medical SEO", body: "Rank in Google Maps when patients search 'doctor near me' or 'clinic in [city]'. Essential for walk-in and appointment-based practices." },
      { emoji: "✍️", title: "Patient Education Content", body: "Articles, condition guides, and treatment pages written to medical quality standards that rank and build trust." },
      { emoji: "🌍", title: "Medical Tourism SEO", body: "Target international patients from UK, Middle East, and Maldives searching for affordable treatment in Sri Lanka." },
      { emoji: "⭐", title: "Review Schema & Trust Signals", body: "Display star ratings in Google results with structured data. Build patient review strategies that compound authority." },
      { emoji: "📱", title: "Appointment Booking Optimisation", body: "Convert search traffic into booked appointments with optimised landing pages and local SEO funnels." },
    ],
    ctaTitle: "Help More Patients Find Your Practice on Google",
    ctaBody:
      "Free SEO audit for health and wellness businesses in Sri Lanka. We'll show you where your practice is missing in local search.",
    ctaButton: "Free Healthcare SEO Audit",
  },

  // ────────────────────────── ECOMMERCE ──────────────────────────
  {
    slug: "ecommerce-seo-sri-lanka",
    navLabel: "Ecommerce SEO",
    emoji: "🛒",
    icon: ShoppingBag,
    themeBadge: "bg-green-100 text-green-800 border-green-200",
    themeText: "text-green-700",
    seoTitle: "Ecommerce SEO Sri Lanka — Free Organic Buyers Daily | SeoFX",
    seoDescription:
      "Ecommerce SEO in Sri Lanka for online stores. Stop paying for every click — rank product & category pages on Google. Free ecommerce SEO audit today.",
    keywords:
      "ecommerce seo sri lanka, online store seo sri lanka, shopify seo sri lanka, woocommerce seo sri lanka, product page seo sri lanka, ecommerce marketing sri lanka",
    eyebrow: "🛒 Ecommerce SEO",
    h1: "Ecommerce SEO in Sri Lanka — Let Google Send Free Buyers to Your Store, Every Day",
    intro:
      "Paid ads stop the moment you stop paying. SEO builds compounding organic traffic that grows month after month. SeoFX specialises in ecommerce SEO for Sri Lankan online stores targeting local and international shoppers.",
    hubTagline:
      "Drive organic traffic to your product pages, categories, and brand — without paying for every click forever.",
    keywordBoxTitle: "Keywords Online Shoppers Search in Sri Lanka",
    topKeywords: ["buy online Sri Lanka", "best price Sri Lanka", "free delivery Sri Lanka"],
    hubTopKws: ["buy online Sri Lanka", "best price Sri Lanka", "free delivery Sri Lanka"],
    stats: [
      { value: "5×", label: "More organic sales" },
      { value: "0", label: "Cost per organic click" },
      { value: "100s", label: "Product pages optimised" },
      { value: "Long-term", label: "Compounding growth" },
    ],
    intentTitle: "How Online Shoppers Search Before Buying in Sri Lanka",
    intentSub: "We optimise for every stage of the shopping funnel — from discovery to add-to-cart.",
    intents: [
      {
        type: "informational",
        label: "Discovery & Inspiration",
        queries: [
          "best [product type] in Sri Lanka",
          "popular online stores Sri Lanka",
          "what to buy as a gift Sri Lanka",
          "trending products Sri Lanka 2025",
          "Sri Lanka handmade products online",
        ],
      },
      {
        type: "commercial",
        label: "Comparing Before Buying",
        queries: [
          "[brand A] vs [brand B] Sri Lanka",
          "best value [product] Sri Lanka",
          "[product] reviews Sri Lanka",
          "is [store] reliable Sri Lanka",
          "[product] worth buying Sri Lanka",
        ],
      },
      {
        type: "transactional",
        label: "Ready to Purchase",
        queries: [
          "buy [product] online Sri Lanka cheap",
          "[product] with free delivery Colombo",
          "order [product] cash on delivery",
          "[product] sale price Sri Lanka",
          "[brand] official store Sri Lanka",
        ],
      },
    ],
    servicesLabel: "SEO Services for Online Stores in Sri Lanka",
    services: [
      { emoji: "📦", title: "Product Page SEO", body: "Every product optimised with the exact terms buyers use — including price, size, colour, and use-case modifiers that convert." },
      { emoji: "🗂️", title: "Category Page Optimisation", body: "Category pages are your highest-value SEO assets. We turn them into ranking machines that capture high-volume searches." },
      { emoji: "🔧", title: "Technical Ecommerce SEO", body: "Fix crawling issues, duplicate content, pagination problems, and site structure issues that hold ecommerce stores back." },
      { emoji: "✍️", title: "Buying Guide Content", body: "Rank for 'best [product] in Sri Lanka' style searches with authoritative buying guides that funnel traffic to your store." },
      { emoji: "⭐", title: "Product Review Schema", body: "Display star ratings in Google results with product schema markup — proven to increase click-through rates by 30%+." },
      { emoji: "🌍", title: "International Ecommerce SEO", body: "Sell to Sri Lankan diaspora in UK, Australia, UAE and beyond with targeted international SEO strategies." },
    ],
    ctaTitle: "Let Google Do Your Marketing — For Free",
    ctaBody:
      "Free ecommerce SEO audit. We'll identify the product and category pages that should be ranking — and build a plan to get them there.",
    ctaButton: "Free Ecommerce SEO Audit",
  },

  // ────────────────────────── EXPORTS ──────────────────────────
  {
    slug: "export-business-seo-sri-lanka",
    navLabel: "Export Business SEO",
    emoji: "📦",
    icon: Package,
    themeBadge: "bg-amber-100 text-amber-900 border-amber-300",
    themeText: "text-amber-700",
    seoTitle: "Export SEO Sri Lanka — B2B Buyers for Tea, Spices & Gems | SeoFX",
    seoDescription:
      "Export business SEO in Sri Lanka. Reach international B2B buyers searching for Ceylon tea, spices, coconut, gems, textiles & more. Free export SEO audit.",
    keywords:
      "export seo sri lanka, b2b seo sri lanka, ceylon tea export seo, spice exporter seo sri lanka, coconut export seo, gem exporter seo, sri lanka manufacturer seo, international seo sri lanka",
    eyebrow: "📦 Export Business SEO",
    h1: "Export SEO in Sri Lanka — Be the First Sri Lankan Supplier International B2B Buyers Find on Google",
    intro:
      "Buyers in UK, UAE, USA, Australia, and Europe search Google to source Sri Lankan tea, spices, coconut products, gems, textiles, and more. SeoFX positions your export business at the top of those searches globally.",
    hubTagline:
      "Reach international B2B buyers searching for Sri Lankan tea, spices, gems, textiles, and coconut products.",
    keywordBoxTitle: "Keywords International Buyers Search to Find Sri Lankan Exporters",
    topKeywords: ["Ceylon tea exporters", "Sri Lanka suppliers", "bulk coconut products"],
    hubTopKws: ["Ceylon tea exporters", "Sri Lanka suppliers", "bulk coconut products"],
    stats: [
      { value: "Global", label: "B2B buyer targeting" },
      { value: "15+", label: "Target countries" },
      { value: "High $", label: "Value per lead" },
      { value: "English", label: "International content" },
    ],
    intentTitle: "How International Buyers Search for Sri Lankan Products",
    intentSub: "B2B export buyers have specific, high-value search patterns. We capture every stage.",
    intents: [
      {
        type: "informational",
        label: "Supplier Research",
        queries: [
          "types of tea exported from Sri Lanka",
          "Sri Lanka coconut products list",
          "quality certification Sri Lanka exporters",
          "Ceylon cinnamon vs Cassia difference",
          "how to import from Sri Lanka",
        ],
      },
      {
        type: "commercial",
        label: "Evaluating Suppliers",
        queries: [
          "top certified tea exporters Ceylon",
          "ISO certified spice suppliers Sri Lanka",
          "reliable coconut oil supplier review",
          "verified gem dealers Sri Lanka",
          "ethical garment manufacturers Lanka",
        ],
      },
      {
        type: "transactional",
        label: "Making Contact",
        queries: [
          "request quote Sri Lanka tea exporter",
          "bulk order cinnamon Sri Lanka",
          "wholesale pricing coconut products",
          "minimum order quantity Sri Lanka gems",
          "contact Ceylon tea manufacturer",
        ],
      },
    ],
    servicesLabel: "SEO Services for Sri Lankan Export Businesses",
    services: [
      { emoji: "🌍", title: "International SEO Strategy", body: "Target buyers in UK, USA, Germany, UAE, Australia, and China with country-specific keyword strategies and landing pages." },
      { emoji: "🏭", title: "Product & Category Pages", body: "Optimised pages for every export product with the technical specifications and certifications B2B buyers search for." },
      { emoji: "🔗", title: "Trade Directory Link Building", body: "Build authority with listings and backlinks from international trade directories, B2B platforms, and industry publications." },
      { emoji: "✍️", title: "Export Content Marketing", body: "Educational content about Sri Lankan products that ranks for research keywords and builds supplier authority internationally." },
      { emoji: "📊", title: "B2B Lead Generation Pages", body: "Landing pages optimised to convert international search traffic into quote requests and supplier enquiries." },
      { emoji: "🔒", title: "Trust & Certification SEO", body: "Highlight ISO, organic, fair trade, and other certifications in structured data to rank for quality-specific searches." },
    ],
    ctaTitle: "Get Found by International Buyers Searching for Sri Lankan Products",
    ctaBody:
      "Free SEO audit for Sri Lankan exporters. We'll show you which global keywords your competitors rank for and build a strategy to dominate them.",
    ctaButton: "Free Export SEO Audit",
  },

  // ────────────────────────── CLOTHING ──────────────────────────
  {
    slug: "clothing-fashion-seo-sri-lanka",
    navLabel: "Clothing & Fashion SEO",
    emoji: "👗",
    icon: Shirt,
    themeBadge: "bg-pink-100 text-pink-800 border-pink-200",
    themeText: "text-pink-600",
    seoTitle: "Fashion SEO Sri Lanka — Clothing Brand & Garment SEO | SeoFX",
    seoDescription:
      "Clothing & fashion SEO in Sri Lanka for boutiques, online brands and garment manufacturers. Local + global SEO that drives shoppers and wholesale buyers.",
    keywords:
      "clothing seo sri lanka, fashion seo sri lanka, garment manufacturer seo sri lanka, fashion brand seo, boutique seo colombo, online clothing seo sri lanka, apparel seo sri lanka",
    eyebrow: "👗 Clothing & Fashion SEO",
    h1: "Clothing & Fashion SEO in Sri Lanka — Build a Brand Google Sends Customers To",
    intro:
      "Whether you're a local boutique in Colombo, a garment manufacturer seeking international buyers, or a fashion brand launching online — SeoFX builds the search visibility your clothing business needs to grow.",
    hubTagline:
      "Build your Sri Lankan fashion brand online. Rank for local buyers and attract international wholesale buyers.",
    keywordBoxTitle: "Keywords Fashion Buyers Search in Sri Lanka & Globally",
    topKeywords: ["clothing brands Sri Lanka", "fashion designers Colombo", "garment manufacturers Sri Lanka"],
    hubTopKws: ["clothing brands Sri Lanka", "fashion designers Colombo", "garment manufacturers Sri Lanka"],
    stats: [
      { value: "Local", label: "Boutique & retail SEO" },
      { value: "Global", label: "Manufacturer B2B SEO" },
      { value: "Visual", label: "Image & Pinterest SEO" },
      { value: "Brand", label: "Authority building" },
    ],
    intentTitle: "How Fashion Shoppers & Buyers Search in Sri Lanka",
    intentSub: "From local shoppers to international wholesale buyers — we cover every search type.",
    intents: [
      {
        type: "informational",
        label: "Inspiration & Discovery",
        queries: [
          "best clothing brands in Sri Lanka",
          "Sri Lankan fashion trends 2025",
          "how to wear a saree Sri Lanka style",
          "Sri Lankan designers to know",
          "batik fabric designs Sri Lanka",
        ],
      },
      {
        type: "commercial",
        label: "Shopping & Comparing",
        queries: [
          "best online clothing stores Sri Lanka",
          "cheap vs premium saree Colombo",
          "reliable fashion brand reviews Lanka",
          "ethical garment brands Sri Lanka",
          "bridal wear Colombo options",
        ],
      },
      {
        type: "transactional",
        label: "Ready to Buy / Order",
        queries: [
          "order dress online Sri Lanka delivery",
          "bulk clothing order Sri Lanka wholesale",
          "custom garment manufacturer quote",
          "wedding saree price Colombo boutique",
          "private label clothing Lanka supplier",
        ],
      },
    ],
    servicesLabel: "SEO Services for Clothing & Fashion Businesses",
    services: [
      { emoji: "👗", title: "Fashion Ecommerce SEO", body: "Optimise every product, collection, and category page so shoppers find your clothing when they search to buy online." },
      { emoji: "📸", title: "Visual & Image SEO", body: "Fashion is visual. We optimise images for Google Images, Pinterest, and Shopping — massive untapped traffic channels for fashion brands." },
      { emoji: "📍", title: "Local Boutique SEO", body: "Rank in Google Maps and local search so Colombo shoppers find your boutique when searching 'clothing store near me'." },
      { emoji: "🏭", title: "Garment Manufacturer B2B SEO", body: "Target international brands sourcing ethical, quality garment manufacturers in Sri Lanka with precise B2B keyword strategies." },
      { emoji: "✍️", title: "Fashion Content & Style Guides", body: "Create editorial content that ranks for style and trend searches — driving organic traffic that builds brand authority." },
      { emoji: "🌍", title: "Sri Lankan Diaspora Targeting", body: "Reach Sri Lankan fashion buyers in UK, Canada, UAE, and Australia with targeted international SEO campaigns." },
    ],
    ctaTitle: "Make Your Fashion Brand Visible Where Shoppers Search",
    ctaBody:
      "Free SEO audit for clothing and fashion businesses in Sri Lanka. Discover which style searches you should be ranking for.",
    ctaButton: "Free Fashion SEO Audit",
  },
  // ────────────────────────── CONSTRUCTION & REAL ESTATE SEO ──────────────────────────
  {
    slug: "construction-real-estate-seo-sri-lanka",
    navLabel: "Construction & Real Estate SEO",
    emoji: "🏗️",
    icon: HardHat,
    themeBadge: "bg-amber-100 text-amber-800 border-amber-200",
    themeText: "text-amber-600",
    seoTitle: "Construction & Real Estate SEO Sri Lanka | SeoFX",
    seoDescription: "SEO for property developers, real estate agents and construction companies in Sri Lanka. Rank for high-intent buyer searches. Free SEO audit.",
    keywords: "real estate seo sri lanka, construction seo sri lanka, property developer seo, real estate agent seo colombo, building contractor seo sri lanka",
    eyebrow: "🏗️ Construction & Real Estate SEO",
    h1: "Buyers Search Google Before Viewing a Single Property. Make Sure They Find You First.",
    intro: "Whether you're selling apartments in Colombo, building custom homes, or offering commercial real estate — your buyers start on Google. SeoFX positions your business at the top of those high-value searches before your competitors even know what hit them.",
    hubTagline: "Capture buyers searching for apartments, houses, land and contractors in Sri Lanka and overseas.",
    keywordBoxTitle: "What Buyers Search to Find Property & Construction in Sri Lanka",
    topKeywords: ["apartments for sale Colombo", "house for sale Sri Lanka", "land for sale Sri Lanka"],
    hubTopKws: ["apartments for sale Colombo", "house for sale Sri Lanka", "land for sale Sri Lanka"],
    stats: [{ value: "50K+", label: "Monthly property searches" }, { value: "High $", label: "Value per lead" }, { value: "Local", label: "+ International buyers" }, { value: "Zero", label: "Cost per organic lead" }],
    intentTitle: "How Property Buyers & Construction Clients Search in Sri Lanka",
    intentSub: "From casual browsing to ready-to-sign — we capture every stage of the buyer journey.",
    intents: [
      { type: "informational", label: "Research Phase", queries: ["best areas to buy property in Colombo", "pros and cons of buying an apartment Sri Lanka", "how to buy land in Sri Lanka as a foreigner", "property prices in Colombo 2025", "how to choose a building contractor"] },
      { type: "commercial", label: "Comparing Options", queries: ["top real estate companies Sri Lanka", "best construction companies Colombo review", "apartment vs house investment Sri Lanka", "reliable property developers Colombo", "best architects in Sri Lanka"] },
      { type: "transactional", label: "Ready to Act", queries: ["2 bedroom apartment for sale Colombo 7", "quote from building contractor Sri Lanka", "contact real estate agent Colombo", "buy apartment under 20 million Sri Lanka", "schedule property viewing Colombo"] }
    ],
    servicesLabel: "SEO Services for Construction & Real Estate",
    services: [
      { emoji: "🏠", title: "Property Listing SEO", body: "Optimise every property listing with location, price range, bedroom count, and lifestyle keywords that match how buyers search." },
      { emoji: "📍", title: "Hyperlocal SEO", body: "Target suburb and neighbourhood searches like \\\"apartments in Rajagiriya\\\" or \\\"houses for sale Nugegoda\\\" — where buyers are most specific." },
      { emoji: "🌍", title: "Overseas Buyer Targeting", body: "Reach Sri Lankan diaspora in UK, Australia, and UAE plus foreign investors searching for Sri Lanka property online." },
      { emoji: "✍️", title: "Neighbourhood & Project Content", body: "Area guides, project showcases, and buying guides that rank for research searches and build developer authority." },
      { emoji: "🔗", title: "Property Portal Link Building", body: "Earn backlinks from property portals, architecture publications, and investment sites to boost domain authority." },
      { emoji: "⭐", title: "Review & Trust SEO", body: "Schema markup for project reviews and contractor ratings so your business stands out with stars in Google results." }
    ],
    ctaTitle: "Win the Property Search Before Competitors Even Respond",
    ctaBody: "Free SEO audit for construction and real estate businesses. We'll show you every high-value keyword you're missing right now.",
    ctaButton: "Free Real Estate SEO Audit",
  },
  // ────────────────────────── RESTAURANT & FOOD DELIVERY SEO ──────────────────────────
  {
    slug: "restaurant-seo-sri-lanka",
    navLabel: "Restaurant & Food Delivery SEO",
    emoji: "🍽️",
    icon: UtensilsCrossed,
    themeBadge: "bg-red-100 text-red-800 border-red-200",
    themeText: "text-red-600",
    seoTitle: "Restaurant SEO Sri Lanka — Local & Food Delivery SEO | SeoFX",
    seoDescription: "Restaurant SEO Sri Lanka. Rank #1 in 'restaurants near me', Google Maps and food delivery searches. Free restaurant SEO audit from SeoFX.",
    keywords: "restaurant seo sri lanka, food delivery seo sri lanka, cafe seo colombo, google maps restaurant seo, local restaurant seo sri lanka",
    eyebrow: "🍽️ Restaurant & Food SEO",
    h1: "Hungry People in Sri Lanka Search Google Before They Decide Where to Eat. Be the Answer.",
    intro: "Every day, thousands of people in Colombo, Kandy, and Galle search Google to find restaurants, cafes, and food delivery. SeoFX makes sure your restaurant tops those searches — filling tables and generating delivery orders without paying per click.",
    hubTagline: "Win 'restaurants near me' and food delivery searches across Colombo, Kandy and Galle.",
    keywordBoxTitle: "What Hungry People Search to Find Food in Sri Lanka",
    topKeywords: ["best restaurants Colombo", "restaurants near me Sri Lanka", "food delivery Colombo"],
    hubTopKws: ["best restaurants Colombo", "restaurants near me Sri Lanka", "food delivery Colombo"],
    stats: [{ value: "30K+", label: "Monthly food searches" }, { value: "Daily", label: "Search intent" }, { value: "Maps #1", label: "Local ranking target" }, { value: "Repeat", label: "Customer capture" }],
    intentTitle: "How Diners Search for Restaurants in Sri Lanka",
    intentSub: "From casual browsing to \\\"I need food now\\\" — we target every moment of hunger.",
    intents: [
      { type: "informational", label: "Exploring & Discovering", queries: ["best places to eat in Colombo", "top rated restaurants Galle", "must try food in Sri Lanka", "unique dining experiences Colombo", "what food is Sri Lanka famous for"] },
      { type: "commercial", label: "Deciding Where to Go", queries: ["best seafood restaurant review Colombo", "romantic restaurant for couples Colombo", "family-friendly restaurant Kandy", "best value buffet Sri Lanka", "vegetarian-friendly restaurants Colombo"] },
      { type: "transactional", label: "Ready to Order or Visit", queries: ["order food online Colombo now", "make reservation restaurant Colombo", "pizza delivery near me Colombo", "restaurant open now Colombo 3", "table booking fine dining Colombo"] }
    ],
    servicesLabel: "SEO Services for Restaurants & Food Businesses",
    services: [
      { emoji: "📍", title: "Google Maps & Local SEO", body: "Rank #1 in Google Maps when someone searches \\\"restaurants near me\\\". The single most important SEO action for any restaurant." },
      { emoji: "🍜", title: "Menu & Cuisine Page SEO", body: "Optimise pages for your cuisine type — \\\"best biriyani Colombo\\\", \\\"seafood restaurant Galle\\\" — capture niche food searches." },
      { emoji: "⭐", title: "Review Schema & Star Ratings", body: "Implement structured data so your restaurant shows star ratings directly in Google results — dramatically increasing clicks." },
      { emoji: "📸", title: "Food Photography SEO", body: "Optimise food images for Google Images and Google Maps photos — visuals that convert searchers into diners." },
      { emoji: "🚀", title: "Delivery Platform SEO", body: "Optimise your presence on PickMe Food and other delivery platforms alongside Google to dominate all food search surfaces." },
      { emoji: "✍️", title: "Food Blog & Event Content", body: "Content about special menus, events, and food stories that ranks for discovery searches and builds repeat visits." }
    ],
    ctaTitle: "Fill Your Restaurant from Google Every Night",
    ctaBody: "Free SEO audit for restaurants and food businesses in Sri Lanka. We'll show you exactly where hungry customers are searching and not finding you.",
    ctaButton: "Free Restaurant SEO Audit",
  },
  // ────────────────────────── BEAUTY & SALON SEO ──────────────────────────
  {
    slug: "beauty-salon-seo-sri-lanka",
    navLabel: "Beauty & Salon SEO",
    emoji: "💅",
    icon: Sparkles,
    themeBadge: "bg-pink-100 text-pink-800 border-pink-200",
    themeText: "text-pink-600",
    seoTitle: "Beauty & Salon SEO Sri Lanka — Local Salon SEO | SeoFX",
    seoDescription: "SEO for salons, spas, bridal studios and beauty businesses in Sri Lanka. Rank for 'salon near me' and bridal searches. Free SEO audit.",
    keywords: "salon seo sri lanka, beauty seo sri lanka, spa seo colombo, bridal salon seo, hair salon seo sri lanka, beauty parlour seo",
    eyebrow: "💆 Beauty & Salon SEO",
    h1: "When Someone Searches \\\"Salon Near Me\\\" in Colombo, Your Business Should Be First.",
    intro: "Beauty is one of the strongest local SEO industries in Sri Lanka. Clients book based on Google searches, reviews, and photos. SeoFX makes sure your salon, spa, or beauty business is the first — and most trusted — result they see.",
    hubTagline: "Be the salon, spa or bridal studio that ranks first for 'near me' searches in Sri Lanka.",
    keywordBoxTitle: "What Clients Search to Find Beauty Services in Sri Lanka",
    topKeywords: ["salon near me Sri Lanka", "hair salon Colombo", "bridal makeup Sri Lanka"],
    hubTopKws: ["salon near me Sri Lanka", "hair salon Colombo", "bridal makeup Sri Lanka"],
    stats: [{ value: "20K+", label: "Monthly beauty searches" }, { value: "Repeat", label: "High repeat customer rate" }, { value: "Maps", label: "Primary discovery channel" }, { value: "Photos", label: "Visual SEO critical" }],
    intentTitle: "How Beauty Clients Search in Sri Lanka",
    intentSub: "From discovering new salons to booking an appointment — we capture every search moment.",
    intents: [
      { type: "informational", label: "Discovery & Inspiration", queries: ["best hair salons in Colombo", "what is balayage hair Sri Lanka", "bridal makeup trends Sri Lanka 2025", "ayurvedic spa treatments explained", "how to choose a makeup artist Sri Lanka"] },
      { type: "commercial", label: "Choosing a Salon", queries: ["top rated hair salon Colombo review", "best bridal makeup artist Sri Lanka", "luxury spa vs budget spa Colombo", "nail salon price list Colombo", "experienced makeup artist review Lanka"] },
      { type: "transactional", label: "Booking an Appointment", queries: ["book hair appointment Colombo", "bridal makeup booking Sri Lanka", "spa booking Colombo online", "nail appointment near me Colombo", "keratin treatment price Colombo booking"] }
    ],
    servicesLabel: "SEO Services for Beauty & Salon Businesses",
    services: [
      { emoji: "📍", title: "Local & Maps SEO", body: "Rank #1 in Google Maps for \\\"salon near me\\\" — the most common way beauty clients find new services in Sri Lanka." },
      { emoji: "💅", title: "Service Page Optimisation", body: "Individual pages for every service — hair, nails, skin, makeup, spa — each targeting the exact terms clients search." },
      { emoji: "📸", title: "Before & After Image SEO", body: "Optimise before-and-after photos to appear in Google Images — beauty's most powerful organic traffic driver." },
      { emoji: "⭐", title: "Review Generation Strategy", body: "Systematic approach to earning 5-star Google reviews — the #1 ranking factor for local beauty businesses." },
      { emoji: "💍", title: "Bridal Package SEO", body: "Dedicated bridal SEO targeting wedding-related beauty searches — highest value bookings in the beauty calendar." },
      { emoji: "✍️", title: "Beauty Blog & Tips Content", body: "Hair care, skin care, and trend articles that rank for informational searches and build your salon's digital authority." }
    ],
    ctaTitle: "Fill Your Appointment Book with Organic Search Traffic",
    ctaBody: "Free SEO audit for beauty and salon businesses in Sri Lanka. Discover why your competitors show up in \\\"salon near me\\\" searches — and you don't.",
    ctaButton: "Free Beauty SEO Audit",
  },
  // ────────────────────────── LEGAL & LAW FIRM SEO ──────────────────────────
  {
    slug: "legal-law-firm-seo-sri-lanka",
    navLabel: "Legal & Law Firm SEO",
    emoji: "⚖️",
    icon: Scale,
    themeBadge: "bg-slate-100 text-slate-800 border-slate-200",
    themeText: "text-slate-600",
    seoTitle: "Legal & Law Firm SEO Sri Lanka | YMYL SEO | SeoFX",
    seoDescription: "Law firm SEO in Sri Lanka. YMYL-grade legal SEO that ranks attorneys for high-value practice area searches. Free SEO audit for law firms.",
    keywords: "law firm seo sri lanka, lawyer seo colombo, legal seo sri lanka, attorney seo, ymyl seo sri lanka, legal services seo",
    eyebrow: "⚖️ Legal & Law Firm SEO",
    h1: "People Search Google When They Need a Lawyer. The Firm That Ranks First Gets the Case.",
    intro: "Legal searches have some of the highest client values of any industry. Yet almost no law firm in Sri Lanka does SEO properly. SeoFX gives your firm an enormous competitive advantage by ranking for the searches that bring in high-value clients.",
    hubTagline: "Rank for 'lawyers in Colombo' and high-value practice-area searches with YMYL-grade SEO.",
    keywordBoxTitle: "What People Search When They Need Legal Help in Sri Lanka",
    topKeywords: ["lawyers in Colombo", "divorce lawyer Sri Lanka", "property lawyer Colombo"],
    hubTopKws: ["lawyers in Colombo", "divorce lawyer Sri Lanka", "property lawyer Colombo"],
    stats: [{ value: "High $", label: "Value per client" }, { value: "Low", label: "SEO competition" }, { value: "Trust", label: "Authority-first strategy" }, { value: "YMYL", label: "Specialist approach" }],
    intentTitle: "How People Search for Legal Help in Sri Lanka",
    intentSub: "Legal searches are urgent and high-value. We capture clients at every stage of their search.",
    intents: [
      { type: "informational", label: "Understanding Their Situation", queries: ["how does divorce work in Sri Lanka", "property buying process Sri Lanka legal", "employee rights Sri Lanka labour law", "how to register a company Sri Lanka", "what is a notary public in Sri Lanka"] },
      { type: "commercial", label: "Finding the Right Lawyer", queries: ["best divorce lawyers Colombo review", "experienced property lawyer Sri Lanka", "top law firms in Sri Lanka ranking", "affordable lawyer Colombo", "specialist immigration attorney Lanka"] },
      { type: "transactional", label: "Making Contact", queries: ["contact lawyer Colombo consultation", "book legal advice session Sri Lanka", "law firm phone number Colombo", "free legal consultation Sri Lanka", "urgent lawyer needed Colombo"] }
    ],
    servicesLabel: "SEO Services for Law Firms in Sri Lanka",
    services: [
      { emoji: "🔒", title: "YMYL Legal SEO Strategy", body: "Legal content is \\\"Your Money or Your Life\\\" content. Google holds it to the highest standards — we ensure you meet them." },
      { emoji: "⚖️", title: "Practice Area Page Optimisation", body: "Dedicated, keyword-rich pages for every legal area — divorce, property, criminal, immigration, corporate — each ranking separately." },
      { emoji: "✍️", title: "Legal Guide Content", body: "Authoritative articles explaining legal processes in plain English — ranking for the research searches clients make before hiring." },
      { emoji: "📍", title: "Local Law Firm SEO", body: "Dominate Google Maps for \\\"lawyers in [city]\\\" searches — the most common way people find legal representation in Sri Lanka." },
      { emoji: "🔗", title: "Legal Authority Link Building", body: "Build trust with backlinks from bar associations, legal directories, and authoritative publications in the legal space." },
      { emoji: "⭐", title: "Credibility & Trust SEO", body: "Showcase attorney profiles, case credentials, and testimonials with schema markup to build search-visible trust signals." }
    ],
    ctaTitle: "Let the Right Clients Find Your Law Firm on Google",
    ctaBody: "Free SEO audit for law firms and legal professionals in Sri Lanka. See the high-value keywords your firm should be ranking for.",
    ctaButton: "Free Legal SEO Audit",
  },
  // ────────────────────────── AUTOMOTIVE SEO ──────────────────────────
  {
    slug: "automotive-seo-sri-lanka",
    navLabel: "Automotive SEO",
    emoji: "🚘",
    icon: Car,
    themeBadge: "bg-blue-100 text-blue-800 border-blue-200",
    themeText: "text-blue-600",
    seoTitle: "Automotive SEO Sri Lanka — Dealers & Service SEO | SeoFX",
    seoDescription: "SEO for car dealers, service centres and spare parts businesses in Sri Lanka. Rank for vehicle, dealer and 'car service near me' searches.",
    keywords: "automotive seo sri lanka, car dealer seo sri lanka, vehicle seo colombo, service centre seo, spare parts seo sri lanka",
    eyebrow: "🚗 Automotive SEO",
    h1: "Every Car Buyer in Sri Lanka Starts on Google. Capture Them Before They Walk Into a Competitor.",
    intro: "Sri Lankans research vehicles, compare prices, and find dealers entirely on Google before making a purchase. SeoFX positions your dealership, spare parts business, or vehicle service centre at the top of those high-intent searches.",
    hubTagline: "Capture every Sri Lankan car buyer before they walk into a competitor's showroom.",
    keywordBoxTitle: "What Sri Lankan Car Buyers & Vehicle Owners Search on Google",
    topKeywords: ["cars for sale Sri Lanka", "car dealers Colombo", "vehicle spare parts Sri Lanka"],
    hubTopKws: ["cars for sale Sri Lanka", "car dealers Colombo", "vehicle spare parts Sri Lanka"],
    stats: [{ value: "60K+", label: "Monthly auto searches" }, { value: "High $", label: "Transaction value" }, { value: "Low", label: "SEO competition" }, { value: "Local", label: "+ National targeting" }],
    intentTitle: "How Car Buyers & Vehicle Owners Search in Sri Lanka",
    intentSub: "From research to purchase — automotive buyers do extensive searching before they spend.",
    intents: [
      { type: "informational", label: "Vehicle Research", queries: ["best cars to buy in Sri Lanka 2025", "hybrid vs petrol car Sri Lanka", "electric vehicle charging Sri Lanka", "car maintenance costs Sri Lanka", "how to import a car to Sri Lanka"] },
      { type: "commercial", label: "Comparing & Shortlisting", queries: ["Toyota vs Honda resale value Lanka", "best used car dealers Colombo review", "reliable car service centre Colombo", "cheapest spare parts shop Sri Lanka", "top hybrid car prices Sri Lanka"] },
      { type: "transactional", label: "Ready to Buy or Book", queries: ["buy Toyota Aqua Colombo 2025", "book car service Colombo online", "spare parts delivery Colombo", "test drive new car Sri Lanka", "contact car dealer Colombo"] }
    ],
    servicesLabel: "SEO Services for Automotive Businesses in Sri Lanka",
    services: [
      { emoji: "🚘", title: "Vehicle Listing SEO", body: "Optimise every vehicle listing with make, model, year, price, and condition keywords so buyers find your stock in search." },
      { emoji: "📍", title: "Dealership Local SEO", body: "Rank in Google Maps when buyers search \\\"car dealers near me\\\" or \\\"[brand] dealer Colombo\\\" — critical for showroom visits." },
      { emoji: "🔧", title: "Service Centre SEO", body: "Rank for \\\"car service near me\\\", specific repair terms, and maintenance searches that bring in regular service revenue." },
      { emoji: "📦", title: "Spare Parts & Accessories SEO", body: "Product page optimisation for spare parts so customers find your parts before ordering from overseas." },
      { emoji: "✍️", title: "Car Buying Guide Content", body: "Authoritative guides on buying, importing, and maintaining vehicles in Sri Lanka — ranking for research keywords." },
      { emoji: "⭐", title: "Dealer Trust & Review SEO", body: "Review schema and trust signals that make your dealership the obvious, credible choice in search results." }
    ],
    ctaTitle: "Put Your Automotive Business in Front of Every Sri Lankan Car Buyer",
    ctaBody: "Free SEO audit for car dealers, service centres, and automotive businesses. See what your competitors rank for — and take it.",
    ctaButton: "Free Automotive SEO Audit",
  },
  // ────────────────────────── FINANCE & INSURANCE SEO ──────────────────────────
  {
    slug: "finance-insurance-seo-sri-lanka",
    navLabel: "Finance & Insurance SEO",
    emoji: "💰",
    icon: Banknote,
    themeBadge: "bg-emerald-100 text-emerald-800 border-emerald-200",
    themeText: "text-emerald-600",
    seoTitle: "Finance & Insurance SEO Sri Lanka | YMYL SEO | SeoFX",
    seoDescription: "Finance and insurance SEO in Sri Lanka. YMYL-grade SEO for banks, brokers, lenders and insurers. Convert high-intent searchers into clients.",
    keywords: "finance seo sri lanka, insurance seo sri lanka, broker seo colombo, ymyl finance seo, financial services seo sri lanka",
    eyebrow: "💰 Finance & Insurance SEO",
    h1: "One Organic Lead in Finance is Worth More Than 100 Clicks in Most Other Industries.",
    intro: "Business loans, investments, insurance policies — these are high-value, high-trust decisions. Clients research extensively on Google before committing. SeoFX positions your financial services business as the most trustworthy, visible option in Sri Lanka.",
    hubTagline: "One organic finance lead is worth 100 paid clicks — we help you capture them.",
    keywordBoxTitle: "What People Search When Looking for Financial Services in Sri Lanka",
    topKeywords: ["business loans Sri Lanka", "insurance companies Colombo", "investment opportunities Sri Lanka"],
    hubTopKws: ["business loans Sri Lanka", "insurance companies Colombo", "investment opportunities Sri Lanka"],
    stats: [{ value: "YMYL", label: "Specialist SEO required" }, { value: "Very High $", label: "Lead value" }, { value: "Trust", label: "Authority-first" }, { value: "Long", label: "Client lifetime value" }],
    intentTitle: "How People Research Financial Services in Sri Lanka",
    intentSub: "Finance searches are high-trust and research-heavy. We build content for every stage.",
    intents: [
      { type: "informational", label: "Research & Education", queries: ["how to get a business loan Sri Lanka", "best investment options Sri Lanka 2025", "how does life insurance work Sri Lanka", "fixed deposit vs unit trust Sri Lanka", "how to start investing in CSE"] },
      { type: "commercial", label: "Comparing Providers", queries: ["best bank for business loan Sri Lanka", "compare insurance policies Sri Lanka", "top financial advisors Colombo review", "lowest interest rate loans Sri Lanka", "best leasing company Sri Lanka"] },
      { type: "transactional", label: "Making a Decision", queries: ["apply business loan online Sri Lanka", "get insurance quote Colombo", "book financial advisor consultation", "open investment account Sri Lanka", "contact tax consultant Colombo"] }
    ],
    servicesLabel: "SEO Services for Finance & Insurance Businesses",
    services: [
      { emoji: "🔒", title: "YMYL Finance SEO", body: "Financial content is held to Google's strictest standards. Our E-E-A-T strategy ensures your content ranks and converts." },
      { emoji: "📊", title: "Product & Service Page SEO", body: "Dedicated pages for every financial product — loans, insurance types, investment options — each targeting specific high-value searches." },
      { emoji: "✍️", title: "Financial Education Content", body: "Guides, calculators, and explainers that rank for research keywords and position your brand as the trusted financial authority in Sri Lanka." },
      { emoji: "🔗", title: "Financial Authority Links", body: "Backlinks from financial news sites, business publications, and government-adjacent sources that build trust with Google." },
      { emoji: "📍", title: "Local Finance SEO", body: "Rank in Google Maps for \\\"financial advisors near me\\\" and \\\"accounting firms Colombo\\\" — critical for consultation-based services." },
      { emoji: "⚡", title: "Technical SEO & Security", body: "HTTPS, page speed, and technical perfection — essential for financial sites where security is a key Google trust signal." }
    ],
    ctaTitle: "Become the Most Trusted Financial Brand in Sri Lanka Search",
    ctaBody: "Free SEO audit for banks, insurers, financial advisors, and accounting firms. Discover the high-value financial keywords you're missing.",
    ctaButton: "Free Finance SEO Audit",
  },
  // ────────────────────────── TEA & AGRICULTURE SEO ──────────────────────────
  {
    slug: "tea-agri-seo-sri-lanka",
    navLabel: "Tea & Agriculture SEO",
    emoji: "🍃",
    icon: Leaf,
    themeBadge: "bg-green-100 text-green-800 border-green-200",
    themeText: "text-green-600",
    seoTitle: "Tea & Agriculture SEO Sri Lanka — Ceylon Tea Export SEO | SeoFX",
    seoDescription: "SEO for Ceylon tea exporters, spice producers and agri-product brands in Sri Lanka. Rank globally for B2B and direct-to-consumer buyers.",
    keywords: "ceylon tea seo, tea exporter seo sri lanka, agriculture seo sri lanka, spice exporter seo, agri product seo, b2b agri seo",
    eyebrow: "🌿 Tea & Agri-Products SEO",
    h1: "The World Searches for Ceylon Tea, Sri Lankan Spices & Organic Produce on Google. Be the Supplier They Find.",
    intro: "International buyers, distributors, and health-conscious consumers worldwide search Google to source authentic Ceylon tea, cinnamon, coconut products, and organic agriculture from Sri Lanka. SeoFX connects your agri-business to that global demand.",
    hubTagline: "Sell Ceylon tea, spices and agri-products globally with international SEO from Sri Lanka.",
    keywordBoxTitle: "What Global Buyers Search to Source Sri Lankan Agri-Products",
    topKeywords: ["Ceylon tea wholesale", "Ceylon cinnamon supplier", "organic coconut oil Sri Lanka"],
    hubTopKws: ["Ceylon tea wholesale", "Ceylon cinnamon supplier", "organic coconut oil Sri Lanka"],
    stats: [{ value: "Global", label: "B2B + B2C demand" }, { value: "UK/US", label: "Top target markets" }, { value: "Organic", label: "Premium positioning" }, { value: "High", label: "Repeat order value" }],
    intentTitle: "How International Buyers Source Sri Lankan Agri-Products",
    intentSub: "From discovering Sri Lanka as a source to placing bulk orders — we target every stage.",
    intents: [
      { type: "informational", label: "Product Discovery", queries: ["what is Ceylon cinnamon vs Cassia", "health benefits of Ceylon tea", "types of coconut products from Sri Lanka", "best spices grown in Sri Lanka", "organic certification standards Sri Lanka"] },
      { type: "commercial", label: "Evaluating Suppliers", queries: ["top certified Ceylon tea exporters", "organic cinnamon suppliers Sri Lanka", "reliable coconut oil manufacturer Lanka", "ISO certified spice company Sri Lanka", "verified wholesale tea supplier review"] },
      { type: "transactional", label: "Placing Orders", queries: ["bulk order Ceylon tea minimum quantity", "wholesale cinnamon price per kg Lanka", "request sample organic coconut oil", "contact tea exporter Sri Lanka", "import coconut products from Sri Lanka"] }
    ],
    servicesLabel: "SEO Services for Tea & Agriculture Businesses",
    services: [
      { emoji: "🌍", title: "International B2B SEO", body: "Target wholesale buyers and distributors in UK, USA, Germany, Australia, UAE, and Japan searching for Sri Lankan agri-products." },
      { emoji: "🍃", title: "Product Category Pages", body: "Optimised pages for each product — tea grades, spice varieties, coconut products — with the specs importers search for." },
      { emoji: "🏆", title: "Certification & Quality SEO", body: "Showcase organic, fair trade, ISO, and USDA certifications in structured data to rank for quality-specific buyer searches." },
      { emoji: "✍️", title: "Origin Story & Heritage Content", body: "Content about your product origins, processing methods, and Sri Lankan heritage that ranks and differentiates your brand." },
      { emoji: "🛒", title: "B2C Online Store SEO", body: "For direct consumer sales — optimise for retail buyers searching for authentic Ceylon products online in UK and USA." },
      { emoji: "🔗", title: "Trade & Food Industry Links", body: "Backlinks from food publications, trade directories, organic certification bodies, and health and wellness sites." }
    ],
    ctaTitle: "Connect Your Sri Lankan Agri-Business with Global Buyers on Google",
    ctaBody: "Free SEO audit for tea producers, spice exporters, and agricultural businesses. Discover which international markets are searching for your products right now.",
    ctaButton: "Free Agri SEO Audit",
  },
  // ────────────────────────── IT & SOFTWARE SEO ──────────────────────────
  {
    slug: "it-software-seo-sri-lanka",
    navLabel: "IT & Software SEO",
    emoji: "💻",
    icon: Code2,
    themeBadge: "bg-indigo-100 text-indigo-800 border-indigo-200",
    themeText: "text-indigo-600",
    seoTitle: "IT & Software SEO Sri Lanka — SaaS & Tech SEO | SeoFX",
    seoDescription: "SEO for IT companies, SaaS startups and software services in Sri Lanka. Rank globally for tech buyers and B2B decision-makers. Free audit.",
    keywords: "it seo sri lanka, software seo sri lanka, saas seo, tech seo colombo, b2b tech seo sri lanka, it services seo",
    eyebrow: "💻 IT & Software SEO",
    h1: "Global Clients Are Searching Google for Software Development Partners in Sri Lanka. Are You Visible?",
    intro: "Sri Lanka is an emerging tech hub with competitive rates and strong talent. International businesses actively search Google to find software development, IT outsourcing, and tech service partners in Sri Lanka. SeoFX puts your IT company in front of those clients.",
    hubTagline: "Help IT companies and SaaS startups rank globally for high-intent B2B buyers.",
    keywordBoxTitle: "What Global Clients Search to Find IT Services in Sri Lanka",
    topKeywords: ["software development Sri Lanka", "web development company Colombo", "IT outsourcing Sri Lanka"],
    hubTopKws: ["software development Sri Lanka", "web development company Colombo", "IT outsourcing Sri Lanka"],
    stats: [{ value: "Global", label: "Client targeting" }, { value: "High $", label: "Contract value" }, { value: "Tech", label: "Savvy buyer persona" }, { value: "Long", label: "Client relationships" }],
    intentTitle: "How Global Clients Search for IT Partners in Sri Lanka",
    intentSub: "Tech buyers are sophisticated searchers. We target every stage of their vendor selection process.",
    intents: [
      { type: "informational", label: "Market Research", queries: ["is Sri Lanka good for IT outsourcing", "software development cost Sri Lanka vs India", "tech talent in Sri Lanka quality", "time zone Sri Lanka for UK companies", "how to hire remote developers Lanka"] },
      { type: "commercial", label: "Evaluating Companies", queries: ["top software companies Sri Lanka review", "best web development agency Colombo", "experienced mobile app developers Lanka", "agile software team Sri Lanka", "reputable IT outsourcing company Lanka"] },
      { type: "transactional", label: "Initiating Contact", queries: ["get software development quote Sri Lanka", "hire React developer Sri Lanka", "contact IT company Colombo", "book discovery call software firm Lanka", "request portfolio IT agency Sri Lanka"] }
    ],
    servicesLabel: "SEO Services for IT & Software Companies",
    services: [
      { emoji: "🌍", title: "International IT SEO", body: "Target decision-makers in UK, USA, Australia, and Middle East searching for technology partners in Sri Lanka." },
      { emoji: "💻", title: "Service & Technology Pages", body: "Dedicated, keyword-rich pages for every service — web dev, mobile, cloud, cybersecurity — each ranking for specific tech searches." },
      { emoji: "📂", title: "Case Study & Portfolio SEO", body: "Optimise case studies so they rank for industry + technology searches — \\\"fintech app development Sri Lanka\\\" and similar." },
      { emoji: "✍️", title: "Tech Thought Leadership Content", body: "Technical blog posts, guides, and whitepapers that demonstrate expertise and rank for the terms your target clients search." },
      { emoji: "🔗", title: "Tech Directory & PR Links", body: "Get listed and earn backlinks from Clutch, GoodFirms, tech publications, and startup media to build international credibility." },
      { emoji: "📍", title: "Local IT Market SEO", body: "Rank for local Sri Lankan businesses searching for development partners — capturing the strong domestic IT services market too." }
    ],
    ctaTitle: "Make Your IT Company the First Result International Clients See",
    ctaBody: "Free SEO audit for software and technology companies in Sri Lanka. See which global keywords your competitors rank for — and outrank them.",
    ctaButton: "Free IT SEO Audit",
  },
  // ────────────────────────── EVENTS & WEDDING SEO ──────────────────────────
  {
    slug: "events-wedding-seo-sri-lanka",
    navLabel: "Events & Wedding SEO",
    emoji: "💍",
    icon: PartyPopper,
    themeBadge: "bg-rose-100 text-rose-800 border-rose-200",
    themeText: "text-rose-600",
    seoTitle: "Events & Wedding SEO Sri Lanka — Wedding Planner SEO | SeoFX",
    seoDescription: "SEO for wedding planners, event venues and destination wedding brands in Sri Lanka. Capture high-value couples planning weddings.",
    keywords: "wedding seo sri lanka, event seo sri lanka, wedding planner seo, destination wedding seo, event venue seo colombo",
    eyebrow: "🎉 Events & Wedding SEO",
    h1: "Couples Planning Their Wedding in Sri Lanka Search Google Obsessively. Be What They Find.",
    intro: "Wedding planning is one of the most emotionally-driven, research-intensive search journeys. Couples in Sri Lanka — and overseas Sri Lankans planning destination weddings — spend months searching. SeoFX ensures every search leads them to your business.",
    hubTagline: "Win destination wedding and event searches from local and international couples.",
    keywordBoxTitle: "What Couples & Event Planners Search in Sri Lanka",
    topKeywords: ["wedding planners Sri Lanka", "wedding venues Colombo", "wedding photographers Sri Lanka"],
    hubTopKws: ["wedding planners Sri Lanka", "wedding venues Colombo", "wedding photographers Sri Lanka"],
    stats: [{ value: "Seasonal", label: "Peak demand planning" }, { value: "High $", label: "Per-event revenue" }, { value: "Visual", label: "Photo SEO critical" }, { value: "Referral", label: "Reviews drive bookings" }],
    intentTitle: "How Couples & Event Clients Search in Sri Lanka",
    intentSub: "Wedding planning starts months in advance. We capture clients at every research stage.",
    intents: [
      { type: "informational", label: "Inspiration & Planning", queries: ["wedding planning checklist Sri Lanka", "best wedding venues Colombo 2025", "beach wedding locations Sri Lanka", "average wedding cost Sri Lanka", "destination wedding guide Sri Lanka"] },
      { type: "commercial", label: "Comparing Vendors", queries: ["best wedding photographer Sri Lanka review", "top wedding planners Colombo", "wedding venue reviews Sri Lanka", "affordable vs luxury wedding packages", "best event company for corporate Lanka"] },
      { type: "transactional", label: "Booking & Enquiring", queries: ["book wedding venue Colombo 2025", "get wedding planner quote Sri Lanka", "contact wedding photographer Lanka", "reserve event hall Colombo", "wedding package inquiry Sri Lanka"] }
    ],
    servicesLabel: "SEO Services for Events & Wedding Businesses",
    services: [
      { emoji: "💍", title: "Wedding Keyword SEO", body: "Rank for every wedding-related search — venues, planners, photographers, caterers — with dedicated, optimised landing pages." },
      { emoji: "📸", title: "Portfolio & Gallery SEO", body: "Optimise event photos and galleries so they rank in Google Images — the primary inspiration channel for wedding planning." },
      { emoji: "🌍", title: "Destination Wedding SEO", body: "Target overseas Sri Lankans in UK, Australia, and UAE searching for destination weddings back home in Sri Lanka." },
      { emoji: "⭐", title: "Review & Testimonial SEO", body: "Reviews are everything in weddings. We build review generation strategies and schema markup to showcase your reputation." },
      { emoji: "📍", title: "Venue & Location SEO", body: "Rank for location-specific wedding searches — \\\"beach wedding Galle\\\", \\\"garden venue Kandy\\\" — where couples make decisions." },
      { emoji: "✍️", title: "Wedding Planning Blog", body: "Planning guides, real wedding features, and trend articles that rank for research keywords and drive qualified enquiries." }
    ],
    ctaTitle: "Book Every Weekend with Couples Who Found You on Google",
    ctaBody: "Free SEO audit for wedding and events businesses in Sri Lanka. Discover what your ideal clients are searching and why they're finding competitors instead of you.",
    ctaButton: "Free Events SEO Audit",
  },
  // ────────────────────────── FREIGHT & LOGISTICS SEO ──────────────────────────
  {
    slug: "freight-logistics-seo-sri-lanka",
    navLabel: "Freight & Logistics SEO",
    emoji: "🚚",
    icon: Truck,
    themeBadge: "bg-orange-100 text-orange-800 border-orange-200",
    themeText: "text-orange-600",
    seoTitle: "Freight & Logistics SEO Sri Lanka — B2B Logistics SEO | SeoFX",
    seoDescription: "SEO for freight forwarders, logistics companies and shipping providers in Sri Lanka. Capture high-value B2B logistics enquiries from search.",
    keywords: "freight seo sri lanka, logistics seo sri lanka, shipping seo colombo, b2b logistics seo, freight forwarder seo",
    eyebrow: "🛳️ Freight & Logistics SEO",
    h1: "B2B Logistics Buyers Search Google to Find Freight Partners in Sri Lanka. Low Competition. High Contract Value.",
    intro: "Importers, exporters, and businesses across Sri Lanka search Google for freight forwarders, shipping agents, customs clearance, and logistics solutions. Almost no logistics company in Sri Lanka does SEO well — giving you an enormous first-mover advantage.",
    hubTagline: "Capture high-value B2B logistics, freight and shipping enquiries from organic search.",
    keywordBoxTitle: "What Businesses Search to Find Freight Services in Sri Lanka",
    topKeywords: ["freight companies Sri Lanka", "shipping agents Colombo", "customs clearance Sri Lanka"],
    hubTopKws: ["freight companies Sri Lanka", "shipping agents Colombo", "customs clearance Sri Lanka"],
    stats: [{ value: "Low", label: "SEO competition" }, { value: "B2B", label: "High-contract clients" }, { value: "Recurring", label: "Repeat business model" }, { value: "First", label: "Mover advantage" }],
    intentTitle: "How Importers & Exporters Search for Logistics Partners",
    intentSub: "B2B logistics searches are specific and high-value. We capture every stage of the procurement process.",
    intents: [
      { type: "informational", label: "Research & Understanding", queries: ["how does customs clearance work Sri Lanka", "air freight vs sea freight cost comparison", "import duties Sri Lanka 2025", "what is a freight forwarder Sri Lanka", "how to export goods from Sri Lanka"] },
      { type: "commercial", label: "Finding a Partner", queries: ["best freight companies Sri Lanka review", "reliable customs agent Colombo port", "top logistics providers Sri Lanka", "affordable freight forwarder Lanka", "experienced shipping agent Sri Lanka"] },
      { type: "transactional", label: "Getting Quotes", queries: ["freight quote Sri Lanka to Australia", "sea freight rate Colombo to Dubai", "request logistics proposal Sri Lanka", "contact customs broker Colombo", "warehousing quote Sri Lanka"] }
    ],
    servicesLabel: "SEO Services for Freight & Logistics Companies",
    services: [
      { emoji: "🚢", title: "Service Route Page SEO", body: "Dedicated pages for every route and service type — \\\"air freight to UK\\\", \\\"sea freight Dubai\\\" — targeting the exact searches importers use." },
      { emoji: "📍", title: "Port & Location SEO", body: "Rank for Colombo Port-specific searches and location-based logistics queries across Sri Lanka's key trade zones." },
      { emoji: "✍️", title: "Trade & Compliance Content", body: "Authoritative guides on importing, exporting, customs processes, and regulations — ranking for the research searches every importer makes." },
      { emoji: "🌍", title: "International Trade SEO", body: "Target overseas businesses looking to import from or export to Sri Lanka — capturing inbound B2B logistics demand globally." },
      { emoji: "🔗", title: "Trade Directory Link Building", body: "Listings and backlinks from freight directories, trade associations, and international logistics publications to build authority." },
      { emoji: "📊", title: "B2B Lead Generation SEO", body: "Landing pages optimised to convert freight searches into quote requests — the core conversion for logistics businesses." }
    ],
    ctaTitle: "Dominate Freight & Logistics Search in Sri Lanka Before Your Competitors Wake Up",
    ctaBody: "Free SEO audit for freight, shipping, and logistics businesses. The competition is low — act now to own this space on Google.",
    ctaButton: "Free Logistics SEO Audit",
  },
];

export const FULL_KEYWORDS: Record<string, string[]> = {
  "hotel-seo-sri-lanka": [
    "hotels in Sri Lanka", "best hotels Colombo", "beach resorts Sri Lanka", "boutique hotel Galle",
    "luxury hotels Sri Lanka", "cheap hotels Kandy", "hotels near Sigiriya", "family resorts Sri Lanka",
    "Sri Lanka holiday packages", "Mirissa beach hotel", "Ella guesthouse", "hotel booking Sri Lanka",
    "5 star hotel Colombo", "honeymoon hotels Sri Lanka", "ayurveda resort Sri Lanka",
  ],
  "travel-seo-sri-lanka": [
    "Sri Lanka tour packages", "Sri Lanka travel guide", "best places in Sri Lanka",
    "Sri Lanka itinerary 10 days", "Sri Lanka visa requirements", "wildlife safari Sri Lanka",
    "Sri Lanka holiday packages", "Yala National Park tours", "whale watching Sri Lanka",
    "Sigiriya day trip Colombo", "train ride Ella Sri Lanka", "Sri Lanka private driver",
    "budget travel Sri Lanka", "honeymoon in Sri Lanka", "cultural tour Sri Lanka",
  ],
  "furniture-seo-sri-lanka": [
    "furniture shops in Colombo", "solid wood furniture Sri Lanka", "sofa set price in Sri Lanka",
    "dining table Sri Lanka", "bedroom furniture Colombo", "custom made furniture Sri Lanka",
    "office furniture Sri Lanka", "teak furniture Sri Lanka export", "cheap furniture Sri Lanka",
    "home decor stores Colombo", "buy furniture online Sri Lanka", "kitchen cabinet Sri Lanka price",
    "furniture manufacturers Sri Lanka", "garden furniture Sri Lanka",
  ],
  "education-seo-sri-lanka": [
    "courses in Sri Lanka", "best schools in Colombo", "online courses Sri Lanka",
    "international schools Sri Lanka", "A/L tuition classes Colombo", "degree programmes Sri Lanka",
    "IT courses Sri Lanka", "MBA Sri Lanka", "English language courses Colombo",
    "professional courses Sri Lanka", "vocational training Sri Lanka", "best preschool Colombo",
    "medical school Sri Lanka", "study abroad from Sri Lanka",
  ],
  "healthcare-seo-sri-lanka": [
    "doctors in Colombo", "private hospital Sri Lanka", "ayurveda treatment Sri Lanka",
    "dental clinic Colombo", "best gynaecologist Sri Lanka", "physiotherapy Colombo",
    "mental health counselling Sri Lanka", "yoga retreat Sri Lanka", "wellness centre Colombo",
    "specialist doctor Kandy", "online doctor consultation Sri Lanka", "ayurveda resort Sri Lanka",
    "skin clinic Colombo", "medical tourism Sri Lanka",
  ],
  "ecommerce-seo-sri-lanka": [
    "buy online Sri Lanka", "online shopping Sri Lanka", "free delivery Sri Lanka",
    "best price [product] Sri Lanka", "[product] buy online Colombo", "same day delivery Sri Lanka",
    "cash on delivery Sri Lanka", "authentic [brand] Sri Lanka", "where to buy [product] in Sri Lanka",
    "Sri Lanka online store", "[product] price Sri Lanka 2025", "original vs fake [product]",
    "reviews [product] Sri Lanka",
  ],
  "export-business-seo-sri-lanka": [
    "Ceylon tea exporters", "Sri Lanka spice exporters", "coconut products Sri Lanka supplier",
    "gems exporters Sri Lanka", "Sri Lanka rubber manufacturer", "organic products Sri Lanka bulk",
    "Sri Lanka textile exporter", "wholesale tea Sri Lanka", "Sri Lanka cinnamon exporter",
    "seafood exporters Sri Lanka", "Sri Lanka manufacturers directory", "blue sapphire Sri Lanka wholesale",
    "coconut shell products export", "Sri Lanka B2B supplier",
  ],
  "clothing-fashion-seo-sri-lanka": [
    "clothing brands Sri Lanka", "fashion designers Colombo", "buy dresses online Sri Lanka",
    "Sri Lankan traditional clothing", "garment manufacturers Sri Lanka", "ethical clothing manufacturers Lanka",
    "saree shops Colombo", "men's fashion Sri Lanka", "kids clothing online Sri Lanka",
    "batik clothing Sri Lanka", "wholesale clothing Sri Lanka", "sustainable fashion Sri Lanka",
    "wedding saree Sri Lanka price", "fashion boutique Colombo", "plus size clothing Sri Lanka",
  ],
  "construction-real-estate-seo-sri-lanka": [
    "apartments for sale Colombo", "house for sale Sri Lanka", "land for sale Sri Lanka", "house builders Sri Lanka", "construction companies Colombo", "real estate agents Sri Lanka", "luxury apartments Colombo", "commercial property Sri Lanka", "building contractors Sri Lanka", "architect Sri Lanka", "new apartments Colombo 2025", "property for rent Colombo", "villa for sale Galle", "interior design Sri Lanka", "roofing contractors Colombo", "building materials price Sri Lanka",
  ],
  "restaurant-seo-sri-lanka": [
    "best restaurants Colombo", "restaurants near me Sri Lanka", "food delivery Colombo", "cafes in Colombo", "fine dining Colombo", "seafood restaurants Sri Lanka", "pizza delivery Colombo", "Sri Lankan food restaurant", "vegetarian restaurants Colombo", "rooftop restaurant Colombo", "breakfast places Colombo", "buffet restaurants Sri Lanka", "family restaurants Kandy", "online food order Sri Lanka", "restaurant with view Colombo", "halal restaurants Colombo",
  ],
  "beauty-salon-seo-sri-lanka": [
    "salon near me Sri Lanka", "hair salon Colombo", "bridal makeup Sri Lanka", "spa Colombo", "nail salon Colombo", "best beauty parlour Colombo", "eyebrow threading Colombo", "makeup artist Sri Lanka", "hair treatment Colombo", "keratin treatment Sri Lanka", "luxury spa Sri Lanka", "facial treatment Colombo", "waxing salon Sri Lanka", "unisex salon Colombo", "beauty courses Sri Lanka",
  ],
  "legal-law-firm-seo-sri-lanka": [
    "lawyers in Colombo", "divorce lawyer Sri Lanka", "property lawyer Colombo", "criminal lawyer Sri Lanka", "immigration lawyer Sri Lanka", "business lawyer Colombo", "legal advice Sri Lanka", "notary public Colombo", "labour law Sri Lanka", "contract lawyer Sri Lanka", "family law attorney Sri Lanka", "best law firm Sri Lanka", "will writing Sri Lanka", "company registration Sri Lanka", "land dispute lawyer Sri Lanka",
  ],
  "automotive-seo-sri-lanka": [
    "cars for sale Sri Lanka", "car dealers Colombo", "vehicle spare parts Sri Lanka", "car service centre Colombo", "used cars Sri Lanka price", "motorbike for sale Sri Lanka", "car insurance Sri Lanka", "Toyota dealer Sri Lanka", "hybrid cars Sri Lanka", "electric vehicles Sri Lanka", "tyre shop Colombo", "vehicle import Sri Lanka", "car rental Sri Lanka", "auto body repair Colombo", "car accessories Sri Lanka",
  ],
  "finance-insurance-seo-sri-lanka": [
    "business loans Sri Lanka", "insurance companies Colombo", "investment opportunities Sri Lanka", "personal loans Sri Lanka", "financial advisors Colombo", "life insurance Sri Lanka", "vehicle insurance Sri Lanka", "fixed deposits Sri Lanka rates", "stock market Sri Lanka", "SME loans Sri Lanka", "mortgage rates Sri Lanka", "accounting firms Colombo", "tax consultants Sri Lanka", "leasing companies Sri Lanka", "forex trading Sri Lanka legal",
  ],
  "tea-agri-seo-sri-lanka": [
    "Ceylon tea wholesale", "Ceylon cinnamon supplier", "organic coconut oil Sri Lanka", "Sri Lanka spice exporters", "black pepper Sri Lanka bulk", "desiccated coconut Sri Lanka", "organic tea Sri Lanka", "Ceylon tea factory tour", "agricultural products Sri Lanka", "virgin coconut oil manufacturer Lanka", "buy Ceylon tea online UK", "nutmeg Sri Lanka exporter", "cardamom Sri Lanka wholesale", "Sri Lanka organic certification", "turmeric powder Sri Lanka export",
  ],
  "it-software-seo-sri-lanka": [
    "software development Sri Lanka", "web development company Colombo", "IT outsourcing Sri Lanka", "mobile app development Sri Lanka", "software companies Colombo", "IT services Sri Lanka", "hire developers Sri Lanka", "cloud services Sri Lanka", "cybersecurity company Sri Lanka", "digital transformation Sri Lanka", "ERP software Sri Lanka", "ecommerce development Sri Lanka", "UI UX design Sri Lanka", "QA testing company Sri Lanka", "affordable software developers Lanka",
  ],
  "events-wedding-seo-sri-lanka": [
    "wedding planners Sri Lanka", "wedding venues Colombo", "wedding photographers Sri Lanka", "wedding caterers Colombo", "event management Sri Lanka", "corporate events Colombo", "beach wedding Sri Lanka", "wedding florist Colombo", "birthday party venue Sri Lanka", "wedding decoration Sri Lanka", "destination wedding Sri Lanka", "wedding DJ Sri Lanka", "wedding car hire Colombo", "conference venues Colombo", "wedding package price Sri Lanka",
  ],
  "freight-logistics-seo-sri-lanka": [
    "freight companies Sri Lanka", "shipping agents Colombo", "customs clearance Sri Lanka", "freight forwarder Sri Lanka", "logistics company Colombo", "air freight Sri Lanka", "sea freight Sri Lanka", "cargo shipping Sri Lanka", "courier services Sri Lanka", "import clearance Colombo port", "warehousing Sri Lanka", "last mile delivery Sri Lanka", "cold chain logistics Sri Lanka", "LCL FCL shipping Sri Lanka", "shipping cost Sri Lanka to UK",
  ],
};

export const getIndustryBySlug = (slug?: string): Industry | undefined =>
  INDUSTRIES.find((i) => i.slug === slug);
