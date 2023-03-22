<template lang="">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name : 'about'}">About</router-link>  |
    <router-link to="/personne">personne</router-link> |
    <router-link to="/primeur"> primeur</router-link> |
    <router-link to="/reactive">reactive</router-link>  |
    <router-link to="/compteur">Compteur (API Composition)</router-link> |
    <router-link to="/adresse?rue=paradis&ville=marseille&codePostal=13006">adresse</router-link> |
    
  </nav>
</template>
<script>
export default {};
</script>
<style lang=""></style>
