// Script associé au composant web
import homeView from "./home-view.js"

const app = Vue.createApp({
    components: {
        'home-view': homeView
    }
})

app.mount('#app')