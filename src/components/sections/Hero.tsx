import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grey abstract shapes on sides */}
        <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-muted/60 to-transparent" />
        <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-muted/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground mb-8 tracking-tight">
              {t("hero.heading")}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("hero.subheading")}
            </p>
          </motion.div>

          {/* Terminal loading animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-md mx-auto"
          >
            <div className="terminal-card p-6 text-left text-sm">
              <p className="terminal-muted mb-1">$ Initializing systems</p>
              <p className="terminal-muted mb-1">$ Loading modules</p>
              <p className="terminal-muted mb-3">$ Compiling design data</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                    className="h-full bg-white/80 rounded-full"
                  />
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8 }}
                  className="text-xs terminal-muted"
                >
                  100%
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
