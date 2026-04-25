import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SERVICES } from "@/lib/services";

const Services = () => {
  return (
    <Layout>
      <SEO
        title="SEO Services in Sri Lanka | SEO Company Sri Lanka | SeoFX"
        description="SeoFX offers full-spectrum SEO services in Sri Lanka — keyword research, on-page SEO, link building, web development & digital marketing. Free SEO audit."
        canonical="/services"
        keywords="seo service sri lanka, seo companies sri lanka, seo company sri lanka, seo consulting sri lanka, link building sri lanka"
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
          <span className="badge-pill">SEO Services</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Complete <span className="text-gradient-accent">SEO Services</span> in Sri Lanka — Everything You Need to Rank #1
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            As one of the most comprehensive SEO companies in Sri Lanka, SeoFX offers end-to-end SEO services
            designed to increase your organic traffic, generate quality leads, and grow your business revenue.
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

      <CTASection
        title="Need a custom SEO strategy?"
        subtitle="Talk to a Sri Lankan SEO specialist today — free, no obligation."
      />
    </Layout>
  );
};

export default Services;
