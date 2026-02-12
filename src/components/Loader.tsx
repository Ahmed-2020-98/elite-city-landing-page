"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 bg-navy-dark flex items-center justify-center z-[99999]"
        >
          <div className="text-center">
            {/* Logo */}
            <div className="font-playfair text-6xl font-extrabold mb-8 animate-[loaderPulse_1.5s_ease-in-out_infinite]">
              <span className="text-gold-gradient">S</span>
              <span className="text-white mr-1">G</span>
            </div>
            {/* Loading Bar */}
            <div className="w-[200px] h-[3px] bg-gold/20 rounded-[10px] overflow-hidden mx-auto">
              <div className="h-full bg-gradient-to-r from-gold to-gold-light rounded-[10px] loader-bar-fill" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
