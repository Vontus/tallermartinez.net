import { type Locale } from '../paraglide/runtime';
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
  ];
}

/** Work already delivered — the proof that backs the "what I build" pitch. */
export function getCases() {
  return [
    { nombre: m.cases_item_0_nombre(), tag: m.cases_item_0_tag(), desc: m.cases_item_0_desc() },
    { nombre: m.cases_item_1_nombre(), tag: m.cases_item_1_tag(), desc: m.cases_item_1_desc() },
    { nombre: m.cases_item_2_nombre(), tag: m.cases_item_2_tag(), desc: m.cases_item_2_desc() },
    { nombre: m.cases_item_3_nombre(), tag: m.cases_item_3_tag(), desc: m.cases_item_3_desc() },
  ];
}

export function getSteps() {
  return [
    { titulo: m.how_step_0_titulo(), desc: m.how_step_0_desc() },
    { titulo: m.how_step_1_titulo(), desc: m.how_step_1_desc() },
    { titulo: m.how_step_2_titulo(), desc: m.how_step_2_desc() },
    { titulo: m.how_step_3_titulo(), desc: m.how_step_3_desc() },
  ];
}

export function getPrincipios() {
  return [
    { titulo: m.how_principio_0_titulo(), desc: m.how_principio_0_desc() },
    { titulo: m.how_principio_1_titulo(), desc: m.how_principio_1_desc() },
    { titulo: m.how_principio_2_titulo(), desc: m.how_principio_2_desc() },
  ];
}

/** Non-software services, kept deliberately secondary to the build work. */
export function getExtras() {
  return [
    { titulo: m.about_extra_0_titulo(), desc: m.about_extra_0_desc() },
    { titulo: m.about_extra_1_titulo(), desc: m.about_extra_1_desc() },
    { titulo: m.about_extra_2_titulo(), desc: m.about_extra_2_desc() },
  ];
}
