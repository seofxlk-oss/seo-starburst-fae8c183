import { CheckCircle2, Compass, FileSearch, KeyRound, Wrench, LinkIcon, Globe, Megaphone, Code2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";

const services = [
  {
    icon: Compass,
    title: "SEO Consulting Services",
    intro:
      "Every successful SEO campaign in Sri Lanka begins with strategy. Our SEO consultants take time to understand your marketing objectives, business goals, and target audience.",
    points: [
      "Free initial SEO consultation",
      "Business and competitor analysis",
      "Clear campaign planning & goal setting",
      "Monthly strategy reviews",
    ],
  },
  {
    icon: FileSearch,
    title: "Project Analysis & Website Audit",
    intro:
      "Before any optimisation begins, our SEO team in Sri Lanka conducts a thorough analysis of your current website — content quality, technical health, competitor performance and SERP positions.",
    points: [
      "Full technical SEO audit",
      "Content gap analysis",
      "Competitor benchmarking",
      "Page speed & Core Web Vitals analysis",
      "Penalty risk assessment",
    ],
  },
  {
    icon: KeyRound,
    title: "Keyword Research",
    intro:
      "Our team identifies the most valuable, high-intent keywords your target customers in Sri Lanka are using to search for businesses like yours.",
    points: [
      "High-volume, high-intent keyword identification",
      "Long-tail keyword opportunities",
      "Search volume & keyword difficulty analysis",
      "Localised keyword research for Sri Lanka",
      "Keyword-to-page mapping strategy",
    ],
  },
  {
    icon: Wrench,
    title: "On-Site SEO Optimisation",
    intro:
      "On-site SEO makes your website search engine friendly. The clearer Google understands your site, the higher you rank.",
    points: [
      "Title tags & meta description optimisation",
      "Header tag (H1, H2, H3) structure",
      "URL structure optimisation",
      "Internal linking strategy",
      "Image ALT text optimisation",
      "Schema markup implementation",
      "Core Web Vitals improvement",
      "Mobile-friendliness optimisation",
    ],
  },
  {
    icon: Globe,
    title: "Off-Site SEO Optimisation",
    intro:
      "Off-site SEO builds your website's authority and reputation across the wider internet — the more reputable sites that link to you, the more Google trusts you.",
    points: [
      "High-quality backlink acquisition",
      "Guest posting & content outreach",
      "Local citations & directory listings",
      "Social signals and brand mentions",
      "Competitor backlink analysis",
    ],
  },
  {
    icon: LinkIcon,
    title: "Link Building",
    intro:
      "As one of the best SEO companies in Sri Lanka for link building, we source reputable, relevant backlinks that genuinely improve your domain authority.",
    points: [
      "Manual, white-hat link building",
      "Niche-relevant backlinks",
      "High-DA (Domain Authority) link placements",
      "Toxic link audits & disavow management",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO
        title="SEO Services in Sri Lanka | SEO Company Sri Lanka | SeoFX"
        description="SeoFX offers full-spectrum SEO services in Sri Lanka including keyword research, on-site SEO, link building, web development & digital marketing. Get a free audit today."
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
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.title },
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
          {services.map((s, i) => (
            <article key={s.title} className="card-feature">
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                  <s.icon className="size-5" />
                </div>
                <span className="font-display text-xs font-bold tracking-widest text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h2 className="mt-4 font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.intro}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Additional Services</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Beyond SEO — Full Digital Growth Support
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="card-feature">
              <Code2 className="size-7 text-accent" />
              <h3 className="mt-4 font-display text-xl font-bold">Web Development (SEO-Ready)</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A beautiful website means nothing if it cannot be found. Our web development team in Sri Lanka builds
                websites that are SEO-optimised from the ground up — fast, mobile-friendly, technically sound, and
                designed to convert visitors into customers.
              </p>
            </article>
            <article className="card-feature">
              <Megaphone className="size-7 text-accent" />
              <h3 className="mt-4 font-display text-xl font-bold">Social Media & Digital Marketing Consultancy</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We consult and guide you on the best digital marketing strategy for your business — Facebook,
                Instagram, LinkedIn, or a combination of channels — to maximise your digital presence in Sri Lanka.
              </p>
            </article>
          </div>
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
