"use client";

import Link from "next/link";
import { Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../language-switcher";
import { ModeToggle } from "../ModeToggle";

const navLinks = [
  { name: "navbar.home", href: "/" },
  { name: "navbar.services", href: "/services" },
  { name: "navbar.doctors", href: "/doctors" },
  { name: "navbar.about", href: "/about" },
  { name: "navbar.contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="w-full border-b bg-white  sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/*  Logo */}
        <div className="flex items-center gap-2">
          <div className="w-[2rem] h-[2rem] rounded-xl bg-gradient-to-r from-[#164DA0] to-[#2669B6] overflow-hidden flex items-center p-1 justify-center">
            <span className="font-bold text-white">V</span>
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {t("navbar.logo")}
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full font-semibold text-md transition text-[#6A6E75] hover:text-[#2A6FBB] hover:bg-slate-300`}
              >
                {t(link.name)}
              </Link>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {/* Theme */}
          {/* <button className="p-2 rounded-full hover:bg-gray-100">
            <Moon size={20} />
          </button> */}
          <ModeToggle/>

          {/* Sign In */}
          <Button
            variant="gradient"
            size="navbar"
            className="hidden md:flex rounded-full px-6"
          >
            {t('navbar.signin')}
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-3 bg-gray-100  p-4 rounded-xl">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm transition text-gray-600 
                  `}
                >
                  {t(link.name)}
                </Link>
              );
            })}

            <Button className="rounded-full mt-2">{t('navbar.signin')}</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
