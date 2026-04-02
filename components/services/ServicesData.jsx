import {
  Sparkles,
  Smile,
  Shield,
  Heart,
  Star,
  Sun,
  TextAlignStart,
} from "lucide-react";

export const servicesData = [
  {
    title: "Preventive",
    services: [
      {
        title: "Teeth Cleaning",
        description:
          "Professional dental cleaning to remove plaque and tartar buildup.",
        price: "$120",
        duration: "45 min",
        icon: Sparkles,
      },
    ],
  },
  {
    title: "Cosmetic",
    services: [
      {
        title: "Teeth Whitening",
        description:
          "Advanced whitening treatment to brighten your smile.",
        price: "$350",
        duration: "60 min",
        icon: Sun,
      },
      {
        title: "Dental Veneers",
        description:
          "Custom porcelain shells to improve your smile appearance.",
        price: "$1200",
        duration: "2 visits",
        icon: Star,
      },
    ],
  },
  {
    title: "Restorative",
    services: [
      {
        title: "Dental Implants",
        description:
          "Permanent solution to replace missing teeth.",
        price: "$2500",
        duration: "2-3 hours",
        icon: Shield,
      },
      {
        title: "Root Canal",
        description:
          "Pain-free treatment to save infected teeth.",
        price: "$800",
        duration: "90 min",
        icon: Heart,
      },
    ],
  },
  {
    title: "Orthodontic",
    services: [
      {
        title: "Dental Implants",
        description:
          "Permanent solution to replace missing teeth.",
        price: "$2500",
        duration: "2-3 hours",
        icon: TextAlignStart,
      },
    ],
  },
];