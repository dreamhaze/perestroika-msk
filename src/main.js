import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import './assets/mainstyles.scss'

import router from './router'  

loadFonts()

createApp(App)  
    .use(router)
    .mount('#app')