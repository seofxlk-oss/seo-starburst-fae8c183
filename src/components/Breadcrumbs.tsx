import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";
import { SITE } from "@/lib/site";

interface Crumb {
  label: string;
  href?: string;
}

export const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  const { pathname } = useLocation();

  // Build the full trail: Home → ...items.
  // For structured data, every item must resolve to a canonical URL — including the
  // current (last) page. If a crumb has no `href`, fall back to the current pathname.
  const trail: Required<Crumb>[] = [
    { label: "Home", href: "/" },
    ...items.map((c, i) => ({
      label: c.label,
      href: c.href ?? (i === items.length - 1 ? pathname : "#"),
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE.url}${c.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="container-tight pt-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-accent">Home</Link>
          </li>
          {items.map((c, i) => {
            const isLast = i === items.length - 1;
            return (
              <Fragment key={i}>
                <ChevronRight className="size-3.5 opacity-60" />
                <li>
                  {c.href && !isLast ? (
                    <Link to={c.href} className="hover:text-accent">{c.label}</Link>
                  ) : isLast ? (
                    <span className="font-medium text-foreground" aria-current="page">{c.label}</span>
                  ) : (
                    <Link to={c.href!} className="hover:text-accent">{c.label}</Link>
                  )}
                </li>
              </Fragment>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};
