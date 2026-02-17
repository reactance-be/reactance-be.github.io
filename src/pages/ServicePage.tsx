import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";

const serviceTitles: Record<string, string> = {
  "transformers-and-shunt-reactors-engineering": "Transformers and Shunt Reactors Engineering",
  "condition-assessment": "Condition Assessment Services",
  "specification-writing-and-review": "Specification Writing and Review",
  "factory-audits": "Factory Audits",
  "proposal-evaluation": "Proposal Evaluation",
  "transformer-design-review": "Transformer Design Review",
  "independent-inspection": "Independent Inspection and Test Witnessing",
  "core-and-coil-inspection": "Core and Coil Inspection",
  "pre-processing-inspection": "Pre-processing Inspection",
  "pre-tanking-inspection": "Pre-tanking Inspection"
};

const subServiceTitles: Record<string, string> = {
  "electromagnetic-calculations": "Electromagnetic Calculations",
  "active-part-design": "Active Part Design",
  "tank-and-external-equipment": "Transformer Tank and External Equipment Design",
  "control-cabinet-and-wiring": "Control Cabinet and External Wiring",
  "fem-simulations": "FEM Simulations",
  "materials-specifications": "Materials Specifications",
  "dga-and-oil-analysis": "DGA and Oil Analysis",
  "modernization-and-refurbishment": "Modernization and Refurbishment",
  "reverse-engineering": "Reverse Engineering",
  "active-parts-inspection": "Active Parts Inspection",
  "maintenance-planning": "Maintenance Planning",
  "life-cycle-planning": "Life Cycle Planning",
  "static-structural": "Static Structural",
  "harmonic-response": "Harmonic Response",
  "magnetic-fields": "Magnetic Fields",
  "electrostatic": "Electrostatic"
};

const ServicePage: React.FC = () => {
  const { service, subService, detail } = useParams();
  const navigate = useNavigate();

  const title = detail ?
  subServiceTitles[detail] || detail :
  subService ?
  subServiceTitles[subService] || subService :
  serviceTitles[service || ""] || service;

  const parentTitle = subService ?
  serviceTitles[service || ""] :
  undefined;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">

            <ArrowLeft size={16} />
            Back
          </button>

          {parentTitle &&
          <p className="text-sm font-mono text-muted-foreground mb-2">{parentTitle}</p>
          }

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
            {title}
          </h1>

          <div className="terminal-card p-8 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              We are providing electromagnetic calculations for various products.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>);

};

export default ServicePage;