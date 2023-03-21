<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        adresse(){
       return this.$route.query
        }
    }
}
</script>

<template>
    <p>Personne demandée : {{ $route.query.id }} : {{ id }}</p>
    <ul>
        <li>{{ adresse.rue}}</li>
        <li>{{ adresse.ville}}</li>
        <li>{{ adresse.codePostal}}</li>
    </ul>
</template>