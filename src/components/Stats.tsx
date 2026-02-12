"use client";

import { motion } from "framer-motion";
import { FaProjectDiagram, FaHandshake, FaAward, FaGlobeAmericas } from "react-icons/fa";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { icon: <FaProjectDiagram />, target: 9, label: "قطاعات متنوعة" },
  { icon: <FaHandshake />, target: 150, label: "شراكة ناجحة" },
  { icon: <FaAward />, target: 25, label: "شهادة جودة" },
  { icon: <FaGlobeAmericas />, target: 10, label: "دولة نغطيها" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-20 dark:bg-navy-royal bg-[#E8ECF0] transition-colors">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="dark:bg-navy-royal/40 bg-white/60 backdrop-blur-[10px] border border-gold/20 rounded-[20px] p-9 text-center hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(200,162,58,0.15)] transition-all duration-400"
            >
              <div className="w-[60px] h-[60px] bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-[18px] text-[1.4rem] text-gold">
                {stat.icon}
              </div>
              <AnimatedCounter
                target={stat.target}
                className="font-montserrat text-[2.5rem] font-extrabold text-gold-gradient block mb-1.5 leading-[1.2]"
              />
              <span className="text-[0.9rem] dark:text-white/70 text-navy-dark/70 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
