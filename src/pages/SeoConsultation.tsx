import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Building2,
  Code2,
  Megaphone,
  Search,
  Map,
  Target,
  PencilLine,
  Settings,
  MapPin,
  BarChart3,
  Handshake,
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lock,
  Star,
  TrendingUp,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE } from "@/lib/site";
import { orgSchema, websiteSchema, faqSchema } from "@/lib/schema";

const WHO = [
  {
    icon: Building2,
    accent: "bg-amber-400",
    title: "Businesses Building or Rebuilding a Website",
    body:
      "You're investing Rs. 300,000 – Rs. 1,500,000 in a new website. You want it to bring in customers. Without SEO consultation first, most of that investment will produce a site that looks beautiful — but ranks nowhere on Google.",
    extra:
      "You won't know what went wrong for months. By then, your competitor has taken every keyword you needed.",
    painLabel: "What you lose without consultation",
    pain:
      "Months of wasted traffic, rebuild costs, and a competitor who owns your market while you were waiting for rankings that never came.",
  },
  {
    icon: Code2,
    accent: "bg-emerald-500",
    title: "Web Development Agencies",
    body:
      "Your clients pay you to build websites. But if the site doesn't rank on Google, they will eventually blame you — even if SEO was never part of the brief. Adding SeoFX SEO consultation to every project protects your reputation and your clients' results.",
    extra:
      "It also gives you a powerful new service to upsell — and a reason clients stay loyal.",
    painLabel: "What happens without consultation",
    pain:
      "Your client's beautiful new site gets no traffic. They're disappointed. They don't renew. They tell others it \"didn't work.\" Your agency's reputation suffers.",
  },
  {
    icon: Megaphone,
    accent: "bg-emerald-700",
    title: "Marketing & Digital Agencies",
    body:
      "You're running paid ads, social media, and email campaigns — but sending traffic to a website that isn't optimised for conversion or search. Your campaigns work. The website lets them down. Every rupee spent on ads is less effective than it should be.",
    extra:
      "SEO consultation makes everything you do for your clients more effective.",
    painLabel: "What you're leaving on the table",
    pain:
      "Higher client ad spend to compensate for poor organic rankings. Higher cost per lead. Clients who eventually wonder why organic traffic never grew despite their investment with you.",
  },
];

const MISTAKES = [
  {
    n: "01",
    title: "Wrong URL Structure",
    body:
      "Your developer chose URLs that make sense to them — not to Google. Changing URLs after launch breaks all existing links and rankings. Most agencies simply don't know the difference.",
    cost: "Fix cost: Full site redevelopment",
  },
  {
    n: "02",
    title: "No Keyword Research Before Content",
    body:
      "Pages were written about what you do — not what your customers search. You rank for searches nobody makes, and miss the searches that actually bring buyers.",
    cost: "Fix cost: Rewrite every page + months of recovery",
  },
  {
    n: "03",
    title: "Targeting the Wrong Market",
    body:
      "A Sri Lankan export business built their site for Sri Lankan visitors — but their buyers are in UK and Germany. Language, keywords, and technical targeting were all wrong from day one.",
    cost: "Fix cost: Rebuild international SEO architecture",
  },
  {
    n: "04",
    title: "Duplicate Content Built In",
    body:
      "Ecommerce sites with hundreds of product variations, or multi-location businesses — built without duplicate content planning. Google penalises or ignores these pages.",
    cost: "Fix cost: Major technical restructure",
  },
  {
    n: "05",
    title: "Missing Site Structure",
    body:
      "No clear hierarchy of pages. Google doesn't know which pages are most important. Internal link authority is diluted across hundreds of equal-weight pages with no ranking signal.",
    cost: "Fix cost: Information architecture overhaul",
  },
  {
    n: "06",
    title: "Slow Technical Foundation",
    body:
      "Images not compressed, no caching configured, heavy plugins installed — all decisions made at build time that create Core Web Vitals failures. Google ranks fast sites higher. Always.",
    cost: "Fix cost: Technical developer time + re-testing",
  },
  {
    n: "07",
    title: "No Local SEO Setup",
    body:
      "A Colombo restaurant or salon built without Google Business Profile integration, local schema, or location-specific pages. Invisible in \"near me\" searches — where 80% of local buyers start.",
    cost: "Fix cost: Months rebuilding local authority",
  },
  {
    n: "08",
    title: "Competitor Already Owns Your Keywords",
    body:
      "You launched. You started trying to rank. You discovered your main competitor has 3 years of backlinks and content on every keyword you need. You're fighting from behind before you started.",
    cost: "Fix cost: Years of catch-up SEO investment",
  },
];

