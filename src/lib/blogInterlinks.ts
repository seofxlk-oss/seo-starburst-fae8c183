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

  // 10. SEO Specialist Sri Lanka — what they do
  "what-does-seo-specialist-sri-lanka-do": {
    related: [
      {
        anchor: "SEO specialist vs SEO agency in Sri Lanka",
        slug: "seo-specialist-vs-seo-agency-sri-lanka",
        blurb: "Should you hire an individual specialist or a full agency?",
      },
      {
        anchor: "how to find the best SEO specialist in Sri Lanka",
        slug: "how-to-find-best-seo-specialist-sri-lanka",
        blurb: "7 specific checks before you hire any SEO specialist.",
      },
      {
        anchor: "SEO service in Sri Lanka — what's included",
        slug: "seo-service-sri-lanka-what-is-included",
        blurb: "What a specialist actually delivers month to month.",
      },
    ],
    next: {
      anchor: "SEO specialist vs SEO agency in Sri Lanka — which is right for you?",
      slug: "seo-specialist-vs-seo-agency-sri-lanka",
      blurb: "Now decide whether an individual or a team is the better fit.",
    },
  },

  // 11. Specialist vs Agency
  "seo-specialist-vs-seo-agency-sri-lanka": {
    related: [
      {
        anchor: "what an SEO specialist in Sri Lanka actually does",
        slug: "what-does-seo-specialist-sri-lanka-do",
        blurb: "The full role, skills and outputs of a real SEO specialist.",
      },
      {
        anchor: "how to find the best SEO specialist in Sri Lanka",
        slug: "how-to-find-best-seo-specialist-sri-lanka",
        blurb: "7 vetting checks that separate real specialists from pretenders.",
      },
      {
        anchor: "how to choose the right SEO company in Sri Lanka",
        slug: "how-to-choose-seo-company-sri-lanka",
        blurb: "Vetting framework for full agencies — useful either way.",
      },
    ],
    next: {
      anchor: "How to find the best SEO specialist in Sri Lanka — 7 things to check",
      slug: "how-to-find-best-seo-specialist-sri-lanka",
      blurb: "Decided on a specialist? Use this 7-point check before you hire.",
    },
  },

  // 12. Find best SEO specialist
  "how-to-find-best-seo-specialist-sri-lanka": {
    related: [
      {
        anchor: "what an SEO specialist in Sri Lanka actually does",
        slug: "what-does-seo-specialist-sri-lanka-do",
        blurb: "Understand the role before you start vetting candidates.",
      },
      {
        anchor: "SEO specialist vs SEO agency in Sri Lanka",
        slug: "seo-specialist-vs-seo-agency-sri-lanka",
        blurb: "Decide whether an individual or a full agency fits your scope.",
      },
      {
        anchor: "SEO packages in Sri Lanka",
        slug: "seo-packages-sri-lanka-guide",
        blurb: "Once you've picked your specialist — match them to the right package.",
      },
    ],
    next: {
      anchor: "What does an SEO specialist in Sri Lanka actually do?",
      slug: "what-does-seo-specialist-sri-lanka-do",
      blurb: "Refresh on the full role, skills and outputs of a real specialist.",
    },
  },

  // 13. Results to expect from an SEO specialist
  "results-to-expect-from-seo-specialist-sri-lanka": {
    related: [
      {
        anchor: "what an SEO specialist in Sri Lanka actually does",
        slug: "what-does-seo-specialist-sri-lanka-do",
        blurb: "Understand the role behind the results — and what realistic outputs look like.",
      },
      {
        anchor: "8 signs of a genuinely good SEO specialist in Sri Lanka",
        slug: "signs-of-good-seo-specialist-sri-lanka",
        blurb: "How to verify whether the specialist behind your timeline is actually skilled.",
      },
      {
        anchor: "in-house SEO specialist vs outsourcing in Sri Lanka",
        slug: "in-house-seo-specialist-vs-outsourcing-sri-lanka",
        blurb: "Decide which delivery model is most likely to hit your timeline goals.",
      },
    ],
    next: {
      anchor: "8 signs you've found a genuinely good SEO specialist in Sri Lanka",
      slug: "signs-of-good-seo-specialist-sri-lanka",
      blurb: "Now verify the person behind the timeline using 8 specific, observable signs.",
    },
  },

  // 14. In-house SEO vs outsourcing
  "in-house-seo-specialist-vs-outsourcing-sri-lanka": {
    related: [
      {
        anchor: "SEO specialist vs SEO agency in Sri Lanka",
        slug: "seo-specialist-vs-seo-agency-sri-lanka",
        blurb: "The closely related question: individual specialist vs full agency.",
      },
      {
        anchor: "what results to expect from an SEO specialist in Sri Lanka",
        slug: "results-to-expect-from-seo-specialist-sri-lanka",
        blurb: "Set honest timeline and KPI expectations for either model.",
      },
      {
        anchor: "8 signs of a genuinely good SEO specialist in Sri Lanka",
        slug: "signs-of-good-seo-specialist-sri-lanka",
        blurb: "Vetting framework whether you hire in-house or outsource.",
      },
    ],
    next: {
      anchor: "What results to expect from an SEO specialist in Sri Lanka",
      slug: "results-to-expect-from-seo-specialist-sri-lanka",
      blurb: "Decided your model? Now align on the realistic timeline and KPIs.",
    },
  },

  // 15. Signs of a good SEO specialist
  "signs-of-good-seo-specialist-sri-lanka": {
    related: [
      {
        anchor: "how to find the best SEO specialist in Sri Lanka",
        slug: "how-to-find-best-seo-specialist-sri-lanka",
        blurb: "The 7-point hiring checklist that pairs perfectly with these 8 signs.",
      },
      {
        anchor: "what an SEO specialist in Sri Lanka actually does",
        slug: "what-does-seo-specialist-sri-lanka-do",
        blurb: "Understand the role to recognise the signs of real capability.",
      },
      {
        anchor: "what results to expect from an SEO specialist in Sri Lanka",
        slug: "results-to-expect-from-seo-specialist-sri-lanka",
        blurb: "Pair these signs with realistic timeline expectations.",
      },
    ],
    next: {
      anchor: "How to find the best SEO specialist in Sri Lanka — 7 things to check",
      slug: "how-to-find-best-seo-specialist-sri-lanka",
      blurb: "Apply these signs alongside the full 7-point hiring checklist.",
    },
  },

  // 16. What to look for when hiring an SEO company
  "what-to-look-for-hiring-seo-company-sri-lanka": {
    related: [
      {
        anchor: "why most Sri Lankan businesses get SEO wrong",
        slug: "why-sri-lankan-businesses-get-seo-wrong",
        blurb: "The seven mistakes to avoid before you sign with any SEO company.",
      },
      {
        anchor: "how an SEO company in Sri Lanka builds long-term Google presence",
        slug: "how-seo-company-sri-lanka-builds-google-presence",
        blurb: "The full step-by-step process you should expect from a credible provider.",
      },
      {
        anchor: "how to choose the right SEO company in Sri Lanka",
        slug: "how-to-choose-seo-company-sri-lanka",
        blurb: "A complementary, decision-focused vetting framework.",
      },
    ],
    next: {
      anchor: "Why most Sri Lankan businesses get SEO wrong",
      slug: "why-sri-lankan-businesses-get-seo-wrong",
      blurb: "Now learn the seven mistakes that derail most SEO investments.",
    },
  },

  // 17. Why businesses get SEO wrong
  "why-sri-lankan-businesses-get-seo-wrong": {
    related: [
      {
        anchor: "what to look for when hiring an SEO company in Sri Lanka",
        slug: "what-to-look-for-hiring-seo-company-sri-lanka",
        blurb: "The hiring criteria that prevent most of these mistakes.",
      },
      {
        anchor: "how an SEO company in Sri Lanka builds long-term Google presence",
        slug: "how-seo-company-sri-lanka-builds-google-presence",
        blurb: "The right step-by-step process — what avoiding these mistakes looks like.",
      },
      {
        anchor: "the complete SEO Sri Lanka guide for 2025",
        slug: "seo-sri-lanka-complete-guide-2025",
        blurb: "Foundational knowledge to avoid the seven most common SEO mistakes.",
      },
    ],
    next: {
      anchor: "How an SEO company in Sri Lanka should build your long-term Google presence",
      slug: "how-seo-company-sri-lanka-builds-google-presence",
      blurb: "Now see what the right process actually looks like — step by step.",
    },
  },

  // 18. How an SEO company builds your Google presence
  "how-seo-company-sri-lanka-builds-google-presence": {
    related: [
      {
        anchor: "what to look for when hiring an SEO company in Sri Lanka",
        slug: "what-to-look-for-hiring-seo-company-sri-lanka",
        blurb: "Vet a provider against the 7-step process you now understand.",
      },
      {
        anchor: "why most Sri Lankan businesses get SEO wrong",
        slug: "why-sri-lankan-businesses-get-seo-wrong",
        blurb: "The mistakes this process is designed to avoid.",
      },
      {
        anchor: "what an SEO service in Sri Lanka actually includes",
        slug: "seo-service-sri-lanka-what-is-included",
        blurb: "Map this 7-step process to the deliverables in a real SEO retainer.",
      },
    ],
    next: {
      anchor: "What to look for when hiring an SEO company in Sri Lanka",
      slug: "what-to-look-for-hiring-seo-company-sri-lanka",
      blurb: "Now use this process as your evaluation lens for any prospective provider.",
    },
  },
};
