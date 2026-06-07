export type Locale = 'ar' | 'en';

export const locales: Locale[] = ['ar', 'en'];
export const defaultLocale: Locale = 'ar';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getText<T>(locale: Locale, value: { ar: T; en: T }) {
  return value[locale];
}
