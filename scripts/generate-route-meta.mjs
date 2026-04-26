import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const indexHtmlPath = path.join(distDir, "index.html");

const SITE_URL = "https://seofx.lk";
const DEFAULT_OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/tmIaoo88z2Xx6RhZlq0u8oH6sQ62/social-images/social-1777087076617-logo_(1).webp";
const TWITTER_HANDLE = "@seofxlk";

if (!fs.existsSync(indexHtmlPath)) {
  throw new Error("dist/index.html not found. Run the Vite build before generating route meta.");
}

const { SERVICES } = await import(path.join(rootDir, "src/lib/services.ts"));
const { INDUSTRIES } = await import(path.join(rootDir, "src/lib/industries.ts"));

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

const pageMeta = new Map([
  ["/", {
    title: "SEO Company Sri Lanka — #1 Rated SEO Agency | SeoFX",
    description: "Sri Lanka's #1 SEO company. Rank on Google in 90 days or we work free. White-hat SEO services for businesses, agencies & web devs. Free SEO audit today.",
    canonical: "/",
    keywords: "seo company sri lanka, seo sri lanka, best seo company in sri lanka, seo services sri lanka, seo packages sri lanka, seo agency sri lanka, seo specialist sri lanka, white label seo sri lanka, local seo sri lanka, seo colombo",
    ogImageAlt: "SeoFX — #1 SEO Company in Sri Lanka with 90-day ranking promise",
  }],
  ["/seo-specialist-sri-lanka", {
    title: "SEO Specialist Sri Lanka — Best SEO Experts | SeoFX",
    description: "Meet Sri Lanka's top SEO specialists. 10+ years' experience, 50+ brands ranked, 100% white-hat SEO. Trusted SEO consultants in Colombo. Book a free call.",
    canonical: "/seo-specialist-sri-lanka",
    keywords: "seo specialist sri lanka, best seo specialist sri lanka, seo expert sri lanka, seo consultant sri lanka, seo professional sri lanka, best seo company sri lanka, seo agency sri lanka, seo company colombo",
    ogImageAlt: "SeoFX — Sri Lanka's leading SEO specialists & SEO consultants",
  }],
  ["/services", {
    title: "SEO Services in Sri Lanka — Full SEO Service | SeoFX",
    description: "Full-service SEO in Sri Lanka: audit, keyword research, on-page, link building, local & e-commerce SEO. 50+ Sri Lankan brands ranked. Free SEO audit.",
    canonical: "/services",
    keywords: "seo services sri lanka, seo service sri lanka, seo company sri lanka, best seo services sri lanka, technical seo sri lanka, on page seo sri lanka, off page seo sri lanka, local seo sri lanka, ecommerce seo sri lanka, link building sri lanka",
    ogImageAlt: "Full SEO services in Sri Lanka by SeoFX — audit, on-page, link building, local SEO",
  }],
  ["/seo-packages-sri-lanka", {
    title: "SEO Packages Sri Lanka — Prices from LKR 29,900 | SeoFX",
    description: "Transparent SEO packages in Sri Lanka from LKR 29,900/month. Starter, Business & Premium plans. 90-Day Ranking Promise — rank or we work free. Get a quote.",
    canonical: "/seo-packages-sri-lanka",
    keywords: "seo packages sri lanka, seo price sri lanka, seo packages in sri lanka, seo price in sri lanka, seo cost sri lanka, affordable seo sri lanka, cheap seo sri lanka, monthly seo sri lanka, seo plans sri lanka, seo company sri lanka",
    ogImageAlt: "SEO packages in Sri Lanka from LKR 29,900/month — 90-day ranking promise by SeoFX",
  }],
  ["/case-studies", {
    title: "SEO Case Studies Sri Lanka — Real Ranking Results | SeoFX",
    description: "See real SEO results from Sri Lankan brands. 73% avg. monthly traffic lift, 99% yearly organic growth. Browse SeoFX case studies & client wins.",
    canonical: "/case-studies",
    keywords: "seo case studies sri lanka, seo results sri lanka, seo success stories sri lanka, sri lanka seo portfolio, seo company sri lanka, best seo company sri lanka, proven seo results sri lanka",
    ogImageAlt: "SEO case studies from Sri Lankan brands — real ranking & traffic results by SeoFX",
  }],
  ["/case-studies/porkendeli-seo-case-study", {
    title: "PorKenDeli SEO Case Study | Best SEO Company Sri Lanka | SeoFX",
    description: "See how SeoFX helped PorKenDeli.lk skyrocket their organic traffic and Alexa Rank. A real SEO success story from Sri Lanka's best SEO company.",
    canonical: "/case-studies/porkendeli-seo-case-study",
    keywords: "seo case study sri lanka, restaurant seo sri lanka, local seo sri lanka, seo company sri lanka",
  }],
  ["/contact-us", {
    title: "Contact SeoFX — Free SEO Audit Sri Lanka | Call Us",
    description: "Talk to Sri Lanka's #1 SEO company. Get a free SEO audit, instant quote or book a consultation. Call +94 777 797 035 or WhatsApp us — reply in minutes.",
    canonical: "/contact-us",
    keywords: "contact seo company sri lanka, free seo audit sri lanka, seo consultation sri lanka, seo quote sri lanka, seo agency contact sri lanka, seo colombo contact, whatsapp seo sri lanka",
    ogImageAlt: "Contact SeoFX — Free SEO audit & consultation in Sri Lanka",
  }],
  ["/faq", {
    title: "SEO FAQ Sri Lanka — Pricing, Timelines & Results | SeoFX",
    description: "Top SEO questions answered: SEO price in Sri Lanka, how long SEO takes, what's included & how to choose an SEO company. Honest answers from SeoFX experts.",
    canonical: "/faq",
    keywords: "seo faq sri lanka, seo questions sri lanka, seo price sri lanka, seo cost sri lanka, how long does seo take sri lanka, seo packages sri lanka, seo company sri lanka, seo service questions sri lanka",
    ogImageAlt: "SEO FAQ — Sri Lanka SEO pricing, timelines & results explained by SeoFX",
  }],
  ["/blog", {
    title: "SEO Blog Sri Lanka — Expert SEO Tips & Guides | SeoFX",
    description: "The Sri Lanka SEO blog: actionable tips, ranking guides, local SEO strategies & case studies from SeoFX — Sri Lanka's leading SEO team. New posts weekly.",
    canonical: "/blog",
    keywords: "seo blog sri lanka, seo tips sri lanka, seo guide sri lanka, sri lanka seo strategies, local seo sri lanka, google ranking sri lanka, seo company sri lanka, seo learning sri lanka",
    ogImageAlt: "SeoFX SEO Blog — Sri Lanka SEO tips, guides & ranking strategies",
  }],
  ["/seo-consultant-sri-lanka", {
    title: "SEO Consultant Sri Lanka – #1 SEO Consulting Services & Strategy",
    description: "SEO consultant Sri Lanka offering SEO consulting services, audits, keyword research & ranking strategies to grow your business online. Get started today.",
    canonical: "/seo-consultant-sri-lanka",
    keywords: "seo consultant sri lanka, seo consulting sri lanka, seo strategy sri lanka, seo expert sri lanka, seo company sri lanka",
  }],
  ["/industries", {
    title: "Industry SEO Sri Lanka — Hotels, Travel, Ecommerce & More | SeoFX",
    description: "Industry-specific SEO services in Sri Lanka — hotels, travel, furniture, education, healthcare, ecommerce, exports & fashion. Rank locally and globally.",
    canonical: "/industries",
    keywords: "industry seo sri lanka, niche seo sri lanka, industry specific seo, seo for hotels sri lanka, seo for ecommerce sri lanka, seo for exports sri lanka, seo for healthcare sri lanka",
    ogImageAlt: "Industry SEO services in Sri Lanka by SeoFX — 8 industries covered",
  }],
  ["/404", {
    title: "Page Not Found | SeoFX",
    description: "The page you are looking for could not be found.",
    canonical: "/404",
    noindex: true,
  }],
]);

