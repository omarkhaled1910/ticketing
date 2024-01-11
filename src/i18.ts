import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          power: "the power of ",
          smart: "smart ticketing",
        },
      },
      ar: {
        translation: {
          power: "the power of in arabic",
          smart: "smart ticketing in arabic ",
        },
      },
    },
  });

export default i18n;
