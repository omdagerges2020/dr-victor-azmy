"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const locales = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const handleChange = (locale) => {
    if (locale === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = locale;

    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger aschild="true">
          <Globe className="h-5 w-5" />
          {currentLocale.toUpperCase()}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => handleChange(locale.code)}
            className={`cursor-pointer ${
              currentLocale === locale.code ? "font-bold" : ""
            }`}
          >
            {locale.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
