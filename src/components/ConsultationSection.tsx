import { Link } from "react-router-dom";
import {
  Search, Target, Trophy, ClipboardList, Wallet, Handshake,
  CheckCircle2, Clock, FileText, MapPin, CreditCard, ArrowRight, Sparkles,
} from "lucide-react";


interface ConsultationSectionProps {
  /** Section variant — `light` for white pages, `soft` for sections with subtle bg. */
  variant?: "light" | "soft";
  /** Display price (LKR). Defaults to 50,000. */
  priceLkr?: number;
  /** Set to false on pages that already emit FAQ schema for these questions. */
  emitFaqSchema?: boolean;
}

const BENEFITS = [
  {
    icon: Search,
    title: "Complete Website Review",
    text: "We analyse your current website (or planned website) and identify every SEO issue holding you back from ranking on Google.",
  },
  {
    icon: Target,
    title: "Keyword Strategy for Your Business",
    text: "We research and present the exact keywords your Sri Lankan customers are using to search for your products or services — and show you how to target them.",
  },
  {
    icon: Trophy,
    title: "Competitor Analysis",
    text: "We show you exactly who is outranking you on Google, why they are ranking, and what it will take to overtake them.",
  },
  {
    icon: ClipboardList,
    title: "Custom SEO Roadmap",
    text: "You leave with a clear, step-by-step SEO plan tailored to your business — ready to implement immediately.",
  },
  {
    icon: Wallet,
    title: "Marketing Budget Advice",
    text: "We tell you honestly how to allocate your marketing budget between SEO, Google Ads, and social media for maximum ROI.",
  },
  {
    icon: Handshake,
    title: "Agency & Website Builder Guidance",
    text: "Working with a web developer or marketing agency? We advise you on exactly what to brief them on so your investment is not wasted.",
  },
];

const WHO_NEEDS = [
  "Business owners planning to build a new website",
  "Companies currently running Google Ads or Facebook Ads",
  "Businesses working with or considering a marketing agency",
  "Anyone whose website is not generating leads or appearing on Google",
  "Startups wanting to get digital marketing right from day one",
];

