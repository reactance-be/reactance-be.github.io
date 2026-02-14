import React, { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <a href="#" className="font-mono text-base font-semibold text-foreground tracking-tight">
            &lt;/T&gt;
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Contact button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              {t("nav.contact")}
              <ArrowUpRight size={14} />
            </a>
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
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t(item.key)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-foreground"
              >
                {t("nav.contact")}
              </a>
            </nav>
            <div className="flex gap-2 mt-4 pt-3 border-t border-border">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setMenuOpen(false); }}
                  className={`px-2 py-1 text-xs font-mono ${
                    lang === l.code ? "text-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

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
