import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      num: "01",
      titleKey: "services.consulting.title",
      descKey: "services.consulting.desc",
      deliverables: "Process audit, automation roadmap, PLM integration plan",
      timeline: "2-4 weeks",
      slug: "/consult",
    },
    {
      num: "02",
      titleKey: "services.design.title",
      descKey: "services.design.desc",
      deliverables: "FEM reports, 3D models, documentation package",
      timeline: "4-12 weeks",
      slug: "/design",
    },
    {
      num: "03",
      titleKey: "services.modernization.title",
      descKey: "services.modernization.desc",
      deliverables: "Diagnostic report, upgrade specifications, implementation",
      timeline: "3-8 weeks",
      slug: "/modernize",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {t("services.title")}
          </h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-border">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 group"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="font-mono text-sm text-muted-foreground">{s.num}</span>
              </div>

              {/* Title & description */}
              <div className="md:col-span-5">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(s.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(s.descKey)}
                </p>
              </div>

              {/* Deliverables */}
              <div className="md:col-span-4">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Deliverables</p>
                <p className="text-sm text-foreground">{s.deliverables}</p>
              </div>

              {/* Timeline & slug */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <span className="font-mono text-xs text-muted-foreground">{s.slug}</span>
                <span className="font-mono text-sm text-foreground">{s.timeline}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
