import React, { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MenuOverlay from "@/components/MenuOverlay";
import logo from "@/assets/logo.png";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "ru", label: "RU" },
  { code: "es", label: "ES" },
];

const Header: React.FC = () => {
  const { t, lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Top-left cutout nav bar */}
      <header className="fixed top-0 left-0 z-50">
        <div className="bg-background rounded-br-2xl px-6 py-4 flex items-center gap-6">
          {/* Logo */}
          <a
            onClick={() => { navigate("/"); setMenuOpen(false); }}
            className="cursor-pointer"
          >
            <img src={logo} alt="Reactance" className="h-7 w-auto invert dark:invert-0" />
          </a>

          {/* Menu button */}
          <button
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
            <span className="font-mono text-xs uppercase tracking-wider">
              {menuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Menu overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Floating language switcher - bottom right */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex">
        <div className="bg-card border border-border rounded-full shadow-lg px-1 py-1 flex items-center gap-0.5">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-2.5 py-1.5 text-xs font-mono rounded-full transition-colors ${
                lang === l.code
                  ? "bg-foreground text-background font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Floating contact button - left side */}
      <a
        href="#contact"
        className="fixed left-6 bottom-6 z-50 hidden md:inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors shadow-lg"
      >
        {t("nav.contact")}
        <ArrowUpRight size={14} />
      </a>
    </>
  );
};

export default Header;
