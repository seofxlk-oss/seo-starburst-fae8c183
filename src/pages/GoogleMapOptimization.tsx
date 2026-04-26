import { Link } from "react-router-dom";
import {
  MapPin,
  Search,
  Star,
  ShieldCheck,
  Compass,
  ClipboardList,
  Building2,
  Utensils,
  Scale,
  ShoppingBag,
  Hotel,
  Wrench,
  GraduationCap,
  Sofa,
  Shirt,
  Smartphone,
  ShoppingCart,
  Scissors,
  Dumbbell,
  Stethoscope,
  Pill,
  Home as HomeIcon,
  Car,
  KeyRound,
  HardHat,
  Calculator,
  CalendarHeart,
  Sparkles,
  Check,
  Phone,
  TrendingUp,
  Users,
  Award,
  Infinity as InfinityIcon,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { orgSchema, websiteSchema, serviceSchema, faqSchema } from "@/lib/schema";
import googleMapVideo from "@/assets/google-map-hero.mp4.asset.json";

const WHY_CRITICAL = [
  {
    icon: Search,
    stat: "85%",
    title: "Use Google to find local businesses",
    body: "85% of customers in Sri Lanka turn to Google first when they need a local product or service — not directories, not social media. Google Maps is where buying decisions begin.",
  },
  {
    icon: TrendingUp,
    stat: "80%",
    title: "Of clicks go to the top 3 map results",
    body: "The Local 3-Pack captures 80% of all local clicks. If you are not ranked in the top three on Google Maps, your competitors are receiving the customers that should be yours.",
  },
  {
    icon: Phone,
    stat: "1×",
    title: "Local searches convert faster than any channel",
    body: "Someone searching \"dentist near me\" or \"restaurant Colombo\" is ready to buy today. Local search is the highest-intent traffic source — and it converts faster than any other channel.",
  },
  {
    icon: Award,
    stat: "🇱🇰",
    title: "Most Sri Lankan businesses are poorly optimized",
    body: "The majority of local businesses in Sri Lanka have weak or unoptimized Google Business Profiles. That is a massive opportunity — the businesses that act now will dominate their categories.",
  },
];

const WHO = [
  { icon: Utensils, type: "Restaurants & cafés", desc: "Diners search Google Maps before every meal." },
  { icon: Hotel, type: "Hotels & villas", desc: "Travellers find accommodation via Maps and reviews." },
  { icon: Building2, type: "Doctors & clinics", desc: "Patients need care now — and search to find it." },
  { icon: Sparkles, type: "Salons & spas", desc: "Beauty bookings start with a local Maps search." },
  { icon: ShoppingBag, type: "Real estate agencies", desc: "Buyers and sellers compare local agents on Google." },
  { icon: GraduationCap, type: "Education institutes", desc: "Parents and students search locally first." },
  { icon: Wrench, type: "Local service businesses", desc: "Plumbers, electricians, repairs — urgency searches." },
  { icon: Scale, type: "Professional services", desc: "Lawyers, accountants, consultants — trust starts on Google." },
];

const INDUSTRY_SEARCHES = [
  {
    icon: Sofa,
    name: "Furniture Shops",
    searches: ["furniture shop near me", "sofa shop Colombo", "best furniture store Sri Lanka"],
    why: "Google Map Optimization Sri Lanka helps furniture stores increase showroom visits and high-value sales.",
  },
  {
    icon: Shirt,
    name: "Clothing Stores",
    searches: ["clothing shops near me", "ladies fashion Colombo", "best clothing store Sri Lanka"],
    why: "Ranking on Google Maps increases foot traffic and impulse buying.",
  },
  {
    icon: Smartphone,
    name: "Electronics Shops",
    searches: ["mobile shop near me", "phone shop Colombo", "electronics store Sri Lanka"],
    why: "High-intent buyers choose top map results instantly.",
  },
  {
    icon: ShoppingCart,
    name: "Supermarkets",
    searches: ["supermarket near me", "grocery store Colombo", "food store near me"],
    why: "Daily searches equal daily revenue.",
  },
  {
    icon: Utensils,
    name: "Restaurants",
    searches: ["restaurants near me", "best restaurant Colombo", "food near me open now"],
    why: "Top 3 results capture the majority of hungry customers.",
  },
  {
    icon: Hotel,
    name: "Hotels & Villas",
    searches: ["hotel near me", "villa in Galle Sri Lanka", "places to stay near me"],
    why: "Tourists rely heavily on Google Maps to choose where to stay.",
  },
  {
    icon: Scissors,
    name: "Salons & Spas",
    searches: ["salon near me", "hair salon Colombo", "spa near me"],
    why: "Beauty bookings happen instantly from the top map result.",
  },
  {
    icon: Dumbbell,
    name: "Gyms",
    searches: ["gym near me", "fitness center Colombo", "best gym near me"],
    why: "Local visibility converts directly into new memberships.",
  },
  {
    icon: Stethoscope,
    name: "Clinics & Doctors",
    searches: ["doctor near me", "clinic Colombo", "dentist near me"],
    why: "Urgent health searches turn into fast conversions.",
  },
  {
    icon: Pill,
    name: "Pharmacies",
    searches: ["pharmacy near me", "medical shop Colombo", "drug store near me"],
    why: "High-frequency local searches drive daily walk-ins.",
  },
  {
    icon: HomeIcon,
    name: "Real Estate",
    searches: ["real estate agent Colombo", "property for sale near me", "land for sale Sri Lanka"],
    why: "High-value property leads come straight from Google Maps.",
  },
  {
    icon: Car,
    name: "Car Dealers",
    searches: ["car sale near me", "vehicle showroom Colombo", "used cars Sri Lanka"],
    why: "Buyers visit the top nearby dealers first.",
  },
  {
    icon: KeyRound,
    name: "Car Rentals",
    searches: ["rent a car near me", "car rental Colombo", "vehicle hire Sri Lanka"],
    why: "Tourists almost always choose from the top map results.",
  },
  {
    icon: Wrench,
    name: "Repair Services",
    searches: ["phone repair near me", "laptop repair Colombo", "ac repair near me"],
    why: "Urgent need means an instant call to the #1 result.",
  },
  {
    icon: HardHat,
    name: "Construction",
    searches: ["construction company Colombo", "builders near me", "house builders Sri Lanka"],
    why: "Local trust signals on Maps drive million-rupee projects.",
  },
  {
    icon: Scale,
    name: "Lawyers",
    searches: ["lawyer near me", "attorney Colombo", "legal services Sri Lanka"],
    why: "Map visibility builds the credibility legal clients need.",
  },
  {
    icon: Calculator,
    name: "Accountants",
    searches: ["accountant near me", "tax consultant Colombo", "audit firm Sri Lanka"],
    why: "Trust-based services win when visibility is highest.",
  },
  {
    icon: GraduationCap,
    name: "Education & Tuition",
    searches: ["tuition classes near me", "institute Colombo", "best classes Sri Lanka"],
    why: "Parents and students search locally before enrolling.",
  },
  {
    icon: CalendarHeart,
    name: "Event & Wedding Services",
    searches: ["wedding planner Colombo", "event planner near me", "wedding services Sri Lanka"],
    why: "High-value bookings start with a Google Maps search.",
  },
  {
    icon: Wrench,
    name: "Home Services",
    searches: ["plumber near me", "electrician Colombo", "cleaning service near me"],
    why: "Top result equals the instant job — every single time.",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Google Business Profile Optimization",
    body: "We fully optimize your Google Business Profile from the ground up.",
    items: [
      "Primary & secondary categories",
      "Keyword-rich business description",
      "Services & product optimization",
      "Geo-targeting setup",
    ],
  },
  {
    n: "02",
    title: "Google Maps SEO Optimization",
    body: "We implement advanced Google Maps SEO Sri Lanka strategies.",
    items: [
      "Local keyword optimization",
      "Location relevance signals",
      "Search intent matching",
      "Map ranking structure",
    ],
  },
  {
    n: "03",
    title: "Google Map Ranking Signals",
    body: "We build the signals Google uses to rank your business higher.",
    items: [
      "NAP consistency across Sri Lanka directories",
      "Local citations",
      "Authority signals",
      "Location trust signals",
    ],
  },
  {
    n: "04",
    title: "Review Optimization System",
    body: "Reviews are the #1 ranking factor on Google Maps. We install a system that delivers.",
    items: [
      "Generate real customer reviews",
      "Increase review frequency",
      "Improve overall ratings",
      "Build long-term trust signals",
    ],
  },
  {
    n: "05",
    title: "Local 3-Pack Ranking Strategy",
    body: "We position your business to enter Google Maps Top 3 results — where calls, directions, and sales increase.",
    items: [
      "Targeted prominence building",
      "Proximity & relevance tuning",
      "Competitor displacement strategy",
      "Sustained 3-Pack positioning",
    ],
  },
];

const WHAT_YOU_GET = [
  "Fully optimized Google Business Profile",
  "Higher Google Maps ranking",
  "More calls & local leads",
  "Increased foot traffic",
  "Long-term visibility — without ads",
  "Complete documentation & handover",
];

const COMPARE = [
  { gmo: "Instant local visibility", seo: "Slow results" },
  { gmo: "High-intent customers", seo: "General traffic" },
  { gmo: "Calls & in-person visits", seo: "Website clicks" },
  { gmo: "Local market domination", seo: "Broad competition" },
];

const WHY_US = [
  {
    icon: MapPin,
    title: "Sri Lanka-focused local SEO strategy",
    body: "Built specifically for the Sri Lankan market — Colombo, Kandy, Galle, Negombo, Jaffna and beyond.",
  },
  {
    icon: ShieldCheck,
    title: "No monthly retainers",
    body: "One-time investment. No lock-in contracts. No surprise bills.",
  },
  {
    icon: InfinityIcon,
    title: "One-time optimization approach",
    body: "We build it once, correctly. Your rankings keep working without ongoing agency fees.",
  },
  {
    icon: Award,
    title: "Proven ranking methods",
    body: "Strategies validated across Sri Lankan businesses ranking in their Local 3-Pack.",
  },
];

const TIMELINE = [
  {
    when: "Initial improvements · 30 days",
    title: "Foundations live & indexed",
    body: "Your Google Business Profile is rebuilt, ranking signals are deployed, and your review system is generating real customer reviews. Google begins re-evaluating your listing.",
  },
  {
    when: "Ranking growth · 60 days",
    title: "Visibility climbs",
    body: "Your listing starts ranking for more local queries. Calls and direction requests increase. Customers who never knew you existed begin finding you on Google Maps.",
  },
  {
    when: "Top 3 positioning · 60–90 days",
    title: "Local 3-Pack entry",
    body: "For most businesses in Sri Lanka, this is when you enter the Local 3-Pack. The step-change in inbound calls, walk-ins, and revenue becomes undeniable.",
  },
];

const FAQS = [
  {
    q: "What is Google Map Optimization?",
    a: "Google Map Optimization is the process of improving your Google Business Profile so your business ranks higher on Google Maps — particularly inside the Local 3-Pack, where 80% of local clicks happen. It involves category architecture, keyword optimization, ranking signals, citations, and a sustained review acquisition system.",
  },
  {
    q: "Why is Google Maps important for my Sri Lankan business?",
    a: "Because most customers in Sri Lanka choose businesses from the top 3 results on Google Maps. 85% of local buyers use Google to discover businesses, and the top three Maps listings receive 80% of clicks. If you are not there, your competitors are getting your customers.",
  },
  {
    q: "Do I need a website to rank on Google Maps?",
    a: "No — Google Maps alone can generate leads. Your Google Business Profile is a standalone asset that can drive calls, direction requests, and walk-ins even without a website. A website strengthens results, but it is not required to rank.",
  },
  {
    q: "How fast can I rank on Google Maps?",
    a: "Most businesses see initial improvements within 30 days, meaningful ranking growth by 60 days, and Local 3-Pack positioning between 60 and 90 days — depending on your category and the competition in your city.",
  },
  {
    q: "How is Google Map Optimization different from regular SEO?",
    a: "Traditional SEO focuses on ranking your website in Google search results — a slow, broad-competition game. Google Map Optimization ranks your Google Business Profile on Google Maps, delivering instant local visibility, high-intent customers, and direct calls or walk-ins. They are two completely different disciplines.",
  },
  {
    q: "How much does Google Map Optimization in Sri Lanka cost?",
    a: "The Foundation Package starts from LKR 35,000 as a one-time investment. This covers the complete Google Business Profile rebuild, Maps SEO implementation, ranking signal deployment, review system installation, and full handover documentation. No monthly fees. No retainer.",
  },
  {
    q: "Will my listing keep ranking after the engagement?",
    a: "Yes. Local search authority does not depreciate the way ad spend does. Once your Google Business Profile is correctly built and your review system is running, your listing continues to gain strength on its own — for years.",
  },
  {
    q: "Does this work outside Colombo?",
    a: "Absolutely. Our Google Map Optimization Sri Lanka service works in Colombo, Kandy, Galle, Negombo, Jaffna, Matara, Kurunegala, Anuradhapura, Trincomalee, Batticaloa and beyond. Businesses outside Colombo often see faster results because local competition is less mature.",
  },
];

const GoogleMapOptimization = () => {
  const svcSchema = serviceSchema({
    name: "Google Map Optimization Sri Lanka",
    description:
      "Rank #1 on Google Maps and get more local customers. Google Map Optimization Sri Lanka service — Google Business Profile optimization, Google Maps SEO, Local 3-Pack ranking, review system. One-time investment, no monthly retainer.",
    url: `${SITE.url}/google-map-optimization`,
    serviceType: "Google Maps SEO & Local Search Optimization",
    offers: [
      {
        name: "Google Map Optimization — Foundation Package",
        url: `${SITE.url}/google-map-optimization`,
        price: "35000",
        priceCurrency: "LKR",
        description:
          "One-time Google Business Profile rebuild, Google Maps SEO Sri Lanka implementation, ranking signal build, citation alignment, review system installation, and full documentation.",
      },
    ],
  });

  const faqJsonLd = faqSchema(FAQS, {
    pageUrl: `${SITE.url}/google-map-optimization`,
  });

  return (
    <Layout>
      <SEO
        title="Google Map Optimization Sri Lanka | Google My Business SEO Services"
        description="Boost your local visibility with Google Map Optimization in Sri Lanka. Rank higher on Google Maps, optimize your Google My Business profile, get more calls, traffic & local leads."
        canonical="/google-map-optimization"
        keywords="google map optimization, google map optimization sri lanka, google maps seo sri lanka, google my business sri lanka, google business profile optimization, gmb optimization sri lanka, local 3-pack sri lanka, near me seo sri lanka, local seo sri lanka"
        jsonLd={[orgSchema(), websiteSchema(), svcSchema, faqJsonLd]}
      />

      <Breadcrumbs items={[{ label: "Google Map Optimization" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero py-20 sm:py-28">
        {/* Background video */}
        <video
          src={googleMapVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-hero via-hero/85 to-hero/40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-google-blue/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-10 h-[400px] w-[400px] rounded-full bg-google-red/15 blur-3xl"
          aria-hidden
        />
        {/* Google brand accent strip */}
        <div className="pointer-events-none absolute top-0 left-0 h-[3px] w-full" aria-hidden>
          <div className="flex h-full w-full">
            <div className="h-full flex-1 bg-google-blue" />
            <div className="h-full flex-1 bg-google-red" />
            <div className="h-full flex-1 bg-google-yellow" />
            <div className="h-full flex-1 bg-google-green" />
          </div>
        </div>

        <div className="container-tight relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-google-red" />
              Google Map Optimization · Sri Lanka
            </span>
            <h1 className="mt-7 max-w-2xl font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl">
              Rank #1 on{" "}
              <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
                Google Maps
              </span>{" "}
              <span className="text-white/50">&</span> get more local customers.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              If your business is not showing on Google Maps when customers search, you are losing
              leads every day. Our <strong className="font-semibold text-white">Google Map Optimization
              Sri Lanka</strong> service ranks you in the Local 3-Pack — driving calls, foot traffic,
              and high-intent customers without ads.
            </p>
            <p className="mt-4 max-w-xl text-sm font-medium text-white/55">
              This is not traditional SEO. <span className="text-accent">This is Google Maps dominance.</span>
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact-us">Book a Discovery Call</Link>
              </Button>
              <a
                href="#investment"
                className="text-sm font-medium text-white/60 underline-offset-4 hover:text-accent hover:underline"
              >
                See the one-time investment ↓
              </a>
            </div>
          </div>

          {/* Mock Google Maps 3-Pack card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-google-blue/30 via-transparent to-google-red/20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-google-red" />
                <span className="size-2.5 rounded-full bg-google-yellow" />
                <span className="size-2.5 rounded-full bg-google-green" />
                <div className="ml-3 flex-1 truncate rounded-full border border-border bg-soft px-3 py-1 text-[11px] text-muted-foreground">
                  <span className="font-medium text-foreground">google.com/maps</span>
                  <span className="ml-1">— "best dentist in Colombo"</span>
                </div>
              </div>
              <div className="bg-soft p-3">
                <p className="px-1.5 pb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Local 3-Pack · Colombo
                </p>
                {[
                  { rank: "1", name: "Your Business · SeoFX optimised", rating: "4.9", reviews: "248", live: true },
                  { rank: "2", name: "Competitor A", rating: "4.6", reviews: "112", live: false },
                  { rank: "3", name: "Competitor B", rating: "4.4", reviews: "87", live: false },
                ].map((b) => (
                  <div
                    key={b.rank}
                    className={
                      "flex items-start gap-3 rounded-lg border-b border-border/60 bg-white p-3 last:border-b-0 " +
                      (b.live ? "ring-2 ring-google-blue/40" : "")
                    }
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-google-red text-xs font-bold text-white">
                      <MapPin className="size-4" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-semibold text-foreground">{b.name}</p>
                        {b.live && (
                          <span className="shrink-0 rounded-full bg-google-green/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-google-green">
                            #1
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                        <span className="font-semibold text-foreground">{b.rating}</span>
                        <Star className="size-3 fill-google-yellow text-google-yellow" aria-hidden />
                        <span>({b.reviews})</span>
                        <span className="mx-1.5 text-border">·</span>
                        <span>Dental clinic · Open now</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS GOOGLE MAP OPTIMIZATION */}
      <section className="border-b border-border bg-soft py-20 sm:py-24">
        <div className="container-tight max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            What is Google Map Optimization?
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            The discipline of ranking your business in the Google Maps Local 3-Pack.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <strong className="font-semibold text-foreground">Google Map Optimization</strong> is the
            process of improving your Google Business Profile to rank higher on Google Maps. When
            someone in Sri Lanka searches for:
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {['"restaurant near me"', '"dentist Colombo"', '"salon Sri Lanka"'].map((q) => (
              <div
                key={q}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
              >
                <Search className="size-4 shrink-0 text-google-blue" aria-hidden />
                <span className="text-sm font-medium text-foreground">{q}</span>
              </div>
            ))}
          </div>

          <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Google shows the top 3 businesses — the{" "}
            <strong className="font-semibold text-foreground">Local 3-Pack</strong>. If you are not
            there, your competitors get the customer. Our Google Map Optimization Sri Lanka service
            ensures your business appears where it matters most.
          </p>
        </div>
      </section>

      {/* WHY CRITICAL IN SRI LANKA */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-tight">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Why this matters in Sri Lanka
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Google Map Optimization is critical in Sri Lanka.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ranking on Google Maps in Sri Lanka equals direct revenue. Here's why every local
              business needs this — now.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {WHY_CRITICAL.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-card"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-google-blue/10">
                    <w.icon className="size-6 text-google-blue" aria-hidden />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-foreground">{w.stat}</div>
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-soft py-20 sm:py-24">
        <div className="container-tight">
          <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Our process
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Our Google Map Optimization Sri Lanka process.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Five focused stages. Built once, correctly. Designed to rank — and keep ranking — in
              the Google Maps Local 3-Pack for your category and city.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {PROCESS.map((p) => (
              <div
                key={p.n}
                className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-card"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-google-blue">
                    Step {p.n}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <ul className="mt-5 space-y-2.5">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-google-green" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-hero py-20 sm:py-24">
        <div className="container-tight max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
              What you get
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Everything required to dominate Google Maps in your city.
            </h2>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_YOU_GET.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-white/80"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO NEEDS IT */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-tight">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Who needs Google Map Optimization?
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              If customers search for your service locally — you need this.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              This service is essential for every Sri Lankan business serving a local market.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {WHO.map((w) => (
              <div
                key={w.type}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-card"
              >
                <w.icon className="size-7 text-google-blue" aria-hidden />
                <h3 className="mt-4 font-display text-sm font-bold text-foreground">{w.type}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES + REAL SEARCH TERMS */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-tight">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Industry-specific search demand
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Google Map Optimization Sri Lanka for Every Industry
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              These are the exact searches your future customers are typing into Google right now. If your business is not in the top 3, someone else is taking the call.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_SEARCHES.map((ind) => (
              <article
                key={ind.name}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
              >
                {/* Google color accent bar */}
                <div className="absolute left-0 top-0 h-[3px] w-full overflow-hidden rounded-t-2xl flex">
                  <div className="h-full flex-1 bg-google-blue" />
                  <div className="h-full flex-1 bg-google-red" />
                  <div className="h-full flex-1 bg-google-yellow" />
                  <div className="h-full flex-1 bg-google-green" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-google-blue/10">
                    <ind.icon className="size-5 text-google-blue" aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{ind.name}</h3>
                </div>

                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  What people search on Google
                </p>
                <ul className="mt-2 space-y-1.5">
                  {ind.searches.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Search className="mt-0.5 size-3.5 shrink-0 text-google-blue" aria-hidden />
                      <span className="italic text-muted-foreground">"{s}"</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-lg border-l-2 border-google-green bg-soft px-3 py-2.5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-google-green">
                    Why it matters
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-foreground">{ind.why}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-soft p-8 text-center">
            <p className="font-display text-lg font-bold text-foreground">
              Don't see your industry?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              If your customers search locally on Google, Google Map Optimization will work for you.
            </p>
            <Button asChild className="mt-5">
              <Link to="/contact">
                Talk to a consultant <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      <section className="bg-soft py-20 sm:py-24">
        <div className="container-tight max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Side by side
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Google Map Optimization vs Traditional SEO
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Two completely different disciplines. One delivers local customers today.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid grid-cols-2 border-b border-border bg-soft">
              <div className="p-5 sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-google-blue">
                  Google Map Optimization
                </p>
                <p className="mt-1 font-display text-base font-bold text-foreground sm:text-lg">
                  Local domination
                </p>
              </div>
              <div className="border-l border-border p-5 sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  Traditional SEO
                </p>
                <p className="mt-1 font-display text-base font-bold text-foreground sm:text-lg">
                  Broad search
                </p>
              </div>
            </div>
            {COMPARE.map((c, i) => (
              <div
                key={c.gmo}
                className={
                  "grid grid-cols-2 " +
                  (i < COMPARE.length - 1 ? "border-b border-border" : "")
                }
              >
                <div className="flex items-start gap-3 p-5 text-sm text-foreground sm:p-6">
                  <Check className="mt-0.5 size-4 shrink-0 text-google-green" aria-hidden />
                  <span className="font-medium">{c.gmo}</span>
                </div>
                <div className="border-l border-border p-5 text-sm text-muted-foreground sm:p-6">
                  {c.seo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-tight">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Why SeoFX
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Why choose our Google Map Optimization Sri Lanka service?
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {WHY_US.map((w) => (
              <div
                key={w.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-card"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-google-blue/10">
                  <w.icon className="size-5 text-google-blue" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="investment" className="bg-hero py-20 sm:py-24">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
              The investment
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Pay once. Rank for years.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/45">
              No retainer. No monthly fee. No lock-in. One investment, one focused engagement, a
              Google Maps presence that compounds in value every day after.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl bg-card shadow-elegant">
            <div className="grid items-center gap-8 border-b border-border bg-hero p-9 sm:p-12 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white/35">
                  SeoFX Local Search Consultancy
                </p>
                <h3 className="mt-2.5 font-display text-2xl font-extrabold text-white sm:text-3xl">
                  The Foundation Package
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/45">
                  Everything a Sri Lankan business needs to establish dominant, lasting Google Maps
                  visibility — done once, done correctly.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-accent">
                  <Check className="size-3.5" /> One-Time Investment · No Monthly Fees
                </span>
              </div>
              <div className="lg:text-right">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/35">
                  One-time investment from
                </p>
                <p className="mt-1 font-display text-5xl font-extrabold text-white">
                  <span className="text-2xl align-top font-semibold">LKR </span>35,000
                </p>
                <p className="mt-1.5 text-xs text-white/35">
                  No monthly fees · No retainer · No surprises
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-5 border-t border-border bg-soft px-9 py-7 sm:px-12">
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">
                  Ready to rank on Google Maps?
                </strong>{" "}
                Book a 20-minute discovery call. We review your current position and confirm this
                is the right fit.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact-us">
                  Book Discovery Call <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-tight">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            How long does it take?
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            How long does Google Map Optimization take?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Timing depends on competition in your city and category — but here is the typical path
            for Sri Lankan businesses.
          </p>

          <div className="relative mt-14 border-l border-border pl-8 sm:pl-10">
            {TIMELINE.map((t, i) => (
              <div key={t.title} className={i < TIMELINE.length - 1 ? "pb-12" : ""}>
                <span
                  className="absolute -left-2 mt-1 inline-block size-4 rounded-full border-[1.5px] border-google-blue bg-background"
                  aria-hidden
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-google-blue">
                  {t.when}
                </p>
                <h4 className="mt-2 font-display text-xl font-bold text-foreground">{t.title}</h4>
                <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="bg-soft py-20 sm:py-24">
        <div className="container-tight max-w-3xl">
          <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-primary">
            Frequently asked
          </p>
          <h2 className="mt-4 text-center font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Google Map Optimization Sri Lanka FAQs
          </h2>

          <div className="mt-12 space-y-4">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-card p-6 open:shadow-card"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-base font-bold text-foreground">
                  {f.q}
                  <span className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-hero py-24 text-center sm:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
          aria-hidden
        />
        {/* Google brand accent strip */}
        <div className="pointer-events-none absolute top-0 left-0 h-[3px] w-full" aria-hidden>
          <div className="flex h-full w-full">
            <div className="h-full flex-1 bg-google-blue" />
            <div className="h-full flex-1 bg-google-red" />
            <div className="h-full flex-1 bg-google-yellow" />
            <div className="h-full flex-1 bg-google-green" />
          </div>
        </div>
        <div className="container-tight relative max-w-3xl">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Ready to rank on{" "}
            <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
              Google Maps?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
            Your competitors are already investing in Google Map Optimization. Every day you delay
            equals lost customers. Get your business ranked on Google Maps today and dominate local
            search in Sri Lanka.
          </p>

          <div className="mt-12">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/30">
              One-time investment from
            </p>
            <p className="mt-2 font-display text-6xl font-extrabold text-white sm:text-7xl">
              LKR 35,000
            </p>
            <p className="mt-2 text-sm text-white/30">
              One-time investment · Lifetime of results · Zero monthly fees
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3.5">
            <Button asChild size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90">
              <Link to="/contact-us">Book a Consultation Now →</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href={`mailto:${SITE.email}`}>Send us a message</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GoogleMapOptimization;
