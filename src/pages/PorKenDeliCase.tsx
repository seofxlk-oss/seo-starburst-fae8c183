import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import caseImg from "@/assets/case-porkendeli.jpg";

const PorKenDeliCase = () => {
  return (
    <Layout>
      <SEO
        title="PorKenDeli SEO Case Study | Best SEO Company Sri Lanka | SeoFX"
        description="See how SeoFX helped PorKenDeli.lk skyrocket their organic traffic and Alexa Rank. A real SEO success story from Sri Lanka's best SEO company."
        canonical="/case-studies/porkendeli-seo-case-study"
        keywords="seo case study sri lanka, restaurant seo sri lanka, local seo sri lanka, seo company sri lanka"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How SeoFX Transformed PorKenDeli.lk's Online Presence with SEO",
          author: { "@type": "Organization", name: "SeoFX" },
          publisher: { "@id": "https://seofx.lk/#organization" },
          datePublished: "2020-09-01",
          image: "https://seofx.lk/og-image.jpg",
          mainEntityOfPage: "https://seofx.lk/case-studies/porkendeli-seo-case-study",
        }}
      />
      <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: "PorKenDeli" }]} />

      <article className="container-narrow py-12 sm:py-16">
        <span className="badge-pill">Case Study</span>
        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          How SeoFX Transformed <span className="text-gradient-accent">PorKenDeli.lk's</span> Online Presence with SEO
        </h1>

        <dl className="mt-8 grid gap-4 rounded-2xl border border-border bg-soft p-6 sm:grid-cols-2">
          {[
            ["Client", "PorKenDeli.lk"],
            ["Industry", "Restaurant / Food Delivery — Dehiwala, Sri Lanka"],
            ["Established", "2018"],
            ["Services", "SEO Strategy, Keyword Research, On-Site Optimisation, Backlink Building"],
            ["Date", "September 2020"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{k}</dt>
              <dd className="mt-1 text-sm font-medium">{v}</dd>
            </div>
          ))}
        </dl>

        <img
          src={caseImg}
          alt="PorKenDeli restaurant SEO case study"
          loading="lazy"
          className="mt-8 w-full rounded-2xl border border-border"
        />

        <div className="prose-content mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
          <h2 className="font-display text-2xl font-bold text-foreground">The Challenge</h2>
          <p>
            PorKen Deli is a restaurant in Dehiwala, Sri Lanka, specialising in innovative pork-based dishes — born
            from a mission to bring underrepresented pork cuisine to the forefront of the Sri Lankan dining scene.
            Founded in 2018, they were a young company beginning to find their footing in the food delivery market.
          </p>
          <p>
            When the COVID-19 pandemic accelerated the trend for home-delivered meals and drove intense competition
            in the food delivery space, PorKen Deli found that their website was not generating any organic traffic.
            They were invisible on Google — meaning new customers simply could not find them online.
          </p>
          <p>
            Facing rising competition and a website that was delivering no value, the PorKen Deli team approached
            SeoFX for help.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">The SeoFX Solution</h2>
          <p>
            The SeoFX team conducted a thorough audit and immediately identified the core issue: the website had not
            been optimised for organic search. It had no visibility on Google for any relevant food-related keywords
            in the Colombo area.
          </p>
          <p>We designed a customised SEO campaign specifically for PorKen Deli's market and customer base:</p>
          <ul className="list-disc space-y-1.5 pl-6">
            <li>Targeted keyword research focused on the Colombo food delivery market</li>
            <li>Full on-site SEO optimisation of all key pages</li>
            <li>Engaging, keyword-optimised content highlighting their signature dishes</li>
            <li>High-quality backlink building to boost domain authority</li>
            <li>Local SEO implementation for better Google Maps and local search visibility</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground">The Results</h2>
          <p>
            The impact was swift and dramatic. PorKen Deli's organic traffic increased considerably within a short
            time frame, and their Alexa Rank skyrocketed. They began attracting both national and international
            customers — transforming from a hidden gem to one of the most visible pork restaurants in the Colombo
            area on Google.
          </p>
          <p>
            Their restaurant became a busy destination for pork-lovers across Sri Lanka, and their online orders grew
            significantly as a direct result of the SEO investment.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">Key Takeaway</h2>
          <p>
            SEO results only get better with time. PorKen Deli's growth continues month after month — because organic
            SEO is a long-term asset, not a one-time fix. This is the difference between paying for leads every day
            and building a website that generates leads on its own.
          </p>
        </div>
      </article>

      <CTASection title="Want results like PorKenDeli?" subtitle="Get a free SEO audit and roadmap from Sri Lanka's #1 SEO team." />
    </Layout>
  );
};

export default PorKenDeliCase;
