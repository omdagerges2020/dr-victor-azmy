import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ServiceCard({
  title,
  description,
  price,
  duration,
  icon: Icon,
}) {
  return (
    <Card
      className={cn(
        "group border border-border/60 bg-card transition-all duration-300",
        "hover:shadow-lg"
      )}
    >
      <CardContent className=" flex flex-col gap-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-[#E5EAF4] hover:text-white hover:bg-gradient-to-r from-[#154B9E] to-[#2262B0] flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary hover:text-white" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-primary font-semibold">
            ${price}
          </span>

          <span className="text-xs text-muted-foreground">
            {duration}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}