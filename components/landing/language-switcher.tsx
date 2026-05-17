"use client";

import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/components/providers/i18n-provider";
import { isLocale, locales, localeConfig, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  variant?: "hero" | "scrolled";
};

export function LanguageSwitcher({ variant = "hero" }: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const isHero = variant === "hero";

  function switchLocale(next: Locale) {
    setLocale(next);

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && isLocale(segments[0])) {
      segments[0] = next;
    } else {
      segments.unshift(next);
    }

    const nextPath = `/${segments.join("/")}`;
    router.push(nextPath);
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-full border p-0.5 text-xs font-medium transition-colors",
        isHero
          ? "border-white/20 bg-white/5"
          : "border-foreground/15 bg-foreground/5",
      )}
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchLocale(code)}
          className={cn(
            "rounded-full px-3 py-1.5 transition-all duration-300",
            locale === code
              ? isHero
                ? "bg-white text-black shadow-sm"
                : "bg-foreground text-background shadow-sm"
              : isHero
                ? "text-white/70 hover:text-white"
                : "text-foreground/60 hover:text-foreground",
          )}
          aria-pressed={locale === code}
        >
          {localeConfig[code].label}
        </button>
      ))}
    </div>
  );
}
