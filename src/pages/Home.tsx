import { Link } from "react-router-dom";
import {
  ArrowRight, Search, TrendingUp, Users, Target, BarChart3, MessageCircle,
  CheckCircle2, Award, ShieldCheck, Sparkles, Phone, Globe, Zap, LineChart,
  Briefcase, Megaphone, Code2, Handshake, Star, Quote, Trophy, Calendar,
  Rocket, Crown, MapPin,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { AIAnswerBlock } from "@/components/AIAnswerBlock";
import { ConsultationSection } from "@/components/ConsultationSection";
import { GoogleSearchHero } from "@/components/GoogleSearchHero";
import { SITE } from "@/lib/site";
import {
  orgSchema,
  websiteSchema,
  localBusinessSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import caseImg from "@/assets/case-porkendeli.jpg";

const Home = () => {
  const wa = `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi SeoFX, I'd like a free SEO audit."
  )}`;
  const waPartner = `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi SeoFX, I'd like to discuss a partnership."
  )}`;

  // ───────── FAQ (Section 9) — schema-rich, keyword-targeted ─────────
  const faqs = [
    {
      q: "Who is the best SEO company in Sri Lanka?",
      a: "SeoFX is widely considered the best SEO company in Sri Lanka, delivering an average 73% monthly traffic increase and 99% yearly organic growth using 100% white-hat SEO. We serve businesses, ad agencies and web development companies across Colombo, Kandy, Galle and the rest of the island.",
    },
    {
      q: "How much do SEO services in Sri Lanka cost?",
      a: "SEO services in Sri Lanka from SeoFX start at LKR 29,900/month for the Starter package, LKR 59,900/month for Business, and LKR 99,900+/month for Premium. We also offer a paid 60-minute SEO consultation session at LKR 50,000 with a written roadmap.",
    },
    {
      q: "How long does it take to rank on Google in Sri Lanka?",
      a: "Most SeoFX clients see measurable ranking improvements within 60–90 days and strong page-one results in 4–6 months. We back our work with a 90-Day Ranking Promise — if your keywords don't move, we keep working free until they do.",
    },
    {
      q: "Do you work with marketing agencies and web developers in Sri Lanka?",
      a: "Yes. SeoFX partners with ad agencies and web development companies in Sri Lanka under a white-label SEO model. You keep your client relationship, we deliver the SEO under your branding — with revenue share and white-label monthly reports.",
    },
  ];

  const jsonLd = [
    orgSchema(),
    websiteSchema(),
    localBusinessSchema(),
    serviceSchema({
      name: "SEO Services in Sri Lanka",
      description:
        "Full-service SEO in Sri Lanka — audits, keyword research, on-page, link building, local SEO and white-label SEO for businesses, agencies and developers.",
      url: `${SITE.url}/`,
      offers: [
        { name: "SEO Consultation", url: `${SITE.url}/seo-packages-sri-lanka#consultation`, price: "50000" },
        { name: "Starter SEO Package", url: `${SITE.url}/seo-packages-sri-lanka#starter`, price: "29900" },
        { name: "Business SEO Package", url: `${SITE.url}/seo-packages-sri-lanka#business`, price: "59900" },
        { name: "Premium SEO Package", url: `${SITE.url}/seo-packages-sri-lanka#premium`, price: "99900" },
        { name: "Google Map Optimization", url: `${SITE.url}/google-map-optimization` },
      ],
    }),
    faqSchema(faqs, { pageUrl: `${SITE.url}/` }),
  ];

  // ───────── Section 2 — Who We Serve ─────────
  const audiences = [
    {
      icon: Briefcase,
      title: "Businesses",
      tagline: "More leads. More sales. Less ad spend.",
      desc: "For Sri Lankan businesses ready to turn their website into a 24/7 lead generation machine.",
      points: [
        "Rank #1 for buyer-intent keywords on Google.lk",
        "Cut Google Ads cost by 60%+ with organic traffic",
        "Predictable monthly leads — without paid ads",
        "90-Day Ranking Promise on every campaign",
      ],
      cta: "WhatsApp Us",
      href: wa,
      external: true,
      badge: "Most Requested",
    },
    {
      icon: Megaphone,
      title: "Ad Agencies",
      tagline: "Add SEO. Keep your client. Grow margins.",
      desc: "For marketing & ad agencies in Sri Lanka that want to offer SEO without hiring an SEO team.",
      points: [
        "100% white-label SEO delivery (we stay invisible)",
        "Reports & dashboards branded as yours",
        "Generous revenue share on every retainer",
        "Dedicated account manager for all your clients",
      ],
      cta: "WhatsApp Partnership Team",
      href: waPartner,
      external: true,
    },
    {
      icon: Code2,
      title: "Web Dev Companies",
      tagline: "Sell SEO with every website you ship.",
      desc: "For web studios & developers wanting to add a profitable SEO line to every project.",
      points: [
        "Bundle SEO with every website you build",
        "We handle audit, on-page, links & monthly reports",
        "Zero in-house overhead — full margin to you",
        "Recurring revenue from one-time clients",
      ],
      cta: "WhatsApp Us",
      href: waPartner,
      external: true,
    },
  ];

  // ───────── Section 4 — Partner pitch points ─────────
  const partnerBenefits = [
    { icon: ShieldCheck, title: "100% White-Label", text: "Reports, dashboards and emails branded as yours. We stay invisible." },
    { icon: TrendingUp, title: "Revenue Share", text: "Healthy margins on every retainer — pricing built for resale." },
    { icon: Users, title: "Dedicated Account Manager", text: "One point of contact for all your client SEO campaigns." },
    { icon: Calendar, title: "Monthly Reporting", text: "Branded performance reports delivered before your client meetings." },
  ];

  // ───────── Section 6 — Services Grid ─────────
  const services = [
    { title: "SEO Consulting", text: "Strategy that aligns rankings with revenue.", href: "/services/seo-consulting-sri-lanka" },
    { title: "Website SEO Audit", text: "200+ ranking factors checked end to end.", href: "/services/website-audit-sri-lanka" },
    { title: "Keyword Research", text: "High-intent Sri Lanka keywords mapped to URLs.", href: "/services/keyword-research-sri-lanka" },
    { title: "On-Site SEO", text: "Titles, schema, speed, internal links — fixed.", href: "/services/on-page-seo-sri-lanka" },
    { title: "Off-Site SEO", text: "Authority through citations & brand mentions.", href: "/services/off-page-seo-sri-lanka" },
    { title: "Link Building", text: "Manual, white-hat backlinks from real sites.", href: "/services/link-building-sri-lanka" },
  ];

  // ───────── Section 7 — Packages incl. Consultation ─────────
  const packages = [
    {
      name: "SEO Consultation",
      price: "LKR 50,000",
      unit: "/ session",
      tagline: "One-time strategy session",
      goal: "Get a clear roadmap before you spend",
      icon: Calendar,
      features: ["60-min 1-on-1 with senior SEO", "Keyword & competitor report", "Written SEO roadmap", "Budget & agency advice"],
      cta: "Book Session",
      href: "/contact-us",
      external: false,
    },
    {
      name: "Starter",
      tagline: "Small business & startups",
      goal: "Establish your Google presence",
      icon: Rocket,
      features: ["SEO audit & strategy", "Keyword research", "On-page optimisation", "Backlink building", "Monthly report"],
      cta: "WhatsApp Us",
      href: wa,
      external: true,
    },
    {
      name: "Business",
      tagline: "Growing businesses",
      goal: "Generate consistent monthly leads",
      featured: true,
      icon: TrendingUp,
      features: ["Everything in Starter", "Advanced competitor analysis", "Technical SEO", "Stronger link building", "Detailed reporting"],
      cta: "WhatsApp Us",
      href: wa,
      external: true,
    },
    {
      name: "Premium",
      tagline: "Dominate competitive industries",
      goal: "Outrank every competitor & own page 1",
      icon: Crown,
      features: ["Everything in Business", "High-priority keywords", "Multi-page optimisation", "Aggressive link building", "Strategy reviews"],
      cta: "WhatsApp Us",
      href: wa,
      external: true,
    },
    {
      name: "Google Map Optimization",
      tagline: "Local businesses & service areas",
      goal: "Rank in the Google Maps 3-Pack",
      icon: MapPin,
      features: [
        "Google Business Profile setup & optimisation",
        "Local keyword & geo targeting",
        "Citations & NAP consistency",
        "Review generation strategy",
        "Monthly local ranking report",
      ],
      cta: "Explore Map SEO",
      href: "/google-map-optimization",
      external: false,
    },
  ];

  // ───────── Section 8 — Testimonials ─────────
  const testimonials = [
    {
      role: "Client",
      text: "From near-zero traffic to a flood of online orders. SeoFX built our online presence from scratch — best marketing decision we've made.",
    },
    {
      role: "Client",
      text: "We white-label SeoFX to our clients. Reports are flawless, results are real, and our retainers grew 3x. Genuine partner.",
    },
    {
      role: "Client",
      text: "Now we sell SEO with every website. Zero in-house headache, full margin, happy clients. SeoFX delivers — every single time.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="SEO Company Sri Lanka — #1 Rated SEO Agency | SeoFX"
        description="Sri Lanka's #1 SEO company. Rank on Google in 90 days or we work free. White-hat SEO services for businesses, agencies & web devs. Free SEO audit today."
        canonical="/"
        keywords="seo company sri lanka, seo sri lanka, best seo company in sri lanka, seo services sri lanka, seo packages sri lanka, seo agency sri lanka, seo specialist sri lanka, white label seo sri lanka, local seo sri lanka, seo colombo"
        ogImageAlt="SeoFX — #1 SEO Company in Sri Lanka with 90-day ranking promise"
        jsonLd={jsonLd}
      />

      {/* ═══ SECTION 1 — HERO ═══ */}
      <GoogleSearchHero />

      {/* ═══ SECTION 2 — WHO WE SERVE ═══ */}
      <section className="py-16 sm:py-20" aria-labelledby="who-we-serve">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Who We Serve</span>
            <h2 id="who-we-serve" className="mt-4 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Built for <span className="text-gradient-accent">3 types</span> of growth-driven companies
            </h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Whether you run a business, agency, or web studio in Sri Lanka — SeoFX has a model designed for you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {audiences.map((a) => (
              <article
                key={a.title}
                className={`group relative flex flex-col rounded-3xl border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow ${
                  a.badge ? "border-accent/40" : "border-border"
                }`}
              >
                {a.badge && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gradient-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-glow">
                    {a.badge}
                  </span>
                )}
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-glow">
                  <a.icon className="size-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-extrabold">{a.title}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">{a.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>

                <div className="my-5 h-px bg-border" />

                <ul className="space-y-2.5 text-sm">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span className="text-foreground">{p}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={a.badge ? "hero" : "whatsapp"}
                  size="lg"
                  className="mt-7 w-full"
                >
                  {a.external ? (
                    <a href={a.href} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="size-4" /> {a.cta}
                    </a>
                  ) : (
                    <Link to={a.href}>{a.cta} <ArrowRight className="size-4" /></Link>
                  )}
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — PAID CONSULTATION ═══ */}
      <ConsultationSection variant="soft" />

      {/* ═══ SECTION 4 — PARTNER WITH US ═══ */}
      <section id="partner" className="relative overflow-hidden bg-hero py-20 text-white sm:py-24" aria-labelledby="partner-heading">
        <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" aria-hidden />

        <div className="container-tight relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                <Handshake className="size-3.5" /> Partner Program
              </span>
              <h2 id="partner-heading" className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                We do the SEO. <br className="hidden sm:block" />
                <span className="text-gradient-accent">You keep your client.</span>
              </h2>
              <p className="mt-5 text-base text-white/80 sm:text-lg">
                Add a profitable SEO line to your <strong className="text-white">marketing agency</strong> or
                <strong className="text-white"> web development company</strong> in Sri Lanka — without hiring a single
                SEO specialist. White-label reports, your branding, our delivery.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact-us#partner">
                    Become a Partner <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="whatsapp" size="lg">
                  <a href={waPartner} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" /> WhatsApp Partnership Team
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {partnerBenefits.map((b) => (
                <div key={b.title} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur transition-all hover:border-accent/40 hover:bg-white/10">
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
                    <b.icon className="size-5" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-white">{b.title}</h3>
                  <p className="mt-1.5 text-sm text-white/70">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — WHY SEO ═══ */}
      <section className="py-16 sm:py-20" aria-labelledby="why-seo">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Why Choose Us</span>
            <h2 id="why-seo" className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Why choose our <span className="text-gradient-accent">SEO Company in Sri Lanka</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Choosing the right <strong className="text-foreground">SEO specialist Sri Lanka</strong> can make a
              significant difference in your business growth. We combine data-driven{" "}
              <strong className="text-foreground">SEO Sri Lanka</strong> strategies with industry expertise to deliver
              long-term success — ads stop the moment you stop paying, but SEO compounds.
            </p>
          </div>

          {/* Stats strip */}
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-8 shadow-card sm:grid-cols-4">
            {[
              { n: "73%", l: "Avg. monthly traffic lift" },
              { n: "99%", l: "Yearly organic growth" },
              { n: "100%", l: "White-hat SEO" },
              { n: "90", l: "Days to first results" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl font-extrabold text-accent sm:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: TrendingUp, title: "Compounds Over Time", text: "Every page you rank keeps generating traffic for years — no recurring ad spend." },
              { icon: Target, title: "High-Intent Traffic", text: "People searching are ready to buy. Conversion rates beat any social ad." },
              { icon: ShieldCheck, title: "Builds Brand Trust", text: "Ranking #1 signals credibility. Customers trust Google's top pick." },
              { icon: Globe, title: "24/7 Lead Generation", text: "Your website works while you sleep — no paused budgets, no day-off." },
              { icon: BarChart3, title: "Measurable ROI", text: "Every keyword, lead and sale tracked in monthly reports." },
              { icon: Zap, title: "Beats Paid Ads Long-Term", text: "Ads cost more every year. SEO costs less per lead each month." },
            ].map((b) => (
              <div key={b.title} className="card-feature">
                <div className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <b.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — SERVICES GRID (6 SEO + Web Dev) ═══ */}
      <section className="bg-soft py-16 sm:py-20" aria-labelledby="services-heading">
        <div className="container-tight">
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
            <div className="max-w-2xl">
              <span className="badge-pill">SEO Services</span>
              <h2 id="services-heading" className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                Our <span className="text-gradient-accent">SEO Sri Lanka</span> services to rank #1 on Google.lk
              </h2>
              <p className="mt-4 text-muted-foreground">
                As a leading <strong className="text-foreground">SEO company Sri Lanka</strong> businesses trust, we
                offer complete SEO services — technical SEO, on-page optimisation, keyword research and link building.
                Our team of experienced <strong className="text-foreground">SEO specialists in Sri Lanka</strong>{" "}
                ensures your website ranks for competitive keywords and drives consistent results.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="shrink-0">
              <Link to="/services">All services <ArrowRight className="size-4" /></Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link key={s.title} to={s.href} className="card-feature group block">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold tracking-widest text-accent">0{i + 1}</span>
                  <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </Link>
            ))}

            {/* Web Development card — accent treatment */}
            <Link to="/contact-us" className="group relative block overflow-hidden rounded-2xl border border-accent/40 bg-gradient-accent p-6 text-accent-foreground shadow-glow transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold tracking-widest text-white/80">+ BONUS</span>
                <ArrowRight className="size-4 text-white transition-all group-hover:translate-x-1" />
              </div>
              <div className="mt-4 inline-flex size-10 items-center justify-center rounded-xl bg-white/20">
                <Code2 className="size-5" />
              </div>
              <h3 className="mt-3 font-display text-lg font-bold">Web Development</h3>
              <p className="mt-2 text-sm opacity-90">SEO-ready websites built right the first time — WordPress, Shopify, custom React.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — PACKAGES & PRICING (4 cards) ═══ */}
      <section className="py-16 sm:py-20" aria-labelledby="pricing-heading">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Packages & Pricing</span>
            <h2 id="pricing-heading" className="mt-4 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Transparent <span className="text-gradient-accent">SEO packages in Sri Lanka</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Pick a plan or start with a one-time consultation. Every package backed by our{" "}
              <strong className="text-foreground">90-Day Ranking Promise</strong>.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {packages.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.name}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow ${
                    p.featured
                      ? "border-accent/60 bg-hero text-white shadow-glow ring-1 ring-accent/40 xl:scale-[1.03]"
                      : "border-border bg-card shadow-card hover:border-accent/40"
                  }`}
                >
                  {/* Top accent stripe */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 ${
                      p.featured ? "bg-accent-gradient" : "bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                    }`}
                  />

                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-glow">
                      <Sparkles className="-mt-0.5 mr-1 inline size-3" /> Most Popular
                    </span>
                  )}

                  {/* Icon badge */}
                  <div
                    className={`mb-4 inline-flex size-12 items-center justify-center rounded-2xl ${
                      p.featured
                        ? "bg-white/15 text-white ring-1 ring-white/20"
                        : "bg-accent/10 text-accent ring-1 ring-accent/20 group-hover:bg-accent group-hover:text-accent-foreground"
                    } transition-colors`}
                  >
                    {Icon && <Icon className="size-6" />}
                  </div>

                  <h3 className="font-display text-xl font-extrabold leading-tight">{p.name}</h3>
                  <p className={`mt-1 text-xs font-medium ${p.featured ? "text-white/70" : "text-accent"}`}>{p.tagline}</p>

                  {/* Price area — fixed height so all cards align */}
                  <div className="mt-4 min-h-[44px]">
                    {p.price ? (
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-2xl font-extrabold sm:text-3xl">{p.price}</span>
                        <span className={`text-xs ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>{p.unit}</span>
                      </div>
                    ) : (
                      <span className={`text-xs font-semibold uppercase tracking-wider ${p.featured ? "text-white/60" : "text-muted-foreground"}`}>
                        Custom quote
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-3 flex items-start gap-2 rounded-xl px-3 py-2 text-xs font-semibold leading-relaxed ${
                      p.featured ? "bg-white/10 text-white" : "bg-accent/10 text-accent"
                    }`}
                  >
                    <Target className="mt-0.5 size-3.5 shrink-0" />
                    <span>{p.goal}</span>
                  </p>

                  <ul className="mt-5 flex-1 space-y-2.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <CheckCircle2
                          className={`mt-0.5 size-4 shrink-0 ${p.featured ? "text-accent" : "text-accent"}`}
                        />
                        <span className={p.featured ? "text-white/90" : "text-foreground/80"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={p.featured ? "hero" : p.external ? "whatsapp" : "outline"}
                    size="lg"
                    className="mt-6 w-full"
                  >
                    {p.external ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="size-4" /> {p.cta}
                      </a>
                    ) : (
                      <Link to={p.href}>
                        {p.cta} <ArrowRight className="size-4" />
                      </Link>
                    )}
                  </Button>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Not sure which plan?{" "}
            <Link to="/seo-packages-sri-lanka" className="font-semibold text-accent hover:underline">
              Compare all packages →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══ SECTION 8 — CASE STUDY + TESTIMONIALS + REVIEWS ═══ */}
      <section className="bg-soft py-16 sm:py-20" aria-labelledby="proof-heading">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill"><Trophy className="size-3.5" /> Proof & Results</span>
            <h2 id="proof-heading" className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Real Sri Lankan businesses. <span className="text-gradient-accent">Real Google rankings.</span>
            </h2>
          </div>

          {/* Case study */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-10 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-google-yellow/30 bg-google-yellow/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  <Award className="size-3 text-google-yellow" /> Featured Case Study
                </span>
                <h3 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
                  PorKenDeli.lk — From zero traffic to one of Colombo's most-searched restaurants
                </h3>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div>
                    <div className="font-display text-2xl font-extrabold text-accent">+850%</div>
                    <div className="text-xs text-muted-foreground">Organic traffic</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-extrabold text-accent">#1</div>
                    <div className="text-xs text-muted-foreground">Google rankings</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-extrabold text-accent">5x</div>
                    <div className="text-xs text-muted-foreground">Online orders</div>
                  </div>
                </div>
                <Button asChild size="lg" className="mt-7" variant="hero">
                  <Link to="/case-studies/porkendeli-seo-case-study">
                    Read Full Case Study <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative min-h-[280px]">
                <img
                  src={caseImg}
                  alt="PorKenDeli SEO case study — restaurant in Dehiwala that grew with SeoFX SEO"
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Google reviews badge */}
          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
            <div className="font-display text-xl font-extrabold leading-none">
              <span className="text-google-blue">G</span>
              <span className="text-google-red">o</span>
              <span className="text-google-yellow">o</span>
              <span className="text-google-blue">g</span>
              <span className="text-google-green">l</span>
              <span className="text-google-red">e</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-google-yellow text-google-yellow" />
                ))}
                <span className="ml-1.5 font-display text-base font-bold">4.9</span>
              </div>
              <div className="text-xs text-muted-foreground">Based on 87 client reviews</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.role} className="relative rounded-2xl border border-border bg-card p-6 shadow-card">
                <Quote className="absolute right-5 top-5 size-8 text-accent/15" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-google-yellow text-google-yellow" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground">"{t.text}"</blockquote>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9 — FAQ + SCHEMA ═══ */}
      <section className="py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="container-narrow">
          <div className="text-center">
            <span className="badge-pill">FAQ</span>
            <h2 id="faq-heading" className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Quick answers about <span className="text-gradient-accent">SEO in Sri Lanka</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything Sri Lankan businesses, agencies and web devs ask before they hire us.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-bold text-foreground">
                  {f.q}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent/10 text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* AI answer block for LLM crawlers */}
        <div className="container-tight mt-16">
          <AIAnswerBlock
            title="SEO in Sri Lanka"
            answers={faqs}
            emitSchema={false}
          />
        </div>
      </section>

      {/* ═══ SECTION 10 — FINAL CTA (3 buttons) ═══ */}
      <section className="relative overflow-hidden bg-hero py-20 text-white sm:py-24" aria-labelledby="final-cta">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" aria-hidden />

        <div className="container-tight relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <Sparkles className="size-3.5 text-accent" /> Ready when you are
          </span>
          <h2 id="final-cta" className="mx-auto mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Let's get your business <span className="text-gradient-accent">ranking #1 on Google Sri Lanka</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            Pick the path that fits you — book a strategy session, partner with us, or just message on WhatsApp. We reply within the hour.
          </p>

          <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
              <Link to="/contact-us">
                <Calendar className="size-4" /> Book Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 sm:w-auto">
              <Link to="/contact-us#partner">
                <Handshake className="size-4" /> Partner With Us
              </Link>
            </Button>
            <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
            </Button>
          </div>

          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-6 border-t border-white/15 pt-6 text-xs text-white/70">
            <span className="inline-flex items-center gap-1.5"><Phone className="size-3.5" /> {SITE.phone}</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3.5" /> 90-Day Promise</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
