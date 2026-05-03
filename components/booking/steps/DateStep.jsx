"use client";

import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { useMemo } from "react";


function generateDates() {
  const today = new Date();    
  const days = [];

  for (let i = 0; i < 14; i++) {
    const d = new Date();
    
    d.setDate(today.getDate() + i);    

    days.push({
      full: d,
      day: d.toLocaleDateString("en-US", { weekday: "short" }),
      date: d.getDate(),
      month: d.toLocaleDateString("en-US", { month: "short" }),
    });
  }

  return days;
}

export default function DateStep({ selected, onSelect, onNext, onBack }) {  
  const dates = useMemo(() => generateDates(), []);
  const isValid = selected?.full;  

  return (
    <div className="w-full md:w-[90%] lg:w-[70%]">
      {/* Title */}
      <h3 className="flex items-center gap-2 text-lg font-semibold mb-6 text-[hsl(var(--booking-text))]">
        <Calendar color="#204dd5" className="w-5 h-5" />
        Select a Date
      </h3>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
        {dates.map((date, index) => {
          const isActive =
            selected?.full?.toDateString() === date.full.toDateString();

          return (
            <button
              key={index}
              onClick={() => onSelect(date)}
              className={`
              py-3 px-[2.2rem] rounded-xl border text-center transition-all duration-200

              ${
                isActive
                  ? "bg-[hsl(var(--date-card-selected-bg))] border-[hsl(var(--date-card-selected-border))] text-[hsl(var(--booking-text))]"
                  : "bg-transparent border border-[hsl(var(--date-card-border))] text-[hsl(var(--booking-text))] hover:border-[hsl(var(--date-card-selected-border))]"
              }
              `}
            >
              <p className="text-sm text-[hsl(var(--booking-muted))]">
                {date.day}
              </p>

              <p className="text-lg font-bold">{date.date}</p>

              <p className="text-xs text-[hsl(var(--booking-muted))]">
                {date.month}
              </p>
            </button>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className={`flex justify-between items-center gap-4 px-5 py-2 rounded-lg bg-[hsl(var(--btn-back-bg))] text-[hsl(var(--booking-text))] border border-[hsl(var(--booking-border))] transition-all duration-200 hover:bg-[hsl(var(--btn-back-hover))] hover:text-white hover:border-transparent`}
        >
          <ArrowLeft color="white" size={"16px"} />
          Back
        </button>

        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-4 py-2 rounded-full transition flex justify-between items-center gap-4
                  ${
                    isValid
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

