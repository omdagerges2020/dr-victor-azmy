"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import BookingStepper from "./BookingStepper";
import ServiceStep from "./steps/ServiceStep";
import DoctorStep from "./steps/DoctorStep";
import DateStep from "./steps/DateStep";
import TimeStep from "./steps/TimeStep";
import ConfirmStep from "./steps/ConfirmStep";
import SuccessStep from "./steps/SuccessStep";

export default function BookingContainer() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    service: null,
    doctor: null,
    date: null,
    time: null,
  });

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  const update = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-6 ">
        {step !== 6 && (
          <>
            <h2 className="text-3xl font-bold text-center mb-4 text-[hsl(var(--booking-text))]">
              {t("booking.title")}
            </h2>

            <p className="text-center text-[hsl(var(--booking-muted))] mb-10">
              {t("booking.subtitle")}
            </p>

            <BookingStepper step={step} />
          </>
        )}

        <div className="mt-8 flex justify-center px-4 sm:px-6 md:px-8">
          {step === 1 && (
            <ServiceStep
              selected={data.service}
              onSelect={(val) => update("service", val)}
              onNext={next}
            />
          )}

          {step === 2 && (
            <DoctorStep
              selected={data.doctor}
              onSelect={(val) => update("doctor", val)}
              onNext={next}
              onBack={prev}
            />
          )}

          {step === 3 && (
            <DateStep
              selected={data.date}
              onSelect={(val) => update("date", val)}
              onNext={next}
              onBack={prev}
            />
          )}

          {step === 4 && (
            <TimeStep
              selected={data.time}
              onSelect={(val) => update("time", val)}
              onNext={next}
              onBack={prev}
            />
          )}

          {step === 5 && (
            <ConfirmStep
              data={data}
              onBack={() => setStep(4)}
              onConfirm={() => {
                setStep(6);
              }}
            />
          )}

          {step === 6 && (
            <SuccessStep
              data={data}
              onReset={() => {
                setData({
                  service: null,
                  doctor: null,
                  date: null,
                  time: null,
                });
                setStep(1);
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
