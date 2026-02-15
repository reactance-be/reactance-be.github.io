import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [done, setDone] = useState(false);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[hsl(0,0%,5%)] flex items-center justify-center"
        >
          <div className="w-full max-w-md px-6 text-left text-sm font-mono text-[hsl(0,0%,40%)]">
            <p className="mb-1">$ Initializing systems</p>
            <p className="mb-1">$ Loading modules</p>
            <p className="mb-3">$ Compiling design data</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  onAnimationComplete={() => setDone(true)}
                  className="h-full bg-white/80 rounded-full"
                />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-xs"
              >
                100%
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
