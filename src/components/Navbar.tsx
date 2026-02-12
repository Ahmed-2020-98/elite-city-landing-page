"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/images/logo4.webp";
import {
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaDrumstickBite,
  FaAppleAlt,
  FaBoxOpen,
  FaShoppingBasket,
  FaMicrochip,
  FaTruckMonster,
  FaLaptopCode,
  FaSpa,
  FaHardHat,
} from "react-icons/fa";
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

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services", hasSubmenu: true },
  { label: "اتصل بنا", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      if (isHomePage) {
        const sections = document.querySelectorAll("section[id]");
        let current = "#hero";
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop - 150;
          if (window.scrollY >= sectionTop) {
            current = `#${section.id}`;
          }
        });
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      html.classList.add("light");
      document.body.classList.remove("bg-navy-dark", "text-white");
      document.body.classList.add("bg-[#F5F7FA]", "text-navy-dark");
    } else {
      html.classList.add("dark");
      html.classList.remove("light");
      document.body.classList.add("bg-navy-dark", "text-white");
      document.body.classList.remove("bg-[#F5F7FA]", "text-navy-dark");
    }
    setIsDark(!isDark);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setServicesOpen(false);

    if (href.startsWith("#")) {
      if (isHomePage) {
        const target = document.querySelector(href);
        if (target) {
          const offset = 80;
          const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      } else {
        router.push(`/${href}`);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${scrolled
          ? "bg-navy-dark/95 dark:bg-navy-dark/95 backdrop-blur-[20px] py-3 border-b border-gold/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-5">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="Elite City"
              width={120}
              height={50}
              className="h-[45px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative"
                ref={link.hasSubmenu ? servicesRef : undefined}
                onMouseEnter={() => link.hasSubmenu && setServicesOpen(true)}
                onMouseLeave={() => link.hasSubmenu && setServicesOpen(false)}
              >
                <button
                  onClick={() => {
                    if (link.hasSubmenu) {
                      setServicesOpen(!servicesOpen);
                    } else {
                      handleNavClick(link.href);
                    }
                  }}
                  className={`px-[18px] py-2 text-[0.95rem] font-medium rounded-lg relative transition-all duration-250 inline-flex items-center gap-1.5 ${activeSection === link.href || (link.hasSubmenu && pathname.startsWith("/services"))
                    ? "text-gold"
                    : "dark:text-white/70 text-navy-dark/70 hover:text-gold"
                    }`}
                >
                  {link.label}
                  {link.hasSubmenu && (
                    <FaChevronDown
                      className={`text-[0.65rem] transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                        }`}
                    />
                  )}
                  <span
                    className={`absolute bottom-0.5 right-[18px] left-[18px] h-0.5 bg-gradient-to-r from-gold to-gold-light rounded transition-transform duration-300 origin-right ${activeSection === link.href || (link.hasSubmenu && pathname.startsWith("/services"))
                      ? "scale-x-100"
                      : "scale-x-0"
                      }`}
                  />
                </button>

                {/* Services Dropdown */}
                {link.hasSubmenu && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-[320px] dark:bg-navy-dark/98 bg-white/98 backdrop-blur-[20px] border border-gold/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden z-50"
                      >
                        {/* Header */}
                        <div className="px-5 py-3 border-b border-gold/10">
                          <span className="text-[0.8rem] font-semibold text-gold">جميع الخدمات</span>
                        </div>

                        {/* Services List */}
                        <div className="py-2 max-h-[400px] overflow-y-auto custom-scrollbar">
                          {servicesData.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className={`flex items-center gap-3 px-5 py-3 hover:bg-gold/5 transition-all group ${pathname === `/services/${service.slug}`
                                ? "bg-gold/10 border-r-2 border-gold"
                                : ""
                                }`}
                            >
                              <span className="w-9 h-9 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center text-gold text-sm group-hover:bg-gold/20 group-hover:border-gold/40 transition-all flex-shrink-0">
                                {iconMap[service.icon]}
                              </span>
                              <div>
                                <span className="block text-[0.88rem] font-semibold dark:text-white/90 text-navy-dark/90 group-hover:text-gold transition-colors">
                                  {service.title}
                                </span>
                                <span className="block text-[0.72rem] dark:text-white/40 text-navy-dark/40 leading-tight mt-0.5 line-clamp-1">
                                  {service.shortDesc}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="px-5 py-3 border-t border-gold/10">
                          <button
                            onClick={() => {
                              setServicesOpen(false);
                              handleNavClick("#services");
                            }}
                            className="text-[0.8rem] font-semibold text-gold hover:text-gold-light transition-colors"
                          >
                            عرض الكل ←
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="w-[42px] h-[42px] rounded-full flex items-center justify-center dark:bg-navy-royal/40 bg-gray-200 border border-gold/15 dark:text-white text-navy-dark hover:border-gold hover:text-gold transition-all"
              aria-label="تبديل الوضع"
            >
              {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            <span className="text-[0.85rem] font-semibold dark:text-white/70 text-navy-dark/70 cursor-pointer px-3 py-1.5 border border-gold/15 rounded-md hover:text-gold hover:border-gold transition-all">
              العربية
            </span>

            <button
              onClick={() => handleNavClick("#contact")}
              className="relative overflow-hidden px-6 py-2.5 rounded-lg font-semibold text-[0.88rem] bg-gradient-to-br from-gold to-gold-light text-navy-dark shadow-[0_4px_15px_rgba(200,162,58,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(200,162,58,0.4)] transition-all btn-shimmer"
            >
              تواصل معنا
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 z-[1001]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="القائمة"
          >
            {mobileOpen ? (
              <FaTimes className="text-xl dark:text-white text-navy-dark" />
            ) : (
              <FaBars className="text-xl dark:text-white text-navy-dark" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[999]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-[300px] h-screen dark:bg-navy-dark/95 bg-white/95 backdrop-blur-[20px] z-[1000] border-l border-gold/15 flex flex-col pt-24 px-6 overflow-y-auto"
            >
              {navLinks.map((link) => (
                <div key={link.href}>
                  <button
                    onClick={() => {
                      if (link.hasSubmenu) {
                        setMobileServicesOpen(!mobileServicesOpen);
                      } else {
                        handleNavClick(link.href);
                      }
                    }}
                    className={`text-lg font-medium py-3 px-5 rounded-lg transition-all w-full text-right flex items-center justify-between ${activeSection === link.href || (link.hasSubmenu && pathname.startsWith("/services"))
                      ? "text-gold bg-gold/10"
                      : "dark:text-white/80 text-navy-dark/80 hover:text-gold"
                      }`}
                  >
                    {link.label}
                    {link.hasSubmenu && (
                      <FaChevronDown
                        className={`text-[0.7rem] transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </button>

                  {/* Mobile Services Submenu */}
                  {link.hasSubmenu && (
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="py-2 pr-4 space-y-1">
                            {servicesData.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                onClick={() => setMobileOpen(false)}
                                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-[0.88rem] font-medium transition-all ${pathname === `/services/${service.slug}`
                                  ? "text-gold bg-gold/10"
                                  : "dark:text-white/60 text-navy-dark/60 hover:text-gold hover:bg-gold/5"
                                  }`}
                              >
                                <span className="text-gold text-sm">{iconMap[service.icon]}</span>
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              <div className="flex items-center gap-4 mt-6 justify-center">
                <button
                  onClick={toggleTheme}
                  className="w-[42px] h-[42px] rounded-full flex items-center justify-center dark:bg-navy-royal/40 bg-gray-200 border border-gold/15 dark:text-white text-navy-dark hover:border-gold hover:text-gold transition-all"
                >
                  {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
                </button>
              </div>
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-4 w-full py-3 rounded-lg font-semibold bg-gradient-to-br from-gold to-gold-light text-navy-dark"
              >
                تواصل معنا
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