const DELIVERABLES = [
  {
    icon: Search,
    title: "Keyword Research & Opportunity Report",
    body:
      "The exact search terms your target customers use in Sri Lanka and globally. Organised by volume, difficulty, and business value — so every page you build targets a real search opportunity.",
  },
  {
    icon: Map,
    title: "Site Structure & URL Architecture Blueprint",
    body:
      "A complete map of every page your website needs, how they link together, and the exact URL structure that maximises Google's understanding of your site hierarchy.",
  },
  {
    icon: Target,
    title: "Competitor Gap Analysis",
    body:
      "We analyse your top 3–5 competitors in Sri Lanka to identify the exact keywords they rank for, the content gaps you can exploit, and where you can outrank them fastest.",
  },
  {
    icon: PencilLine,
    title: "Content Roadmap & Page Brief",
    body:
      "A detailed brief for every core page — what topic to cover, which keyword to target, what questions to answer, and what structure to use. Your web developer and copywriter follow this like a blueprint.",
  },
  {
    icon: Settings,
    title: "Technical SEO Requirements Document",
    body:
      "A specification document for your web developer covering Core Web Vitals requirements, schema markup needed, crawlability setup, mobile optimisation standards, and speed benchmarks.",
  },
  {
    icon: MapPin,
    title: "Local & International Targeting Strategy",
    body:
      "If you serve local Sri Lankan customers — Google Business Profile setup plan, local schema, and hyperlocal keyword targeting. If you target global buyers — hreflang strategy, international keyword mapping.",
  },
  {
    icon: BarChart3,
    title: "60-Day Post-Launch SEO Action Plan",
    body:
      "A step-by-step priority checklist for the first 60 days after your website launches — covering indexing, Google Search Console setup, initial link building, and content priorities.",
  },
  {
    icon: Handshake,
    title: "2-Hour Strategy Session with Your SEO Specialist",
    body:
      "A dedicated consultation call with your SeoFX specialist to walk through every deliverable, answer your team's questions, and brief your web developer directly on the SEO requirements.",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "You Book & Brief Us",
    body: "Fill in a short form about your business, target customers, and website goals. Takes 10 minutes.",
  },
  {
    n: "02",
    title: "We Research Your Market",
    body: "SeoFX analyses your keywords, competitors, industry, and target audience across Sri Lanka and your international markets.",
  },
  {
    n: "03",
    title: "Strategy Session",
    body: "2-hour call where we present every finding, answer every question, and brief your developer directly.",
    highlight: true,
  },
  {
    n: "04",
    title: "You Receive All Documents",
    body: "Full written deliverable pack sent within 5–7 days. Your team has a complete SEO blueprint to build from.",
  },
  {
    n: "05",
    title: "Build With Confidence",
    body: "Your developer builds to the spec. Your copywriter follows the content brief. Your site launches SEO-ready from day one.",
  },
];

const STATS = [
  { num: "5×", label: "More expensive to fix SEO after launch", ctx: "vs. planning correctly before building" },
  { num: "68%", label: "Of all online experiences start with a search engine", ctx: "Google is where your customers begin" },
  { num: "6–12", label: "Months lost when you rebuild after launch", ctx: "Google takes time to re-index changed sites" },
  { num: "92%", label: "Of searchers never go past page 1", ctx: "If you don't rank on page 1, you don't exist" },
  { num: "#1", label: "Position gets 27% of all clicks", ctx: "Position 2 gets 15%. Position 3 gets 11%." },
  { num: "Rs.0", label: "Cost per organic visit once you rank", ctx: "Unlike paid ads that stop when you stop paying" },
];

