"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm md:text-lg">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value || "-"}</span>
    </div>
  );
}

export default function ConfirmStep({ data, onBack, onConfirm }) {
  const { t } = useTranslation();
  const { service, doctor, date, time } = data;

  const isValid =
    !!service && !!doctor && !!date?.full && !!time?.value;

  return (
    <div className="space-y-8 w-full lg:w-[70%]">
      {/* Title */}
      <h2 className="text-xl font-semibold">
        {t("booking.confirmStep.title")}
      </h2>

      {/* Card */}
      <div className="rounded-2xl border border-[hsl(var(--date-card-border))] bg-[hsl(var(--section-bg-secondary))] p-6 md:p-8 shadow-sm">
        <div className="space-y-4">
          {/* Row */}
          <Row label={t("booking.confirmStep.service")} value={service?.name} />
          <Row label={t("booking.confirmStep.doctor")} value={doctor?.name} />
          <Row
            label={t("booking.confirmStep.date")}
            value={date?.full?.toLocaleDateString()}
          />
          <Row label={t("booking.confirmStep.time")} value={time?.label} />

          {/* Divider */}
          <div className="border-t border-[hsl(var(--date-card-border))] my-4" />

          {/* Total */}
          <div className="flex items-center justify-between font-semibold text-lg">
            <span>{t("booking.confirmStep.total")}</span>
            <span className="text-primary font-bold">
              {service?.price || 0}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        {/* Back */}
        <Button
          variant="outline"
          onClick={onBack}
          className="gap-2 px-6 hover:text-white hover:border-transparent py-5 rounded-full bg-[hsl(var(--btn-back-bg))] hover:bg-[hsl(var(--btn-back-hover))]"
        >
          <ArrowLeft className="w-4 h-4 [html[dir='rtl']_&]:rotate-180" />
          {t("booking.buttons.back")}
        </Button>

        {/* Confirm */}
        <Button
          disabled={!isValid}
          onClick={onConfirm}
          className="gap-2 px-10 py-5  text-[hsl(var(--btn-confirm-text))] bg-gradient-to-r from-[#164DA0] to-[#2669B6] rounded-full"
        >
          {t("booking.confirmStep.confirmButton")}
          <CheckCircle className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}