// Script associé au composant web

const app=Vue.createApp({
    data() {
        return {
            message : "<span>Hello world</span>",
            tab : [2,3,8,5],
            personne : { id : 1 , nom : 'doe', prenom : 'john'},
            nom : "wick",
            personnes: [
                { id: 100, nom: 'Wick', prenom: 'John' },
                { id: 101, nom: 'Abruzzi', prenom: 'John' },
                { id: 102, nom: 'Marley', prenom: 'Bob' },
                { id: 103, nom: 'Segal', prenom: 'Steven' }
            ]
        }
    },

    methods : {
            direBonjour(){
                return `Bienvenue ${this.nom} dans le cours Vue.js 3 `
            },
            bonjourNom(nom){
                return `Bienvenue ${nom}  `
            }
    }
})


app.mount('#app')