import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

interface Crumb { label: string; href?: string }

export const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  const ldItems = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: ldItems.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href ? `https://seofx.lk${c.href}` : undefined,
    })),
  };
  return (
    <>
      <nav aria-label="Breadcrumb" className="container-tight pt-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-accent">Home</Link></li>
          {items.map((c, i) => (
            <Fragment key={i}>
              <ChevronRight className="size-3.5 opacity-60" />
              <li>
                {c.href ? (
                  <Link to={c.href} className="hover:text-accent">{c.label}</Link>
                ) : (
                  <span className="font-medium text-foreground">{c.label}</span>
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};