const FAQS = [
  {
    q: "My web developer says they handle SEO. Isn't that enough?",
    a: "Web developers handle technical implementation — coding, design, speed, and functionality. SEO consultants handle strategy — which keywords to target, how to structure content, how to beat competitors, and how to earn rankings. These are fundamentally different skills. A developer who says they do SEO typically means they install an SEO plugin. That is not the same as a strategy that gets you to page one of Google. You need both — a developer who builds well, and an SEO specialist who tells them what to build for.",
  },
  {
    q: "Can't I just do SEO after the website is launched?",
    a: "Yes — and many businesses do. But retrofitting SEO onto a live website is significantly more expensive, slower, and disruptive. Changing URL structures after launch breaks existing links and requires 301 redirects. Restructuring page architecture disrupts user experience. Rewriting content that was already indexed by Google takes months to recover. The work is the same — but when done after launch, it costs 3–5× more in time, money, and lost ranking momentum than doing it before a single page goes live.",
  },
  {
    q: "My website is already built. Is it too late for consultation?",
    a: "No — it is never too late. If your site is already live, we deliver an SEO audit and strategy session that functions as a consultation. We identify what needs to change, prioritise fixes by impact, and give your team a clear remediation roadmap. Many clients come to us after realising their site gets no organic traffic despite being live for months or years. The consultation pays for itself within the first improvement cycle.",
  },
  {
    q: "What does Rs. 50,000 actually include?",
    a: "The Rs. 50,000 package includes: a full keyword research report for your industry and target market, a site structure and URL blueprint your developer follows, a competitor gap analysis of your top 3–5 rivals, a content roadmap and page brief for every core page, a technical SEO specification document for your developer, a local or international targeting strategy depending on your market, a 60-day post-launch action plan, and a 2-hour live strategy session with your SeoFX specialist. Everything is delivered as written documents your team keeps and uses.",
  },
  {
    q: "We are a marketing agency. How does this work with our client projects?",
    a: "SeoFX can work directly with your agency as a specialist partner. We can white-label our deliverables under your brand, attend your client briefing calls, and work within your project timeline. Most agencies either pass the consultation cost to their client as a line item — or absorb it as a quality investment. Either way, the result is a better-performing client website and a stronger agency reputation. Contact us to discuss the agency partnership arrangement.",
  },
  {
    q: "How long does the consultation take to deliver?",
    a: "From booking to full delivery of all documents is typically 5–7 business days. The 2-hour strategy session is scheduled within that window at a time that suits your team. For agency clients with project deadlines, we offer an express 3-day delivery on request — contact us to confirm availability.",
  },
  {
    q: "Does SeoFX also offer ongoing SEO after the consultation?",
    a: "Yes. The consultation is the foundation. Many clients continue with SeoFX for ongoing monthly SEO — implementing the strategy, building backlinks, creating content, and monitoring rankings. Consultation clients get priority onboarding into our monthly packages. But there is no obligation — the consultation is a standalone deliverable and you are free to implement it with any team you choose.",
  },
];

