"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslations } from "@/components/providers/i18n-provider";
import { LanguageSwitcher } from "@/components/landing/language-switcher";

export function Navigation() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.services, href: "#services" },
    { name: t.nav.focus, href: "#focus" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 inset-x-4" : "top-0 inset-x-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          <a href="#" className="flex items-center gap-2">
            <span
              className={`font-display tracking-tight transition-all duration-500 ${
                isScrolled ? "text-xl text-foreground" : "text-2xl text-white"
              }`}
            >
              {t.company.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-300 relative group ${
                  isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 start-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-foreground" : "bg-white"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher variant={isScrolled ? "scrolled" : "hero"} />
            <Button
              size="sm"
              asChild
              className={`rounded-full transition-all duration-500 ${
                isScrolled
                  ? "bg-foreground hover:bg-foreground/90 text-background px-4 h-8 text-xs"
                  : "bg-white hover:bg-white/90 text-black px-6"
              }`}
            >
              <a href="#contact">{t.nav.cta}</a>
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher variant={isScrolled ? "scrolled" : "hero"} />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-500 ${
                isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl sm:text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 text-start ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms",
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className={`pt-8 border-t border-foreground/10 transition-all duration-500 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button className="w-full bg-foreground text-background rounded-full h-14 text-base" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                {t.nav.cta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
