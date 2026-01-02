import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Design from "./pages/services/Design.tsx";
import ContentSEO from "./pages/services/ContentSEO.tsx";
import PaidMedia from "./pages/services/PaidMedia.tsx";
import SocialGrowth from "./pages/services/SocialGrowth.tsx";
import GrowthMarketing from "./pages/services/GrowthMarketing.tsx";
import Development from "./pages/services/Development.tsx";
import CaseStudies from "./pages/CaseStudies";
import Pricing from "./pages/Pricing";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Insights from "./pages/Insights";
import Podcast from "./pages/Podcast";
import Newsletter from "./pages/Newsletter";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/growth-marketing" element={<GrowthMarketing />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/content-seo" element={<ContentSEO />} />
          <Route path="/services/paid-media" element={<PaidMedia />} />
          <Route path="/services/social-growth" element={<SocialGrowth />} />
          <Route path="/services/development" element={<Development />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