const SeoConsultation = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Consultation Package Sri Lanka",
    description:
      "Professional SEO consultation for businesses, web development agencies, and marketing agencies in Sri Lanka before building or rebuilding websites.",
    provider: {
      "@type": "Organization",
      name: "SeoFX",
      url: "https://seofx.lk",
      telephone: SITE.phoneRaw,
    },
    areaServed: "LK",
    offers: {
      "@type": "Offer",
      price: "50000",
      priceCurrency: "LKR",
      name: "SEO Consultation Package",
    },
    url: "https://seofx.lk/seo-consultant-sri-lanka",
  };

  const faqJsonLd = faqSchema(FAQS);

  return (
    <Layout>
      <SEO
        title="SEO Consultant Sri Lanka – #1 SEO Consulting Services & Strategy"
        description="SEO consultant Sri Lanka offering SEO consulting services, audits, keyword research & ranking strategies to grow your business online. Get started today."
        canonical="/seo-consultant-sri-lanka"
        keywords="SEO consultant Sri Lanka, SEO consulting services Sri Lanka, SEO consultation Sri Lanka, SEO strategy Sri Lanka, SEO audit Sri Lanka, keyword research Sri Lanka, SEO before website, website SEO planning"
        jsonLd={[orgSchema(), websiteSchema(), serviceSchema, faqJsonLd]}
      />

      <Breadcrumbs items={[{ label: "SEO Consultation" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-gradient-radial opacity-60" aria-hidden />
        <div className="container-tight relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <AlertTriangle className="size-3.5" /> Critical Advice for Every Business in Sri Lanka
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Building a Website Without SEO is Like Building a{" "}
            <span className="text-red-300">House Without</span> an{" "}
            <span className="text-accent">Architect.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            You will spend millions. You will get something that looks finished. But the foundations
            will be wrong — and rebuilding costs 5× more than planning correctly from day one.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#package">See the Rs. 50,000 Consultation Package</a>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <a href="#who">Is This For You? ↓</a>
            </Button>
          </div>
          <p className="mt-6 text-xs text-white/55">
            For businesses, web development agencies & marketing companies in Sri Lanka
          </p>
        </div>
      </section>

      {/* GOOGLE SERP VIBE STRIP — matches sitewide Google look */}
      <section className="bg-soft py-12 sm:py-16">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-wide shadow-card">
              <span className="size-2 rounded-full bg-accent" />
              <span className="text-muted-foreground">What clients search before they find us</span>
            </div>
            <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight text-foreground sm:text-3xl md:text-4xl">
              Ranking #1 for{" "}
              <span className="text-gradient-accent">SEO Consultant Sri Lanka</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              SeoFX delivers professional <strong className="font-semibold text-foreground">SEO consulting services</strong>,
              audits, keyword research, and ranking strategies — built for businesses that want
              to grow online from day one.
            </p>
          </div>

          {/* Mocked Google SERP card */}
          <div className="relative mx-auto mt-10 max-w-3xl">
            <div className="pointer-events-none absolute -top-8 -left-6 h-32 w-32 rounded-full bg-accent/10 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl" aria-hidden />

            <div className="relative rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-lg)] sm:p-6">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-border pb-3">
                <span className="size-2.5 rounded-full bg-google-red" />
                <span className="size-2.5 rounded-full bg-google-yellow" />
                <span className="size-2.5 rounded-full bg-google-green" />
                <div className="ml-3 flex flex-1 items-center gap-2 truncate rounded-full bg-muted px-3 py-1.5 text-[10px] sm:text-xs text-muted-foreground min-w-0">
                  <span className="text-google-green">●</span>
                  <span className="truncate">google.lk/search?q=seo+consultant+sri+lanka</span>
                </div>
              </div>

              {/* SERP search bar mock */}
              <div className="mt-4 flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2.5">
                <span className="font-display text-lg font-extrabold leading-none">
                  <span className="text-google-blue">G</span>
                  <span className="text-google-red">o</span>
                  <span className="text-google-yellow">o</span>
                  <span className="text-google-blue">g</span>
                  <span className="text-google-green">l</span>
                  <span className="text-google-red">e</span>
                </span>
                <span className="h-5 w-px bg-border" />
                <span className="flex-1 truncate text-sm text-foreground">seo consultant sri lanka</span>
                <Search className="size-4 text-google-blue" />
              </div>

              {/* Result tabs */}
              <div className="mt-3 flex gap-5 border-b border-border pb-2 text-xs text-muted-foreground">
                <span className="border-b-2 border-google-blue pb-2 font-semibold text-google-blue">All</span>
                <span>Maps</span>
                <span>Images</span>
                <span>News</span>
                <span className="hidden sm:inline">Videos</span>
              </div>

              {/* #1 result — SeoFX Consultation */}
              <article className="mt-4 rounded-xl border border-google-blue/20 bg-google-blue/5 p-4">
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex size-6 items-center justify-center rounded-full bg-gradient-accent text-[10px] font-extrabold text-white">
                    S
                  </div>
                  <div className="leading-tight">
                    <div className="font-semibold text-foreground">SeoFX</div>
                    <div className="text-muted-foreground">https://seofx.lk › seo-consultant-sri-lanka</div>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-google-green/10 px-2 py-0.5 text-[10px] font-bold text-google-green">
                    <TrendingUp className="size-3" /> #1
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold leading-snug text-google-blue">
                  SEO Consultant Sri Lanka — #1 SEO Consulting Services & Strategy | SeoFX
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                  SEO consultant Sri Lanka offering SEO consulting services, audits, keyword
                  research & ranking strategies to grow your business online. Get started today.
                </p>
                <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Star className="size-3 fill-google-yellow text-google-yellow" />
                    <Star className="size-3 fill-google-yellow text-google-yellow" />
                    <Star className="size-3 fill-google-yellow text-google-yellow" />
                    <Star className="size-3 fill-google-yellow text-google-yellow" />
                    <Star className="size-3 fill-google-yellow text-google-yellow" />
                    <span className="ml-1 font-medium text-foreground">4.9</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3" /> Rajagiriya, Sri Lanka
                  </span>
                </div>
              </article>

              {/* Suggestion chips — related searches */}
              <div className="mt-4">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  People also search
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "seo consulting services sri lanka",
                    "seo audit sri lanka",
                    "keyword research sri lanka",
                    "seo strategy sri lanka",
                    "best seo consultant colombo",
                  ].map((q) => (
                    <span
                      key={q}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                    >
                      <Search className="size-3 text-muted-foreground" />
                      {q}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer of card */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>About 842,000 results (0.38 seconds)</span>
                <span className="inline-flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-google-blue" />
                  <span className="size-1.5 rounded-full bg-google-red" />
                  <span className="size-1.5 rounded-full bg-google-yellow" />
                  <span className="size-1.5 rounded-full bg-google-green" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECT ANALOGY */}
      <section className="container-tight py-16 sm:py-20">
        <div className="grid overflow-hidden rounded-3xl border border-border md:grid-cols-2">
          <div className="border-b border-border bg-red-50 p-8 md:border-b-0 md:border-r dark:bg-red-950/20">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-800 dark:bg-red-900/40 dark:text-red-200">
              Without SEO Consultation
            </span>
            <div className="mt-4 text-4xl">🏚️</div>
            <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-foreground">
              You Build the House.<br />Then Find the Foundation is Wrong.
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-red-900 dark:text-red-200">
              {[
                "Wrong URL structure — impossible to fix without breaking everything",
                "Pages that Google can never find or index",
                "Keywords your customers don't actually search for",
                "No content plan — pages that rank for nothing",
                "Duplicate content penalties before you even launch",
                "Site speed problems built into the architecture",
                "Competitor already owns every keyword you want",
                "Spend Rs. 500,000 on a site that Google ignores",
              ].map((t) => (
                <li key={t} className="flex gap-2 border-b border-red-200/60 pb-2 last:border-0 dark:border-red-900/40">
                  <XCircle className="mt-0.5 size-4 shrink-0 text-red-600" /> <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-emerald-50 p-8 dark:bg-emerald-950/20">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-200">
              With SEO Consultation First
            </span>
            <div className="mt-4 text-4xl">🏛️</div>
            <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-foreground">
              You Build Once.<br />On a Foundation Google Rewards.
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-emerald-900 dark:text-emerald-200">
              {[
                "URL structure planned for maximum ranking power",
                "Every page built to be found and indexed immediately",
                "Keywords your actual customers search — validated with data",
                "Content plan that attracts traffic from day one",
                "Technical architecture Google crawls perfectly",
                "Site speed optimised before a single line of code",
                "Competitive gaps identified — rank where others can't",
                "Your Rs. 500,000 site works as hard as it should",
              ].map((t) => (
                <li key={t} className="flex gap-2 border-b border-emerald-200/60 pb-2 last:border-0 dark:border-emerald-900/40">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" /> <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-hero p-10 text-center md:col-span-2">
            <blockquote className="mx-auto max-w-2xl font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
              "An architect doesn't slow down your build. They make sure you{" "}
              <em className="not-italic text-accent">never have to rebuild.</em> That's what an SEO
              consultant does for your website."
            </blockquote>
            <cite className="mt-4 block text-xs text-white/50 not-italic">
              — The difference between a site that ranks and one that doesn't
            </cite>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section id="who" className="bg-muted/30 py-16 sm:py-20">
        <div className="container-tight">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Who Needs This</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            This Consultation is For You If...
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Three types of people lose the most money by skipping SEO consultation. See which one
            you are.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {WHO.map((w) => {
              const Icon = w.icon;
              return (
                <article
                  key={w.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 ${w.accent}`} />
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.extra}</p>
                  <div className="mt-4 rounded-xl border border-red-200/70 bg-red-50 p-4 dark:border-red-900/40 dark:bg-red-950/20">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-red-700 dark:text-red-300">
                      {w.painLabel}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-red-900 dark:text-red-200">
                      {w.pain}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISTAKES */}
      <section className="bg-foreground py-16 text-background sm:py-20">
        <div className="container-tight">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            The Real Cost of Skipping SEO
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            8 Expensive Mistakes Businesses Make When They Build Without SEO Planning
          </h2>
          <p className="mt-3 max-w-2xl text-background/60">
            These are not theoretical. These are the exact problems SeoFX fixes every week —
            problems that could have been avoided with a single consultation before build started.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MISTAKES.map((m) => (
              <div
                key={m.n}
                className="rounded-2xl border border-background/10 bg-background/5 p-5 transition hover:bg-background/10"
              >
                <span className="block font-display text-3xl font-bold leading-none text-accent/50">
                  {m.n}
                </span>
                <h3 className="mt-3 text-sm font-semibold">{m.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-background/60">{m.body}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-1 text-[11px] font-semibold text-red-300">
                  <AlertTriangle className="size-3" /> {m.cost}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERMANENT MISTAKES — cannot be fixed after launch */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-background to-background py-16 sm:py-20 dark:from-red-950/20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-300">
              <Lock className="size-3.5" /> Permanent Damage Warning
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Some SEO Mistakes <span className="text-red-600">Cannot Be Fixed</span> After Your Site Goes Live
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              This is the part nobody in web development tells you. Certain decisions made at build
              time become <strong className="font-semibold text-foreground">permanent</strong> — or so
              costly to reverse that most businesses simply live with the damage forever. This is
              exactly why an SEO consultant must be involved <em>before</em> a single page is built.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Domain & Brand Name Choice",
                body: "Once your business has built brand equity around a domain, changing it means starting SEO from zero. A poor domain choice — too long, hard to spell, wrong keyword targeting — will hold you back forever, but rebranding is rarely an option.",
                tag: "Permanent",
              },
              {
                title: "Site Platform & CMS",
                body: "Built on a platform that can't handle proper SEO — limited URL control, no schema support, slow rendering? Migrating platforms after launch means rebuilding the entire site, losing rankings, and breaking thousands of inbound links overnight.",
                tag: "Near-permanent",
              },
              {
                title: "Information Architecture",
                body: "The hierarchy of how your pages relate to each other tells Google what's important. Get this wrong, and every link you ever earn flows to the wrong pages. Restructuring later means breaking the entire URL system Google has indexed.",
                tag: "Extremely costly to reverse",
              },
              {
                title: "Indexed Thin or Duplicate Content",
                body: "Once Google sees your site as low-quality — too many thin pages, duplicate product descriptions, scraped content — that reputation sticks. Even after fixing it, recovery takes 12–24 months, and some sites never fully recover their domain trust.",
                tag: "Reputation damage lasts years",
              },
              {
                title: "Wrong Country / Language Targeting",
                body: "Setting your site to target the wrong country in Google Search Console, or launching in the wrong language for your buyers, means Google sends you irrelevant traffic for years. Hreflang errors at launch cause indexing chaos that's painful to untangle.",
                tag: "Years of lost relevance",
              },
              {
                title: "Manual Penalties from Bad Links",
                body: "If your developer or marketing agency built spammy backlinks early on, Google may issue a manual penalty. Disavowing toxic links and recovering from a penalty can take 6–18 months — and some sites never regain the trust they had before.",
                tag: "Trust may never return",
              },
            ].map((m) => (
              <article
                key={m.title}
                className="group relative rounded-2xl border border-red-200/60 bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-google dark:border-red-900/40"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-red-500/10 text-red-600">
                  <Lock className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-1 text-[11px] font-semibold text-red-700 dark:text-red-300">
                  <AlertTriangle className="size-3" /> {m.tag}
                </span>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border-l-4 border-red-500 bg-card p-6 shadow-card sm:p-8">
            <p className="font-display text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
              "By the time most businesses realise these mistakes exist, the website is already
              live, indexed, and earning a reputation with Google. Fixing them isn't a tweak — it's
              a rebuild. And rebuilds cost everything you've invested so far, plus everything you'll
              spend doing it again."
            </p>
            <p className="mt-3 text-sm font-semibold text-muted-foreground">
              — This is why an SEO consultation must happen <em>before</em> the build, not after.
            </p>
            <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#package">
                Book Consultation Before You Build <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PACKAGE */}
      <section
        id="package"
        className="border-y border-border bg-gradient-to-br from-emerald-50 via-background to-background py-16 sm:py-20 dark:from-emerald-950/20"
      >
        <div className="container-tight">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">The Solution</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            The SeoFX SEO Consultation Package
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            One focused consultation session that gives you everything you need to build a website
            that Google rewards — before you write a single line of code or a single word of
            content.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
            <ul className="divide-y divide-border">
              {DELIVERABLES.map((d) => {
                const Icon = d.icon;
                return (
                  <li key={d.title} className="flex gap-4 py-5">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{d.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl bg-hero p-8 text-white shadow-xl">
                <div className="border-b border-white/15 pb-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                    SEO Consultation Package
                  </p>
                  <div className="mt-2 flex items-start justify-center gap-1 font-display">
                    <span className="mt-2 text-lg text-white/60">Rs.</span>
                    <span className="text-5xl font-bold leading-none">50,000</span>
                  </div>
                  <p className="mt-2 text-xs text-white/45">
                    One-time fee. Delivered within 5–7 business days.
                  </p>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-white/80">
                  {[
                    "Keyword Research Report",
                    "Site Structure Blueprint",
                    "Competitor Gap Analysis",
                    "Content Roadmap & Page Briefs",
                    "Technical SEO Specification",
                    "Local / International Strategy",
                    "60-Day Post-Launch Action Plan",
                    "2-Hour Strategy Session",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2 border-b border-white/10 pb-2 last:border-0">
                      <CheckCircle2 className="size-4 shrink-0 text-accent" /> {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-2">
                  <Button asChild variant="hero" size="lg" className="w-full">
                    <Link to="/contact-us">Book Your Consultation</Link>
                  </Button>
                  <Button asChild variant="outlineLight" size="lg" className="w-full">
                    <a href={`tel:${SITE.phoneRaw}`}>
                      <Phone className="size-4" /> {SITE.phone}
                    </a>
                  </Button>
                </div>
                <div className="mt-5 flex gap-2 rounded-xl border border-accent/20 bg-accent/10 p-3">
                  <Lock className="mt-0.5 size-4 shrink-0 text-accent" />
                  <p className="text-xs leading-relaxed text-white/70">
                    This consultation is the cheapest investment you will make. One missed keyword
                    or wrong URL structure costs more to fix than Rs. 50,000 — guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-tight py-16 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">How It Works</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
          Simple. Fast. No Jargon.
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          From booking to delivery in 5–7 business days. Your team gets everything they need before
          a single page is built.
        </p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((p) => (
            <div
              key={p.n}
              className={`p-6 ${p.highlight ? "bg-hero text-white" : "bg-background"}`}
            >
              <span
                className={`block font-display text-3xl font-bold leading-none ${
                  p.highlight ? "text-accent/40" : "text-border"
                }`}
              >
                {p.n}
              </span>
              <h3 className={`mt-3 text-sm font-semibold ${p.highlight ? "text-white" : "text-foreground"}`}>
                {p.title}
              </h3>
              <p
                className={`mt-1 text-xs leading-relaxed ${
                  p.highlight ? "text-white/60" : "text-muted-foreground"
                }`}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS / STATS */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container-tight">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Why It Matters</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            The Numbers That Make This a No-Brainer
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            These are the realities of SEO in Sri Lanka that make upfront consultation the most
            rational investment a business can make.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-muted/30 p-6 text-center">
                <span className="block font-display text-4xl font-bold text-emerald-700 dark:text-emerald-400">
                  {s.num}
                </span>
                <p className="mt-2 text-sm font-semibold text-foreground">{s.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.ctx}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENCIES */}
      <section id="agencies" className="border-t border-border bg-muted/30 py-16 sm:py-20">
        <div className="container-tight">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            For Agencies & Developers
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            A Message to Web Development & Marketing Agencies in Sri Lanka
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold leading-tight text-foreground">
                Your Clients Are Paying You to Get Results.
                <br />
                SEO is Part of Results.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every website you build without an SEO consultation is a site that could
                underperform — and when it does, your client will remember who built it. Adding
                SeoFX consultation to your project workflow costs your client Rs. 50,000 extra. It
                protects their investment, your reputation, and their loyalty to your agency.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The best web development agencies in Sri Lanka already recommend SEO consultation
                before every project. This is how they retain clients — their sites actually perform
                after launch.
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {[
                  "Add a new revenue stream — refer or resell consultation",
                  "Build sites that rank — your portfolio becomes proof",
                  "Clients stay longer when organic traffic grows",
                  "Developer gets clear SEO spec — no guesswork",
                  "Differentiate your agency from those who just \"build\"",
                  "Your clients stop blaming you when rankings don't appear",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 border-b border-border pb-2 last:border-0 text-foreground/80"
                  >
                    <ArrowRight className="size-4 shrink-0 text-emerald-700 dark:text-emerald-400" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact-us">
                    Talk to Us About Agency Partnership <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl bg-hero p-8 text-white">
              <h4 className="font-display text-xl font-bold">SeoFX Agency Partner Programme</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Web development and marketing agencies can partner with SeoFX to offer SEO
                consultation as part of every project. We brief your developers, work with your
                project timeline, and keep your clients happy.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {[
                  "Preferred partner pricing for your clients",
                  "White-label SEO reports under your brand",
                  "Priority turnaround for agency projects",
                  "Direct developer briefing on technical requirements",
                  "Referral commission structure available",
                  "Ongoing SEO support after every project",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2 border-b border-white/10 pb-2 last:border-0">
                    <span className="text-accent">★</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container-tight max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Questions Answered</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Common Questions About SEO Consultation
          </h2>

          <Accordion type="single" collapsible className="mt-8">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* INTERNAL LINK BACK TO HOME */}
      <section className="container-tight pb-12">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-8">
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            Need full-service{" "}
            <Link to="/" className="text-accent underline-offset-4 hover:underline">
              SEO Sri Lanka
            </Link>{" "}
            after your consultation?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            SeoFX is Sri Lanka's leading{" "}
            <Link to="/" className="text-accent underline-offset-4 hover:underline">
              SEO Sri Lanka
            </Link>{" "}
            agency — explore our{" "}
            <Link to="/services" className="underline underline-offset-4">
              SEO services
            </Link>{" "}
            and{" "}
            <Link to="/seo-packages-sri-lanka" className="underline underline-offset-4">
              monthly packages
            </Link>{" "}
            to keep growing after launch.
          </p>
        </div>
      </section>

      <CTASection
        title="Don't Build Your Digital House Without an Architect."
        subtitle="One conversation with SeoFX costs Rs. 50,000. Getting it wrong costs your entire website investment — plus months of lost business."
      />
    </Layout>
  );
};

export default SeoConsultation;
