export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeConfig: Record<
  Locale,
  { dir: "ltr" | "rtl"; label: string }
> = {
  en: { dir: "ltr", label: "English" },
  ar: { dir: "rtl", label: "العربية" },
};

export const LOCALE_STORAGE_KEY = "vion-agency-locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
