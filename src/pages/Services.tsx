import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  BarChart3,
  ShieldCheck,
  Eye,
  Search,
  FileText,
  Wrench,
  Link2,
  LineChart,
  MapPin,
  ShoppingCart,
  Hotel,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Building2,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { AIAnswerBlock } from "@/components/AIAnswerBlock";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import {
  orgSchema,
  websiteSchema,
  localBusinessSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";

const WHY_CHOOSE = [
  {
    icon: MapPin,
    title: "Local Sri Lanka Market Expertise",
    text: "We understand Sri Lankan consumer search behaviour, Sinhala/Tamil/English query patterns, and the competitive landscape across Colombo, Kandy, Galle, Jaffna and beyond — so your SEO targets buyers, not just traffic.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven SEO Decisions",
    text: "Every SEO strategy we build is backed by real data — search volume, SERP analysis, competitor intelligence, Core Web Vitals and conversion analytics — not guesswork or generic templates.",
  },
  {
    icon: ShieldCheck,
    title: "100% White-Hat SEO Methodology",
    text: "We never use shortcuts, PBNs or black-hat techniques. Our ethical SEO approach builds sustainable Google rankings that survive every algorithm update — protecting your domain long-term.",
  },
  {
    icon: Eye,
    title: "Full Transparency & Reporting",
    text: "Detailed monthly SEO reports, clear KPIs (rankings, traffic, leads, revenue) and direct access to your dedicated Sri Lankan SEO specialist — no jargon, no black boxes, no surprises.",
  },
];

const PROCESS_STEPS = [
  {
    icon: Search,
    step: "Step 01",
    title: "Discovery & Free SEO Audit",
    text: "Free website SEO audit to assess your current technical health, content quality, backlink profile and ranking gaps in the Sri Lankan market.",
  },
  {
    icon: FileText,
    step: "Step 02",
    title: "Keyword Research & Strategy",
    text: "Custom SEO roadmap aligned to your business goals — mapping high-intent Sri Lankan keywords to revenue pages.",
  },
  {
    icon: Wrench,
    step: "Step 03",
    title: "On-Site SEO Optimisation",
    text: "Technical SEO fixes, content enhancements, schema markup, internal linking and Core Web Vitals improvements.",
  },
  {
    icon: Link2,
    step: "Step 04",
    title: "Off-Site SEO & Link Building",
    text: "Authority building through quality white-hat backlinks, digital PR and Google Business Profile optimisation.",
  },
  {
    icon: LineChart,
    step: "Step 05",
    title: "Monitor, Report & Grow",
    text: "Monthly SEO reporting, ranking tracking, conversion analysis and continuous optimisation to compound results.",
  },
];

const INDUSTRIES = [
  { icon: ShoppingCart, name: "E-commerce SEO", text: "Product, category and collection page SEO for Sri Lankan online stores." },
  { icon: Hotel, name: "Hotels & Tourism SEO", text: "Local SEO for hotels, villas and tour operators across Sri Lanka." },
  { icon: Stethoscope, name: "Healthcare SEO", text: "Clinics, hospitals and medical practices in Colombo and beyond." },
  { icon: GraduationCap, name: "Education SEO", text: "Schools, institutes and online education providers." },
  { icon: Briefcase, name: "Professional Services SEO", text: "Lawyers, accountants, consultants, agencies and B2B firms." },
  { icon: Building2, name: "Real Estate SEO", text: "Property developers and real estate agencies in Sri Lanka." },
];

const LOCATIONS = [
  "Colombo", "Kandy", "Galle", "Negombo", "Jaffna", "Kurunegala",
  "Matara", "Nuwara Eliya", "Anuradhapura", "Trincomalee", "Batticaloa", "Ratnapura",
];

const STATS = [
  { num: "50+", label: "Sri Lankan businesses served" },
  { num: "3×", label: "Average organic traffic increase" },
  { num: "100%", label: "White-hat SEO methodology" },
  { num: "10+", label: "Years of SEO experience" },
];

const SERVICES_AI_ANSWERS = [
  {
    q: "What does an SEO service in Sri Lanka include?",
    a: "An SEO service in Sri Lanka from SeoFX includes a website SEO audit, keyword research targeting Sri Lankan search intent, on-site SEO (titles, headers, schema, internal links), technical SEO (speed, Core Web Vitals, mobile), white-hat off-site SEO and link building, local SEO for Google Maps, and monthly performance reporting.",
  },
  {
    q: "Which SEO services do top SEO companies in Sri Lanka offer?",
    a: "Top SEO companies in Sri Lanka offer SEO consulting, technical audits, keyword research, on-page SEO, off-page SEO, link building, content SEO, e-commerce SEO and local SEO. SeoFX delivers all of these end-to-end under one roof.",
  },
  {
    q: "Do SEO services in Sri Lanka work for small businesses?",
    a: "Yes. SEO services are one of the highest-ROI marketing channels for small Sri Lankan businesses because they generate compounding organic traffic and leads without the recurring cost of Google Ads or Facebook Ads.",
  },
  {
    q: "How is SeoFX different from other SEO companies in Sri Lanka?",
    a: "SeoFX uses 100% white-hat SEO methods, provides transparent monthly reports, and is run by in-house Sri Lankan SEO specialists with documented case studies — unlike many SEO companies in Sri Lanka that rely on outsourced or low-quality tactics.",
  },
  {
    q: "How much do SEO services in Sri Lanka cost?",
    a: "SEO services in Sri Lanka typically cost between LKR 30,000 and LKR 250,000 per month depending on competition, scope and goals. SeoFX offers transparent SEO packages for Sri Lankan SMEs, e-commerce stores and enterprise clients — see our SEO packages page for current pricing.",
  },
  {
    q: "How long do SEO services take to show results in Sri Lanka?",
    a: "Most Sri Lankan businesses see measurable SEO improvements within 3–6 months. Highly competitive niches (insurance, finance, real estate) may take 6–12 months to achieve top-3 Google rankings. SEO is a long-term investment that compounds over time.",
  },
  {
    q: "Which industries does SeoFX provide SEO services for in Sri Lanka?",
    a: "SeoFX provides SEO services to Sri Lankan e-commerce stores, hotels and tourism operators, healthcare clinics, education providers, real estate firms, professional services (lawyers, accountants, agencies) and B2B companies — across Colombo, Kandy, Galle, Jaffna and the entire island.",
  },
  {
    q: "Do you offer a free SEO audit in Sri Lanka?",
    a: "Yes — SeoFX provides a complimentary SEO audit for Sri Lankan businesses. We evaluate your current Google rankings, technical SEO health, content gaps and backlink profile, then outline a tailored SEO strategy at no cost.",
  },
];


const Services = () => {
  return (
    <Layout>
      <SEO
        title="SEO Services in Sri Lanka — Full SEO Service | SeoFX"
        description="Full-service SEO in Sri Lanka: audit, keyword research, on-page, link building, local & e-commerce SEO. 50+ Sri Lankan brands ranked. Free SEO audit."
        canonical="/services"
        keywords="seo services sri lanka, seo service sri lanka, seo company sri lanka, best seo services sri lanka, technical seo sri lanka, on page seo sri lanka, off page seo sri lanka, local seo sri lanka, ecommerce seo sri lanka, link building sri lanka"
        ogImageAlt="Full SEO services in Sri Lanka by SeoFX — audit, on-page, link building, local SEO"
        jsonLd={[
          orgSchema(),
          websiteSchema(),
          localBusinessSchema(),
          serviceSchema({
            name: "SEO Services in Sri Lanka",
            description:
              "End-to-end SEO services in Sri Lanka — SEO consulting, technical audits, keyword research, on-page SEO, link building, local SEO and content SEO from SeoFX.",
            url: `${SITE.url}/services`,
            offers: SERVICES.map((s) => ({
              name: s.title,
              url: `${SITE.url}/services/${s.slug}`,
              description: s.cardIntro,
            })),
          }),
          faqSchema(SERVICES_AI_ANSWERS),
        ]}
      />
      <Breadcrumbs items={[{ label: "Services" }]} />

      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">SEO Services Sri Lanka</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            <span className="text-gradient-accent">SEO Services in Sri Lanka</span> — Full SEO Service from Sri Lanka's Leading SEO Company
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            SeoFX offers complete <strong className="text-foreground">SEO services in Sri Lanka</strong> — every
            <strong className="text-foreground"> SEO service</strong> a Sri Lankan business needs to rank #1 on Google,
            generate quality leads and grow revenue, all under one trusted <strong className="text-foreground">SEO company in Sri Lanka</strong>.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm">
                <div className="font-display text-2xl font-extrabold text-accent sm:text-3xl">{s.num}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro long-form copy for SEO */}
      <section className="container-tight pb-12">
        <div className="mx-auto max-w-4xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Looking for the best <strong className="text-foreground">SEO services in Sri Lanka</strong>? SeoFX is a results-driven
            <strong className="text-foreground"> SEO company in Sri Lanka</strong> helping local businesses, e-commerce stores and
            global brands dominate Google search. Whether you're in Colombo, Kandy, Galle or Jaffna, our
            <strong className="text-foreground"> SEO service</strong> is built to deliver qualified organic traffic, higher rankings and real revenue.
          </p>
          <p>
            Unlike agencies that focus only on rankings, our <strong className="text-foreground">SEO services in Sri Lanka</strong> are
            engineered around business outcomes — leads, sales and ROI. We combine deep technical SEO, strategic content,
            ethical link building and conversion-focused on-page optimisation to make sure every visitor we send to your site
            becomes a customer.
          </p>
          <p>
            From SEO audits and keyword research to local SEO, e-commerce SEO and enterprise SEO consulting, our Sri Lankan
            SEO specialists work as an extension of your team. Every campaign is custom-built for your industry, market and
            competition — never templated, never outsourced.
          </p>
        </div>
      </section>

      <section className="container-tight pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article key={s.slug} className="card-feature group">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-display text-xs font-bold tracking-widest text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-xl font-bold">
                  <Link to={`/services/${s.slug}`} className="hover:text-accent">
                    {s.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.cardIntro}</p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.slice(0, 4).map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${s.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn more <ArrowRight className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE SEOFX */}
      <section className="container-tight pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">Why SeoFX</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Why Sri Lankan Businesses Choose SeoFX for SEO Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            We combine deep local Sri Lankan market knowledge with world-class SEO methodology to deliver results
            that actually impact your bottom line — not just vanity rankings.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {WHY_CHOOSE.map((w, i) => {
            const Icon = w.icon;
            return (
              <article key={w.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-display text-xs font-bold tracking-widest text-muted-foreground">
                      0{i + 1}
                    </div>
                    <h3 className="mt-1 font-display text-lg font-bold">{w.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Our SEO Process</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              How We Deliver SEO Services in Sri Lanka
            </h2>
            <p className="mt-4 text-muted-foreground">
              A proven 5-step SEO process that takes Sri Lankan businesses from invisible to page one of Google.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.title} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
                  <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                    <Icon className="size-5" />
                  </div>
                  <div className="mt-3 font-display text-xs font-bold tracking-widest text-accent">{p.step}</div>
                  <h3 className="mt-1 font-display text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">Industries</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            SEO Services for Every Industry in Sri Lanka
          </h2>
          <p className="mt-4 text-muted-foreground">
            From e-commerce and hospitality to healthcare and B2B — SeoFX delivers specialised SEO services tailored to your industry.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <article key={ind.name} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-3 font-display text-base font-bold">{ind.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{ind.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Locations</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              SEO Services Across Sri Lanka
            </h2>
            <p className="mt-4 text-muted-foreground">
              Headquartered in Colombo and serving SEO clients island-wide — and Sri Lankan businesses targeting global markets in the UK, Australia, USA and the Middle East.
            </p>
          </div>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {LOCATIONS.map((loc) => (
              <span
                key={loc}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground shadow-sm"
              >
                <MapPin className="size-3.5 text-accent" />
                SEO in {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-tight pb-16 sm:pb-20 pt-16 sm:pt-20">
        <AIAnswerBlock
          title="SEO Services in Sri Lanka"
          answers={SERVICES_AI_ANSWERS}
        />
      </section>

      <CTASection
        title="Need a custom SEO strategy?"
        subtitle="Talk to a Sri Lankan SEO specialist today — free, no obligation."
      />
    </Layout>
  );
};

export default Services;
