import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/20">
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
              {t("contact.title")}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("contact.desc")}
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-foreground">
                <Mail size={16} className="text-primary" />
                <span>{t("contact.email")}</span>
              </div>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-primary hover:underline"
              >
                <Calendar size={16} />
                <span>{t("contact.bookDirect")}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border border-border bg-background p-1"
          >
            {/* Google Calendar iframe placeholder */}
            <div className="w-full h-64 md:h-80 bg-secondary/30 flex flex-col items-center justify-center gap-4">
              <Calendar size={32} className="text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground">Google Calendar Booking Widget</p>
              <Button variant="outline" size="sm" className="text-xs uppercase tracking-wide">
                {t("hero.cta")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
