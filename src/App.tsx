import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import GenericPage from "./pages/GenericPage";
import DesignPortfolio from "./pages/DesignPortfolio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/transformers-and-shunt-reactors-engineering/design-portfolio" element={<DesignPortfolio />} />
            <Route path="/services/:service" element={<ServicePage />} />
            <Route path="/services/:service/:subService" element={<ServicePage />} />
            <Route path="/services/:service/:subService/:detail" element={<ServicePage />} />
            <Route path="/training/:subPage" element={<GenericPage />} />
            <Route path="/:page" element={<GenericPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
