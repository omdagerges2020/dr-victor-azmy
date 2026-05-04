import { ArrowRight, Stethoscope } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ServiceStep({ selected, onSelect, onNext }) {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      name: t("booking.serviceStep.teethCleaning"),
      price: t("booking.serviceStep.teethCleaningPrice"),
      duration: t("booking.serviceStep.teethCleaningDuration"),
    },
    {
      id: 2,
      name: t("booking.serviceStep.teethWhitening"),
      price: t("booking.serviceStep.teethWhiteningPrice"),
      duration: t("booking.serviceStep.teethWhiteningDuration"),
    },
    {
      id: 3,
      name: t("booking.serviceStep.dentalImplants"),
      price: t("booking.serviceStep.dentalImplantsPrice"),
      duration: t("booking.serviceStep.dentalImplantsDuration"),
    },
    {
      id: 4,
      name: t("booking.serviceStep.orthodontics"),
      price: t("booking.serviceStep.orthodonticsPrice"),
      duration: t("booking.serviceStep.orthodonticsDuration"),
    },
    {
      id: 5,
      name: t("booking.serviceStep.rootCanal"),
      price: t("booking.serviceStep.rootCanalPrice"),
      duration: t("booking.serviceStep.rootCanalDuration"),
    },
    {
      id: 6,
      name: t("booking.serviceStep.dentalVeneers"),
      price: t("booking.serviceStep.dentalVeneersPrice"),
      duration: t("booking.serviceStep.dentalVeneersDuration"),
    },
  ];
  return (
    <div className="w-full md:w-[90%] lg:w-[70%]">
      {/* service selec header */}
      <div className="flex items-center gap-2 mb-2">
        <Stethoscope color="#1924b3" />
        <h3 className="text-lg font-semibold  text-[hsl(var(--booking-text))]">
          {t("booking.serviceStep.title")}
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
          {t("booking.buttons.next")}
          <ArrowRight color="white" size={"16px"}/>
        </button>
      </div>
    </div>
  );
}
