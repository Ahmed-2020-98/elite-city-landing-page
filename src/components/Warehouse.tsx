"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { target: 20, suffix: "+", label: "سنة خبرة" },
  { target: 500, suffix: "+", label: "عملية توريد" },
  { target: 50, suffix: "+", label: "عميل نشط" },
  { target: 90, suffix: "%", label: "نسبة الرضا" },
];

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Warehouse() {
  return (
    <section id="warehouse" className="relative py-[120px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
          alt="مستودع"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/[0.92] via-navy-dark/85 to-navy-dark/95" />
      </div>

      <div className="relative z-[1] max-w-[1280px] mx-auto px-6 text-center">
        <SectionHeader tag="البنية التحتية" title="مستودع Elite City:" goldWord="قلب اللوجستيات المتكامل" />

        <motion.p {...fadeUp(0.2)} className="max-w-[700px] mx-auto mb-[50px] text-white/80 text-[1.05rem] leading-[2]">
          نمتلك مستودعات حديثة ومجهزة بأعلى المعايير لتخزين وتوزيع المنتجات بكفاءة عالية، مما يضمن وصول المنتجات إلى عملائنا بأفضل حالة وفي الوقت المحدد.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex items-center justify-center gap-10 flex-wrap">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-10">
              <div className="text-center min-w-[130px]">
                <div className="font-montserrat">
                  <AnimatedCounter
                    target={stat.target}
                    className="text-5xl font-extrabold text-gold-gradient inline-block leading-none"
                  />
                  <span className="text-2xl font-bold text-gold-gradient">{stat.suffix}</span>
                </div>
                <span className="block text-[0.9rem] text-white/80 mt-1.5">{stat.label}</span>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-[50px] bg-gold/30 hidden md:block" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
