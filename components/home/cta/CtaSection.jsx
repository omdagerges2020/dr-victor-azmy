import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";

export default async function CtaSection() {
  const t = useTranslations("HomePage");
  const locale = await getLocale();
  const Icon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-6 py-12 md:px-12 md:py-16 text-center">
          {/* Content */}
          <div className="max-w-2xl mx-auto">
            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              {t('ctaheading')}
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm md:text-base text-white/80">
              {t('ctadescription')}
            </p>

            {/* Button */}
            <div className="mt-8">
              <Button
                variant="secondary"
                size="lg"
                className="gap-5 px-8 py-6 text-[1.1rem] rounded-full"
              >
                {t('ctabtn')}
                <Icon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
