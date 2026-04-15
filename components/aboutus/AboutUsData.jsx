import { Heart, Users, Shield, Award } from "lucide-react";

export const features = [
  {
    title: "Patient-First Care",
    description:
      "Every treatment plan is customized to your unique needs and comfort level.",
    icon: <Heart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Advanced Technology",
    description:
      "We use the latest dental technology for accurate diagnostics and gentle treatments.",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    title: "Expert Team",
    description:
      "Our dentists hold advanced certifications and pursue ongoing education.",
    icon: <Award className="w-6 h-6 text-primary" />  ,
  },
  {
    title: "Community Trust",
    description:
      "Serving our community for over 25 years with compassion and excellence.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
];
