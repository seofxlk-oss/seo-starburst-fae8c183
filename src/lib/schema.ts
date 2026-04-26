import { SITE } from "@/lib/site";

/**
 * Centralized JSON-LD schema builders for SeoFX.
 * Reused across landing pages so all SERP-feature schemas stay consistent.
 */

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const LOCAL_ID = `${SITE.url}/#localbusiness`;
const LOGO_URL = `${SITE.url}/logo.png`;
const OG_IMAGE = `${SITE.url}/og-image.jpg`;

export const orgSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "SeoFX",
  alternateName: ["SeoFX Sri Lanka", "Best SEO Company Sri Lanka"],
  url: `${SITE.url}/`,
  logo: LOGO_URL,
  image: OG_IMAGE,
  description:
    "SeoFX is the best SEO company in Sri Lanka offering professional SEO services, SEO packages and white-hat SEO for Sri Lankan businesses, agencies and web developers.",
  email: SITE.email,
  telephone: SITE.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rajagiriya",
    addressLocality: "Colombo",
    addressRegion: "Western Province",
    addressCountry: "LK",
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phoneRaw,
      contactType: "customer service",
      areaServed: "LK",
      availableLanguage: ["en", "si", "ta"],
    },
    {
      "@type": "ContactPoint",
      telephone: SITE.phone2Raw,
      contactType: "sales",
      areaServed: "LK",
      availableLanguage: ["en", "si", "ta"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/seofx.lk",
    "https://www.linkedin.com/company/seofx",
    "https://www.instagram.com/seofx.lk",
  ],
  knowsAbout: [
    "SEO Sri Lanka",
    "SEO services Sri Lanka",
    "SEO packages Sri Lanka",
    "White-label SEO Sri Lanka",
    "Local SEO",
    "E-commerce SEO",
    "Link building",
    "Technical SEO",
    "On-page SEO",
    "Off-page SEO",
  ],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE.url}/`,
  name: "SeoFX — Best SEO Company in Sri Lanka",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-LK",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": LOCAL_ID,
  name: "SeoFX — SEO Company Sri Lanka",
  url: `${SITE.url}/`,
  image: OG_IMAGE,
  logo: LOGO_URL,
  telephone: SITE.phoneRaw,
  email: SITE.email,
  priceRange: "LKR 29,900 – LKR 250,000+",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rajagiriya",
    addressLocality: "Colombo",
    addressRegion: "Western Province",
    addressCountry: "LK",
  },
  areaServed: [
    "Colombo", "Kandy", "Galle", "Negombo", "Jaffna",
    "Matara", "Kurunegala", "Nuwara Eliya", "Anuradhapura",
    "Trincomalee", "Batticaloa", "Ratnapura", "Sri Lanka",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
    worstRating: "1",
  },
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = (opts: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  offers?: { name: string; url?: string; price?: string; priceCurrency?: string; description?: string }[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  description: opts.description,
  url: opts.url,
  serviceType: opts.serviceType ?? "Search Engine Optimization",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  ...(opts.offers && opts.offers.length
    ? {
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: opts.name,
          itemListElement: opts.offers.map((o) => ({
            "@type": "Offer",
            name: o.name,
            ...(o.url ? { url: o.url } : {}),
            ...(o.price
              ? {
                  price: o.price,
                  priceCurrency: o.priceCurrency ?? "LKR",
                }
              : {}),
            ...(o.description ? { description: o.description } : {}),
            availability: "https://schema.org/InStock",
            itemOffered: {
              "@type": "Service",
              name: o.name,
              ...(o.url ? { url: o.url } : {}),
            },
          })),
        },
      }
    : {}),
});

export const webPageSchema = (opts: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "FAQPage" | "CollectionPage";
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": opts.type ?? "WebPage",
  name: opts.name,
  description: opts.description,
  url: opts.url,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  inLanguage: "en-LK",
});
