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
  metadataBase: new URL("https://elitecityco.com"),
  title: {
    default: "Elite City | شريكك الاستراتيجي في التوريد والخدمات المتكاملة",
    template: "%s | Elite City",
  },
  description:
    "Elite City - شركة سعودية رائدة متعددة القطاعات متخصصة في التوريد والخدمات المتكاملة. نقدم حلولاً متميزة في الأغذية، الخضار والفواكه، الإلكترونيات، المقاولات، الخدمات الرقمية وأكثر. خبرة +20 عاماً في السوق السعودي.",
  keywords: [
    "Elite City",
    "توريد أغذية السعودية",
    "خدمات متكاملة الرياض",
    "لحوم طازجة ومجمدة",
    "خضار وفواكه بالجملة",
    "مواد غذائية بالجملة",
    "إلكترونيات السعودية",
    "مقاولات الرياض",
    "خدمات رقمية",
    "قطع غيار شاحنات",
    "مستحضرات تجميل بالجملة",
    "شركة توريد سعودية",
    "توريد مطاعم",
    "توريد فنادق",
  ],
  authors: [{ name: "Elite City" }],
  creator: "Elite City",
  publisher: "Elite City",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://elitecityco.com",
    siteName: "Elite City",
    title: "Elite City | شريكك الاستراتيجي في التوريد والخدمات المتكاملة",
    description:
      "شركة سعودية رائدة متعددة القطاعات. خبرة +20 عاماً في التوريد والخدمات المتكاملة عبر 9 قطاعات مختلفة بأعلى معايير الجودة.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elite City - التوريد والخدمات المتكاملة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite City | شريكك الاستراتيجي في التوريد والخدمات المتكاملة",
    description:
      "شركة سعودية رائدة متعددة القطاعات. خبرة +20 عاماً في التوريد والخدمات المتكاملة.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://elitecityco.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
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
