import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="bg-hero text-white">
      <div className="container-tight py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-3xl font-extrabold tracking-tight text-white">
              Seo<span className="text-gradient-accent">FX</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              SeoFX is one of the best SEO companies in Sri Lanka, specialising in strategic SEO solutions for small
              and medium-sized businesses. Helping great Sri Lankan businesses grow online and generate more leads
              through proven, results-driven SEO.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 hover:text-accent">
                <Phone className="size-4" /> {SITE.phone}
              </a>
              <a href={`tel:${SITE.phone2Raw}`} className="flex items-center gap-2 hover:text-accent">
                <Phone className="size-4" /> {SITE.phone2}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-accent">
                <Mail className="size-4" /> {SITE.email}
              </a>
              <p className="flex items-center gap-2"><MapPin className="size-4" /> {SITE.address}</p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Navigate</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-accent">{l.label}</Link>
                </li>
              ))}
              <li><Link to="/contact-us" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">SEO Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/services" className="hover:text-accent">SEO Consulting</Link></li>
              <li><Link to="/services" className="hover:text-accent">Website SEO Audit</Link></li>
              <li><Link to="/services" className="hover:text-accent">Keyword Research</Link></li>
              <li><Link to="/services" className="hover:text-accent">On-Site SEO</Link></li>
              <li><Link to="/services" className="hover:text-accent">Off-Site SEO</Link></li>
              <li><Link to="/services" className="hover:text-accent">Link Building</Link></li>
              <li><Link to="/seo-packages-sri-lanka" className="hover:text-accent">SEO Packages</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SeoFX. All Rights Reserved. Best SEO Company in Sri Lanka.</p>
          <p>SeoFX — Sri Lanka's #1 SEO Company</p>
        </div>
      </div>
    </footer>
  );
};
