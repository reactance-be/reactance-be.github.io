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
    <section id="expertise" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {t("expertise.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {expertiseKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-muted/50 border border-border rounded-lg p-5 md:p-6 hover:bg-muted transition-colors"
            >
              <span className="font-mono text-xs text-muted-foreground mb-2 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-foreground">
                {t(key)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-4"
        >
          {[
            { label: "Response Time", value: "<24h" },
            { label: "Uptime", value: "99.9%" },
            { label: "Available", value: "true" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-6 border border-border rounded-lg">
              <p className="text-xs font-mono text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
