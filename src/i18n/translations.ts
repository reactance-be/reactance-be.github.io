export type Language = "en" | "de" | "ru" | "es";

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.services": "Services",
    "nav.caseStudies": "Case Studies",
    "nav.expertise": "Expertise",
    "nav.contact": "Contact",

    // Hero
    "hero.heading": "Precision Engineering for Power Transformers.",
    "hero.subheading": "Reduce R&D costs by up to 40% through automated design and 15+ years of international expertise.",
    "hero.cta": "Schedule a Teams Call",

    // Trust
    "trust.experience": "15+ Years Experience",
    "trust.optimization": "40% R&D Optimization",
    "trust.standards": "IEC, IEEE, GOST Standards",

    // Services
    "services.title": "Services",
    "services.consulting.title": "Consulting & CAD/PLM Automation",
    "services.consulting.desc": "Process optimization, workflow automation, and PLM system integration tailored for transformer manufacturers.",
    "services.design.title": "Turnkey Design",
    "services.design.desc": "Complete design packages including FEM analysis, 3D modeling, and documentation to international standards.",
    "services.modernization.title": "Service & Modernization",
    "services.modernization.desc": "Diagnostics, reverse engineering, and upgrade solutions for existing transformer fleets.",

    // Case Studies
    "cases.title": "Case Studies",
    "cases.1.title": "110kV Transformer Optimization",
    "cases.1.desc": "Reduced material costs by 18% through advanced FEM-driven redesign while maintaining full IEC compliance.",
    "cases.2.title": "CAD Automation Deployment",
    "cases.2.desc": "Implemented parametric design automation reducing engineering hours by 60% for a European OEM.",
    "cases.3.title": "International Export Compliance",
    "cases.3.desc": "Enabled market entry across 12 countries by aligning designs with IEC, IEEE, and GOST standards simultaneously.",

    // Expertise
    "expertise.title": "Technical Expertise",
    "expertise.fem": "FEM Analysis",
    "expertise.thermal": "Thermal Modeling",
    "expertise.pdm": "PDM/PLM Systems",
    "expertise.shortCircuit": "Short-Circuit Analysis",
    "expertise.insulation": "Insulation Design",
    "expertise.3d": "3D Parametric Modeling",
    "expertise.standards": "Standards Compliance",
    "expertise.reverseEng": "Reverse Engineering",

    // Contact
    "contact.title": "Book a Consultation",
    "contact.desc": "Schedule a Microsoft Teams call to discuss your transformer engineering challenges.",
    "contact.email": "info@transformer-consult.com",
    "contact.bookDirect": "Or book directly via Google Calendar",

    // Footer
    "footer.legal": "© 2026 Reactance. All rights reserved.",
    "footer.imprint": "Imprint",
  },
  de: {
    "nav.services": "Leistungen",
    "nav.caseStudies": "Referenzen",
    "nav.expertise": "Kompetenz",
    "nav.contact": "Kontakt",

    "hero.heading": "Präzisionstechnik für Leistungstransformatoren.",
    "hero.subheading": "Senken Sie Ihre F&E-Kosten um bis zu 40 % durch automatisiertes Design und über 15 Jahre internationale Erfahrung.",
    "hero.cta": "Teams-Gespräch vereinbaren",

    "trust.experience": "15+ Jahre Erfahrung",
    "trust.optimization": "40 % F&E-Optimierung",
    "trust.standards": "IEC-, IEEE-, GOST-Normen",

    "services.title": "Leistungen",
    "services.consulting.title": "Beratung & CAD/PLM-Automatisierung",
    "services.consulting.desc": "Prozessoptimierung, Workflow-Automatisierung und PLM-Systemintegration für Transformatorenhersteller.",
    "services.design.title": "Schlüsselfertige Konstruktion",
    "services.design.desc": "Komplette Konstruktionspakete inkl. FEM-Analyse, 3D-Modellierung und Dokumentation nach internationalen Normen.",
    "services.modernization.title": "Service & Modernisierung",
    "services.modernization.desc": "Diagnostik, Reverse Engineering und Upgrade-Lösungen für bestehende Transformatorenflotten.",

    "cases.title": "Referenzen",
    "cases.1.title": "110-kV-Transformator-Optimierung",
    "cases.1.desc": "Materialkosten um 18 % gesenkt durch FEM-gestütztes Redesign bei voller IEC-Konformität.",
    "cases.2.title": "CAD-Automatisierung",
    "cases.2.desc": "Parametrische Konstruktionsautomatisierung mit 60 % weniger Ingenieurstunden für einen europäischen OEM.",
    "cases.3.title": "Internationale Exportkonformität",
    "cases.3.desc": "Markteintritt in 12 Ländern durch gleichzeitige Einhaltung von IEC-, IEEE- und GOST-Normen.",

    "expertise.title": "Technische Kompetenz",
    "expertise.fem": "FEM-Analyse",
    "expertise.thermal": "Thermische Modellierung",
    "expertise.pdm": "PDM/PLM-Systeme",
    "expertise.shortCircuit": "Kurzschlussanalyse",
    "expertise.insulation": "Isolationsdesign",
    "expertise.3d": "3D-Parametrische Modellierung",
    "expertise.standards": "Normenkonformität",
    "expertise.reverseEng": "Reverse Engineering",

    "contact.title": "Beratungsgespräch buchen",
    "contact.desc": "Vereinbaren Sie ein Microsoft-Teams-Gespräch zu Ihren Transformatoren-Herausforderungen.",
    "contact.email": "info@transformer-consult.com",
    "contact.bookDirect": "Oder direkt über Google Calendar buchen",

    "footer.legal": "© 2026 Reactance. Alle Rechte vorbehalten.",
    "footer.imprint": "Impressum",
  },
  ru: {
    "nav.services": "Услуги",
    "nav.caseStudies": "Кейсы",
    "nav.expertise": "Компетенции",
    "nav.contact": "Контакт",

    "hero.heading": "Точное проектирование силовых трансформаторов.",
    "hero.subheading": "Сократите затраты на НИОКР до 40 % благодаря автоматизированному проектированию и более чем 15-летнему международному опыту.",
    "hero.cta": "Записаться на звонок в Teams",

    "trust.experience": "15+ лет опыта",
    "trust.optimization": "40 % оптимизация НИОКР",
    "trust.standards": "Стандарты IEC, IEEE, ГОСТ",

    "services.title": "Услуги",
    "services.consulting.title": "Консалтинг и автоматизация CAD/PLM",
    "services.consulting.desc": "Оптимизация процессов, автоматизация рабочих процессов и интеграция PLM-систем для производителей трансформаторов.",
    "services.design.title": "Проектирование «под ключ»",
    "services.design.desc": "Полные проектные пакеты, включая МКЭ-анализ, 3D-моделирование и документацию по международным стандартам.",
    "services.modernization.title": "Сервис и модернизация",
    "services.modernization.desc": "Диагностика, реверс-инжиниринг и решения по модернизации существующего парка трансформаторов.",

    "cases.title": "Кейсы",
    "cases.1.title": "Оптимизация трансформатора 110 кВ",
    "cases.1.desc": "Снижение материальных затрат на 18 % за счёт МКЭ-оптимизации при полном соответствии IEC.",
    "cases.2.title": "Внедрение автоматизации CAD",
    "cases.2.desc": "Параметрическая автоматизация проектирования сократила инженерные часы на 60 % для европейского OEM.",
    "cases.3.title": "Международная экспортная сертификация",
    "cases.3.desc": "Выход на рынки 12 стран благодаря одновременному соответствию стандартам IEC, IEEE и ГОСТ.",

    "expertise.title": "Технические компетенции",
    "expertise.fem": "МКЭ-анализ",
    "expertise.thermal": "Тепловое моделирование",
    "expertise.pdm": "Системы PDM/PLM",
    "expertise.shortCircuit": "Анализ коротких замыканий",
    "expertise.insulation": "Проектирование изоляции",
    "expertise.3d": "3D параметрическое моделирование",
    "expertise.standards": "Соответствие стандартам",
    "expertise.reverseEng": "Реверс-инжиниринг",

    "contact.title": "Записаться на консультацию",
    "contact.desc": "Запланируйте звонок в Microsoft Teams для обсуждения ваших задач по трансформаторам.",
    "contact.email": "info@transformer-consult.com",
    "contact.bookDirect": "Или запишитесь напрямую через Google Calendar",

    "footer.legal": "© 2026 Reactance. Все права защищены.",
    "footer.imprint": "Правовая информация",
  },
  es: {
    "nav.services": "Servicios",
    "nav.caseStudies": "Casos de Éxito",
    "nav.expertise": "Competencias",
    "nav.contact": "Contacto",

    "hero.heading": "Ingeniería de Precisión para Transformadores de Potencia.",
    "hero.subheading": "Reduzca los costos de I+D hasta un 40 % mediante diseño automatizado y más de 15 años de experiencia internacional.",
    "hero.cta": "Agendar llamada en Teams",

    "trust.experience": "15+ Años de Experiencia",
    "trust.optimization": "40 % Optimización de I+D",
    "trust.standards": "Normas IEC, IEEE, GOST",

    "services.title": "Servicios",
    "services.consulting.title": "Consultoría y Automatización CAD/PLM",
    "services.consulting.desc": "Optimización de procesos, automatización de flujos de trabajo e integración de sistemas PLM para fabricantes de transformadores.",
    "services.design.title": "Diseño Llave en Mano",
    "services.design.desc": "Paquetes de diseño completos que incluyen análisis FEM, modelado 3D y documentación según normas internacionales.",
    "services.modernization.title": "Servicio y Modernización",
    "services.modernization.desc": "Diagnóstico, ingeniería inversa y soluciones de actualización para flotas de transformadores existentes.",

    "cases.title": "Casos de Éxito",
    "cases.1.title": "Optimización de Transformador 110kV",
    "cases.1.desc": "Reducción de costos de materiales en un 18 % mediante rediseño FEM manteniendo conformidad IEC.",
    "cases.2.title": "Implementación de Automatización CAD",
    "cases.2.desc": "Automatización de diseño paramétrico que redujo las horas de ingeniería en un 60 % para un OEM europeo.",
    "cases.3.title": "Cumplimiento de Exportación Internacional",
    "cases.3.desc": "Acceso a 12 mercados al alinear diseños con normas IEC, IEEE y GOST simultáneamente.",

    "expertise.title": "Competencias Técnicas",
    "expertise.fem": "Análisis FEM",
    "expertise.thermal": "Modelado Térmico",
    "expertise.pdm": "Sistemas PDM/PLM",
    "expertise.shortCircuit": "Análisis de Cortocircuito",
    "expertise.insulation": "Diseño de Aislamiento",
    "expertise.3d": "Modelado Paramétrico 3D",
    "expertise.standards": "Cumplimiento Normativo",
    "expertise.reverseEng": "Ingeniería Inversa",

    "contact.title": "Reservar una Consulta",
    "contact.desc": "Programe una llamada en Microsoft Teams para discutir sus desafíos en ingeniería de transformadores.",
    "contact.email": "info@transformer-consult.com",
    "contact.bookDirect": "O reserve directamente a través de Google Calendar",

    "footer.legal": "© 2026 Reactance. Todos los derechos reservados.",
    "footer.imprint": "Aviso Legal",
  },
};
