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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
