import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import  i18n from "./plugins/i18n"
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(i18n)  
  .use(router)
  .use(store)
  .use(vuetify)
  .use(i18n)
  .mount('#app')
