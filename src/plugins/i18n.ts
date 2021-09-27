import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'
import { AppContext } from '@/core';

export default (context: AppContext) => {
  const messages = {};
  context.modules
    .filter(m => m.locales)
    .forEach(m => Object.assign(messages, m.locales));
  return createI18n({
    legacy: false,
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages
  });
};
