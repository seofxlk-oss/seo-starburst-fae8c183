import { Link } from "react-router-dom";
import {
  CheckCircle2, ArrowRight, Sparkles, ShieldCheck, MessageCircle, Search,
  TrendingUp, Trophy, Zap, Target, Award, Star,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { AIAnswerBlock } from "@/components/AIAnswerBlock";
import { ConsultationSection } from "@/components/ConsultationSection";
import { SITE } from "@/lib/site";

const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;

const PRICING_AI_ANSWERS = [
  {
    q: "What is the SEO price in Sri Lanka?",
    a: "SEO price in Sri Lanka starts from LKR 29,900/month for the Starter package, LKR 59,900/month for Business, and LKR 99,900+/month for Premium at SeoFX. Every package is backed by a 90-Day Ranking Promise.",
  },
  {
    q: "What SEO packages in Sri Lanka does SeoFX offer?",
    a: "SeoFX offers three SEO packages in Sri Lanka — Starter (get visible on Google), Business (consistent leads + traffic), and Premium (rank #1 + dominate competitors). Each includes keyword targeting, on-page optimisation, link building, monthly reports and a 90-day ranking promise.",
  },
  {
    q: "How much should a small business pay for SEO in Sri Lanka?",
    a: "A small Sri Lankan business should budget LKR 29,900–59,900 per month for SEO. The Starter package from SeoFX targets up to 5 high-intent keywords, fixes technical issues and starts authority building.",
  },
  {
    q: "Are cheap SEO packages in Sri Lanka worth it?",
    a: "Cheap SEO packages in Sri Lanka often use spammy black-hat tactics that get sites penalised. SeoFX uses 100% white-hat SEO with a 90-Day Ranking Promise — your keywords move in 90 days or we work free until they do.",
  },
];

// ───────── High-converting packages ─────────
const packages = [
  {
    name: "Starter",
    icon: "🔥",
    badge: "Best for small businesses",
    goal: "Get your site visible on Google",
    desc: "Best for small businesses starting SEO in Sri Lanka",
    features: [
      "SEO Strategy + Setup",
      "Keyword Targeting (Up to 5 Keywords)",
      "Full Website SEO Audit + Fix Plan",
      "1 Page Optimisation (High-Intent Page)",
      "Meta Titles & CTR Optimisation",
      "Google Indexing + Technical Setup",
      "Backlink Building",
      "Monthly Ranking Report",
    ],
  },
  {
    name: "Business",
    icon: "🚀",
    badge: "Most Popular",
    goal: "Increase traffic + generate leads",
    desc: "For businesses that want consistent leads",
    featured: true,
    features: [
      "Everything in Starter, plus:",
      "10–15 Keywords Targeted",
      "3 Page SEO Optimisations",
      "Competitor Analysis (Top 5 competitors)",
      "Technical SEO Fixes",
      "Backlink Building",
      "Content Optimisation (Conversion-focused)",
      "Monthly Growth Strategy Call",
    ],
  },
  {
    name: "Premium",
    icon: "👑",
    badge: "Dominate Google",
    goal: "Rank #1 + dominate competitors",
    desc: "For dominating Google in Sri Lanka",
    features: [
      "Everything in Business, plus:",
      "20+ High-Intent Keywords",
      "Full Website Optimisation",
      "Aggressive Backlink Strategy",
      "Authority Building (PR / Guest Posts)",
      "Conversion Funnel Optimisation",
      "Weekly Tracking + Priority Support",
    ],
  },
];

const faqs = [
  {
    q: "How does the 90-Day Ranking Promise work?",
    a: "If your target keywords don't move significantly within 90 days of launch, we keep working on your campaign at no extra cost until they do. It's our written commitment that you only pay for results — not effort.",
  },
  {
    q: "How much does SEO cost in Sri Lanka?",
    a: "SEO pricing in Sri Lanka at SeoFX starts at LKR 29,900/month (Starter), LKR 59,900/month (Business), and LKR 99,900+/month (Premium). All packages are transparent with no hidden fees and include a free SEO audit before you commit.",
  },
  {
    q: "Is SEO worth the investment for a Sri Lankan business?",
    a: "Absolutely. Unlike paid ads which stop the moment you stop paying, SEO builds a lasting digital asset. Our clients average a 73% monthly traffic lift and 99% yearly organic growth — making SEO the highest-ROI marketing channel for Sri Lankan businesses.",
  },
  {
    q: "How long does it take to see SEO results in Sri Lanka?",
    a: "Most clients see measurable ranking improvements within 60–90 days and strong page-one results in 4–6 months. Our 90-Day Ranking Promise guarantees you'll see movement — or we work free until you do.",
  },
];

const Pricing = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Search Engine Optimization",
    provider: { "@id": "https://seofx.lk/#organization" },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    name: "SEO Packages Sri Lanka",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SEO Packages Sri Lanka",
      itemListElement: packages.map((p) => ({
        "@type": "Offer",
        name: `${p.name} SEO Package Sri Lanka`,
        availability: "https://schema.org/InStock",
        url: `https://seofx.lk/seo-packages-sri-lanka#${p.name.toLowerCase()}`,
      })),
    },
  };

  return (
    <Layout>
      <SEO
        title="SEO Packages in Sri Lanka | SEO Services & Plans | SeoFX"
        description="SEO packages in Sri Lanka by SeoFX — Starter, Business & Premium SEO plans built for real results. 90-Day Ranking Promise. WhatsApp us for a custom quote today."
        canonical="/seo-packages-sri-lanka"
        keywords="seo packages in sri lanka, seo price in sri lanka, seo packages sri lanka, seo cost sri lanka, affordable seo sri lanka, seo company sri lanka"
        jsonLd={[faqJsonLd, offerJsonLd]}
      />
      <Breadcrumbs items={[{ label: "SEO Packages" }]} />

      {/* ═══ HERO ═══ */}
      <section className="container-tight pt-12 pb-8 sm:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">SEO Packages & Pricing</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            <span className="text-gradient-accent">SEO Packages in Sri Lanka</span> Built to Deliver Real Results
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Transparent <strong className="text-foreground">SEO price in Sri Lanka</strong> from{" "}
            <strong className="text-foreground">LKR 29,900/month</strong> — designed to generate{" "}
            <strong className="text-foreground">leads, rankings and traffic</strong>, not just busywork.
          </p>
        </div>

        {/* 🔥 90-Day Promise hook — the conversion booster */}
        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border-2 border-accent/40 bg-hero p-6 text-center text-white shadow-glow sm:p-8">
          <div className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              <ShieldCheck className="size-3.5" /> Our 90-Day Ranking Promise
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
              Rank on Google in <span className="text-gradient-accent">90 Days</span> — or We Work Free Until You Do.
            </h2>
            <p className="mt-3 text-sm text-white/80 sm:text-base">
              You only pay for results. If your target keywords don't move in 90 days, we keep working at no extra cost.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PROOF STRIP ═══ */}
      <section className="container-tight py-8">
        <div className="grid gap-3 rounded-2xl border border-border bg-card p-6 shadow-card sm:grid-cols-4">
          {[
            { icon: TrendingUp, n: "73%", l: "Avg. monthly traffic lift" },
            { icon: Trophy, n: "99%", l: "Yearly organic growth" },
            { icon: ShieldCheck, n: "100%", l: "White-hat SEO" },
            { icon: Star, n: "4.9★", l: "Google reviews (87+)" },
          ].map((s) => (
            <div key={s.l} className="flex items-center gap-3 text-left">
              <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <s.icon className="size-5" />
              </div>
              <div>
                <div className="font-display text-lg font-extrabold text-foreground">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PACKAGES ═══ */}
      <section className="container-tight pb-20 pt-4">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              id={p.name.toLowerCase()}
              className={`relative flex flex-col rounded-3xl border p-7 transition-all hover:-translate-y-1 ${
                p.featured
                  ? "border-accent bg-hero text-white shadow-glow lg:scale-[1.03]"
                  : "border-border bg-card shadow-card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-gradient px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-glow">
                  <Sparkles className="-mt-0.5 mr-1 inline size-3" /> {p.badge}
                </span>
              )}

              {/* Icon + Name */}
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden>{p.icon}</span>
                <h2 className="font-display text-2xl font-extrabold">{p.name}</h2>
              </div>
              <p className={`mt-2 text-sm ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>
                {p.desc}
              </p>

              {/* spacer */}
              <div className="mt-5" />

              {/* GOAL — the killer differentiator */}
              <div className={`mt-4 rounded-xl border px-4 py-3 ${
                p.featured
                  ? "border-white/20 bg-white/10"
                  : "border-accent/20 bg-accent/5"
              }`}>
                <div className="flex items-center gap-2">
                  <Target className={`size-4 ${p.featured ? "text-accent" : "text-accent"}`} />
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${
                    p.featured ? "text-accent" : "text-accent"
                  }`}>
                    Goal
                  </span>
                </div>
                <p className={`mt-1 font-display text-sm font-bold ${p.featured ? "text-white" : "text-foreground"}`}>
                  {p.goal}
                </p>
              </div>

              <div className={`my-6 h-px ${p.featured ? "bg-white/15" : "bg-border"}`} />

              <ul className="flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className={`mt-0.5 size-4 shrink-0 ${p.featured ? "text-accent" : "text-accent"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <div className="mt-7">
                <Button
                  asChild
                  variant={p.featured ? "hero" : "whatsapp"}
                  size="lg"
                  className="w-full"
                >
                  <a
                    href={wa(`Hi SeoFX, I'm interested in the ${p.name} SEO package. Can you share more details and pricing?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" /> WhatsApp Us
                  </a>
                </Button>
              </div>

              {/* Trust footer */}
              <p className={`mt-4 flex items-center justify-center gap-1.5 text-[11px] ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>
                <ShieldCheck className="size-3" /> 90-Day Ranking Promise included
              </p>
            </article>
          ))}
        </div>

        {/* Below-pricing trust line */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-soft px-6 py-5 text-center">
          <p className="text-sm text-muted-foreground">
            <Zap className="-mt-0.5 mr-1.5 inline size-4 text-accent" />
            <strong className="text-foreground">No long-term contracts.</strong> Cancel anytime.
            <strong className="text-foreground"> No hidden fees.</strong> Free audit before you commit.
          </p>
        </div>
      </section>

      {/* ═══ COMPARISON ROW — quick scan ═══ */}
      <section className="bg-soft py-16">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill"><Award className="size-3.5" /> Quick Compare</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Which SEO package fits your <span className="text-gradient-accent">growth stage</span>?
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { stage: "Just starting out", pkg: "Starter", desc: "Local shops, new businesses, anyone needing a strong Google foundation." },
              { stage: "Ready to scale", pkg: "Business", desc: "Established brands wanting predictable monthly leads and traffic growth." },
              { stage: "Want to dominate", pkg: "Premium", desc: "Competitive industries fighting for #1 — finance, e-commerce, real estate." },
            ].map((s) => (
              <div key={s.pkg} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-accent">{s.stage}</div>
                <div className="mt-2 font-display text-xl font-extrabold">→ {s.pkg}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PAID CONSULTATION ═══ */}
      <ConsultationSection variant="light" />

      {/* ═══ FAQ ═══ */}
      <section className="bg-soft py-20">
        <div className="container-narrow">
          <div className="text-center">
            <span className="badge-pill">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Common questions about <span className="text-gradient-accent">SEO pricing in Sri Lanka</span>
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-bold text-foreground">
                  {f.q}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent/10 text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AI ANSWER BLOCK ═══ */}
      <section className="container-tight py-16">
        <AIAnswerBlock
          title="SEO Price & Packages in Sri Lanka — Quick Answers"
          answers={PRICING_AI_ANSWERS}
        />
      </section>

      <CTASection
        title="Ready to rank #1 on Google Sri Lanka?"
        subtitle="Start with a free SEO audit — we'll show you exactly which package fits your business and what results to expect."
      />
    </Layout>
  );
};

export default Pricing;
