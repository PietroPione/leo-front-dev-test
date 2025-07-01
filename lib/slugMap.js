export const slugMap = {
  servizi: { it: 'servizi', en: 'services', fr: 'services' },
  'chi-siamo': { it: 'chi-siamo', en: 'about-us', fr: 'a-propos' },
  // aggiungi altre pagine qui
};

export function getPageKeyBySlug(slug, locale) {
  // Trova la chiave della pagina dato uno slug e una lingua
  for (const [key, langs] of Object.entries(slugMap)) {
    if (langs[locale] === slug) return key;
  }
  return null;
}

export function getSlugInLocale(currentSlug, fromLocale, toLocale) {
  for (const key in slugMap) {
    if (slugMap[key][fromLocale] === currentSlug) {
      return slugMap[key][toLocale];
    }
  }
  // fallback: se non trovato, restituisci lo slug originale
  return currentSlug;
}