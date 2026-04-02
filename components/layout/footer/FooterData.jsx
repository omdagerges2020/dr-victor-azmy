import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const footerData = {
  brand: {
    name: "Dental Clinic",
    description:
      "Your trusted partner for comprehensive dental care. Modern treatments with a gentle touch.",
  },

  links: [
    { label: "Services", href: "/services" },
    { label: "Doctors", href: "/doctors" },
    { label: "Book Appointment", href: "/book" },
    { label: "About Us", href: "/about" },
  ],

  workingHours: [
    "Mon - Fri: 9:00 AM - 6:00 PM",
    "Saturday: 9:00 AM - 2:00 PM",
    "Sunday: Closed",
  ],

  contact: [
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      text: "info@dentacare.com",
    },
    {
      icon: MapPin,
      text: "123 Dental Ave, Suite 100",
    },
  ],
};