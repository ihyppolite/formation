<script>
export default {
    data() {
        return {
            personnes: [
                { id: 1, nom: 'wick', prenom: 'john', age: 45 },
                { id: 2, nom: 'dalton', prenom: 'jack', age: 25 },
                { id: 3, nom: 'baggio', prenom: 'roberto', age: 35 },
            ]
        }
    },
    props : ['id'],
    computed: {
        // id() {
        //     return this.$route.params.id
        // },
        personne() {
            return this.personnes.find(elt => elt.id == this.id)
        }

    }
}
</script>

<template>
    <p>Personne demandée : {{ $route.params.id }} : {{ id }}</p>
    <ul>
        <li>{{ personne.age }}</li>
        <li>{{ personne.prenom }}</li>
        <li>{{ personne.nom }}</li>
    </ul>
</template>