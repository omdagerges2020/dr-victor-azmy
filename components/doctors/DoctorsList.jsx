import DoctorsCard from "./DoctorsCard";
import { doctors } from "./DoctorsData";

export default function DoctorsList() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {doctors.map((doctor) => (
        <DoctorsCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}