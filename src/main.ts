import "@mdi/font/css/materialdesignicons.css";

import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import createI18n from "./plugins/i18n"
import App from './views/App.vue'
import createRouter from './plugins/router'
import createStore from './plugins/store'
import { createAppContext } from "./core";

const context = createAppContext();
context.modules  
  .forEach(m => m.init && m.init(context));

createApp(App)
  .provide("context", context)
  .use(vuetify)
  .use(createRouter(context))
  .use(createStore(context))  
  .use(createI18n(context))
  .mount('#app')
