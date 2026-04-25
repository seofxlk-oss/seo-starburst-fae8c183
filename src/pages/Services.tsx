import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { AIAnswerBlock } from "@/components/AIAnswerBlock";
import { SERVICES } from "@/lib/services";

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
];


const Services = () => {
  return (
    <Layout>
      <SEO
        title="SEO Services Sri Lanka | SEO Service Sri Lanka | SeoFX"
        description="SEO services Sri Lanka by SeoFX — full SEO service in Sri Lanka covering audit, keyword research, on-page, link building & local SEO. Free SEO audit."
        canonical="/services"
        keywords="seo services sri lanka, seo service sri lanka, seo companies sri lanka, seo company sri lanka, best seo company sri lanka, seo sri lanka"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Search Engine Optimization",
          provider: { "@id": "https://seofx.lk/#organization" },
          areaServed: { "@type": "Country", name: "Sri Lanka" },
          name: "SEO Services in Sri Lanka",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "SEO Services",
            itemListElement: SERVICES.map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.title,
                url: `https://seofx.lk/services/${s.slug}`,
              },
            })),
          },
        }}
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

      <section className="container-tight pb-16 sm:pb-20">
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
