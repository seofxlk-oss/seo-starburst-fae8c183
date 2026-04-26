import {
  Hotel,
  Plane,
  Sofa,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Package,
  Shirt,
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
};

export const getIndustryBySlug = (slug?: string): Industry | undefined =>
  INDUSTRIES.find((i) => i.slug === slug);
