import { getRequestConfig } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales, defaultLocale } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    defaultLocale,
    locales,
  };
});
