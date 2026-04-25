// Hub-and-spoke interlinking map for the 9 keyword-targeted blog articles.
// Each entry defines:
//   - related[]: 3 contextually relevant articles to surface in the "Related reading" block,
//                with KEYWORD-RICH anchor text matching the target post's primary keyword.
//   - next:      the single best "Next Read" article to send the user to (sequential journey).
//
// Anchors are deliberately consistent with each target's primary keyword so internal-link
// signals reinforce that page's topical authority without cannibalising the source page.

export interface InterlinkRef {
  /** Anchor text — keyword-led, matches the destination's primary keyword. */
  anchor: string;
  /** Slug of the destination blog post (without /blog/ prefix). */
  slug: string;
  /** Short value-prop snippet shown next to the anchor. */
  blurb: string;
}

export interface PostInterlinks {
  related: InterlinkRef[];
  next: InterlinkRef;
}

export const BLOG_INTERLINKS: Record<string, PostInterlinks> = {
  // 1. seo company sri lanka
  "how-to-choose-seo-company-sri-lanka": {
    related: [
      {
        anchor: "best SEO company in Sri Lanka",
        slug: "best-seo-company-sri-lanka-guide",
        blurb: "The criteria that separate the truly best SEO company from the rest.",
      },
      {
        anchor: "top SEO companies in Sri Lanka 2025",
        slug: "top-seo-companies-in-sri-lanka-2025",
        blurb: "Inside what the leading SEO companies in Sri Lanka are doing differently this year.",
      },
      {
        anchor: "SEO price in Sri Lanka",
        slug: "seo-price-sri-lanka-how-much-should-you-pay",
        blurb: "How much you should realistically pay an SEO company — and why.",
      },
    ],
    next: {
      anchor: "top SEO companies in Sri Lanka — what makes them stand apart",
      slug: "top-seo-companies-in-sri-lanka-2025",
      blurb: "Now you know how to choose — see exactly what the top SEO companies do differently.",
    },
  },

  // 2. seo companies in sri lanka
  "top-seo-companies-in-sri-lanka-2025": {
    related: [
      {
        anchor: "SEO companies Sri Lanka — honest comparison guide",
        slug: "seo-companies-sri-lanka-comparison-guide",
        blurb: "The questions to ask before signing with any SEO agency.",
      },
      {
        anchor: "best SEO company in Sri Lanka",
        slug: "best-seo-company-sri-lanka-guide",
        blurb: "Defining 'best' — the criteria that actually matter.",
      },
      {
        anchor: "how to choose the right SEO company in Sri Lanka",
        slug: "how-to-choose-seo-company-sri-lanka",
        blurb: "A step-by-step shortlist of what to look for and what to avoid.",
      },
    ],
    next: {
      anchor: "SEO companies Sri Lanka — a business owner's comparison guide",
      slug: "seo-companies-sri-lanka-comparison-guide",
      blurb: "Now compare them properly with the right questions to ask before you sign.",
    },
  },

  // 3. best seo company sri lanka
  "best-seo-company-sri-lanka-guide": {
    related: [
      {
        anchor: "7 reasons SeoFX is the best SEO company in Sri Lanka",
        slug: "why-seofx-best-seo-company-in-sri-lanka",
        blurb: "The seven traits that define a truly best-in-class SEO partner.",
      },
      {
        anchor: "how to choose the right SEO company in Sri Lanka",
        slug: "how-to-choose-seo-company-sri-lanka",
        blurb: "The full vetting checklist for any SEO company in Sri Lanka.",
      },
      {
        anchor: "SEO service in Sri Lanka — what's actually included",
        slug: "seo-service-sri-lanka-what-is-included",
        blurb: "What you should expect month-to-month from a top-tier SEO service.",
      },
    ],
    next: {
      anchor: "7 reasons SeoFX is the best SEO company in Sri Lanka",
      slug: "why-seofx-best-seo-company-in-sri-lanka",
      blurb: "See what 'best' looks like in practice — with real Sri Lankan client outcomes.",
    },
  },

  // 4. seo companies sri lanka
  "seo-companies-sri-lanka-comparison-guide": {
    related: [
      {
        anchor: "top SEO companies in Sri Lanka 2025",
        slug: "top-seo-companies-in-sri-lanka-2025",
        blurb: "What the leading SEO companies do that average ones don't.",
      },
      {
        anchor: "how to choose the right SEO company in Sri Lanka",
        slug: "how-to-choose-seo-company-sri-lanka",
        blurb: "The vetting framework before you book any agency calls.",
      },
      {
        anchor: "SEO packages in Sri Lanka",
        slug: "seo-packages-sri-lanka-guide",
        blurb: "Decode what each agency's monthly retainer actually includes.",
      },
    ],
    next: {
      anchor: "SEO packages in Sri Lanka — what's right for your business",
      slug: "seo-packages-sri-lanka-guide",
      blurb: "Found a shortlist? Now match the right package tier to your business goals.",
    },
  },

  // 5. seo sri lanka
  "seo-sri-lanka-complete-guide-2025": {
    related: [
      {
        anchor: "SEO service in Sri Lanka — what it includes",
        slug: "seo-service-sri-lanka-what-is-included",
        blurb: "Plain-English breakdown of every component of a real SEO campaign.",
      },
      {
        anchor: "SEO packages in Sri Lanka",
        slug: "seo-packages-sri-lanka-guide",
        blurb: "The right package tier for your business and budget.",
      },
      {
        anchor: "SEO price in Sri Lanka — how much should you pay?",
        slug: "seo-price-sri-lanka-how-much-should-you-pay",
        blurb: "Honest pricing benchmarks across starter, business and premium SEO.",
      },
    ],
    next: {
      anchor: "What does an SEO service in Sri Lanka actually include?",
      slug: "seo-service-sri-lanka-what-is-included",
      blurb: "Now that you know SEO works — see exactly what an SEO campaign delivers.",
    },
  },

  // 6. seo service sri lanka
  "seo-service-sri-lanka-what-is-included": {
    related: [
      {
        anchor: "SEO packages in Sri Lanka",
        slug: "seo-packages-sri-lanka-guide",
        blurb: "Match the right SEO scope to your business stage and budget.",
      },
      {
        anchor: "SEO price in Sri Lanka",
        slug: "seo-price-sri-lanka-how-much-should-you-pay",
        blurb: "What different price points actually deliver — and what to avoid.",
      },
      {
        anchor: "best SEO company in Sri Lanka",
        slug: "best-seo-company-sri-lanka-guide",
        blurb: "The provider criteria that turn a great SEO service into great results.",
      },
    ],
    next: {
      anchor: "SEO packages in Sri Lanka — what's right for your business",
      slug: "seo-packages-sri-lanka-guide",
      blurb: "Now match these service components to a package that fits your goals.",
    },
  },

  // 7. best seo company in sri lanka
  "why-seofx-best-seo-company-in-sri-lanka": {
    related: [
      {
        anchor: "best SEO company in Sri Lanka — complete guide",
        slug: "best-seo-company-sri-lanka-guide",
        blurb: "The full criteria for what 'best' really means in Sri Lankan SEO.",
      },
      {
        anchor: "SEO companies in Sri Lanka — top picks for 2025",
        slug: "top-seo-companies-in-sri-lanka-2025",
        blurb: "How the leading agencies separate themselves from the pack.",
      },
      {
        anchor: "SEO packages in Sri Lanka",
        slug: "seo-packages-sri-lanka-guide",
        blurb: "Pick the right SeoFX package for your business and growth stage.",
      },
    ],
    next: {
      anchor: "SEO price in Sri Lanka — how much should you pay?",
      slug: "seo-price-sri-lanka-how-much-should-you-pay",
      blurb: "Ready to invest? See exactly what to budget for SEO in Sri Lanka.",
    },
  },

  // 8. SEO packages in Sri Lanka
  "seo-packages-sri-lanka-guide": {
    related: [
      {
        anchor: "SEO price in Sri Lanka — how much should you pay?",
        slug: "seo-price-sri-lanka-how-much-should-you-pay",
        blurb: "The pricing logic behind every SEO package tier in Sri Lanka.",
      },
      {
        anchor: "SEO service in Sri Lanka — what's actually included",
        slug: "seo-service-sri-lanka-what-is-included",
        blurb: "Make sure your package covers every essential SEO component.",
      },
      {
        anchor: "best SEO company in Sri Lanka",
        slug: "best-seo-company-sri-lanka-guide",
        blurb: "The provider criteria that determine real ROI on any SEO package.",
      },
    ],
    next: {
      anchor: "SEO price in Sri Lanka — how much should you pay?",
      slug: "seo-price-sri-lanka-how-much-should-you-pay",
      blurb: "Now translate package tiers into honest, transparent pricing benchmarks.",
    },
  },

  // 9. SEO Price in Sri Lanka
  "seo-price-sri-lanka-how-much-should-you-pay": {
    related: [
      {
        anchor: "SEO packages in Sri Lanka",
        slug: "seo-packages-sri-lanka-guide",
        blurb: "What each pricing tier actually delivers in deliverables and outcomes.",
      },
      {
        anchor: "how to choose the right SEO company in Sri Lanka",
        slug: "how-to-choose-seo-company-sri-lanka",
        blurb: "Avoid overpaying — the vetting checklist for any SEO agency.",
      },
      {
        anchor: "SEO service in Sri Lanka — what's included",
        slug: "seo-service-sri-lanka-what-is-included",
        blurb: "Make sure you're paying for the right scope of work each month.",
      },
    ],
    next: {
      anchor: "How to choose the right SEO company in Sri Lanka",
      slug: "how-to-choose-seo-company-sri-lanka",
      blurb: "Got the pricing clear? Now pick the agency that delivers real ROI.",
    },
  },
};
