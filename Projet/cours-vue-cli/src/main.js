import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import HelloWorld from '@/components/HelloWorld.vue'

// .component('HelloWorld', HelloWorld)
createApp(App).use(router).use(router)
    .mount('#app')
