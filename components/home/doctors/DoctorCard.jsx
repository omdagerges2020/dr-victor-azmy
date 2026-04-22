import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function DoctorCard({
  name,
  specialization,
  rating,
  reviews,
  initials,
}) {
  return (
    <Card className="border border-border/60 bg-[hsl(var(--service-card-bg))] transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex flex-col items-center text-center gap-3">

        {/* Avatar */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold bg-gradient-to-r from-[#154B9E] to-[#2262B0] text-lg">
          {initials}
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-foreground">
          {name}
        </h3>

        {/* Specialization */}
        <p className="text-primary text-sm font-medium">
          {specialization}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span>{rating}</span>
          <span>({reviews} reviews)</span>
        </div>

      </CardContent>
    </Card>
  );
}