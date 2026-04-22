import T from "@/components/translate/T";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default async function CtaSection() {


  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-6 py-12 md:px-12 md:py-16 text-center">
          {/* Content */}
          <div className="max-w-2xl mx-auto">
            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              <T k="homepage.ctaheading"/>
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm md:text-base text-white/80">
              <T k="homepage.ctadescription"/>
            </p>

            {/* Button */}
            <div className="mt-8">
              <Button
                variant="secondary"
                size="lg"
                className="gap-5 px-8 py-6 text-[1.1rem] rounded-full"
              >
                <T k="homepage.ctabtn"/>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
