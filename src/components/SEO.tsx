import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

export const SEO = ({
  title,
  description,
  canonical,
  keywords,
  ogImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/tmIaoo88z2Xx6RhZlq0u8oH6sQ62/social-images/social-1777087076617-logo_(1).webp",
  jsonLd,
  noindex = false,
}: SEOProps) => {
  const fullCanonical = canonical.startsWith("http") ? canonical : `https://seofx.lk${canonical}`;
  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_LK" />
      <meta property="og:site_name" content="SeoFX" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdArray.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
