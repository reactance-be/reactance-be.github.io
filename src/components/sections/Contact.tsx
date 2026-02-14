import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });

  const steps = [
    { label: "What's your name?", field: "name" as const, placeholder: "Your name" },
    { label: "What's your email address?", field: "email" as const, placeholder: "your@email.com" },
    { label: "Tell us about your project", field: "project" as const, placeholder: "Describe your transformer engineering needs..." },
  ];

  const currentStep = steps[step];
  const isLastStep = step === steps.length - 1;
  const isDone = step >= steps.length;

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-12">
              {t("contact.title")}
            </h2>
          </motion.div>

          {!isDone ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <label className="block text-lg text-foreground font-medium">
                {currentStep.label}<span className="text-muted-foreground">*</span>
              </label>
              {currentStep.field === "project" ? (
                <textarea
                  value={formData[currentStep.field]}
                  onChange={(e) => setFormData({ ...formData, [currentStep.field]: e.target.value })}
                  placeholder={currentStep.placeholder}
                  className="w-full bg-transparent border-b-2 border-border focus:border-foreground outline-none py-3 text-lg text-foreground placeholder:text-muted-foreground resize-none transition-colors"
                  rows={3}
                />
              ) : (
                <input
                  type={currentStep.field === "email" ? "email" : "text"}
                  value={formData[currentStep.field]}
                  onChange={(e) => setFormData({ ...formData, [currentStep.field]: e.target.value })}
                  placeholder={currentStep.placeholder}
                  className="w-full bg-transparent border-b-2 border-border focus:border-foreground outline-none py-3 text-lg text-foreground placeholder:text-muted-foreground transition-colors"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && formData[currentStep.field]) {
                      if (isLastStep) setStep(steps.length);
                      else setStep(step + 1);
                    }
                  }}
                />
              )}
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => {
                    if (formData[currentStep.field]) {
                      if (isLastStep) setStep(steps.length);
                      else setStep(step + 1);
                    }
                  }}
                  disabled={!formData[currentStep.field]}
                  className="rounded-full px-6"
                >
                  {isLastStep ? "Submit" : "Continue"}
                  <ArrowRight size={14} />
                </Button>
                <span className="text-xs text-muted-foreground font-mono">
                  Press Enter or click Continue
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="terminal-card p-6 text-sm"
            >
              <p className="terminal-accent mb-2">✓ Message sent successfully</p>
              <p className="terminal-muted">We'll get back to you within 24 hours.</p>
            </motion.div>
          )}

          {/* Contact details */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="terminal-card p-6 text-sm space-y-2">
              <p className="terminal-muted mb-3">$ get in touch</p>
              <p>&gt; <a href={`mailto:${t("contact.email")}`} className="hover:underline">{t("contact.email")}</a></p>
              <p>&gt; <a href="#" className="hover:underline">{t("contact.bookDirect")}</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
