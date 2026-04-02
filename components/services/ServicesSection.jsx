import ServiceCard from "./ServicesCard";

export default function ServicesSection({ title, services }) {
  return (
    <section className="space-y-6">
      
      {/* Title + line */}
      <div className="flex items-center gap-2">
        <div className="h-[4.6px] w-[2rem] bg-gradient-to-r from-[#154B9E] to-[#2262B0] rounded-lg" />
        <h2 className="font-semibold text-2xl">{title}</h2>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
}