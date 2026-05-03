import { ArrowRight, User } from "lucide-react";

const doctors = [
  { id: 1, name: "Dr. Ahmed", specialty: "Orthodontist" },
  { id: 2, name: "Dr. Sara", specialty: "Cosmetic Dentist" },
];

export default function DoctorStep({ selected, onSelect, onNext, onBack }) {
  return (
    <div className="w-full md:w-[90%] lg:w-[70%]">
      {/* select doctor header */}
      <div className="flex items-center gap-2 mb-2">
        <User color="#1924b3" />
        <h3 className="text-lg font-semibold  text-[hsl(var(--booking-text))]">
          Select a Doctor
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {doctors.map((doc) => {
          const isActive = selected?.id === doc.id;

          return (
            <button
              key={doc.id}
              onClick={() => onSelect(doc)}
              className={`p-4 rounded-xl border text-left
                   ${
                     isActive
                       ? "border-primary shadow-md"
                       : "border-[hsl(var(--booking-border))] hover:border-primary/50"
                   }`}
            >
              <p className="font-medium">{doc.name}</p>
              <p className="text-sm text-gray-500">{doc.specialty}</p>
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
          <ArrowRight color="white" size={"16px"} />
        </button>
      </div>
    </div>
  );
}
