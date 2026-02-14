import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const expertiseKeys = [
  "expertise.fem",
  "expertise.thermal",
  "expertise.pdm",
  "expertise.shortCircuit",
  "expertise.insulation",
  "expertise.3d",
  "expertise.standards",
  "expertise.reverseEng",
];

const Expertise: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="py-24 md:py-32">
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
              {t("expertise.title")}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {expertiseKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-background p-6 md:p-8 flex items-center gap-3 hover:bg-secondary/30 transition-colors"
            >
              <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
              <span className="text-sm font-medium text-foreground">
                {t(key)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
