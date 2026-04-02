import { servicesData } from "@/components/services/ServicesData";
import ServicesHeader from "@/components/services/ServicesHeader";
import ServicesSection from "@/components/services/ServicesSection";

export default function Services() {
  return (
    <main className="pb-20 container mx-auto px-6">
      <ServicesHeader />

      <div className=" space-y-12">
        {servicesData.map((section, i) => (
          <ServicesSection key={i} {...section} />
        ))}
      </div>
    </main>
  );
}