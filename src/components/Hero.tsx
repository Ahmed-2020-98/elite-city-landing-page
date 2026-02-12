"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaPhoneAlt, FaFileAlt, FaReceipt } from "react-icons/fa";
import Image from "next/image";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
      particle.style.animationDelay = `${Math.random() * 6}s`;
      const size = `${Math.random() * 3 + 2}px`;
      particle.style.width = size;
      particle.style.height = size;
      container.appendChild(particle);
    }
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
          alt="warehouse"
          fill
          className="object-cover hero-bg-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy-dark/75 to-navy-dark/95" />
      </div>

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-[2] text-center max-w-[1280px] mx-auto px-6 pt-20">
        <motion.div {...fadeUp(0.3)} className="inline-flex items-center gap-[15px] mb-6 text-[0.95rem] text-gold-light font-medium tracking-wide">
          <span className="w-10 h-px bg-gradient-to-r from-gold to-gold-light" />
          <span>شريكك الاستراتيجي في التوريد والخدمات</span>
          <span className="w-10 h-px bg-gradient-to-r from-gold to-gold-light" />
        </motion.div>

        <motion.h1 {...fadeUp(0.5)} className="text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.2] mb-5 text-white">
          <span className="text-gold-gradient">Elite</span> <span className="text-white">City</span>
        </motion.h1>

        <motion.p {...fadeUp(0.7)} className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-white/80 mb-10 max-w-[600px] mx-auto">
          تقديم التميز عبر مختلف الصناعات
        </motion.p>

        <motion.div {...fadeUp(0.9)} className="flex items-center justify-center gap-5 flex-wrap mb-10">
          <button
            onClick={() => scrollTo("#services")}
            className="relative overflow-hidden inline-flex items-center gap-2.5 px-9 py-4 rounded-xl font-semibold text-[1.05rem] bg-gradient-to-br from-gold to-gold-light text-navy-dark shadow-[0_4px_15px_rgba(200,162,58,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(200,162,58,0.4)] transition-all btn-shimmer"
          >
            <span>استكشف خدماتنا</span>
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl font-semibold text-[1.05rem] border-2 border-gold text-gold-light hover:bg-gradient-to-br hover:from-gold hover:to-gold-light hover:text-navy-dark hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(200,162,58,0.3)] transition-all"
          >
            <span>تواصل معنا</span>
            <FaPhoneAlt />
          </button>
        </motion.div>

        <motion.div {...fadeUp(1.1)} className="flex items-center justify-center gap-4 flex-wrap text-[0.85rem] text-white/50">
          <span className="inline-flex items-center gap-1.5">
            <FaFileAlt className="text-gold" />
            سجل تجاري: 1010XXXXXX
          </span>
          <span className="w-1 h-1 bg-gold rounded-full hidden sm:block" />
          <span className="inline-flex items-center gap-1.5">
            <FaReceipt className="text-gold" />
            الرقم الضريبي: 3XXXXXXXXXXXXX
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2]">
        <button onClick={() => scrollTo("#about")} className="flex flex-col items-center gap-2.5 text-white/50 text-[0.8rem] hover:text-gold transition-all">
          <span>اكتشف المزيد</span>
          <div className="w-6 h-[38px] border-2 border-gold rounded-xl relative opacity-60">
            <div className="w-1 h-2 bg-gold rounded-sm absolute left-1/2 -translate-x-1/2 scroll-dot-anim" />
          </div>
        </button>
      </div>
    </section>
  );
}
