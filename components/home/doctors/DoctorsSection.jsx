import { useTranslations } from "next-intl";
import DoctorCard from "./DoctorCard";
import { doctors } from "./DoctorsData";

export default function DoctorsSection() {
  const t = useTranslations("HomePage");

  return (
    <section className=" bg-muted/30">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('ourdoctorstitle')}
          </h2>

          <p className="text-muted-foreground mt-3">
            {t('doctorsbio')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>

      </div>
    </section>
  );
}