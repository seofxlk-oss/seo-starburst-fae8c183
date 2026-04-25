import { Search, ArrowRight, MessageCircle, MapPin, Star, TrendingUp, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

/**
 * Google-vibe hero: white background, multicolor accents (blue/red/yellow/green),
 * Google-style search bar, and a mocked SERP card showing SeoFX ranking #1.
 */
export const GoogleSearchHero = () => {
  const wa = `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi SeoFX, I'd like a free SEO audit."
  )}`;

  const queries = [
    "seo company sri lanka",
    "best seo company sri lanka",
    "seo packages in sri lanka",
    "seo price in sri lanka",
  ];

  return (
    <section className="relative overflow-hidden bg-soft">
      {/* Subtle top accent strip */}
      <div className="h-0.5 w-full bg-gradient-accent opacity-70" aria-hidden />

      <div className="container-tight relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        {/* LEFT — Pitch + Google-style search bar */}
        <div className="animate-fade-up">
          {/* Brand pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-wide shadow-card">
            <span className="size-2 rounded-full bg-accent" />
            <span className="text-muted-foreground">Page 1 SEO Specialists · Sri Lanka</span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            <span className="text-gradient-accent">SEO Company Sri Lanka</span> — Rank #1 on Google &amp; Grow Your Business
          </h1>

          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            SeoFX is a leading <strong className="font-semibold text-foreground">SEO company in Sri Lanka</strong> offering
            professional <strong className="font-semibold text-foreground">SEO services</strong>, transparent
            <strong className="font-semibold text-foreground"> SEO packages in Sri Lanka</strong>, and clear
            <strong className="font-semibold text-foreground"> SEO pricing</strong> — using 100% white-hat SEO to drive
            real traffic, leads and sales for Sri Lankan businesses.
          </p>

          {/* Google-style search bar */}
          <div className="mt-7">
            <div className="google-search-bar">
              <Search className="size-5 shrink-0 text-muted-foreground" />
              <span className="truncate font-medium text-foreground">
                seo company sri lanka
              </span>
              <span className="ml-auto hidden items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-bold text-accent sm:inline-flex">
                <ChevronUp className="size-3" /> #1 Result
              </span>
            </div>

            {/* Suggestion chips — keyword targets */}
            <div className="mt-3 flex flex-wrap gap-2">
              {queries.map((q) => (
                <span
                  key={q}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                >
                  <Search className="size-3 text-muted-foreground" />
                  {q}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact-us">
                Book Free Consultation <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact-us#audit">
                Get Free SEO Audit <Search className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust strip */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 max-w-md">
            <div>
              <div className="font-display text-2xl font-extrabold text-accent sm:text-3xl">73%</div>
              <div className="mt-1 text-xs text-muted-foreground">Avg. monthly traffic lift</div>
            </div>
            <div>
              <div className="font-display text-2xl font-extrabold text-accent sm:text-3xl">99%</div>
              <div className="mt-1 text-xs text-muted-foreground">Yearly organic growth</div>
            </div>
            <div>
              <div className="font-display text-2xl font-extrabold text-accent sm:text-3xl">100%</div>
              <div className="mt-1 text-xs text-muted-foreground">White-hat SEO</div>
            </div>
          </div>
        </div>

        {/* RIGHT — Mocked Google SERP */}
        <div className="relative animate-fade-in">
          {/* Soft brand-tinted blurs */}
          <div className="pointer-events-none absolute -top-10 -left-6 h-40 w-40 rounded-full bg-accent/10 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-10 -right-6 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />

          <div className="relative rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-lg)] sm:p-6">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <span className="size-2.5 rounded-full bg-google-red" />
              <span className="size-2.5 rounded-full bg-google-yellow" />
              <span className="size-2.5 rounded-full bg-google-green" />
              <div className="ml-3 flex flex-1 items-center gap-2 truncate rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground">
                <span className="text-google-green">●</span> google.lk/search?q=seo+company+sri+lanka
              </div>
            </div>

            {/* SERP search bar mock */}
            <div className="mt-4 flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2.5">
              <span className="font-display text-lg font-extrabold leading-none">
                <span className="text-google-blue">G</span>
                <span className="text-google-red">o</span>
                <span className="text-google-yellow">o</span>
                <span className="text-google-blue">g</span>
                <span className="text-google-green">l</span>
                <span className="text-google-red">e</span>
              </span>
              <span className="h-5 w-px bg-border" />
              <span className="flex-1 truncate text-sm text-foreground">seo company sri lanka</span>
              <Search className="size-4 text-google-blue" />
            </div>

            {/* Result tabs */}
            <div className="mt-3 flex gap-5 border-b border-border pb-2 text-xs text-muted-foreground">
              <span className="border-b-2 border-google-blue pb-2 font-semibold text-google-blue">All</span>
              <span>Maps</span>
              <span>Images</span>
              <span>News</span>
              <span className="hidden sm:inline">Videos</span>
            </div>

            {/* #1 result — SeoFX */}
            <article className="mt-4 rounded-xl border border-google-blue/20 bg-google-blue/5 p-4">
              <div className="flex items-center gap-2 text-xs">
                <div className="flex size-6 items-center justify-center rounded-full bg-gradient-accent text-[10px] font-extrabold text-white">
                  S
                </div>
                <div className="leading-tight">
                  <div className="font-semibold text-foreground">SeoFX</div>
                  <div className="text-muted-foreground">https://seofx.lk</div>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-google-green/10 px-2 py-0.5 text-[10px] font-bold text-google-green">
                  <TrendingUp className="size-3" /> #1
                </span>
              </div>
              <h3 className="mt-2 text-base font-bold leading-snug text-google-blue">
                SeoFX — Best SEO Company in Sri Lanka | SEO Services & Packages
              </h3>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                SeoFX is Sri Lanka's #1 SEO company. Proven SEO services, transparent SEO
                packages and white-hat results for Colombo, Kandy & Galle businesses.
              </p>
              <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Star className="size-3 fill-google-yellow text-google-yellow" />
                  <Star className="size-3 fill-google-yellow text-google-yellow" />
                  <Star className="size-3 fill-google-yellow text-google-yellow" />
                  <Star className="size-3 fill-google-yellow text-google-yellow" />
                  <Star className="size-3 fill-google-yellow text-google-yellow" />
                  <span className="ml-1 font-medium text-foreground">4.9</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3" /> Rajagiriya, Sri Lanka
                </span>
              </div>
            </article>

            {/* Other results — muted */}
            <div className="mt-3 space-y-3">
              {[
                "Top SEO Companies in Sri Lanka — Comparison 2025",
                "SEO Packages in Sri Lanka — Pricing Guide",
              ].map((t) => (
                <div key={t} className="rounded-lg border border-border p-3 opacity-60">
                  <div className="text-[11px] text-muted-foreground">seofx.lk › blog</div>
                  <div className="mt-0.5 text-sm font-semibold text-google-blue">{t}</div>
                  <div className="mt-1 h-2 w-3/4 rounded bg-muted" />
                  <div className="mt-1 h-2 w-1/2 rounded bg-muted" />
                </div>
              ))}
            </div>

            {/* Footer of card */}
            <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>About 1,240,000 results (0.42 seconds)</span>
              <span className="inline-flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-google-blue" />
                <span className="size-1.5 rounded-full bg-google-red" />
                <span className="size-1.5 rounded-full bg-google-yellow" />
                <span className="size-1.5 rounded-full bg-google-green" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
