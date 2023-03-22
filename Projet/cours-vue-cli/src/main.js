import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/validators/min-max.validator.js'
import VueAxios from 'vue-axios'
import axios from 'axios'
//import HelloWorld from '@/components/HelloWorld.vue'

// .component('HelloWorld', HelloWorld)
const app = createApp(App)
    
    app.config.globalProperties.baseUrl = 'http://localhost:5555'
    
    app.use(router).use(router).use(VueAxios , axios)
    .mount('#app')
