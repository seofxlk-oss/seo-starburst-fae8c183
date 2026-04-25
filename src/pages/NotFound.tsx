import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <SEO title="Page Not Found | SeoFX" description="The page you are looking for could not be found." canonical="/404" noindex />
      <section className="container-tight flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="font-display text-8xl font-extrabold text-gradient-accent">404</span>
        <h1 className="mt-4 font-display text-3xl font-bold">Page not found</h1>
        <p className="mt-3 max-w-md text-muted-foreground">The page you are looking for does not exist or has been moved.</p>
        <Button asChild variant="hero" size="lg" className="mt-8"><Link to="/">Back to Home</Link></Button>
      </section>
    </Layout>
  );
};

export default NotFound;
