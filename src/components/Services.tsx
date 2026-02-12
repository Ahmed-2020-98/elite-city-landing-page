"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaDrumstickBite,
  FaAppleAlt,
  FaBoxOpen,
  FaShoppingBasket,
  FaMicrochip,
  FaTruckMonster,
  FaLaptopCode,
  FaSpa,
  FaHardHat,
  FaArrowLeft,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { servicesData } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  FaDrumstickBite: <FaDrumstickBite />,
  FaAppleAlt: <FaAppleAlt />,
  FaBoxOpen: <FaBoxOpen />,
  FaShoppingBasket: <FaShoppingBasket />,
  FaMicrochip: <FaMicrochip />,
  FaTruckMonster: <FaTruckMonster />,
  FaLaptopCode: <FaLaptopCode />,
  FaSpa: <FaSpa />,
  FaHardHat: <FaHardHat />,
};

export default function Services() {
  return (
    <section id="services" className="py-[100px] dark:bg-navy-dark bg-[#F5F7FA] transition-colors">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader tag="ماذا نقدم" title="خدماتنا" goldWord="المتميزة" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block relative service-card-line dark:bg-navy-royal/60 bg-white/80 backdrop-blur-[10px] border border-gold/20 rounded-[20px] p-9 text-center hover:-translate-y-2 dark:hover:bg-navy-dark/90 hover:bg-white hover:border-gold/60 hover:shadow-[0_8px_32px_rgba(200,162,58,0.15)] transition-all duration-400 overflow-hidden h-full"
              >
                <div className="w-[70px] h-[70px] bg-gold/[0.08] border border-gold/15 rounded-[18px] flex items-center justify-center mx-auto mb-5 text-[1.6rem] text-gold group-hover:bg-gold/15 group-hover:border-gold group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(200,162,58,0.2)] transition-all duration-400">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-[1.15rem] font-bold mb-3 dark:text-white text-navy-dark">{service.title}</h3>
                <div className="w-[50px] h-0.5 bg-gradient-to-r from-gold to-gold-light mx-auto mb-3.5 rounded-[10px]" />
                <p className="text-[0.88rem] dark:text-white/70 text-navy-dark/70 leading-[1.8] mb-4">{service.shortDesc}</p>

                {/* View More */}
                <span className="inline-flex items-center gap-2 text-[0.82rem] font-semibold text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  اكتشف المزيد
                  <FaArrowLeft className="text-[0.7rem]" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
