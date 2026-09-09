import type { Locale } from '../paraglide/runtime';

/** Per-locale metadata that isn't user-facing copy (no translation, just config). */
export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; ogImage: string }> = {
  es: { htmlLang: 'es', ogLocale: 'es_ES', ogImage: 'og.png' },
  en: { htmlLang: 'en', ogLocale: 'en_GB', ogImage: 'og-en.png' },
};

/** Same contact details regardless of language. */
export const contact = {
  email: 'alberto@tallermartinez.net',
  phone: '+34 694 918 163',
};

/** Which service card is the featured one (structural, not text). */
export const featuredServiceIndex = 0;

/** Tag + URL per "what I build" project — not translated, but the Moone link is locale-specific. */
export const projects: { tag: string; url: Record<Locale, string> }[] = [
  { tag: 'Bot', url: { es: 'https://t.me/urbandictionarybot', en: 'https://t.me/urbandictionarybot' } },
  { tag: 'App', url: { es: 'https://vontus.dev/moone', en: 'https://vontus.dev/en/moone' } },
  { tag: 'Web', url: { es: 'https://vontus.dev', en: 'https://vontus.dev' } },
];
