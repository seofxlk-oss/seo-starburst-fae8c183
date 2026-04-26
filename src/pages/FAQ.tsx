import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { orgSchema, websiteSchema, localBusinessSchema, faqSchema } from "@/lib/schema";

const faqs = [
  {
    q: "What factors does my Google SEO ranking depend on?",
    a: "SEO ranking depends on many factors, but the most critical are: the quality and quantity of content on your website, the number and quality of backlinks pointing to your site, your anchor text profile, and whether your content is regularly updated. Factors that hurt rankings include: auto-generated or duplicate content, keyword stuffing, too many ads, slow page load speed, and poor mobile experience.",
  },
  {
    q: "Why does SEO take time?",
    a: "SEO is a long-term investment, not an overnight fix. The time it takes to see results depends on your website's age, current content quality, existing backlink profile, and how competitive your target keywords are. Most clients see meaningful results within 3–6 months, with rankings improving consistently over time. Unlike paid ads that stop working the moment you stop paying, SEO results compound over time — making it the highest long-term ROI marketing investment available.",
  },
  {
    q: "How much do SEO services cost in Sri Lanka?",
    a: "SEO pricing in Sri Lanka varies by scope and competition. SeoFX offers three packages — Starter, Business, and Premium — with pricing tailored to the scale of your campaign. Contact us for a free, no-obligation quote. We will recommend the right package for your business and budget.",
  },
  {
    q: "When should I start SEO for my business?",
    a: "The best time to start SEO is today. Every day without SEO is a day your competitors could be getting ahead of you on Google. If you are building a new website, starting SEO from the very beginning is the most cost-effective approach. Contact us now and start your SEO journey.",
  },
  {
    q: "Will my business grow after an SEO campaign?",
    a: "Yes — and the growth is sustainable. More Google visibility leads to more website visitors. More visitors lead to more enquiries, leads, and sales. Unlike paid advertising, SEO builds a permanent digital asset that continues generating returns for your business long after the initial investment.",
  },
  {
    q: "What is the difference between an SEO company and a digital marketing agency?",
    a: "A digital marketing agency offers a wide range of services including social media, paid ads, email marketing, and more. An SEO company like SeoFX specialises exclusively in Search Engine Optimisation — meaning we go deeper, know more, and deliver better SEO results than a generalist agency.",
  },
  {
    q: "Do you offer SEO services for local businesses in Sri Lanka?",
    a: "Absolutely. Local SEO is one of our core specialities. Whether you are a restaurant in Colombo, a hotel in Kandy, or a retailer in Galle, we can optimise your business for local searches so you appear when customers nearby are looking for what you offer.",
  },
];

const FAQ = () => {
  const jsonLd = [
    orgSchema(),
    websiteSchema(),
    localBusinessSchema(),
    faqSchema(faqs),
  ];

  return (
    <Layout>
      <SEO
        title="SEO FAQ Sri Lanka — Pricing, Timelines & Results | SeoFX"
        description="Top SEO questions answered: SEO price in Sri Lanka, how long SEO takes, what's included & how to choose an SEO company. Honest answers from SeoFX experts."
        canonical="/faq"
        keywords="seo faq sri lanka, seo questions sri lanka, seo price sri lanka, seo cost sri lanka, how long does seo take sri lanka, seo packages sri lanka, seo company sri lanka, seo service questions sri lanka"
        ogImageAlt="SEO FAQ — Sri Lanka SEO pricing, timelines & results explained by SeoFX"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">FAQ</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            SEO Questions Answered by Sri Lanka's <span className="text-gradient-accent">Leading SEO Experts</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Have questions about SEO services in Sri Lanka? You are not alone. Here are the most frequently asked
            questions we receive from Sri Lankan business owners — answered honestly by our team.
          </p>
        </div>
      </section>

      <section className="container-narrow pb-20">
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all open:shadow-card"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-lg font-bold text-foreground">
                <span><span className="text-accent">{i + 1}.</span> {f.q}</span>
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent/10 text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default FAQ;
