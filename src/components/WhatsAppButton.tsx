"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل عبر واتساب"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.4, ease: "backOut" }}
            className="fixed bottom-8 right-8 z-[999] w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center text-white text-3xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] transition-all duration-300 group"
        >
            <FaWhatsapp />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30" />
        </motion.a>
    );
}
