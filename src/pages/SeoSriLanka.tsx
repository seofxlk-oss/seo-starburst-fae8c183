import { Link } from "react-router-dom";
import {
  Search,
  TrendingUp,
  Target,
  Award,
  Users,
  Globe,
  ArrowRight,
  Check,
  X,
  MapPin,
  FileText,
  Link2,
  Settings,
  PenTool,
  ShoppingBag,
  Hotel,
  Stethoscope,
  GraduationCap,
  Building2,
  Wrench,
  Phone,
  MessageCircle,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  orgSchema,
  websiteSchema,
  localBusinessSchema,
  faqSchema,
  webPageSchema,
  serviceSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/site";

const PAGE_URL = `${SITE.url}/seo-sri-lanka`;

const tocChips = [
  { id: "what-is-seo", label: "What is SEO in Sri Lanka" },
  { id: "benefits", label: "Benefits of Page One" },
  { id: "growth", label: "How SEO Grows Your Business" },
  { id: "comparison", label: "SEO vs No SEO" },
  { id: "services", label: "SEO Services" },
  { id: "timeline", label: "SEO Timeline" },
  { id: "industries", label: "Industries" },
  { id: "faq", label: "FAQ" },
];

const disciplines = [
  {
    icon: Settings,
    title: "Technical SEO",
    body: "Site speed, mobile-first indexing, crawlability, structured data, Core Web Vitals — the foundation Google needs to rank you in Sri Lanka.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    body: "Title tags, meta descriptions, headings, internal links, schema markup and content structured around real Sri Lankan search intent.",
  },
  {
    icon: PenTool,
    title: "Content SEO",
    body: "In-depth articles, service pages and location pages that answer the questions Sri Lankan customers are actually typing into Google.",
  },
  {
    icon: Link2,
    title: "Off-Page SEO",
    body: "White-hat backlinks from relevant Sri Lankan and international websites, digital PR and brand mentions that build true authority.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    body: "Google Business Profile optimisation, local landing pages and review strategy so you appear in the Map Pack across Colombo, Kandy, Galle and beyond.",
  },
];

const benefits = [
  {
    stat: "92%",
    title: "Never leave page one",
    body: "92% of Google users never click past page one of search results. If you are not on page one, you do not exist for the vast majority of searches in Sri Lanka.",
  },
  {
    stat: "10×",
    title: "Position one gets 10× clicks",
    body: "The #1 organic result on Google receives roughly ten times the clicks of the result sitting at position ten. Ranking higher does not give you a little more traffic — it gives you most of the traffic.",
  },
  {
    stat: "∞",
    title: "Free traffic forever",
    body: "Unlike Google Ads, organic rankings keep delivering visitors after the work is done. SEO turns your website into an asset that produces compounding traffic month after month.",
  },
];

const growthChain = [
  {
    n: "01",
    title: "More qualified visitors",
    body: "Page-one rankings put your business in front of people who are already searching for what you sell. This is the highest-intent traffic on the internet.",
  },
  {
    n: "02",
    title: "More leads & enquiries",
    body: "Qualified visitors convert at far higher rates than cold audiences from social media or display ads — because they came to you with a problem you can solve.",
  },
  {
    n: "03",
    title: "Lower cost per customer",
    body: "Once your rankings are in place, the cost of acquiring each new customer drops dramatically compared to paid advertising — and keeps falling as rankings strengthen.",
  },
  {
    n: "04",
    title: "Brand authority & dominance",
    body: "Showing up consistently at the top of Google for your category builds the kind of trust that no advertisement can manufacture. Sri Lankan customers trust what Google ranks first.",
  },
  {
    n: "05",
    title: "A permanent business asset",
    body: "Rankings, content and backlinks compound. Years from now, the SEO work you do today will still be sending visitors and revenue to your business.",
  },
];

const comparison: { row: string; with: string; without: string }[] = [
  {
    row: "Customer acquisition",
    with: "Customers find you on Google when they are ready to buy.",
    without: "You chase customers through cold outreach and paid ads.",
  },
  {
    row: "Marketing cost over time",
    with: "Cost per lead drops every month as rankings strengthen.",
    without: "Cost per lead rises every year as ad platforms get more competitive.",
  },
  {
    row: "Brand credibility",
    with: "Ranking #1 on Google signals authority and trust.",
    without: "Customers cannot find you, or assume you are too small to compete.",
  },
  {
    row: "Lead quality",
    with: "High-intent visitors actively searching for your service.",
    without: "Low-intent audiences interrupted by ads they did not ask for.",
  },
  {
    row: "Business resilience",
    with: "Steady leads even when ad budgets are paused.",
    without: "Pipeline collapses the moment paid spend stops.",
  },
  {
    row: "Long-term value",
    with: "Your website becomes a compounding revenue-producing asset.",
    without: "You rent attention forever from Google, Facebook and others.",
  },
  {
    row: "Competitor advantage",
    with: "You own the searches that matter most in your category.",
    without: "Your competitors capture the customers searching for you.",
  },
];

const services = [
  {
    icon: Search,
    title: "Keyword Research & Strategy",
    body: "We identify the exact searches your Sri Lankan customers are making — high-intent commercial keywords, informational queries and local searches — and build a ranking strategy around them.",
  },
  {
    icon: Settings,
    title: "Technical SEO Audit & Fixes",
    body: "A complete technical audit covering site speed, Core Web Vitals, indexation, structured data, mobile usability and crawl health, with hands-on implementation of every fix.",
  },
  {
    icon: FileText,
    title: "On-Page Optimisation",
    body: "Title tags, meta descriptions, headings, internal linking and on-page content rewritten and structured to match search intent and ranking best practices for Sri Lanka.",
  },
  {
    icon: PenTool,
    title: "SEO Content Writing",
    body: "Original, in-depth blog posts, service pages and location pages written by experienced SEO copywriters who understand Sri Lankan business and consumer behaviour.",
  },
  {
    icon: Link2,
    title: "White-Hat Link Building",
    body: "Authority backlinks earned through digital PR, guest posting and outreach to relevant Sri Lankan and international publications — never spam, never private blog networks.",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Business Profile",
    body: "Google Business Profile setup and optimisation, local landing pages and review-generation strategy to dominate the Map Pack in your service areas across Sri Lanka.",
  },
  {
    icon: TrendingUp,
    title: "SEO Reporting & Analytics",
    body: "Transparent monthly reports showing keyword movements, traffic growth, leads generated and exactly what we did — no jargon, no fluff, just clear progress.",
  },
];

const timeline = [
  {
    phase: "Month 1",
    title: "Audit, foundations & strategy",
    body: "Full technical audit, keyword research, competitor analysis, on-page foundations and a documented 6–12 month strategy tailored to your business.",
  },
  {
    phase: "Month 2",
    title: "On-page execution & content",
    body: "On-page optimisation rolled out across priority pages, the first wave of new SEO content published, internal linking restructured.",
  },
  {
    phase: "Month 3",
    title: "Authority building begins",
    body: "First wave of white-hat backlinks earned, local citations cleaned up, early ranking improvements visible for low-competition long-tail keywords.",
  },
  {
    phase: "Month 4–6",
    title: "Traffic & rankings accelerate",
    body: "Mid-competition keywords climb to page one, organic traffic and enquiries grow noticeably, conversion-focused improvements compound.",
  },
  {
    phase: "Month 6–12",
    title: "Page-one dominance",
    body: "Primary commercial keywords reach page one, Map Pack visibility expands, and your website becomes a consistent source of qualified leads.",
  },
];

const sriLankaStats = [
  {
    n: "12.3M+",
    label: "Internet users in Sri Lanka",
    body: "More than half of Sri Lanka is online — and almost all of them search Google before making a buying decision.",
  },
  {
    n: "95%+",
    label: "Google's search market share",
    body: "Google completely dominates search in Sri Lanka. Ranking on Google is effectively the only SEO that matters here.",
  },
  {
    n: "70%+",
    label: "Searches happening on mobile",
    body: "The majority of Sri Lankan Google searches happen on smartphones — making mobile-first SEO non-negotiable.",
  },
  {
    n: "76%",
    label: "Local searches that visit within 24 hours",
    body: "Three out of four people who run a local search visit a related business within a day. Local SEO is direct foot traffic.",
  },
  {
    n: "3×",
    label: "Conversion rate of organic vs paid",
    body: "Organic search visitors convert into customers at roughly three times the rate of cold paid traffic in most Sri Lankan business categories.",
  },
];

const industries = [
  {
    icon: Hotel,
    title: "Hotels & Tourism",
    examples: "boutique hotel Galle, villa rental Mirissa, things to do in Kandy",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Retail",
    examples: "buy saree online Sri Lanka, online grocery Colombo, electronics store Sri Lanka",
  },
  {
    icon: Stethoscope,
    title: "Medical & Healthcare",
    examples: "dentist Colombo, fertility clinic Sri Lanka, dermatologist near me",
  },
  {
    icon: Building2,
    title: "Real Estate & Construction",
    examples: "houses for sale Colombo, apartments Rajagiriya, construction company Sri Lanka",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    examples: "international school Colombo, IELTS class Sri Lanka, MBA Sri Lanka",
  },
  {
    icon: Wrench,
    title: "Professional Services",
    examples: "lawyer Colombo, chartered accountant Sri Lanka, immigration consultant",
  },
];

const faqs = [
  {
    q: "What is SEO in Sri Lanka?",
    a: "SEO in Sri Lanka is the process of optimising your website so it ranks higher on Google for the searches Sri Lankan customers are making. It combines technical fixes, on-page optimisation, content, backlinks and local SEO to deliver organic traffic and qualified leads from Google.lk and Google.com.",
  },
  {
    q: "How long does SEO take to work in Sri Lanka?",
    a: "Most Sri Lankan businesses see early ranking movement within 2–3 months, meaningful traffic growth between months 4–6, and page-one dominance for primary commercial keywords between months 6–12. SEO is a long-term investment that compounds — the asset you build keeps producing returns long after the work is done.",
  },
  {
    q: "Is SEO worth it for a small business in Sri Lanka?",
    a: "Yes — and arguably more so for small businesses. SEO levels the playing field, allowing a focused small business to outrank larger competitors for the searches that matter. Once established, organic rankings deliver leads at a fraction of the cost of Google Ads or Facebook Ads, which is a decisive advantage for small business margins.",
  },
  {
    q: "What is the difference between SEO and Google Ads in Sri Lanka?",
    a: "Google Ads place your website at the top of search results for as long as you keep paying. The moment you stop, your visibility disappears. SEO builds organic rankings that continue producing traffic and leads month after month without ongoing ad spend. Most successful Sri Lankan businesses use both — paid for instant results, SEO for long-term growth.",
  },
  {
    q: "How does Google rank websites in Sri Lanka?",
    a: "Google evaluates hundreds of signals when deciding what to rank in Sri Lanka, but they fall into three groups: relevance (how well your page matches the searcher's intent), authority (the quality and quantity of backlinks pointing to your site) and experience (page speed, mobile usability, content depth and trust signals such as E-E-A-T).",
  },
  {
    q: "Do I need local SEO if I serve all of Sri Lanka?",
    a: "If you have any kind of physical presence — an office, a clinic, a showroom, a workshop — local SEO is essential. Even nationwide service providers benefit from city-specific landing pages and a strong Google Business Profile, because Sri Lankan customers frequently add a city or area to their searches.",
  },
  {
    q: "Can I do SEO myself or do I need an SEO company in Sri Lanka?",
    a: "Foundational tasks like setting up a Google Business Profile, writing decent page titles and publishing useful content can be done in-house. But ranking competitively in Sri Lanka — especially for high-value commercial keywords — requires technical expertise, link-building relationships and dedicated tooling that almost always make hiring an experienced SEO company in Sri Lanka the more cost-effective path.",
  },
  {
    q: "What makes SEO in Sri Lanka different from SEO elsewhere?",
    a: "The fundamentals of SEO are universal, but execution in Sri Lanka requires understanding local search behaviour, language preferences, cultural context, the country's dominant industries, the mix of mobile-first users and the specific Google.lk versus Google.com dynamics. Local relevance signals carry significant weight for ranking in Sri Lankan search results.",
  },
];

const SeoSriLanka = () => {
  const wa = `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi SeoFX, I'd like to learn more about SEO Sri Lanka services."
  )}`;

  const jsonLd = [
    orgSchema(),
    websiteSchema(),
    localBusinessSchema(),
    webPageSchema({
      name: "SEO Sri Lanka — Professional SEO Services for Businesses That Want to Rank on Google",
      description:
        "Complete guide to SEO in Sri Lanka. Learn how SEO works, the benefits of ranking on Google page one, and how SEO grows your Sri Lankan business.",
      url: PAGE_URL,
    }),
    serviceSchema({
      name: "SEO Sri Lanka",
      description:
        "Professional SEO services for Sri Lankan businesses — technical SEO, on-page optimisation, content, link building and local SEO.",
      url: PAGE_URL,
    }),
    faqSchema(faqs, { pageUrl: PAGE_URL }),
  ];

  return (
    <Layout>
      <SEO
        title="SEO Sri Lanka — Professional SEO Services to Rank on Google | SeoFX"
        description="Looking for SEO in Sri Lanka? Learn how SEO works, why page-one rankings transform a business, and how SeoFX helps Sri Lankan businesses dominate Google."
        canonical="/seo-sri-lanka"
        keywords="seo sri lanka, seo company sri lanka, seo specialist sri lanka, seo services sri lanka, search engine optimisation sri lanka, google ranking sri lanka, local seo sri lanka"
        ogImageAlt="SEO Sri Lanka — Professional SEO services by SeoFX"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: "SEO Sri Lanka" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-soft to-background py-16 sm:py-24">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl text-center">
            <span className="badge-pill">SEO Sri Lanka</span>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              SEO Sri Lanka — Professional SEO Services for Businesses That Want to{" "}
              <span className="text-gradient-accent">Rank on Google</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
              Looking for SEO in Sri Lanka? You are in the right place. This page explains exactly how
              SEO works, why ranking on Google page one transforms a business, and how a results-driven
              SEO Sri Lanka strategy turns your website into a permanent source of qualified leads.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact-us">
                  Get My Free SEO Audit <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="whatsapp" size="lg">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" /> WhatsApp Us
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${SITE.phoneRaw}`}>
                  <Phone className="size-4" /> {SITE.phone}
                </a>
              </Button>
            </div>

            {/* TOC chips */}
            <nav aria-label="On this page" className="mt-10">
              <ul className="flex flex-wrap items-center justify-center gap-2">
                {tocChips.map((c) => (
                  <li key={c.id}>
                    <a
                      href={`#${c.id}`}
                      className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground/80 shadow-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* WHAT IS SEO */}
      <section id="what-is-seo" className="container-tight py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <span className="badge-pill">Definition</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              What is SEO in Sri Lanka?
            </h2>

            <div className="mt-5 rounded-2xl border-l-4 border-accent bg-soft p-5 sm:p-6">
              <p className="text-base font-medium text-foreground">
                <strong>SEO in Sri Lanka</strong> is the process of optimising a website so it ranks
                higher on Google for the searches Sri Lankan customers are actually making. It combines
                technical SEO, on-page optimisation, content, backlinks and local SEO to deliver
                consistent organic traffic and qualified leads from Google.lk and Google.com.
              </p>
            </div>

            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Every day, hundreds of thousands of searches happen across Sri Lanka — people looking
                for hotels in Galle, dentists in Colombo, accountants in Kandy, online stores, schools,
                lawyers and every other product and service imaginable. SEO determines which businesses
                Google shows them and which businesses remain invisible.
              </p>
              <p>
                Unlike paid advertising, SEO does not buy attention. It earns it. By signalling
                relevance, authority and trust to Google's algorithm, a properly optimised website
                rises through the rankings until it appears at the top of the page when customers are
                ready to act.
              </p>
              <p>
                In Sri Lanka, SEO has a very specific local dimension. Search behaviour is dominated by
                mobile, by Google (which holds over 95% of the market here), and by location-aware
                queries. Customers searching "near me," "in Colombo" or "in Sri Lanka" expect to see
                local businesses — and Google's algorithm prioritises businesses that have invested in
                local SEO signals.
              </p>
              <p>
                A complete SEO Sri Lanka strategy addresses everything Google looks at: how fast and
                technically sound your website is, how clearly each page communicates its purpose, how
                deeply your content answers real questions, how many quality websites link to you, and
                how prominent your business is in local search and the Google Map Pack.
              </p>
              <p>
                Done correctly — and done patiently — SEO produces a result that no other marketing
                channel can match: a self-sustaining flow of high-intent visitors who find your
                business at the exact moment they are ready to buy.{" "}
                <Link to="/services" className="text-accent underline-offset-4 hover:underline">
                  Explore our complete SEO services
                </Link>{" "}
                to see how the discipline is delivered in practice.
              </p>
            </div>
          </div>

          {/* Disciplines column */}
          <aside className="lg:col-span-2">
            <div className="sticky top-24 space-y-3">
              <h3 className="font-display text-lg font-bold">The 5 disciplines of SEO</h3>
              {disciplines.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className="rounded-2xl border border-border bg-card p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <h4 className="font-display text-sm font-bold">{d.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      {/* BENEFITS OF PAGE ONE */}
      <section id="benefits" className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">The Real Prize</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              The Benefits of Ranking on Google Page One in Sri Lanka
            </h2>
            <p className="mt-4 text-muted-foreground">
              Page one of Google is the most valuable digital real estate on earth. Here is what
              actually happens when an SEO Sri Lanka strategy gets your business there.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-card"
              >
                <div className="font-display text-5xl font-extrabold text-gradient-accent">{b.stat}</div>
                <h3 className="mt-4 font-display text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-hero p-6 text-white shadow-card">
              <div className="font-display text-4xl font-extrabold">3× conversion rate</div>
              <p className="mt-3 text-sm text-white/80">
                Organic search visitors convert into customers at roughly three times the rate of cold
                paid traffic — because they came actively searching for what you sell.
              </p>
            </div>
            <div className="rounded-2xl bg-hero p-6 text-white shadow-card">
              <div className="font-display text-4xl font-extrabold">76% visit within 24 hours</div>
              <p className="mt-3 text-sm text-white/80">
                Three out of four people who run a local search on Google visit a related business
                within a day. For Sri Lankan local businesses, that is direct, measurable foot traffic.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm">
            <h3 className="font-display text-2xl font-extrabold">Why Google rankings signal trust</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <p className="text-muted-foreground">
                Sri Lankan consumers do not just see Google as a search engine — they treat it as a
                recommendation engine. A business sitting at #1 organically is implicitly endorsed by
                Google as the most relevant, most authoritative answer to the query. That endorsement
                converts into trust before a single sales conversation happens.
              </p>
              <p className="text-muted-foreground">
                Paid ads do not carry the same weight. Studies consistently show users skip the ad
                block in favour of organic results, particularly for considered purchases. Ranking
                organically is therefore not just a traffic strategy — it is a brand strategy. It
                positions your business as the credible default in your category.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW SEO GROWS YOUR BUSINESS */}
      <section id="growth" className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">The Growth Chain</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            How SEO Grows a Business in Sri Lanka
          </h2>
          <p className="mt-4 text-muted-foreground">
            SEO does not just produce traffic. It triggers a chain reaction that compounds into
            durable, defensible business growth.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {growthChain.map((g) => (
            <li
              key={g.n}
              className="relative rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="font-display text-3xl font-extrabold text-accent/30">{g.n}</div>
              <h3 className="mt-2 font-display text-base font-bold">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* MID-PAGE CTA BANNER */}
      <section className="relative overflow-hidden bg-hero py-14 text-white">
        <div className="absolute inset-0 bg-gradient-radial opacity-70" aria-hidden />
        <div className="container-tight relative">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="badge-pill-light">Free SEO Audit · No Obligation</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Find out exactly where your business ranks in Sri Lanka — and what it would take to reach page one.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-white/75">
                Get a free SEO Sri Lanka audit covering your current rankings, competitor gap analysis, technical
                health and a clear, no-jargon roadmap to grow with SEO. Delivered by real SEO specialists — not bots.
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-white/85 sm:grid-cols-2">
                <li className="flex items-center gap-2"><Check className="size-4 text-accent" /> Real keyword opportunities</li>
                <li className="flex items-center gap-2"><Check className="size-4 text-accent" /> Competitor gap analysis</li>
                <li className="flex items-center gap-2"><Check className="size-4 text-accent" /> Technical SEO health check</li>
                <li className="flex items-center gap-2"><Check className="size-4 text-accent" /> 6-month action roadmap</li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <p className="font-display text-lg font-bold">Talk to a Sri Lankan SEO specialist today</p>
                <p className="mt-1 text-sm text-white/70">No call centre. No sales script. Straight answers.</p>

                <div className="mt-5 flex flex-col gap-3">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contact-us">
                      Get My Free SEO Audit <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="whatsapp" size="lg">
                    <a href={wa} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="size-4" /> WhatsApp Us Now
                    </a>
                  </Button>
                  <Button asChild variant="outlineLight" size="lg">
                    <a href={`tel:${SITE.phoneRaw}`}>
                      <Phone className="size-4" /> Call {SITE.phone}
                    </a>
                  </Button>
                </div>

                <p className="mt-4 text-center text-[11px] text-white/55">
                  Trusted by Sri Lankan businesses across hotels, healthcare, e-commerce, education &amp; professional services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section id="comparison" className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">The Difference</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              SEO vs No SEO — Side by Side
            </h2>
            <p className="mt-4 text-muted-foreground">
              The decision to invest in SEO is a decision about what kind of business you are
              building over the next five years.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-12 border-b border-border bg-muted/40 text-xs font-bold uppercase tracking-wide text-muted-foreground">
              <div className="col-span-4 p-4">Aspect</div>
              <div className="col-span-4 p-4 text-accent">With SEO</div>
              <div className="col-span-4 p-4">Without SEO</div>
            </div>
            {comparison.map((c, i) => (
              <div
                key={c.row}
                className={`grid grid-cols-12 border-b border-border last:border-0 text-sm ${
                  i % 2 === 0 ? "bg-background" : "bg-card"
                }`}
              >
                <div className="col-span-4 p-4 font-semibold">{c.row}</div>
                <div className="col-span-4 p-4">
                  <div className="flex items-start gap-2 text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{c.with}</span>
                  </div>
                </div>
                <div className="col-span-4 p-4">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                    <span>{c.without}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">SEO Services</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            What an SEO Sri Lanka Engagement Actually Delivers
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete SEO programme is the sum of seven disciplines working together. None of them
            are optional if the goal is page-one rankings.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-card"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/services">
              See full SEO services <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Honest Timeline</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              How Long SEO Actually Takes in Sri Lanka
            </h2>
            <p className="mt-4 text-muted-foreground">
              Anyone promising page-one rankings in 30 days is selling smoke. Here is the realistic
              timeline for a properly executed SEO Sri Lanka campaign.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {timeline.map((t, i) => (
              <div
                key={t.phase}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
              >
                <div className="grid gap-4 sm:grid-cols-12 sm:items-start">
                  <div className="sm:col-span-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                      <span className="grid size-5 place-items-center rounded-full bg-accent text-[10px] font-extrabold text-accent-foreground">
                        {i + 1}
                      </span>
                      {t.phase}
                    </div>
                  </div>
                  <div className="sm:col-span-9">
                    <h3 className="font-display text-lg font-bold">{t.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
            <strong>Sri Lanka context:</strong> niche local businesses can hit page one faster than
            this; competitive nationwide commercial keywords (insurance, finance, tourism aggregators)
            often take longer. The right strategy is always sized to your specific market.
          </p>
        </div>
      </section>

      {/* SRI LANKA LANDSCAPE */}
      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">The Local Landscape</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            The Sri Lankan Search Landscape in Numbers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Understanding how Sri Lankans search is the starting point of every SEO Sri Lanka strategy
            we build.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {sriLankaStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="font-display text-3xl font-extrabold text-gradient-accent">{s.n}</div>
              <div className="mt-1 text-sm font-bold">{s.label}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Who We Help</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Industries SEO Transforms in Sri Lanka
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every category in Sri Lanka is winnable with the right SEO strategy. These are the
              industries where we see the biggest, fastest impact.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-card"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{ind.title}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Example keywords
                  </p>
                  <p className="mt-1 text-sm italic text-foreground/80">{ind.examples}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/industries">
                Explore all industries <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="badge-pill">FAQ</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              SEO Sri Lanka — Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Honest answers to the questions Sri Lankan business owners ask us most often.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all open:shadow-card"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-lg font-bold text-foreground">
                  <span>
                    <span className="text-accent">{i + 1}.</span> {f.q}
                  </span>
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent/10 text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED READING */}
      <section className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Keep Reading</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Go Deeper on SEO in Sri Lanka
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hand-picked guides to help you make the right SEO decisions for your business.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/blog/seo-sri-lanka-complete-guide-2026",
                title: "SEO Sri Lanka — The Complete Guide (2026)",
                desc: "The definitive deep-dive into how search engine optimisation works for Sri Lankan businesses in 2026.",
              },
              {
                href: "/blog/is-seo-worth-it-sri-lanka",
                title: "Is SEO Worth It for Sri Lankan Businesses?",
                desc: "An honest, no-nonsense answer — including when SEO works, when it does not, and what to expect.",
              },
              {
                href: "/blog/how-to-choose-seo-company-sri-lanka",
                title: "How to Choose the Right SEO Company in Sri Lanka",
                desc: "What to look for, what to avoid, and the questions every business owner should ask before signing.",
              },
              {
                href: "/blog/seo-services-sri-lanka-what-is-included",
                title: "What SEO Services in Sri Lanka Should Include",
                desc: "Every component of professional SEO — and what separates real SEO from superficial activity.",
              },
              {
                href: "/blog/seo-price-sri-lanka-how-much-should-you-pay",
                title: "SEO Price in Sri Lanka — What Should You Pay?",
                desc: "An honest breakdown of SEO pricing in Sri Lanka — from cheap options to premium services.",
              },
              {
                href: "/blog/organic-traffic-importance-sri-lanka",
                title: "Why Organic Traffic Is Your Most Valuable Asset",
                desc: "Why organic search outperforms paid traffic for almost every Sri Lankan business category.",
              },
            ].map((p) => (
              <Link
                key={p.href}
                to={p.href}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent hover:shadow-card"
              >
                <h3 className="font-display text-base font-bold group-hover:text-accent">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                  Read article <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to rank your business on Google Sri Lanka?"
        subtitle="Get a free SEO audit and a clear, no-jargon roadmap to grow your business with SEO Sri Lanka."
      />
    </Layout>
  );
};

export default SeoSriLanka;
