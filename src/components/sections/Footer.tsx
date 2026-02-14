import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="terminal-card p-6 text-sm space-y-2 mb-8">
          <p className="terminal-muted">$ system info</p>
          <p>&gt; <a href={`mailto:${t("contact.email")}`} className="hover:underline">{t("contact.email")}</a></p>
          <p>&gt; <a href="#" className="hover:underline text-terminal-foreground">
            <span className="inline-flex items-center gap-1">linkedin <Linkedin size={12} /></span>
          </a></p>
          <p>&gt; <a href="#" className="hover:underline">{t("footer.imprint")}</a></p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{t("footer.legal")}</p>
          <span className="font-mono text-xs text-muted-foreground">_</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
