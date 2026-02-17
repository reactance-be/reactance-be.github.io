import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Map URL slugs to translation keys
const serviceKeyMap: Record<string, string> = {
  "transformers-and-shunt-reactors-engineering": "transformers-and-shunt-reactors-engineering",
  "condition-assessment": "condition-assessment",
  "specification-writing-and-review": "specification-writing-and-review",
  "factory-audits": "factory-audits",
  "proposal-evaluation": "proposal-evaluation",
  "transformer-design-review": "transformer-design-review",
  "independent-inspection": "independent-inspection",
  "core-and-coil-inspection": "core-and-coil-inspection",
  "pre-processing-inspection": "pre-processing-inspection",
  "pre-tanking-inspection": "pre-tanking-inspection",
  "electromagnetic-calculations": "electromagnetic-calculations",
  "active-part-design": "active-part-design",
  "tank-and-external-equipment": "tank-and-external-equipment",
  "control-cabinet-and-wiring": "control-cabinet-and-wiring",
  "fem-simulations": "fem-simulations",
  "materials-specifications": "materials-specifications",
  "dga-and-oil-analysis": "dga-and-oil-analysis",
  "modernization-and-refurbishment": "modernization-and-refurbishment",
  "reverse-engineering": "reverse-engineering",
  "active-parts-inspection": "active-parts-inspection",
  "maintenance-planning": "maintenance-planning",
  "life-cycle-planning": "life-cycle-planning",
  "static-structural": "static-structural",
  "harmonic-response": "harmonic-response",
  "magnetic-fields": "magnetic-fields",
  "electrostatic": "electrostatic",
};

const ServicePage: React.FC = () => {
  const { service, subService, detail } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const slug = detail || subService || service || "";
  const key = serviceKeyMap[slug] || slug;

  const title = t(`service.${key}.title`);
  const description = t(`service.${key}.desc`);

  const parentSlug = subService ? service : undefined;
  const parentKey = parentSlug ? serviceKeyMap[parentSlug] || parentSlug : undefined;
  const parentTitle = parentKey ? t(`service.${parentKey}.title`) : undefined;

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
            {t("common.back")}
          </button>

          {parentTitle && (
            <p className="text-sm font-mono text-muted-foreground mb-2">{parentTitle}</p>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
            {title}
          </h1>

          <div className="terminal-card p-8 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