export const ConsultationSection = ({
  variant = "soft",
  priceLkr = 50000,
  emitFaqSchema = true,
}: ConsultationSectionProps) => {
  const formattedPrice = `LKR ${priceLkr.toLocaleString("en-LK")}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in an SEO consultation in Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An SEO consultation in Sri Lanka with SeoFX includes a complete website review, keyword strategy for your business, competitor analysis, a custom SEO roadmap, marketing budget advice, and agency/website builder guidance — delivered in a 60-minute 1-on-1 session with a written SEO roadmap.",
        },
      },
      {
        "@type": "Question",
        name: "How much does an SEO consultation cost in Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `An SEO consultation in Sri Lanka with SeoFX is ${formattedPrice} for a 60-minute 1-on-1 session, including a written SEO roadmap. It can be conducted online via Google Meet or in-person at our Rajagiriya office.`,
        },
      },
      {
        "@type": "Question",
        name: "Who should book an SEO consultation in Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Business owners planning a new website, companies running Google Ads or Facebook Ads, businesses working with a marketing agency, anyone whose website is not generating leads, and startups that want to get digital marketing right from day one should book an SEO consultation.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the SEO consultation session take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The SEO consultation session is 60 minutes long and can be conducted online via Google Meet or in-person at our Rajagiriya office in Sri Lanka.",
        },
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Consultation Session — Sri Lanka",
    serviceType: "SEO Consultation",
    provider: { "@id": "https://seofx.lk/#organization" },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    description:
      "60-minute 1-on-1 SEO consultation session with a Sri Lankan SEO specialist. Includes website review, keyword strategy, competitor analysis and a written SEO roadmap.",
    offers: {
      "@type": "Offer",
      price: priceLkr,
      priceCurrency: "LKR",
      availability: "https://schema.org/InStock",
      url: "https://seofx.lk/seo-consultant-sri-lanka",
    },
  };

  return (
    <section
      className={
        variant === "light"
          ? "bg-background py-20 sm:py-24"
          : "bg-google-soft py-20 sm:py-24"
      }
      aria-labelledby="seo-consultation-heading"
    >
      <div className="container-tight">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-google-blue/20 bg-google-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-google-blue">
            <Sparkles className="size-3.5" /> SEO Consultation Session
          </span>
          <h2
            id="seo-consultation-heading"
            className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl"
          >
            Book a 1-on-1 SEO Consultation Session with{" "}
            <span className="text-gradient-google">Sri Lanka's Leading SEO Specialists</span>
          </h2>
          <p className="mt-4 font-display text-lg font-semibold text-foreground sm:text-xl">
            One session. Real answers. A clear roadmap to grow your business on Google.
          </p>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Before you build a website, hire a marketing agency, or spend money on ads — sit down with an SEO
            expert first. Our professional <strong className="font-semibold text-foreground">SEO
            Consultation Session</strong> gives you a personalised, actionable strategy built specifically for
            your business in Sri Lanka. Walk away knowing exactly what to do, in what order, and why.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <article
              key={b.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-google"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-google-blue/10 text-google-blue">
                <b.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>

        {/* Who needs this + pricing card */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr,1fr]">
          {/* Who Needs This */}
          <div className="rounded-3xl border border-border bg-card p-7 sm:p-9 shadow-card">
            <h3 className="font-display text-xl font-extrabold sm:text-2xl">
              Who needs this consultation?
            </h3>
            <ul className="mt-5 space-y-3">
              {WHO_NEEDS.map((w) => (
                <li key={w} className="flex gap-3 text-sm sm:text-base">
                  <CheckCircle2 className="size-5 shrink-0 text-google-green" />
                  <span className="text-foreground">{w}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-7 rounded-2xl border-l-4 border-accent bg-soft p-5 text-sm italic leading-relaxed text-muted-foreground sm:text-base">
              "Most Sri Lankan businesses come to us after wasting months and thousands of rupees on agencies
              and ads that delivered nothing. One consultation session upfront changes everything."
              <footer className="mt-2 not-italic text-xs font-semibold text-foreground">
                — SeoFX Team, Rajagiriya
              </footer>
            </blockquote>
          </div>

          {/* Pricing card — entire card links to consultation page */}
          <Link
            to="/seo-consultant-sri-lanka"
            aria-label="View full SEO Consultation Session details"
            className="group relative block overflow-hidden rounded-3xl border-2 border-google-blue/30 bg-card p-7 sm:p-9 shadow-google transition-all hover:-translate-y-1 hover:border-google-blue/60 hover:shadow-google focus:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2"
          >
            {/* rainbow strip */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-google" aria-hidden />

            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="badge-pill">
                  <Sparkles className="size-3.5" /> Limited Slots
                </span>
                <h3 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                  SEO Consultation Session
                </h3>
              </div>
              <ArrowRight className="size-5 shrink-0 text-google-blue transition-transform group-hover:translate-x-1" />
            </div>

            {/* Price */}
            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">
                {formattedPrice}
              </span>
              <span className="text-sm text-muted-foreground">/ session</span>
            </div>

            {/* Details */}
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="size-4 shrink-0 text-google-blue" />
                <div>
                  <dt className="inline font-semibold text-foreground">Duration: </dt>
                  <dd className="inline text-muted-foreground">60 Minutes (Online or In-Person)</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="size-4 shrink-0 text-google-red" />
                <div>
                  <dt className="inline font-semibold text-foreground">Deliverable: </dt>
                  <dd className="inline text-muted-foreground">Written SEO Roadmap</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="size-4 shrink-0 text-google-yellow" />
                <div>
                  <dt className="inline font-semibold text-foreground">Location: </dt>
                  <dd className="inline text-muted-foreground">Rajagiriya / Google Meet</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CreditCard className="size-4 shrink-0 text-google-green" />
                <div>
                  <dt className="inline font-semibold text-foreground">Investment: </dt>
                  <dd className="inline text-muted-foreground">{formattedPrice} (one-time)</dd>
                </div>
              </div>
            </dl>

            <div className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition-colors group-hover:bg-accent/90">
              View Full Consultation Details <ArrowRight className="size-4" />
            </div>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Limited sessions available each month. Secure your slot today.
            </p>
          </Link>
        </div>
      </div>

      {emitFaqSchema && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
          />
        </>
      )}
    </section>
  );
};
