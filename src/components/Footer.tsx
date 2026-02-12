"use client";

import Image from "next/image";
import logo from "@/assets/images/logo4.webp";

import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const serviceLinks = [
  "اللحوم والمواد الغذائية",
  "الخضار والفواكه",
  "الإلكترونيات",
  "قطع الغيار والشاحنات",
  "الخدمات الرقمية",
  "المقاولات والبناء",
];

const quickLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "المستودع", href: "#warehouse" },
  { label: "ساعات العمل", href: "#hours" },
  { label: "اتصل بنا", href: "#contact" },
];

const socials = [
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaWhatsapp />, href: "#" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-dark pt-[70px] border-t border-gold/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 pb-[50px]">
          {/* About Column */}
          <div>
            <div className="mb-[18px]">
              <Image
                src={logo}
                alt="سنيم جروب"
                width={120}
                height={50}
                className="h-[45px] w-auto object-contain"
              />
            </div>
            <p className="text-[0.9rem] text-white/70 leading-[1.9] mb-5">
              مجموعة سنيم - شريكك الاستراتيجي في التوريد والخدمات المتكاملة. نقدم حلولًا متميزة عبر 9 قطاعات مختلفة بأعلى معايير الجودة والاحترافية.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-11 h-11 bg-navy-royal/40 border border-gold/20 rounded-xl flex items-center justify-center text-[1.1rem] text-white/70 hover:bg-gradient-to-br hover:from-gold hover:to-gold-light hover:text-navy-dark hover:border-transparent hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(200,162,58,0.3)] transition-all duration-400"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[1.1rem] font-bold text-white mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-gold after:to-gold-light after:rounded-[10px]">
              خدماتنا
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="footer-link-dot inline-flex items-center gap-2 text-[0.9rem] text-white/70 hover:text-gold hover:pr-1.5 transition-all"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-[1.1rem] font-bold text-white mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-gold after:to-gold-light after:rounded-[10px]">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="footer-link-dot inline-flex items-center gap-2 text-[0.9rem] text-white/70 hover:text-gold hover:pr-1.5 transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[1.1rem] font-bold text-white mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-gold after:to-gold-light after:rounded-[10px]">
              تواصل معنا
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[0.9rem]">
                <FaPhoneAlt className="text-gold mt-1 text-[0.85rem]" />
                <span className="text-white/70" dir="ltr">+966 50 XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3 text-[0.9rem]">
                <FaEnvelope className="text-gold mt-1 text-[0.85rem]" />
                <span className="text-white/70">info@senimgroup.com</span>
              </li>
              <li className="flex items-start gap-3 text-[0.9rem]">
                <FaMapMarkerAlt className="text-gold mt-1 text-[0.85rem]" />
                <span className="text-white/70">الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />

        {/* Bottom */}
        <div className="flex items-center justify-between py-5 flex-wrap gap-2.5 text-center sm:text-right">
          <p className="text-[0.85rem] text-silver">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} مجموعة سنيم
          </p>
          <p className="text-[0.85rem] text-silver">
            تصميم وتطوير بـ <FaHeart className="inline text-gold mx-1" />
          </p>
        </div>
      </div>
    </footer>
  );
}
