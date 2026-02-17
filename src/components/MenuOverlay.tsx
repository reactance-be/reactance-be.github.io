import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface MenuItem {
  labelKey: string;
  path?: string;
  children?: MenuItem[];
}

const menuData: MenuItem[] = [
  {
    labelKey: "menu.services",
    children: [
      {
        labelKey: "menu.transformers-engineering",
        path: "/services/transformers-and-shunt-reactors-engineering",
        children: [
          { labelKey: "menu.electromagnetic-calculations", path: "/services/transformers-and-shunt-reactors-engineering/electromagnetic-calculations" },
          { labelKey: "menu.active-part-design", path: "/services/transformers-and-shunt-reactors-engineering/active-part-design" },
          { labelKey: "menu.tank-and-external-equipment", path: "/services/transformers-and-shunt-reactors-engineering/tank-and-external-equipment" },
          { labelKey: "menu.control-cabinet-and-wiring", path: "/services/transformers-and-shunt-reactors-engineering/control-cabinet-and-wiring" },
          {
            labelKey: "menu.fem-simulations",
            path: "/services/transformers-and-shunt-reactors-engineering/fem-simulations",
            children: [
              { labelKey: "menu.static-structural", path: "/services/transformers-and-shunt-reactors-engineering/fem-simulations/static-structural" },
              { labelKey: "menu.harmonic-response", path: "/services/transformers-and-shunt-reactors-engineering/fem-simulations/harmonic-response" },
              { labelKey: "menu.magnetic-fields", path: "/services/transformers-and-shunt-reactors-engineering/fem-simulations/magnetic-fields" },
              { labelKey: "menu.electrostatic", path: "/services/transformers-and-shunt-reactors-engineering/fem-simulations/electrostatic" },
            ],
          },
          { labelKey: "menu.materials-specifications", path: "/services/transformers-and-shunt-reactors-engineering/materials-specifications" },
        ],
      },
      {
        labelKey: "menu.condition-assessment",
        path: "/services/condition-assessment",
        children: [
          { labelKey: "menu.dga-and-oil-analysis", path: "/services/condition-assessment/dga-and-oil-analysis" },
          { labelKey: "menu.modernization-and-refurbishment", path: "/services/condition-assessment/modernization-and-refurbishment" },
          { labelKey: "menu.reverse-engineering", path: "/services/condition-assessment/reverse-engineering" },
          { labelKey: "menu.active-parts-inspection", path: "/services/condition-assessment/active-parts-inspection" },
          { labelKey: "menu.maintenance-planning", path: "/services/condition-assessment/maintenance-planning" },
          { labelKey: "menu.life-cycle-planning", path: "/services/condition-assessment/life-cycle-planning" },
        ],
      },
      { labelKey: "menu.specification-writing", path: "/services/specification-writing-and-review" },
      { labelKey: "menu.factory-audits", path: "/services/factory-audits" },
      { labelKey: "menu.proposal-evaluation", path: "/services/proposal-evaluation" },
      { labelKey: "menu.transformer-design-review", path: "/services/transformer-design-review" },
      { labelKey: "menu.independent-inspection", path: "/services/independent-inspection" },
      { labelKey: "menu.core-and-coil-inspection", path: "/services/core-and-coil-inspection" },
      { labelKey: "menu.pre-processing-inspection", path: "/services/pre-processing-inspection" },
      { labelKey: "menu.pre-tanking-inspection", path: "/services/pre-tanking-inspection" },
    ],
  },
  {
    labelKey: "menu.training",
    path: "/training",
    children: [
      { labelKey: "menu.parametrization", path: "/training/parametrization" },
      { labelKey: "menu.cad-cae-integration", path: "/training/cad-cae-integration" },
    ],
  },
  { labelKey: "menu.support", path: "/support" },
  { labelKey: "menu.about", path: "/about" },
  { labelKey: "menu.careers", path: "/careers" },
];

const MenuItemRow: React.FC<{
  item: MenuItem;
  depth?: number;
  onNavigate: (path: string) => void;
  t: (key: string) => string;
}> = ({ item, depth = 0, onNavigate, t }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <button
        className={`w-full text-left flex items-center justify-between py-2 transition-colors hover:text-foreground group ${
          depth === 0
            ? "text-2xl md:text-3xl font-bold text-foreground/90"
            : depth === 1
            ? "text-base md:text-lg text-muted-foreground pl-4"
            : "text-sm text-muted-foreground/80 pl-8"
        }`}
        onClick={() => {
          if (hasChildren) {
            setExpanded(!expanded);
          } else if (item.path) {
            onNavigate(item.path);
          }
        }}
      >
        <span className="group-hover:translate-x-1 transition-transform">{t(item.labelKey)}</span>
        {hasChildren && (
          <ChevronRight
            size={depth === 0 ? 20 : 16}
            className={`transition-transform text-muted-foreground ${expanded ? "rotate-90" : ""}`}
          />
        )}
      </button>

      <AnimatePresence>
        {expanded && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-l border-border ml-2"
          >
            {item.children!.map((child, i) => (
              <MenuItemRow key={i} item={child} depth={depth + 1} onNavigate={onNavigate} t={t} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md overflow-y-auto"
        >
          <div className="container mx-auto px-6 md:px-12 pt-24 pb-12 flex justify-center">
            <div className="max-w-2xl w-full">
              {menuData.map((item, i) => (
                <div key={i} className="border-b border-border/50 py-3">
                  <MenuItemRow item={item} onNavigate={handleNavigate} t={t} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
