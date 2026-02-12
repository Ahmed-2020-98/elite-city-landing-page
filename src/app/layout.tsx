import type { Metadata } from "next";
import { Cairo, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite City",
  description:
    "Elite City - شريكك الاستراتيجي في التوريد والخدمات المتكاملة عبر مختلف الصناعات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`dark ${cairo.variable} ${montserrat.variable} ${playfair.variable}`}
    >
      <body className="font-cairo bg-navy-dark text-white overflow-x-hidden transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
