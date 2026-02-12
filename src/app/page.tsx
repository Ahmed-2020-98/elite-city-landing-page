"use client";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Warehouse from "@/components/Warehouse";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import WorkingHours from "@/components/WorkingHours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elite City",
  url: "https://elitecityco.com",
  logo: "https://elitecityco.com/logo4.webp",
  description:
    "شركة سعودية رائدة متعددة القطاعات متخصصة في التوريد والخدمات المتكاملة",
  address: {
    "@type": "PostalAddress",
    addressLocality: "الرياض",
    addressCountry: "SA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966544436897",
    contactType: "customer service",
    availableLanguage: ["Arabic", "English"],
  },
  sameAs: [],
  foundingDate: "2004",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
  },
  areaServed: {
    "@type": "Country",
    name: "المملكة العربية السعودية",
  },
  knowsAbout: [
    "توريد أغذية",
    "خضار وفواكه",
    "إلكترونيات",
    "قطع غيار شاحنات",
    "مقاولات",
    "خدمات رقمية",
    "مستحضرات تجميل",
    "مواد استهلاكية",
    "أغذية جافة ومعلبة",
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Warehouse />
        <Stats />
        <Partners />
        <WorkingHours />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
