import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homepage_it from "@/locales/homepage.json";
import homepage_en from "@/locales/homepage-en.json";

const resources = {
  it: { homepage: homepage_it },
  en: { homepage: homepage_en },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "it",
    fallbackLng: "it",
    supportedLngs: ["it", "en"],
    ns: ["homepage"],
    defaultNS: "homepage",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;