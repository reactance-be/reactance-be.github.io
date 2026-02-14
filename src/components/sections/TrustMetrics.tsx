import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const TrustMetrics: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Terminal-style system processor card */}
          <div className="terminal-card p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs terminal-muted">&lt;/T&gt; Engineering — System Overview</span>
              <span className="text-xs terminal-muted">
                {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Stats column */}
              <div className="space-y-4">
                <p className="text-xs terminal-muted uppercase tracking-wider mb-3">Metrics</p>
                <div className="flex justify-between">
                  <span className="text-xs terminal-muted">Experience</span>
                  <span className="text-sm font-semibold">15Y+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs terminal-muted">R&D Savings</span>
                  <span className="text-sm font-semibold">40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs terminal-muted">Available</span>
                  <span className="text-sm font-semibold terminal-accent">YES</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs terminal-muted">Response</span>
                  <span className="text-sm font-semibold">&lt;24h</span>
                </div>
              </div>

              {/* Capabilities column */}
              <div className="space-y-4">
                <p className="text-xs terminal-muted uppercase tracking-wider mb-3">Capabilities</p>
                {["FEM Analysis", "Thermal Modeling", "3D CAD/PLM", "Standards (IEC/IEEE/GOST)"].map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs">
                    <span className="terminal-accent">•</span>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Performance column */}
              <div className="space-y-4">
                <p className="text-xs terminal-muted uppercase tracking-wider mb-3">Performance</p>
                {[
                  { label: "Design", pct: 95 },
                  { label: "Analysis", pct: 90 },
                  { label: "Automation", pct: 85 },
                  { label: "Compliance", pct: 98 },
                ].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="terminal-muted">{item.label}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="progress-blocks">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className={`progress-block ${i < Math.round(item.pct / 10) ? "filled" : ""}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom status */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs terminal-muted">{t("trust.standards")}</span>
              <span className="text-xs terminal-accent">● ONLINE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustMetrics;
