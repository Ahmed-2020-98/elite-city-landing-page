"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  goldWord: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

export default function SectionHeader({ tag, title, goldWord }: SectionHeaderProps) {
  return (
    <motion.div {...fadeUp} className="text-center mb-[60px]">
      <span className="inline-block text-[0.85rem] font-semibold text-gold bg-gold/10 px-5 py-1.5 rounded-full border border-gold/20 mb-4 tracking-wide">
        {tag}
      </span>
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold mb-4 leading-[1.3] dark:text-white text-navy-dark">
        {title} <span className="text-gold-gradient">{goldWord}</span>
      </h2>
      <div className="w-20 h-[3px] bg-gradient-to-r from-gold to-gold-light mx-auto rounded-[10px] relative title-line-dot" />
    </motion.div>
  );
}
