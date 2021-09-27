import { createI18n } from 'vue-i18n'
import { AppContext } from '@/core';

// eslint-disable-next-line
export default (context: AppContext) => {
  const messages = {};
  context.modules
    .filter(m => m.locales)
    .forEach(m => Object.assign(messages, m.locales));
  const options = {
      legacy: false,
      locale: process.env.VUE_APP_I18N_LOCALE || 'en',
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',  
      messages
    }; 
  return createI18n(options);
};
