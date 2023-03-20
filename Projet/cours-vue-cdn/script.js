// Script associé au composant web

const app=Vue.createApp({
    data() {
        return {
            message : "<span>Hello world</span>",
            tab : [2,3,8,5],
            personne : { id : 1 , nom : 'doe', prenom : 'toto'}
        }
    },

    methods : {
            direBonjour(){
                return 'Bienvenue dans le cours Vue.js 3'
            }
    }
})


app.mount('#app')