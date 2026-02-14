import React, { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { Menu, X } from "lucide-react";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "ru", label: "RU" },
  { code: "es", label: "ES" },
];

const Header: React.FC = () => {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { key: "nav.services", href: "#services" },
    { key: "nav.caseStudies", href: "#cases" },
    { key: "nav.expertise", href: "#expertise" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          TEC<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        {/* Language switcher */}
        <div className="hidden md:flex items-center gap-1">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-2 py-1 text-xs font-medium tracking-wider transition-colors ${
                lang === l.code
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary uppercase tracking-wide"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
          <div className="flex gap-2 mt-4 pt-3 border-t border-border">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setMenuOpen(false); }}
                className={`px-2 py-1 text-xs font-medium tracking-wider ${
                  lang === l.code ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
