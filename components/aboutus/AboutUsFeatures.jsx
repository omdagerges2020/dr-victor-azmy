import React from "react";
import { features } from "./AboutUsData";
import AboutUsCard from "./AboutUsCard";

const AboutUsFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <AboutUsCard key={index} feature={feature} />
      ))}
    </div>
  );
};

export default AboutUsFeatures;
