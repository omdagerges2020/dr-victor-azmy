import DoctorsHeader from "@/components/doctors/DoctorsHeader";
import DoctorsList from "@/components/doctors/DoctorsList";
import React from "react";

const Doctors = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-16">
      <DoctorsHeader />
      <DoctorsList />
    </div>
  );
};

export default Doctors;
