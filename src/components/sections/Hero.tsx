import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen px-2 pb-2 pt-0">
      {/* Background image with rounded corners and spacing */}
      <div className="relative w-full h-screen rounded-xl overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-8 tracking-tight">
                  {t("hero.heading")}
                </h1>

                <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed font-mono">
                  {t("hero.subheading")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
