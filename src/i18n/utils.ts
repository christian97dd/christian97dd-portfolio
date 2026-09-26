import { en } from './en';
import { es, type Dictionary } from './es';

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

const dictionaries: Record<Lang, Dictionary> = { es, en };

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in dictionaries;
}

export function getLang(locale: string | undefined): Lang {
  return isLang(locale) ? locale : defaultLang;
}

export function useTranslations(locale: string | undefined): Dictionary {
  return dictionaries[getLang(locale)];
}
