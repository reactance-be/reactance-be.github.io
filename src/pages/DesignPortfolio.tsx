import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface ProjectSpec {
  label: string;
  value: string;
}

interface Project {
  id: number;
  specs: ProjectSpec[];
}

const placeholderProjects: Project[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  specs: [
    { label: "Type", value: "TBD" },
    { label: "Cooling system", value: "TBD" },
    { label: "Rated power, MVA", value: "TBD" },
    { label: "Rated voltage (HV/LV), kV", value: "TBD" },
    { label: "Vector group symbols", value: "TBD" },
    { label: "Voltage regulation, range, No. of steps", value: "TBD" },
    { label: "Rated frequency, Hz", value: "TBD" },
    { label: "Special requirements", value: "TBD" },
  ],
}));

const DesignPortfolio: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

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

          <p className="text-sm font-mono text-muted-foreground mb-2">
            Transformers and Shunt Reactors Engineering
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
            Design Portfolio
          </h1>

          <div className="space-y-8">
            {placeholderProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border rounded-lg overflow-hidden bg-card"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground/40 text-sm font-mono">
                    Project {project.id} — Image TBD
                  </span>
                </div>

                {/* Specs table */}
                <div className="p-6 flex flex-col justify-center">
                  <table className="w-full text-sm">
                    <tbody>
                      {project.specs.map((spec, j) => (
                        <tr key={j} className="border-b border-border/50 last:border-0">
                          <td className="py-2 pr-4 font-semibold text-foreground whitespace-nowrap">
                            {spec.label}
                          </td>
                          <td className="py-2 text-muted-foreground">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DesignPortfolio;
