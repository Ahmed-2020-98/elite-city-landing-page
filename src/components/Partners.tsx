"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const partners = [
  "شركة الراجحي",
  "مجموعة بن لادن",
  "أرامكو",
  "سابك",
  "الشركة السعودية",
  "مجموعة العليان",
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 dark:bg-navy-dark bg-[#F5F7FA] overflow-hidden transition-colors">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader tag="ثقة متبادلة" title="شركاؤنا" goldWord="في النجاح" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="partner-track-mask overflow-hidden"
        >
          <div className="partners-slider">
            {/* Double the items for infinite scroll */}
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner}-${i}`}
                className="flex-shrink-0 dark:bg-navy-royal/40 bg-white/60 backdrop-blur-[10px] border border-gold/20 rounded-2xl px-10 py-5 flex items-center justify-center min-w-[180px] h-20 hover:border-gold/60 hover:shadow-[0_8px_32px_rgba(200,162,58,0.15)] transition-all duration-400"
              >
                <span className="text-[0.95rem] font-semibold dark:text-white/70 text-navy-dark/70 whitespace-nowrap hover:text-gold transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
