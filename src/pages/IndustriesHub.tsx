import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { SITE } from "@/lib/site";
import {
  orgSchema,
  websiteSchema,
  localBusinessSchema,
  serviceSchema,
} from "@/lib/schema";
import { INDUSTRIES } from "@/lib/industries";

const IndustriesHub = () => {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industry SEO Services in Sri Lanka",
    url: `${SITE.url}/industries`,
    itemListElement: INDUSTRIES.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${i.navLabel} Sri Lanka`,
      url: `${SITE.url}/${i.slug}`,
    })),
  };

  return (
    <Layout>
      <SEO
        title="Industry SEO Sri Lanka — Hotels, Travel, Ecommerce & More | SeoFX"
        description="Industry-specific SEO services in Sri Lanka — hotels, travel, furniture, education, healthcare, ecommerce, exports & fashion. Rank locally and globally."
        canonical="/industries"
        keywords="industry seo sri lanka, niche seo sri lanka, industry specific seo, seo for hotels sri lanka, seo for ecommerce sri lanka, seo for exports sri lanka, seo for healthcare sri lanka"
        ogImageAlt="Industry SEO services in Sri Lanka by SeoFX — 8 industries covered"
        jsonLd={[
          orgSchema(),
          websiteSchema(),
          localBusinessSchema(),
          serviceSchema({
            name: "Industry-specific SEO Services in Sri Lanka",
            description:
              "Tailored SEO for 8 industries in Sri Lanka — hotels, travel, furniture, education, healthcare, ecommerce, exports and clothing & fashion.",
            url: `${SITE.url}/industries`,
            offers: INDUSTRIES.map((i) => ({
              name: `${i.navLabel} Sri Lanka`,
              url: `${SITE.url}/${i.slug}`,
              description: i.hubTagline,
            })),
          }),
          itemListSchema,
        ]}
      />
      <Breadcrumbs items={[{ label: "Industries" }]} />

      {/* HERO */}
      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">Industry SEO Solutions</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            <span className="text-gradient-accent">Industry SEO in Sri Lanka</span> — SEO That Speaks Your Industry's Language
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Generic SEO doesn't work anymore. SeoFX builds keyword strategies, content, and rankings tailored to
            your specific industry — so you attract buyers in Sri Lanka and worldwide who are actively searching
            for what you sell.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact-us">Get Free Industry SEO Audit</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#hub">Browse Industries ↓</a>
            </Button>
          </div>
        </div>
      </section>

      {/* HUB GRID */}
      <section id="hub" className="container-tight pb-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            Choose Your Industry. We Know Your Keywords.
          </h2>
          <p className="mt-3 text-muted-foreground">
            SeoFX has built deep SEO expertise across 8 high-demand industries in Sri Lanka. Click any industry
            below to see the exact keywords people search, the SEO services we provide, and how we help you rank
            locally and globally.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => {
            const Icon = i.icon;
            return (
              <Link
                key={i.slug}
                to={`/${i.slug}`}
                className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                <ArrowRight className="absolute right-6 top-6 size-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
                <div className="text-4xl" aria-hidden>{i.emoji}</div>
                <span className={`mt-4 inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${i.themeBadge}`}>
                  <Icon className="mr-1.5 size-3" /> {i.navLabel}
                </span>
                <h3 className="mt-3 font-display text-xl font-extrabold leading-tight">
                  {i.navLabel} in Sri Lanka
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.hubTagline}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {i.hubTopKws.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full border border-border bg-soft px-2.5 py-1 text-[11px] font-medium text-foreground/70"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
                  Explore <ArrowRight className="size-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY INDUSTRY SEO */}
      <section className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Why Industry SEO</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Why generic SEO fails — and{" "}
              <span className="text-gradient-accent">industry SEO wins</span>
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              "We know the exact keywords your buyers search — not just generic 'SEO' terms",
              "Industry-specific schema, content depth, and authority signals Google rewards",
              "Local + international keyword targeting tailored to your customer's country",
              "Industry benchmarks so you can outperform direct competitors, not generalists",
              "Compliance-aware (YMYL for healthcare, fair-trade for exports, hreflang for tourism)",
              "Content built around real buyer journeys for your sector",
            ].map((bullet) => (
              <div
                key={bullet}
                className="flex gap-3 rounded-2xl border border-border bg-card p-5"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-foreground">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't see your industry?"
        subtitle="We work across most B2C and B2B sectors in Sri Lanka. Book a free consultation and we'll build a custom SEO strategy for yours."
      />
    </Layout>
  );
};

export default IndustriesHub;
