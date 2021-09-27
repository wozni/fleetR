import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'
import { AppContext } from '@/core';



// eslint-disable-next-line
export default (context: AppContext) => {

  // context.modules
  //   .filter(m => m.locales)
  //   .map(m => m.locales)
  //   .forEach(locales => {
  //       Object.assign(messages["en"], locales!["en"])
  //       Object.assign(messages["pl"], locales!["pl"])
  //   });


  const i18n = createI18n({
    legacy: false,
    locale: process.env.VUE_APP_I18N_LOCALE || 'pl',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'pl'
  });
  return i18n;
};
