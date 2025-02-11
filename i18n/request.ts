import { getRequestConfig } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";

const locales = ["en", "el"];

export default getRequestConfig(async ({ locale }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    defaultLocale: locales[0],
    locales,
  };
});
