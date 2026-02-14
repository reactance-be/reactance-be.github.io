import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center blueprint-grid overflow-hidden">
      {/* Decorative thin lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-border/50" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-border/50" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-border/50" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-border/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
              Engineering Consultancy
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6 tracking-tight">
            {t("hero.heading")}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            {t("hero.subheading")}
          </p>

          <Button size="lg" className="text-sm tracking-wide uppercase font-semibold px-8 py-6">
            {t("hero.cta")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
