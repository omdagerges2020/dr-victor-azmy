import CtaSection from "@/components/home/cta/CtaSection";
import DoctorsSection from "@/components/home/doctors/DoctorsSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/services/ServicesSection";
import {useTranslations} from 'next-intl';



export default function Home({params}) {
    const t = useTranslations('HomePage');

  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <DoctorsSection/>
      <CtaSection/>
    </div>
  );
}
