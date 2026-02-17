import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const subPageKeys: Record<string, string> = {
  parametrization: "parametrization",
  "cad-cae-integration": "cad-cae-integration",
};

const GenericPage: React.FC = () => {
  const { page, subPage } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const pageKey = page || "";

  const title = subPage
    ? t(`page.${subPageKeys[subPage] || subPage}.title`) !== `page.${subPageKeys[subPage] || subPage}.title`
      ? t(`page.${subPageKeys[subPage] || subPage}.title`)
      : t(`menu.${subPageKeys[subPage] || subPage}`)
    : t(`page.${pageKey}.title`);

  const parentTitle = subPage ? t(`page.${pageKey}.title`) : undefined;

  const bodyText = subPage
    ? t(`page.${subPageKeys[subPage] || subPage}.text`)
    : t(`page.${pageKey}.text`);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            {t("common.back")}
          </button>

          {parentTitle && (
            <p className="text-sm font-mono text-muted-foreground mb-2">{parentTitle}</p>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
            {title}
          </h1>

          <div className="terminal-card p-8 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{bodyText}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GenericPage;
