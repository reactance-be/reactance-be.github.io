import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Cpu, PenTool, Wrench } from "lucide-react";

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cpu,
      titleKey: "services.consulting.title",
      descKey: "services.consulting.desc",
    },
    {
      icon: PenTool,
      titleKey: "services.design.title",
      descKey: "services.design.desc",
    },
    {
      icon: Wrench,
      titleKey: "services.modernization.title",
      descKey: "services.modernization.desc",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32">
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
              {t("services.title")}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <motion.div
              key={s.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/30 transition-colors"
            >
              <s.icon
                size={28}
                strokeWidth={1.5}
                className="text-primary mb-6"
              />
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(s.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(s.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
