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
    <section id="cases" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {t("cases.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background border border-border rounded-lg p-8 group hover:border-foreground/20 transition-colors cursor-pointer"
            >
              {/* Placeholder thumbnail */}
              <div className="h-40 mb-6 bg-muted rounded-md flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/5" />
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {t(c.titleKey)}
                </h3>
                <ArrowUpRight size={16} className="text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
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
