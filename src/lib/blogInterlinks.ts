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

  // 5. seo sri lanka — complete guide (2026)
  "seo-sri-lanka-complete-guide-2025": {
    related: [
      {
        anchor: "How Google search has changed in Sri Lanka in 2026",
        slug: "seo-sri-lanka-2026-how-google-has-changed",
        blurb: "The 6 biggest shifts in Google's algorithm and what they mean locally.",
      },
      {
        anchor: "Is SEO worth it for Sri Lankan businesses?",
        slug: "is-seo-worth-it-sri-lanka",
        blurb: "Honest reasoning on when SEO pays off — and when it doesn't.",
      },
      {
        anchor: "SEO service in Sri Lanka — what it includes",
        slug: "seo-service-sri-lanka-what-is-included",
        blurb: "Plain-English breakdown of every component of a real SEO campaign.",
      },
    ],
    next: {
      anchor: "How Google search has changed in Sri Lanka in 2026",
      slug: "seo-sri-lanka-2026-how-google-has-changed",
      blurb: "Now you know the fundamentals — see exactly what's changed in 2026.",
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

  // 13. SEO Sri Lanka 2026 — Google changes
  "seo-sri-lanka-2026-how-google-has-changed": {
    related: [
      { anchor: "Complete guide to SEO in Sri Lanka (2026)", slug: "seo-sri-lanka-complete-guide-2025", blurb: "The full 2026 SEO playbook for Sri Lankan businesses." },
      { anchor: "Is SEO worth it for Sri Lankan businesses?", slug: "is-seo-worth-it-sri-lanka", blurb: "Honest reasoning on when SEO pays off." },
      { anchor: "SEO service in Sri Lanka — what's included", slug: "seo-service-sri-lanka-what-is-included", blurb: "Make sure your SEO covers the new 2026 essentials." },
    ],
    next: { anchor: "Is SEO worth it for Sri Lankan businesses?", slug: "is-seo-worth-it-sri-lanka", blurb: "Now decide whether SEO is the right investment for your business." },
  },

  // 14. Is SEO worth it
  "is-seo-worth-it-sri-lanka": {
    related: [
      { anchor: "Complete guide to SEO in Sri Lanka (2026)", slug: "seo-sri-lanka-complete-guide-2025", blurb: "The definitive playbook for SEO in Sri Lanka." },
      { anchor: "How Google search has changed in Sri Lanka in 2026", slug: "seo-sri-lanka-2026-how-google-has-changed", blurb: "What's shifted and what your business must do now." },
      { anchor: "SEO price in Sri Lanka — how much should you pay?", slug: "seo-price-sri-lanka-how-much-should-you-pay", blurb: "Honest pricing benchmarks before you commit budget." },
    ],
    next: { anchor: "Complete guide to SEO in Sri Lanka (2026)", slug: "seo-sri-lanka-complete-guide-2025", blurb: "Decided SEO is worth it? Here's the complete 2026 playbook." },
  },
};
