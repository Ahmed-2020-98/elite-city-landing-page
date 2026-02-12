import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          dark: "#0B1C2D",
          royal: "#12263A",
          light: "#1a3350",
          lighter: "#1e3a5f",
        },
        gold: {
          DEFAULT: "#C8A23A",
          light: "#E6C76A",
        },
        silver: "#BFC4C9",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      animation: {
        "hero-zoom": "heroZoom 20s ease-in-out infinite alternate",
        "scroll-dot": "scrollDot 2s ease-in-out infinite",
        "loader-pulse": "loaderPulse 1.5s ease-in-out infinite",
        "loader-fill": "loaderFill 2s ease-in-out forwards",
        "particle-float": "particleFloat 6s ease-in-out infinite",
        "scroll-partners": "scrollPartners 25s linear infinite",
      },
      keyframes: {
        heroZoom: {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.15)" },
        },
        scrollDot: {
          "0%": { top: "6px", opacity: "1" },
          "100%": { top: "22px", opacity: "0" },
        },
        loaderPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
        },
        loaderFill: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        particleFloat: {
          "0%": { opacity: "0", transform: "translateY(100vh) scale(0)" },
          "20%": { opacity: "0.6" },
          "80%": { opacity: "0.3" },
          "100%": { opacity: "0", transform: "translateY(-20vh) scale(1)" },
        },
        scrollPartners: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
