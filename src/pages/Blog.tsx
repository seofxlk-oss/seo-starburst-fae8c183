import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { BLOG_POSTS } from "@/lib/site";

const Blog = () => {
  return (
    <Layout>
      <SEO
        title="SEO Blog Sri Lanka | SEO Tips & Guides | SeoFX"
        description="SEO blog Sri Lanka — expert SEO tips, guides and news from SeoFX, the leading SEO company in Sri Lanka. Learn SEO strategies that grow Sri Lankan businesses."
        canonical="/blog"
        keywords="seo blog sri lanka, seo tips sri lanka, seo guide sri lanka, seo company sri lanka, seo sri lanka"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "SeoFX SEO Blog",
          url: "https://seofx.lk/blog",
        }}
      />
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">Blog</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            SEO Insights for <span className="text-gradient-accent">Sri Lankan Businesses</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Stay ahead of the competition with expert SEO tips, digital marketing guides, and practical insights from
            Sri Lanka's leading SEO team. Written for Sri Lankan business owners who want to understand SEO and grow
            online.
          </p>
        </div>
      </section>

      <section className="container-tight pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {BLOG_POSTS.map((p, i) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className={`group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 ${
                i === 0 ? "md:col-span-2 md:p-10" : ""
              }`}
            >
              <span className="badge-pill self-start">{p.category}</span>
              <h2
                className={`mt-4 font-display font-extrabold leading-tight transition-colors group-hover:text-accent ${
                  i === 0 ? "text-2xl sm:text-3xl" : "text-xl"
                }`}
              >
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5"><Calendar className="size-3.5" />{new Date(p.date).toLocaleDateString("en-LK", { year: "numeric", month: "short", day: "numeric" })}</span>
                  <span className="flex items-center gap-1.5"><Clock className="size-3.5" />{p.readTime}</span>
                </span>
                <span className="flex items-center gap-1 text-accent transition-transform group-hover:translate-x-1">
                  Read <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Blog;
