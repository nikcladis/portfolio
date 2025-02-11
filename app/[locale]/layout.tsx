import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { BaseLayout } from "@/components/layouts/base-layout";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.includes(locale as Locale);
  if (!isValidLocale) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <BaseLayout>{children}</BaseLayout>
    </NextIntlClientProvider>
  );
}
