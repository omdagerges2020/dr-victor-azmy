"use client";

import { useMemo } from "react";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import TimeSlotCard from "./TimeSlotCard ";

const generateTimeSlots = () => {
  const times = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM",
    "02:00 PM", "02:30 PM", "03:00 PM",
    "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM",
  ];

  const booked = ["11:00 AM", "02:30 PM"];

  return times.map((t) => ({
    label: t,
    value: t,
    isBooked: booked.includes(t),
  }));
};

export default function TimeStep({ selected, onSelect, onNext, onBack }) {
  const { t } = useTranslation();
  const slots = useMemo(() => generateTimeSlots(), []);  
  const isValid = selected?.label;  
  
  return (
    <div className="space-y-6 w-full md:w-[90%] lg:w-[70%]">

      {/* Title */}
      <div className="flex items-center gap-2 text-lg font-semibold">
        <Clock className="w-5 h-5" />
        <span>{t("booking.timeStep.title")}</span>
      </div>

      {/* Grid */}
      <div className="
        grid gap-3
        grid-cols-3
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
      ">
        {slots.map((slot) => (
          <TimeSlotCard
            key={slot.value}
            slot={slot}
            isSelected={selected?.value === slot.value}
            onSelect={onSelect}
          />
        ))}
      </div>

      
      {/* Actions */}
      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className={`flex justify-between items-center gap-4 px-4 py-2 rounded-full bg-[hsl(var(--btn-back-bg))] text-[hsl(var(--booking-text))] border border-[hsl(var(--booking-border))] transition-all duration-200 hover:bg-[hsl(var(--btn-back-hover))] hover:text-white hover:border-transparent`}
        >
          <ArrowLeft size={"16px"} />
          {t("booking.buttons.back")}
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
          {t("booking.buttons.next")}
          <ArrowRight color="white" size={"16px"} />
        </button>
      </div>

    </div>
  );
}