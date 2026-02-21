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

const renderRichText = (text: string) => {
  const blocks = text.split("\n\n");
  return blocks.map((block, i) => {
    const trimmed = block.trim();

    // Section heading (§ prefix)
    if (trimmed.startsWith("§ ")) {
      return (
        <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4 tracking-tight">
          {trimmed.slice(2)}
        </h2>
      );
    }

    // Blockquote (lines starting with >)
    if (trimmed.startsWith("> ")) {
      const lines = trimmed.split("\n").map((l) => l.replace(/^>\s?/, ""));
      return (
        <blockquote
          key={i}
          className="border-l-2 border-primary/40 pl-6 my-6 italic text-muted-foreground"
        >
          {lines.map((line, j) => (
            <p key={j} className="leading-relaxed">
              {line}
            </p>
          ))}
        </blockquote>
      );
    }

    // Bullet list (lines starting with • or  •)
    const bulletLines = trimmed.split("\n").filter((l) => l.trim().startsWith("•"));
    if (bulletLines.length > 0) {
      return (
        <ul key={i} className="space-y-3 my-4">
          {bulletLines.map((line, j) => {
            const content = line.replace(/^\s*•\s*/, "");
            const colonIdx = content.indexOf(":");
            if (colonIdx > 0 && colonIdx < 60) {
              return (
                <li key={j} className="flex gap-2 text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">{content.slice(0, colonIdx)}:</strong>
                    {content.slice(colonIdx + 1)}
                  </span>
                </li>
              );
            }
            return (
              <li key={j} className="flex gap-2 text-muted-foreground leading-relaxed">
                <span className="text-primary mt-1">•</span>
                <span>{content}</span>
              </li>
            );
          })}
        </ul>
      );
    }

    // Regular paragraph
    return (
      <p key={i} className="text-muted-foreground leading-relaxed mb-4">
        {trimmed}
      </p>
    );
  });
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
            {renderRichText(bodyText)}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GenericPage;
