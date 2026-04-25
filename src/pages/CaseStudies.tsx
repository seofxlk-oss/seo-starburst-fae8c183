import { Link } from "react-router-dom";
import { ArrowRight, Award, MapPin, TrendingUp } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import caseImg from "@/assets/case-porkendeli.jpg";

const CaseStudies = () => {
  return (
    <Layout>
      <SEO
        title="SEO Case Studies Sri Lanka | Proven SEO Results | SeoFX"
        description="SEO case studies Sri Lanka — real results from SeoFX, the best SEO company in Sri Lanka. See how our SEO services grew traffic, leads & revenue for Sri Lankan brands."
        canonical="/case-studies"
        keywords="seo case studies sri lanka, seo results sri lanka, seo company sri lanka, best seo company sri lanka, seo service sri lanka"
      />
      <Breadcrumbs items={[{ label: "Case Studies" }]} />

      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">Case Studies</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Real SEO Results for Real <span className="text-gradient-accent">Sri Lankan Businesses</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Talk is cheap — results speak for themselves. Browse our SEO case studies to see exactly how we helped
            Sri Lankan businesses grow their online presence, generate more leads, and increase revenue through
            strategic SEO.
          </p>
        </div>
      </section>

      <section className="container-tight pb-20">
        <article className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-card lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src={caseImg}
              alt="PorKenDeli SEO case study"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-accent-gradient px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-glow">
                Featured
              </span>
            </div>
          </div>
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" /> Dehiwala, Colombo
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
              PorKenDeli.lk — Restaurant SEO Case Study
            </h2>
            <p className="mt-2 text-sm text-accent font-semibold">Industry: Food & Restaurant</p>
            <p className="mt-4 text-muted-foreground">
              Read the full case study to learn how we transformed PorKenDeli.lk from a website with zero organic
              traffic into a thriving online lead generation machine.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4 border-y border-border py-5">
              <div>
                <TrendingUp className="size-4 text-accent" />
                <div className="mt-2 font-display text-sm font-bold">Organic Traffic ↑</div>
                <div className="text-xs text-muted-foreground">Significant growth</div>
              </div>
              <div>
                <Award className="size-4 text-accent" />
                <div className="mt-2 font-display text-sm font-bold">Alexa Rank ↑</div>
                <div className="text-xs text-muted-foreground">Skyrocketed</div>
              </div>
              <div>
                <MapPin className="size-4 text-accent" />
                <div className="mt-2 font-display text-sm font-bold">Reach</div>
                <div className="text-xs text-muted-foreground">National & intl.</div>
              </div>
            </div>

            <Button asChild variant="hero" size="lg" className="mt-6">
              <Link to="/case-studies/porkendeli-seo-case-study">
                Read Full Case Study <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </article>

        <div className="mt-10 rounded-2xl border border-dashed border-border bg-soft p-8 text-center">
          <p className="text-sm text-muted-foreground">
            More case studies coming soon. Want to be our next success story?{" "}
            <Link to="/contact-us" className="font-semibold text-accent hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default CaseStudies;
