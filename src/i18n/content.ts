import { getLocale, type Locale } from '../paraglide/runtime';
import * as m from '../paraglide/messages';

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
const projects: { tag: string; url: Record<Locale, string> }[] = [
  { tag: 'Bot', url: { es: 'https://t.me/urbandictionarybot', en: 'https://t.me/urbandictionarybot' } },
  { tag: 'App', url: { es: 'https://vontus.dev/moone', en: 'https://vontus.dev/en/moone' } },
  { tag: 'Web', url: { es: 'https://vontus.dev', en: 'https://vontus.dev' } },
];

/**
 * Paraglide messages are flat, tree-shakable string functions — there's no
 * "localized array" message type. The list shape (order, count) lives here
 * in code; each item's text is still individual `m.*()` calls, just built
 * once in this data module instead of inline in the view.
 */
export function getPains() {
  return [m.problem_pain_0(), m.problem_pain_1(), m.problem_pain_2(), m.problem_pain_3()];
}

export function getServices() {
  return [
    {
      titulo: m.services_item_0_titulo(),
      desc: m.services_item_0_desc(),
      detalle: [m.services_item_0_detalle_0(), m.services_item_0_detalle_1(), m.services_item_0_detalle_2()],
    },
    {
      titulo: m.services_item_1_titulo(),
      desc: m.services_item_1_desc(),
      detalle: [m.services_item_1_detalle_0(), m.services_item_1_detalle_1(), m.services_item_1_detalle_2()],
    },
    {
      titulo: m.services_item_2_titulo(),
      desc: m.services_item_2_desc(),
      detalle: [m.services_item_2_detalle_0(), m.services_item_2_detalle_1(), m.services_item_2_detalle_2()],
    },
    {
      titulo: m.services_item_3_titulo(),
      desc: m.services_item_3_desc(),
      detalle: [m.services_item_3_detalle_0(), m.services_item_3_detalle_1(), m.services_item_3_detalle_2()],
    },
    {
      titulo: m.services_item_4_titulo(),
      desc: m.services_item_4_desc(),
      detalle: [m.services_item_4_detalle_0(), m.services_item_4_detalle_1(), m.services_item_4_detalle_2()],
    },
  ];
}

export function getHowItems() {
  return [
    { titulo: m.how_item_0_titulo(), desc: m.how_item_0_desc() },
    { titulo: m.how_item_1_titulo(), desc: m.how_item_1_desc() },
    { titulo: m.how_item_2_titulo(), desc: m.how_item_2_desc() },
    { titulo: m.how_item_3_titulo(), desc: m.how_item_3_desc() },
  ];
}

/** "What I build" mini-cards: text from messages, tag/url from the structural list above. */
export function getAboutProjects() {
  const locale = getLocale();
  return [
    { nombre: m.about_project_0_nombre(), desc: m.about_project_0_desc() },
    { nombre: m.about_project_1_nombre(), desc: m.about_project_1_desc() },
    { nombre: m.about_project_2_nombre(), desc: m.about_project_2_desc() },
  ].map((p, i) => ({ ...p, tag: projects[i].tag, url: projects[i].url[locale] }));
}