for (const service of SERVICES) {
  pageMeta.set(`/services/${service.slug}`, {
    title: service.seoTitle,
    description: service.seoDescription,
    canonical: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

for (const industry of INDUSTRIES) {
  pageMeta.set(`/${industry.slug}`, {
    title: industry.seoTitle,
    description: industry.seoDescription,
    canonical: `/${industry.slug}`,
    keywords: industry.keywords,
    ogImageAlt: `${industry.navLabel} in Sri Lanka by SeoFX`,
  });
}

const blogDir = path.join(rootDir, "src/pages/blog");
for (const file of fs.readdirSync(blogDir).filter((name) => /^Post\d+\.tsx$/.test(name))) {
  const text = fs.readFileSync(path.join(blogDir, file), "utf8");
  const slug = text.match(/slug="([^"]+)"/)?.[1];
  const metaTitle = text.match(/metaTitle="([\s\S]*?)"/)?.[1];
  const metaDesc = text.match(/metaDesc="([\s\S]*?)"/)?.[1];
  const keywords = text.match(/keywords="([\s\S]*?)"/)?.[1];
  if (slug && metaTitle && metaDesc) {
    pageMeta.set(`/blog/${slug}`, {
      title: metaTitle,
      description: metaDesc,
      canonical: `/blog/${slug}`,
      keywords,
      ogType: "article",
    });
  }
}

const baseHtml = fs.readFileSync(indexHtmlPath, "utf8");

const buildMetaBlock = (meta) => {
  const canonicalUrl = meta.canonical?.startsWith("http") ? meta.canonical : `${SITE_URL}${meta.canonical || "/"}`;
  const robots = meta.noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";
  const ogType = meta.ogType || "website";
  const ogImage = meta.ogImage || DEFAULT_OG_IMAGE;
  const ogImageAlt = meta.ogImageAlt || "SeoFX — Best SEO Company in Sri Lanka";

  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    meta.keywords ? `<meta name="keywords" content="${escapeHtml(meta.keywords)}" />` : "",
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    `<meta name="googlebot" content="${escapeHtml(robots)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(ogImage)}" />`,
    `<meta property="og:image:secure_url" content="${escapeHtml(ogImage)}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(ogImageAlt)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:type" content="${escapeHtml(ogType)}" />`,
    `<meta property="og:locale" content="en_LK" />`,
    `<meta property="og:locale:alternate" content="si_LK" />`,
    `<meta property="og:locale:alternate" content="ta_LK" />`,
    `<meta property="og:site_name" content="SeoFX" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="${escapeHtml(TWITTER_HANDLE)}" />`,
    `<meta name="twitter:creator" content="${escapeHtml(TWITTER_HANDLE)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(ogImageAlt)}" />`,
    `<meta name="twitter:domain" content="seofx.lk" />`,
    `<meta name="twitter:url" content="${escapeHtml(canonicalUrl)}" />`,
  ].filter(Boolean).join("\n    ");
};

const replaceHeadMeta = (html, meta) => html.replace(
  /<!-- ROUTE_META_START -->[\s\S]*?<!-- ROUTE_META_END -->/,
  `<!-- ROUTE_META_START -->\n    ${buildMetaBlock(meta)}\n    <!-- ROUTE_META_END -->`,
);

for (const [routePath, meta] of pageMeta.entries()) {
  const finalHtml = replaceHeadMeta(baseHtml, meta);
  const outputDir = routePath === "/" ? distDir : path.join(distDir, routePath.replace(/^\//, ""));
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), finalHtml);
}

console.log(`Generated route-specific HTML meta for ${pageMeta.size} routes.`);
