
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import LanguageSelection from "./pages/LanguageSelection";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Learn from "./pages/Learn";
import LegalAid from "./pages/LegalAid";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/splash" replace />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/language-selection" element={<LanguageSelection />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/legal-aid" element={<LegalAid />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
