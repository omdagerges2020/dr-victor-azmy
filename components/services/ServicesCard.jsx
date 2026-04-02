export default function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  duration,
}) {
  return (
    <div className="bg-card border rounded-xl p-5 cursor-pointer space-y-3 shadow-sm hover:shadow-md transition">
      
      {/* Icon */}
      <div className="w-[3rem] h-[3rem] flex items-center justify-center rounded-lg bg-primary/10">
        <Icon className="w-5 h-5 text-primary" />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-xl">{title}</h3>

      {/* Description */}
      <p className="text-md text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 text-md">
        <span className="text-primary font-bold">{price}</span>
        <span className="text-muted-foreground">{duration}</span>
      </div>
    </div>
  );
}