import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Servicesdata } from "./Servicesdata";

export default function ServicesSection() {
  return (
    <section className="pb-16 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Services
          </h2>

          <p className="text-muted-foreground mt-3">
            Comprehensive dental solutions tailored to your needs.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-[#F9FAFB]">
          {Servicesdata.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* view all services btn */}
        <div className="flex justify-center mt-12">
          <Button variant="servicessection" size="ourservices" className="gap-3">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}