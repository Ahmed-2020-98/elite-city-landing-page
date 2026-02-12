"use client";

import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function About() {
  return (
    <section id="about" className="py-[100px] dark:bg-navy-royal bg-[#E8ECF0] transition-colors">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader tag="تعرف علينا" title="من" goldWord="نحن" />

        <div className="grid lg:grid-cols-2 gap-[60px] items-center">
          {/* Text */}
          <motion.div {...fadeUp(0.1)}>
            <p className="text-[1.15rem] font-semibold dark:text-white text-navy-dark mb-4 leading-[2]">
              Elite City هي مجموعة سعودية رائدة متعددة القطاعات، تأسست برؤية طموحة لتقديم خدمات ومنتجات متميزة تلبي احتياجات السوق المحلي والإقليمي.
            </p>
            <p className="dark:text-white/70 text-navy-dark/70 mb-4 leading-[1.9]">
              نفخر بأكثر من 20 عامًا من الخبرة في مجالات التوريد والخدمات اللوجستية والمقاولات، حيث نخدم قطاعات حكومية وتجارية متنوعة بأعلى معايير الجودة والاحترافية.
            </p>

            {/* Vision / Mission Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mt-[30px]">
              {[
                {
                  icon: <FaEye />,
                  title: "الرؤية",
                  text: "أن نكون المجموعة الرائدة والأكثر ثقة في تقديم الحلول المتكاملة عبر مختلف القطاعات في المملكة العربية السعودية.",
                  delay: 0.2,
                },
                {
                  icon: <FaBullseye />,
                  title: "الرسالة",
                  text: "تقديم خدمات ومنتجات بجودة عالية تفوق التوقعات، مع الالتزام بالنزاهة والابتكار وبناء شراكات مستدامة مع عملائنا.",
                  delay: 0.4,
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  {...fadeUp(card.delay)}
                  className="dark:bg-navy-royal/40 bg-white/60 backdrop-blur-[10px] border border-gold/20 rounded-2xl p-7 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(200,162,58,0.15)] transition-all duration-400"
                >
                  <div className="w-[50px] h-[50px] bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center mb-4 text-[1.3rem] text-gold">
                    {card.icon}
                  </div>
                  <h3 className="text-[1.1rem] font-bold mb-2.5 dark:text-white text-navy-dark">{card.title}</h3>
                  <p className="text-[0.88rem] dark:text-white/70 text-navy-dark/70 leading-[1.8]">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div {...fadeUp(0.3)} className="relative lg:order-none order-first">
            <div className="relative rounded-[20px] overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070"
                alt="مستودع Elite City"
                width={600}
                height={450}
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-600"
              />
              <div className="absolute inset-[-8px] border-2 border-gold rounded-[24px] opacity-30 -z-10" />
            </div>
            <div className="absolute -bottom-5 -right-5 lg:relative lg:bottom-auto lg:right-auto lg:-mt-14 lg:mr-auto lg:ml-0 inline-block bg-gradient-to-br from-gold to-gold-light text-navy-dark py-6 px-8 rounded-2xl text-center shadow-[0_10px_30px_rgba(200,162,58,0.3)]">
              <span className="block text-[2.5rem] font-black leading-none font-montserrat">+20</span>
              <span className="text-[0.85rem] font-semibold">سنة خبرة</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
