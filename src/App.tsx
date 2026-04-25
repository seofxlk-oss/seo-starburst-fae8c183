import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Pricing from "./pages/Pricing";
import CaseStudies from "./pages/CaseStudies";
import PorKenDeliCase from "./pages/PorKenDeliCase";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Post1 from "./pages/blog/Post1";
import Post2 from "./pages/blog/Post2";
import Post3 from "./pages/blog/Post3";
import Post4 from "./pages/blog/Post4";
import Post5 from "./pages/blog/Post5";
import Post6 from "./pages/blog/Post6";
import Post7 from "./pages/blog/Post7";
import Post8 from "./pages/blog/Post8";
import Post9 from "./pages/blog/Post9";
import Post10 from "./pages/blog/Post10";
import Post11 from "./pages/blog/Post11";
import Post12 from "./pages/blog/Post12";
import Post13 from "./pages/blog/Post13";
import Post14 from "./pages/blog/Post14";
import Post15 from "./pages/blog/Post15";
import Post16 from "./pages/blog/Post16";
import Post17 from "./pages/blog/Post17";
import Post18 from "./pages/blog/Post18";
import Post19 from "./pages/blog/Post19";
import Post20 from "./pages/blog/Post20";
import Post21 from "./pages/blog/Post21";
import Post22 from "./pages/blog/Post22";
import Post23 from "./pages/blog/Post23";
import Post24 from "./pages/blog/Post24";
import Post25 from "./pages/blog/Post25";
import Post26 from "./pages/blog/Post26";
import Post27 from "./pages/blog/Post27";
import Post28 from "./pages/blog/Post28";
import Post29 from "./pages/blog/Post29";
import Post30 from "./pages/blog/Post30";
import Post31 from "./pages/blog/Post31";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seo-specialist-sri-lanka" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/seo-packages-sri-lanka" element={<Pricing />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/porkendeli-seo-case-study" element={<PorKenDeliCase />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/stop-paying-for-leads-seo-lead-generation-sri-lanka" element={<Post1 />} />
            <Route path="/blog/seo-before-making-website-sri-lanka" element={<Post2 />} />
            <Route path="/blog/why-online-presence-important-sri-lanka" element={<Post3 />} />
            <Route path="/blog/organic-traffic-importance-sri-lanka" element={<Post4 />} />
            <Route path="/blog/website-lead-generation-sri-lanka" element={<Post5 />} />
            <Route path="/blog/how-to-choose-seo-company-sri-lanka" element={<Post6 />} />
            <Route path="/blog/top-seo-companies-in-sri-lanka-2025" element={<Post7 />} />
            <Route path="/blog/best-seo-company-sri-lanka-guide" element={<Post8 />} />
            <Route path="/blog/seo-companies-sri-lanka-comparison-guide" element={<Post9 />} />
            <Route path="/blog/seo-sri-lanka-complete-guide-2025" element={<Post10 />} />
            <Route path="/blog/seo-service-sri-lanka-what-is-included" element={<Post11 />} />
            <Route path="/blog/why-seofx-best-seo-company-in-sri-lanka" element={<Post12 />} />
            <Route path="/blog/seo-packages-sri-lanka-guide" element={<Post13 />} />
            <Route path="/blog/seo-price-sri-lanka-how-much-should-you-pay" element={<Post14 />} />
            <Route path="/blog/what-does-seo-specialist-sri-lanka-do" element={<Post15 />} />
            <Route path="/blog/seo-specialist-vs-seo-agency-sri-lanka" element={<Post16 />} />
            <Route path="/blog/how-to-find-best-seo-specialist-sri-lanka" element={<Post17 />} />
            <Route path="/blog/seo-sri-lanka-2026-how-google-has-changed" element={<Post18 />} />
            <Route path="/blog/is-seo-worth-it-sri-lanka" element={<Post19 />} />
            <Route path="/blog/how-to-choose-seo-company-sri-lanka-questions" element={<Post20 />} />
            <Route path="/blog/what-seo-company-sri-lanka-should-deliver" element={<Post21 />} />
            <Route path="/blog/seo-company-sri-lanka-red-flags-green-flags" element={<Post22 />} />
            <Route path="/blog/seo-services-sri-lanka-what-is-included" element={<Post23 />} />
            <Route path="/blog/on-page-vs-off-page-seo-services-sri-lanka" element={<Post24 />} />
            <Route path="/blog/monthly-seo-services-vs-one-time-audit-sri-lanka" element={<Post25 />} />
            <Route path="/blog/results-to-expect-from-seo-specialist-sri-lanka" element={<Post26 />} />
            <Route path="/blog/in-house-seo-specialist-vs-outsourcing-sri-lanka" element={<Post27 />} />
            <Route path="/blog/signs-of-good-seo-specialist-sri-lanka" element={<Post28 />} />
            <Route path="/blog/what-to-look-for-hiring-seo-company-sri-lanka" element={<Post29 />} />
            <Route path="/blog/why-sri-lankan-businesses-get-seo-wrong" element={<Post30 />} />
            <Route path="/blog/how-seo-company-sri-lanka-builds-google-presence" element={<Post31 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
