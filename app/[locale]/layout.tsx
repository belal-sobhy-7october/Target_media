import { notFound } from "next/navigation";
import { I18nProvider } from "@/components/providers/i18n-provider";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import {
  isLocale,
  localeConfig,
  locales,
  type Locale,
} from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const { dir } = localeConfig[locale];

  return (
    <I18nProvider initialLocale={locale}>
      <div lang={locale} dir={dir}>
        {children}
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}
