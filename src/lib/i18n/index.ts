import ar from './ar';
import en from './en';
import { defaultLocale, isLocale, type Locale } from './types';

export const dictionaries = {
  ar,
  en,
};

export type Dictionary = typeof ar;

export function getDictionary(locale: string): Dictionary {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}

export function getDirection(locale: Locale) {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function localizedPath(locale: Locale, href: string) {
  return href === '/' ? `/${locale}` : `/${locale}${href}`;
}
