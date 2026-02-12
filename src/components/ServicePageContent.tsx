"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaHome,
  FaChevronLeft,
  FaDrumstickBite,
  FaAppleAlt,
  FaBoxOpen,
  FaShoppingBasket,
  FaMicrochip,
  FaTruckMonster,
  FaLaptopCode,
  FaSpa,
  FaHardHat,
  FaPhoneAlt,
} from "react-icons/fa";
import type { ServiceData } from "@/data/services";
import { servicesData } from "@/data/services";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

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

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] },
});

const fadeUpView = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function ServicePageContent({ service }: { service: ServiceData }) {
  // Get other services for sidebar
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Navbar />

      {/* ========== HERO ========== */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/70 to-navy-dark/95" />
        </div>

        {/* Content */}
        <div className="relative z-[2] text-center max-w-[900px] mx-auto px-6 pt-28 pb-16">
          {/* Breadcrumb */}
          <motion.nav {...fadeUp(0.2)} className="flex items-center justify-center gap-2 text-[0.85rem] text-white/60 mb-8 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
              <FaHome className="text-gold" />
              الرئيسية
            </Link>
            <FaChevronLeft className="text-[0.7rem] text-gold/50" />
            <Link href="/#services" className="hover:text-gold transition-colors">خدماتنا</Link>
            <FaChevronLeft className="text-[0.7rem] text-gold/50" />
            <span className="text-gold">{service.title}</span>
          </motion.nav>

          {/* Icon */}
          <motion.div {...fadeUp(0.3)} className="w-20 h-20 bg-gold/10 border border-gold/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl text-gold">
            {iconMap[service.icon]}
          </motion.div>

          {/* Title */}
          <motion.h1 {...fadeUp(0.5)} className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.2] mb-5 text-white">
            {service.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p {...fadeUp(0.7)} className="text-[1.1rem] text-white/70 max-w-[600px] mx-auto">
            {service.shortDesc}
          </motion.p>

          {/* Gold line */}
          <motion.div {...fadeUp(0.9)} className="w-20 h-[3px] bg-gradient-to-r from-gold to-gold-light mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* ========== DESCRIPTION ========== */}
      <section className="py-20 dark:bg-navy-royal bg-[#E8ECF0] transition-colors">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <div>
              <motion.div {...fadeUpView(0.1)}>
                <div className="inline-block text-[0.85rem] font-semibold text-gold bg-gold/10 px-5 py-1.5 rounded-full border border-gold/20 mb-6">
                  نبذة عن الخدمة
                </div>
                <p className="text-[1.05rem] dark:text-white/85 text-navy-dark/85 leading-[2.2] mb-0">
                  {service.fullDescription}
                </p>
              </motion.div>
            </div>

            {/* Sidebar - Other Services */}
            <motion.aside {...fadeUpView(0.3)} className="hidden lg:block">
              <div className="dark:bg-navy-dark/60 bg-white/60 backdrop-blur-[10px] border border-gold/20 rounded-2xl p-6 sticky top-28">
                <h3 className="text-lg font-bold dark:text-white text-navy-dark mb-5 pb-3 border-b border-gold/20">
                  خدمات أخرى
                </h3>
                <ul className="space-y-2">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl dark:text-white/70 text-navy-dark/70 hover:text-gold hover:bg-gold/5 hover:border-gold/20 border border-transparent transition-all text-[0.9rem] font-medium"
                      >
                        <span className="text-gold text-lg">{iconMap[s.icon]}</span>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section className="py-[100px] dark:bg-navy-dark bg-[#F5F7FA] transition-colors">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Section Header */}
          <motion.div {...fadeUpView(0)} className="text-center mb-16">
            <span className="inline-block text-[0.85rem] font-semibold text-gold bg-gold/10 px-5 py-1.5 rounded-full border border-gold/20 mb-4">
              تعرف على التفاصيل
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold mb-4 dark:text-white text-navy-dark">
              الفئات <span className="text-gold-gradient">المتاحة</span>
            </h2>
            <div className="w-20 h-[3px] bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full relative title-line-dot" />
          </motion.div>

          {/* Categories Grid */}
          <div className="space-y-16">
            {service.categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                {...fadeUpView(i * 0.1)}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 !== 0 ? "lg:direction-ltr" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden group ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={700}
                    height={450}
                    className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
                  {/* Category number badge */}
                  <div className="absolute top-5 right-5 w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center text-navy-dark font-montserrat font-bold text-lg shadow-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Text */}
                <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-10 bg-gradient-to-b from-gold to-gold-light rounded-full" />
                    <h3 className="text-[1.5rem] font-bold dark:text-white text-navy-dark">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-[1rem] dark:text-white/75 text-navy-dark/75 leading-[2] pr-4">
                    {cat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 dark:bg-navy-royal bg-[#E8ECF0] transition-colors">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.div {...fadeUpView(0)}>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold mb-5 dark:text-white text-navy-dark">
              هل تحتاج إلى <span className="text-gold-gradient">هذه الخدمة</span>؟
            </h2>
            <p className="text-[1rem] dark:text-white/70 text-navy-dark/70 mb-8 leading-[1.9]">
              تواصل معنا اليوم واحصل على استشارة مجانية. فريقنا جاهز لمساعدتك في تلبية احتياجاتك.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/#contact"
                className="relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-[1rem] bg-gradient-to-br from-gold to-gold-light text-navy-dark shadow-[0_4px_15px_rgba(200,162,58,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(200,162,58,0.4)] transition-all btn-shimmer"
              >
                <span>تواصل معنا</span>
                <FaPhoneAlt />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-[1rem] border-2 border-gold text-gold-light hover:bg-gradient-to-br hover:from-gold hover:to-gold-light hover:text-navy-dark hover:-translate-y-0.5 transition-all"
              >
                <span>العودة للرئيسية</span>
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== MOBILE OTHER SERVICES ========== */}
      <section className="py-16 dark:bg-navy-dark bg-[#F5F7FA] lg:hidden transition-colors">
        <div className="max-w-[1280px] mx-auto px-6">
          <h3 className="text-xl font-bold dark:text-white text-navy-dark mb-6 text-center">خدمات أخرى</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="dark:bg-navy-royal/40 bg-white/60 border border-gold/20 rounded-xl p-4 text-center hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(200,162,58,0.12)] transition-all"
              >
                <span className="text-gold text-xl block mb-2">{iconMap[s.icon]}</span>
                <span className="text-[0.8rem] font-semibold dark:text-white/80 text-navy-dark/80">{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
