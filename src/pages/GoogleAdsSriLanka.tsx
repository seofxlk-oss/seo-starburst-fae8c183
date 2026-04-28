import { Link } from "react-router-dom";
import {
  Target,
  Zap,
  Wallet,
  SlidersHorizontal,
  BarChart3,
  Globe2,
  Check,
  X,
  ArrowRight,
  Phone,
  AlertTriangle,
  Info,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { orgSchema, websiteSchema, serviceSchema, faqSchema } from "@/lib/schema";

const WHY_CARDS = [
  { icon: Target, title: "Pure intent targeting", body: "Your ad is shown only to people actively searching for your exact product or service — not random audiences with passing interest." },
  { icon: Zap, title: "Instant top placement", body: "Appear above all organic results within 48 hours of launch — including above competitors who have done SEO for years." },
  { icon: Wallet, title: "Pay only per click", body: "You're charged only when someone clicks. Zero spend on impressions. Every rupee tracks to a real visit." },
  { icon: SlidersHorizontal, title: "Full budget control", body: "Set a daily maximum budget. Google never charges more than your cap. Pause or stop any time — no long contracts." },
  { icon: BarChart3, title: "Measurable ROI", body: "Every click, call, form submission and sale is tracked. You see which keywords generate revenue — and which don't." },
  { icon: Globe2, title: "Local & national reach", body: "Target by city (Colombo, Kandy, Galle), district, or all of Sri Lanka. Reach Sri Lankans abroad searching for local services too." },
];

const COMPARE = [
  { factor: "Time to results", ads: "24–48 hours", seo: "3–6 months minimum", winner: "ads" },
  { factor: "Top of Google placement", ads: "Guaranteed (while paying)", seo: "Earned over time — not guaranteed", winner: "ads" },
  { factor: "Cost per visitor", ads: "Rs. 50–250 per click", seo: "Free once ranking is established", winner: "seo" },
  { factor: "Stops when you pause", ads: "Yes — traffic stops immediately", seo: "No — rankings persist", winner: "seo" },
  { factor: "Budget control", ads: "Set your own daily cap", seo: "Monthly agency retainer (ongoing)", winner: "ads" },
  { factor: "Targeting precision", ads: "Exact keyword, location, device, time", seo: "Broader — rank for many queries", winner: "ads" },
  { factor: "Long-term cost", ads: "Ongoing spend required", seo: "Lower cost over time", winner: "seo" },
  { factor: "Best use case", ads: "Immediate leads & bridging while SEO grows", seo: "Sustainable long-term organic growth", winner: "both" },
];

const PROCESS = [
  { n: "01", title: "Discovery & goal setting (Day 1)", body: "We learn your business, target customers in Sri Lanka, geographic focus (Colombo, Kandy, island-wide) and what a conversion means to you — call, form, sale or walk-in. We define KPIs before spending a single rupee." },
  { n: "02", title: "Sri Lanka keyword research & competitor audit (Days 1–2)", body: "We identify every high-intent keyword your ideal Sri Lankan customer uses. We audit competitor bids, find keyword gaps, and build a negative keyword list to block budget waste." },
  { n: "03", title: "Ad copy creation & landing page optimisation (Days 2–3)", body: "We write multiple ad variations tested for Sri Lankan market language and intent. We review your landing page and advise on improvements to maximise conversion." },
  { n: "04", title: "Campaign build & launch (Day 3–4)", body: "Tightly themed ad groups, bid strategies, location targeting and conversion tracking (calls, forms, purchases) are configured and tested. Your ads go live within hours." },
  { n: "05", title: "Weekly optimisation (Ongoing)", body: "Every week we review search term reports, pause underperforming keywords, raise bids on high-converters, test new ad copy and refine negative keywords. This is what separates ROI from waste." },
  { n: "06", title: "Monthly reporting & SEO handoff (Ongoing)", body: "Clear monthly reports — clicks, impressions, conversions, cost-per-lead, spend breakdown. As SEO earns rankings, we reduce ad spend on those keywords — progressively cutting your cost." },
];

const CPC_RANGES = [
  { industry: "Professional services (law, accounting, consulting)", range: "Rs. 100–300 per click" },
  { industry: "Healthcare & dental", range: "Rs. 80–200 per click" },
  { industry: "Education & tuition classes", range: "Rs. 50–150 per click" },
  { industry: "E-commerce products", range: "Rs. 40–120 per click" },
  { industry: "Real estate", range: "Rs. 150–400 per click" },
  { industry: "Restaurants & hospitality", range: "Rs. 30–80 per click" },
];

const INDUSTRIES = [
  "🏥 Healthcare & Clinics", "🏠 Real Estate", "📚 Education & Tuition", "🛒 E-Commerce",
  "⚖️ Legal Services", "🏨 Hotels & Tourism", "🍽️ Restaurants", "💻 IT & Software",
  "🔧 Home Services", "💄 Beauty & Wellness", "🏗️ Construction", "📦 Logistics",
];

const PACKAGES = [
  {
    name: "Starter",
    tagline: "Ideal for small Sri Lankan businesses launching their first Google Ads campaign.",
    price: "Rs. 45,000",
    period: "/month management",
    note: "+ ad spend (paid directly to Google)",
    features: [
      "Single campaign setup & launch",
      "Up to 3 ad groups",
      "Sri Lanka keyword research",
      "Conversion tracking install",
      "Weekly optimisation",
      "Monthly performance report",
    ],
    featured: false,
  },
  {
    name: "Growth",
    tagline: "For established businesses ready to scale leads and revenue with Google Ads Sri Lanka.",
    price: "Rs. 75,000",
    period: "/month management",
    note: "+ ad spend (paid directly to Google)",
    features: [
      "Up to 3 campaigns",
      "Up to 8 ad groups",
      "Advanced keyword & competitor research",
      "Custom landing page advice",
      "Call tracking + form tracking",
      "Weekly optimisation & A/B testing",
      "Detailed monthly ROI report",
    ],
    featured: true,
  },
  {
    name: "Scale",
    tagline: "Multi-location or high-spend businesses competing for top keywords nationally.",
    price: "Rs. 120,000+",
    period: "/month management",
    note: "+ ad spend (paid directly to Google)",
    features: [
      "Unlimited campaigns",
      "Geo-targeted city campaigns",
      "Remarketing campaigns",
      "Conversion-focused landing page audit",
      "Bi-weekly strategy calls",
      "Daily monitoring & optimisation",
      "Custom dashboards & reporting",
    ],
    featured: false,
  },
];

const FAQS = [
  { q: "How much does Google Ads cost in Sri Lanka?", a: "Google Ads costs in Sri Lanka depend on your industry and keywords. Average cost-per-click ranges from Rs. 50 for low-competition local searches to Rs. 400 for highly competitive professional services keywords. You set your own daily budget — Google never charges more than your cap. SeoFX management fees start from Rs. 45,000 per month, which covers campaign setup, weekly optimisation, and monthly reporting. Your ad spend is paid separately and directly to Google." },
  { q: "How quickly can I appear at the top of Google with Google Ads?", a: "Once your campaign is built and approved by Google (typically 24–48 hours after submission), your ads begin appearing in Google Search results. Unlike SEO which takes months, Google Ads gives you immediate top-of-page visibility. SeoFX can have your campaign live within 48 hours of onboarding." },
  { q: "What is the minimum budget for Google Ads in Sri Lanka?", a: "There is no official minimum budget set by Google. In practice, we recommend a minimum daily budget of Rs. 1,500–3,000 (approximately Rs. 45,000–90,000 per month in ad spend) to generate meaningful data and results. Very low budgets tend to run out early in the day, limiting your visibility. We help you choose a budget that is realistic for your industry's competition level." },
  { q: "What is the difference between Google Ads and SEO?", a: "SEO (Search Engine Optimisation) earns you free organic rankings that appear below ads — but takes 3–6 months to achieve. Google Ads places your business above organic results immediately, but requires ongoing payment per click. SEO builds a long-term, free traffic asset. Google Ads provides immediate, controllable, paid traffic. Most successful Sri Lankan businesses use both — Ads for immediate leads, SEO for long-term cost reduction." },
  { q: "Can I target specific cities in Sri Lanka with Google Ads?", a: "Yes. Google Ads allows precise geographic targeting. You can target all of Sri Lanka, specific provinces, specific cities (Colombo, Kandy, Galle, Jaffna, Negombo, etc.), or even a radius around your business location. This means your budget is only spent reaching people in the areas you actually serve." },
  { q: "Do I need a website to run Google Ads in Sri Lanka?", a: "Yes, you need a landing page for people to visit after clicking your ad. This can be your existing website or a specific landing page we help you set up. The landing page is critical — a poorly designed page wastes your ad budget even if the ads themselves perform well. SeoFX reviews and advises on your landing page as part of our campaign setup." },
  { q: "What happens to my traffic if I stop Google Ads?", a: "When you pause or stop Google Ads, your paid traffic stops immediately. This is the key limitation of PPC advertising — it does not build a permanent asset the way SEO does. This is exactly why SeoFX always recommends running Google Ads alongside SEO. As your organic rankings grow and you receive free traffic from SEO, you can progressively reduce your ad spend without losing overall visibility." },
  { q: "Is Google Ads worth it for small businesses in Sri Lanka?", a: "Yes — when managed correctly. Google Ads levels the playing field. A small local business in Colombo can appear above a large national competitor if their ad and landing page are more relevant to the searcher's query. The key is proper keyword selection, tight targeting, and continuous optimisation — which is exactly what SeoFX provides. We have successfully run profitable Google Ads campaigns for businesses with budgets starting from Rs. 45,000 per month in ad spend." },
];

const GoogleAdsSriLanka = () => {
  const pageUrl = `${SITE.url}/google-ads-sri-lanka`;

  const svcSchema = serviceSchema({
    name: "Google Ads Sri Lanka",
    description:
      "Professional Google Search Ads management for Sri Lankan businesses. Instant top-of-Google placement while your SEO grows. Pay only per click. Management from Rs. 45,000/month.",
    url: pageUrl,
    serviceType: "Google Ads Management & PPC",
    offers: [
      { name: "Google Ads Sri Lanka — Starter", url: pageUrl, price: "45000", priceCurrency: "LKR", description: "Single campaign setup, up to 3 ad groups, weekly optimisation and monthly reporting. Ad spend paid separately to Google." },
      { name: "Google Ads Sri Lanka — Growth", url: pageUrl, price: "75000", priceCurrency: "LKR", description: "Up to 3 campaigns, advanced research, call & form tracking, weekly optimisation and detailed ROI reports." },
      { name: "Google Ads Sri Lanka — Scale", url: pageUrl, price: "120000", priceCurrency: "LKR", description: "Unlimited campaigns, geo-targeted city campaigns, remarketing, daily monitoring and bi-weekly strategy calls." },
    ],
  });

  const faqJsonLd = faqSchema(FAQS, { pageUrl });

  return (
    <Layout>
      <SEO
        title="Google Ads Sri Lanka | Google Ads Sri Lanka Management | SeoFX"
        description="Google Ads Sri Lanka experts — get to the top of Google instantly. Professional Google Ads Sri Lanka management from Rs. 45,000/month. Pay only per click. Free strategy call."
        canonical="/google-ads-sri-lanka"
        keywords="Google Ads Sri Lanka, Google Search Ads Sri Lanka, PPC Sri Lanka, pay per click Sri Lanka, Google Ads agency Sri Lanka, Google advertising Sri Lanka, SEM Sri Lanka, Google Ads Colombo, Google Ads management Sri Lanka"
        jsonLd={[orgSchema(), websiteSchema(), svcSchema, faqJsonLd]}
      />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Google Ads Sri Lanka" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero py-20 sm:py-28">
        <div
          className="pointer-events-none absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-google-blue/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-10 h-[400px] w-[400px] rounded-full bg-google-red/15 blur-3xl"
          aria-hidden
        />
        <div className="pointer-events-none absolute top-0 left-0 h-[3px] w-full" aria-hidden>
          <div className="flex h-full w-full">
            <div className="h-full flex-1 bg-google-blue" />
            <div className="h-full flex-1 bg-google-red" />
            <div className="h-full flex-1 bg-google-yellow" />
            <div className="h-full flex-1 bg-google-green" />
          </div>
        </div>

        <div className="container-tight relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-google-red" />
            🇱🇰 Serving Sri Lanka — Since 2018
          </span>
          <h1 className="mt-7 max-w-4xl font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
              Google Ads Sri Lanka
            </span>{" "}
            — Appear at the Top of Google Today
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Sri Lanka's most trusted Google Search Ads agency. Get your business to position #1 on Google within
            48 hours — while your SEO grows in the background. Pay only per click. No wasted budget.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-white text-hero hover:bg-white/90">
              <Link to="/contact-us">Get a Free Strategy Call <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT IS */}
      <section className="py-20">
        <div className="container-tight max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">What Is Google Ads?</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Google Ads Sri Lanka: The Fastest Way to Reach Customers Searching Right Now
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p>
              Every day, hundreds of thousands of Sri Lankans search Google for products and services. Whether
              someone in Colombo is searching for "best accountant near me", a business owner in Kandy is looking
              for a "digital marketing agency", or a homeowner in Galle needs "interior design services Sri Lanka"
              — they are all on Google, right now, with their wallet ready.
            </p>
            <p>
              <strong className="text-foreground">Google Ads Sri Lanka</strong> is an online advertising platform
              that lets your business appear at the very top of those search results — above all organic listings
              — the moment someone searches for what you offer. Unlike traditional advertising, you only pay when
              a real person actually clicks your ad. This model is called <strong className="text-foreground">Pay-Per-Click (PPC)</strong>.
            </p>
            <p>
              At SeoFX, we specialise exclusively in <strong className="text-foreground">Google Search Ads</strong> —
              the type that places text ads on Google's search results page. We focus on search (not display banners
              or YouTube) because search ads target buyers at the exact moment of intent.
            </p>
          </div>
          <div className="mt-8 rounded-r-xl border-l-4 border-primary bg-primary/5 p-5">
            <p className="text-sm text-foreground">
              <strong>Why Google Search Ads and not Display or Social Ads?</strong> Display ads interrupt people
              while they browse. Social ads interrupt while they scroll. Search ads appear only when someone is
              actively looking for your product or service. This is why Google Search Ads consistently deliver the
              highest conversion rates of any digital advertising format for Sri Lankan businesses.
            </p>
          </div>
          <p className="mt-6 text-muted-foreground">
            Google Search Ads are especially powerful as a complement to your existing SEO strategy. SEO is a
            long-term investment — it takes 3 to 6 months to start ranking organically. During that period, your
            competitors who already rank are capturing every customer searching for your service.{" "}
            <strong className="text-foreground">Google Ads fills that gap instantly.</strong>
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-muted/40 py-20">
        <div className="container-tight">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Why Google Ads in Sri Lanka?</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Sri Lanka Has a Search-First Culture — Your Business Needs to Be There
            </h2>
            <p className="mt-5 text-muted-foreground">
              Over <strong className="text-foreground">70% of Sri Lankans</strong> use smartphones and Google is by
              far the dominant search engine. If your business is not appearing on Google when potential customers
              search, you are handing those customers directly to your competitors.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CARDS.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="py-20">
        <div className="container-tight max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Google Ads vs SEO Sri Lanka</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Google Ads vs SEO: Which One Does Your Sri Lankan Business Need?
          </h2>
          <p className="mt-5 text-muted-foreground">
            The honest answer: <strong className="text-foreground">you need both, but at different times and for different purposes.</strong>
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-hero text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold">Google Search Ads</th>
                  <th className="px-4 py-3 text-left font-semibold">Organic SEO</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="px-4 py-3 font-semibold text-foreground">{row.factor}</td>
                    <td className={`px-4 py-3 text-muted-foreground ${row.winner === "ads" ? "bg-primary/5" : ""}`}>
                      <span className="inline-flex items-start gap-1.5">
                        {row.winner === "ads" ? <Check className="mt-0.5 size-4 flex-shrink-0 text-google-green" /> :
                         row.winner === "seo" ? <X className="mt-0.5 size-4 flex-shrink-0 text-google-red" /> : null}
                        <span>{row.ads}</span>
                      </span>
                    </td>
                    <td className={`px-4 py-3 text-muted-foreground ${row.winner === "seo" ? "bg-primary/5" : ""}`}>
                      <span className="inline-flex items-start gap-1.5">
                        {row.winner === "seo" ? <Check className="mt-0.5 size-4 flex-shrink-0 text-google-green" /> :
                         row.winner === "ads" ? <X className="mt-0.5 size-4 flex-shrink-0 text-google-red" /> : null}
                        <span>{row.seo}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-muted-foreground">
            <strong className="text-foreground">The SeoFX approach:</strong> We run your Google Ads Sri Lanka
            campaign to generate immediate leads from day one. Simultaneously, our SEO team builds your organic
            rankings. As SEO ranks you for a keyword organically, we reduce or stop ad spend on that keyword —
            your cost of acquisition drops, but your traffic does not.
          </p>
        </div>
      </section>

      {/* PPC EXPLAINED */}
      <section className="bg-muted/40 py-20">
        <div className="container-tight max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Understanding Pay-Per-Click</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            How Pay-Per-Click (PPC) Works in Sri Lanka — The Honest Explanation
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p>
              Google Ads operates on a <strong className="text-foreground">Pay-Per-Click (PPC)</strong> model. When
              you run a Google Search Ad, your ad enters an auction every time a relevant search is made. Google
              considers your bid, your Quality Score, and expected click-through rate. The winner gets the top
              position. You're charged only when someone clicks.
            </p>
          </div>

          <h3 className="mt-10 font-display text-xl font-bold text-foreground">How much do clicks cost in Sri Lanka?</h3>
          <p className="mt-3 text-muted-foreground">
            Cost-per-click (CPC) in Sri Lanka is significantly lower than Western markets. Typical ranges by industry:
          </p>
          <ul className="mt-5 space-y-2.5">
            {CPC_RANGES.map((c) => (
              <li key={c.industry} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">{c.industry}:</strong> {c.range}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-r-xl border-l-4 border-destructive bg-destructive/5 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 size-5 flex-shrink-0 text-destructive" />
              <p className="text-sm text-foreground">
                <strong className="text-destructive">Important limitation:</strong> Unlike SEO, where ranking is free
                once established, Google Ads requires ongoing spend. The moment you stop paying, your ads stop showing
                and traffic drops immediately. This is why we always recommend running Google Ads alongside SEO — not
                instead of it.
              </p>
            </div>
          </div>

          <h3 className="mt-10 font-display text-xl font-bold text-foreground">Daily budget caps — you are always in control</h3>
          <p className="mt-3 text-muted-foreground">
            You set a maximum daily budget. Google will never charge you more than this amount per day. For example,
            if you set a Rs. 3,000 daily budget, your maximum monthly spend is approximately Rs. 90,000 — but you'll
            likely spend less on quieter days. You can adjust, pause or stop the campaign at any time.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how-it-works" className="py-20">
        <div className="container-tight max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Process</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            How SeoFX Runs Your Google Ads Campaign in Sri Lanka
          </h2>
          <p className="mt-5 text-muted-foreground">
            We manage everything — from initial research to ongoing weekly optimisation. Here is exactly what we do:
          </p>

          <div className="mt-12 space-y-6">
            {PROCESS.map((s) => (
              <div key={s.n} className="flex gap-5 rounded-2xl border border-border bg-card p-6">
                <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-muted/40 py-20">
        <div className="container-tight">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Google Ads Sri Lanka Packages</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Transparent Google Ads Management Pricing
            </h2>
            <p className="mt-5 text-muted-foreground">
              All packages include campaign setup, weekly optimisation, conversion tracking and monthly reporting.
              Ad spend is paid directly to Google and is separate from management fees.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col overflow-hidden rounded-2xl border bg-card ${
                  p.featured ? "border-primary shadow-xl ring-2 ring-primary" : "border-border"
                }`}
              >
                <div className="border-b border-border p-6">
                  {p.featured && (
                    <span className="mb-3 inline-block rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                </div>
                <div className="border-b border-border bg-muted/30 p-6">
                  <div className="text-3xl font-extrabold text-foreground">
                    {p.price}
                    <span className="ml-1 text-sm font-normal text-muted-foreground">{p.period}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{p.note}</p>
                </div>
                <ul className="flex-1 space-y-3 p-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 flex-shrink-0 text-google-green" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full" variant={p.featured ? "default" : "outline"}>
                    <Link to="/contact-us">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20">
        <div className="container-tight max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Industries We Serve</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Google Ads Sri Lanka — Industries We Specialise In
          </h2>
          <p className="mt-5 text-muted-foreground">
            We've run Google Ads campaigns for businesses across every major industry in Sri Lanka.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {INDUSTRIES.map((i) => (
              <div key={i} className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">
                {i}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-r-xl border-l-4 border-primary bg-primary/5 p-5">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 size-5 flex-shrink-0 text-primary" />
              <p className="text-sm text-foreground">
                Don't see your industry?{" "}
                <Link to="/contact-us" className="font-semibold text-primary underline">
                  Contact us
                </Link>{" "}
                — we manage Google Ads campaigns across virtually every business category in Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-20">
        <div className="container-tight max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Frequently Asked Questions</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Google Ads Sri Lanka — Common Questions Answered
          </h2>

          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="group rounded-xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden"
                id={`faq-${i + 1}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                  <span>{f.q}</span>
                  <span className="text-2xl font-light text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero py-20 text-center">
        <div className="container-tight max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to Appear at the Top of Google in Sri Lanka?
          </h2>
          <p className="mt-5 text-white/75">
            Stop losing customers to competitors who are already running Google Ads. Get a free, no-obligation
            strategy call with our Sri Lanka Google Ads team.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-hero hover:bg-white/90">
              <Link to="/contact-us">Book Your Free Strategy Call <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href={`tel:${SITE.phoneRaw}`}><Phone className="mr-2 size-4" /> {SITE.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GoogleAdsSriLanka;
