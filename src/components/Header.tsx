import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { pathname } = useLocation();
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const openServices = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

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
        <Link to="/" aria-label="SeoFX home" className="flex items-center">
          <img
            src={logo}
            alt="SeoFX — SEO Company Sri Lanka"
            className="h-8 w-auto sm:h-9"
            width={140}
            height={36}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));

            if (l.href === "/services") {
              return (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                >
                  <Link
                    to={l.href}
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                    onFocus={openServices}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active ? "text-accent" : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {l.label}
                    <ChevronDown className={cn("size-4 transition-transform", servicesOpen && "rotate-180")} />
                  </Link>

                  {servicesOpen && (
                    <div
                      role="menu"
                      onMouseEnter={openServices}
                      onMouseLeave={scheduleCloseServices}
                      className="absolute left-1/2 top-full z-50 mt-2 w-[640px] -translate-x-1/2 animate-fade-in"
                    >
                      <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
                        <div className="h-1 w-full bg-gradient-google" />
                        <div className="grid grid-cols-2 gap-1 p-3">
                          {SERVICES.map((s) => {
                            const Icon = s.icon;
                            return (
                              <Link
                                key={s.slug}
                                to={`/services/${s.slug}`}
                                role="menuitem"
                                className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-muted transition-colors"
                              >
                                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                                  <Icon className="size-4" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
                                    {s.shortTitle}
                                  </span>
                                  <span className="line-clamp-2 text-xs text-muted-foreground">
                                    {s.cardIntro}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                        <Link
                          to="/services"
                          className="block border-t border-border bg-muted/40 px-4 py-2.5 text-center text-xs font-semibold text-accent hover:bg-muted"
                        >
                          View all SEO services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

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
            {NAV_LINKS.map((l) => {
              if (l.href === "/services") {
                return (
                  <div key={l.href} className="border-b border-border/50 last:border-0">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      className="flex w-full items-center justify-between py-3 text-base font-medium text-foreground/80 hover:text-accent"
                    >
                      <span>{l.label}</span>
                      <ChevronDown
                        className={cn("size-4 transition-transform", mobileServicesOpen && "rotate-180")}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <ul className="mb-3 ml-1 space-y-1 border-l border-border pl-3">
                        <li>
                          <Link
                            to="/services"
                            className="block py-2 text-sm font-semibold text-accent"
                          >
                            All SEO Services
                          </Link>
                        </li>
                        {SERVICES.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`/services/${s.slug}`}
                              className="block py-2 text-sm text-foreground/75 hover:text-accent"
                            >
                              {s.shortTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className="py-3 text-base font-medium text-foreground/80 hover:text-accent"
                >
                  {l.label}
                </Link>
              );
            })}
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
