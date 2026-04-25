import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";

interface BlogPostProps {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string;
  category: string;
  date: string;
  readTime: string;
  cta: string;
  children: React.ReactNode;
}

export const BlogPost = ({
  slug, title, metaTitle, metaDesc, keywords, category, date, readTime, cta, children,
}: BlogPostProps) => {
  return (
    <Layout>
      <SEO
        title={metaTitle}
        description={metaDesc}
        canonical={`/blog/${slug}`}
        keywords={keywords}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          datePublished: date,
          author: { "@type": "Organization", name: "SeoFX" },
          publisher: { "@id": "https://seofx.lk/#organization" },
          mainEntityOfPage: `https://seofx.lk/blog/${slug}`,
          image: "https://seofx.lk/og-image.jpg",
        }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: category }]} />

      <article className="container-narrow py-12 sm:py-16">
        <span className="badge-pill">{category}</span>
        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">{title}</h1>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="size-4" />
            {new Date(date).toLocaleDateString("en-LK", { year: "numeric", month: "long", day: "numeric" })}
          </span>
          <span className="flex items-center gap-1.5"><Clock className="size-4" />{readTime}</span>
          <span>· By SeoFX Team</span>
        </div>

        <div className="prose-content mt-10 space-y-5 text-base leading-relaxed text-muted-foreground
                       [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10
                       [&>h3]:font-display [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3]:mt-8
                       [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-1.5
                       [&>p>strong]:text-foreground">
          {children}
        </div>

        <div className="mt-12 rounded-3xl border border-accent/30 bg-accent/5 p-8 text-center">
          <p className="text-lg font-medium text-foreground">{cta}</p>
          <Button asChild variant="hero" size="lg" className="mt-5">
            <Link to="/contact-us">Get a Free Consultation <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </article>

      <CTASection />
    </Layout>
  );
};
