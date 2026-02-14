import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const TrustMetrics: React.FC = () => {
  const { t } = useLanguage();

  const metrics = [
    { key: "trust.experience", value: "15+" },
    { key: "trust.optimization", value: "40%" },
    { key: "trust.standards", value: "IEC" },
  ];

  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {metrics.map((m, i) => (
            <motion.div
              key={m.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-8 md:py-10 px-6 text-center"
            >
              <p className="text-sm font-medium tracking-wide uppercase text-foreground">
                {t(m.key)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
