import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/data/services";
import ServicePageContent from "@/components/ServicePageContent";

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
    title: `${service.title} | مجموعة سنيم`,
    description: service.shortDesc,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} />;
}
