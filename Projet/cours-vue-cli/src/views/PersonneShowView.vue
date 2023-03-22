<script>
 import PersonnesAdd from '@/components/PersonneAdd.vue'

export default {

    data() {
        return {
            personnes: [
                { id: 1, nom: "wick", prenom: "john", age: 45 },
                { id: 2, nom: "dalton", prenom: "jack", age: 25 },
                { id: 3, nom: "baggio", prenom: "roberto", age: 35 },
            ]
        };
    },
    components: {
        PersonnesAdd,
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