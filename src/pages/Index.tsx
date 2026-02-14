import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustMetrics from "@/components/sections/TrustMetrics";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import Expertise from "@/components/sections/Expertise";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustMetrics />
        <Services />
        <CaseStudies />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
