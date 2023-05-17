import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import './assets/mainstyles.scss'

import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// для Vue 2
// import axios from 'axios'
// Vue.prototype.axios = axios;

loadFonts()

createApp(App)
    .use(VueAxios, axios)
    .use(vuetify)
    .use(router)
    .mount('#app')