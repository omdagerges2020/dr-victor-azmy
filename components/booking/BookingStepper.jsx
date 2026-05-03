import { CircleCheckBig } from "lucide-react";

export default function BookingStepper({ step }) {
  const steps = ["Service", "Doctor", "Date", "Time", "Confirm"];

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {steps.map((label, index) => {
        const current = index + 1;

        const isCompleted = step > current;
        const isActive = step === current;

        return (
          <div key={label} className="flex items-center gap-1">
            {/* Circle */}
            <div
              className={`
              w-7 h-7 lg:w-9 lg:h-9 flex items-center justify-center rounded-full border transition-all duration-300

              ${
                isCompleted
                  ? "bg-btn-primary text-white border-transparent"
                  : isActive
                    ? "border-primary text-primary font-bold border-[2px]"
                    : "border-[hsl(var(--booking-border))] text-[hsl(var(--booking-muted))]"
              }
              `}
            >
              {isCompleted ? <CircleCheckBig className="w-4 h-4" /> : current}
            </div>

            {/* Label */}
            <span
              className={`
              hidden md:inline md:text-sm lg:text-sm transition-colors

              ${
                isActive
                  ? "text-[hsl(var(--booking-muted))]"
                  : "text-[hsl(var(--booking-muted))]"
              }
              `}
            >
              {label}
            </span>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div
                className={`
                w-5 h-[1px] md:w-10 md:h-[2px]

                ${
                  isCompleted
                    ? "bg-btn-primary"
                    : "bg-[hsl(var(--booking-border))]"
                }
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
