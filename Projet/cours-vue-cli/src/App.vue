<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p> Nom recu de l'enfant {{ nom }}</p>
 <HelloWorld @envoyer="afficherNom"> 
  <template #default> Wick</template>
  <template  #prenom> john </template>
</HelloWorld >

<HelloWorld ville="Marseille" />


<PrimeurComponent></PrimeurComponent>
 
</template>

<script>
 import HelloWorld from './components/HelloWorld.vue'
 import PrimeurComponent from '@/components/Primeur.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PrimeurComponent
  },
  data(){
    return {
      nom :null
    }
  },
  methods : {
    afficherNom (data) {
      this.nom = data
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
