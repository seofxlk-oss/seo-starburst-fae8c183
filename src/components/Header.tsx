import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-lg"
          : "bg-background"
      )}
    >
      <div className="container-tight flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="SeoFX home" className="flex items-center gap-2">
          <span className="font-display text-2xl font-extrabold tracking-tight text-primary">
            Seo<span className="text-gradient-accent">FX</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                to={l.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "text-accent" : "text-foreground/70 hover:text-foreground"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden xl:inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-accent"
          >
            <Phone className="size-4" /> {SITE.phone}
          </a>
          <Button asChild variant="hero" size="default">
            <Link to="/contact-us">Free SEO Audit</Link>
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-tight flex flex-col py-4" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="py-3 text-base font-medium text-foreground/80 hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <Phone className="size-4" /> {SITE.phone}
              </a>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact-us">Free SEO Audit</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
