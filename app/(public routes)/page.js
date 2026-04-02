import CtaSection from "@/components/home/cta/CtaSection";
import DoctorsSection from "@/components/home/doctors/DoctorsSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/services/ServicesSection";



export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <DoctorsSection/>
      <CtaSection/>
    </div>
  );
}
