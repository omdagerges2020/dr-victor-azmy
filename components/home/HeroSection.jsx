import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Sparkles,
  Clock,
  Phone,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full pt-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-full font-semibold text-md text-[#6A6E75] mb-6">
          <CheckCircle className="text-green-500" size={16} />
          <span>Trusted by 15,000+ patients</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl text-foreground">
          Your Smile Deserves
          <span className="text-[#114398]"> Expert </span>
          <span className="text-[#1D5AAA]">Care</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl">
          Experience modern dentistry with compassionate professionals. From
          routine cleanings to advanced procedures, we're here to give you a
          healthy, beautiful smile.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {/* Primary */}
          <Button
            size="navbar"
            className="flex items-center gap-4 text-md bg-gradient-to-r from-[#164DA0] to-[#2669B6] text-white hover:from-[#1b5fc2] hover:to-[#2f7bd6] shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/booking">Book Appointment</Link>
            <ArrowRight />
          </Button>

          {/* Secondary */}
          <Button
            variant="herosection"
            size="navbar"
            className="flex items-center gap-2 text-md px-8"
          >
            <Phone />
            <Link href="/contact">Call Us</Link>
          </Button>
        </div>
      </div>
      {/* Stats */}
      <div className="w-full mt-16 border-t py-10 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Happy Patients */}
          <div className="flex flex-col items-center gap-2">
            <Users className="text-primary" size={28} />
            <h3 className="text-xl font-bold text-foreground">15,000+</h3>
            <p className="text-sm text-muted-foreground">Happy Patients</p>
          </div>

          {/* Years Experience */}
          <div className="flex flex-col items-center gap-2">
            <Award className="text-primary" size={28} />
            <h3 className="text-xl font-bold text-foreground">25+</h3>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>

          {/* Treatments */}
          <div className="flex flex-col items-center gap-2">
            <Sparkles className="text-primary" size={28} />
            <h3 className="text-xl font-bold text-foreground">50+</h3>
            <p className="text-sm text-muted-foreground">Treatments</p>
          </div>

          {/* Emergency Care */}
          <div className="flex flex-col items-center gap-2">
            <Clock className="text-primary" size={28} />
            <h3 className="text-xl font-bold text-foreground">24/7</h3>
            <p className="text-sm text-muted-foreground">Emergency Care</p>
          </div>
        </div>
      </div>
    </section>
  );
}
