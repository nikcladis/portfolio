export const locales = ["en", "el"] as const;
export const defaultLocale = locales[0];

export type Locale = (typeof locales)[number];
