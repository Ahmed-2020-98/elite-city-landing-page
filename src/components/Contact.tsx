"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaSpinner,
  FaCheck,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] },
});

const contactInfo = [
  { icon: <FaPhoneAlt />, title: "اتصل بنا", value: "920017925", dir: "ltr" as const, href: "tel:920017925" },
  { icon: <FaEnvelope />, title: "راسلنا", value: "info@elitecityco.com", dir: undefined, href: "mailto:info@elitecityco.com" },
  { icon: <FaMapMarkerAlt />, title: "زرنا", value: "الرياض - طريق الملك فيصل - حي المربع", dir: undefined, href: "https://maps.app.goo.gl/7G4ny5Mo5JGzcRv27" },
];

const socials = [
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const phoneNumber = "966920017925"; // ← غيّر الرقم هنا

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const text = `📩 رسالة جديدة من الموقع\n\n👤 الاسم: ${form.name}\n📧 الإيميل: ${form.email}\n📌 الموضوع: ${form.subject || "غير محدد"}\n💬 الرسالة:\n${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 2500);
    }, 500);
  };

  return (
    <section id="contact" className="py-[100px] dark:bg-navy-dark bg-[#F5F7FA] transition-colors">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader tag="ابقَ على تواصل" title="تواصل" goldWord="معنا" />

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-[50px] items-start">
          {/* Contact Info */}
          <motion.div {...fadeUp(0.2)}>
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4 mb-7">
                <div className="w-[50px] h-[50px] bg-gold/10 border border-gold/20 rounded-[14px] flex items-center justify-center text-[1.1rem] text-gold flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[1rem] font-bold mb-1 dark:text-white text-navy-dark">{item.title}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.9rem] dark:text-white/70 text-navy-dark/70 hover:text-gold transition-colors"
                      dir={item.dir}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[0.9rem] dark:text-white/70 text-navy-dark/70" dir={item.dir}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 mt-2.5">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-11 h-11 dark:bg-navy-royal/40 bg-white/60 border border-gold/20 rounded-xl flex items-center justify-center text-[1.1rem] dark:text-white/70 text-navy-dark/70 hover:bg-gradient-to-br hover:from-gold hover:to-gold-light hover:text-navy-dark hover:border-transparent hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(200,162,58,0.3)] transition-all duration-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            {...fadeUp(0.4)}
            onSubmit={handleSubmit}
            className="dark:bg-navy-royal/40 bg-white/60 backdrop-blur-[10px] border border-gold/20 rounded-[20px] p-9"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full py-3.5 px-[18px] dark:bg-navy-dark/50 bg-[#F5F7FA]/80 border border-gold/20 rounded-xl dark:text-white text-navy-dark font-cairo text-[0.95rem] outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(200,162,58,0.1)] transition-all placeholder:dark:text-white/40 placeholder:text-navy-dark/40"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full py-3.5 px-[18px] dark:bg-navy-dark/50 bg-[#F5F7FA]/80 border border-gold/20 rounded-xl dark:text-white text-navy-dark font-cairo text-[0.95rem] outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(200,162,58,0.1)] transition-all placeholder:dark:text-white/40 placeholder:text-navy-dark/40"
                />
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="الموضوع"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full py-3.5 px-[18px] dark:bg-navy-dark/50 bg-[#F5F7FA]/80 border border-gold/20 rounded-xl dark:text-white text-navy-dark font-cairo text-[0.95rem] outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(200,162,58,0.1)] transition-all placeholder:dark:text-white/40 placeholder:text-navy-dark/40"
              />
            </div>
            <div className="mt-4">
              <textarea
                rows={5}
                placeholder="رسالتك..."
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full py-3.5 px-[18px] dark:bg-navy-dark/50 bg-[#F5F7FA]/80 border border-gold/20 rounded-xl dark:text-white text-navy-dark font-cairo text-[0.95rem] outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(200,162,58,0.1)] transition-all resize-y min-h-[120px] placeholder:dark:text-white/40 placeholder:text-navy-dark/40"
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className={`w-full mt-4 py-4 rounded-xl font-semibold text-[1.05rem] flex items-center justify-center gap-2.5 transition-all duration-300 ${status === "sent"
                ? "bg-green-500 text-white"
                : "bg-gradient-to-br from-gold to-gold-light text-navy-dark shadow-[0_4px_15px_rgba(200,162,58,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(200,162,58,0.4)]"
                } disabled:opacity-80 disabled:cursor-not-allowed`}
            >
              {status === "idle" && (
                <>
                  <span>إرسال الرسالة</span>
                  <FaPaperPlane />
                </>
              )}
              {status === "sending" && (
                <>
                  <FaSpinner className="animate-spin" />
                  <span>جاري الإرسال...</span>
                </>
              )}
              {status === "sent" && (
                <>
                  <FaCheck />
                  <span>تم الإرسال بنجاح!</span>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
