import { Link } from "react-router-dom";
import {
  Award, Brain, Heart, MessageSquare, ShieldCheck, Target, ArrowRight, CheckCircle2,
  Search, Wrench, FileText, Link2, BarChart3, MapPin, Sparkles, Clock,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { SITE } from "@/lib/site";

const About = () => {
  const wa = `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi SeoFX, I'd like to speak to an SEO specialist in Sri Lanka."
  )}`;

  const faqs = [
    {
      q: "What does an SEO specialist in Sri Lanka actually do?",
      a: "An SEO specialist in Sri Lanka audits your website, researches local keywords, fixes technical SEO issues, optimises on-page content, builds white-hat backlinks and reports on rankings, organic traffic and leads each month — with the goal of getting your site to page 1 of Google.lk for buyer-intent searches.",
    },
    {
      q: "How is an SEO specialist different from an SEO agency?",
      a: "An SEO specialist is an individual expert who personally manages your account end-to-end. An SEO agency runs a team across multiple disciplines coordinated by an account manager. Specialists give direct accountability and continuity; agencies give scale and breadth. SeoFX combines both — a dedicated specialist supported by a structured team.",
    },
    {
      q: "How much does an SEO specialist in Sri Lanka cost?",
      a: "An SEO specialist in Sri Lanka typically costs between LKR 30,000 and LKR 150,000 per month depending on scope, industry competitiveness and engagement depth. SeoFX offers transparent SEO packages in Sri Lanka with no hidden costs.",
    },
    {
      q: "How long until I see results from an SEO specialist?",
      a: "Most SeoFX clients see initial ranking movements within 60–90 days, meaningful organic traffic growth by month 3–5, and competitive keyword rankings within 6–12 months. SEO compounds — the longer you invest, the stronger the results.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://seofx.lk/seo-specialist-sri-lanka#service",
      name: "SEO Specialist Sri Lanka — SeoFX",
      url: "https://seofx.lk/seo-specialist-sri-lanka",
      description:
        "Hire a senior SEO specialist in Sri Lanka. SeoFX delivers white-hat SEO, technical audits, keyword research, on-page optimisation and link building for Sri Lankan businesses.",
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      provider: { "@id": "https://seofx.lk/#organization" },
      telephone: SITE.phoneRaw,
      priceRange: "LKR 30,000 – LKR 150,000+",
      serviceType: ["SEO", "Technical SEO", "Local SEO", "Link Building"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seofx.lk/" },
        { "@type": "ListItem", position: 2, name: "SEO Specialist Sri Lanka", item: "https://seofx.lk/seo-specialist-sri-lanka" },
      ],
    },
  ];

  const responsibilities = [
    { icon: Wrench, title: "Technical SEO", text: "Crawlability, indexation, Core Web Vitals, mobile performance, schema, site speed — everything Google's bots need to rank you." },
    { icon: Search, title: "Keyword Research", text: "Maps high-intent Sri Lanka search terms — by city, language and buyer stage — to the right pages on your website." },
    { icon: FileText, title: "On-Page Optimisation", text: "Title tags, meta descriptions, headings, internal linking, content depth and image SEO — every page tuned to rank." },
    { icon: Link2, title: "Off-Page & Link Building", text: "White-hat backlinks from real Sri Lankan and international sites — editorial outreach, guest posts, digital PR." },
    { icon: MapPin, title: "Local SEO", text: "Google Business Profile, local citations, NAP consistency, map-pack rankings for Colombo, Kandy, Galle and beyond." },
    { icon: BarChart3, title: "Reporting & Analytics", text: "Monthly ranking reports, Google Search Console insights, organic lead attribution — full transparency, no vanity metrics." },
  ];

  const whyLocal = [
    "Understands Sri Lankan search behaviour in English, Sinhala and Tamil",
    "Knows seasonal patterns — Avurudu, tourism high season, school cycles",
    "Familiar with local competitor landscape across every major industry",
    "Mobile-first approach — 70%+ of searches in Sri Lanka happen on mobile",
    "Direct local communication — no offshore handoffs or time-zone delays",
    "Real case studies from Sri Lankan businesses you can verify",
  ];

  return (
    <Layout>
      <SEO
        title="SEO Specialist Sri Lanka | Hire a Senior SEO Expert | SeoFX"
        description="Hire a senior SEO specialist in Sri Lanka. SeoFX's SEO experts deliver white-hat technical SEO, keyword research, on-page optimisation and link building for measurable Google rankings."
        canonical="/seo-specialist-sri-lanka"
        keywords="seo specialist sri lanka, seo specialist in sri lanka, seo expert sri lanka, seo consultant sri lanka, hire seo specialist sri lanka, best seo specialist sri lanka, seo company sri lanka"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: "SEO Specialist Sri Lanka" }]} />

      {/* HERO */}
      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">SEO Specialist Sri Lanka</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Hire a Senior <span className="text-gradient-accent">SEO Specialist in Sri Lanka</span> Who Actually Ranks Websites
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            SeoFX is led by a team of dedicated SEO specialists in Sri Lanka — delivering white-hat technical SEO,
            keyword strategy, on-page optimisation and link building that turns your website into a 24/7 lead
            generation machine. No outsourcing. No black-hat shortcuts. Just measurable Google rankings.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact-us">Get a Free SEO Audit <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp Our SEO Specialist</a>
            </Button>
          </div>
        </div>
      </section>

      {/* INTRO + STATS */}
      <section className="container-tight pb-16 sm:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              What Does an SEO Specialist in Sri Lanka Do?
            </h2>
            <p>
              An <strong className="text-foreground">SEO specialist in Sri Lanka</strong> is the professional
              responsible for getting your website ranked on the first page of Google.lk for the search terms your
              ideal customers are typing every single day. They sit at the intersection of technology, content
              strategy, data analysis and local market knowledge — and when they do their job well, your business
              stops paying for every lead and starts earning organic traffic that compounds for years.
            </p>
            <p>
              At SeoFX, every client is paired with a senior <strong className="text-foreground">SEO specialist</strong>
              {" "}who personally owns your strategy from day one. There are no junior account managers learning on your
              budget, no offshore handoffs, no template campaigns. We build a custom SEO programme around your
              business, your industry and the way Sri Lankan customers actually search — then execute it with
              transparent monthly reporting so you always know exactly what is happening and why.
            </p>
            <p>
              Whether you run a hotel in Galle, a clinic in Colombo, an e-commerce store shipping island-wide or a
              professional services firm targeting a single city, our <Link to="/seo-packages-sri-lanka" className="text-accent underline-offset-4 hover:underline">SEO packages in Sri Lanka</Link> are built to deliver
              real ranking gains, qualified organic leads and a measurable return on every rupee invested.
            </p>
            <p>
              Want the full breakdown? Read our deep-dive on <Link to="/blog/what-does-seo-specialist-sri-lanka-do" className="text-accent underline-offset-4 hover:underline">what an SEO specialist in Sri Lanka actually does</Link>,
              or compare options in our guide on <Link to="/blog/seo-specialist-vs-seo-agency-sri-lanka" className="text-accent underline-offset-4 hover:underline">SEO specialist vs SEO agency in Sri Lanka</Link>.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-soft p-8">
            <h2 className="font-display text-xl font-bold">Our Specialist Stats</h2>
            <div className="mt-6 space-y-6">
              {[
                { stat: "73%", text: "Average increase in monthly organic traffic for clients" },
                { stat: "99%", text: "Yearly organic traffic growth for long-term clients" },
                { stat: "100%", text: "White-hat, Google-compliant SEO practices" },
                { stat: "90", text: "Days to first measurable ranking gains" },
              ].map((s) => (
                <div key={s.stat} className="flex items-baseline gap-4">
                  <span className="font-display text-4xl font-extrabold text-gradient-accent">{s.stat}</span>
                  <span className="text-sm text-muted-foreground">{s.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/5 p-5">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="size-4" />
                <span className="text-xs font-bold uppercase tracking-wider">90-Day Promise</span>
              </div>
              <p className="mt-2 text-sm text-foreground">
                If your target keywords don't move in 90 days, your SEO specialist keeps working free until they do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE RESPONSIBILITIES */}
      <section className="bg-soft py-20" aria-labelledby="responsibilities">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Core Skills</span>
            <h2 id="responsibilities" className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              The 6 Disciplines of a Real <span className="text-gradient-accent">SEO Specialist in Sri Lanka</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A genuine SEO specialist owns every one of these workstreams — not just one or two. Here's exactly what
              we deliver inside every SeoFX engagement.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {responsibilities.map((r) => (
              <article key={r.title} className="card-feature">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                  <r.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LOCAL SPECIALIST */}
      <section className="container-tight py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="badge-pill">Local Expertise</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Why a <span className="text-gradient-accent">Sri Lanka-Based SEO Specialist</span> Outperforms Generic Agencies
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              SEO in Sri Lanka is not the same as SEO in the UK or the US. Search behaviour is multilingual, mobile-led
              and shaped by local culture and seasonality. A Sri Lanka-based SEO specialist brings context that no
              international agency template can replicate.
            </p>
            <ul className="mt-7 space-y-3">
              {whyLocal.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild variant="hero" size="lg">
                <Link to="/blog/how-to-find-best-seo-specialist-sri-lanka">
                  How to Find the Best SEO Specialist <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            {[
              { icon: Brain, title: "Knowledge-Based SEO", text: "Built on genuine expertise — never outdated black-hat shortcuts that risk Google penalties." },
              { icon: Heart, title: "Personally Invested", text: "Your dedicated SEO specialist treats your rankings like their own — no offshore handoffs." },
              { icon: Target, title: "Custom Strategy", text: "Tailored to your industry, audience, competition and growth stage — never copy-paste." },
              { icon: MessageSquare, title: "Full Transparency", text: "Monthly reports with real Google data — no vanity metrics, no hidden activity." },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                  <f.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-soft py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">What to Expect</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Realistic Timeline When You Hire an <span className="text-gradient-accent">SEO Specialist in Sri Lanka</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Any specialist promising page-one rankings in 30 days is misleading you. Here's what real SEO actually
              looks like — and when you'll see results.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {[
              { weeks: "Weeks 1–4", title: "Audit, strategy & on-page foundations", text: "Technical SEO audit, keyword research, page-by-page on-page optimisation. Google starts re-crawling improved pages." },
              { weeks: "Months 2–3", title: "Early ranking gains", text: "On-page improvements take effect. First ranking movements for lower-competition keywords. Modest organic traffic growth begins." },
              { weeks: "Months 4–6", title: "Consistent growth", text: "Meaningful organic traffic in Search Console. Link building begins contributing to authority. Lead enquiries from organic search start arriving." },
              { weeks: "Months 6–12", title: "Page-1 dominance", text: "Significant rankings for competitive keywords. Predictable monthly organic leads. Measurable ROI vs paid ads." },
              { weeks: "Month 12+", title: "Compounding results", text: "Rankings stabilise at strong positions. Organic traffic and leads continue growing as authority compounds — for years." },
            ].map((p, i) => (
              <div key={p.weeks} className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex flex-col items-center">
                  <div className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-gradient font-display text-sm font-bold text-accent-foreground shadow-glow">
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                    <Clock className="size-3.5" /> {p.weeks}
                  </div>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="container-tight py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, label: "100% White-hat SEO" },
            { icon: Award, label: "Proven across industries" },
            { icon: CheckCircle2, label: "Local Sri Lanka expertise" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
              <b.icon className="size-5 text-accent" />
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-soft py-20" aria-labelledby="specialist-faq">
        <div className="container-narrow">
          <div className="text-center">
            <span className="badge-pill">FAQ</span>
            <h2 id="specialist-faq" className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Common Questions About <span className="text-gradient-accent">SEO Specialists in Sri Lanka</span>
            </h2>
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
      </section>

      <CTASection
        title="Ready to work with a senior SEO specialist in Sri Lanka?"
        subtitle="Get a free SEO audit, a custom keyword strategy and an honest conversation about what your business can realistically rank for."
      />
    </Layout>
  );
};

export default About;
