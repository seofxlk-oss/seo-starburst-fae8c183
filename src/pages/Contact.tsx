import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { orgSchema, websiteSchema, localBusinessSchema, webPageSchema } from "@/lib/schema";

const Contact = () => {
  const wa = `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi SeoFX, I'd like a free SEO audit for my website."
  )}`;

  return (
    <Layout>
      <SEO
        title="Contact SEO Company Sri Lanka | Free SEO Audit | SeoFX"
        description="Contact SeoFX — SEO company Sri Lanka. Request a free SEO audit, SEO consultation or SEO price quote. Call +94 777 797 035 or WhatsApp us today."
        canonical="/contact-us"
        keywords="seo company sri lanka contact, seo consultation sri lanka, free seo audit sri lanka, seo service sri lanka, seo sri lanka"
        jsonLd={[
          orgSchema(),
          websiteSchema(),
          localBusinessSchema(),
          webPageSchema({
            type: "ContactPage",
            name: "Contact SeoFX — SEO Company Sri Lanka",
            description:
              "Contact SeoFX, Sri Lanka's leading SEO company. Get a free SEO audit, request SEO pricing or book a consultation by phone, WhatsApp or email.",
            url: "https://seofx.lk/contact-us",
          }),
        ]}
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">Contact Us</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Contact Sri Lanka's <span className="text-gradient-accent">Best SEO Company</span> — Get a Free Website Audit Today
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Ready to take your business to the top of Google? Whether you want a free SEO audit, a pricing quote for
            our SEO packages in Sri Lanka, or just a conversation about how SEO can help your business — we are here
            to help.
          </p>
        </div>
      </section>

      <section className="container-tight pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Quick contact actions */}
          <div className="flex flex-col gap-4">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:border-accent/50 hover:-translate-y-0.5 sm:gap-5 sm:p-6"
            >
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow sm:size-14">
                <Phone className="size-5 sm:size-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Call us now</div>
                <div className="mt-0.5 font-display text-base font-bold sm:text-xl">{SITE.phone}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">Secondary: {SITE.phone2}</div>
              </div>
              <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
            </a>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:border-accent/50 hover:-translate-y-0.5 sm:gap-5 sm:p-6"
            >
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white shadow-glow sm:size-14">
                <MessageCircle className="size-5 sm:size-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Chat on WhatsApp</div>
                <div className="mt-0.5 font-display text-base font-bold sm:text-xl">Get instant reply</div>
                <div className="mt-0.5 text-xs text-muted-foreground">Fastest way to reach us</div>
              </div>
              <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
            </a>

          </div>

          <aside className="rounded-3xl bg-hero p-6 text-white sm:p-10">
            <h2 className="font-display text-2xl font-bold">Visit our office</h2>
            <div className="mt-6 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/60">Office</div>
                  <div className="mt-0.5 text-base font-medium">{SITE.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/60">Hours</div>
                  <div className="mt-0.5 text-base font-medium">Mon–Fri · 9:00am – 6:00pm</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/60">Phone</div>
                  <a href={`tel:${SITE.phoneRaw}`} className="mt-0.5 block text-base font-medium hover:text-accent">{SITE.phone}</a>
                  <a href={`tel:${SITE.phone2Raw}`} className="block text-sm text-white/70 hover:text-accent">{SITE.phone2}</a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-white/5 p-5 backdrop-blur">
              <p className="text-sm text-white/80">
                <strong className="text-white">Free SEO Consultation</strong> — talk to a Sri Lankan SEO specialist
                today. No obligation. We'll analyse your site and recommend the right plan.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-4 w-full">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" /> Get My Free SEO Consultation
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
