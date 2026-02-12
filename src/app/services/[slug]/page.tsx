import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/data/services";
import ServicePageContent from "@/components/ServicePageContent";
import JsonLd from "@/components/JsonLd";

// Generate static params for all services
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "الخدمة غير موجودة" };

  return {
    title: service.title,
    description: service.shortDesc,
    keywords: [
      service.title,
      "Elite City",
      "توريد",
      "السعودية",
      "الرياض",
      ...service.categories.map((c) => c.title),
    ],
    openGraph: {
      title: `${service.title} | Elite City`,
      description: service.shortDesc,
      url: `https://elitecityco.com/services/${service.slug}`,
      siteName: "Elite City",
      locale: "ar_SA",
      type: "website",
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Elite City`,
      description: service.shortDesc,
      images: [service.heroImage],
    },
    alternates: {
      canonical: `https://elitecityco.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDesc,
    provider: {
      "@type": "Organization",
      name: "Elite City",
      url: "https://elitecityco.com",
    },
    areaServed: {
      "@type": "Country",
      name: "المملكة العربية السعودية",
    },
    image: service.heroImage,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <ServicePageContent service={service} />
    </>
  );
}
