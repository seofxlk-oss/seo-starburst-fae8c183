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

  // 15. SEO Company Sri Lanka — 10 questions to ask
  "how-to-choose-seo-company-sri-lanka-questions": {
    related: [
      { anchor: "What an SEO company in Sri Lanka should deliver in month 1, 3 & 6", slug: "what-seo-company-sri-lanka-should-deliver", blurb: "Realistic monthly expectations from a professional SEO company." },
      { anchor: "Red flags vs green flags — telling good SEO companies from bad", slug: "seo-company-sri-lanka-red-flags-green-flags", blurb: "How to spot problematic providers before you sign anything." },
      { anchor: "How to choose the right SEO company in Sri Lanka", slug: "how-to-choose-seo-company-sri-lanka", blurb: "The companion shortlisting framework for any SEO agency." },
    ],
    next: { anchor: "What an SEO company in Sri Lanka should deliver each month", slug: "what-seo-company-sri-lanka-should-deliver", blurb: "Now you know the questions — here's what their answers should look like in delivery." },
  },

  // 16. What SEO company should deliver
  "what-seo-company-sri-lanka-should-deliver": {
    related: [
      { anchor: "10 questions to ask any SEO company in Sri Lanka before you sign", slug: "how-to-choose-seo-company-sri-lanka-questions", blurb: "The exact questions that reveal whether a provider can really deliver." },
      { anchor: "Red flags vs green flags for SEO companies in Sri Lanka", slug: "seo-company-sri-lanka-red-flags-green-flags", blurb: "Warning signs and credibility markers to watch for in any provider." },
      { anchor: "SEO packages in Sri Lanka", slug: "seo-packages-sri-lanka-guide", blurb: "Match these monthly deliverables to the right package tier." },
    ],
    next: { anchor: "Red flags vs green flags — good vs bad SEO companies in Sri Lanka", slug: "seo-company-sri-lanka-red-flags-green-flags", blurb: "Now learn how to spot the providers most likely to underdeliver." },
  },

  // 17. Red flags / green flags
  "seo-company-sri-lanka-red-flags-green-flags": {
    related: [
      { anchor: "10 questions to ask any SEO company in Sri Lanka before you sign", slug: "how-to-choose-seo-company-sri-lanka-questions", blurb: "Use these questions to expose the red flags directly." },
      { anchor: "What an SEO company in Sri Lanka should deliver in month 1, 3 & 6", slug: "what-seo-company-sri-lanka-should-deliver", blurb: "Realistic monthly benchmarks for any SEO company." },
      { anchor: "Best SEO company in Sri Lanka — full criteria guide", slug: "best-seo-company-sri-lanka-guide", blurb: "What 'best' really means in Sri Lankan SEO." },
    ],
    next: { anchor: "10 questions to ask any SEO company in Sri Lanka before you sign", slug: "how-to-choose-seo-company-sri-lanka-questions", blurb: "Now turn the green flags into specific, direct questions for any agency." },
  },

  // 18. SEO Services Sri Lanka — what's included
  "seo-services-sri-lanka-what-is-included": {
    related: [
      { anchor: "On-page vs off-page SEO services in Sri Lanka", slug: "on-page-vs-off-page-seo-services-sri-lanka", blurb: "How the two disciplines work together — and why both matter." },
      { anchor: "Monthly SEO services vs a one-time audit in Sri Lanka", slug: "monthly-seo-services-vs-one-time-audit-sri-lanka", blurb: "Which engagement model fits your business right now?" },
      { anchor: "SEO service in Sri Lanka — plain-English breakdown", slug: "seo-service-sri-lanka-what-is-included", blurb: "A complementary plain-English view of every SEO service component." },
    ],
    next: { anchor: "On-page vs off-page SEO services in Sri Lanka", slug: "on-page-vs-off-page-seo-services-sri-lanka", blurb: "Now zoom into how on-page and off-page work together to drive rankings." },
  },

  // 19. On-page vs Off-page SEO services
  "on-page-vs-off-page-seo-services-sri-lanka": {
    related: [
      { anchor: "What SEO services in Sri Lanka should include", slug: "seo-services-sri-lanka-what-is-included", blurb: "The complete component-by-component breakdown of professional SEO services." },
      { anchor: "Monthly SEO services vs a one-time audit in Sri Lanka", slug: "monthly-seo-services-vs-one-time-audit-sri-lanka", blurb: "Decide whether you need ongoing services or a standalone audit." },
      { anchor: "SEO packages in Sri Lanka", slug: "seo-packages-sri-lanka-guide", blurb: "Match the right balance of on-page and off-page work to a package." },
    ],
    next: { anchor: "Monthly SEO services vs a one-time audit in Sri Lanka", slug: "monthly-seo-services-vs-one-time-audit-sri-lanka", blurb: "Now decide which engagement model is the right next step for your business." },
  },

  // 20. Monthly SEO vs one-time audit
  "monthly-seo-services-vs-one-time-audit-sri-lanka": {
    related: [
      { anchor: "What SEO services in Sri Lanka should include", slug: "seo-services-sri-lanka-what-is-included", blurb: "The full breakdown of what professional SEO services should cover." },
      { anchor: "On-page vs off-page SEO services in Sri Lanka", slug: "on-page-vs-off-page-seo-services-sri-lanka", blurb: "How the two disciplines combine — and why both matter." },
      { anchor: "SEO price in Sri Lanka — how much should you pay?", slug: "seo-price-sri-lanka-how-much-should-you-pay", blurb: "Honest pricing benchmarks for both audits and monthly services." },
    ],
    next: { anchor: "What SEO services in Sri Lanka should include", slug: "seo-services-sri-lanka-what-is-included", blurb: "Whichever option you choose — make sure these components are covered." },
  },

  // 21. Results to expect from an SEO specialist
  "results-to-expect-from-seo-specialist-sri-lanka": {
    related: [
      { anchor: "What an SEO specialist in Sri Lanka actually does", slug: "what-does-seo-specialist-sri-lanka-do", blurb: "The full role and outputs of a real SEO specialist." },
      { anchor: "8 signs of a genuinely good SEO specialist in Sri Lanka", slug: "signs-of-good-seo-specialist-sri-lanka", blurb: "Spot real expertise vs convincing presentation." },
      { anchor: "In-house SEO specialist vs outsourcing in Sri Lanka", slug: "in-house-seo-specialist-vs-outsourcing-sri-lanka", blurb: "Which delivery model fits your business?" },
    ],
    next: { anchor: "8 signs of a genuinely good SEO specialist in Sri Lanka", slug: "signs-of-good-seo-specialist-sri-lanka", blurb: "Now make sure the specialist behind those results is the real deal." },
  },

  // 22. In-house vs outsourcing
  "in-house-seo-specialist-vs-outsourcing-sri-lanka": {
    related: [
      { anchor: "SEO specialist vs SEO agency in Sri Lanka", slug: "seo-specialist-vs-seo-agency-sri-lanka", blurb: "Specialist or agency? The companion decision framework." },
      { anchor: "What results to expect from an SEO specialist in Sri Lanka", slug: "results-to-expect-from-seo-specialist-sri-lanka", blurb: "Realistic timelines and KPIs for any specialist engagement." },
      { anchor: "8 signs of a genuinely good SEO specialist in Sri Lanka", slug: "signs-of-good-seo-specialist-sri-lanka", blurb: "Vetting marks for individual specialists — internal or external." },
    ],
    next: { anchor: "8 signs of a genuinely good SEO specialist in Sri Lanka", slug: "signs-of-good-seo-specialist-sri-lanka", blurb: "Whichever path you choose — use these 8 signs to evaluate the person." },
  },

  // 23. 8 signs of a good SEO specialist
  "signs-of-good-seo-specialist-sri-lanka": {
    related: [
      { anchor: "How to find the best SEO specialist in Sri Lanka", slug: "how-to-find-best-seo-specialist-sri-lanka", blurb: "The 7-point check before you hire any SEO specialist." },
      { anchor: "What results to expect from an SEO specialist in Sri Lanka", slug: "results-to-expect-from-seo-specialist-sri-lanka", blurb: "Realistic timelines and KPIs once you've found the right specialist." },
      { anchor: "In-house SEO specialist vs outsourcing in Sri Lanka", slug: "in-house-seo-specialist-vs-outsourcing-sri-lanka", blurb: "Decide whether to embed the specialist or engage them externally." },
    ],
    next: { anchor: "What results to expect from an SEO specialist in Sri Lanka", slug: "results-to-expect-from-seo-specialist-sri-lanka", blurb: "Now align your expectations with what a great specialist can realistically deliver." },
  },

  // 24. What to look for when hiring an SEO company in Sri Lanka
  "what-to-look-for-hiring-seo-company-sri-lanka": {
    related: [
      { anchor: "Why most Sri Lankan businesses get SEO wrong", slug: "why-sri-lankan-businesses-get-seo-wrong", blurb: "The seven most common SEO mistakes — and the right approach instead." },
      { anchor: "How an SEO company in Sri Lanka builds long-term Google presence", slug: "how-seo-company-sri-lanka-builds-google-presence", blurb: "The full step-by-step process behind durable rankings." },
      { anchor: "10 questions to ask any SEO company in Sri Lanka before you sign", slug: "how-to-choose-seo-company-sri-lanka-questions", blurb: "The companion question set to test any provider on the spot." },
    ],
    next: { anchor: "Why most Sri Lankan businesses get SEO wrong", slug: "why-sri-lankan-businesses-get-seo-wrong", blurb: "Now learn which mistakes the wrong provider will quietly lock you into." },
  },

  // 25. Why Sri Lankan businesses get SEO wrong
  "why-sri-lankan-businesses-get-seo-wrong": {
    related: [
      { anchor: "What to look for when hiring an SEO company in Sri Lanka", slug: "what-to-look-for-hiring-seo-company-sri-lanka", blurb: "The hiring framework that prevents every one of these mistakes." },
      { anchor: "How an SEO company in Sri Lanka builds long-term Google presence", slug: "how-seo-company-sri-lanka-builds-google-presence", blurb: "The right process — step by step — for durable Google rankings." },
      { anchor: "Complete guide to SEO in Sri Lanka (2026)", slug: "seo-sri-lanka-complete-guide-2025", blurb: "The definitive 2026 SEO playbook for Sri Lankan businesses." },
    ],
    next: { anchor: "How an SEO company in Sri Lanka builds long-term Google presence", slug: "how-seo-company-sri-lanka-builds-google-presence", blurb: "Now see exactly what the right approach looks like in practice — step by step." },
  },

  // 26. How SEO company builds Google presence
  "how-seo-company-sri-lanka-builds-google-presence": {
    related: [
      { anchor: "What to look for when hiring an SEO company in Sri Lanka", slug: "what-to-look-for-hiring-seo-company-sri-lanka", blurb: "How to find a provider that can actually execute this process." },
      { anchor: "Why most Sri Lankan businesses get SEO wrong", slug: "why-sri-lankan-businesses-get-seo-wrong", blurb: "The seven mistakes that derail this process — and how to avoid them." },
      { anchor: "What an SEO company in Sri Lanka should deliver in month 1, 3 & 6", slug: "what-seo-company-sri-lanka-should-deliver", blurb: "Month-by-month benchmarks tied to the steps in this process." },
    ],
    next: { anchor: "What to look for when hiring an SEO company in Sri Lanka", slug: "what-to-look-for-hiring-seo-company-sri-lanka", blurb: "Ready to evaluate providers? Here's the full hiring checklist to apply." },
  },
};
