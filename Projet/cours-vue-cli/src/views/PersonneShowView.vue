<script>
 import PersonnesAdd from '@/components/PersonneAdd.vue'
 import axios from 'axios'


export default {

    data() {
        return {
            personnes: [
                // { id: 1, nom: "wick", prenom: "john", age: 45 },
                // { id: 2, nom: "dalton", prenom: "jack", age: 25 },
                // { id: 3, nom: "baggio", prenom: "roberto", age: 35 },
            ],
            erreur : null
        };
    },
    components: {
        PersonnesAdd,
    },
    mounted(){
        // axios({
        //     method:"GET",
        //     url: "http://localhost:5555/personnes"
        // })
        // .then(response => this.personnes = response.data)
        // .catch ( err => this.erreur = err)

        axios 
            .get('http://localhost:5555/personnes')
            .then(response => this.personnes = response.data)
            .catch(err => this.erreur = err)
    }
    
}
</script>

<template>
    <PersonnesAdd/>
    <h2>Gestion de personnes</h2>
    <ul>
        <li v-for="(elt , ind) in personnes" :key ="ind">
            {{ elt.prenom }} {{ elt.nom }}
            <router-link :to="{ name: 'personne-details', params : { id :elt.id} }">Consulter</router-link>
        </li>
    </ul>
</template>