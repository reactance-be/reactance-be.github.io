import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          {t("footer.legal")}
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            {t("footer.imprint")}
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
