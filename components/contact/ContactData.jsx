import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const CONTACT_DATA = [
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@dentacare.com" },
  { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "123 Dental Ave, New York, NY 10001" },
  { icon: <Clock className="w-5 h-5" />, label: "Hours", value: "Mon-Fri: 9AM-6PM, Sat: 9AM-2PM" },
];