"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const days = [
  { name: "الأحد", hours: "8:00 ص - 5:00 م", closed: false },
  { name: "الإثنين", hours: "8:00 ص - 5:00 م", closed: false },
  { name: "الثلاثاء", hours: "8:00 ص - 5:00 م", closed: false },
  { name: "الأربعاء", hours: "8:00 ص - 5:00 م", closed: false },
  { name: "الخميس", hours: "8:00 ص - 2:00 م", closed: false },
  { name: "الجمعة", hours: "مغلق", closed: true },
  { name: "السبت", hours: "مغلق", closed: true },
];

export default function WorkingHours() {
  return (
    <section id="hours" className="py-[100px] dark:bg-navy-royal bg-[#E8ECF0] transition-colors">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader tag="نحن هنا من أجلك" title="ساعات" goldWord="العمل" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[600px] mx-auto dark:bg-navy-royal/40 bg-white/60 backdrop-blur-[10px] border border-gold/20 rounded-[20px] overflow-hidden"
        >
          <table className="w-full border-collapse">
            <tbody>
              {days.map((day) => (
                <tr
                  key={day.name}
                  className="border-b border-gold/[0.08] last:border-b-0 hover:bg-gold/[0.05] transition-colors"
                >
                  <td className={`py-[18px] px-7 font-semibold text-[0.95rem] ${day.closed ? "dark:text-white/40 text-navy-dark/40" : "dark:text-white text-navy-dark"}`}>
                    {day.name}
                  </td>
                  <td
                    className={`py-[18px] px-7 text-left font-semibold text-[0.95rem] ${
                      day.closed ? "text-red-500/80 font-cairo" : "text-gold font-montserrat"
                    }`}
                    dir="ltr"
                  >
                    {day.hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
