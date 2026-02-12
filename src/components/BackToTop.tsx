"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-[30px] left-[30px] w-[50px] h-[50px] bg-gradient-to-br from-gold to-gold-light text-navy-dark border-none rounded-[14px] text-[1.1rem] cursor-pointer z-[99] shadow-[0_5px_20px_rgba(200,162,58,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(200,162,58,0.4)] transition-all flex items-center justify-center"
          aria-label="العودة للأعلى"
        >
          <FaChevronUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
