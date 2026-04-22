import Link from "next/link";
import FooterColumn from "./FooterColumn";
import { footerData } from "./FooterData";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-text))] border-t  border-[hsl(var(--hero-badge-border))]">
      <div className="py-12 container mx-auto px-6">
        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#154B9E] to-[#2262B0] text-white font-bold">
                V
              </div>
              <span className="text-xl font-bold">
                {footerData.brand.name}
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {footerData.brand.description}
            </p>
          </div>

          {/* LINKS */}
          <FooterColumn title="Quick Links">
            {footerData.links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="block hover:text-primary transition"
              >
                {link.label}
              </Link>
            ))}
          </FooterColumn>

          {/* WORKING HOURS */}
          <FooterColumn title="Working Hours">
            {footerData.workingHours.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </FooterColumn>

          {/* CONTACT */}
          <FooterColumn title="Contact">
            {footerData.contact.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </FooterColumn>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-[hsl(var(--hero-badge-border))] pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DentaCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}