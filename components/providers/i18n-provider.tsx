"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  defaultLocale,
  isLocale,
  LOCALE_STORAGE_KEY,
  localeConfig,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary, type Dictionary } from "@/lib/i18n/dictionary";

type I18nContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored && isLocale(stored)) return stored;
  return defaultLocale;
}

type I18nProviderProps = {
  children: React.ReactNode;
  initialLocale?: Locale;
};

export function I18nProvider({
  children,
  initialLocale = defaultLocale,
}: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setLocaleState(initialLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, initialLocale);
  }, [initialLocale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  const dir = localeConfig[locale].dir;
  const dictionary = getDictionary(locale);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.lang = locale;
    root.dir = dir;
    root.classList.toggle("locale-ar", locale === "ar");
    root.classList.toggle("locale-en", locale === "en");
  }, [locale, dir, mounted]);

  const value = useMemo(
    () => ({ locale, dir, dictionary, setLocale }),
    [locale, dir, dictionary, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}

export function useTranslations() {
  return useI18n().dictionary;
}
