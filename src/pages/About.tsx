import { Link } from "react-router-dom";
import { Award, Brain, Heart, MessageSquare, ShieldCheck, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { orgSchema, websiteSchema, localBusinessSchema, webPageSchema } from "@/lib/schema";

const About = () => {
  return (
    <Layout>
      <SEO
        title="Best SEO Company in Sri Lanka | SEO Specialist Sri Lanka | SeoFX"
        description="Best SEO company in Sri Lanka — SeoFX's SEO specialists in Sri Lanka help businesses rank #1 on Google with white-hat SEO services and proven results."
        canonical="/seo-specialist-sri-lanka"
        keywords="best seo company in sri lanka, best seo company sri lanka, seo specialist sri lanka, seo consultant sri lanka, seo company sri lanka, seo sri lanka"
        jsonLd={[
          orgSchema(),
          websiteSchema(),
          localBusinessSchema(),
          webPageSchema({
            type: "AboutPage",
            name: "About SeoFX — Best SEO Company in Sri Lanka",
            description:
              "About SeoFX — Sri Lanka's leading SEO company and SEO specialist team delivering white-hat SEO services with measurable Google ranking results.",
            url: "https://seofx.lk/seo-specialist-sri-lanka",
          }),
        ]}
      />
      <Breadcrumbs items={[{ label: "About" }]} />

      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">About SeoFX</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            <span className="text-gradient-accent">Best SEO Company in Sri Lanka</span> — Trusted SEO Specialists
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            SeoFX is a leading <strong className="text-foreground">SEO company in Sri Lanka</strong>, driven by a passion
            for building brands and delivering measurable SEO results for businesses across the island.
          </p>
        </div>
      </section>

      <section className="container-tight pb-16 sm:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              We are a professional SEO services firm based in Sri Lanka, committed to increasing leads, building
              brand names, enhancing online visibility, and providing measurable results for businesses across every
              industry.
            </p>
            <p>
              With an expert team of SEO consultants in Sri Lanka, we are a leading force among SEO service
              providers across the island. We know exactly how to boost the marketing power of your website through
              SEO — increasing your Search Engine Results Page (SERP) rankings while maintaining a high return on
              investment.
            </p>
            <p>
              Our strength lies in our core values: <strong className="text-foreground">honesty, integrity, and
              trust</strong>. Our company is entirely built on the dedication and strength of our people. We are
              technical, professional, and effective — but we treat every client's case with the personal dedication
              it deserves.
            </p>
            <p>
              When you choose SeoFX, you are not just hiring an SEO agency in Sri Lanka. You are gaining a team that
              understands your business, fights for your rankings, and celebrates your success.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-soft p-8">
            <h2 className="font-display text-xl font-bold">Our Stats</h2>
            <div className="mt-6 space-y-6">
              {[
                { stat: "73%", text: "Average increase in monthly organic traffic for clients" },
                { stat: "99%", text: "Increase in yearly organic traffic for long-term clients" },
                { stat: "100%", text: "White-hat, Google-compliant SEO practices" },
              ].map((s) => (
                <div key={s.stat} className="flex items-baseline gap-4">
                  <span className="font-display text-4xl font-extrabold text-gradient-accent">{s.stat}</span>
                  <span className="text-sm text-muted-foreground">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Why us</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Why We Are the Best SEO Company in Sri Lanka
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Brain, title: "Knowledge-Based SEO", text: "Built on genuine expert knowledge — never outdated black-hat shortcuts." },
              { icon: Heart, title: "Passionate & Results-Driven", text: "Marketers and strategists who genuinely care about your success." },
              { icon: Target, title: "Custom Strategies", text: "Tailored to your industry, audience, competition and business goals." },
              { icon: MessageSquare, title: "Full Transparency", text: "Regular reports, clear communication, honest updates — always." },
            ].map((f) => (
              <article key={f.title} className="card-feature">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                  <f.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "White-hat SEO only" },
              { icon: Award, label: "Proven results across industries" },
              { icon: CheckCircle2, label: "Local Sri Lanka market expertise" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <b.icon className="size-5 text-accent" />
                <span className="text-sm font-medium">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact-us">Work with SeoFX <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's grow your business with proven SEO"
        subtitle="Join Sri Lankan businesses already winning on Google with SeoFX."
      />
    </Layout>
  );
};

export default About;
