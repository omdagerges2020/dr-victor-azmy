import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(1, 3)
    .join("");
}

export default function DoctorsCard({ doctor }) {
  return (
    <Card className="rounded-2xl border border-border hover:shadow-md cursor-pointer transition">
      <CardContent className="p-6 flex flex-col lg:flex-row gap-4 items-center">
        {/* Avatar */}
        <div className="w-[6rem] h-[6rem] flex items-center justify-center rounded-full bg-gradient-to-r from-[#154B9E] to-[#2262B0] text-white font-bold text-2xl shrink-0">
          {getInitials(doctor.name)}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
          <h3 className="font-semibold text-xl text-foreground">
            {doctor.name}
          </h3>

          <p className="text-sm items-center text-primary mb-1">{doctor.specialization}</p>

          <p className="text-sm text-center lg:text-start text-muted-foreground line-clamp-2 mb-3">
            {doctor.bio}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={14} fill="currentColor" />
              <span className="text-foreground font-medium">
                {doctor.rating}
              </span>
            </div>

            <span>{doctor.reviews} reviews</span>
            <span>{doctor.experience} years</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
