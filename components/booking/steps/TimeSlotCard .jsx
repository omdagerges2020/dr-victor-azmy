const TimeSlotCard = ({ slot, isSelected, onSelect }) => {
  const isDisabled = slot.isBooked;

  return (
    <button
      disabled={isDisabled}
      onClick={() => onSelect(slot)}
      className={`
        w-full px-3 py-2 md:py-3 md:px-[2rem] rounded-xl border text-sm font-medium
        transition-all duration-200

        ${isDisabled && `
          bg-[hsl(var(--time-slot-disabled-bg))]
          text-[hsl(var(--time-slot-disabled-text))]
          cursor-not-allowed
        `}

        ${!isDisabled && !isSelected && `
          border-[hsl(var(--time-slot-border))]
          hover:border-[hsl(var(--time-slot-hover-border))]
        `}

        ${isSelected && `
          bg-[hsl(var(--time-slot-selected-bg))]
          border-[hsl(var(--time-slot-selected-border))]
        `}
      `}
    >
      {slot.label}
    </button>
  );
};

export default TimeSlotCard