import React from "react";

const AboutUsCard = ({feature}) => {
  return (
    <div
      className="group p-6 rounded-xl border border-border bg-card shadow-sm transition-all duration-300 flex items-start gap-3"
    >
      <div className="p-3 rounded-lg bg-primary/10  transition-colors">
        {feature.icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-1">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default AboutUsCard;
