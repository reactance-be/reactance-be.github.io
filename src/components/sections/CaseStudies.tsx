import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowUpRight } from "lucide-react";

const CaseStudies: React.FC = () => {
  const { t } = useLanguage();

  const cases = [
    { titleKey: "cases.1.title", descKey: "cases.1.desc" },
    { titleKey: "cases.2.title", descKey: "cases.2.desc" },
    { titleKey: "cases.3.title", descKey: "cases.3.desc" },
  ];

  return (
    <section id="cases" className="py-24 md:py-32 bg-secondary/20 blueprint-grid">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
              {t("cases.title")}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border bg-background p-8 group hover:border-primary/40 transition-colors"
            >
              <div className="h-32 mb-6 bg-secondary/50 border border-border flex items-center justify-center">
                <div className="w-16 h-16 border border-border/60 rounded-sm" />
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {t(c.titleKey)}
                </h3>
                <ArrowUpRight size={16} className="text-primary mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(c.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
