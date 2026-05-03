import { ArrowRight, Stethoscope } from "lucide-react";

const services = [
  { id: 1, name: "Teeth Cleaning", price: "$120", duration: "45 min" },
  { id: 2, name: "Teeth Whitening", price: "$350", duration: "60 min" },
  { id: 3, name: "Dental Implants", price: "$2500", duration: "2-3 hours" },
  { id: 4, name: "Orthodontics", price: "$4500", duration: "12-18 months" },
  { id: 5, name: "Root Canal", price: "$800", duration: "90 min" },
  { id: 6, name: "Dental Veneers", price: "$1200", duration: "2 visits" },
];

export default function ServiceStep({ selected, onSelect, onNext }) {
  return (
    <div className="w-full md:w-[90%] lg:w-[70%]">
      {/* service selec header */}
      <div className="flex items-center gap-2 mb-2">
        <Stethoscope color="#1924b3" />
        <h3 className="text-lg font-semibold  text-[hsl(var(--booking-text))]">
          Select a Service
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {services.map((service) => {
          const isActive = selected?.id === service.id;

          return (
            <button
              key={service.id}
              onClick={() => onSelect(service)}
              className={`text-left p-4 rounded-xl border transition
              ${
                isActive
                  ? "border-primary shadow-md"
                  : "border-[hsl(var(--booking-border))] hover:border-primary/50"
              }`}
            >
              <p className="font-medium text-[hsl(var(--booking-text))]">
                {service.name}
              </p>

              <p className="text-sm text-[hsl(var(--booking-muted))]">
                {service.price} • {service.duration}
              </p>
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={onNext}
          disabled={!selected}
          className={`px-4 py-2 rounded-full transition flex justify-between items-center gap-4
          ${
            selected
              ? "bg-btn-primary text-white"
              : "bg-btn-disabled text-white opacity-90 cursor-not-allowed"
          }`}
        >
          Next 
          <ArrowRight color="white" size={"16px"}/>
        </button>
      </div>
    </div>
  );
}
