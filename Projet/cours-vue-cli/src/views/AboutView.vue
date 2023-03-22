<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p> Nom recu de l'enfant {{ nom }}</p>
 <HelloWorld @envoyer="afficherNom"> 
  <template #default> Wick</template>
  <template  #prenom> john </template>
</HelloWorld >

<HelloWorld ville="Marseille" />


<PrimeurComponent></PrimeurComponent>
<ReactiveValue></ReactiveValue> 
<router-link :to="{ name: 'adresse', query: { rue: 'paradis', ville:'Marseille', codePostal: 13006}}">
  Visitez Marseille
  </router-link>
  </div>
</template>



<script>
 import HelloWorld from '@/components/HelloWorld.vue'
 import PrimeurComponent from '@/views/PrimeurView.vue'
 import ReactiveValue from '@/views/ReactiveValueView.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PrimeurComponent,
    ReactiveValue
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