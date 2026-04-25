import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const CTASection = ({
  title = "Ready to rank #1 on Google Sri Lanka?",
  subtitle = "Get a free SEO audit and a clear roadmap to grow your business online.",
}: { title?: string; subtitle?: string }) => {
  const wa = `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi SeoFX, I'd like a free SEO audit."
  )}`;
  return (
    <section className="relative overflow-hidden bg-hero py-20 text-white">
      <div className="absolute inset-0 bg-gradient-radial opacity-70" aria-hidden />
      <div className="container-tight relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill-light">Free Consultation</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">{subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact-us">Get My Free SEO Audit <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <a href={`tel:${SITE.phoneRaw}`}><Phone className="size-4" /> {SITE.phone}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
