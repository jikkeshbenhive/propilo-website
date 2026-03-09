import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BrandEngineering from "./pages/BrandEngineering";
import FullStackProduct from "./pages/FullStackProduct";
import AIAgents from "./pages/AIAgents";
import WorkflowAutomation from "./pages/WorkflowAutomation";
import AIStrategy from "./pages/AIStrategy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

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
          <Route path="/services/brand-engineering" element={<BrandEngineering />} />
          <Route path="/services/full-stack-product" element={<FullStackProduct />} />
          <Route path="/services/ai-agents" element={<AIAgents />} />
          <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/services/ai-strategy" element={<AIStrategy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
