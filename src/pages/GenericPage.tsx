import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";

const pageTitles: Record<string, string> = {
  training: "Training",
  support: "Support",
  about: "About",
  careers: "Careers",
};

const subPageTitles: Record<string, string> = {
  parametrization: "Parametrization of Customer Design Solutions",
  "cad-cae-integration": "Integration of CAD/CAE and Software Tools",
};

const GenericPage: React.FC = () => {
  const { page, subPage } = useParams();
  const navigate = useNavigate();

  const title = subPage
    ? subPageTitles[subPage] || subPage
    : pageTitles[page || ""] || page;

  const parentTitle = subPage ? pageTitles[page || ""] : undefined;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          {parentTitle && (
            <p className="text-sm font-mono text-muted-foreground mb-2">{parentTitle}</p>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
            {title}
          </h1>

          <div className="terminal-card p-8 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              Content for this section is coming soon. Please contact us for more information.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GenericPage;
