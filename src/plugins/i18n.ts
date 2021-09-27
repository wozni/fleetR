import {createI18n} from 'vue-i18n'
import {AppContext} from '@/core';

// eslint-disable-next-line
export default (context: AppContext) => {
  return createI18n({
    legacy: false,
    locale: process.env.VUE_APP_I18N_LOCALE || 'pl',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'pl'
  });
};
