import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface MenuItem {
  label: string;
  path?: string;
  children?: MenuItem[];
}

const menuData: MenuItem[] = [
  {
    label: "Services",
    children: [
      {
        label: "Transformers and Shunt Reactors Engineering",
        path: "/services/transformers-and-shunt-reactors-engineering",
        children: [
          { label: "Electromagnetic Calculations", path: "/services/transformers-and-shunt-reactors-engineering/electromagnetic-calculations" },
          { label: "Active Part Design", path: "/services/transformers-and-shunt-reactors-engineering/active-part-design" },
          { label: "Transformer Tank and External Equipment Design", path: "/services/transformers-and-shunt-reactors-engineering/tank-and-external-equipment" },
          { label: "Control Cabinet and External Wiring", path: "/services/transformers-and-shunt-reactors-engineering/control-cabinet-and-wiring" },
          {
            label: "FEM Simulations",
            path: "/services/transformers-and-shunt-reactors-engineering/fem-simulations",
            children: [
              { label: "Static Structural", path: "/services/transformers-and-shunt-reactors-engineering/fem-simulations/static-structural" },
              { label: "Harmonic Response", path: "/services/transformers-and-shunt-reactors-engineering/fem-simulations/harmonic-response" },
              { label: "Magnetic Fields", path: "/services/transformers-and-shunt-reactors-engineering/fem-simulations/magnetic-fields" },
              { label: "Electrostatic", path: "/services/transformers-and-shunt-reactors-engineering/fem-simulations/electrostatic" },
            ],
          },
          { label: "Materials Specifications", path: "/services/transformers-and-shunt-reactors-engineering/materials-specifications" },
        ],
      },
      {
        label: "Condition Assessment Services",
        path: "/services/condition-assessment",
        children: [
          { label: "DGA and Oil Analysis", path: "/services/condition-assessment/dga-and-oil-analysis" },
          { label: "Modernization and Refurbishment", path: "/services/condition-assessment/modernization-and-refurbishment" },
          { label: "Reverse Engineering", path: "/services/condition-assessment/reverse-engineering" },
          { label: "Active Parts Inspection", path: "/services/condition-assessment/active-parts-inspection" },
          { label: "Maintenance Planning", path: "/services/condition-assessment/maintenance-planning" },
          { label: "Life Cycle Planning", path: "/services/condition-assessment/life-cycle-planning" },
        ],
      },
      { label: "Specification Writing and Review", path: "/services/specification-writing-and-review" },
      { label: "Factory Audits", path: "/services/factory-audits" },
      { label: "Proposal Evaluation", path: "/services/proposal-evaluation" },
      { label: "Transformer Design Review", path: "/services/transformer-design-review" },
      { label: "Independent Inspection and Test Witnessing", path: "/services/independent-inspection" },
      { label: "Core and Coil Inspection", path: "/services/core-and-coil-inspection" },
      { label: "Pre-processing Inspection", path: "/services/pre-processing-inspection" },
      { label: "Pre-tanking Inspection", path: "/services/pre-tanking-inspection" },
    ],
  },
  {
    label: "Training",
    path: "/training",
    children: [
      { label: "Parametrization of Customer Design Solutions", path: "/training/parametrization" },
      { label: "Integration of CAD/CAE and Software Tools", path: "/training/cad-cae-integration" },
    ],
  },
  { label: "Support", path: "/support" },
  { label: "About", path: "/about" },
  { label: "Careers", path: "/careers" },
];

const MenuItemRow: React.FC<{
  item: MenuItem;
  depth?: number;
  onNavigate: (path: string) => void;
}> = ({ item, depth = 0, onNavigate }) => {
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
        <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
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
              <MenuItemRow key={i} item={child} depth={depth + 1} onNavigate={onNavigate} />
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
                  <MenuItemRow item={item} onNavigate={handleNavigate} />
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
