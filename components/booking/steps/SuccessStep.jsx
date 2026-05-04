// components/booking/steps/SuccessStep.jsx
import React from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SuccessStep = ({ data }) => {
  const { t } = useTranslation();

  const summaryItems = [
    { label: t("booking.successStep.service"), value: data.service?.name },
    { label: t("booking.successStep.doctor"), value: data.doctor?.name },
    {
      label: t("booking.successStep.date"),
      value: data.date?.full?.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }),
    },
    { label: t("booking.successStep.time"), value: data.time?.label },
    {
      label: t("booking.successStep.price"),
      value: `${data.service?.price || 0}`,
      isPrice: true,
    },
  ];

  return (
    <div className="flex flex-col shadow-sm bg-[hsl(var(--success-bg))] border border-[hsl(var(--booking-border))] px-8 rounded-xl w-full md:w-[70%] lg:w-[50%] xl:w-[40%] items-center justify-center animate-in fade-in zoom-in duration-500 py-7">
      {/* Success Icon */}
      <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
      </div>

      {/* Confirmation Header */}
      <h2 className="text-3xl font-bold text-[hsl(var(--text-primary))] mb-2 text-center">
        {t("booking.successStep.title")}
      </h2>
      <p className="text-[hsl(var(--success-description))] text-xl text-center mb-8 max-w-[28rem]">
        {t("booking.successStep.description")}
      </p>

      {/* Summary Card */}
      <div className="w-full max-w-md bg-[hsl(var(--success-card-bg))]  border-[hsl(var(--border-color))] rounded-2xl p-4 shadow-sm mb-7">
        <div className="space-y-3">
          {summaryItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 items-center "
            >
              <span className="text-sm font-bold text-[hsl(var(--success-label))]">
                {item.label}:
              </span>
              <span
                className={`text-sm font-semibold text-[hsl(var(--text-primary))]`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <Link
        href="/"
        className="flex items-center gap-2 bg-gradient-to-r from-[#164DA0] to-[#2669B6] text-white px-5 py-3 rounded-full font-semibold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20"
      >
        {t("booking.successStep.backToHome")}
      </Link>
    </div>
  );
};

export default SuccessStep;
